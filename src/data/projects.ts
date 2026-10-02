export interface CaseStudyDataCard {
  value: string;
  label: string;
  description?: string;
}

export interface CaseStudyComparison {
  leftTitle: string;
  leftContent: string | string[];
  rightTitle: string;
  rightContent: string | string[];
}

export interface FlowStep {
  stepNumber?: string | number;
  title: string;
  description?: string;
  tool?: string;
  toolIcon?: string;
}

export interface CaseStudyData {
  contexto: {
    overview: string;
    dataCards?: CaseStudyDataCard[];
  };
  problema: {
    overview: string;
    comparison?: CaseStudyComparison;
  };
  aiWorkflow: {
    overview: string;
    flowSteps?: FlowStep[];
  };
  outcome: {
    overview: string;
    keyPoints?: string[];
  };
  improvements: {
    overview: string;
    items?: string[];
  };
}

export interface Project {
  name: string;
  client?: string;
  headline?: string;
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
  captions?: string[];
  description: string;
  caseStudy?: CaseStudyData;
}

export const projects: Project[] = [
  {
    name: "MICHOACANÍSSIMO",
    client: "Michoacaníssimo",
    headline: "Sitio web gastronómico orientado a pedidos digitales",
    slug: "michoacanissimo",
    category: "Sitio web",
    year: "2026",
    context: "Sitio web gastronómico y tradicional",
    role: "Diseñadora web UX/UI",
    tools: ["Figma", "HTML", "CSS", "JavaScript"],
    link: "https://michoacanissimo.com/",
    thumbnail: "/assets/images/michoacanissimo.png",
    previewVideo: "/assets/videos/michoacanissimo-preview.mp4",
    images: [],
    videos: [
      "/assets/videos/michoacanissimo-video1.mp4",
      "/assets/videos/michoacanissimo-video2.mp4",
      "/assets/videos/michoacanissimo-video3.mp4"
    ],
    captions: [
      "Vista previa del hero principal destacando la tradición culinaria y propuesta gastronómica.",
      "Exploración interactiva del menú tradicional organizado por categorías de platillos.",
      "Flujo de consulta y botón de contacto directo para realizar pedidos por WhatsApp.",
      "Diseño responsive optimizado para navegación y lectura rápida en smartphones."
    ],
    description: "Michoacanissimo es un sitio web creado para presentar la identidad y propuesta gastronómica michoacana, destacando su tradición de más de 70 años, el objetivo del sitio era crear un espacio donde el usuario tuviera la posibilidad de explorar el menú y directamente hacer un pedido a través de WhatsApp",
    caseStudy: {
      contexto: {
        overview: "Michoacaníssimo es un restaurante especializado en birria estilo Michoacán. El proyecto partió de una presencia web existente que se encontraba desactualizada, con problemas de optimización y sin responder adecuadamente a los estándares web actuales. El objetivo fue renovar este canal digital y convertirlo en un punto de contacto funcional para consultar la propuesta gastronómica y comunicarse con el restaurante.",
        dataCards: [
          {
            value: "Rediseño Web",
            label: "Presencia Digital",
            description: "Actualización de una presencia web existente hacia una experiencia responsive y funcional."
          },
          {
            value: "WhatsApp",
            label: "Canal de Contacto",
            description: "Punto de contacto directo entre el sitio y el restaurante."
          },
          {
            value: "HTML + CSS + JS",
            label: "Stack Front-End",
            description: "Implementación responsive del diseño para su publicación web."
          }
        ]
      },
      problema: {
        overview: "Michoacaníssimo ya contaba con un sitio web y un menú en formato digital, pero la implementación existente se encontraba desactualizada, con problemas de optimización y sin responder adecuadamente a los estándares web actuales. El reto no era digitalizar el contenido, sino renovar la presencia web para convertirla nuevamente en un canal funcional de consulta y contacto.",
        comparison: {
          leftTitle: "Desafío Inicial",
          leftContent: [
            "Sitio web desactualizado y con problemas de optimización.",
            "Experiencia que no respondía adecuadamente a los estándares actuales de navegación web.",
            "El menú existía digitalmente, pero el sitio no funcionaba como un canal viable para consultarlo de forma autónoma."
          ],
          rightTitle: "Enfoque UX/UI",
          rightContent: [
            "Renovación de la experiencia visual con una composición de enfoque editorial.",
            "Integración del menú dentro del sitio con opciones para consultarlo y descargarlo.",
            "Incorporación de WhatsApp como canal directo de contacto con el restaurante."
          ]
        }
      },
      aiWorkflow: {
        overview: "La inteligencia artificial se incorporó después de definir el diseño de la interfaz, como herramienta de apoyo para la redacción y la transición del diseño a código. La dirección visual y las decisiones de diseño se desarrollaron previamente.",
        flowSteps: [
          {
            stepNumber: "01",
            title: "Microcopy",
            tool: "ChatGPT",
            toolIcon: "/assets/icons/chatgpt.svg",
            description: "Apoyo para desarrollar y refinar textos y llamadas a la acción del sitio."
          },
          {
            stepNumber: "02",
            title: "Diseño a código",
            tool: "Antigravity",
            toolIcon: "/assets/icons/antigravity.svg",
            description: "Traducción del diseño visual a una primera implementación en HTML, CSS y JavaScript."
          },
          {
            stepNumber: "03",
            title: "Refinamiento de código",
            tool: "Codex",
            toolIcon: "/assets/icons/codex.svg",
            description: "Iteraciones técnicas, correcciones y ajustes sobre la implementación."
          }
        ]
      },
      outcome: {
        overview: "El resultado fue un sitio web responsive que renovó la presencia digital de Michoacaníssimo y convirtió el sitio en un canal funcional para consultar su propuesta gastronómica. La nueva experiencia centraliza el acceso al menú y facilita el paso entre explorar la oferta e iniciar contacto con el restaurante a través de WhatsApp.",
        keyPoints: [
          "Experiencia responsive adaptada a desktop y dispositivos móviles.",
          "Menú integrado dentro del sitio con opción de consulta y descarga.",
          "Acceso a WhatsApp para iniciar una conversación directa con el restaurante.",
          "Diseño llevado a código y publicado como un producto web funcional."
        ]
      },

      improvements: {
        overview: "Revisar el producto después de su implementación permitió identificar oportunidades para simplificar el recorrido, reforzar la jerarquía del contenido y acercar las acciones principales a las necesidades del usuario.",
        items: [
          "PRIORIDAD DEL CONTENIDO / Priorizar el menú dentro del recorrido, colocándolo más cerca del inicio para reducir la distancia entre conocer el restaurante y explorar su oferta gastronómica.",
          "COMPOSICIÓN EN MÓVIL / Reducir la longitud de algunas secciones decorativas en móvil, reorganizando las ilustraciones de ingredientes en composiciones más compactas que conserven su valor visual sin extender innecesariamente el scroll.",
          "JERARQUÍA Y CONSISTENCIA VISUAL / Reforzar la jerarquía y consistencia entre secciones, manteniendo patrones más predecibles en el orden de títulos, textos, imágenes e ilustraciones.",
          "CONTACTO PERSISTENTE / Incorporar un acceso flotante a WhatsApp para mantener disponible el principal canal de contacto durante todo el recorrido, especialmente en dispositivos móviles."
        ]
      }
    }
  },

  {
    name: "ECO ORBIT ADVENTURES",
    client: "Eco-Orbit Adventures",
    headline: "Plataforma web para experiencias turísticas",
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
    videos: [
      "/assets/videos/eco-orbit-adventures-video1.mp4",
      "/assets/videos/eco-orbit-adventures-video2.mp4",
      "/assets/videos/eco-orbit-adventures-video3.mp4",
      "/assets/videos/eco-orbit-adventures-video4.mp4"
    ],
    captions: [
      "Hero inmersivo con visualización de expediciones y paisajes de Puerto Vallarta.",
      "Catálogo interactivo de tours de aventura clasificados por nivel de intensidad.",
      "Ficha descriptiva de tour con itinerario, recomendaciones y requerimientos técnicos.",
      "Integración del motor de reservas de FareHarbor con verificación de disponibilidad en vivo."
    ],
    description: "Eco Orbit Adventures es un ecoparque ubicado en Puerto Vallarta, dirigido tanto al turismo nacional como internacional. El sitio fue desarrollado como una plataforma digital para la promoción, venta y reserva de tours, integrando FareHarbor como sistema de gestión de reservas y disponibilidad.",
    caseStudy: {
      "contexto": {
        "overview": "Eco-Orbit Adventures es una plataforma de experiencias turísticas desarrollada en WordPress. El proyecto partió de un sitio existente que utilizaba WooCommerce para presentar y vender tours, pero que no estaba generando el tráfico ni las compras esperadas. El objetivo fue rediseñar la experiencia y replantear la forma en que los usuarios consultaban y reservaban las actividades.",
        "dataCards": [
          {
            "value": "WORDPRESS",
            "label": "Plataforma Web",
            "description": "Rediseño realizado sobre la plataforma existente, manteniendo WordPress como CMS."
          },
          {
            "value": "FAREHARBOR",
            "label": "Sistema de Reservas",
            "description": "Integración de una herramienta especializada para gestionar la reserva y pago de experiencias turísticas."
          },
          {
            "value": "UX/UI",
            "label": "Mi Rol",
            "description": "Diseño de la nueva experiencia y organización visual del contenido y los tours."
          }
        ]
      },
      "problema": {
        "overview": "El sitio utilizaba WordPress y WooCommerce como plataforma para mostrar y vender experiencias, pero no estaba consiguiendo el tráfico ni las compras esperadas. El reto consistió en replantear la experiencia para presentar los tours de forma más atractiva y facilitar el paso entre descubrir una actividad y comenzar el proceso de reserva.",
        "comparison": {
          "leftTitle": "Desafío Inicial",
          "leftContent": [
            "Baja generación de tráfico y compras desde el sitio.",
            "Experiencias turísticas presentadas dentro de una estructura de ecommerce tradicional.",
            "Necesidad de facilitar el acceso a información y reserva de cada actividad."
          ],
          "rightTitle": "Enfoque UX/UI",
          "rightContent": [
            "Rediseño visual y reorganización de la presentación de las experiencias.",
            "Estructuración de los tours como contenido principal de la plataforma.",
            "Sustitución de WooCommerce por FareHarbor para el flujo de reservas y pagos."
          ]
        }
      },
      "aiWorkflow": {
        "overview": "La inteligencia artificial tuvo una participación limitada en este proyecto y se utilizó principalmente como herramienta de apoyo para la redacción y refinamiento de contenido.",
        "flowSteps": [
          {
            "stepNumber": "01",
            "title": "Microcopy",
            "tool": "ChatGPT",
            "toolIcon": "/assets/icons/chatgpt.svg",
            "description": "Apoyo para desarrollar y refinar textos relacionados con las experiencias, servicios y llamadas a la acción del sitio."
          }
        ]
      },
      "outcome": {
        "overview": "El resultado fue una nueva experiencia web construida sobre WordPress, con una presentación renovada de las actividades y un flujo de reserva conectado con FareHarbor. El proyecto mantuvo la infraestructura existente mientras replanteó la forma de presentar las experiencias y acceder a su contratación.",
        "keyPoints": [
          "Rediseño UX/UI manteniendo WordPress como plataforma.",
          "Presentación estructurada de tours y experiencias.",
          "Integración de FareHarbor para reservas y pagos.",
          "Experiencia responsive para consulta desde diferentes dispositivos."
        ]
      },
      "improvements": {
        "overview": "",
        "items": [
          "RENDIMIENTO / Reducir tiempos de carga / Optimizaría recursos visuales y elementos del sitio para reducir los tiempos de carga, especialmente en dispositivos móviles.",
          "PRIORIDAD DE CONTENIDO / Mostrar los tours antes / Daría mayor prioridad a los tours dentro del recorrido inicial para reducir la distancia entre la llegada al sitio y la exploración de las experiencias disponibles.",
          "CONTACTO PERSISTENTE / Integrar WhatsApp / Incorporaría WhatsApp como canal de contacto visible durante el recorrido para facilitar consultas antes de iniciar una reserva.",
          "NARRATIVA / Reforzar la experiencia visual / Evolucionaría el diseño hacia una narrativa más inmersiva que comunique mejor la experiencia de aventura y el entorno de cada tour mediante fotografía, contenido y narrativa."
        ]
      }
    }
  },
  {
    name: "BYRAL SOLUTIONS",
    client: "BYRAL Solutions",
    headline: "Sitio web para servicios de automatización e IA",
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
    videos: [
      "/assets/videos/byral-solutions-video1.mp4",
      "/assets/videos/byral-solutions-video2.mp4",
      "/assets/videos/byral-solutions-video3.mp4",
      "/assets/videos/byral-solutions-video4.mp4"
    ],
    captions: [
      "Página de destino institucional con propuesta de valor centrada en automatización empresarial.",
      "Módulos informativos que desglosan soluciones de inteligencia artificial e integraciones.",
      "Presentación de metodología de trabajo y beneficios tangibles para directivos y líderes.",
      "Formulario y puntos de contacto orientados a agendar llamadas de diagnóstico técnico."
    ],
    description: "Byral Solutions es una agencia de desarrollo especializada en el diseño e implementación de soluciones digitales personalizadas y automatizadas. El objetivo del sitio fue crear una presencia digital clara y profesional que comunicara el valor de sus servicios, explicara de forma accesible sus soluciones y facilitara la captación de leads potenciales mediante una experiencia enfocada en la conversión.",
    caseStudy: {
      "contexto": {
        "overview": "BYRAL Solutions es un proyecto tecnológico en desarrollo enfocado en servicios de automatización, inteligencia artificial y soluciones digitales para empresas. Mi participación comenzó desde la construcción de la identidad visual y continuó con el diseño de su primera presencia web, actualmente en proceso de evolución.",
        "dataCards": [
          {
            "value": "BRANDING + UX/UI",
            "label": "Mi participación",
            "description": "Desarrollo de identidad visual y diseño de la primera experiencia web."
          },
          {
            "value": "AUTOMATIZACIÓN + IA",
            "label": "Oferta de servicios",
            "description": "Soluciones digitales orientadas a optimizar procesos y operaciones."
          },
          {
            "value": "EN DESARROLLO",
            "label": "Estado del producto",
            "description": "Primera versión publicada mientras se continúa definiendo y evolucionando la oferta."
          }
        ]
      },
      "problema": {
        "overview": "Al tratarse de un proyecto nuevo, BYRAL necesitaba construir una presencia digital desde cero y comunicar servicios técnicos que todavía se encontraban en proceso de definición. El principal reto de diseño fue crear una primera estructura capaz de presentar la propuesta de la empresa de manera comprensible y proporcionar un punto de contacto para potenciales clientes.",
        "comparison": {
          "leftTitle": "Desafío Inicial",
          "leftContent": [
            "Proyecto nuevo sin una presencia digital consolidada.",
            "Oferta de servicios tecnológicos todavía en evolución.",
            "Necesidad de explicar automatización e IA sin depender únicamente de lenguaje técnico."
          ],
          "rightTitle": "Enfoque UX/UI",
          "rightContent": [
            "Construcción de una identidad visual aplicada consistentemente a la experiencia web.",
            "Organización inicial de los servicios en bloques de contenido comprensibles.",
            "Incorporación de llamadas a la acción y puntos de contacto dentro del recorrido."
          ]
        }
      },
      "aiWorkflow": {
        "overview": "La inteligencia artificial se utilizó como herramienta de apoyo durante la creación de la primera versión del sitio, principalmente para refinar contenido y apoyar la exploración de la interfaz.",
        "flowSteps": [
          {
            "stepNumber": "01",
            "title": "Microcopy",
            "tool": "ChatGPT",
            "toolIcon": "/assets/icons/chatgpt.svg",
            "description": "Apoyo para desarrollar y refinar textos orientados a explicar los servicios de forma más accesible."
          },
          {
            "stepNumber": "02",
            "title": "Exploración de interfaz",
            "tool": "Figma Make",
            "description": "Apoyo para explorar y desarrollar la primera versión de la página de destino a partir de la dirección visual definida."
          }
        ]
      },
      "outcome": {
        "overview": "La primera versión establece una base visual y estructural para la presencia digital de BYRAL Solutions, presentando su propuesta y principales servicios dentro de una experiencia unificada. Al tratarse de un producto todavía en desarrollo, esta versión funciona como punto de partida para futuras iteraciones de arquitectura, contenido y experiencia.",
        "keyPoints": [
          "Identidad visual trasladada a una primera experiencia digital.",
          "Estructura inicial para comunicar servicios de automatización e IA.",
          "Puntos de contacto para potenciales clientes.",
          "Base preparada para evolucionar conforme se defina la oferta del proyecto."
        ]
      },
      "improvements": {
        "overview": "",
        "items": [
          "INVESTIGACIÓN / Validar necesidades reales / Realizar investigación con potenciales usuarios y negocios para comprender qué problemas buscan resolver mediante automatización y qué información necesitan antes de contactar a un proveedor.",
          "ARQUITECTURA DE INFORMACIÓN / Replantear la estructura de servicios / Revisar la arquitectura de información conforme se consolide la oferta de BYRAL, priorizando los servicios y casos de uso más relevantes para el usuario.",
          "COMUNICACIÓN DE VALOR / Explicar servicios mediante casos de uso / Evolucionar la comunicación desde descripciones generales hacia escenarios concretos que permitan entender qué proceso se automatiza, cómo funciona y qué valor aporta.",
          "EVOLUCIÓN DEL PRODUCTO / Integrar nuevos productos con mayor claridad / Definir cómo incorporar herramientas adicionales, como el generador de QR, sin diluir la propuesta principal ni generar una arquitectura de servicios fragmentada."
        ]
      }
    }
  },
  {
    name: "PULPO DIGITAL",
    client: "Pulpo Digital",
    headline: "Rediseño web para agencia creativa",
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
    videos: [
      "/assets/videos/pulpo-digital-video1.mp4",
      "/assets/videos/pulpo-digital-video2.mp4",
      "/assets/videos/pulpo-digital-video3.mp4",
      "/assets/videos/pulpo-digital-video4.mp4"
    ],
    captions: [
      "Página de inicio con identidad visual dinámica y microinteracciones de estilo editorial.",
      "Presentación interactiva de casos de estudio de branding y diseño gráfico digital.",
      "Presentación de disciplinas creativas, desarrollo web y metodología de trabajo del estudio.",
      "Módulo de contacto y formulario para cotización y formalización de proyectos creativos."
    ],
    description: "Pulpo Digital es una agencia de diseño y desarrollo digital enfocada en crear experiencias web para marcas y negocios. El proyecto tuvo como objetivo desarrollar una plataforma que comunicara la personalidad de la agencia, mostrara su capacidad creativa y técnica, y guiara al usuario hacia el contacto de manera natural. La experiencia combina una identidad visual dinámica con una estructura clara y orientada a la conversión.",
    caseStudy: {
      "contexto": {
        "overview": "Pulpo Digital es una agencia creativa que necesitaba renovar su presencia web para alinearla con la evolución de su identidad. El sitio existente se percibía desactualizado, tenía una estructura muy estática y presentaba el contenido como una sucesión de bloques similares a diapositivas, por lo que se planteó un rediseño completo de la experiencia.",
        "dataCards": [
          {
            "value": "REDISEÑO WEB",
            "label": "Presencia Digital",
            "description": "Renovación completa del sitio para alinearlo con la identidad actual de la agencia."
          },
          {
            "value": "DISEÑO + DESARROLLO",
            "label": "Mi Rol",
            "description": "Responsabilidad sobre el diseño UX/UI y la implementación front-end del proyecto."
          },
          {
            "value": "NETLIFY",
            "label": "Publicación",
            "description": "Configuración y publicación del sitio para su lanzamiento web."
          }
        ]
      },
      "problema": {
        "overview": "La presencia digital anterior ya no representaba adecuadamente la identidad de Pulpo Digital. Además de una estética desactualizada, la estructura era predominantemente estática y hacía que la navegación se percibiera como una secuencia de diapositivas, limitando las posibilidades de construir una experiencia más dinámica para presentar la agencia y su trabajo.",
        "comparison": {
          "leftTitle": "Desafío Inicial",
          "leftContent": [
            "Identidad visual del sitio desactualizada respecto a la marca.",
            "Experiencia predominantemente estática.",
            "Estructura basada en grandes bloques consecutivos con poca continuidad visual."
          ],
          "rightTitle": "Enfoque UX/UI",
          "rightContent": [
            "Renovación de la dirección visual del sitio.",
            "Diseño de una experiencia con mayor movimiento e interacción.",
            "Implementación responsive de la nueva propuesta.",
            "Desarrollo y publicación del producto final."
          ]
        }
      },
      "aiWorkflow": {
        "overview": "La inteligencia artificial se utilizó como herramienta de apoyo durante la implementación, principalmente para trasladar el diseño a código y desarrollar algunas de las interacciones y animaciones planteadas para la experiencia.",
        "flowSteps": [
          {
            "stepNumber": "01",
            "title": "Diseño a código",
            "description": "Traducción e iteración de componentes visuales durante la implementación del diseño."
          },
          {
            "stepNumber": "02",
            "title": "Interacciones y movimiento",
            "description": "Asistencia durante el desarrollo y refinamiento de animaciones e interacciones del sitio."
          }
        ]
      },
      "outcome": {
        "overview": "El resultado fue una renovación completa de la presencia digital de Pulpo Digital, desde el diseño de la experiencia hasta su implementación y publicación. La nueva propuesta sustituyó la estructura estática anterior por una experiencia visual más dinámica y alineada con la identidad actual de la agencia.",
        "keyPoints": [
          "Rediseño integral de la experiencia web.",
          "Diseño e implementación realizados dentro del mismo proceso.",
          "Incorporación de animaciones e interacciones.",
          "Implementación responsive y publicación mediante Netlify."
        ]
      },
      "improvements": {
        "overview": "",
        "items": [
          "ARQUITECTURA DE INFORMACIÓN / Evolucionar hacia un sitio multipágina / Separaría el contenido en páginas específicas para servicios, proyectos y otras áreas de la agencia, permitiendo desarrollar mejor cada sección y reducir la dependencia de una única página de destino.",
          "DISEÑO DE COMPONENTES / Rediseñar algunas tarjetas / Revisaría determinados componentes para mejorar su jerarquía, consistencia visual y relación con el resto del sistema.",
          "REFINAMIENTO VISUAL / Refinar detalles de interfaz / Realizaría una segunda pasada sobre espaciados, composición, estados e interacciones para conseguir una experiencia visual más consistente.",
          "NARRATIVA DE PROYECTOS / Dar mayor profundidad a los proyectos / Aprovecharía la arquitectura multipágina para presentar los trabajos de la agencia con mayor contexto visual y explicar mejor cada proyecto."
        ]
      }
    }
  }
];
