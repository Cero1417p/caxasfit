import { Product, products } from "@/config/products";
import { CartItem } from "@/contexts/CartContext";
import { siteConfig } from "@/config/site.config";

/**
 * Generate WhatsApp message from shopping cart
 */
export function generateCartMessage(
    cartItems: CartItem[],
    subtotal: number,
    shipping: number,
    total: number,
    promoCode?: string | null
): string {
    let message = "🛒 *Mi Pedido - CaxasFit*\n\n";

    // Add each cart item
    cartItems.forEach((item, index) => {
        const product = products.find((p) => p.id === item.productId);
        if (!product) return;

        const variant = product.variants[item.variantIndex];
        if (!variant) return;

        const itemSubtotal = variant.price_public * item.quantity;

        message += `${index + 1}. *${product.name}* - ${product.brand}\n`;
        message += `   📏 ${variant.content} | 🍫 ${variant.flavor}\n`;
        message += `   Cantidad: ${item.quantity} | S/.${variant.price_public.toFixed(2)} c/u\n`;
        message += `   Subtotal: S/.${itemSubtotal.toFixed(2)}\n\n`;
    });

    message += "---\n\n";
    message += `💰 Subtotal: S/.${subtotal.toFixed(2)}\n`;
    message += `📦 Envío: ${shipping === 0 ? "Gratis" : `S/.${shipping.toFixed(2)}`}\n`;

    if (promoCode) {
        message += `🎁 Código promo: *${promoCode}*\n`;
    }

    message += `\n✨ *Total: S/.${total.toFixed(2)}*\n\n`;
    message += "💬 Me gustaría hacer este pedido";

    return message;
}

/**
 * Generate WhatsApp URL with cart message
 */
export function generateCartWhatsAppURL(
    cartItems: CartItem[],
    subtotal: number,
    shipping: number,
    total: number,
    promoCode?: string | null
): string {
    const message = generateCartMessage(cartItems, subtotal, shipping, total, promoCode);
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=${siteConfig.contact.whatsapp}&text=${encodedMessage}`;
}


export function generateWhatsAppURL(phoneNumber: string, message: string): string {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function generateProductMessage(
    product: Product,
    variant: Product['variants'][0]
): string {
    return `Hola! Me interesa el siguiente producto:\n\n📦 *${product.name}*\n🏷️ Marca: ${product.brand}\n📏 Contenido: ${variant.content}\n🍫 Sabor: ${variant.flavor}\n💰 Precio: S/ ${variant.price_public}\n\n¿Está disponible?`;
}

export function generateConsultationMessage(expertName: string): string {
    return `Hola ${expertName}! Me gustaría recibir asesoría gratuita sobre qué suplemento es mejor para mis objetivos. ¿Podrías ayudarme?`;
}

export function generateGeneralInquiryMessage(): string {
    return `Hola! Tengo una consulta sobre sus productos.`;
}