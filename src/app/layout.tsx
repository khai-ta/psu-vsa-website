"use client";

import { Geist } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Penn State VSA | Vietnamese Student Association</title>
        <meta name="description" content="The official website of the Vietnamese Student Association at Penn State University" />
      </head>
      <body className={`${geist.className} min-h-screen flex flex-col`}>
        <header className="bg-white shadow-sm">
          <nav className="max-w-3xl mx-auto px-4">
            <div className="flex justify-center items-center h-16 relative">
              {/* Desktop nav - centered */}
              <div className="hidden md:flex items-center space-x-12">
                <Link
                  href="/about"
                  className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-500 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/events"
                  className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-500 transition-colors"
                >
                  Events
                </Link>

                <Link href="/" className="flex items-center px-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/assets/vsa-logo.png"
                      alt="Penn State VSA Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </Link>

                <Link
                  href="/membership"
                  className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-500 transition-colors"
                >
                  Membership
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-500 transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* Mobile logo */}
              <Link href="/" className="md:hidden flex items-center">
                <div className="relative w-12 h-12">
                  <Image
                    src="/assets/vsa-logo.png"
                    alt="Penn State VSA Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>

              {/* Mobile menu button - absolute right */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden absolute right-4 p-2 hover:bg-gray-100 rounded transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Mobile menu - shown only on mobile */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/events"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/membership"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Membership
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            )}
          </nav>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-gray-800 text-white py-6">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-gray-300 text-sm">&copy; {new Date().getFullYear()} Penn State Vietnamese Student Association</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
