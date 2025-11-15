import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/ermits-advisory.png';
import {
  Mail, Shield, BarChart2, Users, FileText, Scale, Cookie
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white border-t border-slate-700/50 dark:border-slate-800/50">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          {/* Company Info - Compact */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-3">
              <img src={logoImg} alt="ERMITS Advisory + STEEL" className="h-10" />
              <span className="ml-3 font-outfit font-semibold text-white">
                <span className="block text-sm">ERMITS Advisory</span>
                <span className="text-xs tracking-wider">+ STEEL™</span>
              </span>
            </Link>
            <p className="text-silver text-sm leading-relaxed">Global Intelligence. Resilient Strategy. Streamlined for Success.</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-silver hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center text-sm group">
                  <Shield size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                  Strategic Advisory
                </Link>
              </li>
              <li>
                <Link to="/steel" className="text-silver hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center text-sm group">
                  <BarChart2 size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                  STEEL™ Framework
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-silver hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center text-sm group">
                  <BarChart2 size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                  Executive Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-silver hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center text-sm group">
                  <Users size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-silver hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center text-sm group">
                  <Mail size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-base font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-silver hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center text-sm group">
                  <Shield size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-silver hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center text-sm group">
                  <Scale size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-silver hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center text-sm group">
                  <Cookie size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/acceptable-use" className="text-silver hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center text-sm group">
                  <FileText size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                  Acceptable Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Compact */}
          <div>
            <h3 className="text-base font-semibold mb-3">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-silver text-sm">
                <Mail size={14} className="mr-2 flex-shrink-0" />
                <a href="mailto:advisory@ermits.com" className="hover:text-white transition-colors">
                  advisory@ermits.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer - More Compact */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-silver mb-3 sm:mb-0">
            © {new Date().getFullYear()} ERMITS LLC. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
            <Link to="/privacy" className="text-silver hover:text-white transition-all duration-300 hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-silver hover:text-white transition-all duration-300 hover:underline">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-silver hover:text-white transition-all duration-300 hover:underline">
              Cookie Policy
            </Link>
            <Link to="/acceptable-use" className="text-silver hover:text-white transition-all duration-300 hover:underline">
              Acceptable Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
