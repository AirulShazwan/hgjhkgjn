# IQ-SITE 2026 Website (Static)

This is a simple **static** website (HTML + external CSS + JS) for:
**The International Conference on Quality, Sustainability & Innovation in Science and Technology Education (IQ-SITE 2026)**.

## How to run (no server needed)
1. Unzip the folder
2. Open `index.html` in your browser

> Tip: For best results, open with a local web server (optional), e.g. VS Code Live Server.

## Where to edit
- **Styles:** `assets/css/style.css`
- **Animations + countdown:** `assets/js/main.js`
- **Pages:** `index.html` and `pages/*.html`
- **Images:** `assets/img/*` (replace placeholders with your official images/posters/logos)

## Replace images
Currently using placeholders:
- `assets/img/pwcc.jpg` (venue)
- `assets/img/hero.jpg` (hero)

Just replace files with the same names to update everywhere.

## Countdown date
In `assets/js/main.js`:
`new Date("2026-09-01T08:00:00")`
Change if you want a different time.

## New placeholders added
You can replace these files anytime (large images are auto-fitted by CSS):
- `assets/img/logo.jpg` (IQ-SITE logo in navbar)
- `assets/img/logo-edic.jpg` (EDIC logo on EDIC page)
- `assets/img/keynote-1.jpg`, `assets/img/keynote-2.jpg`, `assets/img/keynote-3.jpg` (speaker photos)
