import { FC } from "react";
import styles from "./home.module.css";
import SocialButtons from "./SocialButtons";

interface Props {
  theme: 'dark' | 'light'
  language: 'es' | 'en'
}



const Home: FC<Props> = ({ theme, language }) => {

  const homeText = {
    subtitle: language === 'es' ? "Desarrollador front end" : "Front end developer"
  }

  return (
    <section id="home" className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <h1 className={styles.title}>Nicolás Díaz</h1>
      <h2 className={styles.subtitle}>
        {homeText.subtitle} 🖥️
      </h2>
      <SocialButtons language={language} />
    </section>
  );
};

export default Home;
