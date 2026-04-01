# 🚀 Personal Portfolio

A modern, responsive developer portfolio built with **React**, **Vite**, and **Tailwind CSS v4** — featuring a deep space animated background, parallax effects, scroll reveal animations, and a dark/light theme toggle.

---

## ✨ Features

- 🌌 **Animated Star Background** — 240 twinkling stars across 3 parallax depth layers
- 🖱️ **Mouse Parallax** — stars shift based on cursor position for a 3D depth effect
- 🔭 **Zoom In/Out Background** — deep space radial gradient slowly breathes in and out
- 📜 **Scroll Reveal Animations** — sections and cards slide up and fade in as you scroll
- 🌙 **Dark / Light Theme Toggle** — persisted theme with smooth transitions
- 💬 **Skills Carousel** — swipeable/draggable skill cards with glow effects
- 📱 **Fully Responsive** — works on mobile, tablet, and desktop
- ⚡ **Vite** — lightning-fast dev server and build

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 8 | Build tool & dev server |
| Tailwind CSS v4 | Styling |
| Lucide React | Icons |
| React Router DOM | Routing |
| Radix UI Toast | Notifications |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── StarBackground.jsx   # Parallax star + zoom background
│   ├── HeroSection.jsx      # Landing hero
│   ├── AboutSection.jsx     # About me + cards
│   ├── SkillsSection.jsx    # Draggable skills carousel
│   ├── ProjectsSection.jsx  # Featured projects grid
│   ├── ContactSection.jsx   # Contact form
│   ├── Navbar.jsx           # Navigation
│   ├── Footer.jsx           # Footer
│   └── ThemeToggle.jsx      # Dark/light toggle
├── hooks/
│   └── useScrollReveal.js   # IntersectionObserver scroll animation hook
├── pages/
│   ├── home.jsx             # Main page
│   └── NotFound.jsx         # 404 page
├── index.css                # Global styles, keyframes, Tailwind theme
└── main.jsx                 # App entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/saranyasa-siza/portfolio.git
cd portfolio/vite-project

# Install dependencies
npm install

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
- **Star density** — adjust `LAYERS` config in `StarBackground.jsx`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
