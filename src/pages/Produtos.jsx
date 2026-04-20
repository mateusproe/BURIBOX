import { CheckCircle } from 'lucide-react'
import { useRef, useState } from 'react'
import FadeIn from '../components/FadeIn'
import MlBanner from '../components/MlBanner'
import { PRODUCTS, ONDAS, MATERIAIS, wppLink } from '../data'

export default function Produtos() {
  return (
    <main>
      {/* Page hero */}
      <section className="page-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 32 }}>
          <FadeIn>
            <span className="label label-amber">Catálogo</span>
            <h1 className="page-hero-title">Nossos Produtos</h1>
            <p className="page-hero-sub">
              Embalagens de papelão para cada tipo de negócio — do estoque pronto
              ao projeto totalmente personalizado.
            </p>
          </FadeIn>

          {/* Mini nav de âncoras */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 8,
            marginTop: 28, paddingBottom: 4,
          }}>
            {PRODUCTS.map(p => (
              <a
                key={p.id}
                href={`#${p.id}`}
                style={{
                  fontSize: 13, fontWeight: 600,
                  color: 'rgba(255,255,255,0.75)',
                  background: 'rgba(255,255,255,0.10)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  padding: '6px 14px', borderRadius: 999,
                  textDecoration: 'none',
                  transition: 'background .2s, color .2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.20)'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.10)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
        <div className="hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none">
            <path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="var(--cream)" />
          </svg>
        </div>
      </section>

      {/* Seções editoriais de cada produto */}
      {PRODUCTS.map((p, i) => (
        <>
          <ProductSection key={p.id} product={p} reverse={i % 2 !== 0} />
          {p.id === 'pizza' && <MlBanner key="ml-pizza" variant="pizza" />}
        </>
      ))}

      {/* CTA final */}
      <section
        className="section"
        style={{ background: 'var(--cream-2)', borderTop: '1px solid var(--border)' }}
      >
        <div className="container">
          <FadeIn>
            <div className="cta-inner" style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: '40px 36px',
            }}>
              <div className="cta-text" style={{ color: 'var(--text)' }}>
                <h2 style={{ color: 'var(--text)' }}>Não encontrou o que precisa?</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                  Desenvolvemos soluções sob medida. Descreva seu produto e
                  encontramos a embalagem ideal.
                </p>
              </div>
              <div className="cta-actions">
                <a
                  href={wppLink('Preciso de uma embalagem específica. Podem me ajudar?')}
                  target="_blank" rel="noreferrer"
                  className="btn-whatsapp"
                >
                  <WppIcon /> Falar com Especialista
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

// ─── Galeria com carrossel (mobile) / coluna (desktop) ───────────────────────
function ProductGallery({ images, name }) {
  const ref = useRef(null)
  const [active, setActive] = useState(0)

  const handleScroll = () => {
    const el = ref.current
    if (!el) return
    const idx = Math.round(el.scrollLeft / el.clientWidth)
    setActive(idx)
  }

  const goTo = (i) => {
    ref.current?.scrollTo({ left: i * ref.current.clientWidth, behavior: 'smooth' })
    setActive(i)
  }

  return (
    <div className="prod-carousel-wrap">
      <div className="prod-gallery" ref={ref} onScroll={handleScroll}>
        {images.map((src, i) => (
          <div key={i} className="prod-img-slide">
            <img src={src} alt={`${name} — foto ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Dots — só aparecem no mobile via CSS */}
      {images.length > 1 && (
        <div className="prod-gallery-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`prod-gallery-dot${active === i ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Foto ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Seção editorial de cada produto ─────────────────────────────────────────
function ProductSection({ product: p, reverse }) {
  const bg = reverse ? 'var(--surface)' : 'var(--cream)'

  return (
    <section
      id={p.id}
      className="prod-section"
      style={{ background: bg }}
      aria-label={p.name}
    >
      <div className="container">
        <div className={`prod-layout${reverse ? ' reverse' : ''}`}>

          {/* Galeria */}
          <FadeIn direction={reverse ? 'right' : 'left'} className="prod-gallery-fadein">
            <ProductGallery images={p.images} name={p.name} />
          </FadeIn>

          {/* Info */}
          <FadeIn direction={reverse ? 'left' : 'right'} delay={0.08}>
            <div className="prod-info">
              {/* Badge de categoria com cor do produto */}
              <span
                className="prod-category-badge"
                style={{ background: p.color }}
              >
                {p.id === 'corte-vinco' && 'Licitações & Personalizado'}
                {p.id === 'maleta' && 'Estoque'}
                {p.id === 'pizza' && 'Especialidade'}
                {p.id === 'acessorios' && 'Acessórios'}
              </span>

              <h2 className="prod-name">{p.name}</h2>
              <p className="prod-tagline">{p.tagline}</p>

              <p className="prod-desc">{p.desc}</p>

              {/* Features */}
              <ul className="prod-features">
                {p.features.map(f => (
                  <li key={f}>
                    <CheckCircle size={15} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Sub-itens (acessórios) */}
              {p.subItems && (
                <div className="prod-subitems">
                  {p.subItems.map(s => (
                    <div key={s.name} className="prod-subitem">
                      <strong>{s.name}</strong>
                      <p>{s.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Ondas */}
              {p.ondas && (
                <div className="prod-specs">
                  <p className="prod-specs-title">Tipos de onda disponíveis</p>
                  <div className="prod-ondas">
                    {ONDAS.map(o => (
                      <div key={o.code} className="prod-onda-chip">
                        <strong>{o.label}</strong>
                        <span>{o.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Materiais */}
              {p.materiais && (
                <div className="prod-specs">
                  <p className="prod-specs-title">Materiais disponíveis</p>
                  <div className="prod-materiais">
                    {MATERIAIS.map(m => (
                      <span key={m} className="prod-material-tag">{m}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <a
                href={wppLink(p.wppMsg)}
                target="_blank" rel="noreferrer"
                className="btn-whatsapp"
                style={{ marginTop: 4 }}
              >
                <WppIcon />
                Solicitar Orçamento
              </a>
            </div>
          </FadeIn>
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
