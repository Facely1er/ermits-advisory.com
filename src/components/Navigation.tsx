import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './shared/Button';
import {
  Sun, Moon, Menu, X,
  Briefcase, Mail, Users, Layers, Focus, ChevronDown, BookOpen
} from 'lucide-react';
import logoImg from '../assets/ermits-advisory.png';
import { cn } from '../utils/cn';

export const Navigation: React.FC = () => {
  const { theme, toggleTheme, focusMode, toggleFocusMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleContactClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };


  const navLinks = [
    { 
      to: '/ermits-advisory', 
      label: 'Advisory', 
      icon: <Briefcase size={16} />,
      submenu: [
        { to: '/ermits-advisory', label: 'Overview' },
        { to: '/services', label: 'Services' },
        { to: '/vciso-kit', label: 'vCISO Services' },
      ]
    },
    { 
      to: '/method/steel', 
      label: 'Method: STEEL™', 
      icon: <BookOpen size={16} />,
      submenu: [
        { to: '/method/steel', label: 'Overview' },
        { to: '/steel', label: 'Assessment' },
        { to: '/steel/radar', label: 'STEEL™ Radar', premium: true },
        { to: '/steel/premium', label: 'Premium Features' },
        { to: '/steel/enterprise', label: 'Enterprise' },
      ]
    },
    { to: '/ecosystem', label: 'Ecosystem', icon: <Layers size={16} /> },
    { to: '/about', label: 'About', icon: <Users size={16} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm h-16 luxury-transition">
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
          <div className="hidden md:flex items-center flex-grow justify-center gap-x-6 h-full">
            {/* Nav Links */}
            <div className="flex items-center space-x-6 h-full">
              {navLinks.map((link) => (
                <div
                  key={link.to}
                  className="relative h-full"
                  onMouseEnter={() => link.submenu && setActiveDropdown(link.to)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => cn(
                      'text-sm font-medium hover:text-navy dark:hover:text-white transition-all duration-300 nav-link flex items-center whitespace-nowrap h-full relative',
                      isActive
                        ? 'text-navy-dark dark:text-white font-semibold border-b-2 border-navy dark:border-silver'
                        : 'text-gray-600 dark:text-white/95 hover:border-b-2 hover:border-navy/30 dark:hover:border-silver/30'
                    )}
                  >
                    <span className="mr-1.5">{link.icon}</span>
                    {link.label}
                    {link.submenu && <ChevronDown size={14} className="ml-1" />}
                  </NavLink>
                  
                  {/* Dropdown Menu */}
                  {link.submenu && activeDropdown === link.to && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50"
                    >
                      {link.submenu.map((item) => (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          className={({ isActive }) => cn(
                            'flex items-center justify-between px-4 py-2 text-sm hover:bg-navy/5 dark:hover:bg-silver/10 transition-colors',
                            isActive && 'bg-navy/10 dark:bg-silver/20 text-navy dark:text-white font-medium',
                            !isActive && 'text-gray-700 dark:text-gray-300'
                          )}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span>{item.label}</span>
                          {item.premium && (
                            <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full">Premium</span>
                          )}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Controls - Removed language selector */}
            <div className="flex items-center space-x-3 h-full">
              {/* Focus Mode Toggle */}
              <button
                onClick={toggleFocusMode}
                className={cn(
                  "p-2 rounded-full transition-colors",
                  focusMode
                    ? "bg-navy/20 hover:bg-navy/30 dark:bg-silver/20 dark:hover:bg-silver/30"
                    : "bg-silver/20 hover:bg-silver/30 dark:bg-navy/40 dark:hover:bg-navy/50"
                )}
                aria-label={focusMode ? "Disable focus mode" : "Enable focus mode"}
                title={focusMode ? "Focus indicators enabled" : "Focus indicators disabled"}
              >
                <Focus 
                  size={16} 
                  className={focusMode ? "text-navy dark:text-silver" : "text-gray-500 dark:text-gray-400"} 
                />
              </button>

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
                <div key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => cn(
                      'flex items-center justify-between px-3 py-2 rounded-md text-base font-medium',
                      isActive
                        ? 'bg-navy/10 text-navy dark:bg-silver/20 dark:text-white'
                        : 'text-gray-600 dark:text-white/95 hover:bg-navy/5 dark:hover:bg-silver/10'
                    )}
                    onClick={() => {
                      if (!link.submenu) setIsMenuOpen(false);
                    }}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{link.icon}</span>
                      {link.label}
                    </div>
                    {link.submenu && <ChevronDown size={16} />}
                  </NavLink>
                  {link.submenu && (
                    <div className="pl-8 space-y-1">
                      {link.submenu.map((item) => (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          className={({ isActive }) => cn(
                            'flex items-center justify-between px-3 py-2 rounded-md text-sm',
                            isActive
                              ? 'bg-navy/10 text-navy dark:bg-silver/20 dark:text-white'
                              : 'text-gray-600 dark:text-gray-300 hover:bg-navy/5 dark:hover:bg-silver/10'
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span>{item.label}</span>
                          {item.premium && (
                            <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full">Premium</span>
                          )}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-end px-4">
                <div className="flex items-center space-x-3">
                  {/* Focus Mode Toggle */}
                  <button
                    onClick={toggleFocusMode}
                    className={cn(
                      "p-2 rounded-full transition-colors",
                      focusMode
                        ? "bg-navy/20 hover:bg-navy/30 dark:bg-silver/20 dark:hover:bg-silver/30"
                        : "bg-silver/20 hover:bg-silver/30 dark:bg-navy/40 dark:hover:bg-navy/50"
                    )}
                    aria-label={focusMode ? "Disable focus mode" : "Enable focus mode"}
                    title={focusMode ? "Focus indicators enabled" : "Focus indicators disabled"}
                  >
                    <Focus 
                      size={16} 
                      className={focusMode ? "text-navy dark:text-silver" : "text-gray-500 dark:text-gray-400"} 
                    />
                  </button>
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
