import express from "express"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Rutas
app.get("/api/hello", (req, res) => {
  res.json({
    msg: "Hola desde el Backend",
    timestamp: new Date().toISOString(),
  })
})

app.get("/api/status", (req, res) => {
  res.json({
    status: "OK",
    service: "Backend Express",
    version: "1.0.0",
  })
})

// Ruta por defecto
app.get("/", (req, res) => {
  res.json({
    message: "Backend API funcionando correctamente",
    endpoints: ["GET /api/hello", "GET /api/status"],
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`)
  console.log(`📡 API disponible en http://localhost:${PORT}/api/hello`)
})
