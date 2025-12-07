"use client";

import { useState, useEffect } from "react";
import { products } from "@/config/products";
import { ProductCard } from "./ProductCard";
import { Filter, X } from "lucide-react";

export function ProductCatalog() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

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

        {/* Category Selection - Responsive */}
        <div className="mb-8 lg:mb-12 px-4">
          {/* Desktop View - Inline Chips */}
          <div className="hidden md:flex flex-wrap justify-center gap-3 animate-fade-in">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 text-base ${(category === "Todos" && selectedCategories.length === 0) || selectedCategories.includes(category)
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile View - Filter Button + Dialog */}
          <div className="md:hidden flex flex-col gap-4">
            {/* Filter Trigger Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full flex items-center justify-between px-6 py-4 bg-muted/50 rounded-xl border border-border/50 backdrop-blur-sm shadow-sm hover:bg-muted/70 active:scale-[0.98] transition-all"
            >
              <span className="font-semibold text-lg">Categorías</span>
              <div className="flex items-center gap-2 text-primary">
                <span className="text-sm font-medium">
                  {selectedCategories.length === 0 ? "Todos" : `${selectedCategories.length} seleccionados`}
                </span>
                <Filter className="w-5 h-5" />
              </div>
            </button>

            {/* Selected Filters Preview - Removable Chips */}
            {selectedCategories.length > 0 && (
              <div className="flex flex-wrap gap-2 animate-fade-in">
                {selectedCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {category}
                    <X className="w-3.5 h-3.5" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filter Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-lg bg-card border-t sm:border border-border rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden animate-slide-in-right sm:animate-fade-in max-h-[85vh] flex flex-col z-[60]">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h3 className="text-xl font-bold">Filtrar por Categoría</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Body - Choice Chips */}
              <div className="p-6 overflow-y-auto flex-1">
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => {
                    const isSelected = (category === "Todos" && selectedCategories.length === 0) || selectedCategories.includes(category);
                    return (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 w-full sm:w-auto justify-between sm:justify-center border ${isSelected
                            ? "bg-primary/10 border-primary text-primary shadow-sm"
                            : "bg-muted/30 border-transparent text-muted-foreground hover:bg-muted/50 hover:border-border/50"
                          }`}
                      >
                        <span>{category}</span>
                        {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-sm" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Footer - Apply Button */}
              <div className="p-6 border-t border-border bg-muted/20">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  Ver {filteredProducts.length} Productos
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
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
