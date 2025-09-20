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
}

export function ArtworkCard({ id, title, description, thumbnailUrl }: ArtworkCardProps) {
  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
        {/* Thumbnail image */}
        <img
          src={thumbnailUrl || "/placeholder.jpg"}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement
            target.src = "/placeholder.jpg"
          }}
        />
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold mb-2 text-balance">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3 text-pretty">{description}</p>
      </CardContent>
    </Card>
  )
}
