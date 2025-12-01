import Image from "next/image";

export default function Membership() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <section className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">VSA Membership Program</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our community and start earning rewards for your participation!
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-black">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-red-100">
              <div className="text-5xl font-bold mb-4 text-red-600">1</div>
              <h3 className="text-xl font-bold mb-3 text-black">Sign Up</h3>
              <p className="text-gray-600">Follow us on Flare to become a member</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-red-100">
              <div className="text-5xl font-bold mb-4 text-red-600">2</div>
              <h3 className="text-xl font-bold mb-3 text-black">Attend Events</h3>
              <p className="text-gray-600">Earn points for participating in events</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-red-100">
              <div className="text-5xl font-bold mb-4 text-red-600">3</div>
              <h3 className="text-xl font-bold mb-3 text-black">Get Rewards</h3>
              <p className="text-gray-600">Redeem your points for exclusive rewards</p>
            </div>
          </div>
        </section>

        {/* Rewards Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-black">Membership Rewards</h2>
          
          <div className="space-y-8">
            {/* 2 Points Reward */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-red-100">
              <div className="flex items-start gap-6">
                <div className="bg-red-600 text-white rounded-full px-5 py-2 font-bold shrink-0 shadow-md">
                  2 Points
                </div>
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-3 text-black">10% Off Sponsor Coupon</h3>
                  <p className="text-gray-600 mb-4">
                    Get a 10% discount coupon at any of our sponsors:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                    <li>Tasty K</li>
                    <li>Whale Tea</li>
                    <li>Momotaro</li>
                    <li>Hawaiian Poke</li>
                    <li>Uncle Chen</li>
                  </ul>
                  
                  {/* Coupon Image */}
                  <div className="relative w-full max-w-lg h-[200px] rounded-xl overflow-hidden">
                    <Image
                      src="/assets/vsa-membership-coupon.png"
                      alt="VSA Membership Coupon"
                      fill
                      className="object-contain object-left"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 5 Points Reward */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-red-100">
              <div className="flex items-start gap-6">
                <div className="bg-red-600 text-white rounded-full px-5 py-2 font-bold shrink-0 shadow-md">
                  5 Points
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-black">Free Event Entry</h3>
                  <p className="text-gray-600">
                    Get free entrance to any of our paid events (excluding Tet)
                  </p>
                </div>
              </div>
            </div>

            {/* 10 Points Reward */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-red-100">
              <div className="flex items-start gap-6">
                <div className="bg-red-600 text-white rounded-full px-5 py-2 font-bold shrink-0 shadow-md">
                  10 Points
                </div>
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-3 text-black">Free VSA Merch</h3>
                  <p className="text-gray-600 mb-6">
                    Get free VSA merchandise (new design coming soon)
                  </p>
                  
                  {/* Merch Image */}
                  <div className="relative w-full max-w-lg h-[200px] rounded-xl overflow-hidden">
                    <Image
                      src="/assets/vsa-merch.jpg"
                      alt="VSA Merchandise"
                      fill
                      className="object-contain object-left"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 