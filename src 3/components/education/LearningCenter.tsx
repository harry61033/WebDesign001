import React from 'react';
import { BookOpen, Video, FileText, Users } from 'lucide-react';

const resources = [
  {
    icon: BookOpen,
    title: 'Trading Guides',
    description: 'Comprehensive guides for all skill levels'
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Step-by-step video lessons'
  },
  {
    icon: FileText,
    title: 'Market Analysis',
    description: 'Daily market insights and analysis'
  },
  {
    icon: Users,
    title: 'Webinars',
    description: 'Live trading sessions with experts'
  }
];

export default function LearningCenter() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Learning Center</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource) => (
            <div key={resource.title} className="bg-white rounded-lg shadow p-6">
              <resource.icon className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}