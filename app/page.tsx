"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArtworkCard } from "@/components/artwork-card"
import { useArtworks } from "@/hooks/use-artworks"
import Link from "next/link"

export default function GalleryHomePage() {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const { artworks, loading, error } = useArtworks({ featured: true, limit: 6 })

  const heroImages = [
    "/IMG_20240724_164541.jpg",
    "/IMG_20250416_172615.jpg",
    "/IMG_20250416_172658.jpg",
    "/IMG_20250714_162840.jpg",
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse">
              <span className="text-primary-foreground font-bold text-sm">AG</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">Art Galllery</h1>
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
              Explore Me
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
            Where Art Meets Emotions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance">
            The <span className="text-primary animate-pulse">Art</span> of Being{" "}
            <span className="text-accent animate-pulse">In Love</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover me through my art and the lessons I have learned throughought life, discover my journey and my art. These are not just photos, but fragments of how I breathe,
             notice, and hold on to the fleeting—where sunsets, clouds, and wires tell their own quiet stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/gallery">
              <Button
                size="lg"
                className="text-lg px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Explore ME
              </Button>
            </Link>
            <Link href="/gallery?category=experimental">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                Not Just Pictures!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Little things, big feelings</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
            Every frame is a gentle reminder: beauty hides in the smallest, quietest places
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
             { image: "/IMG_20240808_163639.jpg", 
               title: "Cotton Whispers", 
               description: "Clouds that remind me heaviness can float.",  
               category: "Sky" 
              },

             { image: "/IMG_20240808_174035.jpg", 
               title: "Tangled Poetry", 
               description: "Wires against dusk, imperfect but beautiful.", 
               category: "Everyday" 
              },
             { image: "/IMG_20240808_174232.jpg", 
               title: "The Sun’s Gentle Goodbye", 
               description: "Light leaving rooftops like a soft farewell.", 
               category: "Sunset" 
              },
             { image: "/IMG_20240808_174250.jpg", 
               title: "Silent Warmth", 
               description: "An empty sky that still holds me close.", 
               category: "Evening" 
              },

             ].map((artwork, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-background border hover:shadow-xl transition-all duration-500 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={artwork.image || "/placeholder.jpg"}
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
            <h2 className="text-3xl font-bold mb-4">Moments of Inspiration</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A heartfelt collection of moments that capture fleeting emotions, awaken imagination and reveal the beauty in life's lessons.
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(() => {
                const displayArtworks = artworks.slice(0, 3)
                
                return displayArtworks.map((artwork, idx) => (
                  <ArtworkCard
                    key={artwork.id}
                    id={artwork.id}
                    title={artwork.title}
                    description={artwork.description}
                    thumbnailUrl={
                      artwork.thumbnailUrl ||
                      [
                        "/IMG_20250728_174919.jpg",
                        "/IMG_20250805_172351.jpg",
                        "/IMG_20250831_174126.jpg"
                      ][idx % 3]
                    }
                  />
                ))
              })()}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 bg-transparent"
              >
               Explore more stories in Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced About Section with Stories */}
<section id="about" className="py-16 px-4 bg-muted/30">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-6">Stories Nature Teaches</h2>
      <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
        Behind every creation lies a quiet lesson from nature—how rivers teach flow, trees whisper patience, and skies
        remind us of endless possibility. These stories are not just about art, but about listening deeply to the world
        and carrying its wisdom into every brushstroke, shape, and vision.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      <div className="group bg-background rounded-xl p-8 shadow-sm border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
            <img
              src="/IMG_20250715_171952.jpg"
              alt="Roots of Renewal"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
              Roots of Renewal
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              From the roots buried deep in soil, I’ve learned that unseen strength often sustains visible beauty.
              Like trees that bend but do not break, this story teaches me resilience—the courage to stand tall after
              every storm and to grow quietly, even in the shadows.
            </p>
          </div>
        </div>
      </div>

      <div className="group bg-background rounded-xl p-8 shadow-sm border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
            <img
              src="/IMG_20250805_175050.jpg"
              alt="Dance of Horizons"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
              Dance of Horizons
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The horizon reminds me that every ending is the beginning of something new. Sunsets teach acceptance,
              while dawns bring hope. This piece is a story of embracing change—of learning to find beauty in both
              the stillness of night and the promise of morning light.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Nature’s Pillars */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[
        { icon: "🍃", title: "Resilience", desc: "Like trees that weather storms, I learn to stand tall through trials" },
        { icon: "🌊", title: "Flow", desc: "Rivers teach me to adapt, to move forward even when the path bends" },
        { icon: "☀️", title: "Hope", desc: "Every sunrise is a reminder that light always returns after darkness" },
        { icon: "🌌", title: "Wonder", desc: "The stars whisper that there is always more to discover, within and beyond" },
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

     {/* Self-Reflective Journey Section */}
<section id="innovation" className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
  <div className="container mx-auto max-w-5xl text-center">
    <h2 className="text-4xl font-extrabold tracking-tight mb-6">
      The Journey of Creation
    </h2>
    <p className="text-lg text-muted-foreground mb-14 max-w-2xl mx-auto">
      Every creation begins with a challenge. Each obstacle becomes a teacher, guiding us to explore, endure, and grow. 
      This is the story of facing difficulty, learning from it, and emerging stronger.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Step 1 */}
      <div className="space-y-5 text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto shadow-md">
          <span className="text-primary text-3xl font-bold">1</span>
        </div>
        <h3 className="text-2xl font-semibold">The Challenge</h3>
        <p className="text-muted-foreground">
          Every idea starts with uncertainty. Moments of doubt, obstacles, and setbacks test our courage and resilience. 
          But it is in these moments that we find our inner strength.
        </p>
      </div>

      {/* Step 2 */}
      <div className="space-y-5 text-center">
        <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto shadow-md">
          <span className="text-accent text-3xl font-bold">2</span>
        </div>
        <h3 className="text-2xl font-semibold">The Fight</h3>
        <p className="text-muted-foreground">
          Through persistence, reflection, and creativity, we confront our challenges head-on. 
          Each effort, experiment, and small victory strengthens our resolve, shaping a path forward.
        </p>
      </div>

      {/* Step 3 */}
      <div className="space-y-5 text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto shadow-md">
          <span className="text-primary text-3xl font-bold">3</span>
        </div>
        <h3 className="text-2xl font-semibold">Lessons Learned</h3>
        <p className="text-muted-foreground">
          Every struggle teaches us wisdom: patience, adaptability, and the power of reflection. 
          We emerge stronger, more inspired, and ready to create with renewed purpose.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© INL.</p>
        </div>
      </footer>

      
    </div>
  )
}
