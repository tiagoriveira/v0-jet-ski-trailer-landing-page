'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function InstagramEmbed() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Preview/Trigger */}
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer rounded-lg border-2 border-secondary-foreground/30 bg-secondary-foreground/5 p-4 backdrop-blur-sm transition-all hover:border-secondary-foreground/50 hover:bg-secondary-foreground/10"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-secondary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-secondary-foreground"
              >
                <path
                  d="M8 5L19 12L8 19V5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div>
            <p className="font-semibold text-secondary-foreground">Ver nosso trabalho</p>
            <p className="text-sm text-secondary-foreground/70">Clique para assistir</p>
          </div>
        </div>
      </div>

      {/* Modal with Instagram Embed */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="absolute -right-2 -top-12 text-white hover:bg-white/20 hover:text-white"
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="overflow-hidden rounded-lg bg-white">
              <iframe
                src="https://www.instagram.com/p/DBZp6-exrq4/embed"
                className="h-[600px] w-full border-0"
                scrolling="no"
                allowTransparency={true}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
