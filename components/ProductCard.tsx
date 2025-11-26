"use client";

import { Product } from "@/config/site.config";
import { generateWhatsAppURL, generateProductMessage } from "@/utils/whatsapp";
import { siteConfig } from "@/config/site.config";
import { MessageCircle, Package } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const message = generateProductMessage(product);
    const url = generateWhatsAppURL(siteConfig.contact.whatsapp, message);
    window.open(url, "_blank");
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-border">
      {/* Product Image */}
      <div className="relative h-56 sm:h-64 bg-muted overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground p-4">
          <div className="text-center">
            <Package className="w-16 h-16 mx-auto mb-2 opacity-50" />
            <p className="text-sm font-medium line-clamp-2">{product.name}</p>
          </div>
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
        {/* Brand */}
        <div className="text-sm font-semibold text-primary uppercase tracking-wide">{product.brand}</div>
        
        {/* Name */}
        <h3 className="text-lg sm:text-xl font-bold line-clamp-2 min-h-[3.5rem]">{product.name}</h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{product.description}</p>
        
        {/* Price */}
        <div className="text-2xl sm:text-3xl font-bold gradient-text pt-2">
          S/ {product.price.toFixed(2)}
        </div>
        
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-full py-3 px-6 bg-gradient-to-r from-success to-success/80 hover:from-success/90 hover:to-success/70 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base mt-4"
        >
          <MessageCircle className="w-5 h-5" />
          Pedir por WhatsApp
        </button>
      </div>
    </div>
  );
}
