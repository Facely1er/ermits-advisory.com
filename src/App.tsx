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
const SteelRecommendationsPage = React.lazy(() => import('./pages/SteelRecommendationsPage').then(m => ({ default: m.SteelRecommendationsPage })));
const SteelEnterprisePricing = React.lazy(() => import('./pages/SteelEnterprisePricing').then(m => ({ default: m.SteelEnterprisePricing })));
const ProfessionalSteelAssessment = React.lazy(() => import('./pages/ProfessionalSteelAssessment').then(m => ({ default: m.ProfessionalSteelAssessment })));
const STEELVisualization = React.lazy(() => import('./pages/STEELVisualization').then(m => ({ default: m.STEELVisualization })));
const SteelMethodPage = React.lazy(() => import('./pages/SteelMethodPage').then(m => ({ default: m.SteelMethodPage })));
const SteelPremium = React.lazy(() => import('./pages/SteelPremium').then(m => ({ default: m.SteelPremium })));
const VcisoKit = React.lazy(() => 
  import('./pages/VcisoKit')
    .then(m => ({ default: m.VcisoKit }))
    .catch(error => {
      console.error('Failed to load VcisoKit:', error);
      // Return a fallback component
      return { 
        default: () => (
          <div className="min-h-screen flex items-center justify-center bg-silver-light dark:bg-dark-bg">
            <div className="text-center p-8">
              <h1 className="text-2xl font-bold mb-4 dark:text-white">Page Load Error</h1>
              <p className="text-gray-600 dark:text-gray-200 mb-4">
                Unable to load the vCISO Kit page. Please try refreshing the page.
              </p>
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-navy text-white rounded hover:bg-navy-dark"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      };
    })
);
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
const ExternalRedirect = React.lazy(() => import('./components/shared/ExternalRedirect').then(m => ({ default: m.ExternalRedirect })));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = React.lazy(() => import('./pages/TermsOfServicePage').then(m => ({ default: m.TermsOfServicePage })));
const CookiePolicyPage = React.lazy(() => import('./pages/CookiePolicyPage').then(m => ({ default: m.CookiePolicyPage })));
const AcceptableUsePolicyPage = React.lazy(() => import('./pages/AcceptableUsePolicyPage').then(m => ({ default: m.AcceptableUsePolicyPage })));
const PurchaseSuccess = React.lazy(() => import('./pages/PurchaseSuccess').then(m => ({ default: m.PurchaseSuccess })));
const SteelRadar = React.lazy(() => import('./steel-radar/pages/SteelRadar').then(m => ({ default: m.SteelRadar })));

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
                  <Route path="/ermits-advisory" element={<LandingPage />} />
                  <Route path="/method/steel" element={<SteelMethodPage />} />
                  <Route path="/ermits-method/steel" element={<SteelMethodPage />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/dashboard/steel-results" element={<SteelRecommendationsPage />} />
                  <Route path="/dashboard/recommendations" element={<SteelRecommendationsPage />} />
                  <Route path="/steel" element={<STEELVisualization />} />
                  <Route path="/steel/premium" element={<SteelPremium />} />
                  <Route path="/steel/enterprise" element={<SteelEnterprisePricing />} />
                  <Route path="/steel/professional" element={<ProfessionalSteelAssessment />} />
                  <Route path="/steel/implementation-guide" element={<ImplementationGuidePage />} />
                  <Route path="/steel/radar" element={<SteelRadar />} />
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
                  <Route path="/ermits-ecosystem" element={<EcosystemPage />} />
                  <Route path="/cybercaution" element={<ExternalRedirect to="https://cybercaution.com" />} />
                  <Route path="/cybercorrect" element={<ExternalRedirect to="https://cybercorrect.com" />} />
                  <Route path="/cybersoluce" element={<EcosystemPage />} />
                  <Route path="/vendorsoluce" element={<ExternalRedirect to="https://vendorsoluce.com" />} />
                  <Route path="/technosoluce" element={<ExternalRedirect to="https://technosoluce.com" />} />
                  <Route path="/cybercertitude" element={<ExternalRedirect to="https://cybercertitude.com" />} />
                  <Route path="/socialcaution" element={<ExternalRedirect to="https://socialcaution.com" />} />
                  <Route path="/privacy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms" element={<TermsOfServicePage />} />
                  <Route path="/cookies" element={<CookiePolicyPage />} />
                  <Route path="/acceptable-use" element={<AcceptableUsePolicyPage />} />
                  <Route path="/purchase-success" element={<PurchaseSuccess />} />
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