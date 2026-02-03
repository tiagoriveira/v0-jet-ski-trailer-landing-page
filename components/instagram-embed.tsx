'use client'

import { useEffect } from 'react'

export function InstagramEmbed() {
  useEffect(() => {
    // Carregar o script do Instagram para processar embeds
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    } else {
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

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
