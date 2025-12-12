"use client";

import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function ProductSearch() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const searchParam = searchParams.get("search") || "";
    const [searchQuery, setSearchQuery] = useState(searchParam);

    /* Handlers */
    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);

        const params = new URLSearchParams(searchParams.toString());
        if (query.trim()) {
            params.set("search", query);
            params.delete("category"); // Clear categories when searching
        } else {
            params.delete("search");
        }
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const onClear = () => {
        setSearchQuery("");
        const params = new URLSearchParams(searchParams.toString());
        params.delete("search");
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.currentTarget.blur();
        }
    };

    useEffect(() => {
        setSearchQuery(searchParam);
    }, [searchParam]);

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
