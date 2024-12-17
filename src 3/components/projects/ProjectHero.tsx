import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

interface ProjectHeroProps {
  title: string;
  category: string;
  image: string;
  year: string;
  duration: string;
}

export default function ProjectHero({ title, category, image, year, duration }: ProjectHeroProps) {
  return (
    <div className="relative min-h-[60vh] mb-16">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <Container className="relative h-full">
        <div className="h-full flex flex-col justify-end py-12">
          <Link 
            to="/work"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 text-sm"
          >
            <span className="bg-white/20 px-3 py-1 rounded-full text-white">{category}</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-white">{year}</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-white">{duration}</span>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}