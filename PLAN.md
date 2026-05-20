# Portfolio Update Plan

Source of truth for CV content: `Yash_Yadav_CV.pdf` (latest, dated 2025-06-10).
Target file for content: `src/constants/index.js` (consumed by `src/components/Experience.jsx`).

---

## 1. Experience content updates (`src/constants/index.js`)

### 1.1 What the CV currently says (extracted verbatim)

**Header**
- Yash Yadav — Bachelor of Engineering in Computer Engineering, NCIT Batch 2018
- Koteshwor, Kathmandu
- yashsnab0@gmail.com · yashyadav.com.np · linkedin.com/in/yashyadav0 · github.com/Yash-Yadav-0

**Skills (CV order)**
- Languages: C#, JavaScript, CSS, SQL
- Databases: PostgreSQL, DynamoDB
- Frameworks/Libraries: .NET (ASP.NET Core, Entity Framework Core), RabbitMQ, Redis
- Architecture/Patterns: Clean Architecture, CQRS, RESTful APIs, Basic DDD
- Cloud/DevOps: AWS (Lambda, SQS, SNS, API Gateway), Docker, GitHub Actions, CI/CD
- Tools/Platforms: Git, Postman, Nginx, SonarQube

**Professional experience (two roles, sharing one bullet list in the PDF)**
- Aloi Global — Feb 2024 – May 2024 — Intern, .NET Developer
- Fintech Solutions — Jun 2024 – Present — Junior .NET Developer

The 14 bullets in the CV cover: full SDLC contribution; scalable REST APIs with validation/pagination/standard HTTP responses; Clean Architecture layering; CQRS + basic DDD; payout & remittance workflows with idempotency, retry/fallback, webhook/API Gateway callbacks; PostgreSQL schema/index/SP design and tuned SQL; EF Core + raw SQL; centralized exception handling, middleware, structured logging, input sanitization; event-driven AWS Lambda/SQS/SNS background workers; auth (RBAC, encryption, audit logging); AWS deployment; CI/CD with GitHub Actions + Docker; Agile/Scrum collaboration; unit & integration testing + prod issue resolution.

### 1.2 What the portfolio currently shows

The two existing entries are **stale**:
- `.Net Intern · Fintect Solution Pvt. Ltd. · June 2024 - Present` → bullet just says `"Ongoing..."`. Title is wrong (he is now Junior .NET Developer, not an intern), company name has a typo ("Fintect"), and bullets are empty.
- `.Net Bootcamp · Aloi Private Limited · Feb 2024 - April 2024` → CV says "Intern – .NET Developer" through **May 2024** (not April), and labelling it a "bootcamp" undersells it.

The React.js Developer (Jun–Sep 2023), Unity Developer (Mar–Apr 2022), NCIT, and Capital College entries are **not in the CV**, but they add timeline richness on the site. **Per your instruction "do not remove without optimizing"**, these are kept but lightly tightened (no content removal, just trim filler and fix grammar). NCIT date is changed from `2018-2023` to `2018-2024` to match the CV's batch and the Jun-2024 employment start.

### 1.3 Proposed rewrite (concise, achievement-focused, drawn only from CV facts)

**Entry A — replaces current Fintech entry**
- title: `Junior .NET Developer`
- company_name: `Fintech Solutions Pvt. Ltd.` *(fixes "Fintect" typo)*
- date: `Jun 2024 – Present`
- bullets (7, condensed from CV's 14 to remove duplication with Aloi entry):
  1. Designed and shipped scalable ASP.NET Core REST APIs with validation, pagination, and standardized HTTP response contracts.
  2. Applied Clean Architecture (Controller/Application/Domain/Infrastructure) with CQRS and foundational DDD to keep fintech services maintainable.
  3. Built backend services for international payout & remittance workflows — idempotency keys, retry/fallback logic, webhook and API Gateway callbacks.
  4. Modeled and tuned PostgreSQL: schemas, indexes, stored procedures, and performance-critical SQL alongside EF Core.
  5. Implemented centralized exception handling, custom middleware, structured logging, input sanitization, RBAC, encryption, and audit logging.
  6. Built event-driven components on AWS (Lambda, SQS/SNS, API Gateway) with background workers for async processing.
  7. Owned CI/CD with GitHub Actions + Docker, deployed on AWS, and supported production issues end-to-end (unit/integration tests, defect resolution, on-call fixes).

**Entry B — replaces current Aloi entry**
- title: `.NET Developer Intern`
- company_name: `Aloi Global`
- date: `Feb 2024 – May 2024` *(was incorrectly "Feb 2024 - April 2024")*
- bullets (4, distilled from the original 4 + CV emphasis on Clean Architecture exposure):
  1. Built RESTful APIs in ASP.NET Core covering HTTP verbs, validation, and efficient data retrieval patterns.
  2. Contributed across the full SDLC — requirement analysis, design, development, code reviews, and testing — in an Agile/Scrum team.
  3. Practiced Git-based version control for collaborative development and managed task hand-offs.
  4. Supported cloud deployment workflows on AWS/Azure, focusing on hosting and environment configuration.

**Entry C — React.js Developer (kept, lightly tightened)**
- Same dates (Jun 2023 – Sep 2023) and company (blank). Bullets condensed from 6 → 4, removing the duplicated "Understanding of modern JS, ES6" line and merging the UI library bullet into the React stack one.

**Entry D — Unity Developer (kept, tightened)**
- Same dates (Mar 2022 – Apr 2022). 4 bullets → 3, merging overlapping "C#" + "modern programming principles" bullets.

**Entry E — NCIT (kept, date corrected)**
- date: `2018 – 2024` *(reflects the CV's Batch 2018 + Jun 2024 first job)*.

**Entry F — Capital College (kept as-is).**

### 1.4 What I will NOT add to the experience array (and why)

- **Standalone "Skills" entry** on the timeline — `Tech.jsx` and `services` already cover this; duplicating clutters the timeline.
- **DynamoDB / SonarQube / Nginx icons** — no existing asset files; adding implies adding new packages or new asset binaries. I will surface these inline in bullets instead. *(If you want them as Tech icons, say so and I will ask before adding new image assets.)*

---

## 2. ESLint setup & fixes

ESLint is **already configured** (`.eslintrc.cjs` + `lint` script). `npm run lint` currently reports **95 problems (80 errors, 15 warnings)**. Plan is to *fix the problems*, not loosen the config — except where rules genuinely don't fit a React-Three-Fiber + Vite project.

### 2.1 Config changes (`.eslintrc.cjs`)

1. Disable `react/no-unknown-property` for R3F JSX attributes (`intensity`, `position`, `rotation`, `castShadow`, `shadow-mapSize`, `groundColor`, `object`, `angle`, `penumbra`, `position-y`, `rotation-y`, `object-y`). This is a known R3F-vs-eslint-plugin-react conflict; the standard fix is to add the props to the rule's `ignore` list rather than rewrite every Three.js primitive. (No new package needed.)
2. Add a Node `env` override for `tailwind.config.js` / `postcss.config.js` so `module` is defined.
3. Keep `react-refresh/only-export-components` as a warning (Vite default); leave the existing warnings since they are non-blocking and fixing them would require splitting every `SectionWrapper(...)` HOC export into a separate file (large churn, out of scope).

### 2.2 Code fixes (per file)

| File | Fix |
|---|---|
| `src/App.jsx` | Remove unused `Router, Routes, Route, Feedbacks` imports. |
| `src/components/About.jsx` | Remove `import React`; add PropTypes for `ServiceCard`, `CustomAlert`; replace `class=` with `className=` on the spinner divs; change `<style options={...}>` → standard `<style>`. |
| `src/components/Contact.jsx` | No errors, only fast-refresh warning (keep). |
| `src/components/Experience.jsx` | Remove `import React`; add PropTypes for `ExperienceCard`. |
| `src/components/Feedbacks.jsx` | Remove `import React`; add PropTypes for `FeedbackCard`; escape `"` in JSX. |
| `src/components/Hero.jsx` | Remove `import React`; escape `'` (use `&apos;`). |
| `src/components/Loader.jsx` | Remove `import React`. |
| `src/components/Navbar.jsx` | Remove unused `React, useEffect`. |
| `src/components/Tech.jsx` | Remove `import React`. |
| `src/components/Works.jsx` | Remove `import React`; add PropTypes for `ProjectCard`. |
| `src/components/canvas/Ball.jsx` | Remove `import React`. |
| `src/components/canvas/Computers.jsx` | Remove `import React`; add PropTypes for `Computers({ isMobile })`. R3F-property errors fixed via config (2.1). |
| `src/components/canvas/Earth.jsx` | Remove `import React`. R3F-property errors fixed via config. |
| `src/components/canvas/Stars.jsx` | R3F-property error fixed via config. |
| `src/constants/index.js` | Remove unused `color` import. |
| `src/hoc/CustomAlert.jsx` | Remove `import React`. |
| `tailwind.config.js` | Fixed via config (2.1) — Node env override. |

After these, `npm run lint` should be **0 errors / few harmless warnings**.

### 2.3 PropTypes — package question

`prop-types` is already pulled in transitively (visible in node_modules), but it is **not** listed in `package.json` dependencies. Adding `import PropTypes from "prop-types"` and relying on transitive deps is fragile.

**Decision needed from you (this is the only new-package ask):**
- Option A — Add `prop-types` as a direct dependency (~3 KB, the canonical React way).
- Option B — Skip PropTypes; instead silence `react/prop-types` in `.eslintrc.cjs`.

My recommendation: **Option B** for a small portfolio site (less ceremony, no new dep). If you prefer A, I will add `prop-types` explicitly — no other new packages.

---

## 3. npm package updates (in-place, no new packages)

Strict rule: **upgrade only within the existing semver-major lines** unless you approve the major bumps below. Major-version bumps (React 19, Vite 5/6/7, Tailwind 4, ESLint 9, MUI 6+, R3F 9, framer 11+, three 0.184) all carry breaking changes and are explicitly out of scope unless you say otherwise.

### 3.1 Safe in-range updates (will run `npm update`)

These match what `npm outdated` reports as `Wanted` (semver-compatible):

- `@emotion/react` 11.11.4 → 11.14.0
- `@emotion/styled` 11.11.5 → 11.14.1
- `@mui/material` 5.15.16 → 5.18.0
- `@react-three/drei` 9.105.6 → 9.122.0
- `@react-three/fiber` 8.16.4 → 8.18.0
- `@types/aos` 3.0.7 → 3.0.8
- `@types/react` 18.3.1 → 18.3.29
- `@types/react-dom` 18.3.0 → 18.3.7
- `@vercel/analytics` 1.2.2 → 1.6.1
- `@vitejs/plugin-react` 4.2.1 → 4.7.0
- `autoprefixer` 10.4.19 → 10.5.0
- `eslint` 8.57.0 → 8.57.1
- `eslint-plugin-react` 7.34.1 → 7.37.5
- `eslint-plugin-react-refresh` 0.4.6 → 0.4.26
- `maath` 0.10.7 → 0.10.8
- `postcss` 8.4.38 → 8.5.15
- `react-router-dom` 6.23.0 → 6.30.3
- `tailwindcss` 3.4.3 → 3.4.19

### 3.2 Major upgrades — NOT doing without explicit approval

- `react` / `react-dom` 18 → 19 (would also force React Router 7, R3F 9, MUI 6+, etc.).
- `vite` 4 → 8.
- `@mui/material` 5 → 9.
- `eslint` 8 → 9 (new flat-config; would require rewriting `.eslintrc.cjs`).
- `tailwindcss` 3 → 4 (PostCSS plugin rewrite).
- `framer-motion` 10 → 12, `three` 0.157 → 0.184, `react-vertical-timeline-component` 3 → 4, `@vercel/analytics` 1 → 2, `@emailjs/browser` 3 → 4.
- `aos` 3.0.0-beta.6 → 2.3.4 is **not** an upgrade (it's a downgrade from a beta tag); leaving it.

If you want any of these, name them and I will tackle them in a separate pass.

---

## 4. Execution order

1. ✅ This plan, written for your review.
2. ⏸ **Pause for your approval** — confirm experience copy, PropTypes Option A vs B, and that the in-range-only npm updates are what you want.
3. Update `src/constants/index.js` with the new experience entries.
4. Update `.eslintrc.cjs` (R3F prop ignore-list, Node env override for config files).
5. Fix each `.jsx` file per §2.2.
6. Run `npm update` for the in-range bumps from §3.1.
7. Re-run `npm run lint` and `npm run build` — confirm zero errors and a clean build.
8. Manual smoke test: `npm run dev`, scroll through Hero / About / Tech / Experience / Works / Contact.

---

## 5. Open questions for you

1. **PropTypes**: Option A (add `prop-types`) or Option B (silence `react/prop-types`)?
2. **Experience bullet copy** in §1.3 — anything you want reworded, kept, or removed?
3. **NCIT end year** — confirm `2018 – 2024` (matches CV batch + first job) or keep `2018 – 2023` if you actually graduated earlier than your first dev role.
4. **DynamoDB / SonarQube / Nginx** — leave them out of the Tech grid (current plan), or do you want me to source icons later (separate task, will ask about assets)?
