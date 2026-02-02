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
    alt: 'Jet ski azul montado em carreta JVC premium',
  },
  {
    src: '/trailer-2.jpg',
    alt: 'Carreta JVC Básica - estrutura robusta em preto',
  },
  {
    src: '/trailer-3.jpg',
    alt: 'Carreta JVC Premium Padrão - acabamento preto e branco',
  },
  {
    src: '/trailer-4.jpg',
    alt: 'Carreta JVC Fibra - modelo em fibra de vidro',
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
