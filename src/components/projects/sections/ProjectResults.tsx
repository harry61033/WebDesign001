import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, Target } from 'lucide-react';

interface ProjectResultsProps {
  results: string[];
}

export default function ProjectResults({ results }: ProjectResultsProps) {
  const icons = [TrendingUp, ArrowUpRight, Target];

  return (
    <div className="my-16">
      <h2 className="text-2xl font-bold mb-8">Project Results</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {results.map((result, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-lg font-semibold text-gray-800">{result}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}