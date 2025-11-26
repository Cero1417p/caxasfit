import { Product } from "@/config/site.config";

export function generateWhatsAppURL(phoneNumber: string, message: string): string {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function generateProductMessage(product: Product): string {
    return `Hola! Me interesa el siguiente producto:\n\n📦 *${product.name}*\n🏷️ Marca: ${product.brand}\n💰 Precio: S/ ${product.price}\n\n¿Está disponible?`;
}

export function generateConsultationMessage(expertName: string): string {
    return `Hola ${expertName}! Me gustaría recibir asesoría gratuita sobre qué suplemento es mejor para mis objetivos. ¿Podrías ayudarme?`;
}

export function generateGeneralInquiryMessage(): string {
    return `Hola! Tengo una consulta sobre sus productos.`;
}
