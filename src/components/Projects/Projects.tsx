import styles from './project.module.css'
import { Github, Sun, Moon, ExternalLink, User, Briefcase, Code, FolderOpen, Mail, Menu } from 'lucide-react'
import ProjectCard from './ProjectCard'

const projects = [
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
]

export interface Project {
  title: string
  description: string
  image: string
  techStack: string[]
  link: string
}

const Projects = ({ theme }: { theme: 'dark' | 'light' }) => {
  return (
    <section id='projects' className={styles.container}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} theme={theme} />
        ))}
      </div>
    </section>
  )
}

export default Projects
