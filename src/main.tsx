import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n/config';

// Safely initialize the app with error handling
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found. Make sure there is a <div id="root"></div> in your HTML.');
}

// Initialize React app with error handling
try {
  // Verify createRoot is available
  if (typeof createRoot !== 'function') {
    throw new Error('createRoot is not a function. React may not be properly loaded.');
  }

  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} catch (error) {
  console.error('Failed to initialize React app:', error);
  rootElement.innerHTML = `
    <div style="padding: 2rem; text-align: center; font-family: system-ui, sans-serif; max-width: 600px; margin: 2rem auto;">
      <h1 style="color: #dc2626; margin-bottom: 1rem;">Application Error</h1>
      <p style="margin-bottom: 1rem;">Failed to initialize the application. This may be due to a caching issue.</p>
      <details style="text-align: left; margin: 1rem 0;">
        <summary style="cursor: pointer; margin-bottom: 0.5rem;">Error Details</summary>
        <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow: auto; font-size: 0.875rem;">
${error instanceof Error ? error.message : String(error)}
${error instanceof Error && error.stack ? '\n' + error.stack : ''}
        </pre>
      </details>
      <button onclick="window.location.reload()" style="padding: 0.75rem 1.5rem; margin-top: 1rem; cursor: pointer; background: #004B87; color: white; border: none; border-radius: 4px; font-size: 1rem;">
        Refresh Page
      </button>
      <p style="margin-top: 1rem; font-size: 0.875rem; color: #666;">
        If the problem persists, try clearing your browser cache or using a different browser.
      </p>
    </div>
  `;
}
