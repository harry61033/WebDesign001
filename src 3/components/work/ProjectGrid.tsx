import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../../contexts/LanguageContext';

const projects = [
  {
    id: 'e-commerce-redesign',
    title: 'E-commerce Redesign',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    description: 'Complete redesign of an e-commerce platform focusing on user experience'
  },
  {
    id: 'banking-app',
    title: 'Banking App',
    category: 'Mobile Design',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
    description: 'Mobile banking application with focus on simplicity and security'
  },
  {
    id: 'healthcare-dashboard',
    title: 'Healthcare Dashboard',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80',
    description: 'Analytics dashboard for healthcare professionals'
  }
];

export default function ProjectGrid({ selectedCategory }: { selectedCategory: string }) {
  const { t } = useLanguage();
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const filtered = selectedCategory === 'All'
      ? projects
      : projects.filter(project => project.category === selectedCategory);
    setFilteredProjects(filtered);
  }, [selectedCategory]);

  return (
    <motion.div
      layout
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <AnimatePresence mode="wait">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}