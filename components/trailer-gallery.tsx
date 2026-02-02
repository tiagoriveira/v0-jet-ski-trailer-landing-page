'use client'

import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const images = [
  {
    src: '/trailer-1.jpg',
    alt: 'Carreta premium para jet ski com acabamento em preto',
  },
  {
    src: '/trailer-2.jpg',
    alt: 'Detalhes da estrutura galvanizada de alta qualidade',
  },
  {
    src: '/trailer-3.jpg',
    alt: 'Jet ski montado em carreta na marina',
  },
]

export function TrailerGallery() {
  return (
    <Carousel className="mx-auto w-full max-w-4xl">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
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
