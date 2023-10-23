
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Works />
    </div>
  );
}

export default App;
