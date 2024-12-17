import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/styles';

interface FilterButtonProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
}

export default function FilterButton({ category, isActive, onClick }: FilterButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
        isActive
          ? 'bg-primary text-white shadow-lg'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      )}
    >
      {category}
    </motion.button>
  );
}