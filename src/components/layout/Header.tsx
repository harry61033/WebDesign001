import React from 'react';
import { Link } from 'react-router-dom';
import { Palette } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Container from '../common/Container';
import LanguageSelector from '../common/LanguageSelector';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="bg-white shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">DesignCraft</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/work" className="nav-link">{t('nav.work')}</Link>
            <Link to="/services" className="nav-link">{t('nav.services')}</Link>
            <Link to="/about" className="nav-link">{t('nav.about')}</Link>
            <Link to="/contact" className="nav-link">{t('nav.contact')}</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Link 
              to="/contact"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              {t('nav.letsTalk')}
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}