import Image from "next/image";

export default function About() {
  const eboardMembers = [
    {
      name: "Anthony Khuc",
      position: "President",
      year: "Sophomore",
      image: "/eboard/president.jpg"
    },
    {
      name: "Christian Ta",
      position: "Vice President",
      year: "Sophomore",
      image: "/eboard/vice-president.jpg"
    },
    {
      name: "Khai Ta",
      position: "Secretary",
      year: "Sophomore",
      image: "/eboard/secretary.jpg"
    },
    {
      name: "Jonathan Song",
      position: "Treasurer",
      year: "Junior",
      image: "/eboard/treasurer.jpg"
    },
    {
      name: "Trang Mai",
      position: "Event Chair",
      year: "Sophomore",
      image: "/eboard/event-chair.jpg"
    },
    {
      name: "Nguyen Ngo",
      position: "External Relations Chair",
      year: "Sophomore",
      image: "/eboard/external-relations.jpg"
    },
    {
      name: "XX",
      position: "Social Media Chair",
      year: "XX",
      image: "/eboard/placeholder.jpg"
    },
    {
      name: "Vy Phan",
      position: "THON Chair",
      year: "Senior",
      image: "/eboard/thon-chair.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl p-8 border-2 border-red-100">
            <h2 className="text-3xl font-bold mb-4 text-black">Our Mission</h2>
            <p className="text-lg text-black leading-relaxed">
              The Vietnamese Student Association at Penn State University is dedicated to promoting Vietnamese culture and heritage through various events and activities. We aim to create a welcoming community for students of all backgrounds to learn about and celebrate Vietnamese traditions while fostering cultural awareness and understanding on campus.
            </p>
          </div>
        </section>

        {/* Community Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-black">Our Community</h2>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
            <Image
              src="/members.jpg"
              alt="VSA Community"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Eboard Members */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-black">Executive Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eboardMembers.map((member) => (
              <div key={member.position} className="border-2 border-red-100 rounded-xl overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.position}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl text-black">{member.name}</h3>
                  <p className="text-red-600 font-medium">{member.position}</p>
                  <p className="text-black text-sm">{member.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 