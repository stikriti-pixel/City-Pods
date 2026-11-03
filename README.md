# City Pods website

Static website for **City Pods · Urban Living**, a Philadelphia-area design-build company (design, construction and project management for new homes and full home renovations).

## Structure
- `index.html`: the complete site (HTML, CSS and JS in one file)
- `img/`: photos, illustrations (`svc-design.svg`, `svc-pm.svg`) and the web copy of the 60-second video
- `assets/video-source/`: full-quality 60-second brand video (not used by the site)
- `assets/brand/`: logo JPEGs and Instagram graphics
- `docs/City-Pods-Claude-Code-Prompt.md`: full written spec of the site
- `netlify.toml`: hosting config (caching and security headers)

## Run locally
Open `index.html` in a browser, or serve the folder:
```
python -m http.server 8000
```
then visit http://localhost:8000

## Deploy (Netlify)
- **Drag and drop:** go to https://app.netlify.com/drop and drop this folder.
- **From GitHub:** push this repo to GitHub, then in Netlify choose *Add new site → Import from Git* and pick the repo. No build command; the publish directory is `.`.
- **Custom domain:** Netlify → Domain settings → add `citypods.com` and follow the DNS steps.

## Before launch
- Replace the placeholder email `info@citypods.com`.
- Connect the contact form (for example Netlify Forms: add `name="consultation" data-netlify="true"` to the `<form>`).
- Confirm usage rights for listing photos and county photos.
