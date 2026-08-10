# spirula.studio

Marketing site for **Spirula Studio**, an all-in-one 3D Gaussian splatting app.
Served by GitHub Pages from `main`.

> **Under development — deliberately not indexed.** `index.html` carries a
> `noindex, nofollow` robots meta tag, and there is no sitemap. See
> [Going public](#going-public) to reverse it.

## Layout

| File | Notes |
| --- | --- |
| `index.html` | The whole site. A self-extracting bundle: a small loader plus a JSON manifest of base64 assets (screenshots, two MP4s, React). ~30 MB. |
| `spirula-studio.html` | The original export, kept unmodified for reference. `index.html` is this file plus `<head>` metadata. |
| `og.jpg` | 1200×630 social card. Still served, so shared links preview properly. |
| `robots.txt` | Crawling is left *open* on purpose — read the comments before editing. |
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

## Going public

1. Delete the `<meta name="robots" content="noindex, …">` tag from **both** heads
   in `index.html` — the outer one and the one in the template string.
2. Restore `sitemap.xml` and re-add the `Sitemap:` line to `robots.txt`.
3. Put the URL back in the repo's About box and description.
4. Submit the domain in Google Search Console. Indexing takes days either way —
   removing the tag is not instant, so do this before you want traffic, not after.
