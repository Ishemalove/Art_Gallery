"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Download } from "lucide-react"

interface ArtworkCardProps {
  id: string
  title: string
  description: string
  thumbnailUrl: string
  modelUrl: string
  type: "model" | "render"
  onViewModel: (modelUrl: string, title: string, description: string) => void
}

export function ArtworkCard({ id, title, description, thumbnailUrl, modelUrl, type, onViewModel }: ArtworkCardProps) {
  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
        {/* Placeholder for thumbnail - in real app this would be an image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">{type === "model" ? "🎯" : "🎨"}</span>
            </div>
            <p className="text-sm text-muted-foreground">{type === "model" ? "3D Model" : "Render"}</p>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-2">
            {type === "model" && (
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  onViewModel(modelUrl, title, description)
                }}
              >
                <Eye className="h-4 w-4 mr-2" />
                View 3D
              </Button>
            )}
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold mb-2 text-balance">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3 text-pretty">{description}</p>
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {type === "model" ? "3D Model" : "Render"}
          </Badge>
          <Button variant="ghost" size="sm">
            View Details →
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
