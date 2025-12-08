"use client";

import { useState, useEffect } from "react";
import { Filter, X } from "lucide-react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

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
    filteredCount,
}: CategoryFilterProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Disable body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen]);

    return (
        <div className="mb-8 lg:mb-12 px-4">
            {/* Desktop View - Inline Chips */}
            <div className="hidden md:flex flex-wrap justify-center gap-3 animate-fade-in">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onToggleCategory(category)}
                        className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 text-base ${(category === "Todos" && selectedCategories.length === 0) ||
                            selectedCategories.includes(category)
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
                    className="w-full flex items-center justify-between px-6 py-4 bg-muted/50 rounded-xl border border-border/50 shadow-sm hover:bg-muted/70 active:scale-[0.98] transition-all"
                >
                    <span className="font-semibold text-lg">Categorías</span>
                    <div className="flex items-center gap-2 text-primary">
                        <span className="text-sm font-medium">
                            {selectedCategories.length === 0
                                ? "Todos"
                                : `${selectedCategories.length} seleccionados`}
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
                                onClick={() => onToggleCategory(category)}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                            >
                                {category}
                                <X className="w-3.5 h-3.5" />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Mobile Filter Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60"
                            onClick={() => setIsModalOpen(false)}
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{
                                duration: 0.25
                            }}
                            drag="y"
                            dragConstraints={{ top: 0, bottom: 0 }}
                            dragElastic={{ top: 0, bottom: 0.5 }}
                            onDragEnd={(_, info: PanInfo) => {
                                if (info.offset.y > 100 || info.velocity.y > 500) {
                                    setIsModalOpen(false);
                                }
                            }}
                            className="relative w-full max-w-lg bg-card border-t sm:border border-border rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col z-[60]"
                        >
                            {/* Drag Handle (Mobile only) */}
                            <div className="w-12 h-1.5 bg-muted-foreground/20 rounded-full mx-auto mt-3 mb-1 sm:hidden" />

                            {/* Header */}
                            <div className="flex items-center justify-between p-6 pt-2 sm:pt-6 border-b border-border">
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
                                        const isSelected =
                                            (category === "Todos" && selectedCategories.length === 0) ||
                                            selectedCategories.includes(category);
                                        return (
                                            <button
                                                key={category}
                                                onClick={() => onToggleCategory(category)}
                                                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 w-full sm:w-auto justify-between sm:justify-center border ${isSelected
                                                    ? "bg-primary/10 border-primary text-primary shadow-sm"
                                                    : "bg-muted/30 border-transparent text-muted-foreground hover:bg-muted/50 hover:border-border/50"
                                                    }`}
                                            >
                                                <span>{category}</span>
                                                {isSelected && (
                                                    <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-sm" />
                                                )}
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
                                    Ver {filteredCount} Productos
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
