
import { Github, Moon, Sun } from "lucide-react";
import { FC } from "react";
import styles from "./themeButton.module.css";

interface Props {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const ThemeButton: FC<Props> = ({ theme, toggleTheme }) => {
  return (
    <div className={styles.containerControl}>
      <a
        href="https://github.com/nikodiaz"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.iconButton} ${theme === 'dark' ? styles.dark : styles.light}`}
      >
        <Github size={24} />
      </a>
      <button
        onClick={toggleTheme}
        className={`${styles.iconButton} ${theme === 'dark' ? styles.dark : styles.light}`}
      >
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  );
};

export default ThemeButton;

