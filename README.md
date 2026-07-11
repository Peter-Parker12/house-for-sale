# House for sale — single page site

A single-page listing site with no build step. Deployed via GitHub Pages.

## Editing the listing

All content (price, address, beds/baths, description, rooms, features, agent
info) lives in [`data.js`](data.js) — edit that file, no HTML/CSS knowledge
needed. Feature icons use [Tabler icon](https://tabler.io/icons) names.

## Adding photos

Drop your images into `assets/images/`:

- **Hero photo** (the big banner at the top): save it as `assets/images/hero.jpg`.
- **About photo** (next to the description): save it as `assets/images/about.jpg`.
  Optional — falls back to the hero photo if missing.
- **Gallery photos**: save them in `assets/images/gallery/` named `1.jpg`,
  `2.jpg`, `3.jpg`, etc. — sequential, starting at 1, no gaps. They'll show up
  automatically in the order you number them.
- **Room photos**: rooms don't get separate files — each entry in the `rooms`
  array in `data.js` just points at one or two gallery photos by number, e.g.
  `images: ["gallery/7.jpg", "gallery/8.jpg"]`. Clicking a room photo opens
  the full gallery lightbox at that photo.

Any `.jpg` works, but keep files under ~1–2MB each (resize/compress large
phone photos) so the page loads quickly.

## Editing the floor plan

The `floorPlans` array in `data.js` drives the "Mặt bằng" (floor plan)
section — one entry per floor, each with a `rooms` array of simple
rectangles:

```js
{ name: "Phòng ngủ 1", x: 0, y: 0, width: 350, height: 440, roomRef: "Phòng ngủ" }
```

- `x`, `y`, `width`, `height` are in centimeters, positioned inside each
  floor's `viewBox` (500×1200 by default — a schematic 5m × 12m footprint).
  These are illustrative, not architectural — adjust freely to roughly match
  the real layout.
- `roomRef` is optional and must exactly match a `name` in the `rooms[]`
  array above — clicking that room on the floor plan opens the matching
  photo. Leave it out if the room has no specific photo.
- `type: "core"` marks non-clickable structural space (stairwell/elevator).
  `type: "outdoor"` marks a balcony/terrace (renders with a dashed border).
  Leave `type` out for a normal room.

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
