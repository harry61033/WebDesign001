import React, { useState, useEffect } from 'react';
import { Menu, X, Palette } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSelector from '../common/LanguageSelector';
import { cn } from '../../utils/styles';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  // 判斷是否在Work頁面
  const isWorkPage = location.pathname === '/work';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/work', label: t('nav.work') },
    { path: '/services', label: t('nav.services') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') }
  ];

  const getTextColor = () => {
    if (isWorkPage) return 'text-gray-900';
    if (isScrolled) return 'text-gray-700';
    return 'text-white';
  };

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled || isWorkPage ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Palette className={cn(
              'h-8 w-8 transition-colors',
              isWorkPage || isScrolled ? 'text-primary' : 'text-white'
            )} />
            <span className={cn(
              'text-xl font-bold transition-colors',
              isWorkPage || isScrolled ? 'text-primary' : 'text-white'
            )}>
              DesignCraft
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  'nav-link transition-colors duration-300 relative',
                  getTextColor(),
                  location.pathname === path && 'text-primary font-semibold',
                  'hover:text-primary',
                  'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100',
                  location.pathname === path && 'after:scale-x-100'
                )}
              >
                {label}
              </Link>
            ))}
            <LanguageSelector isScrolled={isScrolled || isWorkPage} />
            <Link 
              to="/contact" 
              className={cn(
                'px-6 py-2.5 rounded-lg font-medium transition-all duration-300',
                'hover:shadow-lg transform hover:-translate-y-0.5',
                isWorkPage || isScrolled 
                  ? 'bg-primary text-white hover:bg-blue-800' 
                  : 'bg-white text-primary hover:bg-gray-100'
              )}
            >
              {t('nav.letsTalk')}
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector isScrolled={isScrolled || isWorkPage} />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'p-2 rounded-lg transition-colors',
                isWorkPage || isScrolled 
                  ? 'hover:bg-gray-100 text-gray-700' 
                  : 'hover:bg-white/10 text-white'
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg border-t">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                  location.pathname === path
                    ? 'text-primary bg-primary/5'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                )}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="block w-full text-center bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-blue-800 transition-colors mt-4"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.letsTalk')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}