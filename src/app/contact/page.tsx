'use client';

import { FaInstagram, FaLink, FaFacebook, FaFire } from 'react-icons/fa';

export default function Contact() {

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
            href="https://instagram.com/psu_vsa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-[1px] rounded-xl"
          >
            <div className="bg-white rounded-xl p-6 flex items-center justify-between transition-colors group-hover:bg-transparent">
              <div className="flex items-center gap-4">
                <FaInstagram className="text-3xl text-purple-500 group-hover:text-white" />
                <div>
                  <h3 className="font-bold text-xl mb-1 text-black group-hover:text-white">Instagram</h3>
                  <p className="text-black group-hover:text-white/90">Follow us @psu_vsa for updates and event photos</p>
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
            className="group bg-gradient-to-r from-blue-600 to-blue-700 p-[1px] rounded-xl"
          >
            <div className="bg-white rounded-xl p-6 flex items-center justify-between transition-colors group-hover:bg-transparent">
              <div className="flex items-center gap-4">
                <FaFacebook className="text-3xl text-blue-600 group-hover:text-white" />
                <div>
                  <h3 className="font-bold text-xl mb-1 text-black group-hover:text-white">Facebook</h3>
                  <p className="text-black group-hover:text-white/90">
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

          {/* Linktree */}
          <a 
            href="https://linktr.ee/psu.vsa" 
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
        </div>
      </div>
    </div>
  );
}