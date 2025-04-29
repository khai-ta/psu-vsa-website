import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";
import Image from "next/image";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Penn State VSA | Vietnamese Student Association",
  description: "The official website of the Vietnamese Student Association at Penn State University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} min-h-screen flex flex-col`}>
        <header className="bg-white shadow-sm">
          <nav className="max-w-3xl mx-auto px-4">
            <div className="flex justify-center items-center h-16">
              <div className="flex items-center space-x-12">
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
            </div>
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
