import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Stats() {
  const { t } = useLanguage();
  
  const stats = [
    { label: t('stats.projectsCompleted'), value: 150 },
    { label: t('stats.happyClients'), value: 50 },
    { label: t('stats.awardsWon'), value: 15 },
    { label: t('stats.yearsExperience'), value: 8 }
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      const increment = stat.value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.min(Math.round(current), stat.value);
          return newCounters;
        });

        if (current >= stat.value) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, []);

  return (
    <section className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                {counters[index].toLocaleString()}+
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}