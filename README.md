# stevengin.com

Steven Gin's personal site — a Gatsby blog at [stevengin.com](https://stevengin.com).

- **Home** — intro, current role, links to GitHub / LinkedIn / résumé, and the blog index.
- **About** (`src/pages/about.js`) — current role and career summary, kept in sync with the résumé.
- **Blog** (`src/pages/blog/`) — one Markdown file per post. The March Madness / Kaggle post is the only one; the old deep-learning-generated placeholder posts were removed.

## Résumé link

The PDF icon on the home page links to `static/steven-gin-resume.pdf`,
served as `/steven-gin-resume.pdf`. It is an export of the Google Doc
résumé ("Steven Gin Resume — Updated Nov 2026"). When the Doc changes,
re-export it (Drive → Download as PDF) and replace that file — the link
itself never changes.

## Develop

```sh
npm install
npm start        # http://localhost:8000
```

## Deploy

The site is built and pushed to the `gh-pages` branch — merging to `main`
alone does **not** update the live site:

```sh
npm run deploy   # gatsby build --prefix-paths && gh-pages -d public
```

Note: this is Gatsby 2 / React 17 (last touched 2022, refreshed Nov 2026).
A Gatsby upgrade is a separate job, not part of a content refresh.
