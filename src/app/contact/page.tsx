'use client';

import { useState } from 'react';
import { FaInstagram, FaLink, FaUsers, FaEnvelope, FaFire } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-black">Connect With Us</h1>
          <p className="text-black text-lg">
            Follow us on social media to stay updated with VSA events and announcements
          </p>
        </div>
        
        <div className="grid gap-6">
          {/* Instagram */}
          <a 
            href="https://instagram.com/pennstatevsa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-[1px] rounded-xl"
          >
            <div className="bg-white rounded-xl p-6 flex items-center justify-between transition-colors group-hover:bg-transparent">
              <div className="flex items-center gap-4">
                <FaInstagram className="text-3xl text-purple-500 group-hover:text-white" />
                <div>
                  <h3 className="font-bold text-xl mb-1 text-black group-hover:text-white">Instagram</h3>
                  <p className="text-black group-hover:text-white/90">Follow us @pennstatevsa for updates and event photos</p>
                </div>
              </div>
              <span className="text-2xl text-black group-hover:text-white group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </a>

          {/* Flare */}
          <a 
            href="https://flare.social/pennstatevsa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-red-500 to-red-600 p-[1px] rounded-xl"
          >
            <div className="bg-white rounded-xl p-6 flex items-center justify-between transition-colors group-hover:bg-transparent">
              <div className="flex items-center gap-4">
                <FaFire className="text-3xl text-red-500 group-hover:text-white" />
                <div>
                  <h3 className="font-bold text-xl mb-1 text-black group-hover:text-white">Flare</h3>
                  <p className="text-black group-hover:text-white/90">Join our community and track your points</p>
                </div>
              </div>
              <span className="text-2xl text-black group-hover:text-white group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </a>

          {/* GroupMe */}
          <a 
            href="https://groupme.com/join_group/123456789" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-blue-500 to-blue-600 p-[1px] rounded-xl"
          >
            <div className="bg-white rounded-xl p-6 flex items-center justify-between transition-colors group-hover:bg-transparent">
              <div className="flex items-center gap-4">
                <FaUsers className="text-3xl text-blue-500 group-hover:text-white" />
                <div>
                  <h3 className="font-bold text-xl mb-1 text-black group-hover:text-white">GroupMe</h3>
                  <p className="text-black group-hover:text-white/90">Join our GroupMe chat to stay connected with members</p>
                </div>
              </div>
              <span className="text-2xl text-black group-hover:text-white group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </a>

          {/* Linktree */}
          <a 
            href="https://linktr.ee/pennstatevsa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-green-400 to-blue-500 p-[1px] rounded-xl"
          >
            <div className="bg-white rounded-xl p-6 flex items-center justify-between transition-colors group-hover:bg-transparent">
              <div className="flex items-center gap-4">
                <FaLink className="text-3xl text-green-500 group-hover:text-white" />
                <div>
                  <h3 className="font-bold text-xl mb-1 text-black group-hover:text-white">Linktree</h3>
                  <p className="text-black group-hover:text-white/90">Quick access to all our important links</p>
                </div>
              </div>
              <span className="text-2xl text-black group-hover:text-white group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </a>

          {/* Newsletter Signup */}
          <div className="border-2 border-red-100 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <FaEnvelope className="text-3xl text-red-500" />
              <h3 className="font-bold text-xl text-black">Newsletter Signup</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}