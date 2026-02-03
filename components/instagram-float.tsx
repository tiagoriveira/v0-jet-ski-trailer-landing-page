import { Instagram } from 'lucide-react'

export function InstagramFloat() {
  return (
    <a
      href="https://www.instagram.com/jvccarretas/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-lg transition-all hover:scale-110 hover:shadow-xl"
      aria-label="Siga-nos no Instagram"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
        <Instagram className="h-6 w-6 text-[#ee2a7b]" />
      </div>
    </a>
  )
}
