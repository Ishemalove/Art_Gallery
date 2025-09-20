"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { X, Upload, Plus } from "lucide-react"
import type { Artwork } from "@/lib/types"

interface ArtworkFormProps {
  artwork?: Artwork
  onSave: (artwork: Partial<Artwork>) => void
  onCancel: () => void
  loading?: boolean
}

export function ArtworkForm({ artwork, onSave, onCancel, loading = false }: ArtworkFormProps) {
  const [formData, setFormData] = useState({
    title: artwork?.title || "",
    description: artwork?.description || "",
    type: (artwork?.type ?? "render") as "render",
    category: artwork?.category || "",
    featured: artwork?.featured || false,
    tags: artwork?.tags || [],
    software: artwork?.software || [],
    fileSize: artwork?.fileSize || "",
    polyCount: artwork?.polyCount || 0,
  })

  const [newTag, setNewTag] = useState("")
  const [newSoftware, setNewSoftware] = useState("")

  const categories = ["sculpture", "architecture", "character", "environment", "product", "experimental"]
  const commonSoftware = [
    "Blender",
    "Maya",
    "3ds Max",
    "Cinema 4D",
    "Houdini",
    "ZBrush",
    "Substance Painter",
    "V-Ray",
    "KeyShot",
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value })
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      handleInputChange("tags", [...formData.tags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tag: string) => {
    handleInputChange(
      "tags",
      formData.tags.filter((t) => t !== tag),
    )
  }

  const addSoftware = () => {
    if (newSoftware.trim() && !formData.software.includes(newSoftware.trim())) {
      handleInputChange("software", [...formData.software, newSoftware.trim()])
      setNewSoftware("")
    }
  }

  const removeSoftware = (software: string) => {
    handleInputChange(
      "software",
      formData.software.filter((s) => s !== software),
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{artwork ? "Edit Artwork" : "Add New Artwork"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Enter artwork title"
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="Describe your artwork..."
                rows={4}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="type">Type</Label>
                <div className="px-3 py-2 border rounded-md text-sm bg-muted/30">Photo</div>
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="featured"
                checked={formData.featured}
                onCheckedChange={(checked) => handleInputChange("featured", checked)}
              />
              <Label htmlFor="featured">Featured Artwork</Label>
            </div>
          </div>

          {/* File Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">File Information</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fileSize">File Size</Label>
                <Input
                  id="fileSize"
                  value={formData.fileSize}
                  onChange={(e) => handleInputChange("fileSize", e.target.value)}
                  placeholder="e.g., 2.4 MB"
                />
              </div>

              {/* No polygon count for photos */}
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-4">
            <Label>Tags</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                  {tag}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => removeTag(tag)} />
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add a tag"
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
              />
              <Button type="button" variant="outline" onClick={addTag}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Software */}
          <div className="space-y-4">
            <Label>Software Used</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.software.map((software) => (
                <Badge key={software} variant="outline" className="flex items-center gap-1">
                  {software}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => removeSoftware(software)} />
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Select value="" onValueChange={(value) => value && addSoftware()}>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Select software" />
                </SelectTrigger>
                <SelectContent>
                  {commonSoftware
                    .filter((s) => !formData.software.includes(s))
                    .map((software) => (
                      <SelectItem key={software} value={software}>
                        {software}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <Input
                value={newSoftware}
                onChange={(e) => setNewSoftware(e.target.value)}
                placeholder="Or type custom"
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSoftware())}
                className="flex-1"
              />
              <Button type="button" variant="outline" onClick={addSoftware}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* File Upload Placeholders */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Files</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">Thumbnail Image</p>
                <Button variant="outline" size="sm">
                  Upload Image
                </Button>
              </div>

              {/* No model upload for photos */}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : artwork ? "Update Artwork" : "Create Artwork"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
