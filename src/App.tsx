import { useState } from "react";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ThemeButton from "./components/Navbar/ThemeButton";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [language, setLanguage] = useState<'en' | 'es'>('en')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.className = newTheme === 'dark' ? 'dark-theme' : 'light-theme';
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <main>
      <Navbar theme={theme} language={language} />
      <ThemeButton theme={theme}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
      />
      <div>
        <Home theme={theme} language={language} />
        <Experience theme={theme} language={language} />
        <Projects theme={theme} language={language} />
      </div>
      <Footer />
    </main>
  );
}

export default App;
