# Portafolio Web - Daniela

Arquitectura base del portafolio personal construida con Astro, Tailwind CSS y JavaScript.

## 🛠️ Tecnologías

- **Astro** (Framework Web)
- **Tailwind CSS v4** (Estilos globales y utilidades)
- **TypeScript / JavaScript** (Tipado y lógica de datos)
- **Netlify Adapter** (`@astrojs/netlify`) preparado para despliegue continuo

---

## 📁 Estructura del Proyecto

```text
├── public/
│   └── assets/
│       ├── images/        # Imágenes y miniaturas de proyectos
│       └── videos/        # Videos e iteraciones de showcase
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectGrid.astro
│   │   ├── ProjectInfo.astro
│   │   └── VideoShowcase.astro
│   ├── data/
│   │   └── projects.ts    # Estructura centralizada de datos de proyectos
│   ├── layouts/
│   │   └── Layout.astro   # Layout base de la aplicación
│   ├── pages/
│   │   ├── index.astro             # Página de Inicio (Home)
│   │   └── proyectos/
│   │       ├── index.astro         # Catálogo de Proyectos
│   │       └── [slug].astro        # Página individual dinámica de cada proyecto
│   └── styles/
│       └── global.css      # Estilos globales y configuración Tailwind CSS
├── astro.config.mjs        # Configuración de Astro y adaptador Netlify
└── package.json            # Dependencias y scripts de ejecución
```

---

## 🚀 Proyectos Iniciales Configurados

1. **Michoacaníssimo** (`/proyectos/michoacanissimo`)
2. **Eco Orbit Adventures** (`/proyectos/eco-orbit-adventures`)
3. **Byral Solutions** (`/proyectos/byral-solutions`)
4. **Pulpo Digital** (`/proyectos/pulpo-digital`)

---

## 💻 Ejecución Local

1. Instalar dependencias (ya configuradas en la arquitectura):
   ```bash
   npm install
   ```

2. Ejecutar el servidor de desarrollo local:
   ```bash
   npm run dev
   ```

3. Abrir en el navegador: `http://localhost:4321`

---

## 🌐 Despliegue en Netlify

El archivo `astro.config.mjs` utiliza `@astrojs/netlify`. Para desplegar:
1. Conectar el repositorio de GitHub a Netlify.
2. Comando de construcción (*Build command*): `npm run build` o `astro build`.
3. Directorio de publicación (*Publish directory*): `dist`.
