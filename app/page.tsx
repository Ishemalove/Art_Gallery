"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import dynamic from "next/dynamic"
const ModelViewer = dynamic(() => import("@/components/3d-model-viewer").then(mod => mod.ModelViewer), { ssr: false })
import { ArtworkCard } from "@/components/artwork-card"
import { useArtworks } from "@/hooks/use-artworks"
import Link from "next/link"

export default function GalleryHomePage() {
  const [selectedModel, setSelectedModel] = useState<{
    url: string
    title: string
    description: string
  } | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const { artworks, loading, error } = useArtworks({ featured: true, limit: 6 })

  const heroImages = [
    "/colorful-generative-algorithmic-art-patterns.jpg",
    "/mixed-reality-ar-vr-futuristic-interface.jpg",
    "/abstract-3d-sculpture.png",
    "/modern-architecture-render.png",
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleViewModel = (modelUrl: string, title: string, description: string) => {
    setSelectedModel({ url: modelUrl, title, description })
  }

  const handleCloseViewer = () => {
    setSelectedModel(null)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse">
              <span className="text-primary-foreground font-bold text-sm">IA</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">Innovation Art Center</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#gallery"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Gallery
            </a>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Contact
            </Link>
          </nav>

          <Link href="/gallery">
            <Button
              variant="outline"
              size="sm"
              className="bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 transition-all duration-300 hover:scale-105"
            >
              Explore Art
            </Button>
          </Link>
        </div>
      </header>

      {/* Enhanced Hero Section with Dynamic Background */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-20" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse" />

        <div
          className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-accent/30 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-3 h-3 bg-primary/40 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        />

        <div
          className={`relative z-10 text-center space-y-6 px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse">
            Where Art Meets Innovation
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance">
            Digital <span className="text-primary animate-pulse">Art</span> Innovation{" "}
            <span className="text-accent animate-pulse">Center</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover groundbreaking digital artworks that push the boundaries of creativity. From 3D sculptures to
            generative art, mixed reality experiences to interactive installations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/gallery">
              <Button
                size="lg"
                className="text-lg px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Explore Innovation
              </Button>
            </Link>
            <Link href="/gallery?category=experimental">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                View Experiments
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Interactive Art Showcase</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hover over each artwork to reveal its story and creative process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: "/3d-character-design.png",
                title: "Digital Personas",
                description: "Exploring identity in virtual spaces",
                category: "3D Art",
              },
              {
                image: "/3d-environment-scene.png",
                title: "Immersive Worlds",
                description: "Crafting experiences beyond reality",
                category: "Environment",
              },
              {
                image: "/product-visualization-render.png",
                title: "Future Objects",
                description: "Reimagining everyday items",
                category: "Product Design",
              },
              {
                image: "/organic-3d-forms.png",
                title: "Natural Algorithms",
                description: "Where nature meets mathematics",
                category: "Generative",
              },
            ].map((artwork, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-background border hover:shadow-xl transition-all duration-500 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={artwork.image || "/placeholder.svg"}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Badge variant="secondary" className="mb-2 bg-white/20 text-white">
                    {artwork.category}
                  </Badge>
                  <h3 className="font-bold text-lg mb-1">{artwork.title}</h3>
                  <p className="text-sm text-white/80">{artwork.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works Preview */}
      <section id="gallery" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Innovations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge digital artworks that explore new frontiers in creativity, technology, and human expression
            </p>
          </div>

          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-destructive mb-4">Error loading artworks: {error}</p>
              <Button variant="outline" onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artworks
                .filter(a => typeof a.modelUrl === "string" && a.modelUrl)
                .slice(0, 3)
                .map((artwork, idx) => (
                  <ArtworkCard
                    key={artwork.id}
                    id={artwork.id}
                    title={artwork.title}
                    description={artwork.description}
                    thumbnailUrl={
                      artwork.thumbnailUrl ||
                      [
                        "/cyberpunk-neon-cityscape.jpg",
                        "/bioluminescent-ocean-creatures.jpg",
                        "/fractal-mathematical-patterns.jpg"
                      ][idx % 3]
                    }
                    modelUrl={artwork.modelUrl as string}
                    type={artwork.type}
                    onViewModel={handleViewModel}
                  />
                ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 bg-transparent"
              >
                Discover More Innovations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced About Section with Stories */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Stories Behind Innovation</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Every piece in our collection tells a story of creative breakthrough, technical innovation, and artistic
              vision. Discover the narratives that drive digital art forward.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="group bg-background rounded-xl p-8 shadow-sm border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src="/abstract-3d-sculpture.png"
                    alt="3D Renaissance"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    The 3D Renaissance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our 3D artworks represent more than digital sculptures—they're explorations of space, light, and
                    form that challenge traditional artistic boundaries. Each piece begins as a vision, evolves through
                    countless iterations, and emerges as a testament to the marriage of technology and creativity.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-background rounded-xl p-8 shadow-sm border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src="/mixed-reality-ar-vr-futuristic-interface.jpg"
                    alt="Interactive Futures"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                    Interactive Futures
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond static beauty lies the realm of interaction. Our mixed reality and generative art pieces
                    respond to viewers, evolve over time, and create unique experiences for each encounter. These works
                    question the traditional relationship between artist, artwork, and audience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Innovation Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "🔬", title: "Experimental", desc: "Pushing boundaries with new techniques and technologies" },
              { icon: "🌐", title: "Interactive", desc: "Engaging viewers through immersive digital experiences" },
              { icon: "🎯", title: "Purposeful", desc: "Art with meaning, addressing contemporary themes" },
              { icon: "🚀", title: "Forward-Thinking", desc: "Anticipating the future of digital creativity" },
            ].map((pillar, index) => (
              <div
                key={index}
                className="text-center space-y-3 group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto group-hover:animate-pulse">
                  <span className="text-primary-foreground text-xl">{pillar.icon}</span>
                </div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Innovation Section */}
      <section id="innovation" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">The Innovation Process</h2>
          <p className="text-lg text-muted-foreground mb-12 text-pretty">
            Every artwork begins with a question: "What if?" Our innovation process transforms curiosity into creation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold">Explore</h3>
              <p className="text-muted-foreground">
                We investigate emerging technologies, artistic movements, and cultural shifts to identify new creative
                possibilities.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-accent text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold">Experiment</h3>
              <p className="text-muted-foreground">
                Through rapid prototyping and iterative design, we test ideas, push limits, and discover unexpected
                outcomes.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold">Evolve</h3>
              <p className="text-muted-foreground">
                Each piece evolves through community feedback, technological advancement, and artistic refinement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Innovation Art Center. Where creativity meets technology.</p>
        </div>
      </footer>

      {/* 3D Model Viewer Modal (client-only) */}
      {selectedModel && typeof window !== "undefined" && (
        <ModelViewer
          modelUrl={selectedModel.url}
          title={selectedModel.title}
          description={selectedModel.description}
          isOpen={!!selectedModel}
          onClose={handleCloseViewer}
        />
      )}
    </div>
  )
}
