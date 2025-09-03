# Copilot Instructions

This document provides guidance for automated coding agents working on this static website with optional Docker/MCP support.

## Core principles

1. Make small, focused changes with clear purpose
2. Edit global UI only in `navbar.html` and `footer.html`
3. Add i18n keys for all visible text (both English and Arabic)
4. Keep existing asset filenames unchanged
5. Include verification steps in PRs
6. Consider RTL layout for Arabic language

## Architecture

- Static pages: Root `.html` files (e.g., `index.html`, `about.html`)
- Shared UI: `navbar.html` and `footer.html` injected by loaders
- i18n: `assets/js/i18n.js` manages translations
- Styles: `assets/css/` contains site and page styles
- Scripts: `assets/js/` holds page-specific JS
- Assets: Images in `assets/images/` and `assets/image/`

## Key conventions

### Header/Footer Changes
```html
<!-- Only edit navbar.html / footer.html for shared UI -->
<div id="navbar-placeholder"></div>
<script src="assets/js/nav-loader.js"></script>
```

### i18n Implementation
```html
<!-- Add keys to assets/js/i18n.js -->
<h2 data-i18n="aboutUs">About Us</h2>
<input data-i18n-placeholder="emailPlaceholder">

<!-- In assets/js/i18n.js -->
translations.en.aboutUs = "About Us";
translations.ar.aboutUs = "عنا";
```

### Assets
- Don't rename existing files (many use complex names like `ArteVo portfolio off..pdf-image-002.png`)
- Add new assets with clean names
- Update references when changing assets

## Local Development

Quick static server (PowerShell):
```powershell
cd 'c:\Users\mohal\OneDrive\Desktop\ArteVo-website'
.\scripts\serve.ps1 -Mode static -Port 5500
# Access at http://localhost:5500
```

Docker setup (optional):
```powershell
cd 'c:\Users\mohal\OneDrive\Desktop\ArteVo-website'
.\scripts\serve.ps1 -Mode docker
# Site: http://localhost:8080
# API: http://localhost:3000/api/status
```

## PR Verification Checklist

1. Network checks:
   - `navbar.html` and `footer.html` fetches succeed
   - No 404s for assets
2. Console checks:
   - No "Navbar placeholder not found!" errors
   - No missing i18n key errors
3. Language verification:
   - Toggle language with `id="lang-switch"`
   - Verify `document.documentElement.dir` becomes `rtl` for Arabic
   - Check text updates correctly
4. For Docker changes:
   - Validate `docker-compose.yml`
   - Verify service endpoints

## Common Issues

1. Missing header/footer:
   - Ensure `#navbar-placeholder` exists
   - Check loader script inclusion
2. i18n problems:
   - Verify keys exist in both `translations.en` and `translations.ar`
   - Check `data-i18n` attribute spelling
3. Layout breaks in RTL:
   - Test Arabic language toggle
   - Verify flex/float directions

## Key Files

- HTML: `index.html`, `about.html`, `navbar.html`, `footer.html`
- JS: `assets/js/nav-loader.js`, `assets/js/footer-loader.js`, `assets/js/i18n.js`
- CSS: `assets/css/main.css`, `assets/css/style.css`
- Config: `docker-compose.yml`, `.vscode/mcp.json`
- Scripts: `scripts/serve.ps1`, `README.md`
