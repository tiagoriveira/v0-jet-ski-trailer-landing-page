'use client'

import { Instagram } from 'lucide-react'

export function FloatingInstagram() {
  return (
    <a
      href="https://www.instagram.com/jvccarretas/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
      aria-label="Siga-nos no Instagram"
    >
      <Instagram className="h-7 w-7" />
    </a>
  )
}
