# Wedding Invitation

Static site: HTML + CSS + JavaScript. No build step.

## Edit details
Change names, dates, venue, events and RSVP number in `js/config.js`.
Colours and fonts: top of `css/style.css` (`:root` variables).

## Run locally
Open `index.html` in a browser.

## Host on GitHub Pages
1. `git init && git add . && git commit -m "Wedding invitation"`
2. Create a GitHub repo, then `git remote add origin <repo-url>` and `git push -u origin main`
3. Repo Settings > Pages > Source: `main` branch, `/ (root)`
4. Your link: `https://<username>.github.io/<repo-name>/`

## Photos
Copy your photos into `images/` as `photo1.jpg` ... `photo6.jpg`, or change the list in `js/config.js`.
Keep the folder structure as is (`css/`, `js/`, `images/` next to `index.html`), otherwise the styles will not load.
