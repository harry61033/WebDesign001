import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/work/${project.id}`} className="block">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
          <div className="relative overflow-hidden aspect-video">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
          </div>
          
          <div className="p-6">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-3">
              {project.category}
            </span>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="flex items-center text-primary font-medium group">
              <span className="mr-2">View Details</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}