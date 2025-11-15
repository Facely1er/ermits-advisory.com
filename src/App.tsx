import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/shared/ProgressBar';
import { FloatingActionButton } from './components/shared/FloatingActionButton';
import { Analytics } from '@vercel/analytics/react';
import { ErrorBoundary } from './components/shared/ErrorBoundary';

// Lazy load all page components for better performance
const LandingPage = React.lazy(() => import('./pages/LandingPage').then(m => ({ default: m.LandingPage })));
const Dashboard = React.lazy(() => import('./pages/Dashboard').then(m => ({ default: m.Dashboard })));
const STEELVisualization = React.lazy(() => import('./pages/STEELVisualization').then(m => ({ default: m.STEELVisualization })));
const SteelPremium = React.lazy(() => import('./pages/SteelPremium').then(m => ({ default: m.SteelPremium })));
const VcisoKit = React.lazy(() => import('./pages/VcisoKit').then(m => ({ default: m.VcisoKit })));
const ComplianceAdvisory = React.lazy(() => import('./pages/ComplianceAdvisory').then(m => ({ default: m.ComplianceAdvisory })));
const ComplianceToolkit = React.lazy(() => import('./pages/ComplianceToolkit').then(m => ({ default: m.ComplianceToolkit })));
const IncidentResponseToolkit = React.lazy(() => import('./pages/IncidentResponseToolkit').then(m => ({ default: m.IncidentResponseToolkit })));
const VendorRiskToolkit = React.lazy(() => import('./pages/VendorRiskToolkit').then(m => ({ default: m.VendorRiskToolkit })));
const ComplianceGapAnalysisPremium = React.lazy(() => import('./pages/ComplianceGapAnalysisPremium').then(m => ({ default: m.ComplianceGapAnalysisPremium })));
const VendorRiskScorerPremium = React.lazy(() => import('./pages/VendorRiskScorerPremium').then(m => ({ default: m.VendorRiskScorerPremium })));
const ToolkitsPremiumPricing = React.lazy(() => import('./pages/ToolkitsPremiumPricing').then(m => ({ default: m.ToolkitsPremiumPricing })));
const ToolkitsOverview = React.lazy(() => import('./pages/ToolkitsOverview').then(m => ({ default: m.ToolkitsOverview })));
const DashboardTemplate = React.lazy(() => import('./pages/DashboardTemplate').then(m => ({ default: m.DashboardTemplate })));
const ImplementationGuidePage = React.lazy(() => import('./pages/ImplementationGuidePage').then(m => ({ default: m.ImplementationGuidePage })));
const RiskRadar = React.lazy(() => import('./pages/RiskRadar').then(m => ({ default: m.RiskRadar })));
const ServiceOffering = React.lazy(() => import('./pages/ServiceOffering').then(m => ({ default: m.ServiceOffering })));
const BoardPresentation = React.lazy(() => import('./pages/BoardPresentation').then(m => ({ default: m.BoardPresentation })));
const ContactPage = React.lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const AboutPage = React.lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const EcosystemPage = React.lazy(() => import('./pages/EcosystemPage').then(m => ({ default: m.EcosystemPage })));
const PricingPage = React.lazy(() => import('./pages/PricingPage').then(m => ({ default: m.PricingPage })));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = React.lazy(() => import('./pages/TermsOfServicePage').then(m => ({ default: m.TermsOfServicePage })));
const CookiePolicyPage = React.lazy(() => import('./pages/CookiePolicyPage').then(m => ({ default: m.CookiePolicyPage })));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-silver-light dark:bg-dark-bg">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy dark:border-golden"></div>
      <p className="text-navy dark:text-white font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <ScrollProgressBar />
            <Navigation />
            
            <main className="flex-grow pt-16" role="main" aria-label="Main content">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/steel" element={<STEELVisualization />} />
                  <Route path="/steel/premium" element={<SteelPremium />} />
                  <Route path="/steel/implementation-guide" element={<ImplementationGuidePage />} />
                  <Route path="/vciso-kit" element={<VcisoKit />} />
                  <Route path="/compliance" element={<ComplianceAdvisory />} />
                  <Route path="/toolkits" element={<ToolkitsOverview />} />
                  <Route path="/compliance-toolkit" element={<ComplianceToolkit />} />
                  <Route path="/incident-response-toolkit" element={<IncidentResponseToolkit />} />
                  <Route path="/vendor-risk-toolkit" element={<VendorRiskToolkit />} />
                  <Route path="/compliance-gap-analysis-premium" element={<ComplianceGapAnalysisPremium />} />
                  <Route path="/vendor-risk-scorer-premium" element={<VendorRiskScorerPremium />} />
                  <Route path="/toolkits-premium" element={<ToolkitsPremiumPricing />} />
                  <Route path="/toolkits-interactive" element={<ToolkitsPremiumPricing />} />
                  <Route path="/dashboard-template" element={<DashboardTemplate />} />
                  <Route path="/risk-radar" element={<RiskRadar />} />
                  <Route path="/services" element={<ServiceOffering />} />
                  <Route path="/presentation" element={<BoardPresentation />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/ecosystem" element={<EcosystemPage />} />
                  <Route path="/cybercaution" element={<EcosystemPage />} />
                  <Route path="/cybercorrect" element={<EcosystemPage />} />
                  <Route path="/cybersoluce" element={<EcosystemPage />} />
                  <Route path="/vendorsoluce" element={<EcosystemPage />} />
                  <Route path="/technosoluce" element={<EcosystemPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/privacy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms" element={<TermsOfServicePage />} />
                  <Route path="/cookies" element={<CookiePolicyPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
            <FloatingActionButton />
            <Analytics />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;