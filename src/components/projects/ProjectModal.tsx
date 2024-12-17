import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectContent from './ProjectContent';

interface ProjectModalProps {
  project: {
    id: string;
    title: string;
    category: string;
    description: string;
    images: string[];
    challenge: string;
    solution: string;
    results: string[];
    year: string;
    duration: string;
  };
}

export default function ProjectModal({ project }: ProjectModalProps) {
  const navigate = useNavigate();

  const closeModal = () => {
    navigate('/work');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 overflow-y-auto"
      >
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="min-h-screen bg-white mt-16 rounded-t-[32px] relative"
        >
          <button
            onClick={closeModal}
            className="fixed top-6 right-6 z-50 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <ProjectContent project={project} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}