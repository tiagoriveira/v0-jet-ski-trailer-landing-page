'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { submitLead, type LeadFormData } from '@/app/actions'
import { CheckCircle2, Loader2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export function LeadForm() {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    city: '',
    trailerType: '',
    quantity: '',
    timeframe: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState('')

  const handlePhoneChange = (value: string) => {
    // Brazilian phone mask: (XX) XXXXX-XXXX
    const numbers = value.replace(/\D/g, '')
    let formatted = numbers

    if (numbers.length > 0) {
      formatted = `(${numbers.substring(0, 2)}`
    }
    if (numbers.length > 2) {
      formatted += `) ${numbers.substring(2, 7)}`
    }
    if (numbers.length > 7) {
      formatted += `-${numbers.substring(7, 11)}`
    }

    setFormData((prev) => ({ ...prev, phone: formatted }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.city ||
      !formData.trailerType ||
      !formData.quantity ||
      !formData.timeframe
    ) {
      setError('Por favor, preencha todos os campos.')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Por favor, insira um e-mail válido.')
      return
    }

    // Phone validation (11 digits for Brazilian mobile)
    const phoneNumbers = formData.phone.replace(/\D/g, '')
    if (phoneNumbers.length < 10) {
      setError('Por favor, insira um telefone válido.')
      return
    }

    setIsSubmitting(true)

    try {
      const result = await submitLead(formData)

      if (result.success) {
        setShowSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          trailerType: '',
          quantity: '',
          timeframe: '',
        })
        console.log('[v0] Lead submitted successfully:', result)
        // Meta Pixel Lead Event
        if (typeof window !== 'undefined' && (window as any).fbq) {
          ;(window as any).fbq('track', 'Lead', {
            content_name: `${formData.trailerType} - ${formData.quantity} unidades`,
            currency: 'BRL',
            value: 1.0,
          })
        }
      } else {
        setError(result.error || 'Erro ao enviar formulário. Tente novamente.')
      }
    } catch (err) {
      console.error('[v0] Form submission error:', err)
      setError('Erro ao enviar formulário. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Nome Completo *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Seu nome completo"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              E-mail *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">
              WhatsApp *
            </Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              placeholder="(11) 99999-9999"
              maxLength={15}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="text-foreground">
              Cidade *
            </Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, city: e.target.value }))
              }
              placeholder="Sua cidade"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="trailerType" className="text-foreground">
              Tipo de Carreta *
            </Label>
            <Select
              value={formData.trailerType}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, trailerType: value }))
              }
              required
            >
              <SelectTrigger id="trailerType">
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fibra">Carreta de Fibra</SelectItem>
                <SelectItem value="padrao">Carreta Padrão</SelectItem>
                <SelectItem value="premium">Carreta Premium Personalizada</SelectItem>
                <SelectItem value="galvanizada">Carreta Galvanizada</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity" className="text-foreground">
              Quantidade *
            </Label>
            <Select
              value={formData.quantity}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, quantity: value }))
              }
              required
            >
              <SelectTrigger id="quantity">
                <SelectValue placeholder="Selecione a quantidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 unidade</SelectItem>
                <SelectItem value="2-3">2-3 unidades</SelectItem>
                <SelectItem value="4-5">4-5 unidades</SelectItem>
                <SelectItem value="6+">6+ unidades</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="timeframe" className="text-foreground">
              Prazo de Interesse *
            </Label>
            <Select
              value={formData.timeframe}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, timeframe: value }))
              }
              required
            >
              <SelectTrigger id="timeframe">
                <SelectValue placeholder="Quando você precisa?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="urgent">Urgente (até 15 dias)</SelectItem>
                <SelectItem value="1month">1 mês</SelectItem>
                <SelectItem value="2-3months">2-3 meses</SelectItem>
                <SelectItem value="flexible">Flexível</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {error && (
          <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
            {error}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            'Solicitar Orçamento'
          )}
        </Button>
      </form>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <DialogTitle className="text-center text-2xl">
              Orçamento Solicitado!
            </DialogTitle>
            <DialogDescription className="text-center">
              Recebemos sua solicitação. Nossa equipe entrará em contato em até
              24 horas para apresentar sua proposta personalizada.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setShowSuccess(false)}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Fechar
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
