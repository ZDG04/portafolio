export const profile = {
  name: "Zarith Gómez",
  roles: ["Ingeniera de datos", "Analista de datos", "Desarrollador Full-Stack", "Ciberseguridad"],
  intro: "Desarrolladora de software e ingeniera de sistemas, Especialista en Analítica Estratégica de Datos. ",
  email: "zarithgomez2014@gmail.com",
  location: "Colombia",
  github: "https://github.com/ZDG04",
  linkedin: "https://www.linkedin.com/in/zarithgomez",
  cv: "CV.pdf",
};

export const nav = [
  { id: "inicio", label: "Inicio" },
  { id: "proyectos", label: "Proyectos" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "educacion", label: "Educación" },
  { id: "experiencia", label: "Experiencia" },
  { id: "certificados", label: "Certificados" },
  { id: "hobbies", label: "Hobbies" },
];

export const projects = [
  { title: "Sistema de predicción de renovación de pólizas de seguros", 
    text: "Sistema de predicción de renovación de pólizas de seguros mediante Machine Learning, desarrollado con Python y Streamlit. Permite analizar información financiera, características de las pólizas y variables operativas para estimar la probabilidad de renovación y facilitar la identificación de pólizas con mayor riesgo de no renovación. Siguiendo los pasos desde los datos en crudo hasta la creación de un modelo que permita predeccirlo.", 
    category: "data", 
    tags: ["React", "Jupyter", "Streamlit"],
    year: "2026", 
    colors: ["#ff4fa3", "#ff9d6c"], 
    icon: "spark", 
    demo: "https://proyectofinalaed2026.streamlit.app/", 
    repo1: "https://github.com/ZarithG/Preprocesamiento_Polizas.git",
    namerepo1: "Preprocesamiento",
    repo2: "https://github.com/ZarithG/Modelado_Polizas.git",
    namerepo2: "Modelado",
    repo3: "https://github.com/ZarithG/dashboard_proyecto_final.git",
    namerepo3: "Dashboard"},
  /*{ title: "Dashboard financiero", 
  text: "Métricas claras y en tiempo real.", 
  category: "app", 
  tags: ["JavaScript", "Recharts"], 
  year: "2025", 
  colors: ["#3b2f8f", "#9b7dff"], 
  icon: "db", 
  demo: "#", 
  repo: "#" },  */
  {
    title: "Centro de Acondicionamiento Físico (CAF) - UPTC",
    text: "Sistema web para la gestión de usuarios y agendamiento de turnos de los Centros de Acondicionamiento Físico (CAF) de la UPTC. Desarrollado con React, Java (Spring Boot) y MySQL, permite optimizar la administración de usuarios y la programación de turnos mediante una plataforma intuitiva y responsiva.",
    category: "code",
    tags: ["SpringBoot", "React", "Tailwind CSS", "MySQL", "Docker", "DevOps"],
    year: "2024",
    colors: ["#ff6fb5", "#7c5cff"],
    icon: "flower",
    repo1: "https://github.com/ZarithG/Front_Gestion_CAF",
    namerepo1: "Front-End",
    repo2: "https://github.com/ZarithG/Back_Gestion_CAF",
    namerepo2: "Back-End"
  },
  {
    title: "Aplicación para gestionar turnos",
    text: "Gestor de turnos que permitiendo asignaciones personalizadas y registro mediante redes sociales. El sistema incluyó autenticación segura con Keycloak y vistas adaptadas según el tipo de usuario. Se aplico una arquitectura de microservicios. El trabajo se gestionó con la metodología ágil Kanban",
    category: "code",
    tags: ["SpringBoot", "React", "Neo4J", "MongoDB", "MySQL", "Docker"],
    year: "2024",
    colors: ["#2a2f6e", "#ff4fa3"],
    icon: "code",
    repo1: "https://github.com/lili195/gestion-turnos"
  },
  //{ title: "Tienda de perfumes", text: "Tema personalizado en Shopify.", category: "tienda", tags: ["Shopify", "Liquid"], year: "2024", colors: ["#a87bff", "#ffd0e8"], icon: "pen", demo: "#", repo: "#" },
];

export const filters = [
  { id: "Todos", label: "Todos" }, //{ id: "ciber", label: "Ciberseguridad" },
  { id: "data", label: "Datos" }, { id: "code", label: "Desarrollo" },
];

export const philosophy = [
  { title: "Mi ???", text: "Mezclo inspiración y tecnología moderna para crear interfaces únicas, rápidas y agradables de usar. Reemplaza este texto por el tuyo." },
  { title: "Mi misión", text: "Convertir ideas complejas en productos claros, responsivos y accesibles que conecten con las personas." },
];

export const stack = [
  { group: "Lenguajes", icon: "terminal", items: ["Python", "JavaScript", "TypeScript", "Java", "Node.js"] },
  { group: "Frontend", icon: "layout", items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { group: "Bases de datos", icon: "db", items: ["PostgreSQL", "MongoDB"] },
  { group: "QA y Testing", icon: "check", items: ["Selenium", "JMeter", "Jest", "Postman", "Pruebas funcionales", "Pruebas no funcionales"] },
  { group: "DevOps y herramientas", icon: "server", items: ["Docker", "Kubernetes", "Git / GitHub", "Prometheus", "Jira"] },
  { group: "Nube", icon: "cloud", items: ["AWS (S3, Glue, Athena, DataZone)", "Azure"] },
  { group: "Ciberseguridad", icon: "shield", items: ["Linux", "Fundamentos ISO 27001", "Telemática aplicada a seguridad"] },
  { group: "Analítica e IA", icon: "chip", items: ["Big Data", "TensorFlow", "PyTorch", "Machine Learning"] },
  { group: "Metodologías", icon: "workflow", items: ["Scrum", "Agile", "Design Thinking"] },
];

export const education = [
  { title: "Especialización en Analítica Estratégica de Datos", when: "Agosto 2025 – Agosto 2026", text: "Universidad Pedagógica y Tecnológica de Colombia" },
  { title: "Ingeniería de Sistemas y Computación ", when: "Agosto 2020 – Diciembre 2025", text: "Universidad Pedagógica y Tecnológica de Colombia" },
];

export const certificates = [
  { title: "GCI World 2026 – April · The University of Tokyo · 2026", when: "Formación en ciencia de datos e inteligencia artificial con enfoque práctico.", text: "Python, ciencia de datos, análisis de datos, aprendizaje automático y desarrollo de soluciones en entornos colaborativos" },
  { title: "Ciberseguridad de Google · Google · 2024", when: "Programa enfocado en fundamentos de ciberseguridad y protección de la información.", text: "gestión de riesgos, controles de seguridad, fundamentos de ISO 27001 y prácticas en entornos Linux. " },
  { title: "Codificación y Programación · Samsung Innovation Campus · Pontificia Universidad Javeriana · 2022", when: "Formación en desarrollo de software y fundamentos de programación.", text: " lógica de programación, desarrollo web, estructuras básicas y buenas prácticas." },
  { title: "Programa Misión TIC Ruta 2 · Universidad El Bosque · 2021", when: "Formación en programación y desarrollo de software.", text: "fundamentos de programación, desarrollo de aplicaciones y trabajo con tecnologías base." },
];

export const experience = [
  { title: "Desarrollador de Automatizaciones e Inteligencia Artificial - Paramo Digital", when: "Febrero 2026 – Marzo 2026", text: "Desarrollo de módulos personalizados según requerimientos de clientes. \n• Desarrollo de soluciones empresariales y automatización de procesos sobre ERP \n• Gestión y configuración de servidores Hetzner para despliegue y funcionamiento de soluciones.   \n• Adaptación de funcionalidades del sistema para optimizar procesos internos de negocio. " },
  { title: "Practicante Full-Stack - IBM", when: "Enero 2025 – Julio 2025", text: "● Desarrollo de aplicaciones full-stack con enfoque en interfaces web.   \n● Implementación de pruebas de código y corrección de vulnerabilidades.   \n● Participación  en  equipos  multidisciplinarios  e  internacionales  con  metodologías  ágiles  (Scrum,  Design Thinking). \n● Implementación de buenas prácticas de desarrollo colaborativo que mejoraron la calidad del software" },
];

export const hobbies = [
  { icon: "game", title: "Videojuegos", text: "Aventuras y mundos abiertos" },
  { icon: "music", title: "Música", text: "Mi banda sonora al programar" },
  { icon: "camera", title: "Fotografía", text: "Paisajes de mi tierra" },
  { icon: "book", title: "Lectura", text: "Tecnología y ficción" },
];

