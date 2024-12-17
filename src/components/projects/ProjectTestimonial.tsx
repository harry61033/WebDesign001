import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface ProjectTestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export default function ProjectTestimonial({
  quote,
  author,
  role,
  company,
  image
}: ProjectTestimonialProps) {
  return (
    <div className="mb-16 bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic">
            "{quote}"
          </blockquote>
          <div className="flex items-center justify-center">
            {image && (
              <img
                src={image}
                alt={author}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
            )}
            <div>
              <div className="font-bold text-gray-900">{author}</div>
              <div className="text-gray-600">
                {role} at {company}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}