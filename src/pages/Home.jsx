import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import {
  ArrowRight, ChevronRight, Shield, Award, Clock,
  Factory, Truck, Leaf, Users, Package,
  HeartPulse, Pizza, ShoppingCart, Wheat, Thermometer, Utensils, Landmark,
} from 'lucide-react'
import FadeIn from '../components/FadeIn'
import Counter from '../components/Counter'
import MlBanner from '../components/MlBanner'
import { PRODUCTS, STATS, wppLink } from '../data'

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <ProductsPreview />
      <MlBanner variant="geral" />
      <Features />
      <Segments />
    </main>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" aria-label="Apresentação Buribox">

      {/* Mosaico de fundo — 4 imagens cobrindo todo o hero */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-tile">
          <img src="/20250516_0920_Entrega de Caixa Buribox_remix_01jvcgj4rwfmstzfs1xps84he6.png" alt="" loading="eager" />
        </div>
        <div className="hero-bg-tile">
          <img src="/20250516_1103_Caixa de Papelão_remix_01jvcpecexfmdvq1abzf9rq0jg.png" alt="" loading="eager" />
        </div>
        <div className="hero-bg-tile">
          <img src="/20250516_1145_Papelão Ondulado Macro_simple_compose_01jvcrvp60ed9scq0h5sx2wbk5.png" alt="" loading="eager" />
        </div>
        <div className="hero-bg-tile">
          <img src="/20250516_0922_Caixa de Papelão_remix_01jvcgndd1ea682drddyjysvs4.png" alt="" loading="eager" />
        </div>
      </div>

      {/* Overlay azul/teal transparente */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Grade decorativa sobre o overlay */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Conteúdo sobre as imagens */}
      <div className="hero-content">
        <div className="container">

          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Direto da Fábrica · Buri, SP
          </div>

          <h1 className="hero-title">
            Embalagens de{' '}
            <span className="hero-accent">Papelão</span>{' '}
            com Qualidade Industrial
          </h1>

          <p className="hero-subtitle">
            A Buribox produz Embalagens, Caixas de Papel e Papelão Ondulado,
            personalizadas com sua medida e arte específica.
            Alta qualidade e preço justo.
          </p>

          <div className="hero-actions">
            <a
              href={wppLink('Olá Buribox! Gostaria de um orçamento de embalagens.')}
              target="_blank" rel="noreferrer"
              className="btn-whatsapp"
              style={{ fontSize: 15, padding: '14px 28px' }}
            >
              <WppIcon /> Solicitar Orçamento
            </a>
            <Link to="/produtos" className="hero-btn-ghost">
              Ver Produtos <ChevronRight size={17} />
            </Link>
          </div>

          <div className="hero-trust">
            {['Fábrica própria', 'Pronta entrega', 'Material reciclável'].map(t => (
              <span key={t} className="hero-trust-item">
                <Shield size={12} /> {t}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Wave de transição */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="var(--cream)" />
        </svg>
      </div>
    </section>
  )
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Números Buribox">
      <div className="stats-grid">
        {STATS.map((s, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="stat-card">
              <strong className="stat-number">
                <Counter target={s.n} suffix={s.suf} />
              </strong>
              <span className="stat-label">{s.label}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

// ─── Products preview ─────────────────────────────────────────────────────────
const CAPA_MAP = {
  'corte-vinco': 'corte vinco',
  'maleta':      'caixa',
  'pizza':       'pizza',
  'acessorios':  'acessorios',
}

function ProductsPreview() {
  return (
    <section className="section section-cream" id="produtos">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="label">Nossos Produtos</span>
            <h2 className="section-title">
              Soluções em embalagem<br />para cada necessidade
            </h2>
            <p className="section-sub">
              Do estoque pronto à produção sob medida — temos a embalagem
              certa para o seu negócio.
            </p>
          </div>
        </FadeIn>

        <div className="products-home-grid">
          {PRODUCTS.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.09}>
              <div className="product-home-card">
                <div className="product-home-img">
                  <img
                    src={`/capa ${CAPA_MAP[p.id]}.png`}
                    alt={p.name}
                    loading="lazy"
                  />
                </div>
                <div className="product-home-body">
                  <span className="product-home-cat">{p.name}</span>
                  <h3 className="product-home-name">{p.tagline}</h3>
                  <p className="product-home-short">
                    {p.desc.split('\n')[0].slice(0, 110)}…
                  </p>
                  <Link
                    to="/produtos"
                    className="product-home-link"
                    aria-label={`Ver detalhes de ${p.name}`}
                  >
                    Saiba mais <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="section-footer">
            <Link to="/produtos" className="btn-primary">
              Ver todos os produtos <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Features ─────────────────────────────────────────────────────────────────
function Features() {
  const items = [
    { icon: <Factory size={22} />, title: 'Fábrica Própria', desc: 'Produzimos diretamente em Buri/SP — controle total de qualidade e preços sem intermediários.' },
    { icon: <Award size={22} />, title: 'Qualidade Comprovada', desc: 'Matéria-prima selecionada e processo produtivo rigoroso com controle em cada etapa.' },
    { icon: <Clock size={22} />, title: 'Entrega Rápida', desc: 'Estoque disponível para pronta entrega. Atendemos pedidos urgentes para todo o Brasil.' },
    { icon: <Leaf size={22} />, title: 'Sustentabilidade', desc: 'Papelão reciclado e reciclável. Compromisso ambiental é parte central da nossa missão.' },
    { icon: <Package size={22} />, title: 'Sob Medida', desc: 'Dimensões exatas para o seu produto. Sem desperdício, com mais eficiência operacional.' },
    { icon: <Users size={22} />, title: 'Atendimento Consultivo', desc: 'Ajudamos a encontrar a melhor solução de embalagem para a realidade do seu negócio.' },
  ]

  return (
    <section className="section section-teal" aria-label="Diferenciais">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <FadeIn>
          <div className="section-header">
            <span className="label label-amber">Por que a Buribox?</span>
            <h2 className="section-title title-white">Nossos diferenciais</h2>
            <p className="section-sub sub-light">
              Da fábrica ao cliente final — qualidade, agilidade e respeito ao meio ambiente.
            </p>
          </div>
        </FadeIn>
        <div className="features-grid">
          {items.map((it, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="feature-card">
                <div className="feature-icon">{it.icon}</div>
                <h3 className="feature-title">{it.title}</h3>
                <p className="feature-desc">{it.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}


// ─── Segmentos ────────────────────────────────────────────────────────────────
const SEGMENTS = [
  {
    icon: <Utensils size={32} />,
    title: 'Setor Alimentício',
    desc: 'Embalagens para qualquer produto alimentício — congelados, laticínios, conservas e muito mais.',
    color: '#A89060',
  },
  {
    icon: <Thermometer size={32} />,
    title: 'Frigoríficos & Proteínas',
    desc: 'Caixas resistentes para acondicionar e transportar carnes, proteínas e produtos refrigerados.',
    color: '#5B8FA8',
  },
  {
    icon: <Pizza size={32} />,
    title: 'Delivery & Food Service',
    desc: 'Fazemos a embalagem certa para o seu negócio de delivery — qualquer formato, qualquer tamanho.',
    color: '#C9652A',
  },
  {
    icon: <ShoppingCart size={32} />,
    title: 'E-commerce',
    desc: 'Embalagens de papelão para enviar seus pedidos com segurança para qualquer lugar do Brasil.',
    color: '#3D7B8C',
  },
  {
    icon: <Factory size={32} />,
    title: 'Indústria em Geral',
    desc: 'Embalagens para qualquer produto industrial ou manufaturado — moveleiro, doméstico e demais setores.',
    color: '#6E7E82',
  },

  {
    icon: <Wheat size={32} />,
    title: 'Agronegócio',
    desc: 'Caixas para acondicionar e transportar qualquer produto do campo à mesa do consumidor.',
    color: '#7A9A4A',
  },
  {
    icon: <Truck size={32} />,
    title: 'Logística & Distribuição',
    desc: 'Embalagens em qualquer volume para distribuidoras, transportadoras e operadores logísticos.',
    color: '#4A6B7C',
  },
  {
    icon: <Landmark size={32} />,
    title: 'Licitações Públicas',
    desc: 'Atendemos prefeituras, órgãos públicos e distribuidores com qualidade, prazo e documentação completa.',
    color: '#3D5A80',
  },
]

function Segments() {
  const cardRefs = useRef([])

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 900px)').matches
    if (!isMobile) return

    const observers = []
    cardRefs.current.forEach((el) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('in-view')
          } else {
            el.classList.remove('in-view')
          }
        },
        { threshold: 0.55, rootMargin: '-15% 0px -15% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <section className="section section-surface" aria-label="Segmentos que atendemos">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="label">Segmentos</span>
            <h2 className="section-title">Quem atendemos</h2>
            <p className="section-sub">
              Da indústria ao delivery — embalagens para cada necessidade do seu negócio.
            </p>
          </div>
        </FadeIn>
        <div className="segments-grid">
          {SEGMENTS.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.05}>
              <div
                className="segment-card"
                ref={el => { cardRefs.current[i] = el }}
              >
                <div className="segment-icon" style={{ background: s.color + '18', color: s.color }}>
                  {s.icon}
                </div>
                <h3 className="segment-title">{s.title}</h3>
                <p className="segment-desc">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}


function WppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
