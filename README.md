Edwin Udofia | Frontend Engineer Portfolio
A modern, high-performance portfolio built with React, Vite, TypeScript, and Framer Motion. This project showcases a clean, "glassmorphism" aesthetic with system-aware dark mode, intersection observers for navigation highlighting, and a responsive mobile sidebar.

Live Demo
[Insert Your Vercel/Netlify Link Here]

Features
Dynamic Hero Section: Smooth text-swapping animation on initialization using Framer Motion.

Intelligent Navigation: \* Floating "pill" navbar with active section highlighting via Intersection Observer.

Responsive mobile sidebar with staggered entry animations.

Scroll-triggered visibility for the branding logo.

Theming: Fully responsive Dark/Light mode that defaults to the user's system preference.

Frosted Glass UI: Premium background blur effects that maintain readability as content scrolls beneath the navbar.

Project Showcase: Selected works featuring custom integrations for React, WordPress, and Wix projects.

Tech Stack
Framework: React / Vite

Styling: Tailwind CSS

Animations: Framer Motion

Icons: Lucide React

Deployment: Vercel

Project Structure
Plaintext

├── public/
│ ├── Wordpress-Logo.svg # Custom CMS platform icon
│ ├── wix-svgrepo-com.svg # Custom CMS platform icon
│ └── ... # Other assets
├── src/
│ ├── components/
│ │ ├── Navbar.tsx # Complex glassmorphism navigation
│ │ ├── HeroSection.tsx # Animated intro and CTA
│ │ ├── ProjectsSection.tsx # Grid of selected works
│ │ └── ContactSection.tsx # Social links and email CTA
│ └── ...
🛠️ Installation & Setup
Clone the repository

Bash

git clone https://github.com/edvv1n/myportfolio.git
Install dependencies

Bash

npm install
Run the development server

Bash

npm run dev
Build for production

Bash

npm run build
Featured Projects
Cohession Africa: Next.js + TypeScript connectivity platform.

Womenful Voice: Non-profit CMS solution (Wix).

Global Women Cultural Exchange: Custom WordPress development.

Senska Portfolio: Highly animated personal React site.

WeatherED: Real-time OpenWeather API dashboard.

Contact
Edwin Udofia - edvvinudofia@gmail.com

Project Link: https://github.com/edvv1n/myportfolio

Version 2.0

Built with ❤️ in 2026

### Setup

Run `npm ci`, then `npm run dev`. Run `npm run build` for production; output is `dist/`.
The source export excludes installed dependencies, Git history, and local environment files. Retain your existing private environment configuration when updating your deployed project.
