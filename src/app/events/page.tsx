'use client';

import { useState, useMemo, useEffect } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  month?: string;
  rsvpLink?: string;
}

function EventDayView({ date, month, dayEvents }: { date: number; month: string; dayEvents: Event[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-[14px] font-semibold text-black">
        {month} {date}, 2025
      </h3>
      {dayEvents.length === 0 ? (
        <p className="text-[14px] text-gray-600">No events scheduled for this day</p>
      ) : (
        <div className="space-y-3">
          {dayEvents.map((event) => (
            <div key={event.id} className="rounded-lg border border-red-100 bg-red-50 p-4">
              <h4 className="font-semibold text-black mb-2">{event.title}</h4>
              <div className="space-y-1 text-[13px] text-gray-700">
                <p>🕐 {event.time}</p>
                <p>📍 {event.location}</p>
                <p className="text-sm mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function EventCalendar({ events }: { events: Event[] }) {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(0);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [todayDate, setTodayDate] = useState(0);
  const [todayMonth, setTodayMonth] = useState(0);
  const [todayYear, setTodayYear] = useState(0);

  useEffect(() => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();

    setCurrentMonth(month);
    setCurrentYear(year);
    setSelectedDate(date);
    setTodayDate(date);
    setTodayMonth(month);
    setTodayYear(year);
  }, []);

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const month = monthNames[currentMonth - 1];
  const monthNum = currentMonth;
  const year = currentYear;

  const daysInMonths: { [key: number]: number } = {
    1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30,
    7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
  };

  const daysInMonth = daysInMonths[monthNum];
  const firstDayOfMonth = new Date(year, monthNum - 1, 1).getDay();

  const datesWithEvents = useMemo(() => {
    const filtered = events.filter((e) => {
      const eventDate = new Date(e.date);
      return (
        eventDate.getMonth() === monthNum - 1 &&
        eventDate.getFullYear() === year
      );
    });

    const eventMap = new Map<number, Event[]>();
    filtered.forEach((e) => {
      const day = new Date(e.date).getDate();
      if (!eventMap.has(day)) {
        eventMap.set(day, []);
      }
      eventMap.get(day)!.push(e);
    });

    return eventMap;
  }, [events, monthNum, year]);

  const selectedDayEvents = selectedDate ? (datesWithEvents.get(selectedDate) || []) : [];

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-3 mb-6 md:mb-12">
      <div className="lg:col-span-2">
        <div className="rounded-lg border border-red-100 bg-white p-3 sm:p-6 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[18px] font-semibold text-black">{month} {year}</h2>
            <div className="flex gap-2">
              <button
                onClick={handlePrevMonth}
                className="px-3 py-2 rounded border border-red-200 text-red-600 hover:bg-red-50 font-medium text-sm transition"
              >
                ← Prev
              </button>
              <button
                onClick={handleNextMonth}
                className="px-3 py-2 rounded border border-red-200 text-red-600 hover:bg-red-50 font-medium text-sm transition"
              >
                Next →
              </button>
            </div>
          </div>

          <div className="mb-4 grid grid-cols-7 gap-1 sm:gap-2 text-center">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="py-2 text-[12px] font-semibold text-gray-700">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {days.map((day, idx) => {
              if (day === null) {
                return <div key={idx} className="aspect-square" />;
              }

              const hasEvent = datesWithEvents.has(day);
              const isSelected = day === selectedDate;
              const isToday = day === todayDate && currentMonth === todayMonth && currentYear === todayYear;

              return (
                <button
                  key={idx}
                  onClick={() => setSelectedDate(day)}
                  className={`relative aspect-square rounded-lg border py-2 text-[13px] font-medium transition-all ${
                    isToday
                      ? "border-red-600 bg-red-100 text-red-600 font-bold ring-2 ring-red-400"
                      : isSelected
                        ? "border-red-600 bg-red-50 text-black font-semibold"
                        : hasEvent
                          ? "border-red-200 bg-white text-black hover:bg-red-50"
                          : "border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {day}
                  {hasEvent && (
                    <div className={`absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full ${isToday || isSelected ? "bg-red-600" : "bg-red-400"}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-red-100 bg-red-50 p-3 sm:p-6 shadow-md">
        {selectedDate ? (
          <EventDayView date={selectedDate} month={month} dayEvents={selectedDayEvents} />
        ) : (
          <div className="text-center text-gray-600">
            <p className="text-sm">Click on a date to see events</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Events() {
  const pastEvents: Event[] = [
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Events Calendar */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">Events</h2>
          <EventCalendar events={pastEvents} />
        </section>
      </div>
    </div>
  );
} 