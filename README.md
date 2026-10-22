# 🏐 Locos por el Voleibol — Asociación Deportiva

> **Plataforma web oficial, sistema de inscripciones para deporte base escolar y panel de administración CMS completo.**  
> Desplegado en producción en: [https://locos-por-el-voley-ge.web.app](https://locos-por-el-voley-ge.web.app)

---

## 📌 Descripción del Proyecto

Plataforma integral desarrollada para la **Asociación Deportiva «Locos por el Voleibol»** en Malabo (Guinea Ecuatorial), dedicada a fomentar el deporte base, la competición nacional y la formación técnica en voleibol y voley playa desde 2010.

### 🌟 Funcionalidades Principales

1. **Web Pública Oficial (`index.html`)**
   - Identidad visual completa del club (Azul Marino Profundo `#061325`, Azul Eléctrico `#1e6091` y Amarillo Mimosa `#facc15`).
   - Escudo y logotipo oficial vectorizado.
   - Carrusel interactivo de fotografías con miniaturas y visualización ampliada.
   - **Galería de Eventos con Visor en Grande (Lightbox Fullscreen)**:
     - Álbumes de eventos deportivos (Torneos de Playa en Sipopo, Jornadas Escolares, Sede Central Don Bosco, etc.).
     - Filtros interactivos por categoría.
     - Visor en grande con navegación de fotos adelante/atrás (`‹ Detrás` / `Delante ›`), soporte para teclado (`←` / `→`) y gestos táctiles (*swipe*).
   - Secciones temáticas colapsibles (*Quiénes Somos*, *Artículos*, *Torneos y Competiciones*, *Galería*, *11 Colegios y Canchas*, *Sedes oficiales*).
   - Contenedor dinámico para nuevas secciones creadas desde la administración.

2. **Página de Inscripción a Talleres Escolares (`waiso.html`)**
   - Acceso independiente en `/taller-waiso`.
   - Formulario de inscripción para alumnos del Colegio E Waiso Ipola y centros invitados.
   - Cálculo automático de categoría por edad (Infantil/Cadete ≤ 14 años, Juvenil ≥ 15 años).
   - Verificación de límite de alumnos por número de teléfono de contacto (máximo 4 inscritos por WhatsApp/tutor).
   - Integración con base de datos en la nube **Cloud Firestore** (`inscripciones_waiso_ipola`) con sincronización en tiempo real y respaldo offline en `localStorage`.

3. **Panel de Administración General (`admin.html`)**
   - Página completa y dedicada de gestión protegida por clave en `/admin`.
   - **Gestión de Alumnos Inscritos**:
     - Conexión directa en tiempo real con Cloud Firestore.
     - Buscador por texto, filtros por centro escolar y categoría.
     - Métricas en vivo y exportación a archivo CSV descargable.
   - **Edición de Contenido Web (CMS)**:
     - Edición en tiempo real de titulares, textos, ejes de acción, sedes y teléfonos.
   - **Gestión de Galería, Drag & Drop y Álbumes de Eventos**:
     - Zona interactiva de arrastrar y soltar (Drag & Drop) para subir una o múltiples fotos.
     - Compresión automática en cliente optimizada para web.
     - Configuración y edición completa de álbumes de eventos deportivos (título, categoría, fecha, lugar, descripción y portada).
     - Visor integrado de fotos en grande con navegación previa/siguiente.
   - **Publicación de Artículos y Noticias**:
     - Editor de comunicados oficiales, propuestas y crónicas deportivas.
   - **Creación de Nuevas Secciones**:
     - Permite añadir áreas informativas adicionales con enlaces automáticos en el menú de navegación.
   - **Seguridad y Respaldo**:
     - Cambio de contraseña de acceso y descarga de copias de seguridad en formato JSON.

---

## 🛠️ Tecnologías y Arquitectura

- **Frontend**: HTML5 Semántico, CSS3 Moderno (CSS Custom Properties, Flexbox, CSS Grid), Vanilla JavaScript modular (ES6+ Modules).
- **Backend / BaaS**: Google Firebase (Firebase Hosting, Cloud Firestore, Firebase CLI).
- **Despliegue**: Firebase Hosting con rewrite rules limpias (`/admin`, `/taller-waiso`).
