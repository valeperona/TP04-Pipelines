# Monorepo Simple - Frontend React + Backend Express

Un monorepo simple que contiene un frontend React con Vite y un backend Express, diseñado para ser fácil de integrar en pipelines de CI/CD.

## 📁 Estructura del Proyecto

\`\`\`
monorepo-simple/
├── front/                 # Frontend React con Vite
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   ├── dist/              # Build del frontend (generado)
│   ├── package.json
│   └── vite.config.js
├── back/                  # Backend Express
│   ├── src/
│   │   └── index.js
│   ├── dist/              # Build del backend (generado)
│   ├── scripts/
│   │   └── build.js
│   └── package.json
├── scripts/               # Scripts del monorepo
│   ├── build-monorepo.js
│   └── install-all.js
├── package.json           # Configuración raíz
└── README.md
\`\`\`

## 🚀 Inicio Rápido

### 1. Instalar Dependencias

\`\`\`bash
# Opción 1: Instalar todas las dependencias automáticamente
node scripts/install-all.js

# Opción 2: Instalar manualmente
cd front && npm install
cd ../back && npm install
\`\`\`

### 2. Desarrollo

\`\`\`bash
# Frontend (puerto 5173)
npm run dev:front
# o
cd front && npm run dev

# Backend (puerto 3001)
npm run dev:back
# o
cd back && npm run dev
\`\`\`

### 3. Build para Producción

\`\`\`bash
# Build completo del monorepo
node scripts/build-monorepo.js

# O builds individuales
npm run build:front  # Genera front/dist/
npm run build:back   # Genera back/dist/
\`\`\`

### 4. Ejecutar en Producción

\`\`\`bash
# Después del build, ejecutar el backend
npm run start:back
# o
cd back && npm run start
\`\`\`

## 📋 Scripts Disponibles

### Scripts Raíz (package.json)

| Script | Descripción |
|--------|-------------|
| `npm run dev:front` | Inicia el frontend en modo desarrollo |
| `npm run dev:back` | Inicia el backend en modo desarrollo |
| `npm run build:front` | Build del frontend |
| `npm run build:back` | Build del backend |
| `npm run build:all` | Build de ambos proyectos |
| `npm run start:back` | Ejecuta el backend en producción |
| `npm run install:all` | Instala dependencias de ambos proyectos |

### Scripts del Frontend (/front)

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo (puerto 5173) |
| `npm run build` | Build para producción → `/front/dist` |
| `npm run preview` | Preview del build |

### Scripts del Backend (/back)

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build para producción → `/back/dist` |
| `npm run start` | Ejecuta desde `/back/dist` |

## 🌐 Endpoints del Backend

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/` | Información general de la API |
| GET | `/api/hello` | Devuelve `{ "msg": "Hola desde el Backend" }` |
| GET | `/api/status` | Estado del servicio |

## 🔧 Configuración

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Puerto**: 5173 (desarrollo)
- **Build Output**: `front/dist/`

### Backend
- **Runtime**: Node.js
- **Framework**: Express
- **Puerto**: 3001
- **Build Output**: `back/dist/`

## 🚀 CI/CD

Este proyecto está optimizado para pipelines de CI/CD:

### Ejemplo de Pipeline

\`\`\`yaml
# .github/workflows/deploy.yml
name: Build and Deploy

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: node scripts/install-all.js
    
    - name: Build projects
      run: node scripts/build-monorepo.js
    
    - name: Deploy
      # Aquí van los pasos de deploy
      run: echo "Deploy to production"
\`\`\`

### Comandos para CI/CD

\`\`\`bash
# Instalar dependencias
node scripts/install-all.js

# Build completo
node scripts/build-monorepo.js

# Los archivos de producción estarán en:
# - front/dist/ (archivos estáticos)
# - back/dist/ (código del servidor)
\`\`\`

## 📦 Dependencias Principales

### Frontend
- React 18.2.0
- Vite 5.2.0
- @vitejs/plugin-react 4.2.1

### Backend
- Express 4.18.2
- CORS 2.8.5
- fs-extra 11.1.1 (para build)

## 🛠️ Desarrollo

### Agregar nuevas dependencias

\`\`\`bash
# Frontend
cd front && npm install nueva-dependencia

# Backend
cd back && npm install nueva-dependencia
\`\`\`

### Estructura de archivos recomendada

\`\`\`
front/src/
├── components/     # Componentes React
├── pages/         # Páginas/rutas
├── hooks/         # Custom hooks
├── utils/         # Utilidades
└── styles/        # Estilos CSS

back/src/
├── routes/        # Rutas de Express
├── middleware/    # Middlewares
├── controllers/   # Controladores
├── models/        # Modelos de datos
└── utils/         # Utilidades
\`\`\`

## 🐛 Troubleshooting

### Problemas comunes

1. **Puerto ocupado**: Cambiar puertos en `vite.config.js` (frontend) o `src/index.js` (backend)
2. **CORS errors**: Verificar configuración de CORS en `back/src/index.js`
3. **Build fails**: Verificar que todas las dependencias estén instaladas

### Logs útiles

\`\`\`bash
# Ver logs del backend
cd back && npm run dev

# Ver logs del build
node scripts/build-monorepo.js
\`\`\`

## 📄 Licencia

MIT License - ver archivo LICENSE para más detalles.
