"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon, Monitor, Check } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { useTheme } from "@/hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="w-5 h-5" />;
      case "dark":
        return <Moon className="w-5 h-5" />;
      case "system":
        return <Monitor className="w-5 h-5" />;
    }
  };

  const themes = [
    { name: "light", icon: Sun, label: "Claro" },
    { name: "dark", icon: Moon, label: "Oscuro" },
    { name: "system", icon: Monitor, label: "Sistema" },
  ] as const;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-muted transition-colors flex items-center justify-center"
        aria-label="Cambiar tema"
      >
        {getThemeIcon()}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 glass rounded-xl shadow-xl overflow-hidden border border-white/20 dark:border-white/10 z-50"
          >
            <div className="flex flex-col p-1">
              {themes.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setTheme(item.name);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${theme === item.name
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted/50 text-foreground"
                    }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="flex-1 text-left">{item.label}</span>
                  {theme === item.name && <Check className="w-3 h-3" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 glass`}
    >
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
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

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Theme Toggle - Right */}
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-2 animate-fade-in">
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
  );
}
