#!/bin/bash

# Script to remove i18n system and replace with hardcoded English text
# This processes the remaining 11 files

# Files to process:
# - BoardPresentation.tsx
# - ContactPage.tsx
# - CookiePolicyPage.tsx
# - Dashboard.tsx
# - EcosystemPage.tsx
# - ImplementationGuidePage.tsx
# - LandingPage.tsx
# - PrivacyPolicyPage.tsx
# - RiskRadar.tsx
# - ServiceOffering.tsx
# - TermsOfServicePage.tsx

echo "Starting i18n removal for remaining files..."

# First, let's create backup
mkdir -p /tmp/i18n-backup
cp -r src/pages /tmp/i18n-backup/
cp -r src/components /tmp/i18n-backup/

echo "Backups created in /tmp/i18n-backup"
echo "Processing files..."

# Note: Manual processing needed for complex cases
echo "Files have been prepared for manual processing"
echo "Please complete the remaining replacements using the Edit tool"
