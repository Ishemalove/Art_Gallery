"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, X } from "lucide-react"
import type { ArtworkFilters } from "@/lib/types"

interface GalleryFiltersProps {
  filters: ArtworkFilters
  onFiltersChange: (filters: ArtworkFilters) => void
  categories: string[]
  tags: string[]
}

export function GalleryFilters({ filters, onFiltersChange, categories, tags }: GalleryFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const handleFilterChange = (key: keyof ArtworkFilters, value: any) => {
    onFiltersChange({ ...filters, [key]: value, offset: 0 })
  }

  const handleTagToggle = (tag: string) => {
    const currentTags = filters.tags || []
    const newTags = currentTags.includes(tag) ? currentTags.filter((t) => t !== tag) : [...currentTags, tag]

    handleFilterChange("tags", newTags.length > 0 ? newTags : undefined)
  }

  const clearFilters = () => {
    setSearchTerm("")
    onFiltersChange({ limit: filters.limit })
  }

  const hasActiveFilters =
    filters.type || filters.category || filters.featured !== undefined || (filters.tags && filters.tags.length > 0)

  return (
    <div className="space-y-4">
      {/* Search and Filter Toggle */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search artworks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
            {hasActiveFilters && (
              <Badge
                variant="secondary"
                className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                !
              </Badge>
            )}
          </Button>
          {hasActiveFilters && (
            <Button variant="ghost" onClick={clearFilters} size="sm">
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Filter Artworks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Type Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Type</label>
              <div className="flex gap-2">
                <Button
                  variant={filters.type === undefined ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange("type", undefined)}
                >
                  All
                </Button>
                <Button
                  variant={filters.type === "render" ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange("type", "render")}
                >
                  Photos
                </Button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <Select
                value={filters.category || "all"}
                onValueChange={(value) => handleFilterChange("category", value === "all" ? undefined : value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Featured Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Featured</label>
              <div className="flex gap-2">
                <Button
                  variant={filters.featured === undefined ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange("featured", undefined)}
                >
                  All
                </Button>
                <Button
                  variant={filters.featured === true ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange("featured", true)}
                >
                  Featured Only
                </Button>
              </div>
            </div>

            {/* Tags Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Tags</label>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={filters.tags?.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/80"
                    onClick={() => handleTagToggle(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
