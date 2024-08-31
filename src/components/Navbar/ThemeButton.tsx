
import { Globe, Moon, Sun } from "lucide-react";
import { FC } from "react";
import styles from "./themeButton.module.css";

interface Props {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

const ThemeButton: FC<Props> = ({ theme, toggleTheme, toggleLanguage }) => {
  return (
    <div className={styles.containerControl}>
      <button
        onClick={toggleLanguage}
        className={`${styles.iconButton} ${theme === 'dark' ? styles.dark : styles.light}`}
      >
        <Globe size={24} />
      </button>
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

