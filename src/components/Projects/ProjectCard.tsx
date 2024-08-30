import { ExternalLink } from 'lucide-react'
import styles from './project.module.css'
import { Project } from './Projects'
import { FC } from 'react'

interface Props {
  theme: string
  project: Project
}

const ProjectCard: FC<Props> = ({ project, theme }) => {
  return (
    <div className={`${styles.projectCard} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <img src={project.image} alt={project.title} className={styles.projectImage} />
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <p className={styles.projectDescription}>{project.description}</p>
      <div className={styles.techStack}>
        {project.techStack.map((tech: string, techIndex: number) => (
          <span key={techIndex} className={`${styles.techBadge} ${theme === 'dark' ? styles.darkBadge : styles.lightBadge}`}>
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.projectLink}
      >
        View Project <ExternalLink className="ml-1 w-4 h-4" />
      </a>
    </div>

  )
}

export default ProjectCard
