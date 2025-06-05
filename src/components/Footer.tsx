import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import logoImg from '../assets/LOGO-ERMITS-ADVISORY.png';
import { 
  Presentation, Search, Shield, UserCheck, 
  BarChart2, RadarIcon, LayoutDashboard, 
  Mail, Phone, MapPin, Lock, FileText, Cookie, Users, BookOpen
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-navy dark:bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <img src={logoImg} alt="ERMITS Advisory + STEEL" className="h-10" />
              <span className="ml-2 font-outfit font-semibold text-white">
                <span className="block text-sm">ERMITS Advisory</span>
                <span className="text-xs tracking-wider">+ STEEL™</span>
              </span>
            </Link>
            <p className="mt-4 text-silver whitespace-normal">{t('common.tagline')}</p>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.services.title')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services" className="text-silver hover:text-white transition-colors flex items-center">
                    <Presentation size={16} className="mr-2" />
                    {t('footer.services.boardBriefings')}
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-silver hover:text-white transition-colors flex items-center">
                    <Search size={16} className="mr-2" />
                    {t('footer.services.mAndA')}
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-silver hover:text-white transition-colors flex items-center">
                    <Shield size={16} className="mr-2" />
                    {t('footer.services.crisis')}
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-silver hover:text-white transition-colors flex items-center">
                    <UserCheck size={16} className="mr-2" />
                    {t('footer.services.vCISO')}
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.resources.title')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/steel" className="text-silver hover:text-white transition-colors flex items-center">
                    <Shield size={16} className="mr-2" />
                    {t('footer.resources.steel')}
                  </Link>
                </li>
                <li>
                  <Link to="/risk-radar" className="text-silver hover:text-white transition-colors flex items-center">
                    <RadarIcon size={16} className="mr-2" />
                    {t('footer.resources.riskRadar')}
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="text-silver hover:text-white transition-colors flex items-center">
                    <LayoutDashboard size={16} className="mr-2" />
                    {t('footer.resources.dashboard')}
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className="text-silver hover:text-white transition-colors flex items-center">
                    <BookOpen size={16} className="mr-2" />
                    {t('footer.resources.library')}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-silver hover:text-white transition-colors flex items-center">
                    <Users size={16} className="mr-2" />
                    {t('footer.resources.about')}
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h3>
              <ul className="space-y-2">
                <li className="text-silver flex items-center">
                  <Mail size={16} className="mr-2" />
                  {t('footer.contact.emailLabel')} <a href="mailto:advisory@ermits.com" className="ml-1 hover:text-white transition-colors">{t('services.contact.email')}</a>
                </li>
                <li className="text-silver flex items-center">
                  <Phone size={16} className="mr-2" />
                  {t('footer.contact.phoneLabel')} {t('services.contact.phone')}
                </li>
                <li className="text-silver flex items-center">
                  <MapPin size={16} className="mr-2" />
                  {t('footer.contact.headquartersLabel')} {t('services.contact.headquarters')}
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-silver mb-4 md:mb-0">
            {t('common.copyright')}
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-silver hover:text-white transition-colors flex items-center">
              <Lock size={14} className="mr-1.5" />
              {t('footer.policy.privacy')}
            </a>
            <a href="#" className="text-silver hover:text-white transition-colors flex items-center">
              <FileText size={14} className="mr-1.5" />
              {t('footer.policy.terms')}
            </a>
            <a href="#" className="text-silver hover:text-white transition-colors flex items-center">
              <Cookie size={14} className="mr-1.5" />
              {t('footer.policy.cookie')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};