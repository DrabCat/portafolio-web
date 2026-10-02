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
        overview: "Durante el proceso de diseño y desarrollo, se implementaron flujos de asistencia con Inteligencia Artificial para acelerar tareas de estructuración, redacción y optimización técnica:",
        flowSteps: [
          {
            stepNumber: "01",
            title: "Taxonomía de Contenido",
            description: "Clasificación asistida por IA de especialidades gastronómicas e ingredientes principales para definir la navegación del menú."
          },
          {
            stepNumber: "02",
            title: "Wireframing y Layout",
            description: "Exploración de composiciones en Figma para balancear la fotografía artesanal con llamadas a la acción claras."
          },
          {
            stepNumber: "03",
            title: "Microcopy de Conversión",
            description: "Refinamiento de textos para llamadas a la acción y plantillas de mensaje directo para WhatsApp."
          },
          {
            stepNumber: "04",
            title: "Generación Front-End",
            description: "Soporte de IA en la estructuración de componentes reutilizables y utilidades CSS en Astro."
          }
        ]
      },
      outcome: {
        overview: "Se desarrolló una plataforma web estática moderna, visualmente conectada con las raíces michoacanas y optimizada para la conversión rápida. Los usuarios pueden revisar la oferta gastronómica completa y enviar su orden directamente al restaurante con un solo toque.",
        keyPoints: [
          "Navegación ágil del menú organizada por secciones claras y descriptivas.",
          "Canal de pedido directo por WhatsApp sin barreras de registro de usuario.",
          "Carga instantánea de página gracias a la arquitectura basada en componentes ligeros."
        ]
      },
      improvements: {
        overview: "Áreas identificadas para iteraciones continuas y evolución de la experiencia del comensal:",
        items: [
          "Incorporación de un configurador interactivo de complementos antes de enviar el mensaje a WhatsApp.",
          "Módulo para destacar platillos de temporada y promociones especiales del día.",
          "Integración de opiniones de comensales verificadas directamente desde Google Maps."
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
      contexto: {
        overview: "Eco Orbit Adventures opera actividades de ecoturismo y expediciones de aventura en Puerto Vallarta, Jalisco. Su público abarca desde familias locales hasta turistas internacionales que buscan reservar experiencias al aire libre antes o durante su estancia.",
        dataCards: [
          {
            value: "Turismo Global",
            label: "Audiencia Mixta",
            description: "Experiencia pensada para visitantes locales y viajeros internacionales."
          },
          {
            value: "FareHarbor",
            label: "Motor de Reservas",
            description: "Sincronización en tiempo real de calendarios, cupos y pasarela de pago."
          },
          {
            value: "WordPress",
            label: "Gestión Dinámica",
            description: "Facilidad de administración para actualizar paquetes y precios de temporada."
          }
        ]
      },
      problema: {
        overview: "La contratación de tours de aventura implica dudas cruciales para el viajero: niveles de esfuerzo físico, equipo necesario, horarios de salida y disponibilidad. La ausencia de un flujo de información claro provocaba consultas telefónicas constantes y pérdida de reservas ante competidores con procesos digitales más ágiles.",
        comparison: {
          leftTitle: "Desafío Inicial",
          leftContent: [
            "Información fragmentada de itinerarios, restricciones físicas y políticas de cancelación.",
            "Incertidumbre sobre cupos en tiempo real para viajeros con itinerario ajustado.",
            "Proceso manual de confirmación que retrasaba el cierre de reservas."
          ],
          rightTitle: "Enfoque UX/UI",
          rightContent: [
            "Fichas de producto con etiquetas claras de duración, dificultad y qué llevar.",
            "Visualización transparente de disponibilidad e integración nativa del widget de FareHarbor.",
            "Flujo de reserva responsive accesible tanto desde computadora como desde dispositivos móviles."
          ]
        }
      },
      aiWorkflow: {
        overview: "Uso de herramientas de inteligencia artificial para agilizar la producción de contenidos estructurados y la diagramación de interfaces:",
        flowSteps: [
          {
            stepNumber: "01",
            title: "Estructuración de Itinerarios",
            description: "Uso de IA para resumir extensas descripciones de tours en listas de especificaciones claras y de lectura rápida."
          },
          {
            stepNumber: "02",
            title: "Prototipado en Figma",
            description: "Generación de propuestas de layout para tarjetas de actividad y bloques comparativos de paquetes de aventura."
          },
          {
            stepNumber: "03",
            title: "Mapeo del Embudo de Reserva",
            description: "Análisis asistido de los puntos de fricción entre el detalle del tour y la ventana emergente de reserva."
          },
          {
            stepNumber: "04",
            title: "Adaptación Multidispositivo",
            description: "Optimización de la disposición de controles táctiles en pantallas móviles para usuarios en ruta."
          }
        ]
      },
      outcome: {
        overview: "Se consolidó una plataforma web sólida y atractiva que proyecta seguridad y profesionalismo, permitiendo a los turistas consultar detalles completos y formalizar su reserva con confirmación inmediata.",
        keyPoints: [
          "Presentación inmersiva de actividades mediante recursos multimedia y datos técnicos claros.",
          "Conexión directa con FareHarbor para gestión autónoma de disponibilidad y pagos.",
          "Arquitectura orientada a la navegación móvil para reservas de último minuto en destino."
        ]
      },
      improvements: {
        overview: "Oportunidades de mejora continua identificadas para próximas fases del producto:",
        items: [
          "Filtro inteligente de actividades según tipo de grupo (familias con niños, parejas, amantes de la adrenalina).",
          "Módulo de preguntas frecuentes específicas dentro de cada ficha de actividad.",
          "Galería de fotos y videos reales subidos por comensales y visitantes tras su expedición."
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
      "Landing page institucional con propuesta de valor centrada en automatización empresarial.",
      "Módulos informativos que desglosan soluciones de inteligencia artificial e integraciones.",
      "Presentación de metodología de trabajo y beneficios tangibles para directivos y líderes.",
      "Formulario y puntos de contacto orientados a agendar llamadas de diagnóstico técnico."
    ],
    description: "Byral Solutions es una agencia de desarrollo especializada en el diseño e implementación de soluciones digitales personalizadas y automatizadas. El objetivo del sitio fue crear una presencia digital clara y profesional que comunicara el valor de sus servicios, explicara de forma accesible sus soluciones y facilitara la captación de leads potenciales mediante una experiencia enfocada en la conversión.",
    caseStudy: {
      contexto: {
        overview: "BYRAL Solutions es una empresa tecnológica especializada en optimización operativa, automatización de procesos e integración de herramientas de inteligencia artificial para negocios que requieren escalar su infraestructura.",
        dataCards: [
          {
            value: "B2B",
            label: "Público Objetivo",
            description: "Directores de operaciones, tecnología y fundadores de empresas."
          },
          {
            value: "Figma",
            label: "Sistema de Diseño",
            description: "Diseño modular de componentes con identidad visual contemporánea."
          },
          {
            value: "Leads",
            label: "Meta de Negocio",
            description: "Generación de contactos calificados para consultoría técnica personalizada."
          }
        ]
      },
      problema: {
        overview: "Los servicios de automatización e IA a menudo se explican con jerga técnica compleja que no comunica con claridad el retorno de inversión a los tomadores de decisiones. Era indispensable crear una narrativa visual sobria y comprensible que explicara el alcance de cada solución sin abrumar.",
        comparison: {
          leftTitle: "Desafío Inicial",
          leftContent: [
            "Explicaciones abstractas que generaban dudas sobre la aplicabilidad práctica de los servicios.",
            "Dificultad para diferenciar la oferta de automatización frente a software genérico.",
            "Formularios genéricos con baja tasa de respuesta de prospectos calificados."
          ],
          rightTitle: "Enfoque UX/UI",
          rightContent: [
            "Presentación modular de soluciones por caso de uso e impacto directo en eficiencia operativa.",
            "Diagramas claros de flujo de datos y automatización que facilitan el entendimiento rápido.",
            "Llamadas a la acción estratégicas para solicitar un diagnóstico operativo inicial."
          ]
        }
      },
      aiWorkflow: {
        overview: "Integración de IA para sintetizar conceptos técnicos de software y acelerar la producción de layouts:",
        flowSteps: [
          {
            stepNumber: "01",
            title: "Desglose de Servicios",
            description: "Uso de IA para traducir capacidades de código y automatización en propuestas de valor comprensibles para directivos."
          },
          {
            stepNumber: "02",
            title: "Arquitectura de Diagramas",
            description: "Esquematización de flujos de trabajo que muestran cómo se conectan herramientas existentes con pipelines de IA."
          },
          {
            stepNumber: "03",
            title: "Sistema de Componentes",
            description: "Creación de tarjetas de producto, listas de características y badges técnicos en Figma."
          },
          {
            stepNumber: "04",
            title: "Optimización de Conversión",
            description: "Alineación de llamadas a la acción en puntos clave del recorrido de lectura del usuario."
          }
        ]
      },
      outcome: {
        overview: "Se diseñó una experiencia de interfaz sobria y profesional que posiciona a BYRAL Solutions como un socio estratégico confiable, simplificando la comprensión de servicios técnicos de alta gama y guiando a los visitantes hacia la solicitud de diagnóstico.",
        keyPoints: [
          "Diseño visual refinado en tonos oscuros alineado con el sector tecnológico vanguardista.",
          "Explicación estructurada de soluciones de automatización orientadas a resultados de negocio.",
          "Flujo de contacto claro y directo para agendar sesiones con el equipo técnico."
        ]
      },
      improvements: {
        overview: "Líneas de mejora planificadas para próximas etapas del sitio web:",
        items: [
          "Calculadora interactiva para estimar horas y costos ahorrados mediante automatización.",
          "Casos de éxito documentados por sector industrial (logística, finanzas, comercio electrónico).",
          "Asistente conversacional para precalificar necesidades técnicas de prospectos antes de la llamada."
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
      "Showcase interactivo de casos de estudio de branding y diseño gráfico digital.",
      "Presentación de disciplinas creativas, desarrollo web y metodología de trabajo del estudio.",
      "Módulo de contacto y formulario para cotización y formalización de proyectos creativos."
    ],
    description: "Pulpo Digital es una agencia de diseño y desarrollo digital enfocada en crear experiencias web para marcas y negocios. El proyecto tuvo como objetivo desarrollar una plataforma que comunicara la personalidad de la agencia, mostrara su capacidad creativa y técnica, y guiara al usuario hacia el contacto de manera natural. La experiencia combina una identidad visual dinámica con una estructura clara y orientada a la conversión.",
    caseStudy: {
      contexto: {
        overview: "Pulpo Digital es una agencia creativa que desarrolla identidades de marca, estrategias digitales y sitios web de alto impacto estético. Su plataforma web debía reflejar la vanguardia visual del estudio manteniendo un rendimiento técnico impecable.",
        dataCards: [
          {
            value: "Editorial",
            label: "Identidad Visual",
            description: "Composición tipográfica y ritmo visual dinámico en cada sección."
          },
          {
            value: "Astro",
            label: "Framework Web",
            description: "Carga ágil y arquitectura modular para mostrar proyectos multimedia."
          },
          {
            value: "Creativo",
            label: "Enfoque de Estudio",
            description: "Equilibrio entre diseño gráfico expresivo y arquitectura funcional."
          }
        ]
      },
      problema: {
        overview: "La presencia digital anterior del estudio presentaba sus trabajos de manera estática y convencional, sin transmitir el dinamismo ni el rigor conceptual detrás de cada entregable de diseño, restando impacto al momento de competir por proyectos de alto nivel.",
        comparison: {
          leftTitle: "Desafío Inicial",
          leftContent: [
            "Presentación estática de proyectos sin contexto narrativo del proceso creativo.",
            "Tiempos de carga lentos por falta de optimización de activos multimedia pesados.",
            "Falta de coherencia entre la calidad de los proyectos y la web propia del estudio."
          ],
          rightTitle: "Enfoque UX/UI",
          rightContent: [
            "Rediseño editorial con transiciones suaves y visualización inmersiva de trabajos.",
            "Optimización de video y componentes en Astro para lograr máxima velocidad de carga.",
            "Estructura orientada al descubrimiento intuitivo y llamada al contacto transparente."
          ]
        }
      },
      aiWorkflow: {
        overview: "Implementación de IA para explorar variantes tipográficas y acelerar el refinamiento de código front-end:",
        flowSteps: [
          {
            stepNumber: "01",
            title: "Exploración de Layouts",
            description: "Pruebas de composiciones asimétricas y ritmo tipográfico asistidas por herramientas de IA generativa."
          },
          {
            stepNumber: "02",
            title: "Optimización de Assets",
            description: "Asistencia de scripts con IA para comprimir y convertir videos y gráficos sin pérdida visible de calidad."
          },
          {
            stepNumber: "03",
            title: "Componentes en Astro",
            description: "Generación acelerada de estructuras modulares para el portafolio y transiciones entre proyectos."
          },
          {
            stepNumber: "04",
            title: "Pruebas de Rendimiento",
            description: "Auditoría asistida de accesibilidad y Core Web Vitals para asegurar fluidez en cualquier navegador."
          }
        ]
      },
      outcome: {
        overview: "Se logró un rediseño web editorial y dinámico que consolida el posicionamiento de Pulpo Digital como agencia creativa de primer nivel, mostrando su portafolio con alto impacto visual y facilitando el contacto con clientes potenciales.",
        keyPoints: [
          "Identidad digital sólida con transiciones fluidas y armonía tipográfica.",
          "Tiempos de carga mínimos a pesar del uso intensivo de video y fotografía en alta resolución.",
          "Canal de contacto accesible y adaptado para clientes que buscan cotizaciones rápidas."
        ]
      },
      improvements: {
        overview: "Próximas incorporaciones planificadas para enriquecer el portafolio del estudio:",
        items: [
          "Sistema de filtrado interactivo de proyectos por tipo de disciplina (branding, web, motion, 3D).",
          "Visor interactivo de guías de estilo de marca con paletas de color y tipografía explorables.",
          "Microinteracciones personalizadas en el cursor para navegación en dispositivos de escritorio."
        ]
      }
    }
  }
];
