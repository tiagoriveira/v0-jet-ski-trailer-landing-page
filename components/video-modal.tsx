'use client'

import { useEffect, useRef } from 'react'

export function VideoModal() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      // Força o vídeo a ficar mutado e iniciar automaticamente
      videoRef.current.muted = true
      videoRef.current.play().catch(err => console.log('Autoplay prevented:', err))
    }
  }, [])

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Video Container - Vertical */}
      <div className="aspect-[9/16] max-h-[80vh] bg-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          controls
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/trailer-video.mp4" type="video/mp4" />
          <p className="text-white p-4">
            Seu navegador não suporta vídeo HTML5.{' '}
            <a
              href="https://www.instagram.com/p/DBZp6-exrq4/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Ver no Instagram
            </a>
          </p>
        </video>
      </div>
    </div>
  )
}
