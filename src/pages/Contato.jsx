import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MapPin, Phone, Mail, Clock, CheckCircle, Instagram, Facebook } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { SITE, wppLink } from '../data'

const schema = z.object({
  nome: z.string().min(2, 'Digite seu nome completo'),
  empresa: z.string().optional(),
  telefone: z.string().min(10, 'Digite um telefone válido'),
  email: z.string().email('E-mail inválido'),
  produto: z.string().min(1, 'Selecione um produto'),
  quantidade: z.string().optional(),
  mensagem: z.string().min(15, 'Descreva sua necessidade (mín. 15 caracteres)'),
})

export default function Contato() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero page-hero-sm">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <span className="label label-kraft">Fale conosco</span>
            <h1 className="page-hero-title">Solicite seu Orçamento</h1>
            <p className="page-hero-sub">
              Preencha o formulário ou fale diretamente pelo WhatsApp.
              Nossa equipe responde em até 2 horas em dias úteis.
            </p>
          </FadeIn>
        </div>
        <div className="hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--bg)" />
          </svg>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Formulário */}
            <FadeIn direction="left">
              <ContactForm />
            </FadeIn>

            {/* Info */}
            <FadeIn direction="right" delay={0.1}>
              <div className="contact-sidebar">
                <WhatsAppCard />

                <div className="contact-info-list">
                  <InfoItem icon={<MapPin size={18} />} label="Endereço">
                    Rua Alipio Nunes de Barros, 879<br />
                    Buri, SP — CEP 18290-000
                  </InfoItem>
                  <InfoItem icon={<Phone size={18} />} label="Telefone / WhatsApp">
                    <a href={`tel:+${SITE.whatsapp}`}>{SITE.phone}</a>
                  </InfoItem>
                  <InfoItem icon={<Mail size={18} />} label="E-mail">
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  </InfoItem>
                  <InfoItem icon={<Clock size={18} />} label="Horário de Atendimento">
                    Segunda a Sexta<br />
                    08h às 17h
                  </InfoItem>
                </div>

                {/* Redes Sociais */}
                <div className="social-block">
                  <p className="social-label">Siga a Buribox</p>
                  <div className="social-btns">
                    <a href={SITE.instagram} target="_blank" rel="noreferrer" className="social-btn">
                      <Instagram size={16} /> Instagram
                    </a>
                    <a href={SITE.facebook} target="_blank" rel="noreferrer" className="social-btn">
                      <Facebook size={16} /> Facebook
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mapa embed — sem API key */}
      <div className="map-wrapper">
        <iframe
          title="Buribox — Localização em Buri, SP"
          src="https://maps.google.com/maps?q=Rua+Alipio+Nunes+de+Barros+879+Buri+SP+Brasil&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="380"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </main>
  )
}

// ─── Formulário ───────────────────────────────────────────────────────────────
function ContactForm() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data) => {
    setSending(true)
    const msg = [
      `*Novo Orçamento — Buribox*`,
      ``,
      `*Nome:* ${data.nome}`,
      data.empresa ? `*Empresa:* ${data.empresa}` : null,
      `*Telefone:* ${data.telefone}`,
      `*E-mail:* ${data.email}`,
      `*Produto:* ${data.produto}`,
      data.quantidade ? `*Quantidade:* ${data.quantidade}` : null,
      `*Mensagem:* ${data.mensagem}`,
    ].filter(Boolean).join('\n')

    setTimeout(() => {
      setSending(false)
      setSent(true)
      window.open(wppLink(msg), '_blank')
    }, 700)
  }

  if (sent) {
    return (
      <div className="form-success">
        <div className="form-success-icon">
          <CheckCircle size={40} />
        </div>
        <h3>Mensagem enviada!</h3>
        <p>
          Você será redirecionado ao WhatsApp com os dados preenchidos.
          Nossa equipe retornará em breve.
        </p>
        <button
          onClick={() => { setSent(false); reset() }}
          className="btn-outline"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer', marginTop: 16 }}
        >
          Novo orçamento
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="contact-form">
      <h2 className="form-title">Dados para orçamento</h2>

      <div className="form-row">
        <Field label="Nome *" error={errors.nome?.message}>
          <input {...register('nome')} className={`form-input${errors.nome ? ' error' : ''}`} placeholder="Seu nome completo" />
        </Field>
        <Field label="Empresa" error={errors.empresa?.message}>
          <input {...register('empresa')} className="form-input" placeholder="Nome da empresa (opcional)" />
        </Field>
      </div>

      <div className="form-row">
        <Field label="Telefone / WhatsApp *" error={errors.telefone?.message}>
          <input {...register('telefone')} className={`form-input${errors.telefone ? ' error' : ''}`} placeholder="(15) 99999-9999" type="tel" />
        </Field>
        <Field label="E-mail *" error={errors.email?.message}>
          <input {...register('email')} className={`form-input${errors.email ? ' error' : ''}`} placeholder="seu@email.com" type="email" />
        </Field>
      </div>

      <div className="form-row">
        <Field label="Produto de interesse *" error={errors.produto?.message}>
          <select {...register('produto')} className={`form-select${errors.produto ? ' error' : ''}`}>
            <option value="">Selecione o produto...</option>
            <option>Caixa Corte e Vinco</option>
            <option>Caixa Maleta</option>
            <option>Caixas de Pizza</option>
            <option>Acessórios de Papelão (Colmeia, Berços, Cantoneiras…)</option>
            <option>Outro / Não sei ainda</option>
          </select>
        </Field>
        <Field label="Quantidade estimada" error={errors.quantidade?.message}>
          <input {...register('quantidade')} className="form-input" placeholder="Ex: 500 unidades/mês" />
        </Field>
      </div>

      <Field label="Descreva sua necessidade *" error={errors.mensagem?.message}>
        <textarea
          {...register('mensagem')}
          className={`form-textarea${errors.mensagem ? ' error' : ''}`}
          placeholder="Informe as dimensões (C x L x A), peso do produto, tipo de uso e qualquer detalhe relevante..."
          rows={5}
        />
      </Field>

      <button
        type="submit"
        disabled={sending}
        className="btn-whatsapp"
        style={{ width: '100%', justifyContent: 'center', padding: '15px 24px', fontSize: 16 }}
      >
        {sending ? 'Enviando...' : (
          <>
            <WppIcon />
            Enviar via WhatsApp
          </>
        )}
      </button>

      <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-muted)', marginTop: 12 }}>
        Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.
      </p>
    </form>
  )
}

function Field({ label, error, children }) {
  return (
    <div className="form-field">
      <label className="form-label">{label}</label>
      {children}
      {error && <span className="form-error">{error}</span>}
    </div>
  )
}

// ─── WhatsApp Card ────────────────────────────────────────────────────────────
function WhatsAppCard() {
  return (
    <div className="wpp-card">
      <div className="wpp-card-icon">
        <WppIcon size={32} />
      </div>
      <div>
        <strong>Prefere o WhatsApp?</strong>
        <p>Resposta mais rápida pelo chat.</p>
      </div>
      <a
        href={wppLink()}
        target="_blank" rel="noreferrer"
        className="btn-whatsapp"
        style={{ width: '100%', justifyContent: 'center', marginTop: 12 }}
      >
        <WppIcon />
        Chamar agora
      </a>
    </div>
  )
}

function InfoItem({ icon, label, children }) {
  return (
    <div className="info-item">
      <div className="info-icon">{icon}</div>
      <div>
        <span className="info-label">{label}</span>
        <div className="info-value">{children}</div>
      </div>
    </div>
  )
}

function WppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
