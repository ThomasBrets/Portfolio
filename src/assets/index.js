import Pipe from "./projects/Pipe.png";
import homeland from "./projects/homeland.png";
import hotel from "./projects/hotel.png";
import ncrt from "./projects/ncrt.png";
import notesApp from "./projects/notesApp.png";
import amplix from "./projects/amplix.png"

import coderhouse from "./courses/coderhouse.png";
import plataforma5 from "./courses/plataforma5.png";
import google from "./courses/google.png";
import amplixme_logo from "./courses/amplixme_logo.jpeg"

export const HERO_CONTENT = `Full Stack Developer · Backend especializado
Node.js · React · PostgreSQL · MongoDB · TypeScript`;

// src/assets/index.js
// export const ABOUT_TEXT = () => (
//   <>
//     Hola, soy Thomas, Full Stack Developer de 25 años con una gran pasión por el
//     desarrollo backend y la tecnología. Mi camino comenzó en 2020 cuando
//     descubrí la programación mientras estudiaba Administración de Empresas. En
//     2021 completé un bootcamp intensivo de más de{" "}
//     <span className="text-cyan-300 font-bold">800 horas</span> en desarrollo web
//     full-stack, donde aprendí tecnologías como{" "}
//     <span className="text-cyan-300 font-bold">
//       JavaScript, Node.js, Express, React, MongoDB, SQL y TailwindCSS
//     </span>
//     , además de desarrollar habilidades blandas para trabajar en equipo.
//     <br />
//     <br />
//     Desde entonces, he seguido formándome de manera autodidacta, creando
//     proyectos, mejorando mi portfolio y ampliando mis conocimientos. Realicé
//     cursos avanzados de{" "}
//     <span className="text-cyan-300 font-bold">
//       inteligencia artificial, ciberseguridad (certificación de Google) y
//       actualmente estoy cursando una formación avanzada en Backend
//     </span>{" "}
//     (Express, MongoDB, patrones de diseño, escalabilidad y testing). También
//     practico inglés semanalmente para mejorar mi comunicación profesional.
//     <br />
//     <br />
//     Soy una persona responsable, dedicada y colaborativa, siempre en busca de
//     nuevos desafíos. Mi objetivo es conseguir mi primera experiencia laboral en
//     IT y seguir creciendo como{" "}
//     <span className="text-cyan-300 font-bold">
//       desarrollador, profesional y persona
//     </span>
//     .
//   </>
// );

export const EDUCATION = [
   {
    title: "Aceleración Laboral JavaScript / Full Stack JOB-READY | Jun 2026",
    image: amplixme_logo, 
    description: `Programa de aceleración laboral donde trabajé en equipo en FS-0002, un blog fullstack de noticias tecnológicas hoy en producción. Metodología ágil real con sprints, PRs, code reviews y daily meetings. Obtuve la certificación JavaScript Full Stack con calificación JOB-READY (ID: AMP-F8464136).`,
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma", "React", "TailwindCSS", "JWT", "Swagger"],
  },
  {
    title: "Programación Backend (III): Testing y Escalabilidad | 2025",
    image: coderhouse,
    description: `Testing automatizado, optimización del rendimiento y diseño de sistemas escalables. Mocks, logs, debugging, documentación de APIs REST y frameworks modernos como NestJS.`,
    technologies: ["testing", "NestJS", "Node.js"],
  },
  {
    title: "Programación Backend II: Diseño y Arquitectura Backend | Oct 2025",
    image: coderhouse,
    description: `Arquitecturas backend escalables y mantenibles, patrones de diseño, arquitectura en capas y autenticación segura con JWT y cookies.`,
    technologies: ["Node.js", "JWT", "arquitectura en capas"],
  },
  {
    title: "Programación Backend I: Desarrollo Avanzado de Backend | Jul 2025",
    image: coderhouse,
    description: `APIs robustas y escalables con bases de datos NoSQL y buenas prácticas de arquitectura backend.`,
    technologies: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Coding Bootcamp | Dic 2021",
    image: plataforma5,
    description: `Programa intensivo de más de 800 horas de desarrollo Full Stack con JavaScript. Proyectos reales aplicando Node.js, React y MongoDB.`,
    technologies: ["JavaScript", "Node.js", "React", "MongoDB"],
  },
];

export const PROJECTS = [
   {
    title: "FS-0002 | Amplix | FullStack",
    image: amplix, // imagen que vas a agregar
    description:
      "Blog fullstack de noticias tecnológicas desarrollado en equipo con metodología ágil real, sprints, PRs y code reviews. Implementé endpoints REST autenticados con JWT, modelado de datos relacionales con Prisma sobre PostgreSQL, documentación completa con Swagger y configuración de CORS para producción. Proyecto en producción con deploy en Render y Vercel. Certificación JOB-READY (AMP-F8464136).",
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma", "React", "TailwindCSS", "JWT", "Swagger"],
    web: "https://amplix-blog.vercel.app/",
    source_code_links: [
      {
        name: "Frontend",
        url: "https://github.com/amplixme/FS-0002",
      },
    ],
  },
  {
    title: "Pipe | FullStack",
    image: Pipe,
    description:
      "E-commerce fullstack profesional con arquitectura en 6 capas y testing exhaustivo (50+ tests, 78% coverage). Implementa autenticación JWT con HTTP-only cookies, sistema de roles (admin/user), carrito de compras con cálculos en tiempo real, panel de administración y envío automático de emails transaccionales. Frontend con dark mode persistente, animaciones fluidas y diseño 100% responsive. Documentación completa con Swagger/OpenAPI 3.0. Deploy en Vercel (frontend) y Render (backend) con CI/CD automático.",
    technologies: ["Node.js", "Express", "MongoDB", "React", "TailwindCSS", "Jest", "Supertest", "Framer Motion", "Swagger", "Resend"],
    web: "https://pipe-front.vercel.app/",
    source_code_links: [
      {
        name: "Frontend",
        url: "https://github.com/ThomasBrets/Pipe-Front",
      },
      {
        name: "Backend",
        url: "https://github.com/ThomasBrets/Pipe-api",
      },
    ],
  },
  {
    title: "NotesApp | FullStack",
    image: notesApp,
    description:
      "Aplicación full stack de notas desarrollada con el stack MERN. Permite a los usuarios registrarse, iniciar sesión y gestionar sus notas: agregar, editar, eliminar y fijar notas importantes. Implementa autenticación con cookies y persistencia en MongoDB.",
    technologies: ["MERN", "CRUD", "Tailwind"],
    web: "https://notes-app-frontend-pearl.vercel.app/",
    source_code_links: [
      {
        name: "Frontend",
        url: "https://github.com/ThomasBrets/notesApp-frontend",
      },
      {
        name: "Backend",
        url: "https://github.com/ThomasBrets/notesApp-api",
      },
    ],
  },
  {
    title: "Necoruta | Frontend",
    image: ncrt,
    description:
      "Desarrollo de una página web institucional para la empresa de transporte NecoRuta, que presenta sus servicios, muestra las rutas de cobertura en un mapa interactivo con Leaflet y permite el contacto directo a través de un formulario conectado al correo de la empresa.",
    technologies: ["React", "Tailwind", "Leaflet"],
    web: "https://neco-ruta.vercel.app/",
    source_code_links: [
      {
        name: "Frontend",
        url: "https://github.com/ThomasBrets/NecoRuta",
      },
    ],
  },
  {
    title: "Homeland | Frontend",
    image: homeland,
    description:
      "Desarrollo de una aplicación frontend inmobiliaria con React y Tailwind, que permite buscar, filtrar y visualizar propiedades disponibles.",
    technologies: ["React", "Tailwind", "Node"],
    web: "https://real-state-two-kohl.vercel.app/",
    source_code_links: [
      {
        name: "Frontend",
        url: "https://github.com/ThomasBrets/Real-State.git",
      },
    ],
  },
  {
    title: "Aldina Hotel | Frontend",
    image: hotel,
    description:
      "Desarrollo de una aplicación frontend para un hotel, con React y Tailwind, permitiendo visualizar información de habitaciones y realizar reservas.",
    technologies: ["React", "Tailwind", "Node"],
    web: "https://hotel-pearl-seven.vercel.app/",
    source_code_links: [
      {
        name: "Frontend",
        url: "https://github.com/ThomasBrets/Hotel.git",
      },
    ],
  },
];

export const CONTACT = {
  city: "Mar del Plata",
  phone: "2262 501331",
  email: "thomasbrets1999@gmail.com",
};
