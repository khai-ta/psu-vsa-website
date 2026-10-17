import Image from "next/image";

export default function Membership() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <section className="mb-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-black">VSA Membership Program</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Join our community and start earning rewards for your participation!
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-black">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-red-100">
              <div className="text-4xl md:text-5xl font-bold mb-4 text-red-600">1</div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-black">Get Your Stamp Card</h3>
              <p className="text-sm md:text-base text-gray-600">Come to any event for your card and first stamp</p>
            </div>
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-red-100">
              <div className="text-4xl md:text-5xl font-bold mb-4 text-red-600">2</div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-black">Attend Events</h3>
              <p className="text-sm md:text-base text-gray-600">Earn stamps for participating in events</p>
            </div>
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-red-100">
              <div className="text-4xl md:text-5xl font-bold mb-4 text-red-600">3</div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-black">Get Rewards</h3>
              <p className="text-sm md:text-base text-gray-600">Redeem your stamps for exclusive rewards</p>
            </div>
          </div>

          {/* Stamp Card Images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
            <div className="relative w-full max-w-sm h-[200px] rounded-xl overflow-hidden">
              <Image
                src="/assets/membership/vsa-stamp-card-front.jpg"
                alt="First picture"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="relative w-full max-w-sm h-[200px] rounded-xl overflow-hidden">
              <Image
                src="/assets/membership/vsa-stamp-card-back.jpg"
                alt="Second picture"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Rewards Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-black">Membership Rewards</h2>

          <div className="space-y-6 md:space-y-8">
            {/* 7 Stamps Reward */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all border border-red-100">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <div className="bg-red-600 text-white rounded-full px-4 md:px-5 py-2 font-bold shrink-0 shadow-md text-sm md:text-base">
                  7 Stamps
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">Free VSA Keychain</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    Receive this year's exclusive VSA keychain
                  </p>
                </div>
              </div>
            </div>

            {/* 10 Stamps Reward */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all border border-red-100">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <div className="bg-red-600 text-white rounded-full px-4 md:px-5 py-2 font-bold shrink-0 shadow-md text-sm md:text-base">
                  10 Stamps
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">Sponsor Coupon</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Receive a discount coupon for any of our sponsors
                  </p>
                  <ul className="list-disc list-inside text-sm md:text-base text-gray-600 space-y-2 mb-6">
                    <li>Tasty K</li>
                    <li>Whale Tea</li>
                    <li>Momotaro</li>
                    <li>Hawaiian Poke</li>
                    <li>Uncle Chen</li>
                  </ul>

                  {/* Coupon Image */}
                  <div className="relative w-full max-w-lg h-[120px] md:h-[200px] rounded-xl overflow-hidden">
                    <Image
                      src="/assets/membership/vsa-membership-coupon.png"
                      alt="VSA Membership Coupon"
                      fill
                      className="object-contain object-left"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 15 Stamps Reward */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all border border-red-100">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <div className="bg-red-600 text-white rounded-full px-4 md:px-5 py-2 font-bold shrink-0 shadow-md text-sm md:text-base">
                  15 Stamps
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">Free VSA Statue</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-6">
                    Limited quantity
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