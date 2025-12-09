"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
  filteredCount: number;
}

export function CategoryFilter({
  categories,
  selectedCategories,
  onToggleCategory,
}: CategoryFilterProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Efecto opcional: Si seleccionas una categoría, haz scroll suave hacia ella (UX básica)
  useEffect(() => {
    if (scrollContainerRef.current) {
      // Lógica simple para asegurar que el contenedor esté listo
    }
  }, []);

  return (
    <div className="w-full">
      {/* Contenedor de Scroll Horizontal
        - overflow-x-auto: Habilita scroll horizontal.
        - [&::-webkit-scrollbar]:hidden: Sintaxis de Tailwind para ocultar scrollbar en Chrome/Safari.
        - [-ms-overflow-style:'none']: Ocultar en IE/Edge.
        - [scrollbar-width:'none']: Ocultar en Firefox.
      */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto py-4 px-1 gap-3 w-full md:flex-wrap md:justify-center md:overflow-visible items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
      >
        {categories.map((category) => {
          const isSelected =
            (category === "Todos" && selectedCategories.length === 0) ||
            selectedCategories.includes(category);

          return (
            <motion.button
              key={category}
              onClick={() => onToggleCategory(category)}
              whileTap={{ scale: 0.95 }}
              // Nota: Usa comillas invertidas (backticks) para permitir saltos de línea en className si lo deseas, 
              // pero aquí lo he dejado todo junto para evitar errores de copiado.
              className={`relative px-5 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap border transition-colors duration-200 flex-shrink-0 ${isSelected
                ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105"
                : "bg-black text-muted-foreground hover:bg-muted/80 hover:scale-105"
                }`}
            >
              {category}

              {/* Punto indicador (opcional) */}
              {isSelected && category !== "Todos" && (
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-background"
                />
              )}
            </motion.button>
          );
        })}
      </div>

    </div>
  );
}