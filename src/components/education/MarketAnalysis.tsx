import React from 'react';
import { TrendingUp, Clock, BarChart2 } from 'lucide-react';

const analyses = [
  {
    title: 'Daily Market Review',
    time: '08:00 GMT',
    description: 'Comprehensive analysis of major market movements',
    icon: TrendingUp
  },
  {
    title: 'Weekly Outlook',
    time: 'Monday 07:00 GMT',
    description: 'Week ahead preview and key events to watch',
    icon: Clock
  },
  {
    title: 'Technical Analysis',
    time: 'Updated Hourly',
    description: 'Key support and resistance levels for major pairs',
    icon: BarChart2
  }
];

export default function MarketAnalysis() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Market Analysis</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {analyses.map((analysis) => (
            <div key={analysis.title} className="bg-white rounded-lg shadow-lg p-6">
              <analysis.icon className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold mb-2">{analysis.title}</h3>
              <p className="text-blue-900 font-semibold mb-3">{analysis.time}</p>
              <p className="text-gray-600">{analysis.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}