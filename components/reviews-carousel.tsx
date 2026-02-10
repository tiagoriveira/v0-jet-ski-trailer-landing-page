'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from '@/components/ui/dialog'
import { X, VisuallyHidden } from 'lucide-react'

const reviews = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9C6Q3YgQg4pI4KwBvjk4B98QxwNem2.png',
    alt: 'Avaliação de Henrique Peters - 5 estrelas',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bDaLVk3ZyfNU3it3CGEt15cvAqZFRL.png',
    alt: 'Avaliação de Pneus Center Paulo Lopes - 5 estrelas',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y4glmPRgK0q6PyMFCEw4Zj6ZhMOztN.png',
    alt: 'Avaliação de Cristiano Tulio - 5 estrelas',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Z9ETkfSdIobybeqqWfjIv7AMjbRgtr.png',
    alt: 'Avaliação de Fabricio Aquino - 5 estrelas',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Bf4UlC78rR9xC4auLVywq3o1TnumPy.png',
    alt: 'Avaliação de Ney Maidana - 5 estrelas',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MCfWpNVsvqOCAXttLtZ8S8MwhpShfk.png',
    alt: 'Avaliação de Amanda Soares - 5 estrelas',
  },
]

export function ReviewsCarousel() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <Carousel className="mx-auto w-full max-w-5xl">
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div
                className="relative h-[400px] overflow-hidden rounded-lg bg-muted cursor-pointer transition-transform hover:scale-105"
                onClick={() => setSelectedImage(review.src)}
              >
                <Image
                  src={review.src}
                  alt={review.alt}
                  fill
                  className="object-contain"
                  priority={index < 3}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">Avaliação do Google</DialogTitle>
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
            <X className="h-4 w-4" />
            <span className="sr-only">Fechar</span>
          </DialogClose>
          {selectedImage && (
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage}
                alt="Avaliação do Google"
                fill
                className="object-contain"
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
