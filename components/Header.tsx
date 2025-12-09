"use client";

import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "@/contexts/CartContext";


export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartCount } = useCart();

  const cartCount = getCartCount();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 glass`}
      >
        <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button - Left */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-muted transition-colors flex items-center justify-center"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl sm:text-2xl font-bold gradient-text hover:scale-105 transition-transform flex items-center"
            >
              {siteConfig.site.name}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <button
                onClick={() => scrollToSection("productos")}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base flex items-center h-full"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base flex items-center h-full"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base flex items-center h-full"
              >
                Preguntas Frecuentes
              </button>

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

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 py-4 space-y-2 animate-fade-in">
              <button
                onClick={() => scrollToSection("productos")}
                className="block w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors font-medium"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="block w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors font-medium"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors font-medium"
              >
                Preguntas Frecuentes
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
