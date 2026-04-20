import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, Phone } from 'lucide-react'
import { wppLink } from '../data'

const LINKS = [
  { label: 'Início',    to: '/' },
  { label: 'Produtos',  to: '/produtos' },
  { label: 'Sobre',     to: '/sobre' },
  { label: 'Contato',   to: '/contato' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    let lastY = window.scrollY
    const fn = () => {
      const y = window.scrollY
      setScrolled(y > 16)
      if (y > lastY && y > 80) {
        setHidden(true)   // rolando para baixo → esconde
      } else {
        setHidden(false)  // rolando para cima → mostra
      }
      lastY = y
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}${hidden ? ' nav-hidden' : ''}`}>
        <div className="container">
          <div className="nav-inner">

            {/* Logo */}
            <Link to="/" className="nav-logo" aria-label="Buribox — página inicial">
              <img
                src="/logo (2).png"
                alt="Buribox Embalagens"
                className="nav-logo-img"
              />
            </Link>

            {/* Desktop links */}
            <nav aria-label="Menu principal">
              <ul className="nav-links">
                {LINKS.map(l => (
                  <li key={l.to}>
                    <Link to={l.to} className={pathname === l.to ? 'active' : ''}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTA */}
            <div className="nav-actions">
              <a href="tel:+5515997711856" className="nav-phone">
                <Phone size={13} /> (15) 99771-1856
              </a>
              <a
                href={wppLink('Olá! Gostaria de um orçamento.')}
                target="_blank" rel="noreferrer"
                className="btn-primary btn-sm"
              >
                Orçamento <ArrowRight size={13} />
              </a>
            </div>

            {/* Burger mobile */}
            <button
              className="nav-burger"
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Drawer mobile */}
      <div className={`mobile-drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="mobile-drawer-inner">
          <nav>
            <ul className="mobile-links">
              {LINKS.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className={pathname === l.to ? 'active' : ''}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mobile-drawer-ctas">
            <a
              href={wppLink('Olá! Gostaria de um orçamento de embalagens.')}
              target="_blank" rel="noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <WppIcon /> Chamar no WhatsApp
            </a>
            <Link
              to="/contato"
              className="btn-outline"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Solicitar Orçamento
            </Link>
          </div>
          <p className="mobile-drawer-info">Seg–Sex · 08h–17h · Buri, SP</p>
        </div>
      </div>

      {open && (
        <div className="mobile-overlay" onClick={() => setOpen(false)} aria-hidden="true" />
      )}
    </>
  )
}

function WppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
