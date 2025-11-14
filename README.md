# ERMITS Advisory

**Global Intelligence. Resilient Strategy. Streamlined for Success.**

A comprehensive risk management platform built with React, TypeScript, and modern web technologies. ERMITS Advisory provides sophisticated risk assessment tools using the STEEL framework.

## 🚀 Features

### Core Functionality
- **STEEL Framework**: Comprehensive risk assessment across Social, Technological, Economic, Environmental, and Legal dimensions
- **Risk Radar**: Real-time threat monitoring and visualization
- **Interactive Dashboard**: Executive-level insights and metrics
- **Board Presentations**: Professional cybersecurity briefings

### Technical Features
- ⚡ **Performance Optimized**: Code splitting, lazy loading, and optimized bundles
- 🛡️ **Security First**: Comprehensive security headers and vulnerability management
- 🌐 **SEO Optimized**: Complete meta tags, structured data, and sitemap
- 📱 **Progressive Web App**: Offline capabilities and mobile-first design
- 🌙 **Dark Mode**: Full dark/light theme support
- 🌍 **Internationalization**: Multi-language support (EN/FR)
- ♿ **Accessible**: WCAG compliant design patterns
- 🔄 **Error Handling**: Comprehensive error boundaries and recovery

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **Chart.js** - Data visualization
- **Lucide React** - Beautiful icons

### Development & Build
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **Vercel Analytics** - Performance monitoring

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/your-org/ermits-advisory.git
cd ermits-advisory

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🏗️ Project Structure

```
ermits-advisory/
├── public/                 # Static assets
│   ├── manifest.json      # PWA manifest
│   ├── sitemap.xml        # SEO sitemap
│   └── robots.txt         # Search engine directives
├── src/
│   ├── assets/            # Images, icons, fonts
│   ├── components/        # React components
│   │   ├── shared/        # Reusable components
│   │   └── interactive/   # Interactive visualizations
│   ├── contexts/          # React contexts (theme, language)
│   ├── data/              # Mock data and constants
│   ├── locales/           # Internationalization files
│   ├── pages/             # Route components
│   ├── services/          # API services and utilities
│   ├── styles/            # Global styles
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
├── tailwind.config.js     # Tailwind configuration
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── vercel.json            # Vercel deployment config
```

## 🎨 Design System

### Color Palette
- **Navy**: `#004B87` - Primary brand color
- **Silver**: `#C9E6FF` - Secondary color
- **Golden**: `#F5A623` - Accent color
- **Dark Theme**: Optimized for dark mode viewing

### Typography
- **Primary**: Inter - Modern, readable sans-serif
- **Secondary**: Outfit - Display font for headings

### Components
- Consistent design system with reusable components
- Responsive breakpoints for all screen sizes
- Accessible color contrasts and focus states

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Application
VITE_APP_NAME=ERMITS Advisory
VITE_APP_URL=https://ermits-advisory.com

# Analytics (optional)
VITE_VERCEL_ANALYTICS_ID=your_analytics_id

# API Endpoints (when implemented)
VITE_API_BASE_URL=https://api.ermits-advisory.com
```

### Deployment
The application is configured for deployment on Vercel:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## 📊 Performance

### Bundle Analysis
- **Main Bundle**: ~116KB (optimized with code splitting)
- **Vendor Chunk**: ~164KB (React, Router, etc.)
- **UI Chunk**: ~142KB (Framer Motion, Lucide)
- **Charts Chunk**: ~167KB (Chart.js)

### Performance Optimizations
- Lazy loading for all route components
- Image optimization and compression
- CSS code splitting
- Tree shaking for unused code
- Gzip compression enabled

## 🛡️ Security

### Implemented Security Measures
- Content Security Policy headers
- XSS protection headers
- CSRF protection
- Secure cookie settings
- Input sanitization
- Dependency vulnerability scanning

### Security Headers
```javascript
{
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin"
}
```

## ♿ Accessibility

### WCAG Compliance
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

### Testing
Run accessibility audits with:
- Lighthouse DevTools
- axe-core browser extension
- Wave accessibility evaluator

## 🌍 Internationalization

### Supported Languages
- English (EN) - Default
- French (FR)

### Adding New Languages
1. Create translation file in `src/locales/`
2. Add language option to `LanguageContext`
3. Update language selector component

## 🧪 Testing

### Testing Strategy
- Unit tests for utility functions
- Component testing with React Testing Library
- Integration tests for user flows
- E2E tests with Playwright (planned)

### Running Tests
```bash
# Unit tests
npm run test

# Coverage report
npm run test:coverage

# E2E tests
npm run test:e2e
```

## 📈 Analytics & Monitoring

### Implemented
- Vercel Analytics for performance monitoring
- Error boundary for crash reporting
- Console logging in development

### Production Monitoring
For production deployments, consider integrating:
- **Error Tracking**: Sentry, Rollbar, or Bugsnag
- **Performance**: New Relic, DataDog
- **User Analytics**: Google Analytics, Mixpanel

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms
The application can be deployed to:
- Netlify
- AWS S3 + CloudFront
- Azure Static Web Apps
- Google Cloud Storage

### Build Commands
```bash
# Production build
npm run build

# Build with environment
NODE_ENV=production npm run build
```

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Use ESLint configuration
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is proprietary software owned by ERMITS Advisory. All rights reserved.

## 📞 Support

For technical support or questions:
- **Website**: [ermits-advisory.com](https://ermits-advisory.com)
- **Email**: support@ermits-advisory.com
- **Documentation**: See `/docs` folder for detailed guides

## 🗺️ Roadmap

### Upcoming Features
- [ ] Real-time threat intelligence integration
- [ ] Advanced reporting and export features
- [ ] Mobile applications (iOS/Android)
- [ ] API for third-party integrations
- [ ] Machine learning risk predictions
- [ ] Multi-tenant organization support

### Version History
- **v1.0.0** - Initial release with STEEL framework
- **v1.1.0** - Performance optimizations and PWA features
- **v1.2.0** - Enhanced security and accessibility

---

**ERMITS Advisory** - Empowering organizations with intelligent risk management solutions.

*Built with ❤️ using modern web technologies*
