"use client";

import { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { products } from "@/config/products";
import { ProductCard } from "./ProductCard";
import { CategoryFilter } from "./CategoryFilter2";
import { Header } from "./Header2";


export function ProductCatalog() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /* State derived from URL */
  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search") || "";

  const selectedCategories = categoryParam ? [categoryParam] : [];

  // Local state for search input to avoid input lag, sync with URL
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>("asc");

  // Sync local search state with URL param (e.g. on back button)


  // Generate unique categories from products
  const categories = ["Todos", ...Array.from(new Set(products.map((p) => p.category)))];


  const clearSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const toggleCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search"); // Clear search when selecting a category

    if (category === "Todos" || category === categoryParam) {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    const section = document.getElementById("productos");
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop, // Ajuste para el header fijo
        behavior: "smooth",
      });
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const toggleSort = () => {
    setSortOrder((prev) => {
      if (prev === null) return "asc";
      if (prev === "asc") return "desc";
      return null;
    });
  };

  /* Filtering Logic - Use derived values from URL */
  let filteredProducts = products;

  if (searchParam.trim()) {
    const query = searchParam.toLowerCase();
    filteredProducts = products.filter((p) =>
      p.name.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.variants.some((v) =>
        v.flavor.toLowerCase().includes(query) ||
        v.content.toLowerCase().includes(query)
      )
    );
  } else if (selectedCategories.length > 0) {
    filteredProducts = products.filter((p) => selectedCategories.includes(p.category));
  }

  // Sort logic
  if (sortOrder) {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      const priceA = a.variants[0]?.price_public || 0;
      const priceB = b.variants[0]?.price_public || 0;
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });
  }

  return (
    <>
      <Header />
      <main id="productos" className="pb-10 py-[64px] px-4 sm:px-6 lg:px-8">

        <div className="containe p-0 mx-auto max-w-7xl">


          {/* Sticky Controls Wrapper */}
          <div className="sticky top-[66px] z-40 bg-background/95 backdrop-blur-sm -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8  border-b border-border/50 shadow-sm transition-all">
            <div className="max-w-7xl mx-auto space-y-4">
              <CategoryFilter
                categories={categories}
                selectedCategories={selectedCategories}
                onToggleCategory={toggleCategory}
                filteredCount={filteredProducts.length}
              />
            </div>
          </div>

          <div className="flex justify-between items-center text-xs text-muted-foreground border-t pt-2">
            <div className="font-medium">
              {filteredProducts.length} {filteredProducts.length === 1 ? "Producto" : "Productos"}
            </div>
            <button
              onClick={toggleSort}
              className="inline-flex items-center border border-border gap-1 px-3 py-1 rounded-full  text-xs font-semibold hover:bg-muted hover:text-white transition-colors"
            >
              Precio {sortOrder === "asc" ? "↑" : sortOrder === "desc" ? "↓" : "-"}
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-8 mt-5">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* No Products Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                  <path d="m9 9 4 4" />
                  <path d="m13 9-4 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">No se encontraron resultados</h3>
              <p className="text-muted-foreground">
                Intenta con otros términos de búsqueda o cambia los filtros
              </p>
              {searchParam && (
                <button
                  onClick={clearSearch}
                  className="mt-4 text-primary hover:underline font-medium"
                >
                  Limpiar búsqueda
                </button>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
