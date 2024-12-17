import React from 'react';

export default function CompanyOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About TradePro</h2>
          <p className="text-lg text-gray-600 mb-8">
            TradePro is a leading online trading platform, providing traders worldwide
            with access to global financial markets. With over 15 years of experience,
            we've built a reputation for reliability, innovation, and exceptional
            customer service.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-600">To empower traders with professional tools and support</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-600">To be the most trusted name in online trading</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Our Values</h3>
              <p className="text-gray-600">Integrity, Innovation, and Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}