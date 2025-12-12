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
    <div className="w-full mb-0">
      {/* Contenedor de Scroll Horizontal
        - overflow-x-auto: Habilita scroll horizontal.
        - [&::-webkit-scrollbar]:hidden: Sintaxis de Tailwind para ocultar scrollbar en Chrome/Safari.
        - [-ms-overflow-style:'none']: Ocultar en IE/Edge.
        - [scrollbar-width:'none']: Ocultar en Firefox.
      */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto md:py-4 pr-1 gap-6 w-full items-center 
             [&::-webkit-scrollbar]:hidden 
             [-ms-overflow-style:'none'] 
             [scrollbar-width:'none']"
      >
        {categories.map((category) => {
          const isSelected =
            (category === "Todos" && selectedCategories.length === 0) ||
            selectedCategories.includes(category);

          return (
            <div key={category} className="relative flex flex-col items-center shrink-0 ">
              <motion.button
                onClick={() => onToggleCategory(category)}
                whileTap={{ scale: 0.95 }}
                className={`py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${isSelected
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {category}
              </motion.button>
              {isSelected && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 w-6 mx-auto h-[3px] bg-primary rounded-t-full"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}