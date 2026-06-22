# ☕ Brew Haven – Modern Café Website

Brew Haven is a sleek and responsive café website designed to deliver an engaging user experience across all devices. Built using React, Tailwind CSS, and Framer Motion, the project combines modern UI design with smooth animations and interactive features.

## 🚀 Overview

This project serves as a complete landing page solution for cafés, coffee shops, restaurants, or small food businesses. It includes beautifully designed sections for showcasing the brand, menu offerings, customer reviews, gallery images, reservations, and contact information.

---

## 🌟 Key Features

### Navigation

* Fully responsive navigation bar
* Sticky header for easy navigation
* Mobile-friendly hamburger menu
* Smooth scrolling between sections

### Hero Section

* Attractive full-screen banner
* Animated entrance effects
* Call-to-action buttons for user engagement

### About Us

* Café story and brand introduction
* Business highlights and unique selling points

### Menu Showcase

* Interactive menu cards
* Category-based filtering
* Clean and modern presentation

### Customer Testimonials

* Review cards displaying customer feedback
* Responsive grid layout

### Photo Gallery

* Image gallery with lightbox preview
* Mobile and desktop optimized

### Contact & Reservations

* Contact form with client-side validation
* Reservation booking form
* Business information display
* Embedded Google Maps location

### Additional Features

* Dark and Light mode support
* Scroll-to-top button
* Smooth page transitions
* Initial loading screen animation

---

## 🛠 Technology Stack

| Technology    | Purpose                     |
| ------------- | --------------------------- |
| React (Vite)  | Frontend Framework          |
| Tailwind CSS  | Styling & Responsive Design |
| Framer Motion | Animations & Transitions    |
| React Icons   | Icon Library                |

---

## 📂 Project Structure

```text
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
│
├── data/
│   └── siteData.js
│
├── pages/
│   └── Home.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation & Setup

### Clone the Repository

```bash
git clone <repository-url>
cd brew-haven
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The application will be available locally through the Vite development server.

---

## 📦 Production Build

Generate an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌍 Deployment

### Deploy on Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure:

   * Build Command: `npm run build`
   * Output Directory: `dist`
4. Deploy the application.

### Deploy on Netlify

1. Push the project to GitHub.
2. Import the repository into Netlify.
3. Configure:

   * Build Command: `npm run build`
   * Publish Directory: `dist`
4. Deploy the site.

---

## 🎨 Customization

All content is designed to be easily editable:

* Update text content from component files.
* Modify menu, testimonials, and gallery data in:

```text
src/data/siteData.js
```

* Replace image URLs with your own assets.
* Customize colors, typography, and spacing through Tailwind CSS configuration.

---

## 🎯 Ideal For

* Cafés
* Coffee Shops
* Bakeries
* Restaurants
* Small Food Businesses
* Personal Food Brands

---

## 📄 License

This project is available for educational and personal use. Feel free to customize and extend it according to your needs.

Enjoy building your perfect café website with Brew Haven! ☕
