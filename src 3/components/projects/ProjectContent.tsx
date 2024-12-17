import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, ArrowUpRight, Link as LinkIcon } from 'lucide-react';
import ProjectGallery from './sections/ProjectGallery';
import ProjectResults from './sections/ProjectResults';
import ProjectCTA from './sections/ProjectCTA';

interface ProjectContentProps {
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

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-16">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          src={project.images[0]}
          alt={project.title}
          className="w-full h-[600px] object-cover rounded-2xl shadow-lg mb-8"
        />
        
        <div className="flex flex-wrap items-start justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-gray-600">{project.description}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <div className="flex items-center gap-2 text-gray-600">
              <Heart className="w-5 h-5" />
              <span>92</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Eye className="w-5 h-5" />
              <span>18.1k</span>
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors">
              <LinkIcon className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Project Details */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4">Challenge</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">{project.challenge}</p>
          
          <h2 className="text-2xl font-bold mb-4">Solution</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{project.solution}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          {project.results.map((result, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <div className="text-xl font-semibold text-primary">{result}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Visual Gallery */}
      <ProjectGallery images={project.images} />

      {/* Results Section */}
      <ProjectResults results={project.results} />

      {/* CTA Section */}
      <ProjectCTA />
    </div>
  );
}