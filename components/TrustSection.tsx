"use client";

import { Package, Shield, CreditCard } from "lucide-react";

export function TrustSection() {
  const benefits = [
    {
      icon: Package,
      title: "Entrega Inmediata",
      description: "Recibe hoy mismo en la puerta de tu casa o gym.",
    },
    {
      icon: Shield,
      title: "Productos Originales",
      description: "Garantía total y sellados de fábrica.",
    },
    {
      icon: CreditCard,
      title: "Pago Seguro",
      description: "Paga con Yape, Plin o Efectivo al recibir.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/50">
      <div className="container  mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 animate-pulse">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
