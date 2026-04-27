'use client';

import { useState, useEffect } from 'react';

export default function Events() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const calendarUrl = "https://calendar.google.com/calendar/embed?src=58883c0bd3d8d4075cc2c72379221ecf04f6a7688a712e89adee94f251793101%40group.calendar.google.com&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&bgcolor=%23ffffff&color=%23B71C1C";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-black">Events</h1>
        <div className="rounded-2xl overflow-hidden shadow-md bg-white">
          <iframe
            src={calendarUrl}
            className="w-full"
            style={{ height: isMobile ? '450px' : '600px', border: 'none', display: 'block' }}
            title="VSA Events Calendar"
          />
        </div>
      </div>
    </div>
  );
}
