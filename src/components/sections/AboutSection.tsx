'use client';
import { TIMELINE_EVENTS, PERSONALITY_TRAITS } from '@/lib/constants';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 bg-latte">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-coffee mb-16">
          Our Story 📖
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-coffee mb-6">Coffee Stain Timeline</h3>
            {TIMELINE_EVENTS.map((event, index) => (
              <div key={event.year} className="flex items-center space-x-4 group">
                <div className="w-16 h-16 bg-coffee rounded-full flex items-center justify-center text-cream font-bold group-hover:animate-pulse">
                  {event.year}
                </div>
                <div className="bg-cream p-4 rounded-lg shadow-md border-2 border-wood flex-1 group-hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-coffee">{event.title}</h4>
                  <p className="text-milk-chocolate">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Personality Traits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-coffee mb-6">My Personality</h3>
            <div className="grid grid-cols-2 gap-4">
              {PERSONALITY_TRAITS.map((trait) => (
                <div key={trait.title} className="bg-white p-4 rounded-lg shadow-md border-2 border-wood text-center hover:shadow-lg transition-shadow group">
                  <div className="text-4xl mb-2 group-hover:animate-bounce">{trait.emoji}</div>
                  <h4 className="font-bold text-coffee mb-1">{trait.title}</h4>
                  <p className="text-sm text-milk-chocolate">{trait.description}</p>
                </div>
              ))}
            </div>

            {/* Journal */}
            <div className="bg-cream p-6 rounded-lg shadow-lg border-4 border-wood">
              <h3 className="text-xl font-bold text-coffee mb-4">My Brewing Philosophy</h3>
              <p className="text-espresso italic">
                &ldquo;I believe in creating digital experiences that are as satisfying as that first sip of perfectly brewed coffee.
                Every line of code should tell a story, every interaction should feel natural, and every project should leave
                users with a warm, fuzzy feeling inside.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
