import Image from "next/image";

export default function Membership() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <section className="mb-16 text-center">
          <h1 className="text-3xl font-bold mb-4 text-black">VSA Membership Program</h1>
          <p className="text-lg text-black">
            Join our community and start earning rewards for your participation!
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-black">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-red-100">
              <div className="text-4xl mb-4">1</div>
              <h3 className="text-xl font-bold mb-2 text-black">Sign Up</h3>
              <p className="text-lg text-black">Follow us on Flare to become a member</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-red-100">
              <div className="text-4xl mb-4">2</div>
              <h3 className="text-xl font-bold mb-2 text-black">Attend Events</h3>
              <p className="text-lg text-black">Earn points for participating in events</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-red-100">
              <div className="text-4xl mb-4">3</div>
              <h3 className="text-xl font-bold mb-2 text-black">Get Rewards</h3>
              <p className="text-lg text-black">Redeem your points for exclusive rewards</p>
            </div>
          </div>
        </section>

        {/* Rewards Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-black">Membership Rewards</h2>
          <div className="bg-white rounded-xl p-6 border-2 border-red-100">
            <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden">
              <Image
                src="/membership/rewards.jpg"
                alt="Membership Rewards"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-lg text-black">
              Earn points by participating in events and redeem them for exclusive rewards! The more events you attend, the better the rewards you can earn.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 