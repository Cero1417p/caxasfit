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
  categories: string[];
  products: Product[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const siteConfig: SiteConfig = {
  site: {
    name: "CaxaFit",
    tagline: "Tu tienda de suplementos en Cajamarca",
    description: "Los mejores suplementos deportivos con entrega inmediata en Cajamarca",
  },
  contact: {
    whatsapp: "51987654321", // Cambiar por tu número real
    email: "contacto@caxafit.com",
    address: "Jr. Amazonas 123, Cajamarca, Perú",
  },
  hero: {
    title: "Tus suplementos en Cajamarca, sin esperar envíos de Lima",
    subtitle: "Proteínas, creatinas y quemadores con entrega inmediata. Paga contra entrega.",
    ctaText: "Ver Catálogo",
  },
  expert: {
    name: "Carlos Mendoza",
    photo: "/expert.jpg", // Agregar foto del experto
    bio: "Hola, soy Carlos. Selecciono personalmente los mejores suplementos para que logres tus objetivos. Si no sabes cuál elegir, escríbeme y te asesoro gratis.",
    whatsapp: "51987654321", // Número personal del experto
  },
  social: {
    instagram: "https://instagram.com/caxafit",
    tiktok: "https://tiktok.com/@caxafit",
    facebook: "https://facebook.com/caxafit",
  },
  categories: ["Todos", "Proteínas", "Creatinas", "Quemadores", "Accesorios"],
  products: [
    // Proteínas
    {
      id: "1",
      name: "Whey Protein Gold Standard",
      brand: "Optimum Nutrition",
      price: 180,
      image: "/products/whey-gold.jpg",
      description: "La proteína más vendida del mundo. 24g de proteína por servicio.",
      category: "Proteínas",
    },
    {
      id: "2",
      name: "Nitro-Tech Performance",
      brand: "MuscleTech",
      price: 165,
      image: "/products/nitrotech.jpg",
      description: "Proteína premium con creatina incluida. Ideal para ganar masa muscular.",
      category: "Proteínas",
    },
    {
      id: "3",
      name: "ISO 100 Hydrolyzed",
      brand: "Dymatize",
      price: 195,
      image: "/products/iso100.jpg",
      description: "Proteína hidrolizada de absorción ultra rápida. Sin lactosa.",
      category: "Proteínas",
    },
    {
      id: "4",
      name: "Syntha-6",
      brand: "BSN",
      price: 175,
      image: "/products/syntha6.jpg",
      description: "Mezcla de proteínas de liberación prolongada. Sabor increíble.",
      category: "Proteínas",
    },
    // Creatinas
    {
      id: "5",
      name: "Creatine Monohydrate",
      brand: "Optimum Nutrition",
      price: 85,
      image: "/products/creatine-on.jpg",
      description: "Creatina monohidratada pura. Aumenta fuerza y rendimiento.",
      category: "Creatinas",
    },
    {
      id: "6",
      name: "Cell-Tech Creatine",
      brand: "MuscleTech",
      price: 120,
      image: "/products/celltech.jpg",
      description: "Creatina con carbohidratos para máxima absorción.",
      category: "Creatinas",
    },
    {
      id: "7",
      name: "Creatine HCL",
      brand: "Kaged Muscle",
      price: 95,
      image: "/products/creatine-hcl.jpg",
      description: "Creatina HCL de alta concentración. Sin retención de líquidos.",
      category: "Creatinas",
    },
    // Quemadores
    {
      id: "8",
      name: "Hydroxycut Hardcore",
      brand: "MuscleTech",
      price: 140,
      image: "/products/hydroxycut.jpg",
      description: "Quemador de grasa termogénico. Energía y enfoque mental.",
      category: "Quemadores",
    },
    {
      id: "9",
      name: "Lipo-6 Black",
      brand: "Nutrex",
      price: 135,
      image: "/products/lipo6.jpg",
      description: "Quemador potente con liberación prolongada. Resultados rápidos.",
      category: "Quemadores",
    },
    {
      id: "10",
      name: "CLA + Carnitine",
      brand: "Evlution Nutrition",
      price: 110,
      image: "/products/cla.jpg",
      description: "Combinación natural para quemar grasa sin estimulantes.",
      category: "Quemadores",
    },
    // Accesorios
    {
      id: "11",
      name: "Shaker Premium",
      brand: "BlenderBottle",
      price: 25,
      image: "/products/shaker.jpg",
      description: "Shaker de 28oz con mezclador de acero. A prueba de fugas.",
      category: "Accesorios",
    },
    {
      id: "12",
      name: "Guantes de Gimnasio",
      brand: "Harbinger",
      price: 45,
      image: "/products/gloves.jpg",
      description: "Guantes acolchados con soporte de muñeca. Máximo agarre.",
      category: "Accesorios",
    },
    {
      id: "13",
      name: "Cinturón de Levantamiento",
      brand: "RDX",
      price: 85,
      image: "/products/belt.jpg",
      description: "Cinturón de cuero genuino. Soporte lumbar para levantamientos pesados.",
      category: "Accesorios",
    },
    {
      id: "14",
      name: "Straps de Levantamiento",
      brand: "Versa Gripps",
      price: 55,
      image: "/products/straps.jpg",
      description: "Correas profesionales para dominadas y peso muerto.",
      category: "Accesorios",
    },
  ],
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
