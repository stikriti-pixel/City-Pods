Build the City Pods company website as a static site I can deploy to Netlify. Work in the current folder.

## The business
City Pods ("City Pods · Urban Living") is a Philadelphia-area residential design-build company: new construction (single- and multi-family) and full home renovations, kitchens, baths, additions and basements. Three services: Design, Construction, Project Management. Service area: Philadelphia plus Chester, Delaware and Montgomery counties.
- Phone: (610) 701-1071
- Email: info@citypods.com (placeholder until I give you the real one)
- Office: Philadelphia, PA · Hours: Mon–Fri, 8 am – 5 pm
- Instagram: @citypodsllc (https://www.instagram.com/citypodsllc/)
- General Contractor License #053687 · General liability & workers' comp · Written workmanship warranty

## Tech
- Plain HTML, CSS and vanilla JS. No framework, no build step. Files: `index.html`, `styles.css`, `main.js`, `img/`, `netlify.toml`.
- Fonts from Google Fonts: Outfit (300–800) for headings, logo, labels and buttons; Instrument Sans (400–600) for body text.
- Fully responsive: 4-column layouts on desktop, 3 at ≤1080px, 2 at ≤900px, 1 at ≤600px. No horizontal scrolling at 390px wide.
- Accessible: real buttons and links, alt text on every photo, visible focus outlines, `prefers-reduced-motion` respected.
- SEO: `<title>City Pods | Design-Build Contractor in Philadelphia</title>`, a meta description that mentions the counties, the license number and the phone number, Open Graph tags, and LocalBusiness/GeneralContractor JSON-LD with the phone, area served and Instagram link.

## Photos
I will put my project photos in `img/` using the filenames listed below. Write a small script, `scripts/optimize-images.(py|js)`, that resizes every photo to at most 1400px on the long side, saves it as a progressive JPEG at about quality 82, and strips EXIF data. Use each photo's real width and height in the `<img>` tags. Lazy-load everything below the hero. If a listed file is missing, show a neutral placeholder tile and print a list of the missing files. Do not invent or download stock photos.

## Look and feel
Black and yellow, construction-signage feel. The page alternates black sections with light stone sections, and photos run edge to edge.
Colors:
- ink `#0d0d0c` (main black), ink-2 `#171715`, ink-3 `#22221f`
- paper `#f2f1ec`, paper-2 `#e6e4dc`
- stone `#5f5d56` (gray text on light), mist `#a7a59c` (gray text on dark)
- brand yellow `#d6c531`
- dark borders `rgba(242,241,236,.13)`, light borders `#d6d3c9`

The site uses this one dark design everywhere and does not switch for dark mode. Headlines are large and tight (Outfit 700–800, negative letter-spacing). Small uppercase "eyebrow" labels have wide letter-spacing and a short yellow bar in front. Buttons are square-cornered: yellow with black text, or a white outline. On light sections, a highlighted word gets a yellow underline band; on dark sections, it is yellow text.

**Logo:** a text wordmark, "C▮TY PODS". The letter I is replaced by a solid yellow vertical bar (about 0.16em wide and 0.71em tall, sitting on the baseline). Outfit 800. Below it, "URBAN LIVING" in small, widely spaced uppercase. It appears in the header (26px), the footer (40px) and the favicon (a black square with "CP" between two yellow vertical bars, as an SVG).

## Page sections, in order
1. **Sticky header**: black, slightly see-through with a blur. Logo on the left. Links: Services, Projects, Process, About, Contact. A yellow "Free consultation" button. At ≤900px the links collapse into a "Menu" button that opens a dropdown.
2. **Hero** (black): eyebrow "Philadelphia area builder". H1 on three lines: "Design." "Build." "Deliver." with "Deliver." in yellow. Lede: "New homes and full renovations across Philadelphia and its suburbs. One team takes your project from the first sketch to the final walkthrough." Buttons: "Book a free consultation →" (yellow, links to #contact) and "See our work" (outline, links to #projects). On the right, a full-height photo slideshow with a 6px yellow bar on its left edge. It crossfades through exterior-triplex, exterior-modern-infill, kitchen-island, interior-open-plan, kitchen-two-tone and exterior-porchfront every 2 seconds, with a slight zoom-out on each photo. No captions on the slides. Thin progress bars at the top fill in yellow and are clickable to jump to a slide. It pauses when the tab is hidden and stays still under reduced motion. On mobile the photo stacks above the text. Under the hero, a 4-column trust strip: Design + build / One contract, one point of contact · Permits handled / L&I, zoning and historic review · Licensed & insured / General Contractor Lic. #053687 · Fixed-price proposals / Itemized before work begins.
3. **Services** (light): eyebrow "Services". H2 "One team. Start to finish." Intro: "Hire us for all three, or bring your own architect and have us build and manage. Design decisions, budget and schedule stay connected either way." Three white cards, each with a 4:3 image, a yellow corner label, a title, a one-line description and four bullets with yellow square markers:
   - **Design** (image `svc-design.svg`): "Designed for you, within your budget and applicable code." Bullets: Existing-conditions survey and drawings; Floor plans, elevations and 3D views; Finish and fixture selections; All required permits.
   - **Construction** (image `svc-construction.jpg`, a house under construction): "Our crews and trusted trade partners, supervised every day on site." Bullets: Demolition, structure and framing; Mechanical, electrical and plumbing; Kitchens, baths and interior finishes; Roofing, masonry and exteriors.
   - **Project management** (image `svc-pm.svg`): "A dedicated manager who owns the schedule, budget and communication." Bullets: Safety and quality controls; Weekly schedule and budget updates; Inspections and change-order control; Punch list, closeout and warranty.
4. **What we build** (black): H2 "New construction & remodeling". Text: "Construction has its own conditions: party walls, narrow lots, century-old framing and tight street access. We plan for them from day one." Two lists, each item with a bold name and a gray description:
   - New construction: Single-family / Single and multi-lot builds on city parcels · Multi-family / Duplexes, triplexes and larger buildings for owners and investors.
   - Remodeling: Full home renovation / Gut rehabs of homes, twins and singles · Kitchens / Layout changes, cabinetry, counters, appliances · Bathrooms / Primary suites, hall baths and powder rooms · Additions & basements / Rear and third-floor additions, lower levels.
   - On the right, the photo `kitchen-island.jpg` with a 6px yellow bar on its right edge.
5. **Projects** (light): eyebrow "Projects". H2 "Sample work". Text: "New construction and remodeling completed by City Pods in the Philadelphia area. Tap any photo to enlarge it."
   - Rounded filter chips with live counts: All, Exteriors, Kitchens, Bathrooms, Interiors. The active chip is black with a yellow count.
   - Grid: 4 columns, 260px row height, 12px gap, `grid-auto-flow: dense`. The feature tile spans 2×2 and wide tiles span 2 columns, but only when the "All" filter is active.
   - Each tile shows a bottom gradient with a small yellow uppercase category and a white title, and the image zooms slightly on hover.
   - **Requirement:** in the "All" view, every row, including the last, must be completely filled at 4, 3 and 2 columns. Check this with a script and adjust tile sizes if needed.
   - Clicking a tile opens a `<dialog>` lightbox with prev/next/close buttons, arrow-key navigation, and a caption reading "Category · Title". The lightbox only moves through the photos the current filter shows.
   - Tiles, in this order (filename | filter | size | category | title):
```
exterior-triplex.jpg | ext | feature | New construction | Multi-family
kitchen-studio-open.jpg | kit | wide | Kitchen | Studio kitchen & living
bath-glass-niche.jpg | bath | wide | Bathroom | Marble-look bath with glass niche
kitchen-island.jpg | kit | wide | Kitchen | Kitchen with island
exterior-modern-infill.jpg | ext | std | New construction | Single-family
exterior-brick-renovation.jpg | ext | std | Renovation | Full home renovation
exterior-rear-patio.jpg | ext | std | New construction | Rear elevation & patio
exterior-walkway.jpg | ext | wide | Hardscape | Bluestone walkway & plantings
bath-marble-tub.jpg | bath | std | Bathroom | Marble-look suite with soaking tub
interior-basement-lounge.jpg | int | std | Interior | Basement living & kitchenette
bath-powder-vessel.jpg | bath | std | Bathroom | Powder room with vessel sink
interior-open-plan.jpg | int | std | Interior | Open-plan first floor
interior-open-stair.jpg | int | std | Interior | Open-riser staircase
kitchen-white.jpg | kit | std | Kitchen | White shaker kitchen
exterior-rowhome.jpg | ext | std | Renovation | Full home renovation
kitchen-two-tone.jpg | kit | std | Kitchen | Two-tone kitchen
bath-floating-vanity.jpg | bath | std | Bathroom | Floating double vanity
exterior-porchfront.jpg | ext | std | Renovation | Full home renovation
bath-double-vanity.jpg | bath | wide | Bathroom | Double-vanity bath
interior-basement.jpg | int | std | Interior | Finished basement
bath-vessel-vanity.jpg | bath | std | Bathroom | Glass vessel vanity
kitchen-gray.jpg | kit | std | Kitchen | Gray shaker kitchen
bath-hall.jpg | bath | std | Bathroom | Hall bath
interior-living.jpg | int | std | Interior | Living room
bath-tile-surround.jpg | bath | std | Bathroom | Tiled tub surround
bath-lit-mirror.jpg | bath | std | Bathroom | Marble-look tub surround
interior-open-kitchen.jpg | int | std | Interior | Open first floor
kitchen-gray-granite.jpg | kit | std | Kitchen | Gray kitchen with granite
kitchen-copper-hood.jpg | kit | wide | Kitchen | Copper hood galley kitchen
kitchen-side-by-side.jpg | kit | std | Kitchen | Kitchen with breakfast bar
interior-slat-wall.jpg | int | wide | Interior | Slat wall with fireplace
bath-rain-shower.jpg | bath | wide | Bathroom | Rain shower suite
exterior-roof-deck.jpg | ext | wide | New construction | Roof deck
bath-wood-vanity.jpg | bath | std | Bathroom | Slatted wood vanity
kitchen-compact.jpg | kit | wide | Kitchen | Compact gray kitchen
bath-soaking-tub.jpg | bath | wide | Bathroom | Freestanding soaking tub
bath-barn-vanity.jpg | bath | std | Bathroom | Barn-door double vanity
kitchen-cherry-granite.jpg | kit | std | Kitchen | Cherry & granite kitchen
exterior-navy-rowhome.jpg | ext | std | Renovation | Multi-unit rowhome conversion
roof-flat-membrane.jpg | ext | std | Roofing | Flat roof membrane
kitchen-gray-island.jpg | kit | wide | Kitchen | Gray kitchen with island
interior-entry-stair.jpg | int | wide | Interior | Entry hall & staircase
bath-glass-shower.jpg | bath | std | Bathroom | Glass shower & walnut vanity
bath-powder-rustic.jpg | bath | std | Bathroom | Rustic oak powder room
```
6. **Process** (black): eyebrow "How it works". H2 "First meeting to move-in". Text: "Every project follows the same five steps, so you always know what comes next and what we need from you." Five columns, each numbered 01–05 in large, light yellow numerals:
   - Consultation: We visit the property, hear your goals and talk through budget range and timing.
   - Design: Concept plans, then detailed drawings and selections once the direction is set.
   - Proposal & permits: A fixed-price, itemized proposal. We file and track permits and zoning approvals.
   - Construction: Your project manager runs the site and sends weekly progress, schedule and budget updates.
   - Walkthrough: Final inspections, punch list, closeout documents and your warranty package.

   Below the steps, a dark **Selections** panel. On the left is a 3×2 grid of square photos with no captions: sw-fridge, sw-cabinet, sw-tub, sw-vanity, sw-handrail, sw-hardwood. On the right: eyebrow "Selections", H3 "See the real materials before anything is ordered", and the text "During design we walk you through countertop slabs, cabinet door styles and tile, so you choose from the actual materials. Your selections are priced into the proposal before work starts."
7. **About** (light, `id="about"`): eyebrow "About City Pods". Large statement: "We keep design, construction and project management under one roof, so the people drawing your plans are the people pricing and building them." Body: "Most projects stall between the architect, the contractor and the permit office. City Pods was started to make building and renovating in Philadelphia simpler for homeowners." On the right, a credentials list: General contractor license #053687 · Insurance: General liability & workers' comp · Warranty: Written workmanship warranty. Below that, a full-width 16:9 `<video controls preload="metadata" playsinline>` with `img/city-pods-video.mp4`, the poster `img/city-pods-video-poster.jpg` and a yellow left edge, captioned "WATCH · City Pods in 60 seconds".
8. **Built for the Philly Area** (still inside the About anchor; black): a tall full-bleed photo `philly-oldcity.jpg` with a dark gradient. Eyebrow "Rooted in Philadelphia". H2 "Built for the Philly Area." with "Philly Area." in yellow. Lede: "From trinity houses on cobblestone blocks to stone colonials on the Main Line, we provide design-build services that fit Philadelphia and its suburbs: their streets, their codes and their character."
   - Yellow subhead "Philadelphia", then 4 tiles (3:4) with title and subtitle: Center City / Condos, townhomes, historic rehabs (philly-rittenhouse) · Fishtown & River Wards / New infill and roof decks (philly-fishtown) · Society Hill & Old City / Rowhome renovations (philly-rowstreet) · South Philly / Gut rehabs and additions (philly-italian-market).
   - Yellow subhead "Suburban counties", then 3 tiles (4:3) in this order: Chester County / West Chester, Kennett Square, Malvern (county-chester) · Delaware County / Media, Swarthmore, Radnor (county-delaware) · Montgomery County / Main Line, Conshohocken, Jenkintown (county-montgomery).
9. **CTA band** (yellow background): "Ready to build?" / "Tell us about your home. We'll schedule a free on-site consultation." with a black "Start your project →" button.
10. **Contact** (black, `id="contact"`): H2 "Start your project". On the left, the contact details (Email, Phone, Office, Hours, Instagram link), shown as selectable text, plus `tel:` and `mailto:` links. On the right, a dark form, set up as a **Netlify Form** (`name="consultation"`, `data-netlify="true"`, honeypot field) with: Name, Phone, Email, Project type (Full home renovation / Kitchen / Bathroom / Addition or basement / New construction / Other), Property ZIP, Budget range (Not sure yet / Under $50,000 / $50,000 – $150,000 / $150,000 – $400,000 / $400,000+), About your project. The submit button reads "Request consultation →". Validate the name and email fields, then show an inline thank-you message.
11. **Footer** (near-black `#080807`): logo, links to every section plus Instagram with an icon, "© 2026 City Pods · Philadelphia, PA".

## The two illustrations (build as SVG files, 800×600)
- `img/svc-design.svg`: an architect-style first-floor plan of a narrow rowhome on a **black** (`#0d0d0c`) background with a faint charcoal grid. Draw it in off-white `#f2f1ec` lines: exterior walls, a stair, living, dining with a table, a kitchen with an island highlighted in translucent yellow, and a powder room with a door swing. Add gray dimension strings (overall 48'-0" and 16'-0"), a north arrow, a yellow dashed section-cut line marked "A", and a title block reading "FIRST FLOOR PLAN · ROWHOME RENOVATION · SCALE 1/4" = 1'-0" · A-101". Add the small note "ILLUSTRATIVE · NOT FOR CONSTRUCTION". Use a monospace font.
- `img/svc-pm.svg`: a charcoal (`#2a2a26`) frame holding a light card titled "WEEKLY PROJECT UPDATE / Week 9 of 16" with a black "● On schedule" pill. Under it, a Gantt chart over weeks W1–W16 with these rows: Demolition, Framing, MEP rough-in and Inspections (complete, black bars); Insulation & drywall (in progress, yellow bar, row in bold); Finishes and Punch list (upcoming, dashed outline bars). Mark a "TODAY" line at about week 8.5. Footer columns: THIS WEEK / Insulation & drywall · NEXT MILESTONE / Drywall finish · INSPECTIONS / All passed to date.

## Deploy
- Add a `netlify.toml` with long cache headers for `/img/*` and security headers.
- Add a `README.md` with steps for running the site locally and for deploying it: Netlify CLI `netlify deploy --prod`, or connecting a GitHub repo, plus pointing a custom domain such as citypods.com at it.
- If I'm signed into the Netlify CLI, deploy it for me and give me the live URL.

## Before you finish
Serve the site locally. Take screenshots at 1440px and 390px wide and look at them. Confirm there are no broken images or console errors, the gallery's bottom row is full at 4, 3 and 2 columns, the slideshow, filters, lightbox and mobile menu all work, and the form posts. Then list what still needs my input: the real email address, any missing photos, and permission for the listing and county photos.
