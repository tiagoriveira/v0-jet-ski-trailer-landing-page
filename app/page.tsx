'use client';

import Image from 'next/image'
import { LeadForm } from '@/components/lead-form'
import { TrailerGallery } from '@/components/trailer-gallery'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Shield,
  Wrench,
  Truck,
  Award,
  Instagram,
  Facebook,
  Mail,
} from 'lucide-react'

export default function Home() {
  const scrollToForm = () => {
    document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-2xl font-bold text-foreground">
            <span className="text-primary">JVC</span> Carretas
          </div>
          <Button
            onClick={scrollToForm}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-secondary pt-16">
        <div className="absolute inset-0">
          <Image
            src="/hero-trailer.jpg"
            alt="Carreta premium JVC para jet ski"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-6 text-balance text-5xl font-bold text-secondary-foreground md:text-6xl lg:text-7xl">
            Carretas Premium para{' '}
            <span className="text-primary">Jet Ski</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-secondary-foreground/80 md:text-xl">
            Fabricação sob medida com galvanização a fogo, estrutura reforçada e
            acabamento impecável. A escolha de quem exige qualidade.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="text-primary-foreground hover:bg-primary/90 bg-[rgba(255,240,0,1)]"
            >
              Solicitar Orçamento Grátis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent"
              onClick={() =>
                document
                  .getElementById('diferenciais')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Conhecer Diferenciais
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="diferenciais" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
              Por que escolher a{' '}
              <span className="text-primary">JVC Carretas</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              Mais de 15 anos de experiência fabricando carretas premium para
              os clientes mais exigentes do Brasil.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-border bg-card transition-shadow hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground">
                  Galvanização a Fogo
                </h3>
                <p className="text-pretty text-muted-foreground">
                  Proteção máxima contra corrosão, ideal para uso em água
                  salgada e ambientes marinhos
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-shadow hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground">
                  Fabricação Sob Medida
                </h3>
                <p className="text-pretty text-muted-foreground">
                  Projeto exclusivo adaptado às dimensões exatas do seu jet
                  ski, garantindo encaixe perfeito
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-shadow hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground">
                  Estrutura Reforçada
                </h3>
                <p className="text-pretty text-muted-foreground">
                  Construída com perfis de alta resistência e capacidade de
                  carga superior à média
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-shadow hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground">
                  Garantia Estendida
                </h3>
                <p className="text-pretty text-muted-foreground">
                  2 anos de garantia total contra defeitos de fabricação e
                  suporte técnico vitalício
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
              Conheça nossos <span className="text-primary">produtos</span>
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              Veja de perto a qualidade e os detalhes que fazem nossas carretas serem referência no mercado.
            </p>
          </div>
          <TrailerGallery />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
              O que dizem nossos <span className="text-primary">clientes</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mb-4 text-pretty text-card-foreground">
                  &ldquo;Qualidade excepcional! A carreta é extremamente robusta e o
                  acabamento é impecável. Melhor investimento que fiz.&rdquo;
                </p>
                <p className="font-semibold text-foreground">
                  Ricardo M. - São Paulo
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mb-4 text-pretty text-card-foreground">
                  &ldquo;Uso em água salgada há 2 anos e está como nova. A
                  galvanização realmente faz diferença. Recomendo!&rdquo;
                </p>
                <p className="font-semibold text-foreground">
                  Mariana S. - Rio de Janeiro
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mb-4 text-pretty text-card-foreground">
                  &ldquo;Atendimento personalizado e produto sob medida. Ficou
                  perfeito para meus 3 jet skis. Equipe muito profissional.&rdquo;
                </p>
                <p className="font-semibold text-foreground">
                  Carlos A. - Florianópolis
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="orcamento" className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-balance text-4xl font-bold text-secondary-foreground md:text-5xl">
                Solicite seu <span className="text-primary">orçamento</span>
              </h2>
              <p className="text-pretty text-lg text-secondary-foreground/80">
                Preencha o formulário e receba uma proposta personalizada em até
                24 horas. Sem compromisso!
              </p>
            </div>

            <Card className="border-border bg-card">
              <CardContent className="p-6 md:p-8">
                <LeadForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 text-2xl font-bold text-foreground">
                <span className="text-primary">JVC</span> Carretas
              </div>
              <p className="text-muted-foreground">
                Carretas premium para jet ski. Qualidade e durabilidade em cada
                detalhe.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-foreground">Contato</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>WhatsApp: (11) 99999-9999</p>
                <p>contato@jvccarretas.com.br</p>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-foreground">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary/20"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary/20"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="mailto:contato@jvccarretas.com.br"
                  className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary/20"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 JVC Carretas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
