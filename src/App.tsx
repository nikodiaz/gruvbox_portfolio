import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <main>
      <Navbar theme="dark" />
      <div>
        <Home />
        <Experience theme="dark" />
        <Projects />
      </div>
    </main>
  );
}

export default App;
