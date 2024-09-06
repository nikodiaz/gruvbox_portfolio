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
      <div className={styles.groupLinks}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projectLink}
        >
          Github <ExternalLink className={styles.externalLinkIcon} />
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            Live <ExternalLink className={styles.externalLinkIcon} />
          </a>

        )}
      </div>
    </div>

  )
}

export default ProjectCard
