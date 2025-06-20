import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import logoImg from '../assets/ermits-advisory.png';
import { 
  Mail, Phone, MapPin, Shield, BarChart2, Users, FileText
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-navy dark:bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Company Info - Compact */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-3">
              <img src={logoImg} alt="ERMITS Advisory + STEEL" className="h-10" />
              <span className="ml-3 font-outfit font-semibold text-white">
                <span className="block text-sm">ERMITS Advisory</span>
                <span className="text-xs tracking-wider">+ STEEL™</span>
              </span>
            </Link>
            <p className="text-silver text-sm leading-relaxed">{t('common.tagline')}</p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-3">{t('footer.services.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-silver hover:text-white transition-colors flex items-center text-sm">
                  <Shield size={14} className="mr-2" />
                  {t('footer.services.advisory')}
                </Link>
              </li>
              <li>
                <Link to="/steel" className="text-silver hover:text-white transition-colors flex items-center text-sm">
                  <BarChart2 size={14} className="mr-2" />
                  {t('footer.services.steel')}
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-silver hover:text-white transition-colors flex items-center text-sm">
                  <BarChart2 size={14} className="mr-2" />
                  {t('footer.services.dashboard')}
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-silver hover:text-white transition-colors flex items-center text-sm">
                  <FileText size={14} className="mr-2" />
                  {t('footer.services.resources')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-base font-semibold mb-3">{t('footer.company.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-silver hover:text-white transition-colors flex items-center text-sm">
                  <Users size={14} className="mr-2" />
                  {t('footer.company.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-silver hover:text-white transition-colors flex items-center text-sm">
                  <Mail size={14} className="mr-2" />
                  {t('footer.company.contact')}
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
              <div className="flex items-center text-silver text-sm">
                <Phone size={14} className="mr-2 flex-shrink-0" />
                <span>+1 (888) 618-6160</span>
              </div>
              <div className="flex items-center text-silver text-sm">
                <MapPin size={14} className="mr-2 flex-shrink-0" />
                <span>Gaithersburg, MD</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer - More Compact */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-silver mb-3 sm:mb-0">
            {t('common.copyright')}
          </p>
          <div className="flex space-x-4 text-xs">
            <Link to="/privacy" className="text-silver hover:text-white transition-colors">
              {t('footer.legal.privacy')}
            </Link>
            <Link to="/terms" className="text-silver hover:text-white transition-colors">
              {t('footer.legal.terms')}
            </Link>
            <Link to="/cookies" className="text-silver hover:text-white transition-colors">
              {t('footer.legal.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};