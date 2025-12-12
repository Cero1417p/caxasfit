"use client";

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/config/products";
import { getProductIdFromSlug } from "@/utils/slug";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StarRating } from "@/components/StarRating";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { Heart, Plus, Minus, ShoppingCart, ChevronLeft, Package } from "lucide-react";
import { motion } from "framer-motion";

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
    const resolvedParams = use(params);
    const productId = getProductIdFromSlug(resolvedParams.slug);
    const product = products.find((p) => p.id === productId);

    const { addToCart } = useCart();
    const { isFavorite, toggleFavorite } = useFavorites();

    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [imageError, setImageError] = useState(false);
    const [justAdded, setJustAdded] = useState(false);

    if (!product) {
        return (
            <>
                <Header />
                <main className="flex-1 container mx-auto px-4 py-16 text-center">
                    <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
                    <Link href="/#productos" className="text-primary hover:underline">
                        Volver al catálogo
                    </Link>
                </main>
                <Footer />
            </>
        );
    }

    const selectedVariant = product.variants[selectedVariantIndex];
    const favorite = isFavorite(product.id);

    const handleAddToCart = () => {
        addToCart(product.id, selectedVariantIndex, quantity);
        setJustAdded(true);
        setTimeout(() => setJustAdded(false), 2000);
    };

    const incrementQuantity = () => setQuantity((prev) => prev + 1);
    const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <>

            <main className="flex-1 bg-background">
                {/* Back Button */}
                <div className="container mx-auto px-4 py-4">
                    <Link
                        href="/#productos"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        <span>Volver al catálogo</span>
                    </Link>
                </div>

                <div className="container mx-auto px-4 py-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Product Image */}
                        <div className="relative">
                            <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden shadow-xl">
                                {selectedVariant.image && !imageError ? (
                                    <Image
                                        src={selectedVariant.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        priority
                                        onError={() => setImageError(true)}
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                        <div className="text-center p-8">
                                            <Package className="w-24 h-24 mx-auto mb-4 opacity-50" />
                                            <p className="text-lg font-medium">{product.name}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                    {product.category}
                                </div>

                                {/* Favorite Button */}
                                <button
                                    onClick={() => toggleFavorite(product.id)}
                                    className="absolute top-4 right-4 p-3 rounded-full bg-white/90 dark:bg-black/50 backdrop-blur-sm hover:bg-white dark:hover:bg-black/70 transition-all hover:scale-110 shadow-lg"
                                    aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
                                >
                                    <Heart
                                        className={`w-6 h-6 transition-colors ${favorite ? "fill-red-500 text-red-500" : "text-gray-600 dark:text-gray-300"
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col space-y-6">
                            {/* Brand */}
                            <div className="text-sm font-bold text-primary uppercase tracking-widest">
                                {product.brand}
                            </div>

                            {/* Product Name */}
                            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">{product.name}</h1>

                            {/* Star Rating */}
                            <div className="flex items-center gap-4">
                                <StarRating rating={4.5} size="lg" showCount count={128} />
                            </div>

                            {/* Price */}
                            <div className="text-4xl sm:text-5xl font-extrabold gradient-text py-2">
                                S/ {selectedVariant.price_public.toFixed(2)}
                            </div>

                            {/* Description */}
                            <div className="prose prose-sm max-w-none">
                                <p className="text-muted-foreground leading-relaxed">
                                    {product.name} de {product.brand} es un suplemento de alta calidad diseñado para ayudarte a alcanzar
                                    tus objetivos de fitness. Formulado con los mejores ingredientes para máximos resultados.
                                </p>
                            </div>

                            {/* Variant Selector */}
                            {product.variants.length > 1 && (
                                <div className="space-y-3">
                                    <label className="text-sm font-semibold">Selecciona tu opción:</label>
                                    <div className="grid grid-cols-1 gap-3">
                                        {product.variants.map((variant, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedVariantIndex(index)}
                                                className={`flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all ${selectedVariantIndex === index
                                                    ? "border-primary bg-primary/10 shadow-md"
                                                    : "border-border hover:border-primary/50 hover:bg-muted/50"
                                                    }`}
                                            >
                                                <div className="text-left">
                                                    <div className="font-semibold">{variant.content}</div>
                                                    <div className="text-sm text-muted-foreground">{variant.flavor}</div>
                                                </div>
                                                <div className="font-bold">S/ {variant.price_public.toFixed(2)}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Variant Details (for single variant) */}
                            {product.variants.length === 1 && (
                                <div className="bg-muted/50 rounded-xl p-4 space-y-2">
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="font-semibold">Contenido:</span>
                                        <span>{selectedVariant.content}</span>
                                    </div>
                                    {selectedVariant.flavor !== "Standard" && selectedVariant.flavor !== "Unflavored" && (
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="font-semibold">Sabor:</span>
                                            <span>{selectedVariant.flavor}</span>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Quantity Selector */}
                            <div className="space-y-3">
                                <label className="text-sm font-semibold">Cantidad:</label>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={decrementQuantity}
                                        className="p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                                        aria-label="Decrease quantity"
                                    >
                                        <Minus className="w-5 h-5" />
                                    </button>
                                    <span className="text-2xl font-bold min-w-12 text-center">{quantity}</span>
                                    <button
                                        onClick={incrementQuantity}
                                        className="p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                                        aria-label="Increase quantity"
                                    >
                                        <Plus className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Add to Cart Button */}
                            <motion.button
                                onClick={handleAddToCart}
                                animate={justAdded ? { scale: [1, 1.05, 1] } : {}}
                                transition={{ duration: 0.3 }}
                                className="w-full py-4 px-6 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                <ShoppingCart className="w-6 h-6" />
                                {justAdded ? "¡Agregado al carrito!" : "Agregar al Carrito"}
                            </motion.button>

                            {/* Product Info */}
                            <div className="border-t border-border pt-6 space-y-3 text-sm">
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Categoría:</span>
                                    <span className="font-semibold">{product.category}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Marca:</span>
                                    <span className="font-semibold">{product.brand}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Código:</span>
                                    <span className="font-semibold">#{product.id}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
