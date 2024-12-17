import React, { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import { cn } from '../../utils/styles';
import { useLanguage } from '../../contexts/LanguageContext';

interface LanguageSelectorProps {
  isScrolled?: boolean;
}

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'zh-TW', label: '繁體中文', flag: '🇹🇼' }
] as const;

export default function LanguageSelector({ isScrolled }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const selectedLang = languages.find(lang => lang.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-300',
          isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
        )}
      >
        <Globe className="h-5 w-5" />
        <span className="text-sm font-medium">{selectedLang.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black/5 z-50">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={cn(
                  'w-full flex items-center px-4 py-2 text-sm transition-colors',
                  language === lang.code 
                    ? 'bg-primary/5 text-primary font-medium' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                )}
              >
                <span className="mr-2 text-base">{lang.flag}</span>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}