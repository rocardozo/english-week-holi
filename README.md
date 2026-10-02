# 🎨 Happy Holi — English Week 2026
## README & Deployment Guide

> App web interactiva para el stand de Holi en English Week.  
> Acceso por código QR → GitHub Pages.

---

## Estructura del proyecto

```
Holi/
├── index.html      ← App completa (SPA de una sola página)
├── holi_bg.jpg     ← Imagen de fondo (generada con IA)
└── README.md       ← Este archivo
```

---

## Cómo probar localmente (sin instalar nada)

**Opción A — VS Code Live Server** (recomendado):
1. Instalar la extensión "Live Server" de Ritwick Dey
2. Click derecho sobre `index.html` → **Open with Live Server**

**Opción B — Python (cualquier PC con Python instalado)**:
```bash
# En la carpeta Holi/
python3 -m http.server 8080
# Luego abrir: http://localhost:8080
```

**Opción C — Node.js**:
```bash
npx serve .
```

> ⚠️ No abrir `index.html` directo en el navegador (file://) ya que la imagen de fondo podría no cargar.

---

## Personalización rápida (antes de publicar)

Abrir `index.html` y buscar la sección `DATA` al inicio del `<script>`:

### 1. Cambiar nombres del equipo
```js
const TEAM = {
  teacher: { name: 'Prof. Ana García', ... },   // ← nombre real de la profe
  students: [
    'Valentina López', 'Mateo Fernández',        // ← nombres reales del curso
    ...
  ],
};
```

### 2. Cambiar nombre del instituto
Buscar en el HTML:
```html
<p class="text-white font-bold text-sm mt-0.5">Instituto San Martín</p>
```

### 3. Ajustar preguntas del Trivia
Buscar `const TRIVIA = [` y editar o agregar preguntas siguiendo el formato:
```js
{
  emoji: '❓',
  question: 'Tu pregunta aquí',
  options: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
  correct: 0,   // índice (0=A, 1=B, 2=C, 3=D)
}
```

---

## Despliegue en GitHub Pages (paso a paso)

### Paso 1 — Crear el repositorio

1. Ir a [github.com](https://github.com) → **New repository**
2. Nombre sugerido: `english-week-holi`
3. Marcarlo como **Public**
4. **NO** tildar "Add README" (ya tenemos uno)
5. Click **Create repository**

### Paso 2 — Subir los archivos

**Opción A — Desde la web de GitHub (más fácil):**
1. En la página del repositorio vacío, click **uploading an existing file**
2. Arrastrar `index.html` y `holi_bg.jpg`
3. Click **Commit changes**

**Opción B — Git desde la terminal:**
```bash
cd /ruta/a/tu/carpeta/Holi
git init
git add index.html holi_bg.jpg
git commit -m "🎨 Initial commit — Holi English Week app"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/english-week-holi.git
git push -u origin main
```

### Paso 3 — Activar GitHub Pages

1. En el repositorio → **Settings** → **Pages** (menú izquierdo)
2. En **Source** → seleccionar **Deploy from a branch**
3. Branch: **main** / Folder: **/ (root)**
4. Click **Save**
5. Esperar ~2 minutos y refrescar la página
6. La URL será: `https://TU_USUARIO.github.io/english-week-holi/`

### Paso 4 — Generar el código QR

Usar cualquiera de estos servicios gratuitos:
- [qr-code-generator.com](https://www.qr-code-generator.com)
- [goqr.me](https://goqr.me)
- [qrcode-monkey.com](https://www.qrcode-monkey.com)

Pegar la URL de GitHub Pages y descargar el QR en alta resolución.

---

## Funcionalidades de la app

| Vista | Descripción |
|-------|-------------|
| 🏠 **Landing / Home** | Hero con fondo Holi, título animado, botón CTA y sección de créditos del equipo |
| 📋 **Menú principal** | 3 tarjetas grandes con acceso a cada actividad |
| 🌸 **Color Meanings** | 8 tarjetas interactivas que se giran (flip 3D) para revelar el significado de cada color |
| 🧠 **Holi Trivia** | Quiz de 8 preguntas con barra de progreso, feedback inmediato y puntaje |
| 🏆 **Winner Screen** | Pantalla de ganador con confeti animado para mostrar en el stand y canjear premio |
| 🖌️ **Colour Mural** | Mini canvas para pintar con efecto spray, paleta de 9 colores y descarga de imagen |

---

## Tecnologías utilizadas

- **HTML5** — estructura semántica
- **Tailwind CSS v3** — via CDN, con configuración personalizada de tokens Holi
- **JavaScript vanilla** — lógica SPA, sistema de partículas, trivia engine, canvas API
- **Google Fonts** — Outfit + Dancing Script
- **Canvas API** — partículas de fondo + mural de dibujo

---

*Made with 💜 for English Week 2026*
