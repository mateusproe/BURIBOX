// ─── Configuração global ──────────────────────────────────────────────────────
export const SITE = {
  name: 'Buribox Embalagens',
  tagline: 'Embalagens de Papelão Direto da Fábrica',
  whatsapp: '5515997711856',
  email: 'buribox@buribox.com.br',
  phone: '(15) 99771-1856',
  address: 'Rua Alipio Nunes de Barros, 879 — Buri, SP',
  instagram: 'https://www.instagram.com/buriboxembalagens/',
  facebook: 'https://www.facebook.com/p/Buribox-100054339875161/',
  maps: 'https://www.google.com/maps/place/Buri,+SP/@-23.7956,-49.2441,7z',
  cnpj: '30.070.747/0001-87',
}

export const wppLink = (msg = 'Olá Buribox! Gostaria de solicitar um orçamento.') =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`

// ─── Ondas disponíveis (compartilhado entre produtos) ─────────────────────────
export const ONDAS = [
  { code: 'E', label: 'Onda E', desc: 'Microondulado' },
  { code: 'B', label: 'Onda B', desc: 'Onda simples baixa' },
  { code: 'C', label: 'Onda C', desc: 'Onda simples alta duplex' },
  { code: 'BB', label: 'Onda BB', desc: 'Onda dupla baixa' },
  { code: 'BC', label: 'Onda BC', desc: 'Onda dupla triplex' },
]

export const MATERIAIS = ['Papelão Reciclado', 'Semikraft', 'Testliner', 'Papelão Branco']

// ─── Produtos ─────────────────────────────────────────────────────────────────
export const PRODUCTS = [
  {
    id: 'corte-vinco',
    name: 'Caixa Corte e Vinco',
    tagline: 'Sob medida, única e com acabamento de excelência',
    color: '#3D7B8C',
    images: [
      '/caixa corte e vinco.avif',
      '/corte e vinco png.png',
      '/20250516_1145_Caixa com Acabamento Nítido_simple_compose_01jvcrwttkf5rvyjdg3xkdqd33.png',
    ],
    desc: `As caixas de papelão corte e vinco são embalagens sob medida e totalmente personalizadas, podendo ser confeccionadas em várias medidas, formatos e cortes, de modo que sua estrutura se ajuste ao produto a ser embalado. Seu acabamento é excelente, pois utilizamos facas feitas sob medida para cada projeto.

É desenvolvida e fabricada para que seja única, podendo ser impressa com até duas cores pelo processo flexográfico, oferecendo suporte e qualidade para cada cliente.

Somos especializados em caixas para Licitações de Kit Escolar — atendemos prefeituras e distribuidores com qualidade, prazo e documentação completa.`,
    features: [
      'Embalagens sob medida para qualquer produto',
      'Especialistas em caixas para Kit Escolar e Licitações',
      'Impressão em até 2 cores (flexografia)',
      'Facas de corte exclusivas para cada projeto',
      'Acabamento superior e preciso',
      'Disponível em 5 tipos de onda',
      'Diversas opções de material',
    ],
    ondas: true,
    materiais: true,
    wppMsg: 'Olá! Tenho interesse em Caixa Corte e Vinco e gostaria de um orçamento.',
  },
  {
    id: 'maleta',
    name: 'Caixa Maleta',
    tagline: 'A melhor relação custo x benefício do mercado',
    color: '#C9A030',
    images: [
      '/ChatGPT Image 2 de jul. de 2025, 17_44_34.png',
      '/ChatGPT Image 2 de jul. de 2025, 17_53_14.png',
    ],
    desc: `As caixas de papelão tipo maleta, mais conhecidas como caixa de papelão comum normal, são a melhor opção custo x benefício do mercado. Podemos fabricar em qualquer medida e em diferentes qualidades para atender a necessidade específica de cada cliente.

Proporciona fácil armazenamento e fácil transporte, além de ajudar a proteger o produto durante todo o percurso. É muito usada para envio de encomendas via transportadora ou correios, sendo disponibilizada em 5 tipos de onda e diferentes materiais.`,
    features: [
      'Fabricada em qualquer medida',
      'Melhor custo x benefício do mercado',
      'Fácil montagem, armazenamento e transporte',
      'Ideal para envio via correios e transportadora',
      'Disponível em 5 tipos de onda',
      'Diversas opções de material',
    ],
    ondas: true,
    materiais: true,
    wppMsg: 'Olá! Tenho interesse em Caixa Maleta e gostaria de um orçamento.',
  },
  {
    id: 'pizza',
    name: 'Caixas de Pizza',
    tagline: 'Resistência e personalização para o seu delivery',
    color: '#A8402E',
    images: [
      '/pp.png',
      '/pf.png',
    ],
    desc: `A caixa de pizza, ótima para delivery, tem fundo pesado muito resistente, mantendo sua forte estrutura durante o transporte. A tampa pode ser personalizada na impressora flexografia (2 cores), ou na impressora fotográfica para um resultado ainda mais impactante.

Temos caixa de pizza nos formatos octogonal e quadrado, atendendo qualquer tamanho de pizzaria ou negócio de delivery.`,
    features: [
      'Fundo pesado muito resistente',
      'Formatos octogonal e quadrado',
      'Personalização em flexografia (2 cores)',
      'Impressão fotográfica disponível',
      'Mantém a estrutura durante o transporte',
      'Ideal para delivery e take away',
    ],
    ondas: false,
    materiais: false,
    wppMsg: 'Olá! Tenho interesse em Caixas de Pizza e gostaria de um orçamento.',
  },
  {
    id: 'acessorios',
    name: 'Acessórios de Papelão',
    tagline: 'Proteção e organização completa para o interior das embalagens',
    color: '#A89060',
    images: [
      '/cantoneira.png',
      '/acessorios.avif',
      '/Acessorios-de-papelao-ondulado-ommvng7z51p552gqtzeewb3kad2rsyzx6gx2gccvpw.avif',
    ],
    desc: `Oferecemos a linha completa de acessórios em papelão ondulado para proteção e organização do conteúdo das embalagens. Todos os modelos podem ser fabricados em qualquer dimensão e qualidade conforme a necessidade do cliente.

Somos especializados em cantoneiras para Cama Box — temos todas as medidas e preço justo. Atendemos fábricas, distribuidores e lojistas de todo o Brasil.`,
    features: [
      'Especialistas em cantoneiras para Cama Box — todas as medidas',
      'Colmeia: separa e protege produtos de choques',
      'Berços: moldam e fixam o produto na caixa',
      'Divisórias/Tabuleiros: separam conteúdo vertical e horizontalmente',
      'Cantoneiras: protegem quinas de quadros, vidros, portas e camas',
      'Calços e Cintas: calçam, separam e criam subespaços internos',
      'Todos fabricados sob medida',
    ],
    subItems: [
      { name: 'Cantoneiras para Cama Box', desc: 'Especializados em cantoneiras para Cama Box. Todas as medidas, preço justo e entrega para todo o Brasil.' },
      { name: 'Colmeia', desc: 'Separa e protege produtos de choques e quebras. Mín. 4 espaçamentos por caixa.' },
      { name: 'Berços', desc: 'Moldam o produto e fixam dentro da caixa para que não se movimente.' },
      { name: 'Divisórias', desc: 'Separam o conteúdo vertical ou horizontalmente.' },
      { name: 'Calços e Cintas', desc: 'Calçam, separam e criam subespaços internos de proteção.' },
    ],
    ondas: false,
    materiais: false,
    wppMsg: 'Olá! Tenho interesse em Acessórios de Papelão e gostaria de um orçamento.',
  },
]

// ─── Estatísticas ─────────────────────────────────────────────────────────────
export const STATS = [
  { n: 15, suf: '+', label: 'Anos de\nexperiência' },
  { n: 500, suf: '+', label: 'Clientes\natendidos' },
  { n: 48, suf: 'h', label: 'Prazo médio\nde entrega' },
  { n: 100, suf: '%', label: 'Fábrica Própria\natendendo qualquer demanda' },
]

// ─── Depoimentos ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: 'Carlos M.',
    role: 'Gerente de Logística',
    company: 'Distribuidora Regional',
    text: 'Trabalhamos com a Buribox há mais de 5 anos. A qualidade é consistente e o atendimento é diferenciado. Nunca tivemos problemas com atrasos.',
    stars: 5,
  },
  {
    name: 'Ana P.',
    role: 'Proprietária',
    company: 'E-commerce de Moda',
    text: 'As caixas personalizadas da Buribox fazem toda a diferença na experiência do cliente. O unboxing ficou incrível e os feedbacks são ótimos.',
    stars: 5,
  },
  {
    name: 'Roberto S.',
    role: 'Diretor Comercial',
    company: 'Indústria Alimentícia',
    text: 'Excelente parceiro. A Buribox entende nossas necessidades e sempre entrega dentro do prazo. O preço de fábrica é um diferencial enorme.',
    stars: 5,
  },
]
