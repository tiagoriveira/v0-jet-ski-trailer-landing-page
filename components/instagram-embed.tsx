'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

export function InstagramEmbed() {
  const [isMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < 768
  )

  if (isMobile) {
    return (
      <a
        href="https://www.instagram.com/jvccarretas/reel/DBZp6-exrq4/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full max-w-md overflow-hidden rounded-2xl shadow-2xl transition-transform hover:scale-105"
      >
        <div className="relative aspect-[9/16] bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/40 backdrop-blur-sm">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl transition-all group-hover:scale-110 group-hover:bg-white">
              <Play className="h-10 w-10 fill-black text-black" />
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-white drop-shadow-lg">
                Ver no Instagram
              </p>
              <p className="text-sm text-white/90">Toque para assistir</p>
            </div>
            <div className="mt-2 flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
              </svg>
              <span className="text-sm font-semibold text-white">@jvccarretas</span>
            </div>
          </div>
        </div>
      </a>
    )
  }

  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
      <iframe
        src="https://www.instagram.com/p/DBZp6-exrq4/embed/captioned"
        className="h-[700px] w-full border-0"
        scrolling="no"
        allowTransparency
        allow="encrypted-media"
      />
    </div>
  )
}
