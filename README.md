# Portafolio – iJKENNEDY

Sitio web estático de portafolio personal. Incluye una página principal y secciones independientes para “About”, “Projects”, “Services”, “Skills”, “Blog” y “Contact”. El repositorio está preparado para publicarse con GitHub Pages y usa un dominio personalizado (archivo `CNAME`).

## Contenido
- Descripción rápida del proyecto
- Estructura del repositorio
- Cómo ejecutarlo en local
- Flujo de desarrollo (dónde editar cada cosa)
- Despliegue (GitHub Pages)
- Mantenimiento y tareas comunes

## Descripción
Este proyecto es un portafolio 100% estático construido con HTML, CSS y JavaScript mínimos. La navegación y el contenido principal se organizan en secciones HTML reutilizables bajo `sections/` y se cargan en la página principal.

## Estructura
```
CNAME
index.html
main.js
style.css
assets/
  aaa.txt
sections/
  about.html
  blog.html
  contact.html
  projects.html
  services.html
  skills.html
```

- `index.html`: punto de entrada del sitio.
- `style.css`: estilos globales.
- `main.js`: lógica de interacción/navegación.
- `sections/`: contenido de cada sección del sitio.
- `assets/`: recursos estáticos (imágenes, fuentes, etc.).
- `CNAME`: dominio personalizado para GitHub Pages (no eliminar si usas dominio propio).

## Ejecutar en local
Opción rápida: abrir directamente [index.html](index.html) en tu navegador.

Opcionalmente, puedes servir el sitio con un servidor estático para simular un entorno más realista:

- Con Python (si lo tienes instalado):
```bash
# Desde la raíz del repo
python -m http.server 8080
# Abre http://localhost:8080
```

- Con Node.js (si usas http-server):
```bash
npm install -g http-server
http-server -p 8080
# Abre http://localhost:8080
```

- Con la extensión “Live Server” de VS Code: abre `index.html` y ejecuta “Open with Live Server”.

## Flujo de desarrollo
- HTML: edita las secciones en [sections/](sections) y la estructura base en [index.html](index.html).
- CSS: ajusta estilos globales en [style.css](style.css).
- JS: añade o modifica interacciones en [main.js](main.js).
- Recursos: coloca imágenes/archivos en [assets/](assets).

Sugerencias:
- Mantén una semántica HTML correcta para accesibilidad.
- Usa clases y variables CSS coherentes para facilitar mantenibilidad.
- Prueba en móvil y escritorio para verificar diseño responsive.

## Despliegue (GitHub Pages)
Este repositorio está preparado para publicarse con GitHub Pages (rama por defecto: `portf-f1`). Pasos típicos:
1. Haz commit de tus cambios y súbelos a la rama por defecto.
2. En GitHub, configura GitHub Pages para usar la rama por defecto o la que prefieras.
3. Si usas dominio propio, mantén actualizado el archivo [CNAME](CNAME) con tu dominio.

Notas:
- Los cambios en la rama publicada pueden tardar unos minutos en reflejarse.
- Evita borrar o sobrescribir `CNAME` si ya tienes un dominio configurado.

## Mantenimiento y tareas comunes
- Añadir una nueva sección: crea un archivo en [sections/](sections) (por ejemplo, `experience.html`) y enlázalo desde la navegación en [index.html](index.html) o cárgalo dinámicamente desde [main.js](main.js).
- Actualizar estilos: centraliza modificaciones en [style.css](style.css) para mantener consistencia.
- Optimizar recursos: comprime imágenes en [assets/](assets) y usa formatos modernos cuando sea posible.

## Autor
- iJKENNEDY

---
¿Necesitas que personalice este README con la URL pública exacta o capturas? Indícame el dominio/URL y lo añado.