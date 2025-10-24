'use client';
import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="text-6xl mb-4 animate-bounce">☕</div>
        <p className="text-xl font-semibold text-coffee">Loading 3D Experience...</p>
      </div>
    </div>
  ),
});

interface HeroSectionProps {
  showTypewriter: boolean;
}

export default function HeroSection({ showTypewriter }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasLoaded]);

  return (
    <section
      ref={sectionRef}
      id="entrance"
      className="min-h-screen flex items-center justify-center relative"
    >
      {isVisible ? (
        <Spline
          scene="https://prod.spline.design/t864ZnQlVVdW8FrC/scene.splinecode"
          onLoad={() => console.log('Spline loaded!')}
          onError={(error) => console.error('Spline error:', error)}
        />
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="text-6xl mb-4 animate-bounce">☕</div>
            <p className="text-xl font-semibold text-coffee">Scroll to load 3D Experience...</p>
          </div>
        </div>
      )}
    </section>
  );
}
