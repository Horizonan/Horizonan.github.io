# Horizonan

The project collection at https://horizonan.github.io/, featuring Rolla as its first project.

## Website

This is a buildless static site. GitHub Pages publishes the root of the existing `master` branch. `.nojekyll` keeps the files intact. No packages, build service, analytics, remote fonts, accounts, or browser storage are needed.

- `index.html`: accessible, server-independent project content and links.
- `assets/home.css`: responsive layout and visual design.
- `assets/home.js`: the optional Rolla demo. The main project link works without JavaScript.
- `assets/dice.js` and `assets/skin-art.js`: the renderer and procedural artwork from Rolla. Demo rolls and skin changes stay in memory.
- `assets/fonts/`: locally hosted DM Sans and Manrope, with their font licenses.
- `privacy.html` and `imprint.html`: privacy and operator information, using the operator details supplied through FARBIG's imprint.

To preview, serve this directory with a static HTTP server.

The stylesheet links in all three HTML pages carry a content-version query. Update that version whenever the CSS changes so returning visitors receive the new design immediately.

## Add a project

Add another `article.project-card` inside the `projects` section of `index.html`, using its own title ID, short factual description, preview, and destination links. Project cards are static HTML so they remain accessible without JavaScript. Push to `master`; Pages publishes automatically. Only list projects that actually exist.

The original 2019 pages are retained in the repository history and, where not replaced, in the repository. Rolla remains in its separate repository and continues to publish at `/rolla/`.

## Design constraint

Keep the design focused on the projects. Do not add decorative stars, illustrations, marketing headlines, slogans, badges, counters, filler copy, or coming-soon sections.

Visual polish should come from typography, composition, contrasting surfaces, lighting around the actual product preview, and restrained interaction feedback. Keep the interface visually considered rather than stripping it down to unstyled content.
