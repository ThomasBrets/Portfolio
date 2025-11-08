import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="relative overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Fondo único */}
      <div className="absolute top-0 left-0 -z-10 min-h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Contenido */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}


export default App;
