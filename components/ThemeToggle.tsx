import { useTheme } from "@/hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Monitor, Check } from "lucide-react";

export default function ThemeToggle() {
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