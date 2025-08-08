'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('navigation');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center glow-blue">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Lumora Tech
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-4">
              <a href="#home" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                {t('home')}
              </a>
              <a href="#services" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                {t('services')}
              </a>
              <a href="#success-stories" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                {t('successStories')}
              </a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                {t('about')}
              </a>
            </div>
            <LanguageSwitcher />
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/login">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium glow-blue hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('clientPortal')}
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 pb-4 space-y-2"
          >
            <a href="#home" className="block text-gray-300 hover:text-blue-400 px-3 py-2 text-base font-medium">
              {t('home')}
            </a>
            <a href="#services" className="block text-gray-300 hover:text-blue-400 px-3 py-2 text-base font-medium">
              {t('services')}
            </a>
            <a href="#success-stories" className="block text-gray-300 hover:text-blue-400 px-3 py-2 text-base font-medium">
              {t('successStories')}
            </a>
            <a href="#about" className="block text-gray-300 hover:text-blue-400 px-3 py-2 text-base font-medium">
              {t('about')}
            </a>
            <Link href="/login" className="block w-full mt-4">
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium">
                {t('clientPortal')}
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
}