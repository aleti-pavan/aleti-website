# ALETI Static Website

This is a rebuilt static website for ALETI, designed to replace the current GoDaddy Website Builder site and run on GitHub Pages or another low-cost static host.

## Project Overview

The site is built with plain HTML, CSS and a small amount of JavaScript. It preserves ALETI's core content, services, contact details and company identity while removing GoDaddy-specific builder scripts and improving design, responsiveness, SEO and maintainability.

## Files

- `index.html` - main website
- `styles.css` - responsive styling
- `script.js` - mobile menu and contact form fallback
- `assets/` - favicon and hero image
- `privacy-policy/` - privacy policy page
- Legacy route folders - redirect old GoDaddy paths to the rebuilt site
- `sitemap.xml` and `robots.txt` - SEO support
- `CNAME` - custom domain for GitHub Pages
- `AUDIT.md` - migration audit and deployment notes

## Run Locally

Because this is a static site, you can open `index.html` directly in a browser.

For a local server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Build

No build step is required.

## Deploy to GitHub Pages

1. Create a GitHub repository.
2. Push these files to the repository root.
3. Open repository Settings > Pages.
4. Choose "Deploy from a branch".
5. Select `main` and `/root`.
6. Save.
7. Add `aleti.io` as the custom domain.
8. Enable HTTPS once GitHub confirms the domain.

## Connect the Custom Domain

The included `CNAME` file is set to:

```text
aleti.io
```

In GoDaddy DNS, point the apex domain to GitHub Pages:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Add a `www` CNAME pointing to your GitHub Pages host, usually:

```text
<username>.github.io
```

## Contact Form Setup

GitHub Pages cannot process form submissions by itself. The form currently uses a Formspree placeholder with a `mailto:` fallback.

To activate the form:

1. Create a Formspree form.
2. Replace this in `index.html`:

```text
https://formspree.io/f/your-form-id
```

with your real endpoint.

Other good static form providers include Web3Forms, Basin and Netlify Forms.

## Replace Images or Content

- Replace `assets/aleti-cloud-automation-hero.png` with any preferred ALETI-owned image.
- Keep the same filename to avoid code edits, or update references in `index.html`.
- Update service copy in the `#services` section of `index.html`.
- Update contact details in the `#contact` section and LocalBusiness schema.

## Notes

The privacy page includes a practical ALETI-specific privacy policy for a static UK business website. Review it with a qualified adviser before relying on it for legal compliance, especially if analytics, form providers, maps or chat widgets are added.
