import { Product } from "@/config/products";

/**
 * Generate a URL-safe slug from product
 * Format: {id}-{name}
 */
export function generateSlug(product: Product): string {
    const namePart = product.name
        .toLowerCase()
        .normalize("NFD") // Decompose accented characters
        .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
        .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
        .replace(/^-+|-+$/g, ""); // Trim hyphens from start/end

    return `${product.id}-${namePart}`;
}

/**
 * Extract product ID from slug
 */
export function getProductIdFromSlug(slug: string): string {
    return slug.split("-")[0];
}
