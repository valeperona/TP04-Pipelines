import { execSync } from "child_process"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function runCommand(command, cwd) {
  try {
    console.log(`🔨 Ejecutando: ${command}`)
    console.log(`📁 En directorio: ${cwd}`)

    execSync(command, {
      cwd,
      stdio: "inherit",
      encoding: "utf8",
    })

    console.log(`✅ Completado: ${command}\n`)
  } catch (error) {
    console.error(`❌ Error ejecutando: ${command}`)
    console.error(error.message)
    process.exit(1)
  }
}

async function buildMonorepo() {
  console.log("🚀 Iniciando build del monorepo...\n")

  const rootDir = path.join(__dirname, "..")
  const frontDir = path.join(rootDir, "front")
  const backDir = path.join(rootDir, "back")

  try {
    // Build Frontend
    console.log("📦 Building Frontend...")
    runCommand("npm run build", frontDir)

    // Build Backend
    console.log("📦 Building Backend...")
    runCommand("npm run build", backDir)

    console.log("🎉 ¡Build del monorepo completado exitosamente!")
    console.log("📁 Frontend build: front/dist/")
    console.log("📁 Backend build: back/dist/")
  } catch (error) {
    console.error("❌ Error durante el build del monorepo:", error)
    process.exit(1)
  }
}

buildMonorepo()
