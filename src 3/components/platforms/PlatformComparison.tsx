import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card } from '../common/Card';

const platforms = [
  {
    name: 'Basic Trading Platform',
    features: ['User-friendly Interface', 'Basic Charting Tools', 'Market Orders', 'Mobile Access'],
    description: 'Perfect for beginners with essential trading features'
  },
  {
    name: 'Advanced Trading Platform',
    features: ['Advanced Analytics', 'Multiple Order Types', 'Custom Indicators', 'API Integration'],
    description: 'Professional-grade platform for experienced traders'
  }
];

export default function PlatformComparison() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Trading Platforms</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {platforms.map((platform) => (
            <div key={platform.name} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
              <p className="text-gray-600 mb-6">{platform.description}</p>
              <ul className="space-y-3">
                {platform.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}