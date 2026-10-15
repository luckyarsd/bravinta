# Brivanta Energy website

A static Next.js 14 site: no server, no database, no third-party scripts.
Fonts are bundled, and all artwork is inline SVG.

## Run it
    npm install
    npm run dev        # local preview at http://localhost:3000
    npm run build      # writes the finished site to ./out

## Deploy
Cloudflare (what `wrangler.jsonc` is set up for):

    npm run deploy

Or connect the repo to Cloudflare Pages / Netlify / Vercel with build command `npm run build`
and output folder `out`. For GitHub Pages, publish the contents of `out`.

`npm run build` also moves Next's `_next` folder to `assets` (see `scripts/postbuild.mjs`).
Some hosts refuse to serve folders starting with an underscore, which shows up as a plain,
unstyled page. Always upload the build from `out`, never the raw project folder.
Open the site through a web server or your host, not by double-clicking `index.html`.

## Before going live
Everything below is in `lib/data.js`.

1. `site.email`: the inbox that should get enquiries.
2. `site.url`: the final domain (currently https://www.brivantaenergy.in).
3. `site.phone` and `site.whatsapp`: optional, and only shown once filled in.
4. `site.formEndpoint`: optional. Paste a form service URL (Formspree, Web3Forms, etc.) that accepts
   a JSON POST and enquiries go straight there. If it's empty, the form opens the visitor's email app.

## Keeping the numbers current
The figures (solar, wind, EV chargers, registrations) are in `lib/data.js` with the date and
source next to each one. When MNRE or Parliament publish new numbers, edit them there and redeploy.
The estimator's assumptions are in the `model` block in the same file.

## Where things are
    lib/data.js        all copy, figures, sources
    lib/india.js       builds the dotted India map
    app/page.js        the page, section by section
    app/components.js  header, counters, estimator, enquiry form
    app/art.js         SVG illustrations
    app/globals.css    styles (mobile rules are at the bottom)
