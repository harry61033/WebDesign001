import React from 'react';
import { Palette, Layout, Code, Lightbulb, Zap, Users } from 'lucide-react';
import Card from '../common/Card';

const services = [
  {
    icon: Palette,
    title: 'UI Design',
    description: 'Creating beautiful and intuitive user interfaces that delight users'
  },
  {
    icon: Layout,
    title: 'UX Design',
    description: 'Crafting seamless user experiences through research and testing'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Bringing designs to life with clean, efficient code'
  },
  {
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Developing effective digital strategies aligned with business goals'
  },
  {
    icon: Zap,
    title: 'Prototyping',
    description: 'Creating interactive prototypes for testing and validation'
  },
  {
    icon: Users,
    title: 'User Research',
    description: 'Understanding user needs through research and analysis'
  }
];

export default function ServicesList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {services.map((service, index) => (
        <Card
          key={index}
          className="hover:translate-y-[-4px] transition-all duration-300"
        >
          <service.icon className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </Card>
      ))}
    </div>
  );
}