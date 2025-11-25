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
          <div className="space-y-6">
            {/* 2 Points Reward */}
            <div className="bg-white rounded-xl p-6 border-2 border-red-100 hover:border-red-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 rounded-full px-4 py-2 font-bold text-red-600 shrink-0">
                  2 Points
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">10% Off Sponsor Coupon</h3>
                  <p className="text-lg text-black mb-3">
                    Get a 10% discount coupon at any of our sponsors:
                  </p>
                  <ul className="list-disc list-inside text-lg text-black space-y-1">
                    <li>Tasty K</li>
                    <li>Whale Tea</li>
                    <li>Momotaro</li>
                    <li>Hawaiian Poke</li>
                    <li>Uncle Chen</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5 Points Reward */}
            <div className="bg-white rounded-xl p-6 border-2 border-red-100 hover:border-red-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 rounded-full px-4 py-2 font-bold text-red-600 shrink-0">
                  5 Points
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">Free Event Entry</h3>
                  <p className="text-lg text-black">
                    Get free entrance to any of our paid events (excluding Tet)
                  </p>
                </div>
              </div>
            </div>

            {/* 10 Points Reward */}
            <div className="bg-white rounded-xl p-6 border-2 border-red-100 hover:border-red-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 rounded-full px-4 py-2 font-bold text-red-600 shrink-0">
                  10 Points
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">Free VSA Merch</h3>
                  <p className="text-lg text-black">
                    Get free VSA merchandise (design coming soon)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 