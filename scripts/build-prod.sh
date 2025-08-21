#!/bin/bash

# Production Build Script for ERMITS Advisory
# This script handles the complete production build process

set -e  # Exit on any error

echo "🚀 Starting production build for ERMITS Advisory..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version)
print_status "Node.js version: $NODE_VERSION"

# Check npm version
NPM_VERSION=$(npm --version)
print_status "npm version: $NPM_VERSION"

# Clean previous builds
print_status "Cleaning previous builds..."
rm -rf dist node_modules/.vite .cache

# Install dependencies
print_status "Installing dependencies..."
npm ci --production=false

# Run type checking
print_status "Running TypeScript type checking..."
npm run type-check

# Run linting
print_status "Running ESLint..."
npm run lint

# Build for production
print_status "Building for production..."
npm run build:prod

# Check build output
if [ ! -d "dist" ]; then
    print_error "Build failed - dist directory not created"
    exit 1
fi

# Analyze bundle size
print_status "Analyzing bundle size..."
BUNDLE_SIZE=$(du -sh dist | cut -f1)
print_success "Bundle size: $BUNDLE_SIZE"

# Check for critical files
CRITICAL_FILES=("index.html" "assets")
for file in "${CRITICAL_FILES[@]}"; do
    if [ ! -e "dist/$file" ]; then
        print_error "Critical file missing: $file"
        exit 1
    fi
done

# Run security audit
print_status "Running security audit..."
npm audit --audit-level=moderate || print_warning "Security audit found issues - review before deployment"

# Create deployment manifest
print_status "Creating deployment manifest..."
cat > dist/deployment.json << EOF
{
  "buildTime": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "version": "$(node -p "require('./package.json').version")",
  "environment": "production",
  "bundleSize": "$BUNDLE_SIZE",
  "nodeVersion": "$NODE_VERSION",
  "npmVersion": "$NPM_VERSION"
}
EOF

# Verify build integrity
print_status "Verifying build integrity..."
cd dist
find . -type f -name "*.js" -exec sh -c 'echo "Checking $1..."; if ! node -c "$1" 2>/dev/null; then echo "Invalid JavaScript in $1"; exit 1; fi' _ {} \;
cd ..

print_success "Production build completed successfully!"
print_status "Build output: dist/"
print_status "Deployment manifest: dist/deployment.json"
print_status "Bundle size: $BUNDLE_SIZE"

# Optional: Start preview server
if [ "$1" = "--preview" ]; then
    print_status "Starting preview server..."
    npm run preview
fi

echo "✅ Production build process completed!"