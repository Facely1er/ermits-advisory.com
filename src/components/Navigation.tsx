import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './shared/Button';
import { 
  Sun, Moon, Menu, X, Globe, ChevronDown, 
  Home, BarChart2, Shield, RadarIcon, 
  Briefcase, Presentation, Mail
} from 'lucide-react';
import logoImg from '../assets/LOGO-ERMITS-ADVISORY.png';
import { cn } from '../utils/cn';
import type { Language } from '../types';

export const Navigation: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageDropdown = () => setIsLanguageOpen(!isLanguageOpen);
  
  const handleContactClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  // Language options with flags
  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  const navLinks = [
    { to: '/', label: t('navigation.home'), icon: <Home size={16} /> },
    { to: '/dashboard', label: t('navigation.dashboard'), icon: <BarChart2 size={16} /> },
    { to: '/steel', label: t('navigation.steel'), icon: <Shield size={16} /> },
    { to: '/risk-radar', label: t('navigation.riskRadar'), icon: <RadarIcon size={16} /> },
    { to: '/services', label: t('navigation.services'), icon: <Briefcase size={16} /> },
    { to: '/presentation', label: t('navigation.presentation'), icon: <Presentation size={16} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoImg} alt="ERMITS Advisory + STEEL" className="h-10" />
            <span className="ml-2 font-outfit font-semibold text-navy dark:text-white">
              <span className="block text-sm">ERMITS Advisory</span>
              <span className="text-xs tracking-wider">+ STEEL™</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Nav Links */}
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => cn(
                    'text-sm font-medium hover:text-navy dark:hover:text-white transition-colors nav-link flex items-center',
                    isActive 
                      ? 'text-navy-dark dark:text-white font-semibold border-b-2 border-navy dark:border-silver' 
                      : 'text-gray-600 dark:text-white/95'
                  )}
                >
                  <span className="mr-1.5">{link.icon}</span>
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button 
                  onClick={toggleLanguageDropdown}
                  className="flex items-center text-sm font-medium text-gray-600 dark:text-white/95 hover:text-navy dark:hover:text-white"
                >
                  <Globe size={16} className="mr-1" />
                  <span>{language.toUpperCase()}</span>
                  <ChevronDown size={14} className="ml-1" />
                </button>

                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-dark-surface ring-1 ring-black ring-opacity-5 focus:outline-none dropdown-menu"
                    >
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code);
                              setIsLanguageOpen(false);
                            }}
                            className={cn(
                              'block w-full text-left px-4 py-2 text-sm dropdown-item',
                              language === lang.code
                                ? 'bg-silver/20 text-navy dark:bg-navy/30 dark:text-white'
                                : 'text-gray-700 dark:text-white/95 hover:bg-silver/10 dark:hover:bg-navy/20'
                            )}
                            role="menuitem"
                          >
                            <span className="mr-2">{lang.flag}</span>
                            {lang.name}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-silver/20 hover:bg-silver/30 dark:bg-navy/40 dark:hover:bg-navy/50 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun size={16} className="text-white" />
                ) : (
                  <Moon size={16} className="text-navy" />
                )}
              </button>

              {/* Contact CTA */}
              <Button 
                size="sm" 
                variant="primary" 
                icon={<Mail size={16} />}
                onClick={handleContactClick}
              >
                {t('navigation.contact')}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-navy dark:text-white hover:bg-silver/20 dark:hover:bg-navy/20 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav dark:bg-black"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => cn(
                    'flex items-center px-3 py-2 rounded-md text-base font-medium',
                    isActive
                      ? 'bg-navy/10 text-navy dark:bg-silver/20 dark:text-white'
                      : 'text-gray-600 dark:text-white/95 hover:bg-navy/5 dark:hover:bg-silver/10'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.label}
                </NavLink>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center">
                  <Globe size={16} className="mr-2 text-navy dark:text-white" />
                  <div className="flex space-x-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={cn(
                          'px-2 py-1 text-sm rounded',
                          language === lang.code
                            ? 'bg-silver text-navy dark:bg-navy dark:text-white'
                            : 'text-gray-600 dark:text-white/95'
                        )}
                      >
                        {lang.flag}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-silver/20 hover:bg-silver/30 dark:bg-navy/40 dark:hover:bg-navy/50 transition-colors"
                    aria-label="Toggle theme"
                  >
                    {theme === 'dark' ? (
                      <Sun size={16} className="text-white" />
                    ) : (
                      <Moon size={16} className="text-navy" />
                    )}
                  </button>
                  <Button 
                    size="sm" 
                    variant="primary" 
                    className="ml-4" 
                    icon={<Mail size={16} />}
                    onClick={handleContactClick}
                  >
                    {t('navigation.contact')}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};