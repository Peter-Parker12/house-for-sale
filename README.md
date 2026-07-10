# House for sale — single page site

A single-page listing site with no build step. Deployed via GitHub Pages.

## Editing the listing

All content (price, address, beds/baths, description, features, agent info)
lives in [`data.js`](data.js) — edit that file, no HTML/CSS knowledge needed.

## Adding photos

Drop your images into `assets/images/`:

- **Hero photo** (the big banner at the top): save it as `assets/images/hero.jpg`.
- **Gallery photos**: save them in `assets/images/gallery/` named `1.jpg`,
  `2.jpg`, `3.jpg`, etc. — sequential, starting at 1, no gaps. They'll show up
  automatically in the order you number them.

Any `.jpg` works, but keep files under ~1–2MB each (resize/compress large
phone photos) so the page loads quickly.

## Contact form

By default, the form opens the visitor's email client (`mailto:`) addressed
to the agent email in `data.js`. To have submissions land as real emails
without a mailto popup:

1. Create a free form at [formspree.io](https://formspree.io).
2. Copy the form ID it gives you.
3. Paste it into `formspreeId` in `data.js`.

## Local preview

Open `index.html` directly in a browser, or run a local server:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Publishing

Push to the `main` branch — GitHub Pages is configured to serve straight
from the repo root, so changes go live automatically after a push.
