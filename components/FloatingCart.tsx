"use client";

import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function FloatingCart() {
    const { cart, getCartCount } = useCart();
    const [justAdded, setJustAdded] = useState(false);
    const [prevCount, setPrevCount] = useState(0);

    const cartCount = getCartCount();

    // Trigger shake animation when items are added
    useEffect(() => {
        if (cartCount > prevCount && prevCount > 0) {
            setJustAdded(true);
            const timer = setTimeout(() => setJustAdded(false), 600);
            return () => clearTimeout(timer);
        }
        setPrevCount(cartCount);
    }, [cartCount, prevCount]);

    // Don't show if cart is empty
    if (cartCount === 0) return null;

    return (
        <AnimatePresence>
            <Link href="/carrito">
                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                        justAdded
                            ? { scale: 1, opacity: 1, x: [0, -10, 10, -10, 10, 0] }
                            : { scale: 1, opacity: 1 }
                    }
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: justAdded ? 0.5 : 0.3 }}
                    className="fixed bottom-25 right-6 z-50 w-16 h-16 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer group"
                    aria-label="View shopping cart"
                >
                    <ShoppingCart className="w-7 h-7 group-hover:scale-110 transition-transform" />

                    {/* Badge with item count */}
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-warning text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                        {cartCount}
                    </span>

                    {/* Ripple Effect */}
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />
                </motion.button>
            </Link>
        </AnimatePresence>
    );
}
