import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './shared/Button';
import {
  Sun, Moon, Menu, X,
  Home, Briefcase, Mail, Users, Lightbulb, Shield, Layers, DollarSign, Focus
} from 'lucide-react';
import logoImg from '../assets/ermits-advisory.png';
import { cn } from '../utils/cn';

export const Navigation: React.FC = () => {
  const { theme, toggleTheme, focusMode, toggleFocusMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleContactClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home', icon: <Home size={16} /> },
    { to: '/about', label: 'About', icon: <Users size={16} /> },
    { to: '/services', label: 'Services', icon: <Briefcase size={16} /> },
    { to: '/pricing', label: 'Pricing', icon: <DollarSign size={16} /> },
    { to: '/steel', label: 'STEEL™', icon: <Shield size={16} /> },
    { to: '/ecosystem', label: 'Ecosystem', icon: <Layers size={16} /> },
    { to: '/dashboard', label: 'Dashboard', icon: <Lightbulb size={16} /> },
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
          <div className="hidden md:flex items-center flex-grow justify-center gap-x-8 h-full">
            {/* Nav Links - Reduced spacing from space-x-6 to space-x-4 */}
            <div className="flex items-center space-x-4 h-full">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
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
                </NavLink>
              ))}
              
              {/* Additional links as direct nav items */}
              <NavLink
                to="/risk-radar"
                className={({ isActive }) => cn(
                  'text-sm font-medium hover:text-navy dark:hover:text-white transition-colors nav-link flex items-center whitespace-nowrap h-full',
                  isActive
                    ? 'text-navy-dark dark:text-white font-semibold border-b-2 border-navy dark:border-silver'
                    : 'text-gray-600 dark:text-white/95'
                )}
              >
                <span className="mr-1.5"><Lightbulb size={16} /></span>
                Risk Radar
              </NavLink>
              <NavLink
                to="/presentation"
                className={({ isActive }) => cn(
                  'text-sm font-medium hover:text-navy dark:hover:text-white transition-colors nav-link flex items-center whitespace-nowrap h-full',
                  isActive
                    ? 'text-navy-dark dark:text-white font-semibold border-b-2 border-navy dark:border-silver'
                    : 'text-gray-600 dark:text-white/95'
                )}
              >
                <span className="mr-1.5"><Lightbulb size={16} /></span>
                Presentation
              </NavLink>
              <a
                href="/steel/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 dark:text-white/95 hover:text-navy dark:hover:text-white transition-colors nav-link flex items-center whitespace-nowrap h-full"
              >
                <span className="mr-1.5"><Lightbulb size={16} /></span>
                STEEL Assessment
              </a>
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
              
              {/* Additional mobile links */}
              <NavLink
                to="/risk-radar"
                className={({ isActive }) => cn(
                  'flex items-center px-3 py-2 rounded-md text-base font-medium',
                  isActive
                    ? 'bg-navy/10 text-navy dark:bg-silver/20 dark:text-white'
                    : 'text-gray-600 dark:text-white/95 hover:bg-navy/5 dark:hover:bg-silver/10'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-2"><Lightbulb size={16} /></span>
                Risk Radar
              </NavLink>
              <NavLink
                to="/presentation"
                className={({ isActive }) => cn(
                  'flex items-center px-3 py-2 rounded-md text-base font-medium',
                  isActive
                    ? 'bg-navy/10 text-navy dark:bg-silver/20 dark:text-white'
                    : 'text-gray-600 dark:text-white/95 hover:bg-navy/5 dark:hover:bg-silver/10'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-2"><Lightbulb size={16} /></span>
                Presentation
              </NavLink>
              <a
                href="/steel/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-white/95 hover:bg-navy/5 dark:hover:bg-silver/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-2"><Lightbulb size={16} /></span>
                STEEL Assessment
              </a>
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
