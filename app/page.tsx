import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Folder, Play, Settings } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Monorepo Simple</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Frontend React + Backend Express configurado y listo para desarrollo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Frontend Card */}
          <Card className="border-2 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Folder className="h-5 w-5 text-blue-600" />
                  Frontend
                </CardTitle>
                <Badge variant="secondary">React + Vite</Badge>
              </div>
              <CardDescription>Aplicación React con Vite configurada en JavaScript</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <p className="text-sm font-mono text-slate-700 dark:text-slate-300">📁 /front/</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Puerto: 5173 | Build: front/dist/</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Play className="h-4 w-4 mr-1" />
                  npm run dev:front
                </Button>
                <Button size="sm" variant="outline">
                  <Settings className="h-4 w-4 mr-1" />
                  npm run build:front
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Backend Card */}
          <Card className="border-2 border-green-200 dark:border-green-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Folder className="h-5 w-5 text-green-600" />
                  Backend
                </CardTitle>
                <Badge variant="secondary">Node.js + Express</Badge>
              </div>
              <CardDescription>API REST con Express configurada en JavaScript</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <p className="text-sm font-mono text-slate-700 dark:text-slate-300">📁 /back/</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Puerto: 3001 | Build: back/dist/</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Play className="h-4 w-4 mr-1" />
                  npm run dev:back
                </Button>
                <Button size="sm" variant="outline">
                  <Settings className="h-4 w-4 mr-1" />
                  npm run build:back
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* API Endpoints */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Endpoints Disponibles</CardTitle>
            <CardDescription>API REST del backend con endpoints de ejemplo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div>
                  <Badge variant="outline" className="mr-2">
                    GET
                  </Badge>
                  <code className="text-sm">/api/hello</code>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{'{ "msg": "Hola desde el Backend" }'}</p>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div>
                  <Badge variant="outline" className="mr-2">
                    GET
                  </Badge>
                  <code className="text-sm">/api/status</code>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Estado del servicio</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Start */}
        <Card>
          <CardHeader>
            <CardTitle>Inicio Rápido</CardTitle>
            <CardDescription>Comandos para empezar a desarrollar</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">1. Instalar dependencias</h4>
                <code className="block p-2 bg-slate-100 dark:bg-slate-800 rounded text-sm">
                  node scripts/install-all.js
                </code>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">2. Desarrollo</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  <code className="block p-2 bg-slate-100 dark:bg-slate-800 rounded text-sm">npm run dev:front</code>
                  <code className="block p-2 bg-slate-100 dark:bg-slate-800 rounded text-sm">npm run dev:back</code>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">3. Build para producción</h4>
                <code className="block p-2 bg-slate-100 dark:bg-slate-800 rounded text-sm">
                  node scripts/build-monorepo.js
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-400">
            ¿Necesitas más información? Consulta el{" "}
            <Button variant="link" className="p-0 h-auto">
              <ExternalLink className="h-4 w-4 mr-1" />
              README.md
            </Button>
          </p>
        </div>
      </div>
    </div>
  )
}
