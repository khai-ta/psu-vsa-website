import Link from "next/link";

export default function Events() {
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

  const pastEvents = [
    {
      id: 2,
      title: "ASA x VSA Trick or Treat Night",
      date: "October 31, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "HUB 233AB",
      description: "Decorate your own trick or treat bags, show up in costumes for a chance to win prizes, and fill your bag with treats from eboard. Costume contest included!",
    },
    {
      id: 3,
      title: "Childhood Sports Day",
      date: "October 18, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "HUB Lawn",
      description: "Play traditional games including blindfolded goat catching, weighted shuttlecock kicking, marble toss and catch, telephone game, and rock paper scissors",
    },
    {
      id: 4,
      title: "Mid-Autumn Festival",
      date: "October 12, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Business Building 108",
      description: "Make lanterns and mooncake to celebrate the Mid-Autumn Festival",
    },
    {
      id: 5,
      title: "Movie Night",
      date: "October 10, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Thomas 100",
      description: "Watch Mai with free popcorn",
    },
    {
      id: 6,
      title: "Physical 100",
      date: "October 4, 2025",
      time: "12:00 PM - 5:00 PM",
      location: "Sunset Park",
      description: "Joint event with ASFC x KSA x VSA x ASA x FJSA x TASA x HKSA",
    },
    {
      id: 7,
      title: "Tien Len Tournament",
      date: "October 3, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Teadori",
      description: "$3 entry fee to win big prizes",
    },
    {
      id: 8,
      title: "VSA Ice Cream Sale",
      date: "September 27, 2025",
      time: "Kickoff @ 7:30 PM",
      location: "Beaver Stadium",
      description: "Free game entrance and ice cream to support VSA",
    },
    {
      id: 9,
      title: "Karaoke Night",
      date: "September 26, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Thomas 100",
      description: "Sing your heart out with VSA",
    },
    {
      id: 10,
      title: "Cup of Coffee with VSA",
      date: "September 21, 2025",
      time: "12:00 PM - 2:00 PM",
      location: "HUB 131",
      description: "$3 for Vietnamese coffee or to make it yourself",
    },
    {
      id: 11,
      title: "Common Hour #2",
      date: "September 19, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Huck 005",
      description: "Come to play card games, study, socialize, and make new friends",
    },
    {
      id: 12,
      title: "Arboretum Picnic",
      date: "September 14, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "The Overlook Pavilion / Event Lawn",
      description: "$5 entry or bring food. Featured: banh xeo, spring rolls, fried eggs and rice, stir fried noodles, fried spring rolls, spam musubi",
    },
    {
      id: 13,
      title: "Common Hour #1",
      date: "September 12, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Huck 005",
      description: "Study or learn how to play tien len",
    },
    {
      id: 14,
      title: "First GBM",
      date: "September 5, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Health and Human Development 254",
      description: "First general body meeting of the semester",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Tet Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-black">Tet Celebration</h2>
          <div className="bg-gradient-to-br from-red-50 to-yellow-50 border-2 border-red-200 rounded-xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">Vietnamese Lunar New Year</h3>
              <p className="text-lg text-red-600 font-medium">Coming in 2026</p>
            </div>
            <p className="text-black text-center mb-4">
              Join us for our biggest celebration of the year! Tet is the Vietnamese Lunar New Year celebration featuring traditional food, performances, cultural activities, and more.
            </p>
            <p className="text-black text-center text-sm italic">
              Details and ticket information will be announced soon. Stay tuned!
            </p>
          </div>
        </section>

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

        {/* Past Events*/}
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