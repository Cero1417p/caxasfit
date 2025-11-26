import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { ProductCatalog } from "@/components/ProductCatalog";
import { ExpertSection } from "@/components/ExpertSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <ProductCatalog />
        <ExpertSection />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

