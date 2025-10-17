import { useDarkMode } from './hooks/useDarkMode';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Drone } from './components/Drone';
import { Pickleball } from './components/Pickleball';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const sectionIds = ['home', 'about', 'projects', 'drone', 'pickleball', 'contact'];

function App() {
  const [isDark, setIsDark] = useDarkMode();
  const activeSection = useScrollSpy(sectionIds);

  const toggleDark = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen">
      <Navigation 
        activeSection={activeSection} 
        isDark={isDark} 
        toggleDark={toggleDark} 
      />
      <main>
        <Hero />
        <About />
        <Projects />
        <Drone />
        <Pickleball />
        <Contact />
      </main>
      <Footer isDark={isDark} toggleDark={toggleDark} />
    </div>
  );
}

export default App;

