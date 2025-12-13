import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/ermits-advisory.png';
import {
  Mail, Shield, Users, FileText, Scale, Briefcase, Cookie
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white border-t border-slate-700/50 dark:border-slate-800/50">
      <div className="container mx-auto px-4 pt-6 pb-0">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-2">
          {/* Logo and Branding */}
          <div className="flex items-start gap-3">
            <img src={logoImg} alt="ERMITS Advisory" className="h-10 w-auto" />
            <div>
              <span className="font-outfit font-semibold text-white">
                <span className="block text-sm">ERMITS</span>
                <span className="block text-sm">Advisory</span>
              </span>
              <p className="text-sm text-silver mt-1">Global Intelligence. Resilient Strategy. Streamlined for Success.</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-silver hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center text-sm group">
                  <Briefcase size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                  Advisory Services
                </Link>
              </li>
              <li>
                <Link to="/method/steel" className="text-silver hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center text-sm group">
                  <Shield size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                  STEEL™ Diagnostic
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
        </div>

        {/* Bottom Footer - More Compact */}
        <div className="pt-1 border-t border-white/10">
          <p className="text-xs text-silver text-center">
            © {new Date().getFullYear()} ERMITS LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
