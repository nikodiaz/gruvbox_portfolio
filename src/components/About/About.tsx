import { FC } from "react";
import styles from "./about.module.css";
import SocialButtons from "../Home/SocialButtons";

interface Props {
  theme: 'light' | 'dark'
  language: 'es' | 'en'
}

const aboutEnglish = {
  title: "About Me",
  description: [
    "Hi! My name is Nicolas Diaz, a web developer with over 2 years of experience. With a focus on web technologies, I specialize in creating efficient, scalable, and user-friendly applications",
    "My introduction to programming began in the Bachelor's degree in Systems. Although I was unable to complete it, I have continued to hone my skills through practical experience and self-taught learning. I am proficient in technologies such as TypeScript, React, Next.js, Node.js, and MongoDB, allowing me to tackle projects on both the front-end and back-end.",
    "I especially focus on creating intuitive user interfaces and optimizing application performance.",
    "I am always eager to take on new challenges and work on innovative projects that allow me to continue growing as a developer."
  ],
  cta: "Let's build something amazing together!"
}

const aboutSpanish = {
  title: "Sobre Mí",
  description: [
    "¡Hola! Me llamo Nicolás Díaz, desarrollador web con más de 2 años de experiencia. Con una orientación en tecnologías web, me especializo en la creación de aplicaciones eficientes, escalables y fáciles de usar.",
    "Mi introducción a la programación comenzó en la carrera de Licenciatura en Sistemas. Aunque no pude concluirla, he seguido perfeccionando mis habilidades a través de la experiencia práctica y el aprendizaje autodidacta. Soy competente en tecnologías como TypeScript, React, Next.js, Node.js, y MongoDB, lo que me permite abordar proyectos tanto en el front-end como en el back-end.",
    "Me enfoco especialmente en la creación de interfaces de usuario intuitivas y la optimización del rendimiento de las aplicaciones.",
    "Siempre estoy ansioso por asumir nuevos desafíos y trabajar en proyectos innovadores que me permitan seguir creciendo como desarrollador."
  ],
  cta: "¡Construyamos algo increíble juntos!"
}

const About: FC<Props> = ({ theme, language }) => {
  const about = language === 'es' ? aboutSpanish : aboutEnglish
  return (
    <section className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`} id="about">
      <h2 className={styles.sectionTitle}>{about.title}</h2>
      <article className={styles.content}>
        <>
          {about.description.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </>
        <div className={styles.ctaContainer}>
          <p className={styles.cta}>{about.cta}</p>
          <SocialButtons language={language} />
        </div>
      </article>
    </section>
  );
};

export default About;
