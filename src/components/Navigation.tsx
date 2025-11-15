import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './shared/Button';
import {
  Sun, Moon, Menu, X, ChevronDown,
  Home, Briefcase, Mail, Users, Lightbulb, Shield, Layers, DollarSign
} from 'lucide-react';
import logoImg from '../assets/ermits-advisory.png';
import { cn } from '../utils/cn';

export const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleInsightsDropdown = () => setIsInsightsOpen(!isInsightsOpen);

  const handleContactClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  const handleInsightsItemClick = () => {
    setIsInsightsOpen(false);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home', icon: <Home size={16} /> },
    { to: '/about', label: 'About', icon: <Users size={16} /> },
    { to: '/services', label: 'Services', icon: <Briefcase size={16} /> },
    { to: '/pricing', label: 'Pricing', icon: <DollarSign size={16} /> },
    { to: '/steel', label: 'STEEL™', icon: <Shield size={16} /> },
    { to: '/ecosystem', label: 'Ecosystem', icon: <Layers size={16} /> },
  ];

  const insightsLinks = [
    { to: '/risk-radar', label: 'Risk Radar' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/presentation', label: 'Presentation' },
    { to: '/steel/index.html', label: 'STEEL Assessment', external: true },
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

              {/* Insights Dropdown */}
              <div className="relative h-full flex items-center">
                <button
                  onClick={toggleInsightsDropdown}
                  className="flex items-center text-sm font-medium text-gray-600 dark:text-white/95 hover:text-navy dark:hover:text-white transition-colors nav-link whitespace-nowrap h-full"
                >
                  <span className="mr-1.5"><Lightbulb size={16} /></span>
                  Insights
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
                          link.external ? (
                            <a
                              key={link.to}
                              href={link.to}
                              className="block px-4 py-2 text-sm dropdown-item text-gray-700 dark:text-white/95 hover:bg-silver/10 dark:hover:bg-navy/20"
                              role="menuitem"
                              onClick={handleInsightsItemClick}
                            >
                              {link.label}
                            </a>
                          ) : (
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
                          )
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Controls - Removed language selector */}
            <div className="flex items-center space-x-3 h-full">
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
                Contact
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

              {/* Mobile Insights Section */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  <Lightbulb size={16} className="mr-2" />
                  Insights
                </div>
                {insightsLinks.map((link) => (
                  link.external ? (
                    <a
                      key={link.to}
                      href={link.to}
                      className="flex items-center px-6 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-white/95 hover:bg-navy/5 dark:hover:bg-silver/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
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
                  )
                ))}
              </div>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-end px-4">
                <div className="flex items-center space-x-3">
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
                    icon={<Mail size={16} />}
                    onClick={handleContactClick}
                  >
                    Contact
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
