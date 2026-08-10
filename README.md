# spirula.studio

Marketing site for **Spirula Studio**, an all-in-one 3D Gaussian splatting app.
Served by GitHub Pages from `main` at <https://spirula.studio>.

## Layout

| File | Notes |
| --- | --- |
| `index.html` | The whole site. A self-extracting bundle: a small loader plus a JSON manifest of base64 assets (screenshots, two MP4s, React). ~30 MB. |
| `spirula-studio.html` | The original export, kept unmodified for reference. `index.html` is this file plus `<head>` metadata. |
| `og.jpg` | 1200×630 social card. |
| `favicon.svg` | |
| `CNAME` | Custom domain. Do not delete — GitHub Pages reads it on every build. |
| `.nojekyll` | Skips Jekyll. The bundle contains `{{ … }}` sequences that Liquid would otherwise be tempted by. |

## Updating the site

Re-export the bundle, then re-apply the `<head>` metadata — it has to go in **two**
places, because the loader calls `document.documentElement.replaceWith()` once the
bundle unpacks, discarding the outer `<head>` entirely:

1. the outer `<head>` — what crawlers and link unfurlers that don't run JS see;
2. the head inside the JSON string in `<script type="__bundler/template">` — what
   the live page ends up with.

Commit and push to `main`; Pages redeploys in a minute or two.
