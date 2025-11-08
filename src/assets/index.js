import Pipe from "./projects/Pipe.png";
import homeland from "./projects/homeland.png";
import hotel from "./projects/hotel.png";
import ncrt from "./projects/ncrt.png";
import notesApp from "./projects/notesApp.png";

import coderhouse from "./courses/coderhouse.png";
import plataforma5 from "./courses/plataforma5.png";
import google from "./courses/google.png";

export const HERO_CONTENT = `Soy Thomas, Full Stack Developer de 25 años, apasionado por crear aplicaciones modernas y escalables. Me destaco por mi aprendizaje constante, mis habilidades para trabajar en equipo y mi compromiso por seguir creciendo como desarrollador, profesional y persona.`;

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
    title: "Programación Backend (III): Testing y Escalabilidad | Presente",
    image: coderhouse,
    description: `Curso orientado al perfeccionamiento de habilidades backend mediante la implementación de testing automatizado, optimización del rendimiento y diseño de sistemas escalables. Aprendí a trabajar con mocks, normalización, logs, debugging y profiling, además de incorporar prácticas de versionado, documentación de APIs REST y despliegue en la nube. El curso también abordó clustering, Kubernetes y frameworks modernos como NestJS, consolidando una visión profesional del desarrollo backend a gran escala.`,
    technologies: ["Programación", "FullStack", "CRUD", "MERN", "testing", "NestJS"],
  },
  {
    title: "Programación Backend II: Diseño y Arquitectura Backend | Oct 9 - 2025",
    image: coderhouse,
    description: `Curso enfocado en el diseño de arquitecturas backend escalables y mantenibles, aplicando patrones de diseño, arquitectura en capas y buenas prácticas de estructuración de proyectos. Aprendí a integrar sistemas de autenticación y autorización seguros, optimizando la comunicación entre servicios y garantizando aplicaciones robustas, eficientes y profesionales.`,
    technologies: ["Programación", "FullStack", "CRUD", "MERN", "jwt", "cookies"],
  },
  {
    title: "Programación Backend I: Desarrollo Avanzado de Backend | Jul 31 - 2025",
    image: coderhouse,
    description: `Curso enfocado en el desarrollo de APIs robustas y escalables, con énfasis en la gestión de bases de datos NoSQL y las buenas prácticas de arquitectura backend. Aprendí a diseñar y construir aplicaciones eficientes, aplicando técnicas avanzadas de comunicación entre servicios y control de grandes volúmenes de datos.`,
    technologies: ["Programación", "FullStack", "CRUD", "MERN", "JS"],
  },
  {
    title: "Coding Bootcamp | Dic 18 - 2021",
    image: plataforma5,
    description: `Programa intensivo de más de 800 horas de formación práctica enfocado en el desarrollo Full Stack con JavaScript. A lo largo del bootcamp trabajé en proyectos reales, fortaleciendo tanto mis habilidades técnicas como blandas. Aprendí a desarrollar aplicaciones completas utilizando las últimas tecnologías del ecosistema web, preparándome para mi inserción laboral en la industria IT.`,
    technologies: ["Programación", "FullStack", "CRUD", "MERN", "JS"],
  },
  {
    title: "Curso Introductorio de Programación | Ago 13 - 2020",
    image: plataforma5,
    description: `Aprendí los fundamentos de la programación web y la lógica con JavaScript, junto con el uso de HTML, CSS y Node.js para crear aplicaciones Full Stack. Como proyecto final, desarrollé mi primer sitio web con operaciones CRUD, integrando frontend y backend de forma funcional.`,
    technologies: ["Programación", "HTML", "CSS", "JS"],
  },
  {
    title: "Inteligencia artificial: Generación de Prompts | Dic 10 - 2024",
    image: coderhouse,

    description: `Este curso me permitió comprender cómo comunicarme eficazmente con modelos de IA a través de la creación de prompts claros y estratégicos. Aprendí a controlar el comportamiento y la creatividad de los modelos, optimizando resultados mediante el uso de parámetros y palabras clave. También trabajé con la API de OpenAI en Python, aplicando estos conocimientos para desarrollar proyectos con inteligencia artificial generativa.`,
    technologies: ["Inteligencia Artificial"],
  },
  {
    title: "Fundamentos de Inteligencia Artificial | Ago 19 - 2024",
    image: coderhouse,
    description: `En este curso adquirí una comprensión general de la inteligencia artificial y sus aplicaciones en el mundo real. Aprendí cómo funcionan las herramientas de IA generativa y cómo aplicarlas para mejorar procesos, crear proyectos personales o impulsar la innovación en entornos profesionales.`,
    technologies: ["Inteligencia Artificial"],
  },
  {
    title: "Herramientas del oficio: Linux y SQL | Presente",
    image: google,
    description: `En este curso aprendí los fundamentos de los sistemas operativos y cómo interactúan con el hardware y las aplicaciones. Me introduje en el uso de Linux, practicando comandos en la terminal Bash para navegar, gestionar archivos y administrar usuarios. Además, aprendí a utilizar SQL para consultar bases de datos, filtrar información y combinar tablas, habilidades esenciales para el análisis de seguridad.`,
    technologies: ["Ciberseguridad"],
  },
  {
    title: "Conexión y protección: Redes y seguridad de redes | Sep 18 - 2025",
    image: google,
    description: `En este curso aprendí los fundamentos de las redes informáticas y cómo protegerlas frente a amenazas. Estudié los tipos de redes, los protocolos más usados (como TCP/IP) y las técnicas de seguridad más comunes, incluyendo firewalls, VPNs y endurecimiento de sistemas. También entendí cómo viajan los datos a través de una red y cómo prevenir ataques e intrusiones.`,
    technologies: ["Ciberseguridad"],
  },
  {
    title: "Ve a lo seguro: Gestiona los riesgos de seguridad | May 29 - 2025",
    image: google,
    description: `En este curso aprendí a identificar y evaluar amenazas, riesgos y vulnerabilidades que pueden afectar a una organización. Profundicé en el uso de marcos y controles de seguridad como NIST y la tríada CID, y descubrí cómo las herramientas SIEM ayudan a detectar y responder incidentes. También practiqué cómo realizar auditorías de seguridad y crear planes de acción ante posibles ataques.`,
    technologies: ["Ciberseguridad"],
  },
  {
    title: "Fundamentos de la ciberseguridad | Sep 20 - 2024",
    image: google,
    description: `Introducción al campo de la ciberseguridad y al rol del analista. Aprendí los conceptos básicos de seguridad de la información, los ocho dominios CISSP, los principales marcos y controles de seguridad, y la tríada de confidencialidad, integridad y disponibilidad (CID). También exploré la ética profesional, las herramientas más utilizadas por los analistas y cómo los ataques cibernéticos impactan en las operaciones empresariales.`,
    technologies: ["Ciberseguridad"],
  },
];

export const PROJECTS = [
  {
    title: "Pipe | FullStack",
    image: Pipe,
    description:
      "Aplicación e-commerce full stack desarrollada con el stack MERN. Implementa autenticación con JWT y cookies, sistema de roles, carrito de compras dinámico y envío automático de correo con el resumen de compra. La base de datos está gestionada con MongoDB y cuenta con arquitectura por capas.",
    technologies: ["MERN", "CRUD", "Tailwind"],
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
