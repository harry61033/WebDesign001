import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '../../utils/constants';

export default function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">{t('contact.title')}</h2>
      <p className="text-gray-600 mb-8">
        {t('contact.subtitle')}
      </p>
      
      <div className="space-y-4 mb-8">
        <div className="flex items-center">
          <Mail className="h-5 w-5 text-primary mr-3" />
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-600 hover:text-primary">
            {CONTACT_EMAIL}
          </a>
        </div>
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-primary mr-3" />
          <span className="text-gray-600">+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-primary mr-3" />
          <span className="text-gray-600">San Francisco, CA</span>
        </div>
      </div>

      <div className="flex space-x-4">
        {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary"
          >
            {platform.charAt(0).toUpperCase() + platform.slice(1)}
          </a>
        ))}
      </div>
    </div>
  );
}