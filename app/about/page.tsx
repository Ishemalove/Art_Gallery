"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse">
              <span className="text-primary-foreground font-bold text-sm">IA</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">Innovation Art Center</h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
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
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-primary/20 to-accent/20">
            Our Story
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Where <span className="text-primary">Art</span> Meets <span className="text-accent">Innovation</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            The Innovation Art Center is more than a gallery—it's a laboratory for the future of creative expression,
            where artists push the boundaries of what's possible with technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe that the intersection of art and technology creates unprecedented opportunities for human
                expression. Our mission is to showcase, support, and celebrate artists who are pioneering new forms of
                digital creativity.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From 3D sculptures that exist only in virtual space to generative art that evolves with each viewing, we
                curate experiences that challenge traditional notions of what art can be and do.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Artworks Showcased</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">150+</div>
                  <div className="text-sm text-muted-foreground">Featured Artists</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <img
                  src="/abstract-3d-sculpture.png"
                  alt="3D Art Innovation"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from curation to community building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-8 shadow-sm border text-center group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                <span className="text-primary-foreground text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation First</h3>
              <p className="text-muted-foreground">
                We prioritize groundbreaking work that pushes creative and technical boundaries, celebrating artists who
                dare to experiment with new possibilities.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-sm border text-center group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                <span className="text-accent-foreground text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Community Driven</h3>
              <p className="text-muted-foreground">
                Art thrives in community. We foster connections between artists, technologists, and audiences to create
                a vibrant ecosystem of creative collaboration.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-sm border text-center group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                <span className="text-primary-foreground text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Global Accessibility</h3>
              <p className="text-muted-foreground">
                Digital art transcends physical boundaries. We make innovative art accessible to global audiences
                through immersive online experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Team Behind Innovation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team combines expertise in art, technology, and curation to create extraordinary experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl">👩‍🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sarah Chen</h3>
              <p className="text-primary font-medium mb-2">Creative Director</p>
              <p className="text-sm text-muted-foreground">
                Former digital artist with 15+ years in immersive media and virtual reality experiences.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Marcus Rodriguez</h3>
              <p className="text-accent font-medium mb-2">Technical Lead</p>
              <p className="text-sm text-muted-foreground">
                Full-stack developer specializing in 3D web technologies and interactive art installations.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl">👩‍🏫</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Dr. Amara Okafor</h3>
              <p className="text-primary font-medium mb-2">Curator & Researcher</p>
              <p className="text-sm text-muted-foreground">
                Art historian and curator focused on the intersection of technology and contemporary art practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Our Vision for the Future</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            We envision a world where digital art is as valued and accessible as traditional forms, where technology
            amplifies human creativity rather than replacing it, and where artists have the tools and platforms they
            need to explore uncharted creative territories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-background/50 rounded-xl p-6 backdrop-blur-sm border">
              <h3 className="text-xl font-bold mb-4 text-primary">Next-Gen Exhibitions</h3>
              <p className="text-muted-foreground text-sm">
                Immersive virtual galleries that adapt to each visitor, creating personalized art experiences through AI
                and machine learning.
              </p>
            </div>
            <div className="bg-background/50 rounded-xl p-6 backdrop-blur-sm border">
              <h3 className="text-xl font-bold mb-4 text-accent">Artist Empowerment</h3>
              <p className="text-muted-foreground text-sm">
                Tools and platforms that help digital artists monetize their work, connect with collectors, and build
                sustainable creative careers.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                Join Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Innovation Art Center. Where creativity meets technology.</p>
        </div>
      </footer>
    </div>
  )
}
