"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";

export function Hero() {
  const scrollToCatalog = () => {
    const catalog = document.getElementById("productos");
    if (catalog) {
      catalog.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-bg.png"
          alt="Fitness Training"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Animated Background Gradient - Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 -z-10" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in px-4">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight px-4 text-white">
            {siteConfig.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto px-4">
            {siteConfig.hero.subtitle}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 px-4">
            <button
              onClick={scrollToCatalog}
              className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center border border-white/10"
            >
              {siteConfig.hero.ctaText}
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-8 text-sm md:text-base px-4 text-white">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <span className="text-xl text-primary">✓</span>
              <span>Entrega Inmediata</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <span className="text-xl text-primary">✓</span>
              <span>100% Originales</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <span className="text-xl text-primary">✓</span>
              <span>Pago Contra Entrega</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
}
