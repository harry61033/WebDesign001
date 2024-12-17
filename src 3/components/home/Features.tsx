import React from 'react';
import { Palette, Layout, Code, Lightbulb, Zap, Users } from 'lucide-react';
import Card from '../common/Card';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Palette,
      title: t('services.uiDesign'),
      description: t('services.uiDesignDesc')
    },
    {
      icon: Layout,
      title: t('services.uxDesign'),
      description: t('services.uxDesignDesc')
    },
    {
      icon: Code,
      title: t('services.development'),
      description: t('services.developmentDesc')
    },
    {
      icon: Lightbulb,
      title: t('services.strategy'),
      description: t('services.strategyDesc')
    },
    {
      icon: Zap,
      title: t('services.prototyping'),
      description: t('services.prototypingDesc')
    },
    {
      icon: Users,
      title: t('services.research'),
      description: t('services.researchDesc')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}