import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

function walkDir(dir: string, exts: Set<string>, baseUrlPrefix: string, acc: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkDir(fullPath, exts, baseUrlPrefix, acc)
    } else {
      const ext = path.extname(entry.name).toLowerCase()
      if (exts.has(ext) && !entry.name.toLowerCase().includes("placeholder")) {
        const relPath = fullPath.replace(baseUrlPrefix, "").replace(/\\/g, "/")
        acc.push(relPath.startsWith("/") ? relPath : `/${relPath}`)
      }
    }
  }
  return acc
}

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), "public")
    const allowed = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"])
    const images = fs.existsSync(publicDir) ? walkDir(publicDir, allowed, publicDir) : []

    return NextResponse.json({ success: true, data: images })
  } catch (error) {
    console.error("Failed to list public images", error)
    return NextResponse.json({ success: false, data: [], message: "Failed to list images" }, { status: 500 })
  }
}


