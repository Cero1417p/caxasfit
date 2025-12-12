export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export interface SiteConfig {
  site: {
    name: string;
    tagline: string;
    description: string;
  };
  contact: {
    whatsapp: string;
    email: string;
    address: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  expert: {
    name: string;
    photo: string;
    bio: string;
    whatsapp: string;
  };
  social: {
    instagram?: string;
    tiktok?: string;
    facebook?: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const siteConfig: SiteConfig = {
  site: {
    name: "CaxasFit",
    tagline: "Tu tienda de suplementos en Cajamarca",
    description: "Los mejores suplementos deportivos con entrega inmediata en Cajamarca",
  },
  contact: {
    whatsapp: "51950049344", // Cambiar por tu número real
    email: "caxasfit@gmail.com",
    address: "Solo Virtual Cajamarca, Perú",
  },
  hero: {
    title: "Suplementos en Cajamarca, listos para ti",
    subtitle: "Proteínas, creatinas y quemadores con entrega inmediata. Paga contra entrega.",
    ctaText: "Ver Productos",
  },
  expert: {
    name: "Matthew Torres",
    photo: "https://res.cloudinary.com/dxntqapz6/image/upload/v1765173437/entrenador_gjnecn.png", // Agregar foto del experto
    bio: "Hola, soy Matthew. Selecciono personalmente los mejores suplementos para que logres tus objetivos. Si no sabes cuál elegir, escríbeme y te asesoro gratis.",
    whatsapp: "51900136284", // Número personal del experto
  },
  social: {
    instagram: "https://instagram.com/caxafit",
    tiktok: "https://tiktok.com/@caxafitoficial",
    facebook: "https://facebook.com/caxafit",
  },
  faqs: [
    {
      question: "¿Hacen envíos a Baños del Inca, Otuzco y otros distritos?",
      answer: "Sí, hacemos envíos a todos los distritos de Cajamarca. El envío es gratis para compras mayores a S/ 100.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos Yape, Plin, transferencia bancaria y efectivo contra entrega. También aceptamos tarjetas de crédito/débito.",
    },
    {
      question: "¿Tienen tienda física donde pueda ir?",
      answer: "Sí, estamos ubicados en Jr. Amazonas 123, Centro de Cajamarca. Horario: Lunes a Sábado de 9am a 8pm.",
    },
    {
      question: "¿Los productos son originales?",
      answer: "Todos nuestros productos son 100% originales y sellados. Trabajamos directamente con distribuidores autorizados.",
    },
    {
      question: "¿Cuánto demora la entrega?",
      answer: "Para el centro de Cajamarca, la entrega es el mismo día. Para distritos aledaños, máximo 24 horas.",
    },
    {
      question: "¿Ofrecen asesoría nutricional?",
      answer: "Sí, nuestro experto te puede asesorar gratuitamente sobre qué suplemento es mejor para tus objetivos. Solo escríbenos por WhatsApp.",
    },
  ],
};
