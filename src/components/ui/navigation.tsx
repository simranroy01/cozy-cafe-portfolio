// components/ui/Navigation.tsx
'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('entrance');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['entrance', 'projects', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 p-6">
      {/* Desktop Menu Board */}
      <div className="hidden md:block max-w-4xl mx-auto">
        <div className="bg-wood/90 backdrop-blur-md rounded-lg px-8 py-4 shadow-lg border-4 border-coffee">
          <div className="flex justify-between items-center">
            <div className="font-bold text-coffee text-xl">☕️ Cozy Code Cafe</div>
            <div className="flex gap-8 text-lg font-bold">
              <button
                onClick={() => scrollToSection('entrance')}
                className={`chalk-text transition-all duration-300 ${
                  activeSection === 'entrance' ? 'text-blush scale-110' : 'text-espresso hover:text-blush'
                }`}
              >
                🏠 Entrance
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`chalk-text transition-all duration-300 ${
                  activeSection === 'projects' ? 'text-blush scale-110' : 'text-espresso hover:text-blush'
                }`}
              >
                🎂 Specials
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className={`chalk-text transition-all duration-300 ${
                  activeSection === 'skills' ? 'text-blush scale-110' : 'text-espresso hover:text-blush'
                }`}
              >
                ⚡ Brew Station
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`chalk-text transition-all duration-300 ${
                  activeSection === 'about' ? 'text-blush scale-110' : 'text-espresso hover:text-blush'
                }`}
              >
                📖 Our Story
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`chalk-text transition-all duration-300 ${
                  activeSection === 'contact' ? 'text-blush scale-110' : 'text-espresso hover:text-blush'
                }`}
              >
                📞 Order Here
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-wood/90 backdrop-blur-md rounded-lg p-4 shadow-lg border-2 border-coffee"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block h-0.5 w-6 bg-coffee transition-transform duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
            }`}></span>
            <span className={`block h-0.5 w-6 bg-coffee transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block h-0.5 w-6 bg-coffee transition-transform duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
            }`}></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-20 left-6 right-6 bg-wood/95 backdrop-blur-md rounded-lg shadow-lg border-4 border-coffee p-6">
            <div className="flex flex-col gap-4 text-lg font-bold">
              <button
                onClick={() => scrollToSection('entrance')}
                className={`chalk-text text-left transition-all duration-300 ${
                  activeSection === 'entrance' ? 'text-blush scale-105' : 'text-espresso hover:text-blush'
                }`}
              >
                🏠 Entrance
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`chalk-text text-left transition-all duration-300 ${
                  activeSection === 'projects' ? 'text-blush scale-105' : 'text-espresso hover:text-blush'
                }`}
              >
                🎂 Specials
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className={`chalk-text text-left transition-all duration-300 ${
                  activeSection === 'skills' ? 'text-blush scale-105' : 'text-espresso hover:text-blush'
                }`}
              >
                ⚡ Brew Station
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`chalk-text text-left transition-all duration-300 ${
                  activeSection === 'about' ? 'text-blush scale-105' : 'text-espresso hover:text-blush'
                }`}
              >
                📖 Our Story
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`chalk-text text-left transition-all duration-300 ${
                  activeSection === 'contact' ? 'text-blush scale-105' : 'text-espresso hover:text-blush'
                }`}
              >
                📞 Order Here
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .chalk-text {
          font-family: 'Chalkduster', 'Comic Sans MS', cursive;
          text-shadow: 1px 1px 0px rgba(0,0,0,0.3);
        }
      `}</style>
    </nav>
  );
}
