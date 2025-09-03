ArteVo-website — static multi-page site

Run locally (quick)

Static preview (no Docker):

# ArteVo-website — static multi-page site

 Run locally (quick)

 Static preview (no Docker):

 ```powershell
 cd 'c:\Users\mohal\OneDrive\Desktop\ArteVo-website'
 .\scripts\serve.ps1 -Mode static -Port 5500
 # open http://localhost:5500
 ```

 Full Docker stack (requires Docker Desktop):

 ```powershell
 cd 'c:\Users\mohal\OneDrive\Desktop\ArteVo-website'
 .\scripts\serve.ps1 -Mode docker
 # or: docker-compose up --build
 # nginx will serve static site at http://localhost:8080
 # example API at http://localhost:3000/api/status
 ```

Notes

- `scripts/serve.ps1` is a helper for local dev (static or docker).
- `docker-compose.yml` contains optional `nginx` (static host), `web` (example Node API) and `db` (MySQL) services — adjust/remove as needed.
- Image filenames contain spaces/dots; prefer adding new images with clean names rather than renaming existing assets.

Smoke checks & PR template

This repo includes a small smoke test and a PR template to help maintainers verify changes quickly.

- Run the static server:

```powershell
cd 'c:\Users\mohal\OneDrive\Desktop\ArteVo-website'
.\scripts\serve.ps1 -Mode static -Port 5500
# open http://localhost:5500
```

- Run the smoke check (PowerShell):

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts\smoke_check.ps1 -BaseUrl http://localhost:5500
```

- PRs should include verification steps (see `.github/PULL_REQUEST_TEMPLATE.md`).

