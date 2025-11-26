"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { generateWhatsAppURL, generateGeneralInquiryMessage } from "@/utils/whatsapp";

export function FloatingWhatsApp() {
  const handleClick = () => {
    const message = generateGeneralInquiryMessage();
    const url = generateWhatsAppURL(siteConfig.contact.whatsapp, message);
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-success to-success/80 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center animate-pulse group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
      
      {/* Ripple Effect */}
      <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-75" />
    </button>
  );
}
