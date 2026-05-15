# AGENTS.md

## Cursor Cloud specific instructions

This is a simple static single-page website (**HEYUM** — handcrafted jewelry lookbook) served by Vite.

### Quick Reference

| Action | Command |
|--------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (port 5173) |
| Preview build | `npm run preview` (port 4173) |

### Notes

- There is **no build step**, linter, or test framework configured. Vite serves `index.html`, `style.css`, and `script.js` directly.
- The dev server binds to `0.0.0.0` (see `vite.config.js`), so it is accessible from any network interface.
- All images load from **Unsplash CDN** and fonts from **Google Fonts CDN** — internet access is required for full rendering.
- There are no backend services, databases, or environment secrets required.
