import { FC } from 'react'
import styles from './project.module.css'
import ProjectCard from './ProjectCard'

const projectsEnglish = [
  {
    title: "URL Shortener",
    description: "Simple URL shortener that allows you to shorten long URLs and redirect to the original URL using the generated shortlink.",
    image: "https://github.com/nikodiaz/url-shortener-ui/blob/main/public/screenshot.png",
    techStack: ["TypeScript", "React", "Node", "TailwindCSS", "MongoDB", "Express"],
    link: "https://github.com/nikodiaz/url-shortener-ui",
    live: ""
  },
  {
    title: "Barapack",
    description: "Freelance landing page project for Barapack, a leading freight and parcel transport company.",
    image: "https://github.com/nikodiaz/barapack_landing/blob/main/public/screenshot.png",
    techStack: ["TypeScript", "React", "TailwindCSS", "Leaflet", "EmailJS"],
    link: "https://github.com/nikodiaz/barapack_landing",
    live: "https://barapack.com.ar/"
  },
  {
    title: "App Student",
    description: "Third edition of Devathon! With our app, you can create custom to-do lists, set reminders, prioritize tasks, and more.",
    image: "https://github.com/nikodiaz/app-estudiantes/raw/main/public/assets/images/appstudents.png",
    techStack: ["JavaScript", "React", "Redux", "Sass", "Node", "MongoDB", "Express"],
    link: "https://example.com/project3",
    live: ""
  }
];

const projectsSpanish = [
  {
    title: "Acortador de URLs",
    description: "Acortador de URLs simple que permite acortar URLs largas y redirigir a la URL original utilizando el enlace corto generado.",
    image: "https://github.com/nikodiaz/url-shortener-ui/blob/main/public/screenshot.png",
    techStack: ["TypeScript", "React", "Node", "TailwindCSS", "MongoDB", "Express"],
    link: "https://github.com/nikodiaz/url-shortener-ui",
    live: ""
  },
  {
    title: "Barapack",
    description: "Proyecto de landing page freelance para Barapack, empresa líder en transporte de mercancías y paquetería.",
    image: "https://github.com/nikodiaz/barapack_landing/blob/main/public/screenshot.png",
    techStack: ["TypeScript", "React", "TailwindCSS", "Leaflet", "EmailJS"],
    link: "https://github.com/nikodiaz/barapack_landing",
    live: "https://barapack.com.ar/"
  },
  {
    title: "App para estudiantes",
    description: "¡Tercera edición de Devathon! Con nuestra aplicación, puedes crear listas de tareas personalizadas, establecer recordatorios, priorizar tareas y más.",
    image: "https://github.com/nikodiaz/app-estudiantes/raw/main/public/assets/images/appstudents.png",
    techStack: ["JavaScript", "React", "Redux", "Sass", "Node", "MongoDB", "Express"],
    link: "https://example.com/project3",
    live: ""
  }
];
interface Props {
  language: 'es' | 'en'
  theme: 'dark' | 'light'
}

export interface Project {
  title: string
  description: string
  image: string
  techStack: string[]
  link: string
  live: string
}

const Projects: FC<Props> = ({ theme, language }) => {
  const projects = language === 'es' ? projectsSpanish : projectsEnglish;

  return (
    <section id='projects' className={styles.container}>
      <h2 className={styles.sectionTitle}> {language === 'es' ? 'Proyectos' : 'Projects'}</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} theme={theme} />
        ))}
      </div>
    </section>
  )
}

export default Projects
