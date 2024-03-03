import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Education from "./components/Education";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Tech />
          <Education />
          <Projects />
       </div>
      </BrowserRouter>
    </>
  )
}

export default App;
