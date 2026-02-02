'use client'

import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const reviews = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9Jxz0F8CIXg7Hi9mJoccdEAmdTaFDR.png',
    alt: 'Avaliacao de Igor Nunes de Paula - 5 estrelas',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GOxLGKC3S9noQZsBisr4UfMC71HIDj.png',
    alt: 'Avaliacao de Amanda Soares - 5 estrelas',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Vwt959Ds2uw5FNQi1IoLNMR10BmgiX.png',
    alt: 'Avaliacao de Cristiano Tulio - 5 estrelas',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tjeyI40aUBzVOrBeP8cLd9nwSjtLEZ.png',
    alt: 'Avaliacao de Douglas Molon - 5 estrelas',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fxNEppCrlUkif8RCwmCmt6CnAnV8H4.png',
    alt: 'Avaliacao anonima - 5 estrelas',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IVsESIC5kDjsSj7ESUglG6Dy3vBL80.png',
    alt: 'Avaliacao de Renato Figueiredo - 5 estrelas',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EYQncDAoLFRBsGB95nXTgZOF07pnAe.png',
    alt: 'Avaliacao de Maicon Westphal - 5 estrelas',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vM9d5Zj0SKAJEDNgB5Dhudf3Aw0Ijk.png',
    alt: 'Avaliacao de Henrique Peters - 5 estrelas',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EnjhvRP8iBHsiEAHu25jbB6yKRQJ1x.png',
    alt: 'Avaliacao de Jenifer Santos - 5 estrelas',
  },
]

export function ReviewsCarousel() {
  return (
    <Carousel className="mx-auto w-full max-w-4xl">
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem key={index}>
            <div className="relative overflow-hidden rounded-lg bg-card shadow-lg">
              <Image
                src={review.src}
                alt={review.alt}
                width={800}
                height={500}
                className="w-full h-auto object-contain"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  )
}
