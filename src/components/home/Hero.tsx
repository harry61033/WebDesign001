import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import HeroButton from '../common/HeroButton';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80"
          alt="Design Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-black/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
        <div className="flex flex-col justify-center h-full pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl animate-fadeIn">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <HeroButton
              variant="primary"
              to="/work"
            >
              {t('hero.viewWork')}
            </HeroButton>
            <HeroButton
              variant="secondary"
              to="/contact"
            >
              {t('hero.contact')}
            </HeroButton>
          </div>
        </div>
      </div>
    </div>
  );
}