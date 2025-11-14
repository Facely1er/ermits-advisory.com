# Assets Directory

This directory contains all static assets used throughout the ERMITS Advisory application.

## Current Assets

- **ermits-advisory.png** - Main ERMITS Advisory logo (used in Navigation and Footer)
- **favicon.svg** - Site favicon
- **background.jpg** - Background images for various pages
- **image.png** - General purpose images
- **slides/** - Board presentation slide images

## Adding New Logos

### Ecosystem Logo

To add the ERMITS Ecosystem logo:

1. Save your ecosystem logo file as `ermits-ecosystem.png` (or `.svg`) in this directory
2. Update `src/pages/EcosystemPage.tsx`:
   - Uncomment line 14: `import ecosystemLogo from '../assets/ermits-ecosystem.png';`
   - Replace the placeholder icon on line 50 with: `<img src={ecosystemLogo} alt="ERMITS Ecosystem" className="w-24 h-24 object-contain" />`

### Other Logos

For any additional logos:
- Use descriptive filenames (e.g., `steel-logo.png`, `risk-radar-icon.svg`)
- Prefer SVG format for logos when possible (scalable, smaller file size)
- Optimize PNG/JPG images before adding (recommended tools: TinyPNG, ImageOptim)
- Update the relevant component files to import and use the new logo

## File Naming Conventions

- Use kebab-case for filenames: `my-logo.png`
- Be descriptive: `ecosystem-logo.svg` is better than `logo1.svg`
- Include format in filename if multiple formats exist: `logo.png`, `logo.svg`

