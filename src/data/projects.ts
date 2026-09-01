export interface Project {
  name: string;
  slug: string;
  category: string;
  year: string;
  context?: string;
  role?: string;
  tools?: string[];
  link?: string;
  thumbnail?: string;
  previewVideo?: string;
  images?: string[];
  videos?: string[];
  description: string;
}

export const projects: Project[] = [
  {
    name: "MICHOACANÍSSIMO",
    slug: "michoacanissimo",
    category: "Sitio web",
    year: "2026",
    context: "Sitio web gastronómico y tradicional",
    role: "Diseñadora web UX/UI",
    tools: ["Astro", "Figma", "Tailwind CSS"],
    link: "https://michoacanissimo.com/",
    thumbnail: "/assets/images/michoacanissimo.png",
    previewVideo: "/assets/videos/michoacanissimo-preview.mp4",
    images: [],
    videos: ["/assets/videos/michoacanissimo-video1.mp4",
  "/assets/videos/michoacanissimo-video2.mp4",
  "/assets/videos/michoacanissimo-video3.mp4"
  ],
  description: "Michoacanissimo es un sitio web creado para presentar la identidad y propuesta gastronomica michoacana, destacando su tradición de más de 70 años, el objetivo del sitio era crear un espacio donde el usuario tuviera la posibilidad de explorar el menú y directamente hacer un pedido a través de WhatsApp",
  },
  {
    name: "ECO ORBIT ADVENTURES",
    slug: "eco-orbit-adventures",
    category: "Sitio web",
    year: "2025",
    context: "Plataforma de ecoturismo y aventuras",
    role: "Diseñadora web UX/UI",
    tools: ["WordPress", "Figma", "Fareharbor"],
    link: "https://ecoorbitadventures.com/",
    thumbnail: "/assets/images/eco-orbit-adventures.png",
    previewVideo: "/assets/videos/eco-orbit-adventures-preview.mp4",
    images: [],
    videos: ["/assets/videos/eco-orbit-adventures-video1.mp4",
  "/assets/videos/eco-orbit-adventures-video2.mp4",
  "/assets/videos/eco-orbit-adventures-video3.mp4",
  "/assets/videos/eco-orbit-adventures-video4.mp4"],
  description: "Eco Orbit Adventures es un ecoparque ubicado en Puerto Vallarta, dirigido tanto al turismo nacional como internacional. El sitio fue desarrollado como una plataforma digital para la promoción, venta y reserva de tours, integrando FareHarbor como sistema de gestión de reservas y disponibilidad.",
  },
  {
    name: "BYRAL SOLUTIONS",
    slug: "byral-solutions",
    category: "Sitio web",
    year: "2026",
    context: "Soluciones de crecimiento digital y software",
    role: "Diseñadora web UX/UI",
    tools: ["Figma"],
    link: "https://byralsolutions.com/",
    thumbnail: "/assets/images/byral-solutions.png",
    previewVideo: "/assets/videos/byral-solutions-preview.mp4",
    images: [],
    videos: ["/assets/videos/byral-solutions-video1.mp4",
      "/assets/videos/byral-solutions-video2.mp4",
      "/assets/videos/byral-solutions-video3.mp4",
      "/assets/videos/byral-solutions-video4.mp4"],
    description: "Byral Solutions es una agencia de desarrollo especializada en el diseño e implementación de soluciones digitales personalizadas y automatizadas. El objetivo del sitio fue crear una presencia digital clara y profesional que comunicara el valor de sus servicios, explicara de forma accesible sus soluciones y facilitara la captación de leads potenciales mediante una experiencia enfocada en la conversión.",
  },
  {
    name: "PULPO DIGITAL",
    slug: "pulpo-digital",
    category: "Sitio web",
    year: "2025",
    context: "Agencia de branding y estrategia digital",
    role: "Diseñadora web UX/UI",
    tools: ["Figma", "Astro"],
    link: "https://pulpodigital.com/",
    thumbnail: "/assets/images/pulpo-digital.png",
    previewVideo: "/assets/videos/pulpo-digital-preview.mp4",
    images: ["/assets/images/pulpo-digital.png", "/assets/images/placeholder.svg"],
    videos: ["/assets/videos/pulpo-digital-video1.mp4",
      "/assets/videos/pulpo-digital-video2.mp4",
      "/assets/videos/pulpo-digital-video3.mp4",
      "/assets/videos/pulpo-digital-video4.mp4",],
    description: "Pulpo Digital es una agencia de diseño y desarrollo digital enfocada en crear experiencias web para marcas y negocios. El proyecto tuvo como objetivo desarrollar una plataforma que comunicara la personalidad de la agencia, mostrara su capacidad creativa y técnica, y guiara al usuario hacia el contacto de manera natural. La experiencia combina una identidad visual dinámica con una estructura clara y orientada a la conversión.",
  }
];
