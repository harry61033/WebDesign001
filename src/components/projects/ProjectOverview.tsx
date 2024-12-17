import React from 'react';

interface ProjectOverviewProps {
  description: string;
  challenge: string;
  solution: string;
}

export default function ProjectOverview({ description, challenge, solution }: ProjectOverviewProps) {
  return (
    <div className="grid md:grid-cols-3 gap-12 mb-16">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p className="text-gray-600 mb-8">{description}</p>
        
        <h2 className="text-2xl font-bold mb-4">Challenge</h2>
        <p className="text-gray-600 mb-8">{challenge}</p>
        
        <h2 className="text-2xl font-bold mb-4">Solution</h2>
        <p className="text-gray-600">{solution}</p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg h-fit">
        <h3 className="text-xl font-bold mb-4">Key Results</h3>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-600">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            Conversion Rate +45%
          </li>
          <li className="flex items-center text-gray-600">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            User Engagement +60%
          </li>
          <li className="flex items-center text-gray-600">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            Load Time -30%
          </li>
        </ul>
      </div>
    </div>
  );
}