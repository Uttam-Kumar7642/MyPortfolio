import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const GlobalBubbles = lazy(() => import("./components/GlobalBubbles"));

function App() {
  return (
    <div className="min-h-screen">
      {/* Single site-wide floating-bubble layer (fixed to viewport, never
          clipped, one shared WebGL context instead of one per section). */}
      <Suspense fallback={null}>
        <GlobalBubbles />
      </Suspense>

      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
