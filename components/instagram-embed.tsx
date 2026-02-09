'use client'

import { useEffect, useState } from 'react'
import { PlayCircle } from 'lucide-react'

export function InstagramEmbed() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detectar mobile
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))

    // Carregar o script do Instagram para processar embeds (desktop)
    if (!isMobile && window.instgrm) {
      window.instgrm.Embeds.process()
    } else if (!isMobile) {
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [isMobile])

  // Mobile: Link direto para Instagram
  if (isMobile) {
    return (
      <a
        href="https://www.instagram.com/p/DBZp6-exrq4/"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full max-w-md mx-auto rounded-lg overflow-hidden bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-2xl p-1"
      >
        <div className="bg-white rounded-lg p-6 text-center">
          <PlayCircle className="h-16 w-16 mx-auto mb-4 text-[#ee2a7b]" />
          <h3 className="text-xl font-bold mb-2">Assista ao vídeo completo</h3>
          <p className="text-gray-600 mb-4">Toque para ver no Instagram</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ee2a7b] text-white rounded-full font-semibold">
            Ver no Instagram
          </div>
        </div>
      </a>
    )
  }

  // Desktop: Embed normal
  return (
    <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden bg-white shadow-2xl">
      <blockquote 
        className="instagram-media" 
        data-instgrm-permalink="https://www.instagram.com/p/DBZp6-exrq4/?utm_source=ig_embed&amp;utm_campaign=loading" 
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: '0',
          width: '100%',
        }}
      />
    </div>
  )
}
