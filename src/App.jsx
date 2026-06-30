import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import { useTheme } from "./components/useTheme";
import { sections } from "./data/portfolioData";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="relative min-h-screen bg-canvas text-ink dark:bg-canvas-d dark:text-ink-d">
      {/* ONE global animated background, fixed behind all content */}
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar theme={theme} onToggleTheme={toggle} />
        <main>
          <Hero />
          {/* Each section also self-hides if its data is empty/visible:false */}
          {sections.about && <About />}
          {sections.experience && <Experience />}
          {sections.skills && <Skills />}
          {sections.projects && <Projects />}
          {sections.education && <Education />}
          {sections.contact && <Contact />}
        </main>
        <Footer />
      </div>
    </div>
  );
}
