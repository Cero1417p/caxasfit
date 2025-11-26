"use client";

import { MessageCircle, Award } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { generateWhatsAppURL, generateConsultationMessage } from "@/utils/whatsapp";

export function ExpertSection() {
  const handleConsultationClick = () => {
    const message = generateConsultationMessage(siteConfig.expert.name);
    const url = generateWhatsAppURL(siteConfig.expert.whatsapp, message);
    window.open(url, "_blank");
  };

  return (
    <section id="nosotros" className="py-16 sm:py-20 lg:py-24 bg-muted/50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Expert Photo */}
            <div className="relative animate-slide-in-left">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-secondary p-1 max-w-md mx-auto">
                <div className="w-full h-full rounded-2xl bg-muted flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <Award className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 text-primary" />
                    <p className="text-muted-foreground">Foto del Experto</p>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
            </div>

            {/* Expert Info */}
            <div className="space-y-6 animate-slide-in-right">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
                  Conoce a tu <span className="gradient-text">Experto</span>
                </h2>
                <p className="text-lg sm:text-xl text-primary font-semibold">
                  {siteConfig.expert.name}
                </p>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {siteConfig.expert.bio}
              </p>

              <button
                onClick={handleConsultationClick}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Quiero asesoría gratuita
              </button>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-3 py-2 rounded-full">
                  <span className="text-xl sm:text-2xl">✓</span>
                  <span className="text-muted-foreground">Asesoría Personalizada</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-3 py-2 rounded-full">
                  <span className="text-xl sm:text-2xl">✓</span>
                  <span className="text-muted-foreground">100% Gratis</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-3 py-2 rounded-full">
                  <span className="text-xl sm:text-2xl">✓</span>
                  <span className="text-muted-foreground">Respuesta Inmediata</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
