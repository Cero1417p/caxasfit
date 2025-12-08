import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/next"
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { CartProvider } from "@/contexts/CartContext";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CaxaFit - Tu tienda de suplementos en Cajamarca",
  description: "Los mejores suplementos deportivos con entrega inmediata en Cajamarca. Proteínas, creatinas, quemadores y más.",
  keywords: ["suplementos", "cajamarca", "proteínas", "creatinas", "fitness", "gym"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <FavoritesProvider>
            <CartProvider>
              {children}
              <Toaster position="top-center" richColors />
            </CartProvider>
          </FavoritesProvider>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}

