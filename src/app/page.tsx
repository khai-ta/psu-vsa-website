"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

function AnimatedNumber({ target, duration = 2000 }: { target: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * target);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [target, duration]);

  return <span>{count}+</span>;
}

export default function Home() {
  const [position, setPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const totalWidth = 1600;
  const resetThreshold = totalWidth;
  const animationRef = useRef<number | null>(null);
  const [isResetting, setIsResetting] = useState(false);
  const moveSpeed = 0.5; // Slower movement speed

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!isHovered && !isDragging && !isResetting) {
        const newPosition = position - moveSpeed;
        if (newPosition <= -resetThreshold) {
          setIsResetting(true);
          setPosition(0);
          setTimeout(() => setIsResetting(false), 100); // Slightly longer reset delay
        } else {
          setPosition(newPosition);
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, isDragging, position, resetThreshold, isResetting, moveSpeed]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
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

      {/* Impact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-black">Making an Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6 rounded-xl bg-white/80 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-red-600 mb-4">
                <AnimatedNumber target={40} />
              </div>
              <p className="text-xl text-black">Active Members</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/80 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-red-600 mb-4">
                <AnimatedNumber target={20} />
              </div>
              <p className="text-xl text-black">Events Per Year</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/80 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-red-600 mb-4">
                $<AnimatedNumber target={3500} />
              </div>
              <p className="text-xl text-black">Raised for THON</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-black">Moments</h2>
          <div 
            ref={carouselRef}
            className="relative w-full h-[300px] overflow-x-auto scrollbar-hide"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              handleMouseUp();
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <div 
              className="absolute flex gap-4 transition-transform duration-2000 cursor-grab active:cursor-grabbing"
              style={{ 
                transform: `translateX(${position}px)`,
                transition: isResetting ? 'none' : 'transform 2s linear'
              }}
            >
              {/* First set */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div
                  key={`first-${num}`}
                  className="relative w-[300px] h-[300px] flex-none rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={`/assets/gallery/${num}.jpg`}
                    alt="VSA Event"
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm">VSA Event {num}</p>
                  </div>
                </div>
              ))}
              {/* Second set */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div
                  key={`second-${num}`}
                  className="relative w-[300px] h-[300px] flex-none rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={`/assets/gallery/${num}.jpg`}
                    alt="VSA Event"
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm">VSA Event {num}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
