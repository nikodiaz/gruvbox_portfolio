import { FC, useState } from "react";
import styles from "./navbar.module.css";
import { Briefcase, FolderOpen, Home, Menu } from "lucide-react";

interface Props {
  theme: 'dark' | 'light'
  language: 'es' | 'en'
}

const Navbar: FC<Props> = ({ theme, language }) => {
  const [activeLink, setActiveLink] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const listOptions = [
    { name: language === 'en' ? 'Home' : 'Inicio', icon: Home, section: 'home' },
    { name: language === 'en' ? 'Experience' : 'Experiencia', icon: Briefcase, section: 'experience' },
    { name: language === 'en' ? 'Projects' : 'Proyectos', icon: FolderOpen, section: 'projects' },
  ]
  const handleNavigation = (index: number, section: string) => {
    setActiveLink(index);
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth',
    });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <div className={styles.containerNav}>
        <div className={styles.navbarInner}>
          <div className={styles.brand}>
            <span className={styles.brandName}>Nicolás Díaz</span>
          </div>
          <div className={styles.desktopMenu}>
            <div className={styles.navLinks}>
              {listOptions.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(index, item.section)}
                  className={`${styles.navLink} ${activeLink === index ? styles.activeLink : ''}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.mobileMenuButton}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={styles.menuIcon}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuLinks}>
            {listOptions.map((item, index) => (
              <button
                key={item.name}
                onClick={() => {
                  handleNavigation(index, item.section)
                }}
                className={`${styles.mobileNavLink} ${activeLink === index ? styles.activeMobileLink : ''}`}              >
                <item.icon className="inline-block mr-2" size={18} />
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>);
};

export default Navbar;
