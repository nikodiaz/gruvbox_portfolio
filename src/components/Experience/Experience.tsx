import { FC } from "react"
import styles from './experience.module.css'

const experiences = [
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

interface Props {
  theme: 'light' | 'dark'
}

const Experience: FC<Props> = ({ theme = 'dark' }) => {
  return (
    <section className={styles.container}>
      <h2
        className={`${styles.sectionTitle}`} >
        Experience
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
