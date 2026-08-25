# spirula.studio

Marketing site for **Spirula Studio**, an all-in-one 3D Gaussian splatting app.
Static HTML, no build step, served by GitHub Pages from `main`.

> **Under development — deliberately not indexed.** `index.html` carries a
> `noindex, nofollow` robots meta tag and there is no sitemap. See
> [Going public](#going-public) to reverse it.

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | The whole page. Semantic markup, no inline styles; every string a visitor reads is either in here or keyed to `data-i18n`. |
| `assets/css/site.css` | All styling. Tokens at the top, then one block per section of the page, then the responsive and CJK overrides. |
| `assets/js/site.js` | All behaviour. A config block at the top holds the release URLs, per-OS system requirements and the funding goal. |
| `assets/js/i18n.js` | Translations for 13 languages (`STRINGS`) plus the showcase copy (`SCENES`) and the language menu (`LANGUAGES`). |
| `assets/js/vendor/` | GSAP 3.12.5, ScrollTrigger 3.12.5 and Lenis, unmodified. Vendored rather than CDN-loaded so the page has no third-party runtime dependency. |
| `assets/img/`, `assets/video/` | Screenshots and the two screen recordings. |
| `og.jpg` | 1200×630 social card. |
| `favicon.svg`, `CNAME`, `robots.txt` | |
| `.nojekyll` | Skips Jekyll, which would otherwise try to process the site. |

The only external request the page makes is the Satoshi webfont from
Fontshare, plus one `api.github.com` call to find the newest release asset for
the download button. Both fail softly.

## Working on it

Open `index.html` in a browser, or serve the directory if you want the GitHub
release lookup to work (it needs an `http://` origin):

```sh
python3 -m http.server 8000    # then http://localhost:8000
```

The page renders complete and in English with JavaScript disabled. Scripting
adds language switching, OS detection, scroll animation and smooth scrolling —
nothing that hides content.

### Editing text

English copy lives in `index.html`. Every translatable element carries
`data-i18n="<key>"`; `assets/js/site.js` overwrites its text from
`STRINGS[lang][key]` on load, so **changing English in `index.html` alone is not
enough** — change `STRINGS.en` in `assets/js/i18n.js` to match, or the edit is
replaced as soon as the page runs.

* `**bold**` inside a translated string renders as `<strong>`.
* `{os}` and `{amt}` are substituted at runtime (`dl.for`, `sup.toGo`).
* A key missing from a language falls back to English, so partial translations
  are fine.
* Showcase copy is `SCENES` rather than `STRINGS`, one entry per scene; entry
  order is the `?scene=` index the "View scene" links pass along.

### Editing the release, the specs or the funding goal

All in the `SITE` block at the top of `assets/js/site.js`:
per-OS system requirement rows, the releases and sponsor URLs, the preset
donation amounts, and `funding: { raised, goal, currency }`.

The figures in the support section of `index.html` (`$10 / $2,800 · <1%`,
`$2,790 to go`, the bar width) are the no-JS fallback for `SITE.funding` and
should be updated alongside it.

### Editing styles

`assets/css/site.css` is plain CSS — no preprocessor, no framework. Colours,
type and rhythm are custom properties on `:root`; the breakpoints are listed in
the header comment. Layout is CSS-only, so resizing the window is enough to
check it.

## Known loose ends

* The **"View scene"** buttons link to `SceneViewer.dc.html?scene=N&lang=…`,
  which is not in this repository — the links 404. Either add that page or
  point `SITE.sceneViewer` somewhere real.
* The **Discord, LinkedIn and X** links in the header, mobile menu and footer
  are `href="#"` placeholders.
* The showcase shows three of the five scenes in `SCENES`; Amsterdam and
  Coventry have copy but no card.

## Going public

1. Delete the `<meta name="robots" content="noindex, …">` tag from
   `index.html`.
2. Restore `sitemap.xml` and re-add the `Sitemap:` line to `robots.txt`.
3. Put the URL back in the repo's About box and description.
4. Submit the domain in Google Search Console. Indexing takes days either way —
   removing the tag is not instant, so do this before you want traffic, not
   after.

## History

The site was originally a single ~30 MB `index.html`: a machine-generated
bundle that unpacked a base64 asset manifest and rendered a proprietary
template language through React at runtime. It was refactored into the files
above in August 2026; nothing renders through a framework any more. The
original bundle is in the history at `ee55a9e` if you ever need to diff against
it.
