'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export function VideoModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="block w-full max-w-md mx-auto rounded-lg overflow-hidden bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-2xl p-1 hover:shadow-xl transition-shadow"
      >
        <div className="bg-white rounded-lg p-6 text-center">
          <div className="h-16 w-16 mx-auto mb-4 bg-[#ee2a7b] rounded-full flex items-center justify-center">
            <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Assista ao vídeo completo</h3>
          <p className="text-gray-600">Conheça nossa história</p>
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl shadow-xl relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Video Container */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
                poster="/trailer-thumbnail.jpg"
              >
                <source src="/DIFERENCIAIS DA JVC CARRETAS ! 👆🏻 CONFIRA ✅#reels #jetski #carretas #explorepage #explore #vir.mp4" type="video/mp4" />
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
        </div>
      )}
    </>
  )
}
