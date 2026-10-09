# Sunflora Homoeopathy — Clinic Website

A modern React + Vite + Tailwind site for a homoeopathy clinic.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Editing content

Almost all clinic-specific text — doctor's name/bio, phone, address, opening
hours, conditions treated, testimonials, etc. — lives in one file:

```
src/data/content.js
```

Anything wrapped in `[square brackets]` is a placeholder. Search that file
for `[` and replace with real details. Photos are placeholder boxes in:

- `src/components/Hero.jsx`
- `src/components/MeetDoctor.jsx`

Replace the placeholder `<span>` blocks with an `<img src="..." />` pointing
to real photos (drop image files in `src/assets/` and import them).

## Showing live Google reviews

The **Patient Experiences** section (`src/components/GoogleReviews.jsx`) can
pull real, live reviews from your Google Business Profile:

1. Get a Google Cloud API key with **Maps JavaScript API** and **Places
   API** enabled (billing must be active on the project; Google gives a
   free monthly credit that comfortably covers a low-traffic clinic site).
   Restrict the key to your website's domain (HTTP referrer restriction).
2. Find your clinic's **Place ID** — search for it at
   https://developers.google.com/maps/documentation/places/web-service/place-id
3. Copy `.env.example` to `.env` and fill in:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_key_here
   VITE_GOOGLE_PLACE_ID=your_place_id_here
   ```
4. Restart `npm run dev`. The section will now show up to 5 live Google
   reviews (this is Google's limit for this API) with the real rating and
   review count.

Without these two values, the section automatically falls back to the
sample reviews in `src/data/content.js` — just edit those with real review
excerpts if you'd rather not set up the API.

Also update `clinic.googlePlaceReviewUrl` and `clinic.mapEmbedUrl` /
`clinic.mapLinkUrl` in `src/data/content.js` with your real Google Maps
links (share → embed a map, and share → copy link, from Google Maps).

## Building for production

```bash
npm run build
```

Outputs a static site to `dist/` — deployable to Netlify, Vercel, GitHub
Pages, or any static host. If using an `.env`, make sure to set the same
`VITE_GOOGLE_MAPS_API_KEY` / `VITE_GOOGLE_PLACE_ID` variables in your
hosting provider's environment settings.
