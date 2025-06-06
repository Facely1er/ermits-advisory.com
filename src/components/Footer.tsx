import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import logoImg from '../assets/LOGO-ERMITS-ADVISORY.png';
import { 
  Mail, Phone, MapPin, Shield, BarChart2, Users, FileText
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-navy dark:bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img src={logoImg} alt="ERMITS Advisory + STEEL" className="h-10" />
              <span className="ml-2 font-outfit font-semibold text-white">
                <span className="block text-sm">ERMITS Advisory</span>
                <span className="text-xs tracking-wider">+ STEEL™</span>
              </span>
            </Link>
            <p className="text-silver mb-6 leading-relaxed">{t('common.tagline')}</p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-silver">
                <Mail size={16} className="mr-3 flex-shrink-0" />
                <a href="mailto:advisory@ermits.com" className="hover:text-white transition-colors">
                  advisory@ermits.com
                </a>
              </div>
              <div className="flex items-center text-silver">
                <Phone size={16} className="mr-3 flex-shrink-0" />
                <span>+1 (888) 618-6160</span>
              </div>
              <div className="flex items-center text-silver">
                <MapPin size={16} className="mr-3 flex-shrink-0" />
                <span>Gaithersburg, MD, USA</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.services.title')}</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/services" className="text-silver hover:text-white transition-colors flex items-center">
                    <Shield size={16} className="mr-2" />
                    {t('footer.services.advisory')}
                  </Link>
                </li>
                <li>
                  <Link to="/steel" className="text-silver hover:text-white transition-colors flex items-center">
                    <BarChart2 size={16} className="mr-2" />
                    {t('footer.services.steel')}
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="text-silver hover:text-white transition-colors flex items-center">
                    <BarChart2 size={16} className="mr-2" />
                    {t('footer.services.dashboard')}
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className="text-silver hover:text-white transition-colors flex items-center">
                    <FileText size={16} className="mr-2" />
                    {t('footer.services.resources')}
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.company.title')}</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-silver hover:text-white transition-colors flex items-center">
                    <Users size={16} className="mr-2" />
                    {t('footer.company.about')}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-silver hover:text-white transition-colors flex items-center">
                    <Mail size={16} className="mr-2" />
                    {t('footer.company.contact')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-silver mb-4 md:mb-0">
            {t('common.copyright')}
          </p>
          <div className="flex space-x-6 text-sm">
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