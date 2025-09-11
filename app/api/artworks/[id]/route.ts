import { type NextRequest, NextResponse } from "next/server"
import { getArtworkById, artworksDatabase } from "@/lib/artwork-data"
import type { ApiResponse, Artwork } from "@/lib/types"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const artwork = getArtworkById(params.id)

    if (!artwork) {
      const response: ApiResponse<null> = {
        data: null,
        success: false,
        message: "Artwork not found",
      }
      return NextResponse.json(response, { status: 404 })
    }

    const response: ApiResponse<Artwork> = {
      data: artwork,
      success: true,
      message: "Artwork retrieved successfully",
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error("Error fetching artwork:", error)

    const response: ApiResponse<null> = {
      data: null,
      success: false,
      message: "Failed to fetch artwork",
    }

    return NextResponse.json(response, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const artworkData = await request.json()
    const existingArtworkIndex = artworksDatabase.findIndex((a) => a.id === params.id)

    if (existingArtworkIndex === -1) {
      const response: ApiResponse<null> = {
        data: null,
        success: false,
        message: "Artwork not found",
      }
      return NextResponse.json(response, { status: 404 })
    }

    // Update artwork
    const updatedArtwork: Artwork = {
      ...artworksDatabase[existingArtworkIndex],
      ...artworkData,
      updatedAt: new Date().toISOString(),
    }

    // In a real app, this would update in a database
    artworksDatabase[existingArtworkIndex] = updatedArtwork

    const response: ApiResponse<Artwork> = {
      data: updatedArtwork,
      success: true,
      message: "Artwork updated successfully",
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error("Error updating artwork:", error)

    const response: ApiResponse<null> = {
      data: null,
      success: false,
      message: "Failed to update artwork",
    }

    return NextResponse.json(response, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const existingArtworkIndex = artworksDatabase.findIndex((a) => a.id === params.id)

    if (existingArtworkIndex === -1) {
      const response: ApiResponse<null> = {
        data: null,
        success: false,
        message: "Artwork not found",
      }
      return NextResponse.json(response, { status: 404 })
    }

    // In a real app, this would delete from a database
    artworksDatabase.splice(existingArtworkIndex, 1)

    const response: ApiResponse<null> = {
      data: null,
      success: true,
      message: "Artwork deleted successfully",
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error("Error deleting artwork:", error)

    const response: ApiResponse<null> = {
      data: null,
      success: false,
      message: "Failed to delete artwork",
    }

    return NextResponse.json(response, { status: 500 })
  }
}
