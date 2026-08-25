/* ═══════════════════════════════════════════════════════════════════════════
   Spirula Studio — page behaviour.

   Plain ES2020, no build step and no framework. Loaded after assets/js/i18n.js
   (which defines LANGUAGES, STRINGS and SCENES) and after GSAP, ScrollTrigger
   and Lenis, all of which are optional: if a vendor script is missing the page
   still works, just without smooth scrolling and scroll-linked animation.

   Everything here enhances markup that already stands on its own — index.html
   renders complete, in English, with scripting off.

   Sections below:
     1  Config          release URLs, per-OS specs, funding goal
     2  State + helpers
     3  Language
     4  Header, menus and anchors
     5  Download
     6  Support
     7  Video
     8  Motion
     9  Boot
   ═══════════════════════════════════════════════════════════════════════════ */

'use strict';

/* ── 1. Config ───────────────────────────────────────────────────────────────
   The values most likely to need editing. Anything shown to a visitor in more
   than one language lives in assets/js/i18n.js instead. */

const SITE = {
  /* Where the download button points when the GitHub API is unreachable. */
  releasesUrl: 'https://github.com/harry7557558/spirulae-splat/releases/latest',
  releasesApi: 'https://api.github.com/repos/harry7557558/spirulae-splat/releases/latest',
  sponsorUrl: 'https://github.com/sponsors/ChaoqinRobotics',

  /* Page each showcase card links to, with ?scene=<index>&lang=<code>
     appended. NOTE: this page is not in the repository yet. */
  sceneViewer: 'SceneViewer.dc.html',

  /* System requirements. One row per .spec__row in index.html, same order;
     the row labels are translated (the spec.* keys), these values are not. */
  os: {
    windows: {
      label: 'Windows',
      spec: ['Windows 11', 'NVIDIA or AMD · Vulkan 1.2+ · 8 GB VRAM',
             'Any x86_64 CPU', '16 GB RAM', '50 GB free space', 'None'],
    },
    macos: {
      label: 'macOS',
      spec: ['macOS Sonoma 14 or later', 'Apple Silicon GPU · Vulkan via MoltenVK',
             'Apple Silicon M1–M4', '16 GB unified memory', '50 GB free space', 'None'],
    },
    linux: {
      label: 'Linux',
      spec: ['Ubuntu 22.04 or later', 'NVIDIA or AMD · Vulkan 1.2+ · 8 GB VRAM',
             'Any x86_64 CPU', '16 GB RAM', '50 GB free space', 'None'],
    },
  },

  /* Current crowdfunding goal. The figures written into index.html are the
     no-JS fallback for these — update both, or the two disagree with
     scripting off. */
  funding: { raised: 10, goal: 2800, currency: '$' },

  /* Preset donation amounts, in the order the buttons appear. */
  tiers: [5, 20, 50, 100],
};

const LANG_STORAGE_KEY = 'spirula.lang';
const HEADER_SOLID_AT = 50;    // px of scroll before the header fills in
const ANCHOR_OFFSET = -72;     // px, so a section heading clears the header


/* ── 2. State + helpers ──────────────────────────────────────────────────── */

const state = {
  lang: 'en',
  os: 'windows',
  tier: 1,        // index into SITE.tiers; -1 when a custom amount is entered
  freq: 'one-time',
  custom: '',
  assets: null,   // { windows|macos|linux: downloadUrl } once GitHub answers
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* Han, Kana and Hangul — used to decide whether the download headline is
   split on whitespace. */
const CJK_RE = /[\u3000-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7af]/;

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* A translated string, falling back to English key by key. */
function t(key) {
  const dict = STRINGS[state.lang] || STRINGS.en;
  const value = dict[key];
  return value === undefined ? STRINGS.en[key] : value;
}

/* Write a string into an element without disturbing its child elements —
   several targets carry a trailing dot, underline or badge that has to
   survive. `**bold**` becomes <strong>. */
function setText(el, value) {
  if (typeof value !== 'string') return;

  if (value.indexOf('**') >= 0) {
    el.innerHTML = value.split('**')
      .map((part, i) => (i % 2 ? '<strong>' + escapeHtml(part) + '</strong>' : escapeHtml(part)))
      .join('');
    return;
  }

  if (!el.firstElementChild) {
    el.textContent = value;
    return;
  }

  const texts = Array.from(el.childNodes)
    .filter((node) => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim());

  if (texts.length) {
    texts[0].nodeValue = value;
    texts.slice(1).forEach((node) => { node.nodeValue = ''; });
  } else {
    el.insertBefore(document.createTextNode(value), el.firstChild);
  }
}

function money(amount) {
  return SITE.funding.currency + amount.toLocaleString('en-US');
}


/* ── 3. Language ─────────────────────────────────────────────────────────── */

/* Stored choice first, then the browser's preference, then English. */
function initialLang() {
  let stored = null;
  try { stored = localStorage.getItem(LANG_STORAGE_KEY); } catch (err) { /* private mode */ }
  if (stored && STRINGS[stored]) return stored;

  const tag = ((navigator.languages && navigator.languages[0]) || navigator.language || 'en')
    .toLowerCase();

  if (/^zh/.test(tag)) return /(hant|tw|hk|mo|sg)/.test(tag) ? 'zh-Hant' : 'zh';

  const base = tag.split('-')[0];
  return STRINGS[base] ? base : 'en';
}

function buildLangMenu() {
  const menu = $('#lang-menu');
  if (!menu) return;

  menu.innerHTML = '';
  LANGUAGES.forEach((lang) => {
    const option = document.createElement('button');
    option.type = 'button';
    option.className = 'lang__option';
    option.dataset.lang = lang.code;
    option.setAttribute('role', 'menuitem');
    option.appendChild(document.createTextNode(lang.name));

    const tag = document.createElement('span');
    tag.className = 'lang__option-tag mono';
    tag.textContent = lang.tag;
    option.appendChild(tag);

    option.addEventListener('click', () => {
      setLang(lang.code);
      closeLangMenu();
    });

    menu.appendChild(option);
  });
}

function setLang(code) {
  state.lang = STRINGS[code] ? code : 'en';
  try { localStorage.setItem(LANG_STORAGE_KEY, state.lang); } catch (err) { /* private mode */ }
  applyLang();
}

function applyLang() {
  document.documentElement.lang = state.lang;

  $$('[data-i18n]').forEach((el) => setText(el, t(el.dataset.i18n)));

  paintHeroBrand();
  paintScenes();
  paintDownload();
  paintFunding();
  paintDonate();
  splitHeadline();

  const current = LANGUAGES.find((lang) => lang.code === state.lang) || LANGUAGES[0];
  const code = $('.lang__code');
  if (code) code.textContent = current.short;

  const custom = $('#donate-custom');
  if (custom) custom.placeholder = t('sup.customPh');
}

/* The wordmark is split into an accented half and the rest, and both halves
   are translated (旋影 / 工坊 in Chinese). */
function paintHeroBrand() {
  const brand = $('.hero__brand');
  const value = t('brand.hero');
  if (!brand || !value || typeof value !== 'object') return;

  brand.innerHTML = '';
  const accent = document.createElement('span');
  accent.className = 'hero__accent';
  accent.textContent = value.accent;
  brand.appendChild(accent);
  brand.appendChild(document.createTextNode(value.rest));
}

function paintScenes() {
  const scenes = SCENES[state.lang] || SCENES.en;

  $$('[data-scene]').forEach((el) => {
    const index = Number(el.dataset.scene);
    const scene = scenes[index] || SCENES.en[index];
    if (!scene) return;

    if (el.dataset.sceneField === 'title') el.textContent = scene.title;
    else if (el.dataset.sceneField === 'meta') el.textContent = '0' + (index + 1) + ' / ' + scene.place;
    else if (el.dataset.sceneField === 'category') el.textContent = scene.category;
  });

  $$('[data-scene-link]').forEach((el) => {
    el.href = SITE.sceneViewer + '?scene=' + el.dataset.sceneLink +
              '&lang=' + encodeURIComponent(state.lang);
  });
}


/* ── 4. Header, menus and anchors ────────────────────────────────────────── */

function initHeader() {
  const header = $('#site-header');
  if (!header) return;

  const update = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    header.classList.toggle('is-solid', y > HEADER_SOLID_AT);
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}

function openLangMenu() {
  const menu = $('#lang-menu');
  const button = $('#lang-button');
  if (!menu || !button) return;
  menu.hidden = false;
  button.setAttribute('aria-expanded', 'true');
}

function closeLangMenu() {
  const menu = $('#lang-menu');
  const button = $('#lang-button');
  if (!menu || !button) return;
  menu.hidden = true;
  button.setAttribute('aria-expanded', 'false');
}

function setMobileMenu(open) {
  const menu = $('#mobile-menu');
  const button = $('#menu-toggle');
  if (!menu || !button) return;
  menu.hidden = !open;
  button.setAttribute('aria-expanded', open ? 'true' : 'false');
}

function initMenus() {
  const langButton = $('#lang-button');
  if (langButton) {
    langButton.addEventListener('click', (event) => {
      event.stopPropagation();
      if (langButton.getAttribute('aria-expanded') === 'true') closeLangMenu();
      else openLangMenu();
    });
  }

  const menuToggle = $('#menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      setMobileMenu($('#mobile-menu').hidden);
    });
  }

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.lang')) closeLangMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    closeLangMenu();
    setMobileMenu(false);
  });
}

/* In-page links scroll rather than jump, offset so the target heading is not
   left underneath the fixed header. */
function initAnchors(lenis) {
  document.addEventListener('click', (event) => {
    const link = event.target.closest && event.target.closest('a[href^="#"]');
    if (!link) return;

    const id = link.getAttribute('href').slice(1);
    const target = id && document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    setMobileMenu(false);

    if (lenis) {
      lenis.scrollTo(target, {
        offset: ANCHOR_OFFSET,
        duration: 1.4,
        easing: (x) => 1 - Math.pow(1 - x, 4),
      });
    } else {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY + ANCHOR_OFFSET,
        behavior: 'smooth',
      });
    }
  });
}


/* ── 5. Download ─────────────────────────────────────────────────────────── */

function detectOS() {
  const ua = navigator.userAgent || '';
  if (/Mac/i.test(ua)) return 'macos';
  if (/Linux|X11/i.test(ua) && !/Android/i.test(ua)) return 'linux';
  return 'windows';
}

function downloadHref() {
  const assets = state.assets || {};
  /* macOS has no dedicated build yet, so it falls back to the Linux asset
     before falling back to the releases page. */
  return assets[state.os] ||
         (state.os === 'macos' ? assets.linux : null) ||
         SITE.releasesUrl;
}

function paintDownload() {
  $$('.os-tab').forEach((tab) => {
    const active = tab.dataset.os === state.os;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', active ? 'true' : 'false');
  });

  const label = $('[data-dl-label]');
  if (label) label.textContent = t('dl.for').replace('{os}', SITE.os[state.os].label);

  const button = $('#download-button');
  if (button) button.href = downloadHref();

  const values = SITE.os[state.os].spec;
  $$('#spec-grid .spec__value').forEach((el, i) => {
    if (values[i] !== undefined) el.textContent = values[i];
  });
}

function initDownload() {
  state.os = detectOS();

  $$('.os-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      state.os = tab.dataset.os;
      paintDownload();
    });
  });

  paintDownload();
  fetchReleaseAssets();
}

/* Best-effort: pick a downloadable asset per platform out of the latest
   GitHub release. Any failure leaves the releases-page fallback in place. */
function fetchReleaseAssets() {
  fetch(SITE.releasesApi)
    .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
    .then((release) => {
      const found = {};

      (release.assets || []).forEach((asset) => {
        const name = (asset.name || '').toLowerCase();
        if (!/\.(zip|7z|tar\.gz|tar\.xz|exe|msi|appimage|dmg|pkg)$/.test(name)) return;

        if (!found.windows && /win|msvc|exe|msi/.test(name)) found.windows = asset.browser_download_url;
        else if (!found.linux && /linux|ubuntu|appimage/.test(name)) found.linux = asset.browser_download_url;
        else if (!found.macos && /mac|osx|darwin|dmg/.test(name)) found.macos = asset.browser_download_url;
      });

      state.assets = found;
      paintDownload();
    })
    .catch(() => { /* offline, rate-limited, or no release yet */ });
}


/* ── 6. Support ──────────────────────────────────────────────────────────── */

function paintFunding() {
  const { raised, goal } = SITE.funding;
  const percent = (raised / goal) * 100;

  const raisedEl = $('#goal-raised');
  if (raisedEl) {
    const label = percent > 0 && percent < 1 ? '<1%' : Math.round(percent) + '%';
    raisedEl.textContent = money(raised) + ' / ' + money(goal) + ' · ' + label;
  }

  const toGo = $('#goal-togo');
  if (toGo) toGo.textContent = t('sup.toGo').replace('{amt}', money(Math.max(0, goal - raised)));

  /* A goal with any money in it always shows a sliver of bar. */
  const bar = $('#goal-bar');
  if (bar) bar.style.width = (raised > 0 ? Math.min(100, Math.max(percent, 0.8)) : 0) + '%';
}

function pickedAmount() {
  const custom = Number(state.custom);
  if (custom > 0) return custom;
  return SITE.tiers[state.tier >= 0 ? state.tier : 1];
}

function paintDonate() {
  const amount = pickedAmount();

  $$('.chip[data-freq]').forEach((chip) => {
    const active = chip.dataset.freq === state.freq;
    chip.classList.toggle('is-active', active);
    chip.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  $$('.tier[data-tier]').forEach((tier) => {
    const active = Number(tier.dataset.tier) === state.tier;
    tier.classList.toggle('is-active', active);
    tier.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  const custom = $('#donate-custom');
  if (custom) custom.classList.toggle('is-active', Number(state.custom) > 0);

  const amountLabel = $('#sponsor-amount');
  if (amountLabel) amountLabel.textContent = '$' + amount + (state.freq === 'recurring' ? '/mo' : '');

  const link = $('#sponsor-link');
  if (link) link.href = SITE.sponsorUrl + '?frequency=' + state.freq + '&amount=' + amount;
}

function initDonate() {
  $$('.chip[data-freq]').forEach((chip) => {
    chip.addEventListener('click', () => {
      state.freq = chip.dataset.freq;
      paintDonate();
    });
  });

  $$('.tier[data-tier]').forEach((tier) => {
    tier.addEventListener('click', () => {
      state.tier = Number(tier.dataset.tier);
      state.custom = '';
      const custom = $('#donate-custom');
      if (custom) custom.value = '';
      paintDonate();
    });
  });

  const custom = $('#donate-custom');
  if (custom) {
    custom.addEventListener('input', () => {
      state.custom = custom.value;
      state.tier = Number(custom.value) > 0 ? -1 : 1;
      paintDonate();
    });
  }

  paintDonate();
}


/* ── 7. Video ────────────────────────────────────────────────────────────── */

/* Autoplay is declared in the markup; this only nurses the cases browsers get
   fussy about — a tab restored from the background, a loop that stalls. */
function initVideos() {
  const videos = $$('video');
  if (!videos.length) return;

  const play = (video) => {
    const attempt = video.play();
    if (attempt && attempt.catch) attempt.catch(() => { /* autoplay refused */ });
  };

  videos.forEach((video) => {
    video.muted = true;
    play(video);
    video.addEventListener('canplay', () => play(video), { once: true });
    video.addEventListener('ended', () => { video.currentTime = 0; play(video); });
  });

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) videos.forEach(play);
  });

  /* The screen recording is letterboxed into a 16:10 placeholder until its
     real proportions are known. */
  const frame = $('#workspace-frame');
  const video = frame && $('video', frame);
  if (!video) return;

  const fit = () => {
    if (video.videoWidth && video.videoHeight) {
      frame.style.aspectRatio = video.videoWidth + ' / ' + video.videoHeight;
    }
  };
  video.addEventListener('loadedmetadata', fit);
  fit();
}


/* ── 8. Motion ───────────────────────────────────────────────────────────── */

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Wrap each word of the download headline so it can be coloured in one word
   at a time. Re-run whenever the language changes. */
function splitHeadline() {
  const head = $('#download-head');
  if (!head) return;

  /* Read the translation rather than the element: after a previous split
     its text content is already broken into spans. */
  const source = String(t('dl.head') || '').trim();
  if (!source) return;

  head.textContent = '';
  const spaced = !CJK_RE.test(source);

  source.split(/\s+/).forEach((word) => {
    const span = document.createElement('span');
    span.dataset.word = '';
    span.textContent = word;
    head.appendChild(span);
    if (spaced) head.appendChild(document.createTextNode(' '));
  });

  retimeHeadline();
}

let headlineTween = null;

function retimeHeadline() {
  const head = $('#download-head');
  if (!window.gsap || !head || reducedMotion) return;

  if (headlineTween) {
    if (headlineTween.scrollTrigger) headlineTween.scrollTrigger.kill();
    headlineTween.kill();
    headlineTween = null;
  }

  const words = head.querySelectorAll('[data-word]');
  if (!words.length) return;

  gsap.set(words, { color: 'rgba(10,10,10,.16)' });
  headlineTween = gsap.to(words, {
    color: '#0A0A0A',
    stagger: 0.5,
    ease: 'none',
    scrollTrigger: { trigger: head, start: 'top 82%', end: 'bottom 58%', scrub: 1 },
  });
}

function initMotion() {
  if (!window.gsap || !window.ScrollTrigger || reducedMotion) return null;

  let lenis = null;
  if (window.Lenis) {
    lenis = new Lenis({ lerp: 0.05 });
    /* Lenis drives the scroll position itself; native smooth scrolling would
       fight it. */
    document.documentElement.style.scrollBehavior = 'auto';
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  retimeHeadline();

  /* Showcase cards shrink and dim as the next one slides over them. */
  const cards = $$('.scene');
  cards.forEach((card, i) => {
    if (i === cards.length - 1) return;
    gsap.fromTo(card,
      { scale: 1, opacity: 1 },
      {
        scale: 0.93 - (cards.length - 2 - i) * 0.005,
        opacity: 0.55,
        ease: 'power4.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: card.parentElement,
          start: 'top 90px',
          endTrigger: cards[i + 1].parentElement,
          end: 'top 120px',
          scrub: 0.6,
        },
      });
  });

  /* Headings and lead paragraphs rise into place once. Anything already on
     screen at load is simply shown. */
  $$('[data-reveal]').forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.96) {
      gsap.set(el, { y: 0, opacity: 1, clearProps: 'transform' });
      return;
    }
    gsap.fromTo(el,
      { y: 26, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: 'power4.out',
        immediateRender: false,
        scrollTrigger: { trigger: el, start: 'top 96%', once: true },
      });
  });

  return lenis;
}


/* ── 9. Boot ─────────────────────────────────────────────────────────────── */

function init() {
  buildLangMenu();
  state.lang = initialLang();

  /* Registered before anything schedules a ScrollTrigger. */
  if (window.gsap && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  initHeader();
  initMenus();
  initDownload();
  initDonate();
  initVideos();

  applyLang();

  const lenis = initMotion();
  initAnchors(lenis);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
