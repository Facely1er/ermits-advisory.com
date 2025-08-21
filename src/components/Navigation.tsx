import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './shared/Button';
import {
  Sun, Moon, Menu, X, Globe, ChevronDown,
  Home, Briefcase, Mail, Users, ExternalLink, Lightbulb, Shield, Rocket, BookOpen
} from 'lucide-react';
import logoImg from '../assets/ermits-advisory.png';
import { cn } from '../utils/cn';
import type { Language } from '../types';

export const Navigation: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageDropdown = () => setIsLanguageOpen(!isLanguageOpen);
  const toggleInsightsDropdown = () => setIsInsightsOpen(!isInsightsOpen);

  const handleContactClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  const handleInsightsItemClick = () => {
    setIsInsightsOpen(false);
    setIsMenuOpen(false);
  };

  // Language options with flags (removed Spanish)
  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  const navLinks = [
    { to: '/', label: t('navigation.home'), icon: <Home size={16} /> },
    { to: '/about', label: t('navigation.about'), icon: <Users size={16} /> },
    { to: '/services', label: t('navigation.services'), icon: <Briefcase size={16} /> },
    { to: '/steel', label: t('navigation.steel'), icon: <Shield size={16} /> },
    { to: '/rapid', label: 'RAPID™', icon: <Rocket size={16} /> },
  ];

  const insightsLinks = [
    { to: '/risk-radar', label: t('navigation.riskRadar') },
    { to: '/dashboard', label: t('navigation.dashboard') },
    { to: '/presentation', label: t('navigation.presentation') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm h-16">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo - Made more compact */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={logoImg} alt="ERMITS Advisory" className="h-10" />
            <span className="ml-2 font-outfit font-semibold text-navy dark:text-white text-base">
              ERMITS Advisory
            </span>
          </Link>

          {/* Desktop Navigation - Centered layout with flexible spacing */}
          <div className="hidden md:flex items-center flex-grow justify-center gap-x-8 h-full">
            {/* Nav Links - Reduced spacing from space-x-6 to space-x-4 */}
            <div className="flex items-center space-x-4 h-full">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => cn(
                    'text-sm font-medium hover:text-navy dark:hover:text-white transition-colors nav-link flex items-center whitespace-nowrap h-full',
                    isActive
                      ? 'text-navy-dark dark:text-white font-semibold border-b-2 border-navy dark:border-silver'
                      : 'text-gray-600 dark:text-white/95'
                  )}
                >
                  <span className="mr-1.5">{link.icon}</span>
                  {link.label}
                </NavLink>
              ))}

              {/* Resources Internal Link */}
              <NavLink
                to="/resources"
                className={({ isActive }) => cn(
                  'text-sm font-medium hover:text-navy dark:hover:text-white transition-colors nav-link flex items-center whitespace-nowrap h-full',
                  isActive
                    ? 'text-navy-dark dark:text-white font-semibold border-b-2 border-navy dark:border-silver'
                    : 'text-gray-600 dark:text-white/95'
                )}
              >
                <span className="mr-1.5"><BookOpen size={16} /></span>
                {t('navigation.resources')}
              </NavLink>

              {/* Insights Dropdown */}
              <div className="relative h-full flex items-center">
                <button
                  onClick={toggleInsightsDropdown}
                  className="flex items-center text-sm font-medium text-gray-600 dark:text-white/95 hover:text-navy dark:hover:text-white transition-colors nav-link whitespace-nowrap h-full"
                >
                  <span className="mr-1.5"><Lightbulb size={16} /></span>
                  {t('navigation.insights')}
                  <ChevronDown size={14} className="ml-1" />
                </button>

                <AnimatePresence>
                  {isInsightsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-dark-surface ring-1 ring-black ring-opacity-5 focus:outline-none dropdown-menu top-full"
                    >
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {insightsLinks.map((link) => (
                          <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) => cn(
                              'block px-4 py-2 text-sm dropdown-item',
                              isActive
                                ? 'bg-silver/20 text-navy dark:bg-navy/30 dark:text-white'
                                : 'text-gray-700 dark:text-white/95 hover:bg-silver/10 dark:hover:bg-navy/20'
                            )}
                            role="menuitem"
                            onClick={handleInsightsItemClick}
                          >
                            {link.label}
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Controls - Removed ml-6, gap handled by parent */}
            <div className="flex items-center space-x-3 h-full">
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
            className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-800/50"
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

              {/* Mobile Resources Internal Link */}
              <NavLink
                to="/resources"
                className={({ isActive }) => cn(
                  'flex items-center px-3 py-2 rounded-md text-base font-medium',
                  isActive
                    ? 'bg-navy/10 text-navy dark:bg-silver/20 dark:text-white'
                    : 'text-gray-600 dark:text-white/95 hover:bg-navy/5 dark:hover:bg-silver/10'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-2"><BookOpen size={16} /></span>
                {t('navigation.resources')}
              </NavLink>

              {/* Mobile Insights Section */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  <Lightbulb size={16} className="mr-2" />
                  {t('navigation.insights')}
                </div>
                {insightsLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) => cn(
                      'flex items-center px-6 py-2 rounded-md text-sm font-medium',
                      isActive
                        ? 'bg-navy/10 text-navy dark:bg-silver/20 dark:text-white'
                        : 'text-gray-600 dark:text-white/95 hover:bg-navy/5 dark:hover:bg-silver/10'
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
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
