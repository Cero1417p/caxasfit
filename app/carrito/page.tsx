"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/config/products";
import { generateCartWhatsAppURL } from "@/utils/whatsapp";
import { Trash2, Plus, Minus, Tag, MessageCircle, ShoppingBag, ArrowLeft, AlertTriangle, X } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export default function CarritoPage() {
    const router = useRouter();
    const { cart, updateQuantity, removeFromCart, clearCart, subtotal, shipping, total, applyPromoCode, promoCode } =
        useCart();
    const [promoInput, setPromoInput] = useState("");
    const [promoError, setPromoError] = useState("");
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleApplyPromo = () => {
        if (!promoInput.trim()) {
            setPromoError("Ingresa un código promocional");
            return;
        }

        const success = applyPromoCode(promoInput);
        if (success) {
            setPromoError("");
        } else {
            setPromoError("Código inválido");
        }
    };

    const handleCheckoutClick = () => {
        setShowConfirmation(true);
    };

    const confirmCheckout = () => {
        // 1. Open WhatsApp
        const url = generateCartWhatsAppURL(cart, subtotal, shipping, total, promoCode);
        window.open(url, "_blank");

        // 2. Show success message
        toast.success("¡Pedido iniciado con éxito! Gracias por tu compra.");

        // 3. Clear cart
        clearCart();

        // 4. Redirect to home
        router.push("/");
    };

    if (cart.length === 0) {
        return (
            <>
                <main className="flex-1 container mx-auto px-4 py-16">
                    <div className="max-w-md mx-auto text-center space-y-6">
                        <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground opacity-50" />
                        <h1 className="text-3xl font-bold">Tu carrito está vacío</h1>
                        <p className="text-muted-foreground">
                            Agrega productos a tu carrito para continuar con tu compra
                        </p>
                        <Link
                            href="/#productos"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Ver productos
                        </Link>
                    </div>
                </main>
            </>
        );
    }

    return (
        <>
            <main className="flex-1 bg-background relative">
                <div className="container mx-auto px-4 py-8 max-w-4xl">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-3xl sm:text-4xl font-bold">Tu Carrito</h1>
                        <button
                            onClick={clearCart}
                            className="text-sm text-muted-foreground hover:text-destructive transition-colors flex items-center gap-2"
                        >
                            <Trash2 className="w-4 h-4" />
                            Vaciar carrito
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-4">
                            {cart.map((item) => {
                                const product = products.find((p) => p.id === item.productId);
                                if (!product) return null;

                                const variant = product.variants[item.variantIndex];
                                if (!variant) return null;

                                const itemTotal = variant.price_public * item.quantity;

                                return (
                                    <div
                                        key={item.id}
                                        className="flex gap-4 bg-card rounded-xl p-4 border border-border shadow-sm"
                                    >
                                        {/* Product Image */}
                                        <div className="relative w-24 h-24 bg-muted rounded-lg overflow-hidden shrink-0 self-center">
                                            {variant.image ? (
                                                <Image
                                                    src={variant.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="96px"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                                    <ShoppingBag className="w-8 h-8" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Content Rows */}
                                        <div className="flex-1 flex flex-col justify-between gap-2">
                                            {/* Row 1: Name & Remove */}
                                            <div className="flex items-start justify-between gap-2">
                                                <h3 className="font-bold text-base sm:text-lg line-clamp-1">{product.name}</h3>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-muted-foreground hover:text-destructive transition-colors p-1"
                                                    aria-label="Eliminar producto"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>

                                            {/* Row 2: Brand & Quantity */}
                                            <div className="flex items-center justify-between gap-2">
                                                <p className="text-sm font-medium text-primary uppercase tracking-wide">{product.brand}</p>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:bg-background rounded-md transition-colors"
                                                        aria-label="Disminuir cantidad"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="w-4 text-center font-semibold text-sm">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:bg-background rounded-md transition-colors"
                                                        aria-label="Aumentar cantidad"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Row 3: Variant Info & Total */}
                                            <div className="flex items-center justify-between gap-2">
                                                <div className="text-xs text-muted-foreground hidden sm:block">
                                                    {variant.content} • {variant.flavor}
                                                </div>
                                                <div className="text-lg font-bold gradient-text">S/ {itemTotal.toFixed(2)}</div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-4 space-y-4">
                                {/* Promo Code */}
                                <div className="bg-card rounded-xl p-6 border border-border shadow-sm space-y-4">
                                    <h3 className="font-semibold flex items-center gap-2">
                                        <Tag className="w-5 h-5" />
                                        Código Promocional
                                    </h3>

                                    {promoCode ? (
                                        <div className="flex items-center justify-between px-4 py-3 bg-primary/10 text-primary rounded-lg">
                                            <span className="font-semibold">{promoCode}</span>
                                            <button
                                                onClick={() => {
                                                    applyPromoCode("");
                                                    setPromoInput("");
                                                }}
                                                className="text-sm hover:underline"
                                            >
                                                Remover
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="space-y-2">
                                            <input
                                                type="text"
                                                value={promoInput}
                                                onChange={(e) => {
                                                    setPromoInput(e.target.value.toUpperCase());
                                                    setPromoError("");
                                                }}
                                                placeholder="Código promocional"
                                                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                                            />
                                            {promoError && <p className="text-sm text-destructive">{promoError}</p>}
                                        </div>
                                    )}
                                </div>

                                {/* Summary */}
                                <div className="bg-card rounded-xl p-6 border border-border shadow-sm space-y-4">
                                    <h3 className="font-semibold text-lg">Resumen del Pedido</h3>

                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Subtotal</span>
                                            <span className="font-semibold">S/ {subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Envío</span>
                                            <span className="font-semibold text-success">Gratis</span>
                                        </div>
                                        <div className="border-t border-border pt-3 flex justify-between text-lg">
                                            <span className="font-bold">Total</span>
                                            <span className="font-bold gradient-text">S/ {total.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    {/* Checkout Button */}
                                    <button
                                        onClick={handleCheckoutClick}
                                        className="w-full py-4 bg-gradient-to-r from-warning to-warning/80 hover:from-warning/90 hover:to-warning/90 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Hacer Pedido por WhatsApp
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Confirmation Modal */}
                <AnimatePresence>
                    {showConfirmation && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setShowConfirmation(false)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            />

                            {/* Modal */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative bg-card border border-border rounded-2xl shadow-2xl p-6 max-w-sm w-full z-10"
                            >
                                <button
                                    onClick={() => setShowConfirmation(false)}
                                    className="absolute top-4 right-4 p-1 hover:bg-muted rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-muted-foreground" />
                                </button>

                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center text-warning mb-2">
                                        <AlertTriangle className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-xl font-bold">¿Confirmar Pedido?</h3>

                                    <p className="text-muted-foreground text-sm">
                                        Serás redirigido a WhatsApp para enviar el detalle de tu pedido y completar la compra.
                                    </p>

                                    <div className="flex gap-3 w-full pt-2">
                                        <button
                                            onClick={() => setShowConfirmation(false)}
                                            className="flex-1 py-2.5 px-4 bg-muted hover:bg-muted/80 rounded-xl font-medium transition-colors"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            onClick={confirmCheckout}
                                            className="flex-1 py-2.5 px-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-bold shadow-md transition-colors"
                                        >
                                            Sí, confirmar
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </main>
        </>
    );
}
