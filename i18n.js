/**
 * KOKOX TOYS 多语言模块
 * 支持：中文(zh) / 英语(en) / 西班牙语(es)
 */
const I18N = {
  // ============ 导航栏 ============
  'nav_home': { zh: '首页', en: 'Home', es: 'Inicio' },
  'nav_about': { zh: '关于我们', en: 'About Us', es: 'Sobre Nosotros' },
  'nav_products': { zh: '产品服务', en: 'Products', es: 'Productos' },
  'nav_contact': { zh: '联系我们', en: 'Contact', es: 'Contacto' },

  // ============ 首页 Hero ============
  'hero_title_1': { zh: '专注潮玩IP', en: 'Global Art Toy IP', es: 'IP de Juguetes de Arte Global' },
  'hero_title_2': { zh: '全球商业化', en: 'Commercialization', es: 'Comercialización' },
  'hero_desc': {
    zh: '整合中国头部IP资源与全渠道出海能力，持有大量国际IP授权资源与优质国内厂牌的海外销售授权，构建覆盖全球的立体销售渠道网络。',
    en: 'Integrating top Chinese IP resources with global distribution capabilities. We hold extensive international IP licensing and premium domestic brand distribution rights, building a comprehensive global sales network.',
    es: 'Integramos los principales recursos de IP de China con capacidades de distribución global. Contamos con amplias licencias de IP internacionales y derechos de distribución de marcas nacionales premium, construyendo una red de ventas global.'
  },
  'hero_btn_products': { zh: '查看产品 →', en: 'View Products →', es: 'Ver Productos →' },
  'hero_btn_contact': { zh: '合作咨询', en: 'Partnership Inquiry', es: 'Consulta de Cooperación' },
  'hero_stat1_title': { zh: '4', en: '4', es: '4' },
  'hero_stat1_unit': { zh: '大品类', en: ' Categories', es: ' Categorías' },
  'hero_stat1_desc': { zh: '盲盒 / 谷子 / 卡牌 / AI玩具', en: 'Blind Boxes / Merch / Cards / AI Toys', es: 'Cajas Ciegas / Merch / Cartas / Juguetes IA' },
  'hero_stat2_title': { zh: '40+', en: '40+', es: '40+' },
  'hero_stat2_unit': { zh: '国语言', en: ' Languages', es: ' Idiomas' },
  'hero_stat2_desc': { zh: 'AI产品海外语言覆盖', en: 'AI Product Language Coverage', es: 'Cobertura de Idiomas IA' },
  'hero_stat3_title': { zh: '多', en: 'Multi', es: 'Multi' },
  'hero_stat3_unit': { zh: '渠道', en: '-Channel', es: '-Canal' },
  'hero_stat3_desc': { zh: 'B2B + 自营 + 线下', en: 'B2B + Direct + Offline', es: 'B2B + Directo + Tiendas' },
  'hero_card1_title': { zh: '资深营销基因', en: 'Seasoned Marketing DNA', es: 'ADN de Marketing Experto' },
  'hero_card1_desc': { zh: '原游戏大厂团队 + 跨境千万级店铺操盘手，懂运营更懂出海', en: 'Former gaming studio team + cross-border million-dollar store operators. We know operations and global expansion.', es: 'Equipo de ex estudio de juegos + operadores de tiendas transfronterizas. Conocemos operaciones y expansión global.' },
  'hero_card2_title': { zh: '全渠道销售网络', en: 'Omnichannel Sales Network', es: 'Red de Ventas Multicanal' },
  'hero_card2_desc': { zh: 'Alibaba国际站 / TikTok / TEMU / SHIEN / 线下门店', en: 'Alibaba International / TikTok / TEMU / SHIEN / Offline Stores', es: 'Alibaba International / TikTok / TEMU / SHIEN / Tiendas' },
  'hero_card3_title': { zh: '海外仓布局', en: 'Global Warehouse Network', es: 'Red de Almacenes Globales' },
  'hero_card3_desc': { zh: '阿联酋等海外仓体系，降低运营成本与出货周期', en: 'Overseas warehouse system in UAE and beyond, reducing costs and delivery time.', es: 'Sistema de almacenes en EAU y más, reduciendo costos y tiempos.' },

  // ============ 首页 - 业务定位 ============
  'sec_positioning': { zh: '业务定位', en: 'Business Positioning', es: 'Posicionamiento Comercial' },
  'sec_positioning_title': { zh: '全球潮玩IP商业化伙伴', en: 'Global Art Toy IP Commercialization Partner', es: 'Socio de Comercialización IP Global' },
  'sec_positioning_desc': { zh: '专注整合中国头部IP资源与全渠道出海能力，提供潮玩供应链、IP授权与定制、出海营销等全链路服务。', en: 'Dedicated to integrating top Chinese IP resources with global distribution, providing full-chain services including art toy supply chain, IP licensing, and global marketing.', es: 'Dedicados a integrar recursos IP premium con distribución global, ofreciendo servicios completos de cadena de suministro, licenciamiento IP y marketing.' },
  'pos_trade_title': { zh: '出海贸易', en: 'Global Trade', es: 'Comercio Global' },
  'pos_trade_desc': { zh: '整合全球渠道资源，覆盖欧美、东南亚、中东等增量市场，B2B供货与多平台自营并驾齐驱。', en: 'Integrating global channel resources across Europe, Americas, Southeast Asia, and Middle East markets. B2B supply and multi-platform direct sales.', es: 'Integrando recursos globales en Europa, Américas, Asia y Medio Oriente. Suministro B2B y ventas directas.' },
  'pos_ecom_title': { zh: '跨境电商', en: 'Cross-border E-commerce', es: 'E-commerce Transfronterizo' },
  'pos_ecom_desc': { zh: '阿里巴巴国际站官方合作店铺，TikTok/TEMU/SHIEN等C端平台自营，多渠道快速出货。', en: 'Official Alibaba International partner store, direct sales on TikTok/TEMU/SHIEN with rapid multi-channel fulfillment.', es: 'Tienda oficial en Alibaba International, ventas directas en TikTok/TEMU/SHIEN con cumplimiento rápido.' },
  'pos_marketing_title': { zh: '出海营销', en: 'Global Marketing', es: 'Marketing Global' },
  'pos_marketing_desc': { zh: 'IP授权、社媒营销、海外展优先参展，快速反馈品牌方对应海外市场推广策略。', en: 'IP licensing, social media marketing, priority overseas exhibition participation with rapid market feedback.', es: 'Licenciamiento IP, marketing en redes sociales, participación prioritaria en ferias.' },

  // ============ 首页 - 三大业务板块 ============
  'sec_pillars': { zh: '三大业务板块', en: 'Three Business Pillars', es: 'Tres Pilares de Negocio' },
  'sec_pillars_title': { zh: '全方位业务矩阵', en: 'Comprehensive Business Matrix', es: 'Matriz de Negocio Integral' },
  'sec_pillars_desc': { zh: '覆盖潮玩供应链、影视动漫IP周边、IP授权与定制业务，构建多元化商业生态。', en: 'Covering art toy supply chain, entertainment IP merchandise, and IP licensing — building a diversified business ecosystem.', es: 'Cubriendo cadena de suministro, merchandise de entretenimiento y licenciamiento IP.' },
  'pillar1_tag': { zh: '核心业务', en: 'Core Business', es: 'Negocio Principal' },
  'pillar1_title': { zh: '潮玩供应链', en: 'Art Toy Supply Chain', es: 'Cadena de Suministro' },
  'pillar1_desc': { zh: '中国原创IP + 全球IP资源整合，提供盲盒类、毛绒、积木等全品类潮玩产品的设计、生产与供应链服务。', en: 'Chinese original + global IP integration. Full-category art toy design, production, and supply chain services.', es: 'IP original china + integración global. Diseño, producción y servicios de cadena de suministro.' },
  'pillar2_tag': { zh: '热门赛道', en: 'Hot Trend', es: 'Tendencia Popular' },
  'pillar2_title': { zh: '影视与动漫IP周边（谷子）', en: 'Entertainment IP Merchandise', es: 'Merchandise de Entretenimiento' },
  'pillar2_desc': { zh: '游戏、动漫等衍生产品，涵盖卡牌、吧唧、纪念票、立牌等全品类谷子产品，满足粉丝经济消费需求。', en: 'Gaming and anime derivatives including cards, badges, tickets, and standees for the fan economy.', es: 'Derivados de gaming y anime incluyendo cartas, pins, tickets y stands para la economía fan.' },
  'pillar3_tag': { zh: '增值服务', en: 'Value-added', es: 'Servicios Premium' },
  'pillar3_title': { zh: 'IP授权与定制业务', en: 'IP Licensing & Customization', es: 'Licenciamiento y Personalización IP' },
  'pillar3_desc': { zh: '提供IP授权服务与IP定制解决方案，帮助品牌方快速获取国际IP授权，打造差异化产品线。', en: 'IP licensing and customization solutions. Helping brands quickly acquire international IP licenses for differentiated product lines.', es: 'Licenciamiento y personalización IP. Ayudando a marcas a obtener licencias internacionales.' },

  // ============ 首页 - 业务优势 ============
  'sec_advantages': { zh: '业务优势', en: 'Competitive Advantages', es: 'Ventajas Competitivas' },
  'sec_advantages_title': { zh: '为什么选择潜鲸出海', en: 'Why Choose KOKOX TOYS', es: 'Por Qué Elegir KOKOX TOYS' },
  'sec_advantages_desc': { zh: '全品类IP资源池、出海平台深度合作、供应链快速响应，赋能品牌方全球拓展。', en: 'Full-category IP resource pool, deep platform partnerships, and agile supply chain for global brand expansion.', es: 'Pool de recursos IP completo, alianzas con plataformas y cadena de suministro ágil.' },
  'adv1_title': { zh: '阿里国际站官方合作', en: 'Official Alibaba Partner', es: 'Socio Oficial Alibaba' },
  'adv1_desc': { zh: '官方合作店铺，美国线下连锁店门店渠道，欧洲大卖合作商', en: 'Official partner store, US retail chain channels, European wholesale partnerships.', es: 'Tienda socio oficial, canales de tiendas en EE.UU., partnerships mayoristas europeos.' },
  'adv2_title': { zh: '全品类IP资源池', en: 'Full IP Resource Pool', es: 'Pool Completo de Recursos IP' },
  'adv2_desc': { zh: '持有大量国际IP授权与优质国内厂牌海外销售授权', en: 'Extensive international IP licensing and premium domestic brand distribution rights.', es: 'Amplias licencias IP internacionales y derechos de distribución premium.' },
  'adv3_title': { zh: '多平台深度合作', en: 'Multi-Platform Partnership', es: 'Alianza Multi-Plataforma' },
  'adv3_desc': { zh: 'Alibaba / TikTok / TEMU / SHIEN 多渠道覆盖', en: 'Multi-channel coverage across Alibaba / TikTok / TEMU / SHIEN.', es: 'Cobertura multicanal en Alibaba / TikTok / TEMU / SHIEN.' },
  'adv4_title': { zh: '数据驱动决策', en: 'Data-Driven Decisions', es: 'Decisiones Basadas en Datos' },
  'adv4_desc': { zh: '共享素材库与平台数据，提供海外消费趋势与爆品选品支持', en: 'Shared asset library and platform data for overseas consumer trends and product selection.', es: 'Biblioteca compartida y datos de plataformas para tendencias de consumo.' },

  // ============ 首页 - 解决痛点 ============
  'sec_painpoints': { zh: '解决痛点', en: 'Pain Points Solved', es: 'Problemas Resueltos' },
  'sec_painpoints_title': { zh: '我们为您解决什么', en: 'What We Solve For You', es: 'Qué Resolvemos Para Ti' },
  'sec_painpoints_desc': { zh: '品牌方出海面临的种种难题，潜鲸出海提供一站式解决方案。', en: 'KOKOX TOYS provides one-stop solutions for the challenges brands face in global expansion.', es: 'KOKOX TOYS ofrece soluciones integrales para los desafíos de expansión global.' },
  'pp1_title': { zh: '全球渠道变现', en: 'Global Revenue Channels', es: 'Canales de Ingresos Globales' },
  'pp1_desc': { zh: '覆盖欧美/东南亚/中东等增量市场，多渠道立体销售网络，帮助品牌快速触达全球消费者。', en: 'Multi-dimensional sales network covering Europe/Americas/SEA/Middle East for rapid global consumer reach.', es: 'Red de ventas multidimensional cubriendo Europa/Américas/Asia/Medio Oriente.' },
  'pp2_title': { zh: '降低出海风险', en: 'Reduced Global Risk', es: 'Riesgo Global Reducido' },
  'pp2_desc': { zh: '直发国内仓即可，无需出海经验。合规护航，解决商家难授权、合规经营风险。', en: 'Ship from domestic warehouse, no global experience needed. Compliance support to reduce authorization and legal risks.', es: 'Envío desde almacén nacional, sin experiencia global. Soporte de cumplimiento legal.' },
  'pp3_title': { zh: '数据运营赋能', en: 'Data-Driven Operations', es: 'Operaciones Basadas en Datos' },
  'pp3_desc': { zh: '提供海外消费趋势与渠道运营数据支持，解决品牌方难培养运营团队的问题。', en: 'Overseas consumer trends and channel operation data support, solving the challenge of building operations teams.', es: 'Tendencias de consumo y datos operativos para resolver desafíos de equipos.' },
  'pp4_title': { zh: '独家IP供给', en: 'Exclusive IP Supply', es: 'Suministro IP Exclusivo' },
  'pp4_desc': { zh: '优先获得爆款IP新品，货品齐全，国内主流产品都可供货，大部分可提供授权支持。', en: 'Priority access to trending IP new releases. Full product range with authorization support for most items.', es: 'Acceso prioritario a nuevos lanzamientos IP. Catálogo completo con soporte de autorización.' },
  'pp5_title': { zh: '拿货灵活无忧', en: 'Flexible Ordering', es: 'Pedidos Flexibles' },
  'pp5_desc': { zh: '出单后拿货，一箱起拿，部分产品可一件代发，无库存风险，轻资产运营。', en: 'Order after sale, one carton minimum. Drop shipping available for select products — zero inventory risk.', es: 'Pedido post-venta, mínimo una caja. Drop shipping disponible — riesgo cero de inventario.' },
  'pp6_title': { zh: '海外仓布局', en: 'Overseas Warehouses', es: 'Almacenes Internacionales' },
  'pp6_desc': { zh: '26年阿联酋海外仓布局，降低海外运营和出货成本，提升物流时效。', en: 'UAE overseas warehouse established 2026, reducing operational costs and improving delivery speed.', es: 'Almacén en EAU establecido 2026, reduciendo costos y mejorando velocidad.' },

  // ============ CTA ============
  'cta_index_title': { zh: '合作共赢，出海无界', en: 'Win-Win Partnership, Borderless Expansion', es: 'Alianza Ganar-Ganar, Expansión Sin Fronteras' },
  'cta_index_desc': { zh: '无论您是IP品牌方、跨境电商卖家还是渠道商，我们都能为您提供最优合作方案。', en: 'Whether you\'re an IP brand, cross-border seller, or channel distributor, we have the optimal partnership for you.', es: 'Ya seas marca IP, vendedor transfronterizo o distribuidor, tenemos la alianza óptima.' },
  'cta_index_btn': { zh: '立即联系我们 →', en: 'Contact Us Now →', es: 'Contáctanos Ahora →' },
  'cta_about_title': { zh: '携手出海，共创未来', en: 'Together, We Go Global', es: 'Juntos, Llegamos al Mundo' },
  'cta_about_desc': { zh: '我们期待与IP品牌方、渠道商、电商平台深度合作，共同开拓全球潮玩市场。', en: 'We look forward to deep partnerships with IP brands, distributors, and e-commerce platforms.', es: 'Esperamos alianzas profundas con marcas IP, distribuidores y plataformas e-commerce.' },
  'cta_contact_title': { zh: '直接联系我们', en: 'Contact Us Directly', es: 'Contáctanos Directamente' },
  'cta_contact_desc': { zh: '商务联系人：Amiee.W | 电话：17600294377', en: 'Business Contact: Amiee.W | Phone: 17600294377', es: 'Contacto: Amiee.W | Teléfono: 17600294377' },
  'cta_contact_btn': { zh: '拨打电话 →', en: 'Call Now →', es: 'Llamar Ahora →' },
  'cta_products_title': { zh: '获取完整产品目录与合作方案', en: 'Get Full Product Catalog & Partnership Plans', es: 'Obtén el Catálogo Completo y Planes de Alianza' },
  'cta_products_desc': { zh: '联系我们获取最新IP产品清单、价格方案与合作政策。', en: 'Contact us for the latest IP product list, pricing, and partnership policies.', es: 'Contáctanos para el listado de productos, precios y políticas.' },
  'cta_products_btn': { zh: '立即咨询 →', en: 'Inquire Now →', es: 'Consultar Ahora →' },

  // ============ 关于我们 ============
  'about_banner_title': { zh: '关于我们', en: 'About Us', es: 'Sobre Nosotros' },
  'about_banner_desc': { zh: '潜鲸出海国际贸易有限公司 — 全球潮玩IP商业化伙伴', en: 'Shenzhen Qianjing ChuHai Trading Co., Ltd. — Global Art Toy IP Commercialization Partner', es: 'Shenzhen Qianjing ChuHai Trading Co., Ltd. — Socio de Comercialización IP Global' },
  'about_intro_label': { zh: '公司简介', en: 'Company Profile', es: 'Perfil de la Empresa' },
  'about_intro_title': { zh: '潜鲸出海 — 让中国IP走向世界', en: 'KOKOX TOYS — Bringing Chinese IP to the World', es: 'KOKOX TOYS — Llevando IP China al Mundo' },
  'about_intro_p1': {
    zh: '潜鲸出海国际贸易有限公司（KOKOX TOYS）是一家专注于潮玩IP全球商业化的综合性贸易企业。我们持有大量国际IP授权资源与优质国内厂牌的海外销售授权，依托资深营销基因，构建了覆盖全球的立体销售渠道网络。',
    en: 'KOKOX TOYS is a comprehensive trading company focused on the global commercialization of art toy IPs. We hold extensive international IP licensing and premium domestic brand distribution rights, building a global multi-channel sales network backed by seasoned marketing expertise.',
    es: 'KOKOX TOYS es una empresa comercial integral enfocada en la comercialización global de IP de juguetes de arte. Contamos con amplias licencias IP internacionales y derechos de distribución premium, construyendo una red de ventas global con experiencia en marketing.'
  },
  'about_intro_p2': {
    zh: '我们的核心团队由原游戏大厂资深成员、跨境千万级店铺操盘手、跨境贸易平台市场运营专家以及出海营销专家组成，拥有丰富的跨境贸易与电商运营实战经验。',
    en: 'Our core team consists of former gaming studio veterans, cross-border million-dollar store operators, trade platform marketing experts, and global marketing specialists with rich hands-on experience.',
    es: 'Nuestro equipo está formado por veteranos de estudios de juegos, operadores de tiendas millonarias, expertos en marketing y especialistas en expansión global con amplia experiencia.'
  },
  'about_intro_p3': {
    zh: '公司致力于帮助中国潮玩与文化衍生产品实现商业渠道的全球拓展与品牌化，助力中国原创IP与全球优质IP提升出海效率与商业化价值。',
    en: 'We are committed to helping Chinese art toys and cultural derivatives achieve global commercial expansion and branding, boosting the global efficiency and commercial value of original and premium IPs.',
    es: 'Estamos comprometidos a ayudar a juguetes de arte y derivados culturales chinos a lograr expansión comercial global.'
  },
  'about_pos_label': { zh: '业务定位', en: 'Business Positioning', es: 'Posicionamiento' },
  'about_pos_title': { zh: '出海贸易 · 跨境电商 · 出海营销', en: 'Global Trade · Cross-border E-commerce · Global Marketing', es: 'Comercio Global · E-commerce Transfronterizo · Marketing Global' },
  'about_pos_desc': { zh: '三大核心能力，构建潮玩出海全链路服务体系。', en: 'Three core capabilities building a full-chain art toy global expansion service system.', es: 'Tres capacidades centrales construyendo un sistema de servicio integral.' },
  'about_pos1_title': { zh: '出海贸易', en: 'Global Trade', es: 'Comercio Global' },
  'about_pos1_desc': { zh: '全球渠道变现，覆盖欧美、东南亚、中东等增量市场。B2B渠道供货给亚马逊、TikTok、SHIEN等平台商家，海外展优先参展。', en: 'Global channel monetization across Europe, Americas, SEA, and Middle East. B2B supply to Amazon, TikTok, SHIEN merchants with priority exhibition participation.', es: 'Monetización de canales globales. Suministro B2B a Amazon, TikTok, SHIEN con participación prioritaria en ferias.' },
  'about_pos2_title': { zh: '跨境电商', en: 'Cross-border E-commerce', es: 'E-commerce Transfronterizo' },
  'about_pos2_desc': { zh: '阿里巴巴国际站B端自营店，C端TikTok/TEMU/SHIEN平台自营店运营，多渠道出货实现"快速出货"目标。', en: 'Alibaba International B2B store + C2C TikTok/TEMU/SHIEN direct stores for rapid multi-channel fulfillment.', es: 'Tienda B2B Alibaba + tiendas directas TikTok/TEMU/SHIEN para cumplimiento rápido.' },
  'about_pos3_title': { zh: '出海营销', en: 'Global Marketing', es: 'Marketing Global' },
  'about_pos3_desc': { zh: 'IP授权、社媒营销、海外展参展等多维营销手段，快速反馈品牌方对应海外市场推广策略，提供B端数据支持。', en: 'Multi-dimensional marketing including IP licensing, social media, and overseas exhibitions with rapid B2B data feedback.', es: 'Marketing multidimensional incluyendo licenciamiento IP, redes sociales y ferias.' },

  // ============ 关于我们 - 市场背景 ============
  'about_market_label': { zh: '市场背景', en: 'Market Background', es: 'Contexto de Mercado' },
  'about_market_title': { zh: '潮玩出海的黄金时代', en: 'The Golden Age of Art Toy Globalization', es: 'La Era Dorada de Juguetes de Arte' },
  'about_market_desc': { zh: '情绪消费撬动400%增长，中国潮玩出海空间广阔。', en: 'Emotional consumption driving 400% growth — massive opportunities for Chinese art toy global expansion.', es: 'El consumo emocional impulsa un crecimiento del 400% — oportunidades masivas.' },
  'market1_title': { zh: '市场高速增长', en: 'Rapid Market Growth', es: 'Crecimiento Rápido' },
  'market1_desc': { zh: '潮玩市场预计2026年达千亿规模。泡泡玛特2025年Q1海外收入同比增长近400%，印证出海潜力巨大。', en: 'Art toy market projected to reach ¥100B+ by 2026. POP MART\'s Q1 2025 overseas revenue grew nearly 400% YoY.', es: 'Mercado proyectado a alcanzar más de ¥100B para 2026. Ingresos internacionales de POP MART crecieron 400%.' },
  'market2_title': { zh: '社交媒体驱动', en: 'Social Media Driven', es: 'Impulsado por Redes Sociales' },
  'market2_desc': { zh: '全球日均社交媒体使用时长持续攀升，短内容IP、互动型潮玩快速崛起，社交媒体成为IP传播与变现的核心阵地。', en: 'Global social media usage continues to rise. Short-form IP and interactive art toys are emerging rapidly.', es: 'El uso global de redes sociales sigue en aumento. IP de formato corto y juguetes interactivos emergen rápidamente.' },
  'market3_title': { zh: '中国制造优势', en: 'Chinese Manufacturing Edge', es: 'Ventaja Manufacturera China' },
  'market3_desc': { zh: '中国玩具制造业全球领先，成为潮玩出海的坚实产业基础。中国潮玩产品高文化附加值不断提升出口竞争力。', en: 'China\'s toy manufacturing leads globally, providing a solid foundation for art toy export competitiveness.', es: 'La manufactura de juguetes de China lidera mundialmente, base sólida para exportación.' },
  'market4_title': { zh: '全球竞争分散', en: 'Fragmented Global Competition', es: 'Competencia Global Fragmentada' },
  'market4_desc': { zh: '全球玩具市场竞争相对分散，前五大玩家占比合计较低，中国潮玩品牌出海空间广阔。', en: 'Global toy market competition is relatively fragmented. Top 5 players hold low combined share — vast room for Chinese brands.', es: 'El mercado global de juguetes está fragmentado. Los 5 principales tienen baja cuota combinada.' },
  'market5_title': { zh: '文化出海加速', en: 'Cultural Export Accelerating', es: 'Exportación Cultural Acelerada' },
  'market5_desc': { zh: '随着中国文化影响力逐步提升，中国动漫、网剧、网文、网游加快出海步伐，IP全球化进入快速发展期。', en: 'Chinese cultural influence is rising. Anime, web series, web novels, and gaming are accelerating global expansion.', es: 'La influencia cultural china crece. Anime, series web y gaming aceleran su expansión.' },
  'market6_title': { zh: '情绪消费崛起', en: 'Emotional Consumption Rising', es: 'Consumo Emocional en Auge' },
  'market6_desc': { zh: '"让年轻人上头"的情绪消费成为新消费主力，潮玩承载的情感价值与文化认同正在被全球Z世代消费者广泛接受。', en: 'Emotional consumption is the new mainstream. The emotional value and cultural identity of art toys are being embraced by Gen Z globally.', es: 'El consumo emocional es la nueva corriente principal. El valor emocional de los juguetes es aceptado por Gen Z.' },

  // ============ 关于我们 - 运营模式 ============
  'about_ops_label': { zh: '运营模式', en: 'Operation Model', es: 'Modelo de Operación' },
  'about_ops_title': { zh: '授权复用 · 数据反哺 · 孵化支持', en: 'License Reuse · Data Feedback · Incubation Support', es: 'Reutilización · Retroalimentación · Soporte de Incubación' },
  'about_ops_desc': { zh: '以中国头部潮玩IP合作矩阵为基础，构建B2B供货 + 自营渠道 + 多平台运营的立体运营体系。', en: 'Based on top Chinese art toy IP partnerships, building a multi-dimensional operation system of B2B supply + direct channels + multi-platform operations.', es: 'Basado en alianzas con IP premium chinas, construyendo sistema B2B + canales directos + multi-plataforma.' },
  'ops1_tag': { zh: 'B2B供货', en: 'B2B Supply', es: 'Suministro B2B' },
  'ops1_title': { zh: 'B2B渠道供货', en: 'B2B Channel Supply', es: 'Suministro Canal B2B' },
  'ops1_desc': { zh: '给亚马逊、TikTok、SHIEN等平台商家供货，阿里巴巴国际站B端自营店数据支持，海外展优先参展。', en: 'Supplying Amazon, TikTok, SHIEN merchants. Alibaba International B2B store with data support and priority exhibition access.', es: 'Suministrando a vendedores de Amazon, TikTok, SHIEN. Tienda B2B con soporte de datos.' },
  'ops2_tag': { zh: '自营渠道', en: 'Direct Channels', es: 'Canales Directos' },
  'ops2_title': { zh: '海外自营渠道', en: 'Overseas Direct Channels', es: 'Canales Directos Internacionales' },
  'ops2_desc': { zh: '海外TikTok自营店运营，美国线下连锁店门店渠道，欧洲大卖合作，海外仓和线下门店体系。', en: 'Overseas TikTok stores, US retail chain channels, European wholesale partnerships, overseas warehouses and retail network.', es: 'Tiendas TikTok internacionales, canales retail en EE.UU., alianzas mayoristas europeas.' },
  'ops3_tag': { zh: '多平台运营', en: 'Multi-Platform', es: 'Multi-Plataforma' },
  'ops3_title': { zh: '多平台自营', en: 'Multi-Platform Operations', es: 'Operaciones Multi-Plataforma' },
  'ops3_desc': { zh: 'C端平台自营店运营覆盖TikTok、TEMU、SHIEN，国内电商渠道同步运营，多渠道出货快速变现。', en: 'C2C platform operations on TikTok, TEMU, SHIEN with synchronized domestic channels for rapid multi-channel monetization.', es: 'Operaciones C2C en TikTok, TEMU, SHIEN con canales domésticos sincronizados.' },

  // ============ 关于我们 - 核心理念 ============
  'about_values_label': { zh: '核心理念', en: 'Core Philosophy', es: 'Filosofía Central' },
  'about_values_title': { zh: '致力于帮助中国潮玩与文化衍生产品<br>实现商业渠道的全球拓展与品牌化', en: 'Dedicated to helping Chinese art toys and cultural derivatives<br>achieve global commercial expansion and branding', es: 'Dedicados a ayudar a juguetes de arte y derivados culturales chinos<br>a lograr expansión comercial global' },
  'val1_title': { zh: '授权复用', en: 'License Reuse', es: 'Reutilización de Licencia' },
  'val1_desc': { zh: '高效利用IP授权资源，实现多渠道、多品类的商业化复用', en: 'Efficient IP licensing utilization across multi-channel, multi-category commercial applications.', es: 'Utilización eficiente de licencias IP en aplicaciones comerciales multicanal.' },
  'val2_title': { zh: '数据反哺', en: 'Data Feedback', es: 'Retroalimentación de Datos' },
  'val2_desc': { zh: '共享平台数据与消费趋势，反哺品牌方优化产品策略', en: 'Shared platform data and consumer trends to help brands optimize product strategies.', es: 'Datos compartidos y tendencias para optimizar estrategias de producto.' },
  'val3_title': { zh: '孵化支持', en: 'Incubation Support', es: 'Soporte de Incubación' },
  'val3_desc': { zh: '从IP孵化到出海落地，全流程赋能品牌全球化成长', en: 'Full-process empowerment from IP incubation to global market entry.', es: 'Empoderamiento integral desde incubación IP hasta entrada al mercado global.' },

  // ============ 产品服务 ============
  'products_banner_title': { zh: '产品服务', en: 'Products & Services', es: 'Productos y Servicios' },
  'products_banner_desc': { zh: '四大品类 · 三大业务板块 · 全链路服务', en: 'Four Categories · Three Pillars · Full-Chain Services', es: 'Cuatro Categorías · Tres Pilares · Servicios Integrales' },
  'products_cat_label': { zh: '四大品类', en: 'Four Categories', es: 'Cuatro Categorías' },
  'products_cat_title': { zh: '盲盒 · 谷子 · 卡牌 · AI玩具', en: 'Blind Boxes · Merch · Cards · AI Toys', es: 'Cajas Ciegas · Merch · Cartas · Juguetes IA' },
  'products_cat_desc': { zh: '覆盖潮玩消费全场景，从传统收藏到科技互动，满足不同市场与消费群体的需求。', en: 'Covering all art toy consumption scenarios — from traditional collectibles to tech-enabled interactive products.', es: 'Cubriendo todos los escenarios — desde coleccionables tradicionales hasta productos interactivos.' },
  'cat1_tag': { zh: '核心品类', en: 'Core Category', es: 'Categoría Principal' },
  'cat1_title': { zh: '盲盒系列', en: 'Blind Box Series', es: 'Serie Cajas Ciegas' },
  'cat1_desc': { zh: '涵盖艺术家联名盲盒、IP原创盲盒、动漫周边盲盒等多系列。与YOBU悠布、MIOCO米可、taketata等头部潮玩IP深度合作，提供高品质盲盒产品。', en: 'Artist collab, original IP, and anime blind box series. Deep partnerships with YOBU, MIOCO, taketata and other top art toy IPs.', es: 'Series de cajas ciegas de artistas, IP original y anime. Alianzas con YOBU, MIOCO, taketata.' },
  'cat2_tag': { zh: '热门品类', en: 'Hot Category', es: 'Categoría Popular' },
  'cat2_title': { zh: '谷子（Goods）周边', en: 'Anime & Gaming Merchandise', es: 'Merchandise Anime y Gaming' },
  'cat2_desc': { zh: '影视与动漫IP衍生周边，涵盖徽章盲盒、吧唧、纪念票、立牌等。如《一人之下》原画系列徽章盲盒（VOL1-VOL3），多款SKU覆盖粉丝需求。', en: 'Entertainment IP derivatives including badge blind boxes, pins, tickets, and standees. Like "Under One Person" art badge series (VOL1-VOL3).', es: 'Derivados de IP de entretenimiento: pines, tickets, stands. Serie "Under One Person" (VOL1-VOL3).' },
  'cat3_tag': { zh: '收藏品类', en: 'Collectible', es: 'Coleccionable' },
  'cat3_title': { zh: '卡牌系列', en: 'Trading Card Series', es: 'Serie de Cartas Coleccionables' },
  'cat3_desc': { zh: '游戏、动漫IP授权卡牌产品，包括集换式卡牌、收藏卡等品类，满足收藏爱好者与竞技玩家的多元需求。', en: 'Gaming and anime licensed cards including TCG and collectible cards for enthusiasts and competitive players.', es: 'Cartas con licencia de gaming y anime incluyendo TCG y cartas coleccionables.' },
  'cat4_tag': { zh: '科技新品', en: 'Tech Innovation', es: 'Innovación Tech' },
  'cat4_title': { zh: 'AI玩具系列', en: 'AI Toy Series', es: 'Serie de Juguetes IA' },
  'cat4_desc': { zh: '搭载大模型的智能毛绒玩具，如Jopark娃噜噜系列（支持40+国语言、多种表情交互、多角色切换）。更多AI仿真宠物、AI机器人、AI桌宠正在研发中。', en: 'LLM-powered smart plush toys like Jopark Walulu series (40+ languages,表情 interaction, multi-role switching). More AI pets, robots, and desk companions in development.', es: 'Peluches inteligentes con LLM como serie Jopark Walulu (40+ idiomas, interacción de expresiones). Más productos IA en desarrollo.' },
  'cat5_tag': { zh: '经典品类', en: 'Classic Category', es: 'Categoría Clásica' },
  'cat5_title': { zh: '毛绒玩偶系列', en: 'Plush Toy Series', es: 'Serie de Peluches' },
  'cat5_desc': { zh: 'taketata品牌毛绒系列，秉承"Maintain childlike innocence"理念，让每一个毛绒玩偶赋予更有意义的生命。治愈系设计，多元化的陪伴与爱。', en: 'taketata plush series embodying "Maintain childlike innocence" — healing designs for diverse companionship and love.', es: 'Serie de peluches taketata con filosofía "Mantener la inocencia infantil" — diseños reconfortantes.' },
  'cat6_tag': { zh: '品质之选', en: 'Premium Choice', es: 'Selección Premium' },
  'cat6_title': { zh: '艺术家手办与积木', en: 'Artist Figures & Building Blocks', es: 'Figuras de Artista y Bloques' },
  'cat6_desc': { zh: '"做大众消费得起的艺术品"，与儿力力、周日央、小丑不丑、惠唯、安东尼不二兔、骆馅饼等艺术家联名，艺术品级别品质，质感爆棚。', en: '"Art affordable for everyone" — collaborations with artists including Er Lili, Zhou Riyang, Clown Not Ugly, and more. Art-quality craftsmanship.', es: '"Arte accesible para todos" — colaboraciones con artistas. Calidad artística.' },

  // ============ 产品服务 - AI玩具详情 ============
  'products_ai_label': { zh: '科技潮玩', en: 'Tech Art Toys', es: 'Juguetes Tech' },
  'products_ai_title': { zh: 'AI玩具 — 下一代潮玩体验', en: 'AI Toys — Next-Gen Art Toy Experience', es: 'Juguetes IA — La Siguiente Generación' },
  'products_ai_desc': { zh: '搭载大模型的智能玩具，实现情感陪伴、多语言对话、声光互动，正在重新定义潮玩边界。', en: 'LLM-powered smart toys with emotional companionship, multilingual dialogue, and sound-light interaction — redefining art toy boundaries.', es: 'Juguetes inteligentes con IA para compañía emocional, diálogo multilingüe e interacción.' },
  'products_ai_more_title': { zh: '更多AI产品正在研发中', en: 'More AI Products in Development', es: 'Más Productos IA en Desarrollo' },
  'products_ai_more_desc': { zh: 'AI仿真宠物 · AI机器人 · AI桌宠 · AI潮玩 · AI周边', en: 'AI Pets · AI Robots · AI Desk Pets · AI Art Toys · AI Merchandise', es: 'Mascotas IA · Robots IA · Desk Pets IA · Juguetes IA · Merch IA' },

  // ============ 产品服务 - 合作IP ============
  'products_ip_label': { zh: '合作IP矩阵', en: 'Partner IP Matrix', es: 'Matriz de IP Socias' },
  'products_ip_title': { zh: '中国头部潮玩IP合作矩阵', en: 'Top Chinese Art Toy IP Partnership Matrix', es: 'Matriz de IP Premium Chinas' },
  'products_ip_desc': { zh: '与众多优质原创IP品牌深度合作，构建丰富的IP资源池。', en: 'Deep partnerships with numerous quality original IP brands, building a rich IP resource pool.', es: 'Alianzas profundas con marcas IP originales de calidad, construyendo un pool rico.' },

  // ============ 产品服务 - 合作保障 ============
  'products_guarantee_label': { zh: '合作保障', en: 'Partnership Guarantee', es: 'Garantía de Alianza' },
  'products_guarantee_title': { zh: '选择潜鲸出海的六大理由', en: '6 Reasons to Choose KOKOX TOYS', es: '6 Razones para Elegir KOKOX TOYS' },
  'guarantee1_title': { zh: '合规护航', en: 'Compliance Support', es: 'Soporte de Cumplimiento' },
  'guarantee1_desc': { zh: '解决商家难授权、合规经营风险，可报备上跨境电商平台，合法合规经营无后顾之忧。', en: 'Solving authorization challenges and compliance risks. Register on cross-border platforms for worry-free operations.', es: 'Resolviendo desafíos de autorización y riesgos de cumplimiento.' },
  'guarantee2_title': { zh: '独家IP供给', en: 'Exclusive IP Supply', es: 'Suministro IP Exclusivo' },
  'guarantee2_desc': { zh: '优先获得爆款IP新品，全品类IP资源池，国内主流产品都可供货。', en: 'Priority access to trending IP releases with a full-category IP resource pool.', es: 'Acceso prioritario a lanzamientos IP con pool de recursos completo.' },
  'guarantee3_title': { zh: '数据支持', en: 'Data Support', es: 'Soporte de Datos' },
  'guarantee3_desc': { zh: '共享素材库与平台数据，提供爆品选品支持，海外消费趋势实时洞察。', en: 'Shared asset library and platform data with trending product selection and real-time consumer insights.', es: 'Biblioteca compartida y datos de plataformas con insights de consumo.' },
  'guarantee4_title': { zh: '拿货灵活', en: 'Flexible Ordering', es: 'Pedidos Flexibles' },
  'guarantee4_desc': { zh: '平台商家市场最优条件拿货，出单后拿货，一箱起拿。部分产品可一件代发，零库存风险。', en: 'Best market conditions for platform sellers. Order after sale, one carton minimum. Drop shipping available.', es: 'Mejores condiciones para vendedores. Pedido post-venta, mínimo una caja. Drop shipping disponible.' },
  'guarantee5_title': { zh: '货品齐全', en: 'Complete Product Range', es: 'Catálogo Completo' },
  'guarantee5_desc': { zh: '国内主流产品都可供货，大部分可提供授权支持，满足多品类经营需求。', en: 'All mainstream domestic products available. Most with authorization support for multi-category operations.', es: 'Todos los productos mainstream disponibles. La mayoría con soporte de autorización.' },
  'guarantee6_title': { zh: '海外仓布局', en: 'Overseas Warehouses', es: 'Almacenes Internacionales' },
  'guarantee6_desc': { zh: '2026年头部IP产品阿联酋海外仓布局，降低海外运营和出货成本，提升物流时效。', en: '2026 UAE overseas warehouse for top IP products, reducing costs and improving delivery times.', es: 'Almacén en EAU 2026 para productos IP premium, reduciendo costos y mejorando entregas.' },

  // ============ 联系我们 ============
  'contact_banner_title': { zh: '联系我们', en: 'Contact Us', es: 'Contacto' },
  'contact_banner_desc': { zh: '合作共赢，出海无界 — 期待与您交流', en: 'Win-Win Partnership, Borderless Expansion — Let\'s Talk', es: 'Alianza Ganar-Ganar — Hablemos' },
  'contact_info_title': { zh: '合作咨询', en: 'Partnership Inquiry', es: 'Consulta de Cooperación' },
  'contact_info_desc': { zh: '无论您是IP品牌方寻求出海渠道、跨境电商卖家寻找供货资源、还是渠道商希望拓展产品线，我们都欢迎您的咨询。以下是我们的联系方式：', en: 'Whether you\'re an IP brand seeking global channels, a cross-border seller looking for supply resources, or a distributor expanding your product line — we welcome your inquiry.', es: 'Ya seas marca IP buscando canales globales, vendedor transfronterizo o distribuidor expandiendo tu línea — bienvenido.' },
  'contact_name': { zh: '商务联系人', en: 'Business Contact', es: 'Contacto Comercial' },
  'contact_phone': { zh: '联系电话', en: 'Phone', es: 'Teléfono' },
  'contact_phone_note': { zh: '欢迎来电咨询合作事宜', en: 'Feel free to call for partnership inquiries', es: 'Llámenos para consultas de cooperación' },
  'contact_email': { zh: '工作邮箱', en: 'Email', es: 'Correo Electrónico' },
  'contact_company': { zh: '公司名称', en: 'Company', es: 'Empresa' },
  'contact_brand': { zh: '品牌名称', en: 'Brand', es: 'Marca' },
  'contact_brand_desc': { zh: '专注潮玩IP全球商业化', en: 'Global Art Toy IP Commercialization', es: 'Comercialización IP Global' },
  'contact_channels': { zh: '合作渠道', en: 'Sales Channels', es: 'Canales de Venta' },
  'contact_channels_alibaba': { zh: '阿里巴巴国际站官方合作店铺', en: 'Official Alibaba International Partner Store', es: 'Tienda Socio Oficial Alibaba International' },
  'contact_channels_stores': { zh: 'TikTok / TEMU / SHIEN 自营渠道', en: 'TikTok / TEMU / SHIEN Direct Channels', es: 'Canales Directos TikTok / TEMU / SHIEN' },
  'contact_form_title': { zh: '在线咨询', en: 'Online Inquiry', es: 'Consulta en Línea' },
  'contact_label_name': { zh: '您的姓名 *', en: 'Your Name *', es: 'Su Nombre *' },
  'contact_ph_name': { zh: '请输入姓名', en: 'Enter your name', es: 'Ingrese su nombre' },
  'contact_label_company': { zh: '公司名称', en: 'Company', es: 'Empresa' },
  'contact_ph_company': { zh: '请输入公司名称', en: 'Enter company name', es: 'Ingrese la empresa' },
  'contact_label_phone': { zh: '联系电话 *', en: 'Phone *', es: 'Teléfono *' },
  'contact_ph_phone': { zh: '请输入电话号码', en: 'Enter phone number', es: 'Ingrese el teléfono' },
  'contact_label_wechat': { zh: '微信号', en: 'WeChat', es: 'WeChat' },
  'contact_ph_wechat': { zh: '请输入微信号', en: 'Enter WeChat ID', es: 'Ingrese WeChat' },
  'contact_label_identity': { zh: '您的身份', en: 'Your Identity', es: 'Su Identidad' },
  'contact_ph_identity': { zh: '请选择（可选）', en: 'Select (optional)', es: 'Seleccionar (opcional)' },
  'contact_id_opt1': { zh: 'IP品牌方', en: 'IP Brand', es: 'Marca IP' },
  'contact_id_opt2': { zh: '跨境电商卖家', en: 'Cross-border Seller', es: 'Vendedor Transfronterizo' },
  'contact_id_opt3': { zh: '渠道商/分销商', en: 'Distributor', es: 'Distribuidor' },
  'contact_id_opt4': { zh: '电商平台商家', en: 'E-commerce Seller', es: 'Vendedor E-commerce' },
  'contact_id_opt5': { zh: '其他', en: 'Other', es: 'Otro' },
  'contact_label_service': { zh: '感兴趣的合作类型', en: 'Partnership Type', es: 'Tipo de Cooperación' },
  'contact_ph_service': { zh: '请选择合作类型', en: 'Select partnership type', es: 'Seleccionar tipo' },
  'contact_svc_opt1': { zh: 'B2B供货合作', en: 'B2B Supply Partnership', es: 'Alianza Suministro B2B' },
  'contact_svc_opt2': { zh: 'IP授权合作', en: 'IP Licensing Partnership', es: 'Alianza Licenciamiento IP' },
  'contact_svc_opt3': { zh: '盲盒/谷子/卡牌产品', en: 'Blind Box/Merch/Card Products', es: 'Productos Cajas/Merch/Cartas' },
  'contact_svc_opt4': { zh: 'AI玩具产品', en: 'AI Toy Products', es: 'Productos Juguetes IA' },
  'contact_svc_opt5': { zh: 'IP定制解决方案', en: 'IP Customization Solutions', es: 'Soluciones Personalización IP' },
  'contact_svc_opt6': { zh: '出海营销合作', en: 'Global Marketing Partnership', es: 'Alianza Marketing Global' },
  'contact_svc_opt7': { zh: '全品类合作', en: 'Full-Category Partnership', es: 'Alianza Categoría Completa' },
  'contact_label_message': { zh: '合作需求描述 *', en: 'Requirements Description *', es: 'Descripción de Requisitos *' },
  'contact_ph_message': { zh: '请描述您的具体需求，如感兴趣的IP/品类、目标市场、预计合作规模等', en: 'Describe your requirements — interested IPs/categories, target markets, expected scale, etc.', es: 'Describa sus requisitos — IPs/categorías, mercados objetivo, escala esperada, etc.' },
  'contact_btn': { zh: '提交咨询 →', en: 'Submit Inquiry →', es: 'Enviar Consulta →' },
  'contact_success_title': { zh: '提交成功！', en: 'Submitted Successfully!', es: '¡Enviado con Éxito!' },
  'contact_success_p1': { zh: '感谢您的咨询，我们将在24小时内与您联系。', en: 'Thank you for your inquiry. We will contact you within 24 hours.', es: 'Gracias por su consulta. Nos pondremos en contacto en 24 horas.' },
  'contact_success_p2_prefix': { zh: '紧急事务请直接致电：', en: 'For urgent matters, call: ', es: 'Para asuntos urgentes, llame: ' },

  // ============ 联系我们 - 合作对象 ============
  'contact_target_label': { zh: '合作对象', en: 'Partnership Targets', es: 'Objetivos de Alianza' },
  'contact_target_title': { zh: '我们期待与谁合作', en: 'Who We Work With', es: 'Con Quién Trabajamos' },
  'target1_title': { zh: 'IP品牌方', en: 'IP Brands', es: 'Marcas IP' },
  'target1_desc': { zh: '如果您拥有原创IP或已获得IP授权，我们可提供全球渠道分销、海外营销推广、供应链支持，帮助您的IP快速触达海外消费者。', en: 'If you own original IP or hold IP licensing, we provide global distribution, overseas marketing, and supply chain support.', es: 'Si tiene IP original o licencias, ofrecemos distribución global y marketing.' },
  'target2_title': { zh: '跨境电商卖家', en: 'Cross-border Sellers', es: 'Vendedores Transfronterizos' },
  'target2_desc': { zh: '亚马逊、TikTok、TEMU、SHIEN等平台卖家，我们可提供B2B供货、一件代发、授权支持，出单后拿货，零库存风险。', en: 'Amazon, TikTok, TEMU, SHIEN sellers — B2B supply, drop shipping, and authorization support with zero inventory risk.', es: 'Vendedores de Amazon, TikTok, TEMU, SHIEN — suministro B2B y drop shipping.' },
  'target3_title': { zh: '渠道商/分销商', en: 'Distributors', es: 'Distribuidores' },
  'target3_desc': { zh: '海外线下连锁店、分销商、大卖合作方，我们可提供稳定供货、海外仓支持、授权保障，共同开拓当地市场。', en: 'Overseas retail chains, distributors, and wholesale partners — stable supply, overseas warehouse support, and authorization.', es: 'Cadenas retail, distribuidores — suministro estable, almacenes y autorización.' },
  'target4_title': { zh: '战略合作伙伴', en: 'Strategic Partners', es: 'Socios Estratégicos' },
  'target4_desc': { zh: 'IP授权方、营销机构、物流服务商等，欢迎洽谈深度战略合作，共同构建潮玩出海生态。', en: 'IP licensors, marketing agencies, logistics providers — welcome to discuss deep strategic cooperation.', es: 'Licenciantes IP, agencias de marketing — bienvenidos a cooperación estratégica.' },

  // ============ 联系我们 - FAQ ============
  'contact_faq_label': { zh: '常见问题', en: 'FAQ', es: 'Preguntas Frecuentes' },
  'contact_faq_title': { zh: '合作FAQ', en: 'Partnership FAQ', es: 'FAQ de Cooperación' },
  'faq1_title': { zh: '最小起订量是多少？', en: 'What is the minimum order quantity?', es: '¿Cuál es la cantidad mínima de pedido?' },
  'faq1_desc': { zh: '一箱起拿，出单后拿货。部分产品支持一件代发，零库存风险，非常适合中小卖家试水新市场。', en: 'One carton minimum, order after sale. Some products support drop shipping — zero inventory risk, ideal for testing new markets.', es: 'Mínimo una caja. Algunos productos con drop shipping — riesgo cero de inventario.' },
  'faq2_title': { zh: '是否提供IP授权支持？', en: 'Do you provide IP authorization support?', es: '¿Ofrecen soporte de autorización IP?' },
  'faq2_desc': { zh: '是的，我们持有大量国际IP授权资源，大部分产品可提供授权支持。可报备上跨境电商平台，合规经营。', en: 'Yes, we hold extensive international IP licensing. Most products come with authorization support for cross-border platform compliance.', es: 'Sí, contamos con amplias licencias IP internacionales. La mayoría con soporte.' },
  'faq3_title': { zh: '支持哪些出货渠道？', en: 'What sales channels do you support?', es: '¿Qué canales de venta soportan?' },
  'faq3_desc': { zh: 'B2B供货给平台商家 + C端自营（TikTok/TEMU/SHIEN）+ 海外线下门店 + 海外仓（阿联酋），多渠道灵活选择。', en: 'B2B supply + Direct sales (TikTok/TEMU/SHIEN) + Offline stores + Overseas warehouses (UAE) — flexible multi-channel.', es: 'Suministro B2B + Ventas directas + Tiendas + Almacenes (EAU) — multicanal flexible.' },
  'faq4_title': { zh: 'AI玩具是否支持出口？', en: 'Are AI toys available for export?', es: '¿Los juguetes IA están disponibles para exportación?' },
  'faq4_desc': { zh: '支持。AI毛绒玩具支持40+国语言，搭载海外版ChatGPT/Google大模型，专为出海市场设计。', en: 'Yes. AI plush toys support 40+ languages with overseas ChatGPT/Google LLM, designed for global markets.', es: 'Sí. Los peluches IA soportan 40+ idiomas con ChatGPT/Google, diseñados para mercados globales.' },

  // ============ Footer ============
  'footer_nav': { zh: '快速导航', en: 'Quick Links', es: 'Enlaces Rápidos' },
  'footer_biz': { zh: '业务板块', en: 'Business', es: 'Negocio' },
  'footer_contact': { zh: '联系方式', en: 'Contact', es: 'Contacto' },
  'footer_brand_desc': { zh: '潜鲸出海国际贸易有限公司<br>专注潮玩IP全球商业化', en: 'Shenzhen Qianjing ChuHai Trading Co., Ltd.<br>Global Art Toy IP Commercialization', es: 'Shenzhen Qianjing ChuHai Trading Co., Ltd.<br>Comercialización IP Global' },
  'footer_biz1': { zh: '潮玩供应链', en: 'Art Toy Supply Chain', es: 'Cadena de Suministro' },
  'footer_biz2': { zh: '影视动漫周边', en: 'Entertainment Merchandise', es: 'Merchandise Entretenimiento' },
  'footer_biz3': { zh: 'IP授权与定制', en: 'IP Licensing', es: 'Licenciamiento IP' },
  'footer_biz4': { zh: '出海营销', en: 'Global Marketing', es: 'Marketing Global' },
  'footer_city': { zh: '深圳市龙岗区天安云谷', en: 'Tian\'an Cloud Park, Longgang, Shenzhen', es: 'Parque Cloud Tian\'an, Longgang, Shenzhen' },
};

// ============ 语言切换引擎 ============
const LANG_KEY = 'kokox_lang';
const SUPPORTED_LANGS = ['zh', 'en', 'es'];
const LANG_NAMES = { zh: '中文', en: 'EN', es: 'ES' };

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'zh';
}

function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = 'zh';
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  applyLang(lang);
  updateLangSwitcher(lang);
}

function applyLang(lang) {
  // 翻译所有带 data-i18n 属性的元素
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[key] && I18N[key][lang]) {
      el.textContent = I18N[key][lang];
    }
  });
  // 翻译带 data-i18n-placeholder 的输入框
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (I18N[key] && I18N[key][lang]) {
      el.placeholder = I18N[key][lang];
    }
  });
  // 翻译带 data-i18n-html 属性的元素（保留 HTML 标签）
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (I18N[key] && I18N[key][lang]) {
      el.innerHTML = I18N[key][lang];
    }
  });
}

function updateLangSwitcher(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.querySelectorAll('.lang-current').forEach(el => {
    el.textContent = LANG_NAMES[lang];
  });
}

// 页面加载时应用语言
document.addEventListener('DOMContentLoaded', function() {
  const lang = getLang();
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  applyLang(lang);
  updateLangSwitcher(lang);

  // 绑定语言切换按钮
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      setLang(this.dataset.lang);
    });
  });

  // 点击其他区域关闭语言下拉
  document.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.lang-dropdown');
    if (dropdown && !e.target.closest('.lang-switcher')) {
      dropdown.classList.remove('open');
    }
  });
});

function toggleLangDropdown() {
  document.querySelector('.lang-dropdown').classList.toggle('open');
}
