````instructions

# Copilot instructions — ArteVo website (repo-specific)

Purpose: give automated coding agents the exact, repository-specific knowledge needed to make small, safe, high-value changes to this static website.

Core contract (inputs / outputs / success criteria)
- Inputs: repository files, the user's explicit task, and the conventions in this document.
- Outputs: a focused, reversible commit or PR with a 1–2 line summary and a short verification note.
- Success: changed pages load without console errors, shared UI still fetches, and any visible text changes include i18n keys in both languages.

Big picture (what to know quickly)
- This is a static, client-rendered multi-page site: HTML files at repo root with shared includes (`navbar.html`, `footer.html`) loaded client-side by `assets/js/nav-loader.js` and `assets/js/footer-loader.js`.
- i18n is implemented in `assets/js/i18n.js` (two language objects: `translations.en` and `translations.ar`); visible text should use `data-i18n` attributes.
- Images and media live in `assets/images/` (many filenames contain spaces and unusual punctuation — do not rename without updating references).
- Local dev: `scripts/serve.ps1` starts a static server (Mode: static/docker).

Developer workflows (commands you will use)
- Start local server (PowerShell):
```powershell
cd 'c:\Users\mohal\OneDrive\Desktop\ArteVo-website'
.\scripts\serve.ps1 -Mode static -Port 5500
# then open http://localhost:5500
```
- Run smoke checks (local script added to repo):
```powershell
.\scripts\smoke_check.ps1 -BaseUrl http://localhost:5500
# expect HTTP 200 for /, /navbar.html, /footer.html, assets/js/i18n.js, assets/css/main.css
```
- Docker preview (optional):
```powershell
.\scripts\serve.ps1 -Mode docker
# nginx portal: http://localhost:8080
```

Project-specific conventions (follow these exactly)
- One-change-per-PR: keep PRs focused and small. Title should be short and descriptive.
- Shared UI: edit `navbar.html` and `footer.html` only for global header/footer changes. Those files are fetched at runtime by pages.
- i18n edits: when you change visible text, add keys to both `translations.en` and `translations.ar` in `assets/js/i18n.js`. Use `data-i18n` on elements and `data-i18n-placeholder` on inputs.
- Asset safety: do not rename or delete existing assets unless you (a) update all references, (b) run smoke checks, and (c) document the rename in the PR. Many image filenames include spaces/dots which break some pipelines.
- Accessibility & RTL: when adding UI, include `alt` attributes for images, `aria-label` where appropriate, and test Arabic (`document.documentElement.dir === 'rtl'`) for layout flips.

Integration points & external dependencies
- `docker-compose.yml` / `docker/` — optional nginx + example `web/` backend (Node.js) used for demos. Changes to these affect Docker-based previews.
- Analytics / ETL: repo includes a big-data guidance doc (`.github/big-data-instructions.md`) but no production pipeline. If adding analytics, prefer privacy-first (Plausible/Matomo) and server-side ingestion to avoid PII.

Patterns and examples (concrete)
- Shared include usage: `index.html` and other pages call `nav-loader.js` which does `fetch('navbar.html')` then `innerHTML` the result — avoid heavy script logic in `navbar.html` and keep it markup-first.
- i18n example (add a key):
  - In `assets/js/i18n.js`:
    `translations.en['home.hero.title']='We build beautiful websites'`
    `translations.ar['home.hero.title']='...'`
  - In `index.html`: `<h1 data-i18n="home.hero.title"></h1>`
- Image handling: prefer adding a `picture` element with WebP + fallback when improving hero/portfolio images. Add `loading="lazy"` to below-the-fold images.

PR & verification checklist (include in every PR description)
1) What changed and why (1–2 lines).
2) Files modified.
3) Local verification steps (pages opened; console/network checks).
4) i18n keys added/updated (list keys).
5) Smoke checks run (script name and output).

Quick rules for agents
- Make minimal, reversible edits. Always add a short verification note and the smoke-check command you ran.
- Never rename or delete assets without explicit user approval.
- Edit shared UI only in `navbar.html` and `footer.html`.
- Add i18n keys for any visible text, and update both `translations.en` and `translations.ar`.

Files to inspect first (fast checklist)
- `index.html`, `about.html`, `projects.html`, `navbar.html`, `footer.html`
- `assets/js/nav-loader.js`, `assets/js/footer-loader.js`, `assets/js/i18n.js`
- `assets/css/main.css`, `assets/css/style.css`
- `scripts/serve.ps1`, `scripts/smoke_check.ps1`, `docker-compose.yml`

If you want stricter automation (linting, Lighthouse CI, image-optimizer actions) say which checks to add — the repo already contains a basic smoke-check workflow that can be extended.

Small PR template snippet (copy into PR description)
```
Summary: <one line summary>
Files changed: <list>
Verification steps taken:
- Opened: <pages>
- Console: <ok|errors>
- Network: navbar/footer fetch OK
i18n keys added: <keys>
Smoke checks: <script + output>
Backward-incompatible changes: <none or explain>
```

````
