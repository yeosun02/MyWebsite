import { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

type Section = 'about' | 'skills' | 'experience' | 'projects';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('about');

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

