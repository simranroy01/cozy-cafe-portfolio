'use client';
import { useState } from 'react';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-coffee">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cream mb-16">
          Place Your Order 📝
        </h2>

        <div className="bg-wood rounded-2xl p-8 shadow-2xl border-4 border-espresso">

          {/* Contact Form */}
          <div className="bg-cream rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-coffee mb-6 text-center">Custom Order Form</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-coffee font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-wood rounded-lg bg-white focus:border-coffee focus:outline-none"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-coffee font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-wood rounded-lg bg-white focus:border-coffee focus:outline-none"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-coffee font-semibold mb-2">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-wood rounded-lg bg-white focus:border-coffee focus:outline-none"
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="web-app">Web Application</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="consultation">Just saying hi! 👋</option>
                </select>
              </div>

              <div>
                <label className="block text-coffee font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border-2 border-wood rounded-lg bg-white focus:border-coffee focus:outline-none resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-coffee text-cream py-3 px-6 rounded-lg font-bold hover:bg-espresso transition-colors"
              >
                ☕️ Place Order
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-cream mb-6">Find Me Online</h3>
            <div className="flex justify-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="bg-cream text-coffee px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center gap-2"
                >
                  <span>{social.emoji}</span>
                  <span className="font-semibold">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
