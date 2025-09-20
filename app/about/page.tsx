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
              <span className="text-primary-foreground font-bold text-sm">AG</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">Art Gallery</h1>
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
            My story
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            I am <span className="text-primary">A</span> Work <span className="text-accent">of Art</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
          I am more than my studies or achievements! I am a reflective, resilient, and creative spirit.
          My story is about seeking meaning, discovering myself and turning challenges into strength.
          This is where my path of growth, authenticity, and freedom comes alive.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Me at my Core</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I am ISHEMA NKERABAHIZI Love, a curious and creative soul who believes in growth through reflection, resilience, and authenticity. 
              I find expression in art, photography, music, and storytelling, and I see challenges not as setbacks but as opportunities to learn and transform. 
              My journey is shaped by a balance between personal dreams and responsibility to those I care about.
              My mission is to use creativity, knowledge, and determination to build solutions that inspire change, uplift others, 
              and open paths where opportunities are limited.
               I aim to live authentically, pursue growth, and contribute meaningfully to both my community and the wider world.
              </p>
            
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">A lot of </div>
                  <div className="text-sm text-muted-foreground">Memories saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">Infinity +</div>
                  <div className="text-sm text-muted-foreground">Lessons learned</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <img
                  src="/IMG_20250831_162454.jpg"
                  alt="Photography"
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
            <h2 className="text-3xl font-bold mb-4">What am I made of?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These are the things that make me, me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-8 shadow-sm border text-center group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                <span className="text-primary-foreground text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Curiosity</h3>
              <p className="text-muted-foreground">
                I am curious about everything and I'm always in awe of what life has to offer and how it can be used to make a difference.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-sm border text-center group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                <span className="text-accent-foreground text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Family</h3>
              <p className="text-muted-foreground">
                Family is my foundation and I'm grateful for the love and support they have given me. They have helped me grow and become the person I am today.
                They have been here always even when I was not.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-sm border text-center group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                <span className="text-primary-foreground text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Resilience</h3>
              <p className="text-muted-foreground">
                I have faced multiple setbacks, huh but one thing I am sure about is that I always find a ways to get back on my 
                feet and in a better condition than I was.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My turning points</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team combines expertise in art, technology, and curation to create extraordinary experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl">🖼️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Art</h3>
              <p className="text-primary font-medium mb-2">Paintings and Photography</p>
              <p className="text-sm text-muted-foreground">
                Drawing and Photography are my way of expressing myself and my thoughts and conveying my emotions.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl">🎵</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Music</h3>
              <p className="text-accent font-medium mb-2">Perfect escape</p>
              <p className="text-sm text-muted-foreground">
                Music takes me to another dimension and it's my perfect escape from everyday reality.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl">🌅</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sunsets</h3>
              <p className="text-primary font-medium mb-2">Beauty and Hope</p>
              <p className="text-sm text-muted-foreground">
                Sunsets remind me that every ending is the beginning of something new. Something in the orange tells me there is always hope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">My Vision for the Future</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
          I envision a life where my creativity, resilience, and curiosity shape not only my own journey but also inspire
      others. I want to grow into someone who turns challenges into opportunities, who lives authentically, and who
      uses knowledge, art, and innovation to make a meaningful impact in my community and beyond.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-background/50 rounded-xl p-6 backdrop-blur-sm border">
              <h3 className="text-xl font-bold mb-4 text-primary">Growth</h3>
              <p className="text-muted-foreground text-sm">
                Growth is the key to success and I want to grow into someone who turns challenges into opportunities, who lives authentically, and who
                uses knowledge, art, and innovation to make a meaningful impact in my community and beyond.
                and machine learning.
              </p>
            </div>
            <div className="bg-background/50 rounded-xl p-6 backdrop-blur-sm border">
              <h3 className="text-xl font-bold mb-4 text-accent">Autonomy</h3>
              <p className="text-muted-foreground text-sm">
                Autonomy is the key to success and I want to grow into someone who turns challenges into opportunities, who lives authentically, and who
                impacts my community and beyond.My dream is to inspire and uplift others through everything I learn and through my skills.
                
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                A life in the making!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">©INL.</p>
        </div>
      </footer>
    </div>
  )
}
