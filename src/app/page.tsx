// app/page.tsx - Main Home Page
'use client';
import { useState, useEffect } from 'react';
import Navigation from '@/components/ui/navigation';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import FloatingParticles from '@/components/animations/FloatingParticles';
import Spline from '@splinetool/react-spline';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

  const handleEnterCafe = () => {
    setShowIntro(false);
    setShowTypewriter(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-latte to-blush relative overflow-x-hidden">

      {/* Spline Door Animation - Full Page Intro */}
      {showIntro && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-amber-50 to-rose-50 flex items-center justify-center">
          <Spline
            scene="https://prod.spline.design/6R2z2MmAPgz7Pes4/scene.splinecode"
            onLoad={() => {
              console.log('Spline loaded!');
              setSplineLoaded(true);
            }}
            onError={(error) => console.error('Spline error:', error)}
          />
          {!splineLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-coffee">
              <div className="text-6xl mb-4 animate-bounce">☕</div>
              <p className="text-xl font-semibold">Brewing the portfolio</p>
            </div>
          )}
          {splineLoaded && (
            <button
              onClick={handleEnterCafe}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-coffee text-cream px-6 py-3 rounded-lg z-10 hover:bg-espresso transition-colors"
            >
              Enter Cafe ☕️
            </button>
          )}
        </div>
      )}

      {/* Main Content */}
      {!showIntro && (
        <>
          <Navigation />

          <main className="pt-20">
            <HeroSection showTypewriter={showTypewriter} />
            <ProjectsSection />
            <SkillsSection />
            <SkillsSection />
            <AboutSection />
            <ContactSection />
          </main>
        </>
      )}
    </div>
  );
}
