'use client';

import { useEffect, useState } from 'react';

export default function FloatingParticles() {
  const [particles, setParticles] = useState<{ left: string; top: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const beans = [...Array(12)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${8 + Math.random() * 4}s`
    }));

    const steam = [...Array(8)].map((_, i) => ({
      left: `${10 + i * 10}%`,
      top: `${20 + (i % 3) * 20}%`,
      delay: `${i * 0.5}s`,
      duration: `${3 + Math.random() * 2}s`
    }));

    setParticles([...beans, ...steam]);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Coffee Beans */}
      {particles.slice(0, 12).map((particle, i) => (
        <div
          key={`bean-${i}`}
          className="coffee-bean absolute w-2 h-3 bg-coffee rounded-full opacity-20"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration
          }}
        />
      ))}

      {/* Steam Particles */}
      {particles.slice(12).map((particle, i) => (
        <div
          key={`steam-${i}`}
          className="steam-particle absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration
          }}
        />
      ))}
    </div>
  );
}
