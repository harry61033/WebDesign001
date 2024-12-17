import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectGrid from '../components/work/ProjectGrid';
import ProjectCategories from '../components/work/ProjectCategories';
import Container from '../components/common/Container';
import { useLanguage } from '../contexts/LanguageContext';

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pt-24 pb-20 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="max-w-2xl mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('work.title') || 'My Work'}
            </h1>
            <p className="text-gray-600">
              {t('work.subtitle') || 'A collection of my recent design projects and creative works.'}
            </p>
          </div>

          <ProjectCategories
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          <ProjectGrid selectedCategory={selectedCategory} />
        </motion.div>
      </Container>
    </main>
  );
}