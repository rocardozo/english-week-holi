# 🎨 Guidelines & Rules for Agent Development — Holi English Week 2026

## 1. 🏗️ Project Architecture & Modularity
- **Multi-page Structure**: Keep each view/game in its own dedicated `.html` file (e.g., `index.html`, `menu.html`, `colors.html`, `trivia.html`, `mural.html`).
- **Separation of Concerns**:
  - Global styles & animations in `css/style.css`.
  - Reusable logic, animations, and particle effects in `js/particles.js`.
  - Shared data and translations in `js/data.js` and `js/i18n.js`.
- **Navigation**: Always use native semantic HTML links (`<a href="...">`) with clear "Back to Menu" / "Home" buttons so browser and mobile back buttons work seamlessly.

---

## 2. 🎨 UI/UX & Visual Aesthetics
- **Festive Holi Theme**: Use vibrant, curated Holi color palettes (pink, orange, yellow, green, cyan, purple).
- **Modern Design**: Maintain high-end aesthetics:
  - Glassmorphism (`.glass` backdrop-blur cards with subtle borders).
  - Floating animations and smooth micro-interactions on hover/active states.
  - Floating powder particle canvas on every screen.
- **Mobile-First Responsiveness**: Designed for visitors scanning a QR code from smartphones at the stand, while looking great on desktop.

---

## 3. 🌐 Dual Language Support (English 🇬🇧 & Spanish 🇪🇸)
- **Bilingual Requirement**: All app content (UI labels, trivia questions, color cards, buttons, messages, credits, hints) MUST support both English and Spanish.
- **Default Language**: English (`en`) by default, with an instant toggle switch (`🇬🇧 EN | 🇪🇸 ES`) on all pages.
- **Live Switching**: Language change must be instant and state-preserving (e.g. switching language during trivia should NOT reset the current question or score).
- **Persistent Preference**: Language preference must be saved in `localStorage` across page navigations.

---

## 4. 🇬🇧 English Language Guidelines (English File Elementary Level — A1/A2)
All English text must be strictly tailored for **1st and 2nd year students** of Instituto de Idiomas (based on the **English File Elementary** syllabus):

### Grammar & Tense Boundaries:
- **Present Simple**: Routines, facts, daily actions, habits.
- **Present Continuous**: Actions happening now, describing pictures and festival scenes.
- **Past Simple**: Regular verbs (`-ed`) and common irregular verbs (`went`, `saw`, `ate`, `threw`, `celebrated`, `lit`, `won`, `made`).
- **Past Continuous**: Actions in progress in the past (`was playing`, `were celebrating`).
- **Modal Verbs & Preferences**: `can / can't`, `like / love / enjoy + -ing`.
- **Adjectives**: Basic descriptive adjectives, simple comparatives and superlatives (`brighter`, `the most colorful`, `happier`).
- **DO NOT USE**: Complex tenses (Past Perfect, Future Perfect, Conditionals type 2/3, Passive voice) or advanced C1/C2 idioms. Keep sentence structures clean, short, and punchy.

---

## 5. 🏫 Institution & Stand Info
- **Institution**: *Instituto de Idiomas de Salta* (Escuela N° 4643 Dr. Joaquín Castellanos).
- **Teacher**: *Prof. Cynthia Maurizzio*.
- **Level**: *2nd Year Students*.
