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
  const MOVE_SPEED = 0.5;

  useEffect(() => {
    const animate = () => {
      if (!isHovered && !isDragging && !isResetting) {
        const newPosition = position - MOVE_SPEED;
        if (newPosition <= -resetThreshold) {
          setIsResetting(true);
          setPosition(0);
          setTimeout(() => setIsResetting(false), 100);
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
  }, [isHovered, isDragging, position, resetThreshold, isResetting]);

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/assets/hero.jpg"
            alt="VSA Members"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">PSU VSA</h1>
          <p className="text-xl md:text-2xl mb-10 font-light">Vietnamese Student Association at Penn State</p>
          <Link 
            href="/about"
            className="inline-flex items-center bg-white text-red-600 px-10 py-4 rounded-full hover:bg-red-50 transition-all font-semibold text-lg shadow-lg hover:shadow-xl group"
          >
            <span>Learn More</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-black">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-10 rounded-2xl bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-6xl font-bold text-red-600 mb-3">
                <AnimatedNumber target={50} />
              </div>
              <p className="text-lg text-gray-600 font-medium">Active Members</p>
            </div>
            <div className="text-center p-10 rounded-2xl bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-6xl font-bold text-red-600 mb-3">
                <AnimatedNumber target={20} />
              </div>
              <p className="text-lg text-gray-600 font-medium">Events Per Year</p>
            </div>
            <div className="text-center p-10 rounded-2xl bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-6xl font-bold text-red-600 mb-3">
                $<AnimatedNumber target={6000} />
              </div>
              <p className="text-lg text-gray-600 font-medium">Raised for THON</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-black">Our Moments</h2>
          <div 
            ref={carouselRef}
            className="relative w-full h-[350px] overflow-x-auto scrollbar-hide"
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
              className="absolute flex gap-6 transition-transform duration-2000 cursor-grab active:cursor-grabbing"
              style={{ 
                transform: `translateX(${position}px)`,
                transition: isResetting ? 'none' : 'transform 2s linear'
              }}
            >
              {/* First set */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div
                  key={`first-${num}`}
                  className="relative w-[350px] h-[350px] flex-none rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  <Image
                    src={`/assets/gallery/${num}.jpg`}
                    alt="VSA Event"
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
              {/* Second set */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div
                  key={`second-${num}`}
                  className="relative w-[350px] h-[350px] flex-none rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  <Image
                    src={`/assets/gallery/${num}.jpg`}
                    alt="VSA Event"
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
