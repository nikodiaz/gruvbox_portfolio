import { FC } from "react"
import styles from './experience.module.css'

const experiencesEnglish = [
  {
    time: "2023",
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    description: "Led development of scalable web applications using React and Node.js. Implemented CI/CD pipelines and mentored junior developers."
  },
  {
    time: "2021",
    title: "Full Stack Developer",
    company: "InnoSoft Solutions",
    description: "Developed and maintained multiple client projects. Worked with React, Express, and MongoDB to create robust web applications."
  },
  {
    time: "2019",
    title: "Junior Web Developer",
    company: "WebWizards LLC",
    description: "Started career in web development. Assisted in front-end development using HTML, CSS, and JavaScript. Learned React and Node.js."
  }
]

const experiencesSpanish = [
  {
    time: "2023",
    title: "Desarrollador Full Stack Senior",
    company: "TechCorp Inc.",
    description: "Lideró el desarrollo de aplicaciones web escalables usando React y Node.js. Implementó pipelines de CI/CD y mentoreó a desarrolladores junior."
  },
  {
    time: "2021",
    title: "Desarrollador Full Stack",
    company: "InnoSoft Solutions",
    description: "Desarrolló y mantuvo múltiples proyectos para clientes. Trabajó con React, Express y MongoDB para crear aplicaciones web robustas."
  },
  {
    time: "2019",
    title: "Desarrollador Web Junior",
    company: "WebWizards LLC",
    description: "Comenzó su carrera en el desarrollo web. Asistió en el desarrollo front-end usando HTML, CSS y JavaScript. Aprendió React y Node.js."
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
