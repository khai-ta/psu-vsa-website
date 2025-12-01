'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';

export default function Events() {
  const [sortBy, setSortBy] = useState<"date-desc" | "date-asc" | "title">("date-desc");
  const [filterMonth, setFilterMonth] = useState<string>("all");
  const upcomingEvents = [
    {
      id: 1,
      title: "VSA x PSFA Bonfire",
      date: "TBD",
      time: "TBD",
      location: "TBD",
      description: "Free s'mores and hot cocoa",
      rsvpLink: "https://docs.google.com/forms/d/e/1FAIpQLSeFUj5tC4lHvhEWWICnXhYs4BPvLEbR6c_XDbjeGdCs2aDbCA/viewform"
    },
  ];

  const pastEvents = useMemo(() => [
    {
      id: 2,
      title: "VSA x aKDPhi Game Night",
      date: "November 13, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Agricultural Sciences and Industries Building 121",
      description: "Game night with switch, poker, cards, and board games",
      month: "November",
    },
    {
      id: 3,
      title: "ASA x VSA Trick or Treat Night",
      date: "October 31, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "HUB 233AB",
      description: "Decorate bags, wear costumes, and collect treats (costume contest included)",
      month: "October",
    },
    {
      id: 4,
      title: "Childhood Sports Day",
      date: "October 18, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "HUB Lawn",
      description: "Traditional games including goat catching, shuttlecock kicking, and marble toss",
      month: "October",
    },
    {
      id: 5,
      title: "Mid-Autumn Festival",
      date: "October 12, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Business Building 108",
      description: "Make lanterns and mooncakes to celebrate Mid-Autumn Festival",
      month: "October",
    },
    {
      id: 6,
      title: "Movie Night",
      date: "October 10, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Thomas 100",
      description: "Watch the Vietnamese film Mai with free popcorn and drinks",
      month: "October",
    },
    {
      id: 7,
      title: "Physical 100",
      date: "October 4, 2025",
      time: "12:00 PM - 5:00 PM",
      location: "Sunset Park",
      description: "Fitness competition with ASFC, KSA, ASA, FJSA, TASA, and HKSA",
      month: "October",
    },
    {
      id: 8,
      title: "Tien Len Tournament",
      date: "October 3, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Teadori",
      description: "Compete in a Tien Len card tournament ($3 entry fee with prizes for winners)",
      month: "October",
    },
    {
      id: 9,
      title: "VSA Ice Cream Sale",
      date: "September 27, 2025",
      time: "Kickoff @ 7:30 PM",
      location: "Beaver Stadium",
      description: "Free game entrance and ice cream to support VSA",
      month: "September",
    },
    {
      id: 10,
      title: "Karaoke Night",
      date: "September 26, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Thomas 100",
      description: "Sing your heart out with VSA",
      month: "September",
    },
    {
      id: 11,
      title: "Cup of Coffee with VSA",
      date: "September 21, 2025",
      time: "12:00 PM - 2:00 PM",
      location: "HUB 131",
      description: "Enjoy Vietnamese coffee for $3 or make it yourself",
      month: "September",
    },
    {
      id: 12,
      title: "Common Hour #2",
      date: "September 19, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Huck 005",
      description: "Play card games, study, socialize, and make new friends",
      month: "September",
    },
    {
      id: 13,
      title: "Arboretum Picnic",
      date: "September 14, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "The Overlook Pavilion / Event Lawn",
      description: "$5 entry or bring food (Vietnamese dishes and traditional favorites provided)",
      month: "September",
    },
    {
      id: 14,
      title: "Common Hour #1",
      date: "September 12, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Huck 005",
      description: "Study or learn how to play tien len",
      month: "September",
    },
    {
      id: 15,
      title: "First GBM",
      date: "September 5, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Health and Human Development 254",
      description: "First general body meeting of the semester",
      month: "September",
    },
  ], []);

  // Get unique months for filter
  const availableMonths = useMemo(() => {
    const months = [...new Set(pastEvents.map(event => event.month))];
    return months.sort((a, b) => {
      const monthOrder = ["September", "October", "November", "December"];
      return monthOrder.indexOf(a) - monthOrder.indexOf(b);
    });
  }, [pastEvents]);

  // Filter and sort events
  const filteredAndSortedEvents = useMemo(() => {
    let filtered = pastEvents;

    // Apply month filter
    if (filterMonth !== "all") {
      filtered = filtered.filter(event => event.month === filterMonth);
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      
      // For date sorting, parse the date string
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      
      if (sortBy === "date-desc") {
        return dateB.getTime() - dateA.getTime(); // Newest first
      } else {
        return dateA.getTime() - dateB.getTime(); // Oldest first
      }
    });

    return sorted;
  }, [filterMonth, sortBy, pastEvents]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Tet Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black">Tet Celebration</h2>
          <div className="bg-gradient-to-br from-red-50 to-yellow-50 border border-red-200 rounded-2xl overflow-hidden shadow-lg">
            {/* Tet Image */}
            <div className="relative w-full h-[400px]">
              <Image
                src="/assets/tet-mua-lan.PNG"
                alt="Tet Mua Lan Celebration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              />
            </div>
            
            <div className="p-8">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-black mb-2">Vietnamese Lunar New Year</h3>
                <p className="text-xl text-red-600 font-medium mb-2">February 8, 2026</p>
                <p className="text-lg text-gray-600">Alumni Hall, HUB</p>
              </div>
              <p className="text-gray-700 text-center mb-4 text-lg">
                Celebrate the Year of the Horse with exciting games, captivating performances including lion dance, mixed dance, ao dai catwalk, skits, and singing, plus delicious authentic Vietnamese food!
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black">Upcoming Events</h2>
          <div className="grid gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white border border-red-100 rounded-2xl p-8 hover:shadow-lg transition-all shadow-md">
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-black">{event.title}</h3>
                      <a
                        href={event.rsvpLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 font-semibold group transition-colors"
                      >
                        <span>RSVP</span>
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                    <div className="mt-3 space-y-2">
                      <p className="text-red-600 font-medium">{event.date} @ {event.time}</p>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events*/}
        <section>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Past Events</h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Month Filter */}
              <div className="flex items-center gap-3">
                <label htmlFor="month-filter" className="text-sm font-semibold text-black whitespace-nowrap">
                  Filter by:
                </label>
                <select
                  id="month-filter"
                  value={filterMonth}
                  onChange={(e) => setFilterMonth(e.target.value)}
                  className="border border-red-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300 bg-white text-black shadow-sm"
                >
                  <option value="all">All Months</option>
                  {availableMonths.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="flex items-center gap-3">
                <label htmlFor="sort-by" className="text-sm font-semibold text-black whitespace-nowrap">
                  Sort by:
                </label>
                <select
                  id="sort-by"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "date-desc" | "date-asc" | "title")}
                  className="border border-red-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300 bg-white text-black shadow-sm"
                >
                  <option value="date-desc">Newest First</option>
                  <option value="date-asc">Oldest First</option>
                  <option value="title">Title (A-Z)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {filteredAndSortedEvents.length > 0 ? (
              filteredAndSortedEvents.map((event) => (
                <div key={event.id} className="bg-white border border-red-100 rounded-2xl p-8 hover:shadow-lg transition-all shadow-md">
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-black">{event.title}</h3>
                      <div className="mt-3 space-y-2">
                        <p className="text-red-600 font-medium">{event.date} @ {event.time}</p>
                        <p className="text-gray-600">{event.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg">{event.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white border border-red-100 rounded-2xl p-12 text-center shadow-md">
                <p className="text-gray-600 text-lg">No events found for the selected filter.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
} 