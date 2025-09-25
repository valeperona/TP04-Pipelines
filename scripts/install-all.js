import { execSync } from "child_process"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function runCommand(command, cwd, description) {
  try {
    console.log(`🔨 ${description}`)
    console.log(`📁 En directorio: ${cwd}`)

    execSync(command, {
      cwd,
      stdio: "inherit",
      encoding: "utf8",
    })

    console.log(`✅ ${description} completado\n`)
  } catch (error) {
    console.error(`❌ Error en ${description}`)
    console.error(error.message)
    process.exit(1)
  }
}

async function installAll() {
  console.log("📦 Instalando dependencias del monorepo...\n")

  const rootDir = path.join(__dirname, "..")
  const frontDir = path.join(rootDir, "front")
  const backDir = path.join(rootDir, "back")

  try {
    // Install Frontend dependencies
    runCommand("npm install", frontDir, "Instalando dependencias del Frontend")

    // Install Backend dependencies
    runCommand("npm install", backDir, "Instalando dependencias del Backend")

    console.log("🎉 ¡Todas las dependencias instaladas exitosamente!")
    console.log("🚀 Puedes ejecutar:")
    console.log("   - npm run dev:front  (para desarrollo del frontend)")
    console.log("   - npm run dev:back   (para desarrollo del backend)")
    console.log("   - npm run build:all  (para build de ambos proyectos)")
  } catch (error) {
    console.error("❌ Error durante la instalación:", error)
    process.exit(1)
  }
}

installAll()
