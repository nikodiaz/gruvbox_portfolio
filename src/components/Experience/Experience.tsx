import { FC } from "react"
import styles from './experience.module.css'

const experiencesEnglish = [
  {
    time: "2024 - Present",
    title: "Front End Developer",
    company: "Devocamp",
    description: "Developed functional and attractive interfaces with ReactJS and Next.js. Implemented responsive designs and performed end-to-end testing with Cypress. Participated in team meetings and version control with Git and GitHub."
  }

]

const experiencesSpanish = [
  {
    time: "2024 - Actualidad",
    title: "Desarrollador Front End",
    company: "Devocamp",
    description: "Desarrollo de interfaces atractivas y funcionales con ReactJS y Next.js. Implementación de diseños responsivos y pruebas end-to-end con Cypress. Participación en reuniones de equipo y control de versiones con Git y GitHub."
  }
];


interface Props {
  theme: 'light' | 'dark'
  language: 'es' | 'en'
}

const Experience: FC<Props> = ({ theme, language }) => {
  const experiences = language === 'es' ? experiencesSpanish : experiencesEnglish;
  return (
    <section id="experience" className={styles.container}>
      <h2
        className={`${styles.sectionTitle}`} >
        Experienc{language === 'es' ? 'ia' : 'e'}
      </h2>
      <>
        <div style={{ marginTop: '1rem' }}>
          {experiences.map((exp, index) => (
            <div key={index} className={`${styles.card} ${theme === 'dark' ? styles.dark : styles.light}`}>
              <h3 className={styles.title}>{exp.title}</h3>
              <h4 className={styles.companyTime}>{exp.company} | {exp.time}</h4>
              <p className={styles.description}>{exp.description}</p>
            </div>
          ))}
        </div>
      </>
    </section >
  )
}

export default Experience
