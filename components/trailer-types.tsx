import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const trailerTypes = [
  {
    name: 'Carreta de Fibra',
    image: '/images/trends/fibra.jpg',
    description: 'Leve e resistente, ideal para quem busca praticidade no dia a dia. Construída com fibra de vidro de alta qualidade, oferece excelente durabilidade e facilidade de manuseio.',
    features: ['Leve e prática', 'Resistente a impactos', 'Acabamento em gel coat'],
  },
  {
    name: 'Carreta Padrão',
    image: '/images/trends/padrao.jpg',
    description: 'Nossa opção mais versátil e popular. Estrutura em aço com pintura eletrostática, perfeita para uso regular em água doce e eventual uso em água salgada.',
    features: ['Estrutura em aço reforçado', 'Pintura eletrostática', 'Ótimo custo-benefício'],
  },
  {
    name: 'Carreta Premium Personalizada',
    image: '/images/trends/premium.jpg',
    description: 'O topo de linha em carretas personalizadas. Projeto exclusivo adaptado às suas necessidades específicas, com acabamento premium e componentes de primeira linha.',
    features: ['Projeto personalizado', 'Componentes premium', 'Acabamento diferenciado'],
  },
  {
    name: 'Carreta Galvanizada',
    image: '/images/trends/galvanizada.webp',
    description: 'A escolha definitiva para uso profissional e em água salgada. Galvanização a fogo garante proteção máxima contra corrosão, com durabilidade incomparável.',
    features: ['Galvanização a fogo', 'Máxima proteção', 'Ideal para água salgada'],
  },
]

export function TrailerTypes() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {trailerTypes.map((type, index) => (
        <Card key={index} className="group overflow-hidden border-border bg-card transition-all hover:shadow-2xl hover:border-primary/30">
          <div className="relative h-64 overflow-hidden">
            <Image 
              src={type.image} 
              alt={type.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
            <div className="absolute bottom-4 left-6">
               <h3 className="text-2xl font-bold text-white drop-shadow-md">
                {type.name}
              </h3>
            </div>
          </div>
          <CardContent className="p-6">
            <p className="mb-6 text-muted-foreground leading-relaxed">
              {type.description}
            </p>
            <ul className="grid grid-cols-1 gap-3">
              {type.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
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
  )
}
