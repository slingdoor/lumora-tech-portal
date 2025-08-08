'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
  { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('navigation');

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    setIsOpen(false);
    
    // Remove the current locale from the pathname
    const segments = pathname.split('/').filter(Boolean);
    const isLocaleInPath = segments[0] && ['en', 'zh-TW', 'zh-CN'].includes(segments[0]);
    
    let newPathname = pathname;
    if (isLocaleInPath) {
      // Replace the locale
      segments[0] = langCode;
      newPathname = '/' + segments.join('/');
    } else {
      // Add the locale
      newPathname = `/${langCode}${pathname}`;
    }

    // Only add locale prefix if it's not the default locale (en)
    if (langCode === 'en') {
      newPathname = pathname.replace(/^\/(zh-TW|zh-CN)/, '') || '/';
    }

    router.push(newPathname);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-500/10"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:block text-sm font-medium">{currentLanguage.name}</span>
        <span className="sm:hidden text-lg">{currentLanguage.flag}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-48 glass rounded-lg border border-blue-500/20 shadow-2xl z-50"
            >
              <div className="p-2">
                <div className="text-xs font-semibold text-gray-400 px-3 py-2 uppercase tracking-wider">
                  {t('language')}
                </div>
                {languages.map((language) => (
                  <motion.button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                      language.code === locale 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'text-gray-300 hover:text-white hover:bg-blue-500/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <span className="font-medium">{language.name}</span>
                    {language.code === locale && (
                      <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full" />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}