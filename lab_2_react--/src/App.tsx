import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
  /* ====== 4. Theme Switcher (useState + useEffect) ====== */
  const getAutoTheme = (): string => {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 21 ? 'day' : 'night';
  };

  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem('theme') || getAutoTheme();
  });

  // Apply theme to <html> on change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Auto-detect theme on mount
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      setTheme(getAutoTheme());
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'night' ? 'day' : 'night'));
  };

  /* ====== 3. Modal – show after 60 seconds ====== */
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 60000); // 60 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Theme Toggle Button */}
      <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
        <span>{theme === 'night' ? '🌙' : '☀️'}</span>
        <span>{theme === 'night' ? 'Night' : 'Day'}</span>
      </button>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="app-container">
        {/* Summary */}
        <Summary />

        {/* Education + Skills grid */}
        <div className="grid-2">
          <Education />
          <Skills />
        </div>

        {/* Experience */}
        <Experience />

        {/* Projects */}
        <Projects />

        {/* Interests */}
        <Interests />

        {/* Reviews – Fetch API (variant 5) */}
        <Reviews />
      </div>

      {/* Footer – LocalStorage */}
      <div className="app-container">
        <Footer />
      </div>

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default App;
