import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Users } from 'lucide-react';

interface Metric {
  icon: typeof TrendingUp;
  label: string;
  value: string;
  description: string;
}

const metrics: Metric[] = [
  {
    icon: TrendingUp,
    label: 'Conversion Rate',
    value: '+45%',
    description: 'Increase in successful purchases'
  },
  {
    icon: Clock,
    label: 'Load Time',
    value: '-30%',
    description: 'Faster page loading speed'
  },
  {
    icon: Users,
    label: 'User Satisfaction',
    value: '+60%',
    description: 'Improvement in user feedback'
  }
];

export default function ProjectMetrics() {
  return (
    <div className="mb-16 bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Impact & Results</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <metric.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold mb-2">{metric.label}</div>
              <p className="text-gray-600">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}