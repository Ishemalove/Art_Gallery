"use client"

import { useState, useEffect } from "react"
import type { Artwork, ArtworkFilters, ApiResponse } from "@/lib/types"

export function useArtworks(filters: ArtworkFilters = {}) {
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 10,
    hasMore: false,
  })

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setLoading(true)
        setError(null)

        const params = new URLSearchParams()

        if (filters.type) params.append("type", filters.type)
        if (filters.category) params.append("category", filters.category)
        if (filters.featured !== undefined) params.append("featured", filters.featured.toString())
        if (filters.tags && filters.tags.length > 0) params.append("tags", filters.tags.join(","))
        if (filters.limit) params.append("limit", filters.limit.toString())
        if (filters.offset) params.append("offset", filters.offset.toString())

        const response = await fetch(`/api/artworks?${params.toString()}`)
        const result: ApiResponse<Artwork[]> = await response.json()

        if (result.success) {
          setArtworks(result.data)
          if (result.pagination) {
            setPagination(result.pagination)
          }
        } else {
          setError(result.message || "Failed to fetch artworks")
        }
      } catch (err) {
        setError("Network error occurred")
        console.error("Error fetching artworks:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchArtworks()
  }, [filters.type, filters.category, filters.featured, filters.tags?.join(","), filters.limit, filters.offset])

  return { artworks, loading, error, pagination }
}

export function useArtwork(id: string) {
  const [artwork, setArtwork] = useState<Artwork | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(`/api/artworks/${id}`)
        const result: ApiResponse<Artwork> = await response.json()

        if (result.success) {
          setArtwork(result.data)
        } else {
          setError(result.message || "Failed to fetch artwork")
        }
      } catch (err) {
        setError("Network error occurred")
        console.error("Error fetching artwork:", err)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchArtwork()
    }
  }, [id])

  return { artwork, loading, error }
}
