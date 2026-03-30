# ⚡ GUÍA RÁPIDA - Ediciones Comunes

## 🔍 Cómo Encontrar y Editar Secciones

### Buscar por ID de Sección

En `index.html`, cada sección principal tiene un ID único. Usa `Ctrl+F` para buscar:

| Sección | ID | Qué editar |
|---------|-----|-----------|
| Navegación | #inicio | Nav links |
| Hero | #inicio | Título, descripción, botones |
| Servicios | #servicios | Cards de servicios |
| Visión | #vision | Misión y Visión |
| Por qué | #porque | Ventajas/Features |
| Equipo | #equipo | Miembros del equipo |
| Contacto | #contacto | Formulario, info contacto |
| Footer | footer | Links y redes sociales |

---

## 📝 Cambios Frecuentes

### 1️⃣ Cambiar el Título Principal (Hero)

**Busca:**
```html
<h2 class="text-5xl md:text-6xl font-display font-bold text-primary-700 leading-tight mb-4">
  Energía que impulsa tu <span class="text-accent-500">mundo</span>
</h2>
```

**Edita:** Reemplaza "Energía que impulsa tu mundo" por tu nuevo texto.

**Nota:** La palabra en `<span class="text-accent-500">` aparecerá en color dorado.

---

### 2️⃣ Cambiar Descripción Hero

**Busca:**
```html
<p class="text-lg text-gray-600 leading-relaxed">
  Soluciones eléctricas integrales para tu hogar, empresa o industria...
</p>
```

**Edita:** Reemplaza todo el texto.

---

### 3️⃣ Cambiar Servicios

**Busca:**
```html
<!-- Service 1: Instalaciones -->
<div class="card card-hover group">
  <h3 class="text-2xl font-display font-bold text-gray-900">Instalaciones Eléctricas</h3>
  <p class="text-gray-600 leading-relaxed">
    Diseño e instalación...
  </p>
```

**Edita:**
- Título en `<h3>`
- Descripción en el `<p>`
- Imagen en `src="img/instalacion1.jpeg"`

---

### 4️⃣ Cambiar Información de Contacto

**Busca "Correo":**
```html
<a href="mailto:contacto@ludevelectric.cl" class="text-primary-100 hover:text-white transition">
  contacto@ludevelectric.cl
</a>
```

**Edita:** Cambia el email en `href="mailto:..."` y el texto.

**Busca "Teléfono":**
```html
<a href="tel:+56967086692" class="text-primary-100 hover:text-white transition">
  +56 9 94239929
</a>
```

**Edita:** Cambia el número en `href="tel:..."` y el texto.

---

### 5️⃣ Cambiar Equipo

**Busca "Deivi":**
```html
<img src="img/Deivi.png" alt="Deivi Rodríguez - Supervisor Eléctrico">
<h3 class="text-xl font-display font-bold text-gray-900 mb-1">Deivi Rodríguez</h3>
<p class="text-primary-600 font-semibold mb-2">Supervisor Eléctrico</p>
<p class="text-gray-600 text-sm mb-4">Especialista en ejecución de proyectos</p>
```

**Edita:**
- Imagen en `src="img/Deivi.png"` (cambia a otra imagen)
- Nombre en `<h3>`
- Puesto en el primer `<p>`
- Especialidad en el segundo `<p>`

---

### 6️⃣ Cambiar Colores

**En el `<script>` Tailwind Config (cerca del inicio de `index.html`):**

```javascript
primary: {
  600: '#0155a3',  // ← Azul principal
},
accent: {
  500: '#f59e0b',  // ← Amarillo/Dorado
}
```

**Edita los valores hexadecimales:**
- `#0155a3` → Tu nuevo color primario
- `#f59e0b` → Tu nuevo color acentual

**Herramienta:** Usa un [Color Picker](https://htmlcolorcodes.com/) para encontrar colores.

---

### 7️⃣ Cambiar Enlaces del Menú

**Busca "nav":**
```html
<li><a href="#inicio" class="...">Inicio</a></li>
<li><a href="#servicios" class="...">Servicios</a></li>
```

**Edita:**
- `href="#id"` - Debe coincidir con un `id="..."` en la página
- El texto entre `<a>` es lo que ves en el menú

---

### 8️⃣ Agregar Nueva Sección

**Copia esta estructura:**
```html
<section id="nueva" class="py-20 px-4 bg-white section-fade">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16 space-y-4">
      <span class="inline-block px-4 py-2 bg-primary-100 text-primary-600 text-sm font-semibold rounded-full">BADGE</span>
      <h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900">
        Título de la Sección
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Descripción
      </p>
    </div>
    
    <!-- Tu contenido aquí -->
    
  </div>
</section>
```

**Recuerda:**
1. Cambiar `id="nueva"` a un ID único
2. Agregar link en el menú: `<a href="#nueva">Nombre</a>`
3. Agregar contenido entre los div

---

### 9️⃣ Cambiar Fondos de Sección

**Opciones disponibles:**
```html
bg-white              <!-- Blanco -->
bg-gray-50            <!-- Gris muy claro -->
gradient-secondary    <!-- Gradiente suave azul -->
bg-gradient-to-br from-primary-50 to-primary-100  <!-- Gradiente personalizado -->
```

---

### 🔟 Cambiar Formulario de Contacto

**El formulario usa Formspree. Para cambiar:**

1. Ir a [formspree.io](https://formspree.io/)
2. Crear nuevo formulario
3. Obtener el ID (algo como: `f/xxxxx`)
4. En `index.html`, buscar:
   ```html
   <form action="https://formspree.io/f/manpzwgy" method="POST">
   ```
5. Reemplazar `manpzwgy` con tu nuevo ID

---

## 🎨 Cambios de Estilo Comunes

### Cambiar Tamaño de Título

**Títulos actuales:**
- `text-5xl md:text-6xl` - Hero (más grande)
- `text-4xl md:text-5xl` - Secciones (grande)
- `text-2xl` - Cards (medio)
- `text-lg` - Subtítulos (pequeño)

**Para cambiar:**
`text-5xl` → Buscar en [Tailwind Docs](https://tailwindcss.com/docs/font-size)

### Cambiar Espaciado

**Espaciado actual:**
- Secciones: `py-20` (vertical), `px-4` (horizontal)
- Cards: `p-8` o `gap-8`

**Para cambiar:**
- `py-20` → `py-16` (menos espacio vertical)
- `gap-8` → `gap-6` (menos espacio entre mItems)

### Cambiar Bordes

**Estilos actuales:**
- `rounded-lg` - Bordes suave (8px)
- `rounded-xl` - Bordes más redondeados (12px)
- `rounded-2xl` - Muy redondeados (16px)

### Cambiar Sombras

**Sombras actuales:**
- `shadow-lg` - Sombra media
- `shadow-xl` - Sombra grande
- `shadow-2xl` - Sombra muy grande

---

## ⌨️ Atajos Útiles

### En VS Code

| Atajo | Acción |
|-------|--------|
| `Ctrl+F` | Buscar texto |
| `Ctrl+H` | Buscar y reemplazar |
| `Ctrl+/` | Comentar línea |
| `Ctrl+Shift+Up` | Mover línea arriba |
| `Ctrl+Shift+Down` | Mover línea abajo |
| `Alt+Click` | Multi-cursor |
| `Ctrl+D` | Seleccionar palabra |

---

## 🔍 Búsquedas Útiles

Usa `Ctrl+F` en VS Code para buscar:

```
Buscar                  Para encontrar
---------               ----------------------
"Contáctanos"          Título de contacto
"Servicios"            Título servicios
"instalacion"          Carrusel instalaciones
"Deivi"                Miembro del equipo
"contacto@"            Email
"wa.me"                Links WhatsApp
"#ff"                  Colores hexadecimales
"button"               Botones
```

---

## ✅ Verificar Cambios

Después de editar:

1. **Guardar archivo** (`Ctrl+S`)
2. **Recargar navegador** (`F5` o `Ctrl+F5`)
3. **Verificar en móvil** (F12 → Device Toggle)
4. **Testear links** (hacer click)
5. **Verificar formulario** (intentar enviar)

---

## 🐛 Problemas Comunes

### El sitio se ve cortado
```
→ Verificar que no borraste una etiqueta </div>
→ Limpiar cache (Ctrl+Shift+Del)
```

### El color no cambio
```
→ Verificar que cambiaste el hex color correctamente
→ Recargar con Ctrl+Shift+Del (cache)
→ Usar DevTools (F12) para inspeccionar
```

### El formulario no envía
```
→ Verificar que tienes Internet
→ Revisar que el ID de Formspree es correcto
→ Chequear console (F12 → Console)
```

### Las imágenes no cargan
```
→ Verificar que el archivo existe en /img/
→ Verificar la ruta: img/nombre.jpg
→ No usar espacios en nombres de archivos
```

---

## 📚 Documentos de Referencia

- **DESIGN_GUIDE.md** - Componentes y paleta completa
- **README.md** - Guía general del proyecto
- **SUMMARY.md** - Resumen de todo lo hecho

---

## 💬 Pedir Ayuda

Si algo no funciona:

1. Verificar en [Tailwind CSS Docs](https://tailwindcss.com/docs)
2. Revisar los ejemplos en este documento
3. Contactar a Luis o Deivi

---

## 🎯 Checklist Rápido

Después de hacer cambios:

- [ ] Cambio sintaxis está correcta (sin errores)
- [ ] Etiquetas están cerradas (</div>, etc)
- [ ] Guardé el archivo (Ctrl+S)
- [ ] Recargué el navegador (F5)
- [ ] Verifico en móvil
- [ ] Los links funcionan
- [ ] Se ve profesional

---

**¡Ahora estás listo para hacer cambios!** 🚀

Usa este documento como referencia rápida para ediciones comunes.
