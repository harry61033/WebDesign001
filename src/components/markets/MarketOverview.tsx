import React from 'react';
import { BarChart, TrendingUp, DollarSign, Bitcoin } from 'lucide-react';

const markets = [
  {
    icon: TrendingUp,
    name: 'Forex',
    description: 'Trade major, minor, and exotic currency pairs'
  },
  {
    icon: BarChart,
    name: 'Stocks',
    description: 'Access global equity markets'
  },
  {
    icon: DollarSign,
    name: 'Commodities',
    description: 'Trade gold, silver, oil, and more'
  },
  {
    icon: Bitcoin,
    name: 'Crypto',
    description: 'Trade popular cryptocurrencies 24/7'
  }
];

export default function MarketOverview() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Available Markets</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {markets.map((market) => (
            <div key={market.name} className="bg-white rounded-lg shadow-lg p-6">
              <market.icon className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold mb-2">{market.name}</h3>
              <p className="text-gray-600">{market.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}