import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/30 to-red-900/50 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/assets/hero.jpg"
            alt="VSA Members"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">PSU VSA</h1>
          <p className="text-xl md:text-2xl mb-8">Vietnamese Student Association at Penn State</p>
          <Link 
            href="/about"
            className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors group"
          >
            <span>Learn More</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
