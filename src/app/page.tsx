// app/page.tsx - Main Home Page
'use client';
import { useState, useEffect, useRef } from 'react';
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
  const [animationFinished, setAnimationFinished] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const handleEnterCafe = () => {
    setShowIntro(false);
    setShowTypewriter(true);
  };

  useEffect(() => {
    if (splineLoaded) {
      // Wait for the door animation to finish (assuming 4 seconds based on typical animation length)
      const timer = setTimeout(() => {
        setAnimationFinished(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [splineLoaded]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-100px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, sectionId]));
        } else {
          // Remove from visible sections when scrolling out of view
          setVisibleSections(prev => {
            const newSet = new Set(prev);
            newSet.delete(sectionId);
            return newSet;
          });
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [showIntro]);

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

            {/* Section Divider */}
            <div className="section-divider"></div>

            <div className={`section-slide-up ${visibleSections.has('projects') ? 'animate' : ''}`}>
              <ProjectsSection />
            </div>

            {/* Section Divider */}
            <div className="section-divider"></div>

            <div className={`section-slide-up ${visibleSections.has('skills') ? 'animate' : ''}`}>
              <SkillsSection />
            </div>

            {/* Section Divider */}
            <div className="section-divider"></div>

            <div className={`section-slide-up ${visibleSections.has('about') ? 'animate' : ''}`}>
              <AboutSection />
            </div>

            {/* Section Divider */}
            <div className="section-divider"></div>

            <div className={`section-slide-up ${visibleSections.has('contact') ? 'animate' : ''}`}>
              <ContactSection />
            </div>
          </main>
        </>
      )}
    </div>
  );
}
