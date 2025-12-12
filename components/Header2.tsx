"use client";

import { useState } from "react";
import { Home, ShoppingCart } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";
import { ProductSearch } from "./ProductSearch";


export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartCount } = useCart();

  const cartCount = getCartCount();

 

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 glass max-h-[66px]`}
      >
        <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">


            {/* Logo */}
            <Link
              href="/"
              className="text-2xl sm:text-2xl font-bold gradient-text hover:scale-105 transition-transform flex items-center mouse-pointer hidden sm:block"
            >
              {siteConfig.site.name}
            </Link>

            <div className="md:hidden mr-2">
              <Link href="/">
                <Home />
              </Link>
            </div>

            <div>
              <ProductSearch />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-lg hover:bg-muted transition-colors flex items-center justify-center"
                aria-label="Abrir carrito"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Cart Button - Right */}
            <div className="md:hidden">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-lg hover:bg-muted transition-colors flex items-center justify-center"
                aria-label="Abrir carrito"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

        </nav>
      </header>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
