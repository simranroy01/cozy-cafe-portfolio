'use client';
import { useEffect, useRef } from 'react';
import { SKILLS } from '@/lib/constants';

export default function SkillsSection() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && vantaRef.current) {
      import('vanta/dist/vanta.waves.min').then((VANTA) => {
        vantaEffect.current = VANTA.default({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          color: 0xffffff, // White color for cream/milk effect
          shininess: 30,
          waveHeight: 15,
          waveSpeed: 0.8,
          zoom: 1.1
        });
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <section id="skills" className="min-h-screen py-20 bg-wood relative">
      <div ref={vantaRef} className="absolute inset-0"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cream mb-16">
          My Brewing Station ☕️
        </h2>

        <div className="bg-cream/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-4 border-coffee">

          {/* Main Equipment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="text-center group">
              <div className="text-8xl mb-4 group-hover:animate-bounce">☕</div>
              <h3 className="text-2xl font-bold text-coffee mb-2">ESPRESSO MACHINE</h3>
              <p className="text-milk-chocolate">JavaScript - Strong & Robust</p>
            </div>

            <div className="text-center group">
              <div className="text-8xl mb-4 group-hover:animate-bounce">🥛</div>
              <h3 className="text-2xl font-bold text-coffee mb-2">MILK STEAMER</h3>
              <p className="text-milk-chocolate">UI/UX Design - Smooth & Creamy</p>
            </div>
          </div>

          {/* Ingredient Shelves */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-coffee mb-6 text-center">My Ingredients</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {SKILLS.map((skill) => (
                <div key={skill.name} className={`bg-${skill.color} px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer`}>
                  <span className="text-2xl mr-2">{skill.emoji}</span>
                  <span className="font-semibold text-coffee">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Blackboard */}
          <div className="bg-espresso rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-cream mb-4">Daily Specials</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-cream">
              <div className="bg-wood/50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Responsive Design</h4>
                <p>Mobile-first approach</p>
              </div>
              <div className="bg-wood/50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">API Development</h4>
                <p>RESTful & GraphQL</p>
              </div>
              <div className="bg-wood/50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Database Management</h4>
                <p>SQL & NoSQL expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
