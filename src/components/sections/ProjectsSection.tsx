'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { PROJECTS } from '@/lib/constants';
import { Project } from '@/types';
import dynamic from 'next/dynamic';
import { isMobile } from '@/lib/constants';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobile());
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

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

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-20 bg-cream relative section-transition">
      {/* Spline Background */}
      {isVisible && (
        <div className="absolute inset-0 z-0">
          {mobile ? (
            // Mobile fallback: Static image background
            <div className="w-full h-full relative">
              <Image
                src="/projects-spline-fallback.png"
                alt="Projects Section Background"
                fill
                className="object-cover opacity-30"
                priority
              />
            </div>
          ) : (
            // Desktop: Spline 3D background
            <Spline
              scene="https://prod.spline.design/TNgaXsy1mJfTPqoj/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
                  <button
                    onClick={() => openModal(project)}
                    className="bg-coffee text-cream px-4 py-2 rounded-lg hover:bg-espresso transition-colors"
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-6xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <span className="text-4xl mr-4">{selectedProject.emoji}</span>
                <h3 className="text-2xl font-bold text-coffee">{selectedProject.title}</h3>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-coffee mb-2">Ingredients:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-latte text-coffee px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-coffee mb-2">Recipe:</h4>
              <div className="text-milk-chocolate whitespace-pre-line">
                {selectedProject.details}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-coffee mb-2">Get it here:</h4>
              <div className="text-milk-chocolate">
                {selectedProject.link ? (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coffee hover:text-espresso underline"
                  >
                    {selectedProject.link}
                  </a>
                ) : (
                  'Link not available'
                )}
              </div>
            </div>

            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-coffee mb-2">Project Images:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedProject.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`${selectedProject.title} screenshot ${index + 1}`}
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md border-2 border-wood"
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-coffee text-cream px-6 py-2 rounded-lg hover:bg-espresso transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
