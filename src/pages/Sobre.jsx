import { Link } from 'react-router-dom'
import { CheckCircle, Leaf, Award, Heart, Target, ArrowRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import Counter from '../components/Counter'
import { STATS, wppLink } from '../data'

export default function Sobre() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero page-hero-sm">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <span className="label label-kraft">Conheça a empresa</span>
            <h1 className="page-hero-title">Sobre a Buribox</h1>
            <p className="page-hero-sub">
              Mais de 15 anos fabricando embalagens de qualidade em Buri, SP —
              com responsabilidade ambiental e compromisso com o cliente.
            </p>
          </FadeIn>
        </div>
        <div className="hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--bg)" />
          </svg>
        </div>
      </section>

      {/* História */}
      <section className="section">
        <div className="container">
          <div className="about-split">
            <FadeIn direction="left">
              <div className="about-visual-card">
                <div className="avc-header">
                  <span className="avc-dot red" /><span className="avc-dot yellow" /><span className="avc-dot green" />
                  <span className="avc-url">buribox.com.br</span>
                </div>
                <div className="avc-body">
                  {[
                    ['Fundação', '2011'],
                    ['Localização', 'Buri, SP'],
                    ['Atividade', 'Fabricação de Embalagens'],
                    ['Atuação', 'SP + Mercado Livre'],
                    ['Produção', 'Fábrica Própria'],
                    ['Matéria-prima', 'Reciclada e Reciclável'],
                    ['CNPJ', '30.070.747/0001-87'],
                  ].map(([k, v]) => (
                    <div className="avc-row" key={k}>
                      <span className="avc-key">{k}</span>
                      <span className="avc-val">{v}</span>
                    </div>
                  ))}
                </div>
                {/* Badge flutuante */}
                <div className="avc-badge">
                  <strong>+15</strong>
                  <span>anos de<br />mercado</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <span className="label">Nossa História</span>
                <h2 className="section-title" style={{ marginBottom: 20 }}>
                  Da fábrica em Buri<br />para todo o Brasil
                </h2>

                <p className="body-text">
                  A Buribox nasceu em 2011 com um compromisso simples: produzir e
                  comercializar embalagens de papelão com qualidade, satisfazendo
                  as necessidades de cada cliente. Com fábrica própria em Buri/SP,
                  garantimos controle total da produção — do papelão bruto à
                  embalagem pronta.
                </p>

                <p className="body-text" style={{ marginTop: 16 }}>
                  Ao longo de mais de uma década, construímos relações sólidas
                  com centenas de empresas em todo o Brasil, dos pequenos empreendedores
                  aos grandes distribuidores. Nossa principal conquista é a confiança
                  que nossos clientes depositam em nós dia após dia.
                </p>

                <ul className="check-list" style={{ marginTop: 24 }}>
                  {[
                    'Empresa familiar com tradição de mais de 15 anos',
                    'Fábrica própria com produção e controle internos',
                    'Papelão de qualidade com responsabilidade ambiental',
                    'Atendimento personalizado para cada cliente',
                    'Atuação em todo o Estado de SP e entregas via Mercado Livre',
                  ].map(c => (
                    <li key={c}>
                      <CheckCircle size={16} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-surface">
        <div className="container">
          <div className="stats-grid stats-grid-sobre">
            {STATS.map((s, i) => (
              <FadeIn key={i} delay={i * 0.09}>
                <div className="stat-card stat-card-large">
                  <strong className="stat-number">
                    <Counter target={s.n} suffix={s.suf} />
                  </strong>
                  <span className="stat-label">{s.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <span className="label">Identidade</span>
              <h2 className="section-title">Missão, Visão e Valores</h2>
            </div>
          </FadeIn>

          <div className="mvv-grid">
            {[
              {
                icon: <Target size={24} />,
                title: 'Missão',
                text: 'Produzir e comercializar embalagens de papelão com qualidade, satisfazendo as necessidades dos clientes com responsabilidade ambiental e preço justo.',
              },
              {
                icon: <Award size={24} />,
                title: 'Visão',
                text: 'Ser referência em embalagens de papelão no Estado de São Paulo, reconhecida pela qualidade, inovação e compromisso com a sustentabilidade.',
              },
              {
                icon: <Heart size={24} />,
                title: 'Valores',
                text: 'Qualidade, honestidade, respeito ao cliente, responsabilidade ambiental, trabalho em equipe e comprometimento com resultados.',
              },
            ].map((it, i) => (
              <FadeIn key={i} delay={i * 0.10}>
                <div className="mvv-card">
                  <div className="mvv-icon">{it.icon}</div>
                  <h3 className="mvv-title">{it.title}</h3>
                  <p className="mvv-text">{it.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sustentabilidade */}
      <section className="section section-dark">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="sust-layout">
            <FadeIn direction="left">
              <div className="sust-icon-big">
                <Leaf size={48} />
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <span className="label label-kraft">Sustentabilidade</span>
                <h2 className="section-title section-title-white" style={{ marginBottom: 16 }}>
                  Compromisso com<br />o Meio Ambiente
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.70)', fontSize: 16, lineHeight: 1.75, marginBottom: 24 }}>
                  Na Buribox, sustentabilidade não é só discurso. Trabalhamos com
                  papelão reciclado e reciclável em toda a nossa linha de produção,
                  reduzindo o impacto ambiental da cadeia produtiva e contribuindo
                  para um futuro mais consciente.
                </p>
                <div className="sust-pills">
                  {['Papelão Reciclado', 'Material Reciclável', 'Produção Sustentável', 'Menos Desperdício', 'Cadeia Verde'].map(p => (
                    <span key={p} className="sust-pill">{p}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="cta-inner" style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: '40px 36px',
            }}>
              <div className="cta-text">
                <h2 style={{ color: 'var(--text)' }}>Quer conhecer mais sobre a Buribox?</h2>
                <p style={{ color: 'var(--text-muted)' }}>Entre em contato com nossa equipe. Teremos prazer em atendê-lo.</p>
              </div>
              <div className="cta-actions">
                <a
                  href={wppLink('Olá! Gostaria de saber mais sobre a Buribox.')}
                  target="_blank" rel="noreferrer"
                  className="btn-whatsapp"
                >
                  <WppIcon /> WhatsApp
                </a>
                <Link to="/contato" className="btn-outline">
                  Formulário <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

function WppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
