import { BrowserRouter } from "react-router-dom";
import { About, Education, Hero, Navbar, Tech, Projects, StarsCanvas } from "./components";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <Education />
          <div className="relative z-0">
          <Tech />
          <Projects />
            <StarsCanvas />
          </div>
          <About />
       </div>
      </BrowserRouter>
    </>
  )
}

export default App;
