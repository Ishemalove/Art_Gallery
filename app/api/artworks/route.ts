import { type NextRequest, NextResponse } from "next/server"
import { getArtworks, getArtworkCategories, getArtworkTags, artworksDatabase } from "@/lib/artwork-data"
import type { ArtworkFilters, ApiResponse, Artwork } from "@/lib/types"
 
 

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    // Parse query parameters
    const filters: ArtworkFilters = {
      type: (searchParams.get("type") as "render" | undefined) || undefined,
      category: searchParams.get("category") || undefined,
      featured:
        searchParams.get("featured") === "true" ? true : searchParams.get("featured") === "false" ? false : undefined,
      tags: searchParams.get("tags")?.split(",").filter(Boolean) || undefined,
      limit: searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")!) : undefined,
      offset: searchParams.get("offset") ? Number.parseInt(searchParams.get("offset")!) : undefined,
    }

    // Special endpoints
    if (searchParams.get("categories") === "true") {
      const categories = getArtworkCategories()
      const response: ApiResponse<string[]> = {
        data: categories,
        success: true,
        message: "Categories retrieved successfully",
      }
      return NextResponse.json(response)
    }

    if (searchParams.get("tags") === "all") {
      const tags = getArtworkTags()
      const response: ApiResponse<string[]> = {
        data: tags,
        success: true,
        message: "Tags retrieved successfully",
      }
      return NextResponse.json(response)
    }

    // Start with data from artwork-data so titles/descriptions come from there
    const full = getArtworks({ ...filters, limit: undefined, offset: undefined })

    // Return ALL curated entries so you can see missing images with their descriptions
    const filtered = full.filter(a => a.thumbnailUrl !== "/IMG_20250714_161702.jpg")
    const total = filtered.length
    const limit = filters.limit || 10
    const offset = filters.offset || 0
    const page = Math.floor(offset / limit) + 1
    const artworks = filtered.slice(offset, offset + limit)
    const hasMore = offset + artworks.length < total

    const response: ApiResponse<Artwork[]> = {
      data: artworks,
      success: true,
      message: "Artworks retrieved successfully",
      pagination: {
        total,
        page,
        limit,
        hasMore,
      },
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error("Error fetching artworks:", error)

    const response: ApiResponse<null> = {
      data: null,
      success: false,
      message: "Failed to fetch artworks",
    }

    return NextResponse.json(response, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const artworkData = await request.json()

    // Generate new ID
    const newId = (Math.max(...artworksDatabase.map((a) => Number.parseInt(a.id))) + 1).toString()

    // Create new artwork
    const newArtwork: Artwork = {
      id: newId,
      title: artworkData.title,
      description: artworkData.description,
      thumbnailUrl: `/IMG_20250728_174917.jpg`,
      renderUrl: `/IMG_20250805_172351.jpg`,
      type: "render",
      tags: artworkData.tags || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      featured: artworkData.featured || false,
      category: artworkData.category,
      fileSize: artworkData.fileSize,
      polyCount: artworkData.polyCount,
      software: artworkData.software || [],
    }

    // In a real app, this would save to a database
    artworksDatabase.push(newArtwork)

    const response: ApiResponse<Artwork> = {
      data: newArtwork,
      success: true,
      message: "Artwork created successfully",
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error("Error creating artwork:", error)

    const response: ApiResponse<null> = {
      data: null,
      success: false,
      message: "Failed to create artwork",
    }

    return NextResponse.json(response, { status: 500 })
  }
}
