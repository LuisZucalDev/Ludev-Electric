# 🎨 Guía de Diseño - Ludev Electric

## Visión General
Este documento describe las guías de diseño, componentes y buenas prácticas para mantener consistencia en el sitio web de Ludev Electric.

---

## 📐 Paleta de Colores

### Colores Principales
```
Primary (Azul Profesional)
  50:  #f0f7ff
  100: #e1effe
  200: #c7e1fd
  300: #a2d5fc
  400: #74bdf9
  500: #4ba3f5
  600: #0155a3  ← Principal
  700: #014687
  800: #0b3975
  900: #092e61

Accent (Dorado/Amarillo)
  500: #f59e0b  ← Principal
  600: #d97706
```

### Colores Neutrales
- Blanco: `#ffffff`
- Gris claro: `#f0f7ff` - `#f9fafb`
- Gris medio: `#e5e7eb` - `#6b7280`
- Gris oscuro: `#1f2937`
- Negro: `#000000`

### Uso de Colores
- **Primary (Azul)**: Headers, buttons principales, CTAs
- **Accent (Dorado)**: Highlights, acentos, hover states
- **Grises**: Texto, backgrounds, divisores
- **Verde (#25d366)**: WhatsApp button exclusivamente

---

## 🔤 Tipografía

### Fuentes
- **Display**: Space Grotesk (títulos, h1-h3)
- **Body**: Inter (párrafos, texto normal)

### Tamaños
```
Hero title:    56px (md: 48px)
Section title: 48px (md: 36px)
Subtitle:      20px (md: 18px)
Body:          16px
Small text:    14px
```

### Pesos
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800

### Jerarquía
```
h1 → text-5xl md:text-6xl font-display font-bold
h2 → text-4xl md:text-5xl font-display font-bold
h3 → text-2xl font-display font-bold
h4 → text-lg font-semibold
p  → text-base/lg font-normal
```

---

## 🧩 Componentes Reutilizables

### Botones

#### Botón Primario (CTA)
```html
<button class="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 transition duration-300">
  Acción principal
</button>
```

#### Botón Secundario
```html
<button class="px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition duration-300">
  Acción secundaria
</button>
```

### Cards

#### Card Simple
```html
<div class="bg-white rounded-2xl shadow-lg p-8 card-hover">
  <!-- Contenido -->
</div>
```

#### Card con Hover Elevado
```html
<div class="card card-hover group">
  <!-- Contenido con efectos -->
</div>
```

### Secciones

#### Estructura de Sección
```html
<section id="seccion" class="py-20 px-4 bg-white section-fade">
  <div class="max-w-7xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-16 space-y-4">
      <span class="inline-block px-4 py-2 bg-primary-100 text-primary-600 text-sm font-semibold rounded-full">BADGE</span>
      <h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900">
        Título de la Sección
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Descripción
      </p>
    </div>
    
    <!-- Contenido -->
  </div>
</section>
```

### Inputs

#### Input de Texto
```html
<input type="text" placeholder="Placeholder" required 
  class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition duration-300">
```

---

## 🎭 Efectos y Animaciones

### Transiciones Comunes
```css
transition duration-300    ← Default
transition duration-500    ← Más lento
```

### Hover Effects
```html
<!-- Card hover -->
<div class="card card-hover">Contenido</div>

<!-- Scale -->
<button class="hover:scale-105 active:scale-100">Botón</button>

<!-- Color -->
<a class="text-primary-600 hover:text-primary-700">Link</a>

<!-- Transform -->
<div class="hover:translate-x-2">Contenido</div>
```

### Animaciones Personalizadas
```css
animate-fade-in     ← Aparece suavemente
animate-slide-up    ← Sube al aparecer
animate-float       ← Flota suavemente
```

---

## 📱 Responsive Design

### Breakpoints
- **xs** (default): 0px - 639px
- **sm**: 640px
- **md**: 768px (Mobile → Tablet)
- **lg**: 1024px (Tablet → Desktop)
- **xl**: 1280px (Desktop grande)

### Ejemplos
```html
<!-- Fluido por defecto, 2 cols en md -->
<div class="grid md:grid-cols-2 gap-8">

<!-- Oculto en móvil, visible en md -->
<nav class="hidden md:flex">

<!-- Tamaño adaptable -->
<h1 class="text-3xl md:text-5xl">Título</h1>

<!-- Padding adaptable -->
<section class="px-4 md:px-8 py-12 md:py-20">
```

---

## 🔍 Accesibilidad

### Prácticas
1. **Etiquetas ARIA**: `aria-label`, `aria-expanded`
2. **Focus states**: Siempre visible en inputs/buttons
3. **Contraste**: Mínimo WCAG AA (4.5:1 para texto)
4. **Textos alt**: En todas las imágenes
5. **Estructura semántica**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`

### Ejemplo
```html
<button aria-label="Expandir menú" aria-expanded="false">
  <!-- Contenido -->
</button>
```

---

## 📊 Espaciado

### Escala
```
2px (0.5)   -  gap-0.5
4px (1)     -  gap-1, px-1, py-1
8px (2)     -  gap-2, p-2
12px (3)    -  gap-3, p-3
16px (4)    -  gap-4, p-4
20px (5)    -  gap-5, p-5
24px (6)    -  gap-6, p-6
32px (8)    -  gap-8, p-8
40px (10)   -  gap-10, p-10
48px (12)   -  gap-12, p-12
```

### Patrones Comunes
```html
<!-- Sección con espaciado amplio -->
<section class="py-20 px-4">

<!-- Card con padding interior -->
<div class="p-8">

<!-- Grid con gaps -->
<div class="grid gap-8">

<!-- Espaciado vertical entre elementos -->
<div class="space-y-4">
```

---

## 🎯 Sombras

### Jerarquía de Sombras
```html
<!-- Sin sombra o muy sutil -->
<div class="shadow-sm">

<!-- Card normal -->
<div class="shadow-lg">

<!-- Elevado/Hover -->
<div class="shadow-xl">

<!-- Muy elevado -->
<div class="shadow-2xl">
```

---

## 🔄 Carruseles

### Estructura
```html
<div class="relative h-64 mb-6 rounded-xl overflow-hidden">
  <div class="carousel-service" data-service="nombre">
    <div class="carousel-img-wrapper w-full h-full">
      <img src="" alt="" class="w-full h-full object-cover">
    </div>
  </div>
  
  <!-- Controles -->
  <button class="prev-btn" data-service="nombre">←</button>
  <button class="next-btn" data-service="nombre">→</button>
</div>
```

### JavaScript
```javascript
// Ver js/main.js para uso
serviceCarousels.nombre = ['img1.jpg', 'img2.jpg', ...];
```

---

## 🌐 Gradientes

### Gradientes Predefinidos
```html
<!-- Header -->
<div class="gradient-primary bg-gradient-to-r from-primary-600 to-primary-500">

<!-- Fondo suave -->
<section class="gradient-secondary bg-gradient-to-br from-gray-50 to-gray-100">

<!-- Fondo de contacto -->
<section class="bg-gradient-to-br from-primary-50 to-primary-100">
```

---

## ✨ Mejores Prácticas

### DO ✅
- Usar clases Tailwind existentes
- Mantener categorías de componentes
- Documentar cambios en diseño
- Verificar responsive en móvil
- Testear accesibilidad (Tab, Enter, Screen readers)
- Usar colores del sistema de diseño
- Reutilizar componentes

### DON'T ❌
- No usar CSS inline para estilos principales
- No crear nuevas clases CSS arbitrarias
- No mezclar estilos legacy con Tailwind
- No ignorar responsive design
- No olvidar focus states en interactivos
- No usar colores arbitrarios
- No crear componentes cuando existen similares

---

## 📝 Nomenclatura

### Clases Personalizadas
```css
.card-hover        /* Efecto hover para cards */
.btn-glow         /* Glow effect para botones */
.section-fade     /* Fade animation para secciones */
.glass-effect     /* Efecto glassmorphism */
.gradient-primary /* Gradiente primario */
```

---

## 🚀 Guía de Mantenimiento

### Actualizar Contenido
1. Editar en `index.html` directamente
2. Usar las clases Tailwind existentes
3. Verificar mobile
4. Testear links y formularios

### Agregar Nueva Sección
1. Copiar estructura de sección existente
2. Actualizar IDs y contenido
3. Agregar link en navegación
4. Verificar responsive
5. Testear accesibilidad

### Cambiar Colores Globales
1. Modificar configuración Tailwind en `<script>`
2. Actualizar referencias en toda la página
3. Verificar contraste
4. Testear en luz y oscuridad

---

## 📞 Soporte y Contacto

Para dudas sobre el diseño o implementación, contactar a:
- Email: contacto@ludevelectric.cl
- WhatsApp: +56 9 94239929

---

**Última actualización**: 30.03.2025
**Versión**: 2.0 (Tailwind CSS)
