# Bryant Enterprises website

A complete static website for https://bryantenterprises.us, with plain HTML, CSS, and JavaScript. No installation, build tools, subscription, or external assets required.

## Upload to GitHub and Cloudflare Pages

1. Unzip the delivery. Upload the contents of `bryant-enterprises` to your GitHub repository root. Keep the `dist` folder intact. This delivery has not been pushed or deployed.
2. In your existing Cloudflare Pages project, use:
   - Framework preset: None
   - Build command: `exit 0` (only these six characters, without a label)
   - Build output directory: `dist`
   - Root directory: leave blank when these files are at the repository root
   - Production branch: your actual production branch, usually `main`
3. Save and redeploy. Check the temporary Pages URL and all five pages.
4. Add `bryantenterprises.us` through the project's Custom domains screen if it is not already connected. The site already uses that domain for canonical URLs and the sitemap.

These settings follow Cloudflare's official static HTML guide: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

If replacing your existing root-level HTML site, change the build output directory from `.` to `dist`. Only the contents of `dist` are published; this guide and the checklist stay outside the website. Do not upload the enclosing ZIP into GitHub as a substitute for the extracted files.

Keep working email DNS intact. This website does not require changing MX, SPF, DKIM, DMARC, or mail host records. Before any nameserver migration, preserve and verify your existing email records.

## Files

- `dist/index.html`: homepage
- `dist/lawn-care/index.html`: Bryant Lawn Care
- `dist/tech-repair/index.html`: Bryant Tech Repair
- `dist/welding/index.html`: Bryant Welding
- `dist/contact/index.html`: contact and email helper
- `dist/404.html`: custom not-found page
- `dist/assets/styles.css`: shared design and responsive layouts
- `dist/assets/site.js`: mobile navigation and email helper
- `dist/assets/favicon.svg`: brand icon
- `dist/robots.txt` and `dist/sitemap.xml`: search discovery
- `dist/_headers`: Cloudflare security headers
- `BUSINESS-DETAILS.md`: editable checklist of unknown business information
- `.openai/hosting.json`: optional local Sites metadata; ignored by Cloudflare Pages

## Content editing

Edit HTML directly; every page remains readable with JavaScript disabled. Header and footer markup is repeated across pages intentionally to avoid a runtime or build dependency. Update shared text consistently in all six HTML files. Update the contact address in `dist/assets/site.js` too if it changes. Colors, spacing, and typography are centralized in `dist/assets/styles.css`.

No stock photos, invented testimonials, credentials, service guarantees, prices, or location claims are included. Service pages invite customers to discuss their needs without promising an unconfirmed scope. Add only verified business information using the checklist.

## Contact behavior

The form prepares a `mailto:` email. It does not submit, store, or send messages itself. Visitors must review and send through their email app. The direct email address remains available without JavaScript and for webmail users. Service-page buttons preselect the relevant division. There are no trackers, cookies, third-party fonts, or embedded services in this code. Hosting-provider request logging is separate from the website.

## Local preview and final launch checks

Serve `dist` with any static HTTP server. For example, from this folder, `python3 -m http.server 8000 --directory dist`, then visit http://localhost:8000. Use a web server rather than double-clicking the HTML files because links are root-relative.

Before launch, review the business checklist, try navigation on a phone and with a keyboard, and prepare an inquiry for each division. Confirm your email app opens and send yourself a test inquiry. Check an unknown URL shows the 404 page and verify HTTPS on the custom domain. The code has passed local file/reference and JavaScript syntax checks; live deployment, email delivery, and browser interaction checks have not been performed.
