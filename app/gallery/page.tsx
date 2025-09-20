"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
 
import { ArtworkCard } from "@/components/artwork-card"
import { GalleryFilters } from "@/components/gallery-filters"
import { GalleryPagination } from "@/components/gallery-pagination"
import { useArtworks } from "@/hooks/use-artworks"
import type { ArtworkFilters } from "@/lib/types"
import { Grid, List, SortAsc } from "lucide-react"

export default function GalleryPage() {
  

  const [filters, setFilters] = useState<ArtworkFilters>({
    limit: 12,
    offset: 0,
  })

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "title">("newest")
  const [categories, setCategories] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])

  const { artworks, loading, error, pagination } = useArtworks(filters)

  // We now render cards from artworks so names/descriptions show for all 42

  // Use artwork metadata when available to label photos, else derive a simple title
  const photos = artworks.map((a) => ({
    id: a.id,
    title: a.title,
    description: a.description,
    thumbnailUrl: a.thumbnailUrl,
  }))

  // Use API pagination metadata
  const pageSize = filters.limit || 12
  const currentPage = Math.floor((filters.offset || 0) / pageSize) + 1
  const totalPages = Math.ceil((pagination.total || 0) / pageSize)

  // Fetch categories and tags on mount
  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const [categoriesRes, tagsRes] = await Promise.all([
          fetch("/api/artworks?categories=true"),
          fetch("/api/artworks?tags=all"),
        ])

        const categoriesData = await categoriesRes.json()
        const tagsData = await tagsRes.json()

        if (categoriesData.success) setCategories(categoriesData.data)
        if (tagsData.success) setTags(tagsData.data)
      } catch (error) {
        console.error("Error fetching metadata:", error)
      }
    }

    fetchMetadata()
  }, [])

  const handleFiltersChange = (newFilters: ArtworkFilters) => {
    setFilters(newFilters)
  }

  const handlePageChange = (page: number) => {
    const newOffset = (page - 1) * (filters.limit || 12)
    setFilters({ ...filters, offset: newOffset })
  }

  

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">3D</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">Art Gallery</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <Button variant="outline" size="sm">
            View All Works
          </Button>
        </div>
      </header>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Photo & Art Gallery</h1>
          <p className="text-muted-foreground text-lg">A living journal of feelings, light, and quiet stories</p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <GalleryFilters filters={filters} onFiltersChange={handleFiltersChange} categories={categories} tags={tags} />
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{`${pagination.total} photos`}</span>
            {filters.type && <Badge variant="secondary">Photos</Badge>}
            {filters.category && (
              <Badge variant="secondary">{filters.category.charAt(0).toUpperCase() + filters.category.slice(1)}</Badge>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Sort */}
            <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
              <SelectTrigger className="w-32">
                <SortAsc className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="title">Title</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex border rounded-md">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <p className="text-destructive mb-4">Error loading artworks: {error}</p>
            <Button variant="outline" onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        )}

        {/* Artworks Grid */}
        {!loading && !error && (
          <>
            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
              }`}
            >
              {photos.map((photo) => (
                <ArtworkCard
                  key={photo.id}
                  id={photo.id}
                  title={photo.title}
                  description={photo.description}
                  thumbnailUrl={photo.thumbnailUrl}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <GalleryPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  hasMore={currentPage < totalPages}
                  onPageChange={handlePageChange}
                  loading={loading}
                />
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {!loading && !error && photos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No artworks found matching your criteria</p>
            <Button variant="outline" onClick={() => handleFiltersChange({ limit: filters.limit })}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      
    </div>
  )
}

// All-photos strip removed per requirements
