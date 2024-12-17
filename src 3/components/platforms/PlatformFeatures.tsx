import React from 'react';
import { LineChart, Shield, Smartphone, Zap } from 'lucide-react';

const features = [
  {
    icon: LineChart,
    title: 'Professional Charts',
    description: 'Multiple timeframes and technical analysis tools'
  },
  {
    icon: Shield,
    title: 'Secure Trading',
    description: 'Enterprise-grade security and encryption'
  },
  {
    icon: Smartphone,
    title: 'Mobile Trading',
    description: 'Trade on-the-go with our mobile apps'
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'Lightning-fast order execution'
  }
];

export default function PlatformFeatures() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Platform Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-lg">
              <feature.icon className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}