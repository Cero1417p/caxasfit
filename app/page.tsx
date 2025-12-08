import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCatalog } from "@/components/ProductCatalog";
import { ExpertSection } from "@/components/ExpertSection";
import { TrustSection } from "@/components/TrustSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { FloatingCart } from "@/components/FloatingCart";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductCatalog />
        <ExpertSection />
        <TrustSection />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingCart />
    </>
  );
}
