'use client';
import { useState } from 'react';

interface HeroSectionProps {
  showTypewriter: boolean;
}

export default function HeroSection({ showTypewriter }: HeroSectionProps) {
  const [bellRinging, setBellRinging] = useState(false);

  const handleBellHover = () => {
    setBellRinging(true);
    setTimeout(() => setBellRinging(false), 1000);
  };

  return (
    <section id="entrance" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center max-w-4xl mx-auto px-6">
        {/* Welcome Mat */}
        <div className="bg-wood rounded-lg p-8 mb-8 shadow-lg border-4 border-coffee">
          <h1 className={`text-4xl md:text-6xl font-bold text-coffee mb-4 ${
            showTypewriter ? 'typewriter' : 'opacity-0'
          }`}>
            Hi, I&apos;m [Your Name] ☕️
          </h1>
          <p className={`text-xl md:text-2xl text-milk-chocolate font-semibold ${
            showTypewriter ? 'typewriter' : 'opacity-0'
          }`} style={{ animationDelay: '2s' }}>
            Full-Stack Barista &amp; Code Brewer
          </p>
        </div>

        {/* Photo Placeholder */}
        <div className="w-48 h-48 mx-auto bg-cream rounded-full border-4 border-wood shadow-lg mb-8 flex items-center justify-center">
          <span className="text-6xl">👨‍💻</span>
        </div>

        <p className="text-lg text-espresso max-w-2xl mx-auto">
          Welcome to my cozy corner of the internet! I craft digital experiences
          that are as delightful as your favorite coffee shop visit.
        </p>
      </div>

      {/* Floating Steam */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="steam-particle absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>
    </section>
  );
}
