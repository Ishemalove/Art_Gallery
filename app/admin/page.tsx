"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArtworkForm } from "@/components/artwork-form"
import { ArtworkManagementTable } from "@/components/artwork-management-table"
import { useArtworks } from "@/hooks/use-artworks"
import { Plus, BarChart3, Eye, Star, Package } from "lucide-react"
import type { Artwork } from "@/lib/types"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [editingArtwork, setEditingArtwork] = useState<Artwork | null>(null)
  const [showForm, setShowForm] = useState(false)

  const { artworks, loading, error } = useArtworks({ limit: 100 })

  const stats = {
    total: artworks.length,
    models: artworks.filter((a) => a.type === "model").length,
    renders: artworks.filter((a) => a.type === "render").length,
    featured: artworks.filter((a) => a.featured).length,
  }

  const handleAddNew = () => {
    setEditingArtwork(null)
    setShowForm(true)
    setActiveTab("form")
  }

  const handleEdit = (artwork: Artwork) => {
    setEditingArtwork(artwork)
    setShowForm(true)
    setActiveTab("form")
  }

  const handleSave = async (artworkData: Partial<Artwork>) => {
    // In a real app, this would make an API call
    console.log("Saving artwork:", artworkData)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setShowForm(false)
    setEditingArtwork(null)
    setActiveTab("manage")

    // Refresh data would happen here
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingArtwork(null)
    setActiveTab("manage")
  }

  const handleDelete = async (id: string) => {
    // In a real app, this would make an API call
    console.log("Deleting artwork:", id)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Refresh data would happen here
  }

  const handleToggleFeatured = async (id: string, featured: boolean) => {
    // In a real app, this would make an API call
    console.log("Toggling featured status:", id, featured)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 300))

    // Refresh data would happen here
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">3D</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">Gallery Admin</h1>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="/">View Gallery</a>
            </Button>
            <Button onClick={handleAddNew}>
              <Plus className="h-4 w-4 mr-2" />
              Add Artwork
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="manage">Manage Artworks</TabsTrigger>
            <TabsTrigger value="form" disabled={!showForm}>
              {editingArtwork ? "Edit Artwork" : "Add Artwork"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Artworks</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.total}</div>
                  <p className="text-xs text-muted-foreground">All artwork pieces</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">3D Models</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.models}</div>
                  <p className="text-xs text-muted-foreground">Interactive models</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Renders</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.renders}</div>
                  <p className="text-xs text-muted-foreground">Static renders</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Featured</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.featured}</div>
                  <p className="text-xs text-muted-foreground">Featured artworks</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm">New artwork "Abstract Geometric Sculpture" added</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm">Featured status updated for "Contemporary Architecture"</p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm">Gallery viewed 1,234 times this week</p>
                      <p className="text-xs text-muted-foreground">3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manage" className="space-y-6">
            <ArtworkManagementTable
              artworks={artworks}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onToggleFeatured={handleToggleFeatured}
              loading={loading}
            />
          </TabsContent>

          <TabsContent value="form" className="space-y-6">
            {showForm && (
              <ArtworkForm artwork={editingArtwork || undefined} onSave={handleSave} onCancel={handleCancel} />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
