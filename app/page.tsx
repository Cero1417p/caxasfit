import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ExpertSection } from "@/components/ExpertSection";
import { TrustSection } from "@/components/TrustSection";
import { FAQ } from "@/components/FAQ";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustSection />
        <ExpertSection />
        <FAQ />
      </main>
      <FloatingWhatsApp />
    </>
  );
}
