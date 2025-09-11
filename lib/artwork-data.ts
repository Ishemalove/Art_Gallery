import type { Artwork, ArtworkFilters } from "./types"

// Mock artwork database - in a real app this would be a database
export const artworksDatabase: Artwork[] = [
  {
    id: "1",
    title: "Abstract Geometric Sculpture",
    description:
      "A modern abstract sculpture exploring geometric forms, dynamic lighting, and material interactions. This piece represents the fusion of mathematical precision with artistic expression, where each facet tells a story of digital craftsmanship and innovative 3D techniques.",
    thumbnailUrl: "/abstract-3d-sculpture.png",
    modelUrl: "/assets/3d/duck.glb",
    type: "model",
    tags: ["abstract", "geometric", "sculpture", "procedural", "innovation"],
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    featured: true,
    category: "sculpture",
    fileSize: "2.4 MB",
    polyCount: 15420,
    software: ["Blender", "Substance Painter"],
  },
  {
    id: "2",
    title: "Contemporary Architecture Visualization",
    description:
      "Photorealistic architectural visualization showcasing the future of sustainable design. This piece demonstrates how 3D art can bridge the gap between imagination and reality, helping architects and clients visualize spaces before they exist.",
    thumbnailUrl: "/modern-architecture-render.png",
    modelUrl: "/assets/3d/duck.glb",
    type: "model",
    tags: ["architecture", "contemporary", "realistic", "building", "sustainability"],
    createdAt: "2024-01-10T14:30:00Z",
    updatedAt: "2024-01-10T14:30:00Z",
    featured: true,
    category: "architecture",
    fileSize: "5.8 MB",
    polyCount: 45230,
    software: ["Blender", "V-Ray"],
  },
  {
    id: "3",
    title: "Digital Portrait Series",
    description:
      "A collection of digital portraits exploring human emotion through stylized 3D character design. Each character represents different aspects of the human experience, crafted with meticulous attention to expression and personality.",
    thumbnailUrl: "/3d-character-design.png",
    modelUrl: "/assets/3d/duck.glb",
    type: "model",
    tags: ["character", "portrait", "emotion", "human", "digital-art"],
    createdAt: "2024-01-05T09:15:00Z",
    updatedAt: "2024-01-05T09:15:00Z",
    featured: false,
    category: "digital-art",
    fileSize: "3.2 MB",
    polyCount: 8950,
    software: ["Blender", "Substance Painter", "ZBrush"],
  },
  {
    id: "4",
    title: "Atmospheric Environment Scene",
    description:
      "An immersive environment that captures the essence of solitude and contemplation. This piece showcases how 3D art can evoke powerful emotions and transport viewers to otherworldly spaces through masterful use of light, shadow, and atmosphere.",
    thumbnailUrl: "/3d-environment-scene.png",
    renderUrl: "/3d-environment-scene.png",
    type: "render",
    tags: ["environment", "atmospheric", "lighting", "composition", "storytelling"],
    createdAt: "2024-01-20T16:45:00Z",
    updatedAt: "2024-01-20T16:45:00Z",
    featured: true,
    category: "environment",
    software: ["Blender", "After Effects"],
  },
  {
    id: "5",
    title: "Interactive Product Experience",
    description:
      "Revolutionary product visualization that transforms traditional marketing. This interactive 3D model allows viewers to explore every detail, representing the future of e-commerce and digital product presentation.",
    thumbnailUrl: "/product-visualization-render.png",
    modelUrl: "/assets/3d/duck.glb",
    type: "model",
    tags: ["product", "interactive", "commercial", "innovation", "future"],
    createdAt: "2024-01-12T11:20:00Z",
    updatedAt: "2024-01-12T11:20:00Z",
    featured: false,
    category: "interactive",
    fileSize: "1.8 MB",
    polyCount: 12340,
    software: ["Blender", "Three.js"],
  },
  {
    id: "6",
    title: "Organic Form Exploration",
    description:
      "A study in biomimicry and natural patterns, this piece explores how digital tools can recreate and reimagine organic forms. It represents the intersection of nature, technology, and artistic vision in the digital age.",
    thumbnailUrl: "/organic-3d-forms.png",
    modelUrl: "/assets/3d/duck.glb",
    type: "model",
    tags: ["organic", "biomimicry", "nature", "experimental", "digital-nature"],
    createdAt: "2024-01-08T13:10:00Z",
    updatedAt: "2024-01-08T13:10:00Z",
    featured: false,
    category: "experimental",
    fileSize: "4.1 MB",
    polyCount: 28750,
    software: ["Blender", "Houdini"],
  },
  {
    id: "7",
    title: "Generative Art Installation",
    description:
      "An algorithmic art piece that generates unique patterns based on real-time data. This installation represents the cutting edge of computational creativity, where code becomes the brush and algorithms become the artist.",
    thumbnailUrl: "/colorful-generative-algorithmic-art-patterns.jpg",
    type: "render",
    tags: ["generative", "algorithmic", "installation", "computational", "data-art"],
    createdAt: "2024-01-25T08:00:00Z",
    updatedAt: "2024-01-25T08:00:00Z",
    featured: true,
    category: "generative",
    software: ["Processing", "TouchDesigner", "Python"],
  },
  {
    id: "8",
    title: "Mixed Reality Experience",
    description:
      "A groundbreaking mixed reality artwork that blends physical and digital spaces. Viewers can interact with virtual elements overlaid on the real world, creating a new form of immersive storytelling.",
    thumbnailUrl: "/mixed-reality-ar-vr-futuristic-interface.jpg",
    type: "render",
    tags: ["mixed-reality", "AR", "VR", "immersive", "interactive"],
    createdAt: "2024-01-22T15:30:00Z",
    updatedAt: "2024-01-22T15:30:00Z",
    featured: true,
    category: "mixed-reality",
    software: ["Unity", "ARCore", "Blender"],
  },
  {
    id: "9",
    title: "Neural Network Visualization",
    description:
      "A mesmerizing visualization of artificial intelligence in action. This piece transforms complex neural network data into flowing, organic patterns that reveal the hidden beauty of machine learning algorithms.",
    thumbnailUrl: "/neural-network-ai-visualization.jpg",
    type: "render",
    tags: ["AI", "neural-network", "data-visualization", "machine-learning", "abstract"],
    createdAt: "2024-01-28T12:00:00Z",
    updatedAt: "2024-01-28T12:00:00Z",
    featured: true,
    category: "ai-art",
    software: ["Python", "TensorFlow", "Blender"],
  },
  {
    id: "10",
    title: "Cyberpunk Cityscape",
    description:
      "A neon-soaked vision of the future where technology and humanity collide. This atmospheric piece explores themes of urban decay, digital transformation, and the relationship between man and machine.",
    thumbnailUrl: "/cyberpunk-neon-cityscape.jpg",
    modelUrl: "/assets/3d/duck.glb",
    type: "model",
    tags: ["cyberpunk", "futuristic", "neon", "cityscape", "sci-fi"],
    createdAt: "2024-01-26T18:45:00Z",
    updatedAt: "2024-01-26T18:45:00Z",
    featured: true,
    category: "sci-fi",
    fileSize: "7.2 MB",
    polyCount: 65420,
    software: ["Blender", "Substance Painter", "After Effects"],
  },
  {
    id: "11",
    title: "Fractal Geometry Study",
    description:
      "An exploration of infinite complexity through mathematical beauty. This fractal artwork demonstrates how simple rules can generate endlessly intricate patterns, bridging the gap between mathematics and art.",
    thumbnailUrl: "/fractal-mathematical-patterns.jpg",
    type: "render",
    tags: ["fractal", "mathematics", "geometry", "infinite", "patterns"],
    createdAt: "2024-01-24T14:20:00Z",
    updatedAt: "2024-01-24T14:20:00Z",
    featured: false,
    category: "mathematical",
    software: ["Mandelbulb3D", "Photoshop", "After Effects"],
  },
  {
    id: "12",
    title: "Bioluminescent Ocean Depths",
    description:
      "A journey into the mysterious depths of the ocean where life creates its own light. This piece captures the ethereal beauty of bioluminescent creatures in their natural habitat.",
    thumbnailUrl: "/bioluminescent-ocean-creatures.jpg",
    modelUrl: "/assets/3d/duck.glb",
    type: "model",
    tags: ["bioluminescent", "ocean", "nature", "underwater", "creatures"],
    createdAt: "2024-01-21T10:30:00Z",
    updatedAt: "2024-01-21T10:30:00Z",
    featured: true,
    category: "nature",
    fileSize: "4.8 MB",
    polyCount: 32150,
    software: ["Blender", "Houdini", "Substance Painter"],
  },
  {
    id: "13",
    title: "Holographic Data Interface",
    description:
      "A futuristic interface design that reimagines how we interact with digital information. This holographic display concept showcases the potential of spatial computing and gesture-based interaction.",
    thumbnailUrl: "/holographic-data-interface.jpg",
    type: "render",
    tags: ["holographic", "interface", "futuristic", "data", "interaction"],
    createdAt: "2024-01-19T16:15:00Z",
    updatedAt: "2024-01-19T16:15:00Z",
    featured: false,
    category: "interface",
    software: ["Cinema 4D", "After Effects", "Figma"],
  },
  {
    id: "14",
    title: "Quantum Particle Simulation",
    description:
      "A visualization of quantum mechanics in action, where particles exist in multiple states simultaneously. This piece makes the invisible visible, revealing the strange and beautiful world of quantum physics.",
    thumbnailUrl: "/quantum-particle-simulation.jpg",
    type: "render",
    tags: ["quantum", "physics", "particles", "simulation", "scientific"],
    createdAt: "2024-01-17T09:45:00Z",
    updatedAt: "2024-01-17T09:45:00Z",
    featured: true,
    category: "scientific",
    software: ["Houdini", "Python", "Blender"],
  },
  {
    id: "15",
    title: "Metamorphic Crystal Formation",
    description:
      "A study of geological processes through digital art. This piece explores how crystals form and transform over time, creating a meditation on change, growth, and natural beauty.",
    thumbnailUrl: "/crystal-formation-metamorphic.jpg",
    modelUrl: "/assets/3d/duck.glb",
    type: "model",
    tags: ["crystal", "geological", "metamorphic", "natural", "formation"],
    createdAt: "2024-01-14T13:25:00Z",
    updatedAt: "2024-01-14T13:25:00Z",
    featured: false,
    category: "geological",
    fileSize: "3.6 MB",
    polyCount: 18750,
    software: ["Blender", "Substance Designer"],
  },
  {
    id: "16",
    title: "Abstract Sound Visualization",
    description:
      "Music made visible through dynamic 3D forms. This piece translates audio frequencies into flowing, organic shapes that dance and evolve with the rhythm, creating a synesthetic experience.",
    thumbnailUrl: "/abstract-sound-wave-visualization.jpg",
    type: "render",
    tags: ["sound", "music", "visualization", "synesthetic", "dynamic"],
    createdAt: "2024-01-11T20:10:00Z",
    updatedAt: "2024-01-11T20:10:00Z",
    featured: true,
    category: "audio-visual",
    software: ["TouchDesigner", "Ableton Live", "Blender"],
  },
]

export function getArtworks(filters: ArtworkFilters = {}): Artwork[] {
  let filtered = [...artworksDatabase]

  // Apply filters
  if (filters.type) {
    filtered = filtered.filter((artwork) => artwork.type === filters.type)
  }

  if (filters.category) {
    filtered = filtered.filter((artwork) => artwork.category === filters.category)
  }

  if (filters.featured !== undefined) {
    filtered = filtered.filter((artwork) => artwork.featured === filters.featured)
  }

  if (filters.tags && filters.tags.length > 0) {
    filtered = filtered.filter((artwork) => filters.tags!.some((tag) => artwork.tags.includes(tag)))
  }

  // Sort by creation date (newest first)
  filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  // Apply pagination
  const offset = filters.offset || 0
  const limit = filters.limit || filtered.length

  return filtered.slice(offset, offset + limit)
}

export function getArtworkById(id: string): Artwork | null {
  return artworksDatabase.find((artwork) => artwork.id === id) || null
}

export function getFeaturedArtworks(): Artwork[] {
  return getArtworks({ featured: true })
}

export function getArtworkCategories(): string[] {
  const categories = new Set(artworksDatabase.map((artwork) => artwork.category))
  return Array.from(categories).sort()
}

export function getArtworkTags(): string[] {
  const tags = new Set(artworksDatabase.flatMap((artwork) => artwork.tags))
  return Array.from(tags).sort()
}
