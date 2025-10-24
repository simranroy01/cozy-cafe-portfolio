// app/page.tsx - Main Home Page
'use client';
import { useState, useEffect } from 'react';
import Navigation from '@/components/ui/navigation';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';

import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import FloatingParticles from '@/components/animations/FloatingParticles';
import Spline from '@splinetool/react-spline';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

  const handleEnterCafe = () => {
    setShowIntro(false);
    setShowTypewriter(true);
  };

  useEffect(() => {
    if (splineLoaded) {
      // Wait for the door animation to finish (assuming 5 seconds based on typical animation length)
      const timer = setTimeout(() => {
        setAnimationFinished(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [splineLoaded]);

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
          {animationFinished && (
            <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
              <div onClick={handleEnterCafe} className="cursor-pointer p-4 rounded-lg">
                <Spline
                  scene="https://prod.spline.design/zjkItZ7d3Mg5KA-1/scene.splinecode"
                  style={{ width: '800px', height: '550px', backgroundColor: '#e0e0e0' }}
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Content */}
      {!showIntro && (
        <>
          <Navigation />

          <main>
            <HeroSection showTypewriter={showTypewriter} />
            <ProjectsSection />
            <AboutSection />
            <ContactSection />
          </main>
        </>
      )}
    </div>
  );
}
