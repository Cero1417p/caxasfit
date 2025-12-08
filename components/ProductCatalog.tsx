"use client";

import { useState } from "react";
import { products } from "@/config/products";
import { ProductCard } from "./ProductCard";
import { CategoryFilter } from "./CategoryFilter";

export function ProductCatalog() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Generate unique categories from products
  const categories = ["Todos", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((p) => selectedCategories.includes(p.category));

  const toggleCategory = (category: string) => {
    if (category === "Todos") {
      setSelectedCategories([]);
    } else {
      setSelectedCategories((prev) =>
        prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
      );
    }
  };

  return (
    <section id="productos" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Nuestro <span className="gradient-text">Catálogo</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Los mejores suplementos para alcanzar tus objetivos
          </p>
        </div>

        {/* Category Filter Component */}
        <CategoryFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onToggleCategory={toggleCategory}
          filteredCount={filteredProducts.length}
        />

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No hay productos en esta categoría
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
