'use client'

export function InstagramEmbed() {
  return (
    <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden bg-white shadow-2xl">
      <iframe
        src="https://www.instagram.com/p/DBZp6-exrq4/embed"
        className="w-full h-[600px] border-0"
        scrolling="no"
        allowTransparency={true}
        loading="lazy"
      />
    </div>
  )
}
