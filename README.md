# ☕ Brew Haven Café Website

A modern, fully responsive café landing page built with **React + Tailwind CSS + Framer Motion**.

## ✨ Features

- Sticky responsive navbar with mobile menu
- Hero section with fade-in animation and CTA
- About section with story and highlights
- Menu cards with category filtering
- Testimonials grid
- Gallery with lightbox preview
- Contact form with frontend validation
- Reservation form
- Google Maps embed and business info
- Dark mode toggle
- Scroll-to-top button
- Initial loading animation

## 🧱 Tech Stack

- React (Vite)
- Tailwind CSS
- Framer Motion
- React Icons

## 📁 Project Structure

```txt
src/
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Gallery.jsx
│   ├── Hero.jsx
│   ├── Loader.jsx
│   ├── Menu.jsx
│   ├── Navbar.jsx
│   ├── Reservation.jsx
│   ├── ScrollToTopButton.jsx
│   └── Testimonials.jsx
├── data/
│   └── siteData.js
├── pages/
│   └── Home.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## 🚀 Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## 🌐 Deploy to Vercel

1. Push the project to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel auto-detects Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**.

## 🌐 Deploy to Netlify

1. Push the project to GitHub.
2. Go to [netlify.com](https://netlify.com) and click **Add new site → Import from Git**.
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy site**.

## 📌 Notes for Beginners

- All section content is componentized for easy editing.
- Dummy menu/testimonial/gallery data is stored in `src/data/siteData.js`.
- You can replace image URLs and text without touching component logic.

Enjoy building and customizing Brew Haven! ☕
