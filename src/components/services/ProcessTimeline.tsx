import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Discovery',
    description: 'Understanding your goals, requirements, and target audience',
  },
  {
    title: 'Strategy',
    description: 'Developing a comprehensive plan and approach',
  },
  {
    title: 'Design',
    description: 'Creating beautiful and functional solutions',
  },
  {
    title: 'Development',
    description: 'Bringing the designs to life with clean code',
  },
  {
    title: 'Testing',
    description: 'Ensuring quality and optimal performance',
  },
  {
    title: 'Launch',
    description: 'Deploying and monitoring the final product',
  },
];

export default function ProcessTimeline() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-8">Design Process</h2>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex-grow">
              <div className="h-full">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="w-px h-12 bg-gray-200 ml-4 my-2" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}