import { FC, useState } from "react";
import styles from "./navbar.module.css";
import { Briefcase, Code, FolderOpen, Mail, Menu } from "lucide-react";

interface Props {
  theme: 'dark' | 'light'
}

const Navbar: FC<Props> = ({ theme }) => {
  const [activeLink, setActiveLink] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const listOptions = [
    { name: 'Experience', icon: Briefcase, section: 'experience' },
    { name: 'Skills', icon: Code, section: 'skills' },
    { name: 'Projects', icon: FolderOpen, section: 'projects' },
    { name: 'Contact', icon: Mail, section: 'contact' },];
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
                  onClick={() => setActiveLink(index)}
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
                  setActiveLink(index);
                  setMobileMenuOpen(false);
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
