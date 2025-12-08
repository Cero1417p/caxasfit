"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface FavoritesContextType {
    favorites: string[];
    addFavorite: (productId: string) => void;
    removeFavorite: (productId: string) => void;
    isFavorite: (productId: string) => boolean;
    toggleFavorite: (productId: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
    const [favorites, setFavorites] = useState<string[]>([]);
    const [isHydrated, setIsHydrated] = useState(false);

    // Load favorites from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem("caxasfit-favorites");
        if (stored) {
            try {
                setFavorites(JSON.parse(stored));
            } catch (error) {
                console.error("Failed to parse favorites from localStorage:", error);
            }
        }
        setIsHydrated(true);
    }, []);

    // Save favorites to localStorage whenever they change
    useEffect(() => {
        if (isHydrated) {
            localStorage.setItem("caxasfit-favorites", JSON.stringify(favorites));
        }
    }, [favorites, isHydrated]);

    const addFavorite = (productId: string) => {
        setFavorites((prev) => {
            if (prev.includes(productId)) return prev;
            return [...prev, productId];
        });
    };

    const removeFavorite = (productId: string) => {
        setFavorites((prev) => prev.filter((id) => id !== productId));
    };

    const isFavorite = (productId: string) => {
        return favorites.includes(productId);
    };

    const toggleFavorite = (productId: string) => {
        if (isFavorite(productId)) {
            removeFavorite(productId);
        } else {
            addFavorite(productId);
        }
    };

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites must be used within FavoritesProvider");
    }
    return context;
}
