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

## CI/CD con Azure DevOps

Este proyecto está integrado con **Azure DevOps Pipelines** usando un pipeline YAML.

- **Archivo**: `azure-pipelines.yml` en la raíz.
- **Pool**: `SelfHosted` → corre en mi propio agente local.
- **Jobs**:
  - `Build Frontend`: instala dependencias de `front`, corre `npm run build` y publica `front-dist`.
  - `Build Backend`: instala dependencias de `back`, corre `npm run build` y publica `back-dist`.

### Artefactos
En cada ejecución se generan artefactos descargables:
- `front-dist/`
- `back-dist/`

Se pueden ver en la pestaña **Artifacts** de la run en Azure DevOps.

### Cómo verlo correr
1. Ir a *Pipelines → Pipelines* en Azure DevOps.
2. Seleccionar el pipeline `TP04-Pipelines`.
3. Ejecutar una run.
4. Ver logs de **Build Frontend** y **Build Backend**.
5. Revisar pestaña **Artifacts** para confirmar que se publicaron `front-dist` y `back-dist`.

### Prerrequisitos del agente
- Tener instalado el **Azure DevOps Agent** en la máquina local.
- Estar registrado en el pool `SelfHosted` y en estado **Online**.

