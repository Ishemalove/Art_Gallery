import type { Artwork, ArtworkFilters } from "./types"

// Mock artwork database - in a real app this would be a database
export const artworksDatabase: Artwork[] = [
  {
    id: "1",
    title: "Quiet Geometry of Morning",
    description:
      "Soft light settles on edges and corners, and I feel the calm of order. Shapes breathe slowly, and in their stillness I hear myself—tidy, steady, quietly hopeful.",
    thumbnailUrl: "/IMG_20250416_172731.jpg",
    type: "render",
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
    title: "Home of Future Sunsets",
    description:
      "Concrete, glass, and the promise of evening. I imagine conversations that never ended, and the way the air warms when light touches steel.",
    thumbnailUrl: "/IMG_20250518_125555.jpg",
    type: "render",
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
    title: "Faces I Carry Quietly",
    description:
      "Not everyone I love is in the frame, but their echoes are here. The air remembers laughter, and my eyes learn to hold what can’t be held.",
    thumbnailUrl: "/IMG_20250621_123925.jpg",
    type: "render",
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
    title: "A Field Teaches Me Silence",
    description:
      "Wind writes small stories in the grass. I’m reminded to move slower, to notice the way stillness makes room for breathing.",
    thumbnailUrl: "/IMG_20250831_153006.jpg",
    renderUrl: "/IMG_20250831_153006.jpg",
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
    title: "Held in the Hands of Light",
    description:
      "I look closely at the ordinary until it becomes sacred. Edges soften, and a simple object becomes a small altar for attention.",
    thumbnailUrl: "/IMG_20250831_153143.jpg",
    type: "render",
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
    title: "How Leaves Learn to Become Light",
    description:
      "Curves and shadows remind me that growth is patient. Nature doesn’t hurry, and somehow everything is finished.",
    thumbnailUrl: "/IMG_20250831_160920.jpg",
    type: "render",
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
    title: "Patterns the Day Leaves Behind",
    description:
      "When I stop trying to control it, rhythm appears on its own—the kind you feel in bones, not clocks.",
    thumbnailUrl: "/IMG_20250831_161309.jpg",
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
    title: "Between What’s Real and What I Remember",
    description:
      "Some scenes are half memory, half wish. I like standing in that in‑between, where everything feels possible.",
    thumbnailUrl: "/IMG_20250831_161326.jpg",
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
    title: "Thoughts Like Moving Weather",
    description:
      "My mind can be a sky full of signals—messy, luminous, alive. I watch the noise turn into music.",
    thumbnailUrl: "/IMG_20250831_162128.jpg",
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
    title: "Neon Prayers Over Concrete",
    description:
      "At night the city hums like a heart I used to know. Wires, rain, and the promise that tomorrow will be kinder.",
    thumbnailUrl: "/Snapchat-1065411341.jpg",
    type: "render",
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
    title: "Endless Inside the Small",
    description:
      "I lean in and the world expands. Repetition becomes prayer; repetition becomes peace.",
    thumbnailUrl: "/IMG_20240724_164541.jpg",
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
    title: "Oceans That Glow Like Secrets",
    description:
      "In the dark, life writes with light. I remember that even quiet things have a way of being loud when loved.",
    thumbnailUrl: "/IMG_20240808_163639.jpg",
    type: "render",
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
    title: "Touching Light, Learning Language",
    description:
      "Sometimes information feels like weather—felt before understood. I reach for clarity and end up holding glow.",
    thumbnailUrl: "/IMG_20240808_174035.jpg",
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
    title: "What Happens Between Heartbeats",
    description:
      "Small things flicker and choose. I’m reminded how often I am many selves at once—and that it’s okay.",
    thumbnailUrl: "/IMG_20240808_174232.jpg",
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
    title: "Stones Teaching Patience",
    description:
      "Under pressure, beauty learns its edges. I think of all the ways we harden and still manage to shine.",
    thumbnailUrl: "/IMG_20240808_174250.jpg",
    type: "render",
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
    title: "When Music Learns My Name",
    description:
      "Notes spill into color and I remember childhood—running, laughing, nothing to prove, everything to feel.",
    thumbnailUrl: "/IMG_20240808_175025.jpg",
    type: "render",
    tags: ["sound", "music", "visualization", "synesthetic", "dynamic"],
    createdAt: "2024-01-11T20:10:00Z",
    updatedAt: "2024-01-11T20:10:00Z",
    featured: true,
    category: "audio-visual",
    software: ["TouchDesigner", "Ableton Live", "Blender"],
  },
  {
    id: "17",
    title: "Sky Learning to Breathe",
    description:
      "Clouds drift like slow thoughts loosening their grip. I remember to inhale gently and let the day be kind.",
    thumbnailUrl: "/IMG_20250728_174919.jpg",
    type: "render",
    tags: ["sky", "calm", "soft", "breath"],
    createdAt: "2024-02-01T10:00:00Z",
    updatedAt: "2024-02-01T10:00:00Z",
    featured: false,
    category: "sky",
    software: ["Photoshop"],
  },
  {
    id: "18",
    title: "Wireframe Poetry",
    description:
      "Wires cross the sunset like notes on a staff. Imperfect lines, perfect feeling—my kind of music.",
    thumbnailUrl: "/IMG_20250805_172351.jpg",
    type: "render",
    tags: ["everyday", "poetry", "evening"],
    createdAt: "2024-02-02T10:00:00Z",
    updatedAt: "2024-02-02T10:00:00Z",
    featured: true,
    category: "everyday",
    software: ["Lightroom"],
  },
  {
    id: "19",
    title: "Quiet Rooftop Farewell",
    description:
      "The sun doesn’t leave—it softens. I stand still and let the warmth say what words never could.",
    thumbnailUrl: "/IMG_20250831_174126.jpg",
    type: "render",
    tags: ["sunset", "warmth", "closing"],
    createdAt: "2024-02-03T10:00:00Z",
    updatedAt: "2024-02-03T10:00:00Z",
    featured: true,
    category: "sunset",
    software: ["Photoshop"],
  },
  {
    id: "20",
    title: "Windows Listening to Rain",
    description:
      "Every drop finds its rhythm. Inside, I find mine too—steady, simple, enough.",
    thumbnailUrl: "/IMG_20250728_174929.jpg",
    type: "render",
    tags: ["rain", "home", "still"],
    createdAt: "2024-02-04T10:00:00Z",
    updatedAt: "2024-02-04T10:00:00Z",
    featured: false,
    category: "everyday",
    software: ["Lightroom"],
  },
  {
    id: "21",
    title: "Streetlight Prayer",
    description:
      "A small glow holds back the dark. Hope is sometimes that humble.",
    thumbnailUrl: "/IMG_20250831_174004.jpg",
    type: "render",
    tags: ["night", "hope", "city"],
    createdAt: "2024-02-05T10:00:00Z",
    updatedAt: "2024-02-05T10:00:00Z",
    featured: false,
    category: "night",
    software: ["Photoshop"],
  },
  {
    id: "22",
    title: "Learning the Shape of Stillness",
    description:
      "Shadows fold softly around quiet things. I fit there easier than I used to.",
    thumbnailUrl: "/IMG_20250715_171952.jpg",
    type: "render",
    tags: ["stillness", "soft", "quiet"],
    createdAt: "2024-02-06T10:00:00Z",
    updatedAt: "2024-02-06T10:00:00Z",
    featured: false,
    category: "everyday",
    software: ["Lightroom"],
  },
  {
    id: "23",
    title: "The Place the Wind Remembers",
    description:
      "Some corners of the world keep old whispers. I stop and listen until one becomes mine.",
    thumbnailUrl: "/IMG_20250728_174917.jpg",
    type: "render",
    tags: ["memory", "corner", "wind"],
    createdAt: "2024-02-07T10:00:00Z",
    updatedAt: "2024-02-07T10:00:00Z",
    featured: false,
    category: "memory",
    software: ["Photoshop"],
  },
  {
    id: "24",
    title: "Horizon Teaches Patience",
    description:
      "Distance is a kind teacher. It reminds me that some arrivals are slow on purpose.",
    thumbnailUrl: "/IMG_20250714_162840.jpg",
    type: "render",
    tags: ["horizon", "patience", "open"],
    createdAt: "2024-02-08T10:00:00Z",
    updatedAt: "2024-02-08T10:00:00Z",
    featured: true,
    category: "landscape",
    software: ["Lightroom"],
  },
  {
    id: "25",
    title: "Hands Full of Evening",
    description:
      "I carry the last light like a promise. Quiet, glowing, enough to get home.",
    thumbnailUrl: "/IMG_20250416_172615.jpg",
    type: "render",
    tags: ["evening", "promise", "warm"],
    createdAt: "2024-02-09T10:00:00Z",
    updatedAt: "2024-02-09T10:00:00Z",
    featured: false,
    category: "evening",
    software: ["Photoshop"],
  },
  {
    id: "26",
    title: "Edges Learning Kindness",
    description:
      "Hard lines soften in the right light. So do I.",
    thumbnailUrl: "/IMG_20250416_172658.jpg",
    type: "render",
    tags: ["light", "edges", "soft"],
    createdAt: "2024-02-10T10:00:00Z",
    updatedAt: "2024-02-10T10:00:00Z",
    featured: false,
    category: "study",
    software: ["Lightroom"],
  },
  {
    id: "27",
    title: "Borrowed Blue",
    description:
      "The sky lent me its peace for a minute. I gave it gratitude in return.",
    thumbnailUrl: "/IMG_20250831_162454.jpg",
    type: "render",
    tags: ["blue", "peace", "open"],
    createdAt: "2024-02-11T10:00:00Z",
    updatedAt: "2024-02-11T10:00:00Z",
    featured: true,
    category: "sky",
    software: ["Photoshop"],
  },
  {
    id: "28",
    title: "Steps the Light Takes",
    description:
      "Shadows practice being gentle across old stone. I follow and learn how.",
    thumbnailUrl: "/IMG_20250805_175050.jpg",
    type: "render",
    tags: ["stone", "shadow", "gentle"],
    createdAt: "2024-02-12T10:00:00Z",
    updatedAt: "2024-02-12T10:00:00Z",
    featured: false,
    category: "study",
    software: ["Lightroom"],
  },
  {
    id: "29",
    title: "Small Architectures of Joy",
    description:
      "Little shapes, big feelings. Happiness arrives in smaller pieces than I expected.",
    thumbnailUrl: "/IMG_20250805_175125.jpg",
    type: "render",
    tags: ["joy", "small", "design"],
    createdAt: "2024-02-13T10:00:00Z",
    updatedAt: "2024-02-13T10:00:00Z",
    featured: false,
    category: "everyday",
    software: ["Photoshop"],
  },
  {
    id: "30",
    title: "Orange That Says ‘Stay’",
    description:
      "Something in the orange holds me in place. I don’t mind being held.",
    thumbnailUrl: "/IMG_20250805_175159.jpg",
    type: "render",
    tags: ["orange", "hold", "sunset"],
    createdAt: "2024-02-14T10:00:00Z",
    updatedAt: "2024-02-14T10:00:00Z",
    featured: true,
    category: "sunset",
    software: ["Lightroom"],
  },
  {
    id: "31",
    title: "Open Roads Inside Me",
    description:
      "Some days my heart is a long road with room enough for everything.",
    thumbnailUrl: "/IMG_20240902_173335.jpg",
    type: "render",
    tags: ["road", "freedom", "open"],
    createdAt: "2024-02-15T10:00:00Z",
    updatedAt: "2024-02-15T10:00:00Z",
    featured: false,
    category: "journey",
    software: ["Photoshop"],
  },
  {
    id: "32",
    title: "Sky After the Storm",
    description:
      "Everything washed, everything bright. I remember how quickly heavy turns to light.",
    thumbnailUrl: "/IMG_20250715_173127.jpg",
    type: "render",
    tags: ["after", "clear", "bright"],
    createdAt: "2024-02-16T10:00:00Z",
    updatedAt: "2024-02-16T10:00:00Z",
    featured: false,
    category: "sky",
    software: ["Lightroom"],
  },
  {
    id: "33",
    title: "Soft Geometry of Home",
    description:
      "Lines and corners learn to be gentle by evening. So do I.",
    thumbnailUrl: "/IMG_20250714_161702.jpg",
    type: "render",
    tags: ["home", "soft", "geometry"],
    createdAt: "2024-02-17T10:00:00Z",
    updatedAt: "2024-02-17T10:00:00Z",
    featured: false,
    category: "study",
    software: ["Photoshop"],
  },
  {
    id: "34",
    title: "Clouds Carrying Tomorrow",
    description:
      "The sky packs quiet promises in grays and whites. I believe them.",
    thumbnailUrl: "/IMG_20250831_153143.jpg",
    type: "render",
    tags: ["clouds", "promise", "gray"],
    createdAt: "2024-02-18T10:00:00Z",
    updatedAt: "2024-02-18T10:00:00Z",
    featured: false,
    category: "sky",
    software: ["Lightroom"],
  },
  {
    id: "35",
    title: "Light on the Edge of Leaving",
    description:
      "Goodbyes look golden at the right angle. I learn to thank them too.",
    thumbnailUrl: "/IMG_20250831_153006.jpg",
    type: "render",
    tags: ["gold", "leaving", "tender"],
    createdAt: "2024-02-19T10:00:00Z",
    updatedAt: "2024-02-19T10:00:00Z",
    featured: false,
    category: "sunset",
    software: ["Photoshop"],
  },
  {
    id: "36",
    title: "Blue Hours, Soft Answers",
    description:
      "Twilight replies without words. I understand anyway.",
    thumbnailUrl: "/IMG_20250831_161326.jpg",
    type: "render",
    tags: ["blue-hour", "quiet", "evening"],
    createdAt: "2024-02-20T10:00:00Z",
    updatedAt: "2024-02-20T10:00:00Z",
    featured: true,
    category: "evening",
    software: ["Lightroom"],
  },
  {
    id: "37",
    title: "The Gentle Mechanics of Light",
    description:
      "Even machines look kind in the right light. Maybe I do too.",
    thumbnailUrl: "/IMG_20250831_161309.jpg",
    type: "render",
    tags: ["machine", "light", "tender"],
    createdAt: "2024-02-21T10:00:00Z",
    updatedAt: "2024-02-21T10:00:00Z",
    featured: false,
    category: "everyday",
    software: ["Photoshop"],
  },
  {
    id: "38",
    title: "A Map Made of Shadows",
    description:
      "The day draws a map in dark and bright. I follow where it points.",
    thumbnailUrl: "/IMG_20250831_160920.jpg",
    type: "render",
    tags: ["shadow", "map", "learn"],
    createdAt: "2024-02-22T10:00:00Z",
    updatedAt: "2024-02-22T10:00:00Z",
    featured: false,
    category: "study",
    software: ["Lightroom"],
  },
  {
    id: "39",
    title: "Sunset Writes with Wires",
    description:
      "Lines across the sky teach me to love interruptions. Beauty keeps finding a way.",
    thumbnailUrl: "/IMG_20240808_174250.jpg",
    type: "render",
    tags: ["wires", "sunset", "beauty"],
    createdAt: "2024-02-23T10:00:00Z",
    updatedAt: "2024-02-23T10:00:00Z",
    featured: false,
    category: "everyday",
    software: ["Photoshop"],
  },
  {
    id: "40",
    title: "Morning Finds Me",
    description:
      "Light arrives without asking anything of me. I let it.",
    thumbnailUrl: "/IMG_20250416_172615.jpg",
    type: "render",
    tags: ["morning", "gentle", "new"],
    createdAt: "2024-02-24T10:00:00Z",
    updatedAt: "2024-02-24T10:00:00Z",
    featured: false,
    category: "morning",
    software: ["Lightroom"],
  },
  {
    id: "41",
    title: "Kindness in the Corners",
    description:
      "Corners don’t have to be sharp. I learn to turn softly.",
    thumbnailUrl: "/IMG_20250518_125555.jpg",
    type: "render",
    tags: ["corner", "soft", "learn"],
    createdAt: "2024-02-25T10:00:00Z",
    updatedAt: "2024-02-25T10:00:00Z",
    featured: false,
    category: "study",
    software: ["Photoshop"],
  },
  {
    id: "42",
    title: "Where I Keep My Hope",
    description:
      "Some colors feel like promises kept. I keep them close.",
    thumbnailUrl: "/IMG_20240808_174035.jpg",
    type: "render",
    tags: ["hope", "color", "keep"],
    createdAt: "2024-02-26T10:00:00Z",
    updatedAt: "2024-02-26T10:00:00Z",
    featured: true,
    category: "feeling",
    software: ["Lightroom"],
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
