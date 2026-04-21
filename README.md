# Cuarto de Chenz - Sitio Web Oficial

**Versión:** 1.0.0  
**Estado:** Producción ✅

## 📝 Descripción

Cuarto de Chenz es una plataforma web moderna diseñada para crear una comunidad de estudio y trabajo productiva. El sitio ofrece herramientas interactivas, sistema de comandos, gestión de tareas y un ambiente optimizado para sesiones de estudio y trabajo en vivo.

## 🚀 Características Principales

### 🏠 Espacio de Estudio y Trabajo
- **Sistema Pomodoro Personalizado**: Sesiones de 60 minutos de trabajo con 10 minutos de descanso
- **Sonidos Ambientales**: Efectos de lluvia para mejorar concentración y productividad
- **Transmisiones en Vivo**: Horarios regulares de lunes a jueves y fines de semana

### 🛠️ Herramientas Interactivas
- **Sistema de Comandos**: Más de 25 comandos para gestión de tareas y actividades
- **Galería de Sonidos**: Biblioteca completa con efectos de sonido para notificaciones
- **Timer Personalizado**: Sistema !focus para usuarios individuales
- **Juegos Interactivos**: Actividades para mantener el chat activo durante descansos

### 📱 Integración Social
- **Discord**: Comunidad principal para interacción y soporte
- **WhatsApp**: Grupo para notificaciones importantes
- **Redes Sociales**: Instagram, TikTok, YouTube, Twitter/X
- **Notificaciones Push**: Sistema de avisos para novedades

### 💎 Sistema de Moneda Virtual
- **RoffCoins**: Moneda virtual del canal
- **Sistema de Suscripciones**: Planes premium con beneficios exclusivos
- **Recompensas**: Sistema de logros y reconocimientos

## 🌐 Cobertura Horaria

### Lunes a Jueves
- **Argentina**: 14:00 a 21:00 hs
- **Brasil**: 14:00 a 21:00 hs
- **España**: 19:00 a 02:00 hs
- **México**: 11:00 a 18:00 hs
- **Portugal**: 18:00 a 01:00 hs
- **Colombia**: 12:00 a 19:00 hs

### Sábados y Domingos
- Mismos horarios que días de semana

## 🛠️ Stack Tecnológico

### Frontend
- **React 19** - Framework principal
- **Vite** - Bundler y servidor de desarrollo
- **React Router DOM v7** - Sistema de routing con carga lazy
- **TailwindCSS** - Framework de estilos
- **Flowbite React** - Componentes UI
- **AOS** - Animaciones al hacer scroll

### Desarrollo
- **JavaScript/JSX** - Lenguaje principal
- **ESLint** - Linting y calidad de código
- **Prettier** - Formato de código
- **TypeScript** - Configurado para tipado opcional

### Despliegue
- **Netlify** - Hosting principal
- **Vercel** - Hosting alternativo
- **GitHub Actions** - CI/CD automatizado

## 📁 Estructura del Proyecto

```
src/
├── Components/          # Componentes reutilizables
│   ├── Footer.jsx       # Pie de página
│   ├── Navbar.jsx       # Barra de navegación
│   ├── buttons/         # Botones personalizados
│   ├── card/            # Componentes de tarjetas
│   ├── img/             # Iconos de imágenes
│   └── img_icons/       # Iconos de redes sociales
├── Pages/               # Páginas principales
│   ├── Inicio.jsx       # Landing page
│   ├── Comandos.jsx     # Sistema de comandos
│   ├── Sonidos.jsx      # Galería de sonidos
│   ├── Avisos.jsx       # Sistema de notificaciones
│   ├── Reglas.jsx       # Reglas del canal
│   ├── RoffCoins.jsx    # Sistema de moneda virtual
│   └── Subscription.jsx # Sistema de suscripciones
├── Layout/              # Layout principal
├── routes/              # Configuración de rutas
├── hooks/               # Hooks personalizados
├── utils/               # Utilidades
├── Data/                # Datos estáticos (imágenes, sonidos)
└── assets/              # Recursos estáticos
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/lucianoontiveros/sitecuartodechenz.git

# Navegar al directorio
cd 12-sitecuartodechentz

# Instalar dependencias
npm install

# Aplicar patch de Flowbite React
npm run postinstall
```

### Scripts Disponibles
```bash
# Desarrollo
npm run dev              # Servidor de desarrollo con hot reload

# Producción
npm run build            # Build para producción
npm run preview          # Previsualizar build de producción
npm run build:analyze    # Analizar tamaño del bundle

# Calidad de Código
npm run lint             # Corregir automáticamente con ESLint
npm run lint:check       # Verificar errores sin corregir
npm run format           # Formatear código con Prettier
npm run type-check       # Verificación de tipos TypeScript

# Mantenimiento
npm run clean            # Limpiar build y cache
```

## 🔧 Configuración de Variables de Entorno

Crear archivo `.env.local` en la raíz del proyecto:

```env
# Configuración de la aplicación
VITE_APP_NAME=Cuarto de Chenz
VITE_APP_VERSION=1.0.0

# URLs de APIs (si aplica)
VITE_API_URL=https://api.ejemplo.com
VITE_DISCORD_WEBHOOK=https://discord.com/api/webhooks/...

# Configuración de analytics (opcional)
VITE_GA_TRACKING_ID=GA-XXXXXXXXX
```

## 🌐 Despliegue

### Netlify
1. Conectar repositorio a Netlify
2. Configurar build command: `npm run build`
3. Configurar publish directory: `dist`
4. Agregar variables de entorno necesarias

### Vercel
1. Conectar repositorio a Vercel
2. Configurar framework preset: `Vite`
3. Agregar variables de entorno
4. Despliegue automático en cada push a main

### Manual
```bash
# Build para producción
npm run build

# La carpeta `dist` contiene los archivos listos para despliegue
# Subir a cualquier servidor web estático
```

## 🤝 Contribución

1. Fork del repositorio
2. Crear rama feature: `git checkout -b feature/nueva-funcionalidad`
3. Hacer commits descriptivos: `git commit -m "feat: agregar nueva funcionalidad"`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abrir Pull Request

### Flujo de Trabajo
- **main**: Rama de producción (solo releases estables)
- **develop**: Rama de desarrollo (integración continua)
- **release/vX.X.X**: Ramas de release (pre-producción)
- **feature/nombre**: Ramas de nuevas funcionalidades

## 📝 Licencia

Este proyecto está bajo licencia MIT. Ver archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

- **Discord**: [Servidor Oficial](https://discord.gg/UdU3wvpWu7)
- **Instagram**: [@luciano.a.ontiveros](https://www.instagram.com/luciano.a.ontiveros/)
- **Email**: contacto@cuartodechenz.com
- **GitHub**: [lucianoontiveros](https://github.com/lucianoontiveros)

## 🙏 Agradecimientos

- Comunidad de Cuarto de Chenz por su apoyo constante
- Contribuidores de código y diseño
- Todos los usuarios que hacen posible este espacio

---

**Cuarto de Chenz v1.0.0** - *Donde el esfuerzo se transforma en logros* 🚀
