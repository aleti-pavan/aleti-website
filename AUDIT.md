# ALETI Website Audit

## 1. Website Audit

Inspected site: `https://aleti.io/`

The current ALETI site is built with GoDaddy Website Builder. The HTML declares `Starfield Technologies; Go Daddy Website Builder 8.0.0000` and loads GoDaddy-hosted CSS, fonts, image transforms, widget scripts, signals/analytics, cookie banner logic and a floating messaging widget.

Current pages and routes found:

- `/` - Home
- `/about-us` - About Us
- `/services` and `/services-1` - duplicate Services links
- `/contact-us` - Contact details and GoDaddy/reCAPTCHA form
- `/privacy-policy` - placeholder privacy page
- `/devops-%26-automation`
- `/devsecops-%26-security`
- `/cloud-migration`
- `/platform-engineering`
- `/cloud-finops`
- `/cloud-native-applications`

Preserved business identity and content:

- Business name: ALETI
- Legal/company name: Aleti Software Systems Ltd
- Core positioning: Digital Transformation Consultancy
- Core CTA/message: We deliver automation
- Email: `info@aleti.io`
- Secondary email: `aletisoftwaresystems@gmail.com`
- Address: Aleti Software Systems Ltd, Cobalt 3.1, Silver Fox Way, Cobalt Business Park, Newcastle Upon Tyne, NE27 0QJ
- Hours: Monday - Friday: 9am - 5pm; Saturday - Sunday: Closed
- Services: DevOps & Automation, DevSecOps & Security, Cloud Migration, Platform Engineering, Cloud FinOps, Cloud Native Applications

## 2. Static/Dynamic Percentage Estimate

This website appears to be approximately **90-95% static**.

Static parts:

- Marketing copy
- Home hero
- About content
- Service descriptions
- Contact details
- Business address and opening hours
- Privacy placeholder
- Navigation and footer
- SEO metadata

Dynamic or third-party parts:

- GoDaddy contact form
- reCAPTCHA on the contact form
- GoDaddy messaging widget
- GoDaddy cookie banner
- GoDaddy analytics/signals scripts
- GoDaddy image transformation URLs
- Optional map/directions widget behavior

GoDaddy-specific dependencies:

- GoDaddy Website Builder runtime scripts
- `img1.wsimg.com` stock/image transformation URLs
- GoDaddy PWA icons and manifest assets
- GoDaddy footer attribution
- GoDaddy editor and widget data attributes
- GoDaddy-hosted form and messaging behavior

## 3. Migration Plan

Rebuild the website as a lightweight static site that can be hosted on GitHub Pages, Netlify, Vercel or Cloudflare Pages. Preserve the core ALETI content, consolidate duplicate navigation, improve visual hierarchy, correct visible copy issues, and keep old route compatibility with redirect pages.

Anything GitHub Pages cannot do natively:

- Process form submissions
- Store messages in a database
- Run a backend booking/payment/login system

Cheapest replacements:

- Formspree, Web3Forms, Basin or Netlify Forms for contact form processing
- `mailto:` fallback for zero-cost form behavior
- Google Maps link rather than embedded map if no dynamic map is required

## 4. Recommended Tech Stack

Recommended stack: **plain HTML, CSS and small JavaScript**.

Why this is best:

- The site is overwhelmingly static.
- GitHub Pages can host it directly from the repository root.
- No build step or dependency maintenance is needed.
- Performance is strong because there is no framework bundle.
- It is easy for a small business owner or developer to edit.

Limitations:

- Contact forms require an external provider or mail fallback.
- Any future booking, payments, login, CMS or dashboards would need a third-party service or backend.

## 5. Rebuilt Website Files

Created files:

- `index.html` - rebuilt homepage with About, Services and Contact sections
- `styles.css` - responsive visual system and layout
- `script.js` - mobile navigation and contact form fallback
- `assets/aleti-cloud-automation-hero.png` - project-local generated hero image
- `assets/favicon.svg` - favicon support
- `privacy-policy/index.html` - ALETI-specific privacy policy page
- Old path redirects for `/about-us/`, `/services/`, `/contact-us/` and service detail URLs
- `robots.txt`
- `sitemap.xml`
- `CNAME`
- `README.md`
- `AUDIT.md`

## 6. Contact Form Setup

The form is configured for Formspree by default, with a `mailto:` fallback while the placeholder form ID remains.

To activate Formspree:

1. Create a form at `https://formspree.io/`.
2. Copy the form endpoint.
3. Replace `https://formspree.io/f/your-form-id` in `index.html`.
4. Test a submission.

Alternative providers: Web3Forms, Basin, Netlify Forms.

## 7. GitHub Deployment Instructions

1. Create a GitHub repository.
2. Add all project files to the repository.
3. Commit and push to the default branch, usually `main`.
4. In GitHub, open Settings > Pages.
5. Under "Build and deployment", choose "Deploy from a branch".
6. Select branch `main` and folder `/root`.
7. Save.
8. GitHub Pages will provide a URL after deployment.
9. Add `aleti.io` as the custom domain.
10. Confirm "Enforce HTTPS" once DNS has propagated.

## 8. GoDaddy Domain DNS Instructions

For an apex domain like `aleti.io`, use GitHub Pages A records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Recommended DNS setup in GoDaddy:

1. Go to GoDaddy DNS management for `aleti.io`.
2. Remove old website-builder forwarding or builder-specific records that conflict.
3. Add or update the `A` records for `@` to the four GitHub Pages IP addresses above.
4. Add a `CNAME` record for `www` pointing to your GitHub Pages host, usually `<username>.github.io`.
5. Keep the repository `CNAME` file set to `aleti.io`.
6. Wait for DNS propagation.
7. In GitHub Pages settings, verify the domain and enable HTTPS.

## 9. Final Checklist

- Static site built
- GoDaddy runtime removed
- Original company identity preserved
- Core service content preserved
- Contact details preserved
- Responsive layout added
- SEO title and meta description added
- Open Graph metadata added
- LocalBusiness schema added
- Favicon added
- Sitemap and robots added
- Contact form provider strategy documented
- Legacy URLs preserved through redirects
- GitHub Pages custom domain file added
