# Brivanta Energy website

Next.js 14 static site (no server, no database), built to match the approved design PDF.
Self-hosted Inter font, inline SVG art, zero third-party scripts or requests.

## Run locally
    npm install
    npm run dev          # http://localhost:3000

## Deploy (Cloudflare Workers static assets, as configured in wrangler.jsonc)
    npm install
    npm run deploy       # builds to ./out and runs `wrangler deploy`

Or connect the repo in Cloudflare: build command `npm run build`, output directory `out`.
Any static host works (Netlify, Vercel, S3) because the site is plain HTML in `out/`.

## Before you go live (all in `lib/data.js`)
1. `site.email`: set the inbox that should receive enquiries.
2. `site.url`: confirm the final domain (currently https://www.brivantaenergy.in).
3. Optional `site.phone` and `site.whatsapp`: they appear on the page only once filled in.
4. Optional `site.formEndpoint`: paste a form-service URL (Formspree, Web3Forms, Basin or your own Worker)
   that accepts a JSON POST. When empty, the form opens the visitor's email app addressed to `site.email`.

## Updating content
Every number, label and source lives in `lib/data.js`, each with its publication date.
Refresh the `pulse`, `solarMix`, `windStates`, `solarAdds` and `sources` blocks when MNRE or Parliament publish new figures, then redeploy.
The Impact Estimator assumptions (solar yield, grid emission factor, avoided tariff, kWh per visit) are in `model` and `siteTypes`.

## Structure
    app/page.js        page sections        app/components.js  header, counters, estimator, form
    app/art.js         SVG illustrations    app/globals.css    all styling
    lib/data.js        all content          lib/india.js       dotted India map generator
