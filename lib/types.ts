export interface Artwork {
  id: string
  title: string
  description: string
  thumbnailUrl: string
  modelUrl?: string
  renderUrl?: string
  type: "model" | "render"
  tags: string[]
  createdAt: string
  updatedAt: string
  featured: boolean
  category: string
  fileSize?: string
  polyCount?: number
  software: string[]
}

export interface ArtworkFilters {
  type?: "model" | "render"
  category?: string
  featured?: boolean
  tags?: string[]
  limit?: number
  offset?: number
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  pagination?: {
    total: number
    page: number
    limit: number
    hasMore: boolean
  }
}
