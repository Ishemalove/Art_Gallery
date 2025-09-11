"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    artType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-primary/20 to-accent/20">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Let's Create Something <span className="text-primary">Extraordinary</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Whether you're an artist, collector, or innovator, we'd love to hear from you. Join our community of digital
            art pioneers.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="artType" className="block text-sm font-medium mb-2">
                    Interest Area
                  </label>
                  <select
                    id="artType"
                    name="artType"
                    value={formData.artType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  >
                    <option value="">Select your interest</option>
                    <option value="3d-art">3D Art & Sculpture</option>
                    <option value="generative">Generative Art</option>
                    <option value="mixed-reality">Mixed Reality</option>
                    <option value="collaboration">Artist Collaboration</option>
                    <option value="exhibition">Exhibition Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, idea, or question..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card rounded-xl p-8 shadow-sm border">
                <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">hello@innovationartcenter.com</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-accent">🌐</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Social Media</h4>
                      <p className="text-muted-foreground">@InnovationArtCenter</p>
                      <p className="text-sm text-muted-foreground">Follow our latest exhibitions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary">💬</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Community</h4>
                      <p className="text-muted-foreground">Join our Discord</p>
                      <p className="text-sm text-muted-foreground">Connect with fellow artists</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 border">
                <h3 className="text-xl font-bold mb-4">Artist Submissions</h3>
                <p className="text-muted-foreground mb-6">
                  We're always looking for innovative digital artists to feature in our gallery. Submit your work for
                  consideration.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>3D models, renders, and sculptures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span>Generative and algorithmic art</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Interactive and mixed reality experiences</span>
                  </div>
                </div>
                <Button variant="outline" className="mt-6 w-full bg-transparent">
                  Submit Your Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">How do I submit my artwork?</h3>
                <p className="text-muted-foreground text-sm">
                  Use the contact form above or email us directly with your portfolio and artist statement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What file formats do you accept?</h3>
                <p className="text-muted-foreground text-sm">
                  We accept GLB, GLTF, OBJ for 3D models, and high-resolution images in JPG, PNG, or WebP formats.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Do you offer artist residencies?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! We have digital residency programs for emerging artists working with innovative technologies.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I purchase artworks?</h3>
                <p className="text-muted-foreground text-sm">
                  Many pieces are available for purchase. Contact us for pricing and availability information.
                </p>
              </div>
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
    </div>
  )
}
