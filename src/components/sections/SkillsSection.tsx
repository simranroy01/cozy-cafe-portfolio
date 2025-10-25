'use client';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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
    <section id="skills" ref={sectionRef} className="min-h-screen relative">
      {isVisible && (
        <div onClick={handleSplineClick} className="cursor-pointer">
          <Spline
            scene="https://prod.spline.design/WHECGbwEOlRbCwXz/scene.splinecode"
            onLoad={() => console.log('Spline loaded!')}
            onError={(error) => console.error('Spline error:', error)}
          />
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
