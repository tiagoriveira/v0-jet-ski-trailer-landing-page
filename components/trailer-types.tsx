'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { X } from 'lucide-react'

const trailerTypes = [
  {
    name: 'Carreta de Fibra',
    image: '/carreta-fibra.jpg',
    description: 'Leve e resistente, ideal para quem busca praticidade no dia a dia. Construída com fibra de vidro de alta qualidade, oferece excelente durabilidade e facilidade de manuseio.',
    features: ['Leve e prática', 'Resistente a impactos', 'Acabamento em gel coat'],
  },
  {
    name: 'Carreta Padrão',
    image: '/carreta-padrao.jpg',
    description: 'Nossa opção mais versátil e popular. Estrutura em aço com pintura eletrostática, perfeita para uso regular em água doce e eventual uso em água salgada.',
    features: ['Estrutura em aço reforçado', 'Pintura eletrostática', 'Ótimo custo-benefício'],
  },
  {
    name: 'Carreta Premium Personalizada',
    image: '/carreta-premium-personalizada.jpg',
    description: 'O topo de linha em carretas personalizadas. Projeto exclusivo adaptado às suas necessidades específicas, com acabamento premium e componentes de primeira linha.',
    features: ['Projeto personalizado', 'Componentes premium', 'Acabamento diferenciado'],
  },
  {
    name: 'Carreta Galvanizada',
    image: '/carreta-galvanizada.jpg',
    description: 'A escolha definitiva para uso profissional e em água salgada. Galvanização a fogo garante proteção máxima contra corrosão, com durabilidade incomparável.',
    features: ['Galvanização a fogo', 'Máxima proteção', 'Ideal para água salgada'],
  },
]

export function TrailerTypes() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {trailerTypes.map((type, index) => (
        <Card key={index} className="border-border bg-card transition-all hover:shadow-xl hover:border-foreground/20">
          <CardContent className="p-6">
            <img 
              src={type.image} 
              alt={type.name}
              className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage({ src: type.image, alt: type.name })}
            />
            <h3 className="mb-3 text-2xl font-bold text-card-foreground">
              {type.name}
            </h3>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              {type.description}
            </p>
            <ul className="space-y-2">
              {type.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground/90 text-background">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
      </div>

      {/* Modal de Visualização de Imagem */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
