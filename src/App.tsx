import { useEffect, useState } from "react";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ThemeButton from "./components/Navbar/ThemeButton";
import Projects from "./components/Projects/Projects";

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark ? 'dark' : 'light')
  }, [])


  return (
    <main>
      <Navbar theme="dark" />
      <ThemeButton theme={theme} toggleTheme={toggleTheme} />
      <div>
        <Home />
        <Experience activeSection={activeSection} setActiveSection={setActiveSection} theme="dark" />
        <Projects />
      </div>
    </main>
  );
}

export default App;
