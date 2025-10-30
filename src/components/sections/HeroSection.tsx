'use client';
import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { isMobile } from '@/lib/constants';

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
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const particleIdRef = useRef(0);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobile());
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isVisible || mobile) return;

    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create multiple particles around the mouse position
    const particleCount = 3;
    const newParticles: Array<{ id: number; x: number; y: number }> = [];

    for (let i = 0; i < particleCount; i++) {
      const offsetX = (Math.random() - 0.5) * 20; // Random offset within 20px
      const offsetY = (Math.random() - 0.5) * 20;

      newParticles.push({
        id: particleIdRef.current++,
        x: x + offsetX,
        y: y + offsetY,
      });
    }

    setParticles(prev => [...prev, ...newParticles]);

    // Remove particles after animation
    newParticles.forEach(particle => {
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== particle.id));
      }, 1500);
    });
  };

  return (
    <section
      ref={sectionRef}
      id="entrance"
      className="min-h-screen flex items-center justify-center relative hero-cursor"
      onMouseMove={handleMouseMove}
    >
      {isVisible ? (
        <div className="relative w-full h-full hero-cursor">
          {mobile ? (
            // Mobile fallback: Static image
            <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-latte to-blush">
              <div className="text-center">
                <Image
                  src="/hero-spline-fallback.png"
                  alt="Cozy Cafe Entrance"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-2xl max-w-full h-auto"
                  priority
                />
                <p className="text-xl font-semibold text-coffee mt-4">Welcome to the Cozy Code Cafe</p>
                <p className="text-sm text-milk-chocolate mt-2">3D Experience available on desktop</p>
              </div>
            </div>
          ) : (
            // Desktop: Spline 3D model
            <Spline
              scene="https://prod.spline.design/t864ZnQlVVdW8FrC/scene.splinecode"
              onLoad={() => console.log('Spline loaded!')}
              onError={(error) => console.error('Spline error:', error)}
            />
          )}
          {!mobile && particles.map(particle => (
            <div
              key={particle.id}
              className="hero-particle"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
              }}
            />
          ))}
        </div>
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
