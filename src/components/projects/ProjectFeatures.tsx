import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Smartphone, BarChart, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: ShoppingCart,
    title: 'Streamlined Checkout',
    description: 'Simplified 2-step checkout process with smart validation'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Optimized experience for all device sizes'
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Real-time insights and performance metrics'
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'PCI compliant payment processing'
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Optimized loading times and caching'
  }
];

export default function ProjectFeatures() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}