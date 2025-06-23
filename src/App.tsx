import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/shared/ProgressBar';
import { FloatingActionButton } from './components/shared/FloatingActionButton';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { STEELVisualization } from './pages/STEELVisualization';
import { ImplementationGuidePage } from './pages/ImplementationGuidePage';
import { RiskRadar } from './pages/RiskRadar';
import { ServiceOffering } from './pages/ServiceOffering';
import { BoardPresentation } from './pages/BoardPresentation';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { RAPIDPage } from './pages/RAPIDPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <ScrollProgressBar />
            <Navigation />
            
            <main className="flex-grow pt-24">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/steel" element={<STEELVisualization />} />
                <Route path="/steel/implementation-guide" element={<ImplementationGuidePage />} />
                <Route path="/rapid" element={<RAPIDPage />} />
                <Route path="/risk-radar" element={<RiskRadar />} />
                <Route path="/services" element={<ServiceOffering />} />
                <Route path="/presentation" element={<BoardPresentation />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />
                <Route path="/cookies" element={<CookiePolicyPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            
            <Footer />
            <FloatingActionButton />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;