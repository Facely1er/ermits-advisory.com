import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/ermits-advisory.png';
import {
  Mail, Shield, Users, FileText, Scale, Briefcase, Cookie
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white border-t border-slate-700/50 dark:border-slate-800/50">
      <div className="container mx-auto px-4 pt-4 pb-2">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-3">
          {/* Logo and Branding */}
          <div className="flex items-start gap-2 sm:col-span-2 md:col-span-1">
            <img src={logoImg} alt="ERMITS Advisory" className="h-12 w-auto" />
            <div>
              <span className="font-outfit text-white">
                <span className="block text-sm font-bold">ERMITS</span>
                <span className="block text-sm font-normal">Advisory</span>
              </span>
              <p className="text-xs text-silver mt-1 leading-tight">
                Global Intelligence. Resilient Strategy.<br />
                Streamlined for Success.
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Services</h3>
            <ul className="space-y-1.5">
              <li>
                <Link to="/services" className="text-silver hover:text-white transition-colors duration-200 flex items-center text-xs group">
                  <Briefcase size={12} className="mr-1.5 group-hover:scale-110 transition-transform" />
                  Advisory Services
                </Link>
              </li>
              <li>
                <Link to="/method/steel" className="text-silver hover:text-white transition-colors duration-200 flex items-center text-xs group">
                  <Shield size={12} className="mr-1.5 group-hover:scale-110 transition-transform" />
                  STEEL™ Diagnostic
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-silver hover:text-white transition-colors duration-200 flex items-center text-xs group">
                  <Briefcase size={12} className="mr-1.5 group-hover:scale-110 transition-transform" />
                  vCISO Leadership
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-silver hover:text-white transition-colors duration-200 flex items-center text-xs group">
                  <Shield size={12} className="mr-1.5 group-hover:scale-110 transition-transform" />
                  Compliance Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Company</h3>
            <ul className="space-y-1.5">
              <li>
                <Link to="/about" className="text-silver hover:text-white transition-colors duration-200 flex items-center text-xs group">
                  <Users size={12} className="mr-1.5 group-hover:scale-110 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-silver hover:text-white transition-colors duration-200 flex items-center text-xs group">
                  <Mail size={12} className="mr-1.5 group-hover:scale-110 transition-transform" />
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/method/steel" className="text-silver hover:text-white transition-colors duration-200 flex items-center text-xs group">
                  <Shield size={12} className="mr-1.5 group-hover:scale-110 transition-transform" />
                  STEEL™ Framework
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Legal</h3>
            <ul className="space-y-1.5">
              <li>
                <Link to="/privacy" className="text-silver hover:text-white transition-colors duration-200 flex items-center text-xs group">
                  <Shield size={12} className="mr-1.5 group-hover:scale-110 transition-transform" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-silver hover:text-white transition-colors duration-200 flex items-center text-xs group">
                  <Scale size={12} className="mr-1.5 group-hover:scale-110 transition-transform" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-silver hover:text-white transition-colors duration-200 flex items-center text-xs group">
                  <Cookie size={12} className="mr-1.5 group-hover:scale-110 transition-transform" />
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/acceptable-use" className="text-silver hover:text-white transition-colors duration-200 flex items-center text-xs group">
                  <FileText size={12} className="mr-1.5 group-hover:scale-110 transition-transform" />
                  Acceptable Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer - More Compact */}
        <div className="pt-2 border-t border-white/10">
          <p className="text-xs text-silver text-center py-1">
            © {new Date().getFullYear()} ERMITS LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
