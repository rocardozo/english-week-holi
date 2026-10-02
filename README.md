# 🎨 Happy Holi — English Week 2026
## README & Deployment Guide

> App web interactiva para el stand de Holi en English Week (Instituto de Idiomas de Salta - Escuela N° 4643 Dr. Joaquín Castellanos).  
> Acceso por código QR → GitHub Pages.

---

## Estructura del proyecto

El proyecto está organizado en páginas HTML independientes para una navegación limpia, nativa y altamente mantenible:

```
Holi/
├── index.html       ← Página principal (Home / Bienvenida y Créditos)
├── menu.html        ← Menú de actividades
├── colors.html      ← Color Meanings (flashcards con efecto 3D flip)
├── trivia.html      ← Trivia Quiz (8 preguntas + pantalla de premio y confeti)
├── match.html       ← Word Match (juego estilo Duolingo para emparejar palabras EN/ES)
├── mural.html       ← Colour Mural (canvas interactivo con efecto spray y descarga PNG)
├── holi_bg.jpg      ← Imagen de fondo
├── css/
│   └── style.css    ← Estilos compartidos, animaciones y glassmorphism
├── js/
│   ├── data.js      ← Datos del equipo, docente, colores, trivia y pares de palabras
│   ├── i18n.js      ← Motor bilingüe en tiempo real (Inglés / Español)
│   └── particles.js ← Partículas de fondo animadas
└── README.md
```

---

## Cómo probar localmente

**Opción A — VS Code Live Server** (recomendado):
1. Abrir la carpeta en VS Code con la extensión "Live Server"
2. Click derecho sobre `index.html` → **Open with Live Server** (o abrir `http://127.0.0.1:5500/index.html`)

**Opción B — Python**:
```bash
python3 -m http.server 8080
# Abrir en navegador: http://localhost:8080
```

---

## Personalización rápida

En [`js/data.js`](file:///home/rcardozo/Personal/Sistemas/English-week/Holi/js/data.js) puedes modificar fácilmente:
- Lista de estudiantes y docente (`TEAM`)
- Datos y significados de los colores (`COLOR_DATA`)
- Preguntas y opciones de la trivia (`TRIVIA`)

---

## Despliegue en GitHub Pages

1. Subir cambios con `git`:
```bash
git add .
git commit -m "feat: arquitectura multi-página limpia y mantenible"
git push origin main
```
2. La app estará disponible en:
`https://rocardozo.github.io/english-week-holi/`

---

*Made with 💜 for English Week 2026*
