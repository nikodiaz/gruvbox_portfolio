import styles from "./about.module.css";

const About = () => {
  return (
    <section className={styles.container} id="#about">
      <h2 className={styles.sectionTitle}>Sobre Mí</h2>
      <article className={styles.content}></article>
    </section>
  );
};

export default About;
