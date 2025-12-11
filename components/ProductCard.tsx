"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/config/products";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { generateSlug } from "@/utils/slug";
import { StarRating } from "./StarRating";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  // Use first variant for card display
  const firstVariant = product.variants[0];
  const slug = generateSlug(product);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, 0, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Link href={`/productos/${slug}`}>
      <div className="group relative bg-card overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1  cursor-pointer">
        {/* Product Image */}
        <div className="rounded-sm relative h-48 sm:h-56 bg-muted overflow-hidden">
          {firstVariant.image && !imageError ? (
            <Image
              src={firstVariant.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <div className="text-center p-4">
                <p className="text-sm font-medium line-clamp-2">{product.name}</p>
              </div>
            </div>
          )}

          

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />


          {/*
          <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {product.category}
          </div>
          */}

        </div>

        {/* Product Info */}
        <div className=" py-2 sm:p-4 space-y-1 sm:space-y-2">
          
          {/* Product Name */}
          <h3 className="text-xs sm:text-lg line-clamp-2 leading-tight">
            {product.name}
          </h3>

          {/* Price */}
          <div>
            <StarRating rating={5} size="xs"/>
          </div>

          {/* Brand */}
          <div className="text-xs font-bold text-primary uppercase tracking-wider">
            {product.brand}
          </div>

          

          {/* Variant Content */}
          <div className="text-sm text-muted-foreground font-medium">
            {firstVariant.content}
            {product.variants.length > 1 && (
              <span className="ml-1 text-primary">+{product.variants.length - 1} más</span>
            )}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              S/<div className="text-lg font-bold">{firstVariant.price_public.toFixed(2)}
              </div>
            </div>
            <div>
              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className={`p-2 rounded-xl backdrop-blur-sm transition-all hover:scale-110 z-10 shadow-lg flex items-center justify-center ${isAdded
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "border text-primary-foreground hover:bg-primary/90"
                  }`}
                aria-label={isAdded ? "Added to cart" : "Add to cart"}
              >
                {isAdded ? (
                  <Check className="w-4 h-4 animate-in zoom-in spin-in-50 duration-300" />
                ) : (
                  <ShoppingCart className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
