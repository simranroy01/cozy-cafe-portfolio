'use client';
import { useState } from 'react';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [notification, setNotification] = useState({ show: false, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://getform.io/f/bmdylmna', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setNotification({ show: true, message: 'Order placed! Thank you for your interest!' });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setNotification({ show: false, message: '' }), 5000);
      } else {
        setNotification({ show: true, message: 'Failed to send message. Please try again.' });
        setTimeout(() => setNotification({ show: false, message: '' }), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-coffee section-transition">
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
                    className="w-full p-3 border-2 border-wood rounded-lg bg-white text-coffee focus:border-coffee focus:outline-none"
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
                    className="w-full p-3 border-2 border-wood rounded-lg bg-white text-coffee focus:border-coffee focus:outline-none"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>



              <div>
                <label className="block text-coffee font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border-2 border-wood rounded-lg bg-white text-coffee focus:border-coffee focus:outline-none resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-coffee text-cream py-3 px-6 rounded-lg font-bold hover:bg-espresso transition-colors"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-cream mb-6">Connect With Me</h3>
            <div className="flex justify-center gap-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="bg-cream text-coffee p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
                  aria-label={social.name}
                >
                  <img
                    src={`/${social.name.toLowerCase()}.svg`}
                    alt={social.name}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Notification */}
      {notification.show && (
        <div className="fixed bottom-4 right-4 bg-coffee text-cream px-6 py-3 rounded-lg shadow-lg border-2 border-wood animate-fadeInUp">
          {notification.message}
        </div>
      )}
    </section>
  );
}
