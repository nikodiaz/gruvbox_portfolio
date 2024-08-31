import styles from "./home.module.css";

const Home = ({ theme }: { theme: 'dark' | 'light' }) => {
  return (
    <section id="home" className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <h1 className={styles.title}>I'm Nicolás Díaz</h1>
      <h2 className={styles.subtitle}>
        Front end developer 🖥️{`${window.innerWidth > 640 ? ' / Linux Cultist 🐧 / Geek 🎮'
          : ''}`}
      </h2>
    </section>
  );
};

export default Home;
