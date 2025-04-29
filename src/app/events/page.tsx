import Link from "next/link";

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Involvement Fair",
      date: "August 26, 2025",
      time: "11:00 AM - 4:00 PM",
      location: "TBD",
      description: "Meet the VSA eboard and learn about our organization.",
      rsvpLink: "https://linktr.ee/pennstatevsa"
    },
    {
      id: 2,
      title: "First GBM",
      date: "August 28, 2025",
      time: "6:00 PM - 7:30 PM",
      location: "TBD",
      description: "First general body meeting of the semester.",
      rsvpLink: "https://linktr.ee/pennstatevsa"
    },
    {
      id: 3,
      title: "Welcome Back Pool Party",
      date: "September 7, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "TBD",
      description: "Pool party to welcome everyone back to campus.",
      rsvpLink: "https://linktr.ee/pennstatevsa"
    },
    {
      id: 4,
      title: "Boba Social",
      date: "September 14, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "TBD",
      description: "Social event with boba and games.",
      rsvpLink: "https://linktr.ee/pennstatevsa"
    },
    {
      id: 5,
      title: "Mid-Autumn Festival",
      date: "September 21, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "TBD",
      description: "Celebration of the Mid-Autumn Festival with food and activities.",
      rsvpLink: "https://linktr.ee/pennstatevsa"
    },
    {
      id: 6,
      title: "THON Ice Cream Sale",
      date: "September 28, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "TBD",
      description: "Fundraiser for THON selling ice cream.",
      rsvpLink: "https://linktr.ee/pennstatevsa"
    },
    {
      id: 7,
      title: "Annual Hiking Trip",
      date: "October 5, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "TBD",
      description: "Hiking trip with THSA and HKSA.",
      rsvpLink: "https://linktr.ee/pennstatevsa"
    }
  ];

  const pastEvents = [
    {
      id: 8,
      title: "Tet Celebration",
      date: "January 19, 2025",
      time: "6:30 PM - 9:30 PM",
      location: "Alumni Hall",
      description: "Lunar New Year celebration with performances and food."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Upcoming Events */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-black">Upcoming Events</h2>
          <div className="grid gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="border-2 border-red-100 rounded-xl p-6 hover:border-red-200 transition-colors">
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-black">{event.title}</h3>
                      <a
                        href={event.rsvpLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group"
                      >
                        <span>RSVP</span>
                        <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                    <div className="mt-2 space-y-1">
                      <p className="text-red-600 text-sm font-medium">{event.date} @ {event.time}</p>
                      <p className="text-black">{event.location}</p>
                    </div>
                  </div>
                  <p className="text-black">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-black">Past Events</h2>
          <div className="grid gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="border-2 border-red-100 rounded-xl p-6 hover:border-red-200 transition-colors">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-black">{event.title}</h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-red-600 text-sm font-medium">{event.date} @ {event.time}</p>
                      <p className="text-black">{event.location}</p>
                    </div>
                  </div>
                  <p className="text-black">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 