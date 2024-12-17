import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Layout, Code, Rocket } from 'lucide-react';

const processSteps = [
  { icon: Search, title: 'Research', description: 'User research and competitor analysis' },
  { icon: PenTool, title: 'Wireframe', description: 'Low and high fidelity wireframes' },
  { icon: Layout, title: 'UI Design', description: 'Visual design and prototyping' },
  { icon: Code, title: 'Development', description: 'Frontend implementation' },
  { icon: Rocket, title: 'Launch', description: 'Testing and deployment' }
];

export default function ProjectProcess() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Design Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg relative"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <step.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
            {index < processSteps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}