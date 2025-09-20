import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function titleFromFilename(filename: string): string {
  const base = filename.replace(/^.*\//, "").replace(/\.[^.]+$/, "")
  const spaced = base.replace(/[_-]+/g, " ")
  const words = spaced.split(/\s+/).filter(Boolean)
  if (words.length === 0) return "Untitled"
  const capped = words.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ")
  return capped
}

export function descriptionFromFilename(filename: string): string {
  const pretty = titleFromFilename(filename)
  return `A small moment I didn’t want to forget — ${pretty} felt like a quiet lesson in light and patience.`
}
