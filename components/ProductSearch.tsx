"use client";

import { ChangeEvent, KeyboardEvent } from "react";
import { Search, X } from "lucide-react";

interface ProductSearchProps {
    searchQuery: string;
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClear: () => void;
}

export function ProductSearch({ searchQuery, onSearchChange, onClear }: ProductSearchProps) {
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.currentTarget.blur();
        }
    };

    return (
        <div className="max-w-md mx-auto relative">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar productos, marcas..."
                    value={searchQuery}
                    onChange={onSearchChange}
                    onKeyDown={handleKeyDown}
                    className="w-full pl-12 pr-12 py-3 bg-background border border-border rounded-full shadow-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <Search />
                </div>
                {searchQuery && (
                    <button
                        onClick={onClear}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Limpiar búsqueda"
                    >
                        <X />
                    </button>
                )}
            </div>
        </div>
    );
}
