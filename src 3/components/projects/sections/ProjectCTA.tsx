import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProjectCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-primary text-white rounded-xl p-12 text-center mt-16"
    >
      <h2 className="text-3xl font-bold mb-4">Let's Build Something Great Together</h2>
      <p className="text-lg text-white/80 mb-8">
        Get in touch to discuss your next project or collaboration
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact"
          className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center group"
        >
          Get in Touch
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/work"
          className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
        >
          View More Projects
        </Link>
      </div>
    </motion.div>
  );
}