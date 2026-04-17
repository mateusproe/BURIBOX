import { Truck, Package } from 'lucide-react'
import FadeIn from './FadeIn'

/* Logo Mercado Livre Brasil — oval amarelo, borda azul, aperto de mão branco */
function MlLogoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 148" className="ml-logo-img" aria-label="Mercado Livre">
      {/* Oval amarelo */}
      <ellipse cx="110" cy="74" rx="103" ry="66" fill="#FFE600" stroke="#1B3FAB" strokeWidth="10"/>
      {/* Aperto de mão — simplificado mas reconhecível */}
      <g fill="white" stroke="none">
        {/* Punho esquerdo entrando pela esquerda */}
        <rect x="14" y="66" width="44" height="20" rx="10"/>
        {/* Palma esquerda */}
        <rect x="52" y="56" width="28" height="36" rx="8"/>
        {/* Dedos mão esquerda (4 dedos) */}
        <rect x="52" y="36" width="11" height="26" rx="5.5"/>
        <rect x="65" y="32" width="11" height="28" rx="5.5"/>
        <rect x="78" y="34" width="11" height="26" rx="5.5"/>
        <rect x="91" y="38" width="11" height="22" rx="5.5"/>

        {/* Punho direito entrando pela direita */}
        <rect x="162" y="62" width="44" height="20" rx="10"/>
        {/* Palma direita */}
        <rect x="140" y="56" width="28" height="36" rx="8"/>
        {/* Dedos mão direita (4 dedos) */}
        <rect x="157" y="36" width="11" height="26" rx="5.5"/>
        <rect x="144" y="32" width="11" height="28" rx="5.5"/>
        <rect x="131" y="34" width="11" height="26" rx="5.5"/>
        <rect x="118" y="38" width="11" height="22" rx="5.5"/>

        {/* Zona central do aperto */}
        <rect x="96" y="60" width="28" height="28" rx="6"/>
      </g>
    </svg>
  )
}

const VARIANTS = {
  geral: {
    eyebrow: 'Disponível no Mercado Livre',
    title: 'Compre caixas para o seu negócio em qualquer lugar do Brasil',
    sub: 'Receba diretamente na sua empresa. Caixas de papelão, embalagens para e-commerce e muito mais — com entrega rápida para todo o país.',
    pills: ['E-commerce', 'Embalagens em geral', 'Caixas Maleta', 'Acessórios'],
    btnLabel: 'Ver produtos na loja',
  },
  pizza: {
    eyebrow: 'Disponível no Mercado Livre',
    title: 'Caixas de pizza, salgados e e-commerce — entrega para todo o Brasil',
    sub: 'Peça pelo Mercado Livre e receba onde sua empresa estiver. Frete competitivo, pagamento seguro, nota fiscal.',
    pills: ['Caixas de Pizza', 'Caixas para Salgados', 'E-commerce', 'Delivery'],
    btnLabel: 'Comprar agora no ML',
  },
}

export default function MlBanner({ variant = 'geral' }) {
  const v = VARIANTS[variant]
  return (
    <FadeIn>
      <section className="ml-banner">
        <div className="container">
          <div className="ml-banner-inner">

            {/* Logo Mercado Livre */}
            <div className="ml-banner-logo" aria-hidden="true">
              <img src="/mercado-libre.png" alt="Mercado Livre" className="ml-logo-img" />
            </div>

            {/* Texto */}
            <div className="ml-banner-body">
              <span className="ml-banner-eyebrow">{v.eyebrow}</span>
              <h3 className="ml-banner-title">{v.title}</h3>
              <p className="ml-banner-sub">{v.sub}</p>
              <div className="ml-banner-pills">
                {v.pills.map(p => (
                  <span key={p} className="ml-banner-pill">
                    <Package size={11} /> {p}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="ml-banner-cta">
              <div className="ml-banner-trust">
                <Truck size={14} />
                Entrega para todo o Brasil
              </div>
              <a
                href="https://lista.mercadolivre.com.br/_CustId_1016119890"
                target="_blank"
                rel="noreferrer"
                className="ml-banner-btn"
              >
                {v.btnLabel}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17L17 7"/></svg>
              </a>
            </div>

          </div>
        </div>
      </section>
    </FadeIn>
  )
}
