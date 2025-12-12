import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/ermits-advisory.png';
import {
  Mail, Shield, Users, FileText, Scale, Briefcase, Layers, Cookie
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white border-t border-slate-700/50 dark:border-slate-800/50">
      <div className="container mx-auto px-4 pt-6 pb-0">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-2">
          {/* Company Info - Compact */}
          <div>
            <Link to="/" className="flex items-center mb-3">
              <img src={logoImg} alt="ERMITS Advisory" className="h-10" />
              <span className="ml-3 font-outfit font-semibold text-white">
                <span className="block text-sm">ERMITS</span>
                <span className="block text-sm">Advisory</span>
              </span>
            </Link>
            <p className="text-silver text-sm leading-relaxed mb-4">
              Global Intelligence. Resilient Strategy.
              <br />
              Streamlined for Success.
            </p>
            <div className="space-y-2">
              <Link to="/about" className="text-silver hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center text-sm group">
                <Users size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                About Us
              </Link>
              <Link to="/contact" className="text-silver hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center text-sm group">
                <Mail size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                Contact
              </Link>
            </div>
          </div>

          {/* Services & Solutions */}
          <div>
            <h3 className="text-base font-semibold mb-3">Services & Solutions</h3>
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
                  STEEL™ & Ecosystem
                </Link>
              </li>
              <li>
                <Link to="/toolkits" className="text-silver hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center text-sm group">
                  <Layers size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                  Toolkits & Resources
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
