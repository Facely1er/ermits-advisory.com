import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { STEELVisualization } from './pages/STEELVisualization';
import { RiskRadar } from './pages/RiskRadar';
import { ServiceOffering } from './pages/ServiceOffering';
import { BoardPresentation } from './pages/BoardPresentation';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { TeamPage } from './pages/TeamPage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/steel" element={<STEELVisualization />} />
                <Route path="/risk-radar" element={<RiskRadar />} />
                <Route path="/services" element={<ServiceOffering />} />
                <Route path="/presentation" element={<BoardPresentation />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/resources/:id" element={<ResourceDetailPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />
                <Route path="/cookies" element={<CookiePolicyPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;