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
    reason: "",
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
            Say hi — I'm friendly!
          </Badge>
         
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-primary">Contact ME</span> About <span className="text-accent">Everything</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Reach out if you want to talk about dreams, growth, mistakes, sunsets, ideas, or chances to build something
            meaningful. I answer with heart and honesty.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
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
                  <label htmlFor="reason" className="block text-sm font-medium mb-2">
                    Reason for reaching out
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  >
                    <option value="">Choose one (or write your own below)</option>
                    <option value="say-hi">Just saying hi</option>
                    <option value="collab">Potential collaboration</option>
                    <option value="learn">Share your story / ask about mine</option>
                    <option value="support">Encouragement or feedback</option>
                    <option value="other">Something else</option>
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
                    placeholder="Tell me what’s on your mind—your story, idea, or question..."
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
                <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">ishemalove@gmail.com</p>
                      <p className="text-sm text-muted-foreground">I usually reply within a day</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-accent">🌐</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Social</h4>
                      <p className="text-muted-foreground">@nkerabahizi___</p>
                      <p className="text-sm text-muted-foreground">DM me—always happy to chat</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary">📱</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">WhatsApp</h4>
                      <p className="text-muted-foreground">Message me for quick replies</p>
                      <p className="text-sm text-muted-foreground">We can switch to a call if needed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 border">
                <h3 className="text-xl font-bold mb-4">Let’s Keep It Simple</h3>
                <p className="text-muted-foreground mb-6">
                  No formal pitches needed. Share your thoughts, ideas, or a kind note. I’m here for genuine
                  conversations and possibilities.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Email for longer messages</p>
                  <p>• DM for quick chats</p>
                  <p>• WhatsApp for immediate questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Questions you might have</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">How fast do you reply?</h3>
                <p className="text-muted-foreground text-sm">Usually within 24 hours—sooner if I see it.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What’s the best way to reach you?</h3>
                <p className="text-muted-foreground text-sm">Email for details, DMs for quick chat, WhatsApp for urgent.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Can we meet or call?</h3>
                <p className="text-muted-foreground text-sm">Yes—after a quick chat, we can schedule a call or meet-up.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you collaborate?</h3>
                <p className="text-muted-foreground text-sm">Definitely. If our values align, I’m open to building together.</p>
              </div>
            </div>
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
