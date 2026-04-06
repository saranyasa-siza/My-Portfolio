# 🚀 Personal Portfolio

A modern, responsive developer portfolio built with **React**, **Vite**, and **Tailwind CSS v4** — featuring a canvas-based deep space background, mouse & gyroscope parallax, scroll reveal animations, a working contact form via EmailJS, and a dark/light theme toggle.

---

## ✨ Features

- 🌌 **Canvas Star Background** — multi-layer twinkling stars with halos and cross-spikes
- 🖱️ **Mouse Parallax** — stars shift with cursor movement for a 3D depth effect (desktop)
- 📱 **Gyroscope Parallax** — stars respond to device tilt on mobile via `DeviceOrientationEvent`
- 🔭 **Zoom In/Out Background** — deep space gradient breathes in and out with a sine oscillation
- 📜 **Scroll Reveal Animations** — sections and cards slide up and fade in as you scroll
- 📧 **Working Contact Form** — sends real emails via EmailJS with success/error feedback
- 🌙 **Dark / Light Theme Toggle** — defaults to dark, persisted in `localStorage`
- 💬 **Skills Carousel** — swipeable on mobile (touch), draggable on desktop (mouse)
- 🔋 **Battery Optimized** — canvas animation pauses when tab is hidden
- 📱 **Mobile Optimized** — reduced star count, fewer layers, no halos/spikes on mobile
- ⚡ **Vite** — lightning-fast dev server and build

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 8 | Build tool & dev server |
| Tailwind CSS v4 | Styling |
| EmailJS | Contact form email service |
| Lucide React | Icons |
| React Router DOM | Routing |
| Radix UI Toast | Notifications |

---

## 📁 Project Structure

```
vite-project/
├── .env                     # EmailJS credentials (git-ignored)
├── .env.example             # Safe credentials template
├── .gitignore
├── index.html               # Dark mode init script
├── src/
│   ├── components/
│   │   ├── StarBackground.jsx   # Canvas star field with parallax + zoom
│   │   ├── HeroSection.jsx      # Landing hero with typewriter effect
│   │   ├── AboutSection.jsx     # About me + skill cards
│   │   ├── SkillsSection.jsx    # Swipeable/draggable skills carousel
│   │   ├── ProjectsSection.jsx  # Featured projects grid
│   │   ├── ContactSection.jsx   # Contact form with EmailJS
│   │   ├── Navbar.jsx           # Navigation
│   │   ├── Footer.jsx           # Footer
│   │   └── ThemeToggle.jsx      # Dark/light toggle
│   ├── hooks/
│   │   └── useScrollReveal.js   # IntersectionObserver scroll animation hook
│   ├── pages/
│   │   ├── home.jsx             # Main page
│   │   └── NotFound.jsx         # 404 page
│   ├── index.css                # Global styles, keyframes, Tailwind theme
│   └── main.jsx                 # App entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn
- An [EmailJS](https://emailjs.com) account

### Installation

```bash
# Clone the repository
git clone https://github.com/saranyasa-siza/portfolio.git
cd portfolio/vite-project

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your EmailJS credentials in .env

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📧 EmailJS Setup

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Create an **Email Service** and note the Service ID
3. Create an **Email Template** with these variables:
   - `{{name}}` — sender's name
   - `{{email}}` — sender's email
   - `{{message}}` — message body
4. Copy your **Public Key** from Account > API Keys
5. Add all three to your `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🎨 Customization

- **Personal info** — update text in `HeroSection.jsx`, `AboutSection.jsx`
- **Projects** — edit the `projects` array in `ProjectsSection.jsx`
- **Skills** — edit the `skills` array in `SkillsSection.jsx`
- **Theme colors** — modify CSS variables in `index.css` under `:root` and `.dark`
- **Star density** — adjust `DENSITY` and `NUM_LAYERS` in `StarBackground.jsx`
- **Contact email** — update EmailJS template to forward to your email

---
