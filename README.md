# Tea Scholar

Premium boba tea landing page, built with **Vite + React**, styled with **Tailwind CSS**, linted/formatted with **Biome**, and deployed to **GitHub Pages**.

## Requirements

- Node 20+
- [pnpm](https://pnpm.io) 10+

## Scripts

```bash
pnpm install     # install dependencies
pnpm dev         # start the dev server
pnpm build       # production build to dist/
pnpm preview     # preview the production build
pnpm lint        # check formatting + lint (Biome)
pnpm fix         # auto-fix formatting + lint
```

## Project structure

```
public/                  static images (served at the site root)
src/
  components/            Header, Hero, Featured, InstagramGrid, Locations, Footer
  assets.js             image paths + page content data
  useTheme.js           dark/light mode toggle hook
  App.jsx               page composition
  main.jsx              React entry point
  index.css             Tailwind directives + base styles
index.html              Vite HTML entry (pre-paint theme script lives here)
tailwind.config.js      theme tokens (colors, fonts, radius)
biome.json              formatter + linter config
```

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
   builds and deploys automatically.

The Vite `base` is set to `"./"` (relative paths), so the build works under any
`https://<user>.github.io/<repo>/` path without hardcoding the repository name.
