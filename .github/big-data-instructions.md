# Big Data Instructions — ArteVo website

Purpose
- Provide concise, practical rules for collecting, storing, processing, and using large-scale data for this static website (analytics, media assets, logs, user events) while protecting privacy, controlling costs, and keeping the site fast.

Core contract (inputs / outputs / success criteria)
- Inputs: event streams (analytics, clicks, form submissions), media uploads, server logs, third-party APIs.
- Outputs: aggregated metrics, long-term media storage, dashboards, data exports for reporting, and anonymized datasets for ML or analysis.
- Success criteria: accurate analytics, low-latency site, no PII stored without explicit consent, predictable cost profile, reproducible ETL.

Top-level rules
1. Separate concerns: keep user-facing site code isolated from heavy data processing. Use server-side jobs, serverless functions, or dedicated pipelines for ETL.
2. Never store unconsented PII in analytics or logs. Default to hashing/pseudonymization or drop PII at collection time.
3. Prefer sampled or aggregated analytics for long-term storage to reduce volume and cost.
4. Use efficient storage tiers: hot (CDN) for website assets, warm for recent logs/metrics, cold/archive for historical media/exports.
5. Instrument with traceable schema versions and dataset contracts. Evolve schemas using additive changes only where possible.

Data collection & ingestion
- Use a single analytics gateway/service (Google Analytics, Plausible, Matomo, or custom collector) to centralize events; avoid duplicating event fire calls across pages.
- Keep client events minimal: page_view, click, form_submit, lang_change, media_play. Include context keys (page, component, user_consent) but avoid PII.
- For forms that collect contact details, send data directly to the server/API (not to analytics) and flag records as PII; store only in a secure datastore.
- Buffer high-volume uploads (images/videos) to a signed upload endpoint that writes to object storage (S3-compatible) — perform heavy processing (transcoding, thumbnails) asynchronously.

Data storage & retention
- Use object storage for media (bucket naming, folder per year/month). Add lifecycle rules: move older assets to infrequent access, then archive.
- Store raw logs for a short retention (30 days) and aggregated summaries for longer (1–7 years depending on compliance).
- Maintain a data retention policy documented in the repo (how long analytics/raw logs, backups, exports are kept).

Processing & ETL
- ETL jobs must run outside the request path (scheduled batch jobs or streaming jobs). Keep processing idempotent.
- Use small, reusable steps: extract -> validate -> transform -> load. Keep transformations versioned.
- Provide a simple local runner for ETL tasks (script in `scripts/etl/`) and document expected input formats.

Security, privacy & compliance
- Default: do not collect PII in analytics. If PII is required (contact forms), mark it and store encrypted at rest.
- Use HTTPS for all endpoints. Use signed URLs for uploads and CDN delivery for media.
- Maintain an allowlist for third-party trackers and document them in the repo.
- Apply least privilege to data access. Use role-based access to buckets and databases.
- Implement automated deletion for unsubscribed users or data subject requests where required.

Cost control & ops
- Sample high-volume events and aggregate (minute/hour/day) before storing long-term.
- Use lifecycle rules on object storage and export only necessary fields for long-term analysis.
- Monitor costs and set alerts for storage/ingestion spikes.

Analytics & dashboards
- Keep raw event schema minimal and stable; build derived metrics in aggregation pipelines.
- Provide a short list of core KPIs in the repo README (visitors/day, contact conversions, top projects views, language distribution).
- Version dashboards and store queries in the repo (folder `analytics/queries/`).

Testing, reproducibility & QA
- Add unit tests for ETL transforms and schema validation.
- Provide a small sample dataset and a smoke ETL run command for local verification.
- Document expected outputs and error handling behavior.

Observability & monitoring
- Emit structured logs for ETL jobs with correlation IDs and timestamps.
- Instrument job success/failure metrics and set alerts.
- Include simple health-check endpoints for APIs used by uploads/ETL.

Developer guidance & PR checklist (data-related changes)
- Describe the data flow change and reason.
- Include schema changes with migration steps (if needed).
- Add tests for transforms / validation.
- Add privacy review: confirm no PII is leaked and consent flows are respected.
- Add smoke checks for uploads, sample aggregation, and retention rules.

Minimal examples & commands (local/run)
- Example: run ETL locally (assumes small Python runner in scripts/etl)

```powershell
cd 'c:\Users\mohal\OneDrive\Desktop\ArteVo-website'
# run local ETL on sample data
python scripts\etl\run_etl.py --input sample-data/events.json --env local
```

- Example: test upload signing endpoint (pseudo)

```powershell
curl -X POST http://localhost:5500/api/sign-upload -d '{"filename":"photo.jpg"}'
```

Where to add new code
- Client telemetry: `assets/js/*` (small client fire calls). Keep payloads tiny and non-PII.
- Upload endpoints and ETL: create `scripts/etl/` and `api/` or `web/` service code. Do not modify page templates for heavy logic.

Appendix: quick checklist for reviewers
- Is PII avoided or handled correctly? (Yes/No)
- Are storage lifecycle and retention rules documented? (Yes/No)
- Are ETL transforms tested with unit tests? (Yes/No)
- Is the cost impact reasonable (sampling/lifecycle)? (Yes/No)
- Has the privacy/cookie consent flow been respected? (Yes/No)

If you want, I can:
- Commit this document to `.github/big-data-instructions.md` (or another path you prefer),
- Scaffold a minimal `scripts/etl/run_etl.py` example and a sample dataset,
- Add a short `analytics/queries/` folder with sample KPI queries for your dashboard.

Specify which of the follow-ups you'd like and I'll implement them.
