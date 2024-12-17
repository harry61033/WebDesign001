import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/styles';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProjectCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectCategories({ 
  selectedCategory, 
  onCategoryChange 
}: ProjectCategoriesProps) {
  const { t } = useLanguage();
  const categories = ['All', 'UI/UX Design', 'Web Design', 'Mobile Design', 'Branding'];

  return (
    <div className="flex flex-wrap gap-4 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category)}
          className={cn(
            'px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300',
            'hover:shadow-md',
            selectedCategory === category
              ? 'bg-primary text-white shadow-lg'
              : 'bg-white text-gray-600 hover:text-primary hover:bg-gray-50'
          )}
        >
          {t(`categories.${category.toLowerCase().replace(/\s+/g, '')}`) || category}
        </motion.button>
      ))}
    </div>
  );
}