'use client';

import { FaInstagram, FaLink, FaFacebook, FaFire } from 'react-icons/fa';

export default function Contact() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Connect With Us</h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Follow us on social media to stay updated with VSA events and announcements
          </p>
        </div>
        
        <div className="grid gap-8">
          {/* Instagram */}
          <a 
            href="https://instagram.com/psu_vsa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-[2px] rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <div className="bg-white rounded-2xl p-8 flex items-center justify-between transition-colors group-hover:bg-transparent">
              <div className="flex items-center gap-6">
                <FaInstagram className="text-4xl text-purple-500 group-hover:text-white" />
                <div>
                  <h3 className="font-bold text-2xl mb-2 text-black group-hover:text-white">Instagram</h3>
                  <p className="text-gray-600 group-hover:text-white/90">Follow us @psu_vsa for updates and event photos</p>
                </div>
              </div>
              <span className="text-2xl text-black group-hover:text-white group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </a>

          {/* Facebook */}
          <a 
            href="https://www.facebook.com/PennStateVietnameseAssociation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-blue-600 to-blue-700 p-[2px] rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <div className="bg-white rounded-2xl p-8 flex items-center justify-between transition-colors group-hover:bg-transparent">
              <div className="flex items-center gap-6">
                <FaFacebook className="text-4xl text-blue-600 group-hover:text-white" />
                <div>
                  <h3 className="font-bold text-2xl mb-2 text-black group-hover:text-white">Facebook</h3>
                  <p className="text-gray-600 group-hover:text-white/90">
                    Follow us @PennStateVietnameseAssociation to stay updated with events and news
                  </p>
                </div>
              </div>
              <span className="text-2xl text-black group-hover:text-white group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </a>

          {/* Flare */}
          <a 
            href="https://flare-event.app.link/ISoIUZ3BzYb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-red-500 to-red-600 p-[2px] rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <div className="bg-white rounded-2xl p-8 flex items-center justify-between transition-colors group-hover:bg-transparent">
              <div className="flex items-center gap-6">
                <FaFire className="text-4xl text-red-500 group-hover:text-white" />
                <div>
                  <h3 className="font-bold text-2xl mb-2 text-black group-hover:text-white">Flare</h3>
                  <p className="text-gray-600 group-hover:text-white/90">Join our community and track your points</p>
                </div>
              </div>
              <span className="text-2xl text-black group-hover:text-white group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </a>

          {/* Linktree */}
          <a 
            href="https://linktr.ee/psu.vsa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-green-400 to-blue-500 p-[2px] rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <div className="bg-white rounded-2xl p-8 flex items-center justify-between transition-colors group-hover:bg-transparent">
              <div className="flex items-center gap-6">
                <FaLink className="text-4xl text-green-500 group-hover:text-white" />
                <div>
                  <h3 className="font-bold text-2xl mb-2 text-black group-hover:text-white">Linktree</h3>
                  <p className="text-gray-600 group-hover:text-white/90">Quick access to all our important links</p>
                </div>
              </div>
              <span className="text-2xl text-black group-hover:text-white group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}