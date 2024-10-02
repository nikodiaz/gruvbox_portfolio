import { FileDown, Github, Linkedin } from 'lucide-react'
import styles from './home.module.css'

const SocialButtons = ({ language }: { language: 'es' | 'en' }) => {
  return (
    <div className={styles.containerButtons}>
      <a href='https://www.linkedin.com/in/bnicolasdiaz/'
        className={styles.linkedin}
        target='_blank'
        rel='noopener noreferrer'>
        <Linkedin size={18} />LinkedIn
      </a>
      <a href='https://github.com/nikodiaz'
        className={styles.github}
        target='_blank'
        rel='noopener noreferrer'>
        <Github size={18} />Github
      </a>
      <a href={language === 'es' ? '/docs/Nicolás-Díaz-CV-Español.pdf' : '/docs/Nicolás-Díaz-CV-English.pdf'}
        className={styles.cv}
        download
        rel='noopener noreferrer'>
        <FileDown size={18} />{language === 'es' ? 'Descargar' : 'Download'} CV
      </a>
    </div>
  )
}

export default SocialButtons
