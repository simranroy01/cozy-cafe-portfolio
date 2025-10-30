'use client';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { isMobile } from '@/lib/constants';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen bg-wood">
      <div className="text-center">
        <div className="text-6xl mb-4 animate-bounce">☕</div>
        <p className="text-xl font-semibold text-cream">Loading...</p>
      </div>
    </div>
  ),
});

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleSplineClick = () => {
    // Download the resume
    const link = document.createElement('a');
    link.href = '/barista_resume.pdf';
    link.download = 'barista_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show notification
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
  };

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen relative section-transition">
      {isVisible && (
        <div onClick={handleSplineClick} className="cursor-pointer">
          {mobile ? (
            // Mobile fallback: Static image
            <div className="min-h-screen flex items-center justify-center bg-wood">
              <div className="text-center">
                <Image
                  src="/skills-spline-fallback.png"
                  alt="Skills Section - Coffee Station"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-2xl max-w-full h-auto"
                  priority
                />
                <p className="text-xl font-semibold text-cream mt-4">Click to download resume</p>
                <p className="text-sm text-latte mt-2">3D Experience available on desktop</p>
              </div>
            </div>
          ) : (
            // Desktop: Spline 3D model
            <Spline
              scene="https://prod.spline.design/WHECGbwEOlRbCwXz/scene.splinecode"
              onLoad={() => console.log('Spline loaded!')}
              onError={(error) => console.error('Spline error:', error)}
            />
          )}
        </div>
      )}

      {/* Notification Popup */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-coffee text-cream px-8 py-4 rounded-lg shadow-lg z-50 animate-bounce text-lg">
          <p className="font-semibold">☕ Coffee delivered! Thank you for visiting!</p>
        </div>
      )}
    </section>
  );
}
