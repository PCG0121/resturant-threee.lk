# Restaurant Three - Kurunegala QR Menu

A modern mobile-first QR menu website for Restaurant Three - Kurunegala.

## What is included

- React, Vite, TypeScript and Tailwind CSS
- React Router pages for Home, Menu, QR print page and 404
- Editable menu data in `src/data/menu.ts`
- Search, category and dietary filters
- Food details modal with WhatsApp and call actions
- Printable A5 QR page at `/qr`
- SEO and Open Graph metadata

## Run locally

Install dependencies:

```bash
npm install
```

Start the local website:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Edit menu content

Open `src/data/menu.ts`.

You can edit:

- Categories
- Food names
- Descriptions
- Prices in LKR
- Image URLs
- Popular, new, spicy and vegetarian badges
- Sold out or available status
- Offers
- Contact information

After editing, run `npm run dev` again if the server is not already running.

## QR website URL

The QR code uses `VITE_SITE_URL`.

1. Copy `.env.example` to `.env`
2. Change the URL:

```bash
VITE_SITE_URL=https://your-real-website-url.com
```

3. Restart the dev server.

## Cloudflare Pages deployment

Use these Cloudflare Pages settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `VITE_SITE_URL=https://your-cloudflare-pages-url.pages.dev`

Basic steps:

1. Push this project to a GitHub repository.
2. In Cloudflare, go to Workers & Pages.
3. Create a new Pages project.
4. Connect the GitHub repository.
5. Set the build command to `npm run build`.
6. Set the output directory to `dist`.
7. Add the `VITE_SITE_URL` environment variable.
8. Deploy.

After deployment, open `/qr`, print the A5 QR page and place it on tables.
