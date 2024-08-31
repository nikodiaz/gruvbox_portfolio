import { useState } from "react";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ThemeButton from "./components/Navbar/ThemeButton";
import Projects from "./components/Projects/Projects";

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.className = newTheme === 'dark' ? 'dark-theme' : 'light-theme';
  };

  return (
    <main>
      <Navbar theme={theme} />
      <ThemeButton theme={theme} toggleTheme={toggleTheme} />
      <div>
        <Home theme={theme} />
        <Experience theme={theme} />
        <Projects theme={theme} />
      </div>
    </main>
  );
}

export default App;
