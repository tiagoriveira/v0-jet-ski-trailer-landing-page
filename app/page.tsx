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
      <header className="fixed top-0 z-50 w-full border-b-4 border-primary bg-primary shadow-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-background px-4 py-2 shadow-sm">
              <Image
                src="/jvc-logo.png"
                alt="JVC Carretas Logo"
                width={120}
                height={30}
                className="h-auto w-28 object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-primary-foreground">Carretas</span>
          </div>
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-secondary pt-20">
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
              className="bg-primary text-primary-foreground hover:bg-primary/90"
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
              Veja de perto a qualidade e os detalhes que fazem nossas carretas
              serem referência no mercado.
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
            <p className="mb-6 text-pretty text-lg text-muted-foreground">
              Confira as avaliiacoes reais dos nossos clientes
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a
                href="https://share.google/U6QrhKBtDK0U62y7r"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Ver Avaliacoes no Google
              </a>
            </Button>
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
      <footer className="border-t-4 border-primary bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-3 rounded-lg bg-primary px-4 py-3 w-fit">
                <Image
                  src="/jvc-logo.png"
                  alt="JVC Carretas Logo"
                  width={120}
                  height={30}
                  className="h-auto w-24 object-contain"
                />
                <span className="text-xl font-bold text-primary-foreground">Carretas</span>
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
