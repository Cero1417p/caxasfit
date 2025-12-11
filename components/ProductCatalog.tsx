"use client";

import { useState, type ChangeEvent } from "react";
import { products } from "@/config/products";
import { ProductCard } from "./ProductCard";
import { CategoryFilter } from "./CategoryFilter2";
import { ProductSearch } from "./ProductSearch";


export function ProductCatalog() {
  /* State */
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Generate unique categories from products
  const categories = ["Todos", ...Array.from(new Set(products.map((p) => p.category)))];

  /* Handlers */
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() !== "") {
      setSelectedCategories([]); // Clear categories when searching
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const toggleCategory = (category: string) => {
    setSearchQuery(""); // Clear search when selecting a category

    if (category === "Todos") {
      setSelectedCategories([]);
    } else {
      setSelectedCategories((prev) =>
        prev.includes(category) ? [] : [category]
      );
    }

    const section = document.getElementById("productos");
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop + 60, // Ajuste para el header fijo
        behavior: "smooth",
      });
    }
  };

  /* Filtering Logic */
  let filteredProducts = products;

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
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

  return (
    <section id="productos" className="pb-10 pt-5 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center lg:mb-5 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Nuestro <span className="gradient-text">Catálogo</span>
          </h2>
          {/*
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Los mejores suplementos para alcanzar tus objetivos
          </p>
          */}
        </div>

        <div className="mt-4">
          <ProductSearch
            searchQuery={searchQuery}
            onSearchChange={handleSearch}
            onClear={clearSearch}
          />
        </div>

        {/* Sticky Controls Wrapper */}
        <div className="sticky top-[65px] z-40 bg-background/95 backdrop-blur-sm -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8  border-b border-border/50 shadow-sm transition-all">
          <div className="max-w-7xl mx-auto">
            <CategoryFilter
              categories={categories}
              selectedCategories={selectedCategories}
              onToggleCategory={toggleCategory}
              filteredCount={filteredProducts.length}
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mt-8">
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
            {searchQuery && (
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
    </section>
  );
}
