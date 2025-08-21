// Environment configuration utility
interface EnvConfig {
  // Application
  APP_NAME: string;
  APP_URL: string;
  APP_VERSION: string;
  NODE_ENV: string;
  
  // Analytics
  VERCEL_ANALYTICS_ID?: string;
  
  // API
  API_BASE_URL: string;
  API_TIMEOUT: number;
  
  // Feature Flags
  ENABLE_ANALYTICS: boolean;
  ENABLE_ERROR_REPORTING: boolean;
  ENABLE_PWA: boolean;
  
  // Development
  SHOW_DEV_TOOLS: boolean;
  LOG_LEVEL: string;
}

// Helper function to get environment variable with type safety
function getEnvVar(key: string, defaultValue?: string): string {
  const value = import.meta.env[key];
  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    console.warn(`Environment variable ${key} is not set`);
    return '';
  }
  return value;
}

// Helper function to get boolean environment variable
function getBooleanEnvVar(key: string, defaultValue: boolean = false): boolean {
  const value = getEnvVar(key, defaultValue.toString());
  return value.toLowerCase() === 'true';
}

// Helper function to get number environment variable
function getNumberEnvVar(key: string, defaultValue: number): number {
  const value = getEnvVar(key, defaultValue.toString());
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? defaultValue : parsed;
}

// Environment configuration object
export const env: EnvConfig = {
  // Application
  APP_NAME: getEnvVar('VITE_APP_NAME', 'ERMITS Advisory'),
  APP_URL: getEnvVar('VITE_APP_URL', 'https://ermits-advisory.com'),
  APP_VERSION: getEnvVar('VITE_APP_VERSION', '1.0.0'),
  NODE_ENV: getEnvVar('NODE_ENV', 'development'),
  
  // Analytics
  VERCEL_ANALYTICS_ID: getEnvVar('VITE_VERCEL_ANALYTICS_ID'),
  
  // API
  API_BASE_URL: getEnvVar('VITE_API_BASE_URL', 'https://api.ermits-advisory.com'),
  API_TIMEOUT: getNumberEnvVar('VITE_API_TIMEOUT', 10000),
  
  // Feature Flags
  ENABLE_ANALYTICS: getBooleanEnvVar('VITE_ENABLE_ANALYTICS', true),
  ENABLE_ERROR_REPORTING: getBooleanEnvVar('VITE_ENABLE_ERROR_REPORTING', true),
  ENABLE_PWA: getBooleanEnvVar('VITE_ENABLE_PWA', true),
  
  // Development
  SHOW_DEV_TOOLS: getBooleanEnvVar('VITE_SHOW_DEV_TOOLS', false),
  LOG_LEVEL: getEnvVar('VITE_LOG_LEVEL', 'info'),
};

// Environment checks
export const isDevelopment = env.NODE_ENV === 'development';
export const isProduction = env.NODE_ENV === 'production';
export const isTest = env.NODE_ENV === 'test';

// Logging utility that respects log level
export const logger = {
  error: (...args: unknown[]) => {
    console.error(...args);
  },
  warn: (...args: unknown[]) => {
    if (['warn', 'info', 'debug'].includes(env.LOG_LEVEL)) {
      console.warn(...args);
    }
  },
  info: (...args: unknown[]) => {
    if (['info', 'debug'].includes(env.LOG_LEVEL)) {
      console.info(...args);
    }
  },
  debug: (...args: unknown[]) => {
    if (env.LOG_LEVEL === 'debug' || isDevelopment) {
      console.debug(...args);
    }
  },
};

// Validate required environment variables
export function validateEnvironment(): void {
  const requiredVars = [
    'VITE_APP_NAME',
    'VITE_APP_URL',
  ];
  
  const missingVars = requiredVars.filter(varName => !getEnvVar(varName));
  
  if (missingVars.length > 0) {
    logger.error('Missing required environment variables:', missingVars);
    if (isProduction) {
      throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
    }
  }
  
  logger.info('Environment configuration loaded:', {
    NODE_ENV: env.NODE_ENV,
    APP_NAME: env.APP_NAME,
    APP_VERSION: env.APP_VERSION,
  });
}