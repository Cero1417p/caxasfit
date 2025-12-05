"use client";

import { useState } from "react";
import { Product } from "@/config/products";
import { generateWhatsAppURL, generateProductMessage } from "@/utils/whatsapp";
import { siteConfig } from "@/config/site.config";
import { MessageCircle, Package, ChevronDown } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const selectedVariant = product.variants[selectedVariantIndex];

  const handleWhatsAppClick = () => {
    const message = generateProductMessage(product, selectedVariant);
    const url = generateWhatsAppURL(siteConfig.contact.whatsapp, message);
    window.open(url, "_blank");
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-border">
      {/* Product Image */}
      <div className="relative h-56 sm:h-64 bg-muted overflow-hidden">
        {selectedVariant.image ? (
          <img src={selectedVariant.image} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground p-4">
            <div className="text-center">
              <Package className="w-16 h-16 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-medium line-clamp-2">{product.name}</p>
            </div>
          </div>
        )}
      </div>
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" >

        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
          {product.category}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
        {/* Brand */}
        <div className="text-sm font-semibold text-primary uppercase tracking-wide">
          {product.brand}
        </div>

        {/* Name */}
        <h3 className="text-lg sm:text-xl font-bold line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>

        {/* Variant Selector - Only show if multiple variants */}
        {product.variants.length > 1 && (
          <div className="relative">
            <select
              value={selectedVariantIndex}
              onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}
              className="w-full px-4 py-2 pr-10 bg-muted border border-border rounded-lg appearance-none cursor-pointer hover:bg-muted/80 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {product.variants.map((variant, index) => (
                <option key={index} value={index}>
                  {variant.content} - {variant.flavor}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          </div>
        )}

        {/* Variant Info - Show for single variant products */}
        {product.variants.length === 1 && (
          <div className="text-sm text-muted-foreground space-y-1">
            <p>📏 {selectedVariant.content}</p>
            {selectedVariant.flavor !== "Standard" && selectedVariant.flavor !== "Unflavored" && (
              <p>🍫 {selectedVariant.flavor}</p>
            )}
          </div>
        )}

        {/* Price */}
        <div className="text-2xl sm:text-3xl font-bold gradient-text pt-2">
          S/ {selectedVariant.price_public.toFixed(2)}
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
