import React from 'react';
import { motion } from 'framer-motion';

interface ProjectHeroProps {
  title: string;
  category: string;
  image: string;
  year: string;
  duration: string;
}

export default function ProjectHero({ title, category, image, year, duration }: ProjectHeroProps) {
  return (
    <div className="relative h-[60vh] mb-12 rounded-xl overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 mb-4"
        >
          <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
            {category}
          </span>
          <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
            {year}
          </span>
          <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
            {duration}
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-white"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
}