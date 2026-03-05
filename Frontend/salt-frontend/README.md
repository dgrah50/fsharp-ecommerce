# salt-frontend

React/Redux frontend for the F# ecommerce backend.

Requires Node.js `20.19+` (or `22.12+`) because the project uses Vite 7.

## Scripts

- `npm start` (or `npm run dev`): starts the Vite dev server on `http://localhost:5173`
- `npm run build`: creates a production bundle in `dist/`
- `npm run preview`: previews the production build locally

## Notes

- The app currently calls the backend using absolute URLs like `http://localhost:5000/...`, so the backend must be running on port `5000`.
