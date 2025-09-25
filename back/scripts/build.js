import fs from "fs-extra"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const srcDir = path.join(__dirname, "../src")
const distDir = path.join(__dirname, "../dist")

async function build() {
  try {
    console.log("🔨 Iniciando build del backend...")

    // Limpiar directorio dist
    await fs.remove(distDir)
    console.log("🧹 Directorio dist limpiado")

    // Copiar archivos fuente a dist
    await fs.copy(srcDir, distDir)
    console.log("📁 Archivos copiados a dist/")

    // Copiar package.json para dependencias de producción
    const packageJson = await fs.readJson(path.join(__dirname, "../package.json"))
    const prodPackageJson = {
      name: packageJson.name,
      version: packageJson.version,
      description: packageJson.description,
      main: packageJson.main,
      type: packageJson.type,
      dependencies: packageJson.dependencies,
    }

    await fs.writeJson(path.join(distDir, "../package.json"), prodPackageJson, { spaces: 2 })

    console.log("✅ Build completado exitosamente")
    console.log(`📦 Archivos generados en: ${distDir}`)
  } catch (error) {
    console.error("❌ Error durante el build:", error)
    process.exit(1)
  }
}

build()
