import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, Target } from 'lucide-react';

interface Result {
  metric: string;
  label: string;
}

interface ProjectResultsProps {
  results: Result[];
}

const resultIcons = [TrendingUp, ArrowUpRight, Target];

export default function ProjectResults({ results }: ProjectResultsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('results-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div id="results-section" className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Project Results</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {results.map((result, index) => {
          const Icon = resultIcons[index % resultIcons.length];
          return (
            <motion.div
              key={result.metric}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{result.metric}</div>
              <p className="text-gray-600">{result.label}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}