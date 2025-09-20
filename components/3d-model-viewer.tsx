"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Html, useGLTF } from "@react-three/drei"
import { Suspense, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, RotateCcw } from "lucide-react"

interface ModelProps {
  url: string
  scale?: number
}

function Model({ url, scale = 1 }: ModelProps) {
  const { scene } = useGLTF(url) as any
  return <primitive object={scene} scale={scale} />
}

function LoadingSpinner() {
  return (
    <Html center>
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    </Html>
  )
}

interface ModelViewerProps {
  modelUrl: string
  title: string
  description: string
  isOpen: boolean
  onClose: () => void
}

export function ModelViewer({ modelUrl, title, description, isOpen, onClose }: ModelViewerProps) {
  const [resetCamera, setResetCamera] = useState(0)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <Badge variant="secondary">Interactive 3D Model</Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={() => setResetCamera((prev: number) => prev + 1)}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset View
            </Button>
            <Button variant="outline" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* 3D Viewer */}
        <div className="flex-1 relative">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="w-full h-full">
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />

            <Suspense fallback={<LoadingSpinner />}>
              <Model url={modelUrl} />
              <Environment preset="studio" />
            </Suspense>

            <OrbitControls
              key={resetCamera}
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={1}
              maxDistance={20}
            />
          </Canvas>

          {/* Info Panel */}
          <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-80">
            <Card className="bg-card/95 backdrop-blur">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Blender</Badge>
                  <Badge variant="outline">3D Model</Badge>
                  <Badge variant="outline">Interactive</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Controls Help */}
          <div className="absolute top-4 right-4">
            <Card className="bg-card/95 backdrop-blur">
              <CardContent className="p-3">
                <div className="text-xs space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Left click + drag to rotate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Right click + drag to pan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Scroll to zoom</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
