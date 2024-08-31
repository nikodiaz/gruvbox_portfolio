import { FC } from 'react'
import styles from './project.module.css'
import ProjectCard from './ProjectCard'

const projectsEnglish = [
  {
    title: "Retro Task Manager",
    description: "A retro-inspired task management application built with React and Firebase.",
    image: "https://placehold.co/600x400",
    techStack: ["React", "Firebase"],
    link: "https://example.com/project1"
  },
  {
    title: "AI Text Adventure",
    description: "An AI-powered chatbot that mimics the style of old text adventure games.",
    image: "https://placehold.co/600x400",
    techStack: ["Python", "TensorFlow"],
    link: "https://example.com/project2"
  },
  {
    title: "Blockchain Voting System",
    description: "A blockchain-based voting system with a command-line interface.",
    image: "https://placehold.co/600x400",
    techStack: ["Ethereum", "Solidity"],
    link: "https://example.com/project3"
  }
];

const projectsSpanish = [
  {
    title: "Gestor de Tareas Retro",
    description: "Una aplicación de gestión de tareas inspirada en la retro, construida con React y Firebase.",
    image: "https://placehold.co/600x400",
    techStack: ["React", "Firebase"],
    link: "https://example.com/project1"
  },
  {
    title: "Aventura de Texto con IA",
    description: "Un chatbot potenciado por IA que imita el estilo de los antiguos juegos de aventura de texto.",
    image: "https://placehold.co/600x400",
    techStack: ["Python", "TensorFlow"],
    link: "https://example.com/project2"
  },
  {
    title: "Sistema de Votación con Blockchain",
    description: "Un sistema de votación basado en blockchain con una interfaz de línea de comandos.",
    image: "https://placehold.co/600x400",
    techStack: ["Ethereum", "Solidity"],
    link: "https://example.com/project3"
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
