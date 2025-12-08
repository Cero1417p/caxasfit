"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { products } from "@/config/products";

export interface CartItem {
    id: string; // unique cart item ID (productId-variantIndex)
    productId: string;
    variantIndex: number;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (productId: string, variantIndex: number, quantity?: number) => void;
    updateQuantity: (itemId: string, quantity: number) => void;
    removeFromCart: (itemId: string) => void;
    clearCart: () => void;
    getCartCount: () => number;
    subtotal: number;
    shipping: number;
    discount: number;
    total: number;
    applyPromoCode: (code: string) => boolean;
    promoCode: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [promoCode, setPromoCode] = useState<string | null>(null);
    const [discount, setDiscount] = useState(0);
    const [isHydrated, setIsHydrated] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem("caxasfit-cart");
        if (stored) {
            try {
                setCart(JSON.parse(stored));
            } catch (error) {
                console.error("Failed to parse cart from localStorage:", error);
            }
        }
        setIsHydrated(true);
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (isHydrated) {
            localStorage.setItem("caxasfit-cart", JSON.stringify(cart));
        }
    }, [cart, isHydrated]);

    const addToCart = (productId: string, variantIndex: number, quantity: number = 1) => {
        const itemId = `${productId}-${variantIndex}`;

        setCart((prev) => {
            const existingItem = prev.find((item) => item.id === itemId);

            if (existingItem) {
                // Update quantity if item already exists
                return prev.map((item) =>
                    item.id === itemId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                // Add new item
                return [...prev, { id: itemId, productId, variantIndex, quantity }];
            }
        });
    };

    const updateQuantity = (itemId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(itemId);
            return;
        }

        setCart((prev) =>
            prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
        );
    };

    const removeFromCart = (itemId: string) => {
        setCart((prev) => prev.filter((item) => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
        setPromoCode(null);
        setDiscount(0);
    };

    const getCartCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    // Calculate subtotal
    const subtotal = cart.reduce((total, item) => {
        const product = products.find((p) => p.id === item.productId);
        if (!product) return total;

        const variant = product.variants[item.variantIndex];
        if (!variant) return total;

        return total + variant.price_public * item.quantity;
    }, 0);

    // Shipping is always free
    const shipping = 0;

    // Apply promo code (manual validation for now, sent to WhatsApp)
    const applyPromoCode = (code: string): boolean => {
        if (!code.trim()) return false;

        setPromoCode(code.toUpperCase());
        // For now, we don't validate or apply discounts
        // The promo code will be sent via WhatsApp for manual processing
        setDiscount(0);
        return true;
    };

    const total = subtotal + shipping - discount;

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                updateQuantity,
                removeFromCart,
                clearCart,
                getCartCount,
                subtotal,
                shipping,
                discount,
                total,
                applyPromoCode,
                promoCode,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
}
