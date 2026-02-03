'use client'

export function InstagramEmbed() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
      <iframe
        src="https://www.instagram.com/p/DBZp6-exrq4/embed/captioned"
        className="h-[700px] w-full border-0"
        scrolling="no"
        allowTransparency
        allow="encrypted-media"
        loading="eager"
        style={{ border: 'none', overflow: 'hidden' }}
      />
    </div>
  )
}
