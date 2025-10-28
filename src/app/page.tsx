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

// WebGL support detection
const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') as WebGLRenderingContext | null ||
               canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
    if (!gl) return false;

    // Test if WebGL context is actually working
    const test = gl.getParameter(gl.RENDERER);
    return !!test;
  } catch (e) {
    return false;
  }
};

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);

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
    // Check WebGL support on mount
    setWebGLSupported(checkWebGLSupport());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          {webGLSupported ? (
            <Spline
              scene="https://prod.spline.design/6R2z2MmAPgz7Pes4/scene.splinecode"
              onLoad={() => {
                console.log('Spline loaded!');
                setSplineLoaded(true);
              }}
              onError={(error) => console.error('Spline error:', error)}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-coffee">
              <div className="text-6xl mb-4 animate-bounce">☕</div>
              <p className="text-xl font-semibold">Welcome to the Cafe</p>
              <p className="text-sm mt-2 opacity-75">3D Experience Unavailable</p>
            </div>
          )}
          {!splineLoaded && webGLSupported && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-coffee">
              <div className="text-6xl mb-4 animate-bounce">☕</div>
              <p className="text-xl font-semibold">Brewing the portfolio</p>
            </div>
          )}
          {animationFinished && webGLSupported && (
            <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
              <div onClick={handleEnterCafe} className="cursor-pointer p-4 rounded-lg">
                <Spline
                  scene="https://prod.spline.design/zjkItZ7d3Mg5KA-1/scene.splinecode"
                  style={{ width: '800px', height: '550px', backgroundColor: '#e0e0e0' }}
                />
              </div>
            </div>
          )}
          {animationFinished && !webGLSupported && (
            <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
              <button
                onClick={handleEnterCafe}
                className="cursor-pointer p-4 rounded-lg bg-coffee text-white font-semibold hover:bg-opacity-80 transition-colors"
              >
                Enter Cafe
              </button>
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

            <div className="section-wrapper">
              <ProjectsSection />
            </div>

            {/* Section Divider */}
            <div className="section-divider"></div>

            <div className="section-wrapper">
              <SkillsSection />
            </div>

            {/* Section Divider */}
            <div className="section-divider"></div>

            <div className="section-wrapper">
              <AboutSection />
            </div>

            {/* Section Divider */}
            <div className="section-divider"></div>

            <div className="section-wrapper">
              <ContactSection />
            </div>
          </main>
        </>
      )}
    </div>
  );
}
