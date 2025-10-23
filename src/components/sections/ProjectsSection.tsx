'use client';
import { PROJECTS } from '@/lib/constants';

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-coffee mb-16">
          Today&apos;s Specials 🍰
        </h2>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-4 border-wood">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="pastry-item group">
                <div className={`bg-gradient-to-br ${project.gradient} rounded-xl p-6 shadow-lg border-2 border-wood hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-rotate-2`}>
                  <div className="text-6xl mb-4">{project.emoji}</div>
                  <h3 className="text-xl font-bold text-coffee mb-2">{project.title}</h3>
                  <p className="text-milk-chocolate mb-4">{project.description}</p>
                  <button className="bg-coffee text-cream px-4 py-2 rounded-lg hover:bg-espresso transition-colors">
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
