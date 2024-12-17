import React from 'react';
import { motion } from 'framer-motion';

interface ProjectOverviewProps {
  description: string;
  challenge: string;
  solution: string;
}

export default function ProjectOverview({ description, challenge, solution }: ProjectOverviewProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 bg-white rounded-xl shadow-lg p-6"
      >
        <h2 className="text-xl font-bold mb-4">Project Overview</h2>
        <p className="text-gray-600">{description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 bg-white rounded-xl shadow-lg p-6"
      >
        <h2 className="text-xl font-bold mb-4">Challenge</h2>
        <p className="text-gray-600">{challenge}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 bg-white rounded-xl shadow-lg p-6"
      >
        <h2 className="text-xl font-bold mb-4">Solution</h2>
        <p className="text-gray-600">{solution}</p>
      </motion.div>
    </>
  );
}