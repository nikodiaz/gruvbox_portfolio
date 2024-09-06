import { FC } from 'react'
import styles from './project.module.css'
import ProjectCard from './ProjectCard'

const projectsEnglish = [
  {
    title: "URL Shortener",
    description: "Simple URL shortener that allows you to shorten long URLs and redirect to the original URL using the generated shortlink.",
    image: "https://private-user-images.githubusercontent.com/20620395/364559165-052869c2-30ba-4be8-8fd0-7974a7fed162.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU2NTE5NTcsIm5iZiI6MTcyNTY1MTY1NywicGF0aCI6Ii8yMDYyMDM5NS8zNjQ1NTkxNjUtMDUyODY5YzItMzBiYS00YmU4LThmZDAtNzk3NGE3ZmVkMTYyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTA2VDE5NDA1N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc5MWM2ZmVmNWIwMGQzY2E1NmU2NjVlOWQ1N2I5M2NiMjIwYTQ1ZGQ0YmMzOWE5MTRhYzE3ODYyNjhhY2I5MmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.nsIZWyQWljcFgqd6QiAHZ7lR8icuA0Witx3EZs7qwKA",
    techStack: ["TypeScript", "React", "Node", "TailwindCSS", "MongoDB", "Express"],
    link: "https://github.com/nikodiaz/url-shortener-ui",
    live: ""
  },
  {
    title: "Barapack",
    description: "Freelance landing page project for Barapack, a leading freight and parcel transport company.",
    image: "https://private-user-images.githubusercontent.com/20620395/365277389-38b03832-d751-4d20-8753-26237dfc4b84.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU2NTIyMTIsIm5iZiI6MTcyNTY1MTkxMiwicGF0aCI6Ii8yMDYyMDM5NS8zNjUyNzczODktMzhiMDM4MzItZDc1MS00ZDIwLTg3NTMtMjYyMzdkZmM0Yjg0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTA2VDE5NDUxMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWI0ZmJiMDg4YjkxN2QwMDQ2ZGI3YjFjY2ZmMzc4NjU4MzhhMWFhZWVlMDBiMDQ0ZjgwZjY4NjE3MTgzMzc3OGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.HgHZMSbjJ9rS5FE3PBSm4S7H7FCexr_fsYL4yPLyqug",
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
    image: "https://private-user-images.githubusercontent.com/20620395/364559165-052869c2-30ba-4be8-8fd0-7974a7fed162.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU2NTE5NTcsIm5iZiI6MTcyNTY1MTY1NywicGF0aCI6Ii8yMDYyMDM5NS8zNjQ1NTkxNjUtMDUyODY5YzItMzBiYS00YmU4LThmZDAtNzk3NGE3ZmVkMTYyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTA2VDE5NDA1N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc5MWM2ZmVmNWIwMGQzY2E1NmU2NjVlOWQ1N2I5M2NiMjIwYTQ1ZGQ0YmMzOWE5MTRhYzE3ODYyNjhhY2I5MmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.nsIZWyQWljcFgqd6QiAHZ7lR8icuA0Witx3EZs7qwKA",
    techStack: ["TypeScript", "React", "Node", "TailwindCSS", "MongoDB", "Express"],
    link: "https://github.com/nikodiaz/url-shortener-ui",
    live: ""
  },
  {
    title: "Barapack",
    description: "Proyecto de landing page freelance para Barapack, empresa líder en transporte de mercancías y paquetería.",
    image: "https://private-user-images.githubusercontent.com/20620395/365277389-38b03832-d751-4d20-8753-26237dfc4b84.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU2NTIyMTIsIm5iZiI6MTcyNTY1MTkxMiwicGF0aCI6Ii8yMDYyMDM5NS8zNjUyNzczODktMzhiMDM4MzItZDc1MS00ZDIwLTg3NTMtMjYyMzdkZmM0Yjg0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTA2VDE5NDUxMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWI0ZmJiMDg4YjkxN2QwMDQ2ZGI3YjFjY2ZmMzc4NjU4MzhhMWFhZWVlMDBiMDQ0ZjgwZjY4NjE3MTgzMzc3OGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.HgHZMSbjJ9rS5FE3PBSm4S7H7FCexr_fsYL4yPLyqug",
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
