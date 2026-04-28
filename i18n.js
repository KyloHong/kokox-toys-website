/**
 * KOKOX TOYS 多语言模块
 * 支持：中文(zh) / 英语(en) / 西班牙语(es) / 阿拉伯语(ar) / 韩语(ko) / 日语(ja)
 */
const I18N = {
  // ============ 导航栏 ============
  'nav_home': { zh: '首页', en: 'Home', es: 'Inicio', ar: 'الرئيسية', ko: '홈', ja: 'ホーム' },
  'nav_about': { zh: '关于我们', en: 'About Us', es: 'Sobre Nosotros', ar: 'من نحن', ko: '회사 소개', ja: '会社概要' },
  'nav_products': { zh: '产品服务', en: 'Products', es: 'Productos', ar: 'المنتجات', ko: '제품', ja: '製品・サービス' },
  'nav_contact': { zh: '联系我们', en: 'Contact', es: 'Contacto', ar: 'اتصل بنا', ko: '문의하기', ja: 'お問い合わせ' },

  // ============ 首页 Hero ============
  'hero_title_1': { zh: '专注潮玩IP', en: 'Global Art Toy IP', es: 'IP de Juguetes de Arte Global', ar: 'ألعاب الفن آرت توي العالمية', ko: '글로벌 아트토이 IP', ja: 'グローバルアートトイIP' },
  'hero_title_2': { zh: '全球商业化', en: 'Commercialization', es: 'Comercialización', ar: 'التجارة العالمية', ko: '글로벌 상업화', ja: 'グローバルビジネス化' },
  'hero_desc': {
    zh: '整合中国头部IP资源与全渠道出海能力，持有大量国际IP授权资源与优质国内厂牌的海外销售授权，构建覆盖全球的立体销售渠道网络。',
    en: 'Integrating top Chinese IP resources with global distribution capabilities. We hold extensive international IP licensing and premium domestic brand distribution rights, building a comprehensive global sales network.',
    es: 'Integramos los principales recursos de IP de China con capacidades de distribución global. Contamos con amplias licencias de IP internacionales y derechos de distribución de marcas nacionales premium, construyendo una red de ventas global.',
    ar: 'نحن ندمج أفضل موارد IP الصينية مع قدرات التوزيع العالمية. نحمل تراخيص IP دولية واسعة وحقوق توزيع العلامات التجارية المحلية الممتازة لبناء شبكة مبيعات عالمية شاملة.',
    ko: '중국 최고의 IP 자원과 글로벌 유통 역량을 통합합니다. 광범위한 국제 IP 라이선스와 프리미엄 국내 브랜드 해외 판매 권리를 보유하여 종합적인 글로벌 판매 네트워크를 구축합니다.',
    ja: '中国トップクラスのIPリソースとグローバル展開力を統合。豊富な国際IPライセンスと高品質国内ブランドの海外販売権を保有し、グローバルな多角的販売ネットワークを構築しています。'
  },
  'hero_btn_products': { zh: '查看产品 →', en: 'View Products →', es: 'Ver Productos →', ar: 'عرض المنتجات ←', ko: '제품 보기 →', ja: '製品を見る →' },
  'hero_btn_contact': { zh: '合作咨询', en: 'Partnership Inquiry', es: 'Consulta de Cooperación', ar: 'استفسار الشراكة', ko: '제휴 문의', ja: 'パートナーシップ相談' },
  'hero_stat1_title': { zh: '4', en: '4', es: '4', ar: '4', ko: '4', ja: '4' },
  'hero_stat1_unit': { zh: '大品类', en: ' Categories', es: ' Categorías', ar: ' فئات', ko: ' 카테고리', ja: ' カテゴリ' },
  'hero_stat1_desc': { zh: '盲盒 / 谷子 / 卡牌 / AI玩具', en: 'Blind Boxes / Merch / Cards / AI Toys', es: 'Cajas Ciegas / Merch / Cartas / Juguetes IA', ar: 'صناديق عمياء / بضائع / بطاقات / ألعاب ذكية', ko: '블라인드박스 / 굿즈 / 카드 / AI 장난감', ja: 'ブラインドボックス / グッズ / カード / AIおもちゃ' },
  'hero_stat2_title': { zh: '40+', en: '40+', es: '40+', ar: '+40', ko: '40+', ja: '40+' },
  'hero_stat2_unit': { zh: '国语言', en: ' Languages', es: ' Idiomas', ar: ' لغة', ko: '개국 언어', ja: ' ヶ国語' },
  'hero_stat2_desc': { zh: 'AI产品海外语言覆盖', en: 'AI Product Language Coverage', es: 'Cobertura de Idiomas IA', ar: 'تغطية لغوية للمنتجات الذكية', ko: 'AI 제품 언어 커버리지', ja: 'AI製品 言語対応' },
  'hero_stat3_title': { zh: '多', en: 'Multi', es: 'Multi', ar: 'متعدد', ko: '멀티', ja: 'マルチ' },
  'hero_stat3_unit': { zh: '渠道', en: '-Channel', es: '-Canal', ar: '-قناة', ko: '-채널', ja: '-チャネル' },
  'hero_stat3_desc': { zh: 'B2B + 自营 + 线下', en: 'B2B + Direct + Offline', es: 'B2B + Directo + Tiendas', ar: 'B2B + مباشر + متاجر', ko: 'B2B + 직영 + 오프라인', ja: 'B2B + 直営 + オフライン' },
  'hero_card1_title': { zh: '资深营销基因', en: 'Seasoned Marketing DNA', es: 'ADN de Marketing Experto', ar: 'خبرة تسويقية راسخة', ko: '전문 마케팅 DNA', ja: 'マーケティングのDNA' },
  'hero_card1_desc': { zh: '原游戏大厂团队 + 跨境千万级店铺操盘手，懂运营更懂出海', en: 'Former gaming studio team + cross-border million-dollar store operators. We know operations and global expansion.', es: 'Equipo de ex estudio de juegos + operadores de tiendas transfronterizas. Conocemos operaciones y expansión global.', ar: 'فريق من استوديوهات ألعاب سابقة + مشغلي متاجر عابرة للحدود بملايين الدولارات. نعرف العمليات والتوسع العالمي.', ko: '전 게임사 팀 + 국경 간 밀리언 달러 매장 운영자. 운영과 글로벌 확장을 완벽히 이해합니다.', ja: '大手ゲーム会社出身チーム + 越境ECミリオンセラー運営者。運営もグローバル展開も熟知しています。' },
  'hero_card2_title': { zh: '全渠道销售网络', en: 'Omnichannel Sales Network', es: 'Red de Ventas Multicanal', ar: 'شبكة مبيعات متعددة القنوات', ko: '옴니채널 판매 네트워크', ja: 'オムニチャネル販売網' },
  'hero_card2_desc': { zh: 'Alibaba国际站 / TikTok / TEMU / SHIEN / 线下门店', en: 'Alibaba International / TikTok / TEMU / SHIEN / Offline Stores', es: 'Alibaba International / TikTok / TEMU / SHIEN / Tiendas', ar: 'Alibaba الدولية / TikTok / TEMU / SHIEN / متاجر', ko: 'Alibaba International / TikTok / TEMU / SHIEN / 오프라인 매장', ja: 'Alibaba International / TikTok / TEMU / SHIEN / 実店舗' },
  'hero_card3_title': { zh: '海外仓布局', en: 'Global Warehouse Network', es: 'Red de Almacenes Globales', ar: 'شبكة مستودعات عالمية', ko: '글로벌 창고 네트워크', ja: 'グローバル倉庫ネットワーク' },
  'hero_card3_desc': { zh: '阿联酋等海外仓体系，降低运营成本与出货周期', en: 'Overseas warehouse system in UAE and beyond, reducing costs and delivery time.', es: 'Sistema de almacenes en EAU y más, reduciendo costos y tiempos.', ar: 'نظام مستودعات دولي في الإمارات وغيرها، مما يقلل التكاليف ووقت التسليم.', ko: 'UAE 등 해외 창고 시스템으로 운영 비용과 배송 시간 단축.', ja: 'UAEなど海外倉庫システムで運営コストと配送時間を削減。' },

  // ============ 首页 - 业务定位 ============
  'sec_positioning': { zh: '业务定位', en: 'Business Positioning', es: 'Posicionamiento Comercial', ar: 'التوجه التجاري', ko: '비즈니스 포지셔닝', ja: 'ビジネスポジショニング' },
  'sec_positioning_title': { zh: '全球潮玩IP商业化伙伴', en: 'Global Art Toy IP Commercialization Partner', es: 'Socio de Comercialización IP Global', ar: 'شريك التسويق العالمي لألعاب الفن آرت توي', ko: '글로벌 아트토이 IP 상업화 파트너', ja: 'グローバルアートトイIP商業化パートナー' },
  'sec_positioning_desc': { zh: '专注整合中国头部IP资源与全渠道出海能力，提供潮玩供应链、IP授权与定制、出海营销等全链路服务。', en: 'Dedicated to integrating top Chinese IP resources with global distribution, providing full-chain services including art toy supply chain, IP licensing, and global marketing.', es: 'Dedicados a integrar recursos IP premium con distribución global, ofreciendo servicios completos de cadena de suministro, licenciamiento IP y marketing.', ar: 'مكرسون لدمج أفضل موارد IP الصينية مع التوزيع العالمي، وتقديم خدمات شاملة تشمل سلسلة إمداد ألعاب الفن وترخيص IP والتسويق العالمي.', ko: '중국 최고의 IP 자원과 글로벌 유통을 통합하여 아트토이 공급망, IP 라이선스, 글로벌 마케팅 등 풀체인 서비스를 제공합니다.', ja: '中国トップクラスのIPリソースとグローバル展開を統合し、アートトイサプライチェーン、IPライセンス、グローバルマーケティングなどのフルチェーンサービスを提供。' },
  'pos_trade_title': { zh: '出海贸易', en: 'Global Trade', es: 'Comercio Global', ar: 'التجارة العالمية', ko: '글로벌 무역', ja: 'グローバル貿易' },
  'pos_trade_desc': { zh: '整合全球渠道资源，覆盖欧美、东南亚、中东等增量市场，B2B供货与多平台自营并驾齐驱。', en: 'Integrating global channel resources across Europe, Americas, Southeast Asia, and Middle East markets. B2B supply and multi-platform direct sales.', es: 'Integrando recursos globales en Europa, Américas, Asia y Medio Oriente. Suministro B2B y ventas directas.', ar: 'دمج موارد القنوات العالمية عبر أوروبا والأمريكتين وجنوب شرق آسيا والشرق الأوسط. إمداد B2B ومبيعات مباشرة متعددة المنصات.', ko: '유럽, 미주, 동남아, 중동 등 성장 시장의 글로벌 채널 자원을 통합. B2B 공급과 멀티 플랫폼 직영 병행.', ja: '欧州、米州、東南アジア、中東など成長市場のグローバルチャネルリソースを統合。B2B供給とマルチプラットフォーム直営を並行展開。' },
  'pos_ecom_title': { zh: '跨境电商', en: 'Cross-border E-commerce', es: 'E-commerce Transfronterizo', ar: 'التجارة الإلكترونية العابرة للحدود', ko: '국경 간 전자상거래', ja: '越境EC' },
  'pos_ecom_desc': { zh: '阿里巴巴国际站官方合作店铺，TikTok/TEMU/SHIEN等C端平台自营，多渠道快速出货。', en: 'Official Alibaba International partner store, direct sales on TikTok/TEMU/SHIEN with rapid multi-channel fulfillment.', es: 'Tienda oficial en Alibaba International, ventas directas en TikTok/TEMU/SHIEN con cumplimiento rápido.', ar: 'متجر شريك رسمي في Alibaba الدولية، مبيعات مباشرة على TikTok/TEMU/SHIEN مع تلبية سريعة متعددة القنوات.', ko: 'Alibaba International 공식 파트너 매장, TikTok/TEMU/SHIEN 직영으로 빠른 멀티채널 출하.', ja: 'Alibaba International公式パートナー店舗、TikTok/TEMU/SHIEN直営で高速マルチチャネル出荷。' },
  'pos_marketing_title': { zh: '出海营销', en: 'Global Marketing', es: 'Marketing Global', ar: 'التسويق العالمي', ko: '글로벌 마케팅', ja: 'グローバルマーケティング' },
  'pos_marketing_desc': { zh: 'IP授权、社媒营销、海外展优先参展，快速反馈品牌方对应海外市场推广策略。', en: 'IP licensing, social media marketing, priority overseas exhibition participation with rapid market feedback.', es: 'Licenciamiento IP, marketing en redes sociales, participación prioritaria en ferias.', ar: 'ترخيص IP، تسويق وسائل التواصل الاجتماعي، مشاركة أولوية في المعارض الدولية مع تغذية راجعة سريعة.', ko: 'IP 라이선스, 소셜 미디어 마케팅, 해외 전시 우선 참여로 빠른 시장 피드백.', ja: 'IPライセンス、SNSマーケティング、海外展示会優先出展でブランドのグローバルプロモーション戦略に迅速に対応。' },

  // ============ 首页 - 三大业务板块 ============
  'sec_pillars': { zh: '三大业务板块', en: 'Three Business Pillars', es: 'Tres Pilares de Negocio', ar: 'ثلاث ركائز تجارية', ko: '3대 비즈니스 축', ja: '3つのビジネスの柱' },
  'sec_pillars_title': { zh: '全方位业务矩阵', en: 'Comprehensive Business Matrix', es: 'Matriz de Negocio Integral', ar: 'مصفوفة أعمال شاملة', ko: '종합 비즈니스 매트릭스', ja: '包括的なビジネスマトリックス' },
  'sec_pillars_desc': { zh: '覆盖潮玩供应链、影视动漫IP周边、IP授权与定制业务，构建多元化商业生态。', en: 'Covering art toy supply chain, entertainment IP merchandise, and IP licensing — building a diversified business ecosystem.', es: 'Cubriendo cadena de suministro, merchandise de entretenimiento y licenciamiento IP.', ar: 'تغطي سلسلة إمداد ألعاب الفن وبضائع IP الترفيهية وترخيص IP — لبناء نظام بيئي تجاري متنوع.', ko: '아트토이 공급망, 엔터테인먼트 IP 굿즈, IP 라이선스를 커버하는 다각적 비즈니스 생태계 구축.', ja: 'アートトイサプライチェーン、エンタメIPグッズ、IPライセンスをカバーする多様なビジネスエコシステムを構築。' },
  'pillar1_tag': { zh: '核心业务', en: 'Core Business', es: 'Negocio Principal', ar: 'العمل الأساسي', ko: '핵심 비즈니스', ja: 'コアビジネス' },
  'pillar1_title': { zh: '潮玩供应链', en: 'Art Toy Supply Chain', es: 'Cadena de Suministro', ar: 'سلسلة إمداد ألعاب الفن', ko: '아트토이 공급망', ja: 'アートトイサプライチェーン' },
  'pillar1_desc': { zh: '中国原创IP + 全球IP资源整合，提供盲盒类、毛绒、积木等全品类潮玩产品的设计、生产与供应链服务。', en: 'Chinese original + global IP integration. Full-category art toy design, production, and supply chain services.', es: 'IP original china + integración global. Diseño, producción y servicios de cadena de suministro.', ar: 'IP صينية أصلية + تكامل IP عالمي. خدمات تصميم وإنتاج وسلسلة إمداد شاملة لألعاب الفن.', ko: '중국 오리지널 IP + 글로벌 IP 통합. 블라인드박스, 인형, 블록 등 전 카테고리 아트토이 디자인, 생산, 공급망 서비스.', ja: '中国オリジナルIP + グローバルIP統合。ブラインドボックス、ぬいぐるみ、ブロック等、全カテゴリのアートトイデザイン・生産・サプライチェーンサービス。' },
  'pillar2_tag': { zh: '热门赛道', en: 'Hot Trend', es: 'Tendencia Popular', ar: 'اتجاه رائج', ko: '인기 트렌드', ja: '注目トレンド' },
  'pillar2_title': { zh: '影视与动漫IP周边（谷子）', en: 'Entertainment IP Merchandise', es: 'Merchandise de Entretenimiento', ar: 'بضائع IP الترفيه', ko: '엔터테인먼트 IP 굿즈', ja: 'エンタメIPグッズ' },
  'pillar2_desc': { zh: '游戏、动漫等衍生产品，涵盖卡牌、吧唧、纪念票、立牌等全品类谷子产品，满足粉丝经济消费需求。', en: 'Gaming and anime derivatives including cards, badges, tickets, and standees for the fan economy.', es: 'Derivados de gaming y anime incluyendo cartas, pins, tickets y stands para la economía fan.', ar: 'مشاعات الألعاب والأنمي بما في ذلك البطاقات والشارات والتذاكر لاقتصاد المعجبين.', ko: '카드, 뱃지, 티켓, 스탠드 등 게임/애니메이션 파생 굿즈로 팬 경제 수요 충족.', ja: 'カード、バッジ、チケット、スタンド等のゲーム・アニメ派生グッズでファン経済の消費ニーズに対応。' },
  'pillar3_tag': { zh: '增值服务', en: 'Value-added', es: 'Servicios Premium', ar: 'خدمات مضافة', ko: '부가 서비스', ja: 'バリューアド' },
  'pillar3_title': { zh: 'IP授权与定制业务', en: 'IP Licensing & Customization', es: 'Licenciamiento y Personalización IP', ar: 'ترخيص وتخصيص IP', ko: 'IP 라이선스 및 커스터마이징', ja: 'IPライセンス＆カスタマイズ' },
  'pillar3_desc': { zh: '提供IP授权服务与IP定制解决方案，帮助品牌方快速获取国际IP授权，打造差异化产品线。', en: 'IP licensing and customization solutions. Helping brands quickly acquire international IP licenses for differentiated product lines.', es: 'Licenciamiento y personalización IP. Ayudando a marcas a obtener licencias internacionales.', ar: 'حلول ترخيص وتخصيص IP. مساعدة العلامات التجارية على الحصول على تراخيص IP دولية بسرعة.', ko: 'IP 라이선스 및 커스터마이징 솔루션. 브랜드가 국제 IP 라이선스를 빠르게 확보하여 차별화된 제품 라인을 구축하도록 지원.', ja: 'IPライセンス＆カスタマイズソリューション。ブランドが国際IPライセンスを迅速に取得し、差別化された製品ラインを構築するのを支援。' },

  // ============ 首页 - 业务优势 ============
  'sec_advantages': { zh: '业务优势', en: 'Competitive Advantages', es: 'Ventajas Competitivas', ar: 'المزايا التنافسية', ko: '경쟁 우위', ja: '競争優位性' },
  'sec_advantages_title': { zh: '为什么选择潜鲸出海', en: 'Why Choose KOKOX TOYS', es: 'Por Qué Elegir KOKOX TOYS', ar: 'لماذا تختار KOKOX TOYS', ko: 'KOKOX TOYS를 선택하는 이유', ja: 'KOKOX TOYSを選ぶ理由' },
  'sec_advantages_desc': { zh: '全品类IP资源池、出海平台深度合作、供应链快速响应，赋能品牌方全球拓展。', en: 'Full-category IP resource pool, deep platform partnerships, and agile supply chain for global brand expansion.', es: 'Pool de recursos IP completo, alianzas con plataformas y cadena de suministro ágil.', ar: 'مج موارد IP شامل، شراكات عميقة مع المنصات، وسلسلة إمداد مرنة لتوسيع العلامات التجارية عالمياً.', ko: '전 카테고리 IP 리소스 풀, 플랫폼 심층 파트너십, 민첩한 공급망으로 글로벌 브랜드 확장 지원.', ja: '全カテゴリIPリソースプール、プラットフォームとの深い提携、機敏なサプライチェーンでブランドのグローバル展開を支援。' },
  'adv1_title': { zh: '阿里国际站官方合作', en: 'Official Alibaba Partner', es: 'Socio Oficial Alibaba', ar: 'شريك Alibaba الرسمي', ko: 'Alibaba International 공식 파트너', ja: 'Alibaba International公式パートナー' },
  'adv1_desc': { zh: '官方合作店铺，美国线下连锁店门店渠道，欧洲大卖合作商', en: 'Official partner store, US retail chain channels, European wholesale partnerships.', es: 'Tienda socio oficial, canales de tiendas en EE.UU., partnerships mayoristas europeos.', ar: 'متجر شريك رسمي، قنوات سلاسل البيع بالتجزئة الأمريكية، شراكات الجملة الأوروبية.', ko: '공식 파트너 매장, 미국 오프라인 체인점 채널, 유럽 도매 파트너십.', ja: '公式パートナー店舗、米国オフラインチェーン店チャネル、欧州卸売パートナーシップ。' },
  'adv2_title': { zh: '全品类IP资源池', en: 'Full IP Resource Pool', es: 'Pool Completo de Recursos IP', ar: 'مج موارد IP شامل', ko: '전 카테고리 IP 리소스 풀', ja: '全IPリソースプール' },
  'adv2_desc': { zh: '持有大量国际IP授权与优质国内厂牌海外销售授权', en: 'Extensive international IP licensing and premium domestic brand distribution rights.', es: 'Amplias licencias IP internacionales y derechos de distribución premium.', ar: 'تراخيص IP دولية واسعة وحقوق توزيع علامات تجارية محلية ممتازة.', ko: '광범위한 국제 IP 라이선스와 프리미엄 국내 브랜드 해외 판매 권리 보유.', ja: '豊富な国際IPライセンスと高品質国内ブランドの海外販売権を保有。' },
  'adv3_title': { zh: '多平台深度合作', en: 'Multi-Platform Partnership', es: 'Alianza Multi-Plataforma', ar: 'شراكة متعددة المنصات', ko: '멀티 플랫폼 파트너십', ja: 'マルチプラットフォーム提携' },
  'adv3_desc': { zh: 'Alibaba / TikTok / TEMU / SHIEN 多渠道覆盖', en: 'Multi-channel coverage across Alibaba / TikTok / TEMU / SHIEN.', es: 'Cobertura multicanal en Alibaba / TikTok / TEMU / SHIEN.', ar: 'تغطية متعددة القنوات عبر Alibaba / TikTok / TEMU / SHIEN.', ko: 'Alibaba / TikTok / TEMU / SHIEN 멀티 채널 커버리지.', ja: 'Alibaba / TikTok / TEMU / SHIEN マルチチャネルカバレッジ。' },
  'adv4_title': { zh: '数据驱动决策', en: 'Data-Driven Decisions', es: 'Decisiones Basadas en Datos', ar: 'قرارات مبنية على البيانات', ko: '데이터 기반 의사결정', ja: 'データドリブン意思決定' },
  'adv4_desc': { zh: '共享素材库与平台数据，提供海外消费趋势与爆品选品支持', en: 'Shared asset library and platform data for overseas consumer trends and product selection.', es: 'Biblioteca compartida y datos de plataformas para tendencias de consumo.', ar: 'مكتبة أصول مشتركة وبيانات المنصات لاتجاهات الاستهلاك الدولي واختيار المنتجات.', ko: '공유 에셋 라이브러리와 플랫폼 데이터로 해외 소비 트렌드 및 인기 상품 선정 지원.', ja: '共有アセットライブラリとプラットフォームデータで、海外消費トレンドとヒット商品選定をサポート。' },

  // ============ 首页 - 解决痛点 ============
  'sec_painpoints': { zh: '解决痛点', en: 'Pain Points Solved', es: 'Problemas Resueltos', ar: 'حلول للمشاكل', ko: '해결되는 문제', ja: '課題解決' },
  'sec_painpoints_title': { zh: '我们为您解决什么', en: 'What We Solve For You', es: 'Qué Resolvemos Para Ti', ar: 'ماذا نحل لكم', ko: '어떤 문제를 해결해 드릴까요', ja: 'お客様の課題を解決します' },
  'sec_painpoints_desc': { zh: '品牌方出海面临的种种难题，潜鲸出海提供一站式解决方案。', en: 'KOKOX TOYS provides one-stop solutions for the challenges brands face in global expansion.', es: 'KOKOX TOYS ofrece soluciones integrales para los desafíos de expansión global.', ar: 'توفر KOKOX TOYS حلولاً شاملة لتحديات التوسع العالمي التي تواجه العلامات التجارية.', ko: 'KOKOX TOYS는 글로벌 확장 시 브랜드가 직면하는 과제에 원스톱 솔루션을 제공합니다.', ja: 'KOKOX TOYSはブランドのグローバル展開における課題にワンストップソリューションを提供。' },
  'pp1_title': { zh: '全球渠道变现', en: 'Global Revenue Channels', es: 'Canales de Ingresos Globales', ar: 'قنوات إيرادات عالمية', ko: '글로벌 수익 채널', ja: 'グローバル収益チャネル' },
  'pp1_desc': { zh: '覆盖欧美/东南亚/中东等增量市场，多渠道立体销售网络，帮助品牌快速触达全球消费者。', en: 'Multi-dimensional sales network covering Europe/Americas/SEA/Middle East for rapid global consumer reach.', es: 'Red de ventas multidimensional cubriendo Europa/Américas/Asia/Medio Oriente.', ar: 'شبكة مبيعات متعددة الأبعاد تغطي أوروبا/الأمريكتين/آسيا/الشرق الأوسط للوصول السريع للمستهلكين العالميين.', ko: '유럽/미주/동남아/중동 등 성장 시장을 커버하는 다차원 판매 네트워크로 글로벌 소비자에게 빠르게 도달.', ja: '欧州/米州/東南アジア/中東等の成長市場をカバーする多次元販売ネットワークで、ブランドをグローバル消費者に迅速に届ける。' },
  'pp2_title': { zh: '降低出海风险', en: 'Reduced Global Risk', es: 'Riesgo Global Reducido', ar: 'تقليل المخاطر العالمية', ko: '글로벌 리스크 감소', ja: 'グローバルリスク軽減' },
  'pp2_desc': { zh: '直发国内仓即可，无需出海经验。合规护航，解决商家难授权、合规经营风险。', en: 'Ship from domestic warehouse, no global experience needed. Compliance support to reduce authorization and legal risks.', es: 'Envío desde almacén nacional, sin experiencia global. Soporte de cumplimiento legal.', ar: 'الشحن من المستودع المحلي، لا حاجة لخبرة عالمية. دعم الامتثال لتقليل مخاطر الترخيص والقانونية.', ko: '국내 창고에서 바로 발송, 글로벌 경험 불필요. 컴플라이언스 지원으로 라이선스 및 법적 리스크 해결.', ja: '国内倉庫から発送OK、グローバル経験不要。コンプライアンスサポートでライセンス・法的リスクを解決。' },
  'pp3_title': { zh: '数据运营赋能', en: 'Data-Driven Operations', es: 'Operaciones Basadas en Datos', ar: 'عمليات مبنية على البيانات', ko: '데이터 기반 운영 지원', ja: 'データ駆動運営支援' },
  'pp3_desc': { zh: '提供海外消费趋势与渠道运营数据支持，解决品牌方难培养运营团队的问题。', en: 'Overseas consumer trends and channel operation data support, solving the challenge of building operations teams.', es: 'Tendencias de consumo y datos operativos para resolver desafíos de equipos.', ar: 'دعم بيانات اتجاهات الاستهلاك الدولي وعمليات القنوات، لحل تحدي بناء فرق العمليات.', ko: '해외 소비 트렌드와 채널 운영 데이터 지원으로 운영팀 구축의 어려움 해결.', ja: '海外消費トレンドとチャネル運営データのサポートで、運営チーム構築の課題を解決。' },
  'pp4_title': { zh: '独家IP供给', en: 'Exclusive IP Supply', es: 'Suministro IP Exclusivo', ar: 'إمداد IP حصري', ko: '독점 IP 공급', ja: '独占IP供給' },
  'pp4_desc': { zh: '优先获得爆款IP新品，货品齐全，国内主流产品都可供货，大部分可提供授权支持。', en: 'Priority access to trending IP new releases. Full product range with authorization support for most items.', es: 'Acceso prioritario a nuevos lanzamientos IP. Catálogo completo con soporte de autorización.', ar: 'أولوية الوصول إلى إصدارات IP الرائجة الجديدة. تشكيلة كاملة مع دعم الترخيص لمعظم المنتجات.', ko: '인기 IP 신제품 우선 공급. 전체 제품 라인업, 대부분 라이선스 지원 가능.', ja: 'トレンドIP新商品への優先アクセス。フル製品ラインナップ、大部分の製品にライセンスサポート。' },
  'pp5_title': { zh: '拿货灵活无忧', en: 'Flexible Ordering', es: 'Pedidos Flexibles', ar: 'طلب مرن', ko: '유연한 발주', ja: '柔軟な発注' },
  'pp5_desc': { zh: '出单后拿货，一箱起拿，部分产品可一件代发，无库存风险，轻资产运营。', en: 'Order after sale, one carton minimum. Drop shipping available for select products — zero inventory risk.', es: 'Pedido post-venta, mínimo una caja. Drop shipping disponible — riesgo cero de inventario.', ar: 'اطلب بعد البيع، حد أدنى صندوق واحد. الشحن المباشر متاح — بدون مخاطر المخزون.', ko: '판매 후 주문, 1박스부터 가능. 일부 품목 드롭쉬핑 지원 — 재고 리스크 제로.', ja: '販売後に発注、1箱からOK。一部商品はドロップシッピング対応 — 在庫リスクゼロ。' },
  'pp6_title': { zh: '海外仓布局', en: 'Overseas Warehouses', es: 'Almacenes Internacionales', ar: 'مستودعات دولية', ko: '해외 창고', ja: '海外倉庫' },
  'pp6_desc': { zh: '26年阿联酋海外仓布局，降低海外运营和出货成本，提升物流时效。', en: 'UAE overseas warehouse established 2026, reducing operational costs and improving delivery speed.', es: 'Almacén en EAU establecido 2026, reduciendo costos y mejorando velocidad.', ar: 'مستودع دولي في الإمارات 2026، مما يقلل التكاليف ويسرع التوصيل.', ko: '2026년 UAE 해외 창고 설립으로 운영 비용 절감 및 배송 속도 향상.', ja: '2026年UAE海外倉庫設立で運営コスト削減と配送スピード向上。' },

  // ============ CTA ============
  'cta_index_title': { zh: '合作共赢，出海无界', en: 'Win-Win Partnership, Borderless Expansion', es: 'Alianza Ganar-Ganar, Expansión Sin Fronteras', ar: 'شراكة رابحة، توسع بلا حدود', ko: '윈윈 파트너십, 국경 없는 확장', ja: 'ウィンウィンパートナーシップ、ボーダレスな展開' },
  'cta_index_desc': { zh: '无论您是IP品牌方、跨境电商卖家还是渠道商，我们都能为您提供最优合作方案。', en: 'Whether you\'re an IP brand, cross-border seller, or channel distributor, we have the optimal partnership for you.', es: 'Ya seas marca IP, vendedor transfronterizo o distribuidor, tenemos la alianza óptima.', ar: 'سواء كنت علامة IP أو بائعاً عابراً للحدود أو موزعاً، لدينا الشراكة المثلى لك.', ko: 'IP 브랜드, 국경 간 판매자, 유통업자 등 어떤 분이든 최적의 제휴를 제공합니다.', ja: 'IPブランド、越境ECセラー、チャネルディストリビューターなど、どなたにでも最適なパートナーシップを提案。' },
  'cta_index_btn': { zh: '立即联系我们 →', en: 'Contact Us Now →', es: 'Contáctanos Ahora →', ar: 'اتصل بنا الآن ←', ko: '지금 문의하기 →', ja: '今すぐお問い合わせ →' },
  'cta_about_title': { zh: '携手出海，共创未来', en: 'Together, We Go Global', es: 'Juntos, Llegamos al Mundo', ar: 'معاً ننطلق عالمياً', ko: '함께 글로벌로', ja: '共にグローバルへ' },
  'cta_about_desc': { zh: '我们期待与IP品牌方、渠道商、电商平台深度合作，共同开拓全球潮玩市场。', en: 'We look forward to deep partnerships with IP brands, distributors, and e-commerce platforms.', es: 'Esperamos alianzas profundas con marcas IP, distribuidores y plataformas e-commerce.', ar: 'نتطلع لشراكات عميقة مع علامات IP والموزعين ومنصات التجارة الإلكترونية.', ko: 'IP 브랜드, 유통업체, 전자상거래 플랫폼과의 깊은 파트너십을 기대합니다.', ja: 'IPブランド、ディストリビューター、ECプラットフォームとの深いパートナーシップを期待。' },
  'cta_contact_title': { zh: '直接联系我们', en: 'Contact Us Directly', es: 'Contáctanos Directamente', ar: 'اتصل بنا مباشرة', ko: '직접 문의하기', ja: '直接お問い合わせ' },
  'cta_contact_desc': { zh: '商务联系人：Amiee.W | 电话：17600294377', en: 'Business Contact: Amiee.W | Phone: 17600294377', es: 'Contacto: Amiee.W | Teléfono: 17600294377', ar: 'جهة الاتصال التجارية: Amiee.W | الهاتف: 17600294377', ko: '비즈니스 연락처: Amiee.W | 전화: 17600294377', ja: 'ビジネス連絡先: Amiee.W | 電話: 17600294377' },
  'cta_contact_btn': { zh: '拨打电话 →', en: 'Call Now →', es: 'Llamar Ahora →', ar: 'اتصل الآن ←', ko: '전화 걸기 →', ja: '電話をかける →' },
  'cta_products_title': { zh: '获取完整产品目录与合作方案', en: 'Get Full Product Catalog & Partnership Plans', es: 'Obtén el Catálogo Completo y Planes de Alianza', ar: 'احصل على كتالوج المنتجات الكامل وخطط الشراكة', ko: '전체 제품 카탈로그 및 파트너십 플랜 받기', ja: '製品カタログ＆パートナーシッププランを取得' },
  'cta_products_desc': { zh: '联系我们获取最新IP产品清单、价格方案与合作政策。', en: 'Contact us for the latest IP product list, pricing, and partnership policies.', es: 'Contáctanos para el listado de productos, precios y políticas.', ar: 'اتصل بنا للحصول على أحدث قائمة منتجات IP والأسعار وسياسات الشراكة.', ko: '최신 IP 제품 목록, 가격, 파트너십 정책을 문의하세요.', ja: '最新IP製品リスト、価格、パートナーシップポリシーについてはお問い合わせください。' },
  'cta_products_btn': { zh: '立即咨询 →', en: 'Inquire Now →', es: 'Consultar Ahora →', ar: 'استفسار الآن ←', ko: '지금 문의 →', ja: '今すぐ問い合わせ →' },

  // ============ 关于我们 ============
  'about_banner_title': { zh: '关于我们', en: 'About Us', es: 'Sobre Nosotros', ar: 'من نحن', ko: '회사 소개', ja: '会社概要' },
  'about_banner_desc': { zh: '潜鲸出海国际贸易有限公司 — 全球潮玩IP商业化伙伴', en: 'Shenzhen Qianjing ChuHai Trading Co., Ltd. — Global Art Toy IP Commercialization Partner', es: 'Shenzhen Qianjing ChuHai Trading Co., Ltd. — Socio de Comercialización IP Global', ar: 'Shenzhen Qianjing ChuHai Trading Co., Ltd. — شريك التسويق العالمي لألعاب الفن آرت توي', ko: 'Shenzhen Qianjing ChuHai Trading Co., Ltd. — 글로벌 아트토이 IP 상업화 파트너', ja: 'Shenzhen Qianjing ChuHai Trading Co., Ltd. — グローバルアートトイIP商業化パートナー' },
  'about_intro_label': { zh: '公司简介', en: 'Company Profile', es: 'Perfil de la Empresa', ar: 'نبذة عن الشركة', ko: '회사 소개', ja: '会社プロフィール' },
  'about_intro_title': { zh: '潜鲸出海 — 让中国IP走向世界', en: 'KOKOX TOYS — Bringing Chinese IP to the World', es: 'KOKOX TOYS — Llevando IP China al Mundo', ar: 'KOKOX TOYS — نأخذ IP الصينية إلى العالم', ko: 'KOKOX TOYS — 중국 IP를 세계로', ja: 'KOKOX TOYS — 中国IPを世界へ' },
  'about_intro_p1': {
    zh: '潜鲸出海国际贸易有限公司（KOKOX TOYS）是一家专注于潮玩IP全球商业化的综合性贸易企业。我们持有大量国际IP授权资源与优质国内厂牌的海外销售授权，依托资深营销基因，构建了覆盖全球的立体销售渠道网络。',
    en: 'KOKOX TOYS is a comprehensive trading company focused on the global commercialization of art toy IPs. We hold extensive international IP licensing and premium domestic brand distribution rights, building a global multi-channel sales network backed by seasoned marketing expertise.',
    es: 'KOKOX TOYS es una empresa comercial integral enfocada en la comercialización global de IP de juguetes de arte. Contamos con amplias licencias IP internacionales y derechos de distribución premium, construyendo una red de ventas global con experiencia en marketing.',
    ar: 'KOKOX TOYS هي شركة تجارية شاملة تركز على التسويق العالمي لألعاب الفن آرت توي. نحمل تراخيص IP دولية واسعة وحقوق توزيع علامات تجارية محلية ممتازة، ونبني شبكة مبيعات عالمية متعددة القنوات مدعومة بخبرة تسويقية راسخة.',
    ko: 'KOKOX TOYS는 아트토이 IP의 글로벌 상업화에 주력하는 종합 무역 기업입니다. 광범위한 국제 IP 라이선스와 프리미엄 국내 브랜드 해외 판매 권리를 보유하여 풍부한 마케팅 전문성을 바탕으로 글로벌 멀티채널 판매 네트워크를 구축했습니다.',
    ja: 'KOKOX TOYSはアートトイIPのグローバル商業化に特化した総合貿易企業です。豊富な国際IPライセンスと高品質国内ブランドの海外販売権を保有し、豊富なマーケティング専門性を基盤にグローバルな多角的販売ネットワークを構築しています。'
  },
  'about_intro_p2': {
    zh: '我们的核心团队由原游戏大厂资深成员、跨境千万级店铺操盘手、跨境贸易平台市场运营专家以及出海营销专家组成，拥有丰富的跨境贸易与电商运营实战经验。',
    en: 'Our core team consists of former gaming studio veterans, cross-border million-dollar store operators, trade platform marketing experts, and global marketing specialists with rich hands-on experience.',
    es: 'Nuestro equipo está formado por veteranos de estudios de juegos, operadores de tiendas millonarias, expertos en marketing y especialistas en expansión global con amplia experiencia.',
    ar: 'يتكون فريقنا الأساسي من قدامى استوديوهات الألعاب ومشغلي متاجر عابرة للحدود وخبراء تسويق منصات التجارة ومتخصصين في التسويق العالمي مع خبرة عملية غنية.',
    ko: '핵심 팀은 전 게임사 베테랑, 국경 간 밀리언 달러 매장 운영자, 무역 플랫폼 마케팅 전문가, 글로벌 마케팅 전문가로 구성되어 풍부한 실무 경험을 보유하고 있습니다.',
    ja: 'コアチームは大手ゲームスタジオのベテラン、越境ECミリオンセラー運営者、貿易プラットフォームマーケティング専門家、グローバルマーケティング専門家で構成され、豊富な実務経験を有します。'
  },
  'about_intro_p3': {
    zh: '公司致力于帮助中国潮玩与文化衍生产品实现商业渠道的全球拓展与品牌化，助力中国原创IP与全球优质IP提升出海效率与商业化价值。',
    en: 'We are committed to helping Chinese art toys and cultural derivatives achieve global commercial expansion and branding, boosting the global efficiency and commercial value of original and premium IPs.',
    es: 'Estamos comprometidos a ayudar a juguetes de arte y derivados culturales chinos a lograr expansión comercial global.',
    ar: 'نحن ملتزمون بمساعدة ألعاب الفن والمنتجات الثقافية الصينية المشتقة على تحقيق التوسع التجاري والعلامة التجارية العالمية.',
    ko: '중국 아트토이와 문화 파생 제품의 글로벌 상업 확장과 브랜딩을 지원하여 오리지널 및 프리미엄 IP의 글로벌 효율성과 상업적 가치를 높입니다.',
    ja: '中国のアートトイと文化的派生商品のグローバル商業展開とブランド化を支援し、オリジナルおよびプレミアムIPのグローバル効率と商業的価値を向上させます。'
  },
  'about_pos_label': { zh: '业务定位', en: 'Business Positioning', es: 'Posicionamiento', ar: 'التوجه التجاري', ko: '비즈니스 포지셔닝', ja: 'ビジネスポジショニング' },
  'about_pos_title': { zh: '出海贸易 · 跨境电商 · 出海营销', en: 'Global Trade · Cross-border E-commerce · Global Marketing', es: 'Comercio Global · E-commerce Transfronterizo · Marketing Global', ar: 'التجارة العالمية · التجارة الإلكترونية العابرة · التسويق العالمي', ko: '글로벌 무역 · 국경 간 전자상거래 · 글로벌 마케팅', ja: 'グローバル貿易 · 越境EC · グローバルマーケティング' },
  'about_pos_desc': { zh: '三大核心能力，构建潮玩出海全链路服务体系。', en: 'Three core capabilities building a full-chain art toy global expansion service system.', es: 'Tres capacidades centrales construyendo un sistema de servicio integral.', ar: 'ثلاث قدرات أساسية لبناء نظام خدمة شامل لتوسيع ألعاب الفن عالمياً.', ko: '3대 핵심 역량으로 아트토이 글로벌 확장 풀체인 서비스 시스템 구축.', ja: '3つのコア能力でアートトイグローバル展開のフルチェーンサービス体系を構築。' },
  'about_pos1_title': { zh: '出海贸易', en: 'Global Trade', es: 'Comercio Global', ar: 'التجارة العالمية', ko: '글로벌 무역', ja: 'グローバル貿易' },
  'about_pos1_desc': { zh: '全球渠道变现，覆盖欧美、东南亚、中东等增量市场。B2B渠道供货给亚马逊、TikTok、SHIEN等平台商家，海外展优先参展。', en: 'Global channel monetization across Europe, Americas, SEA, and Middle East. B2B supply to Amazon, TikTok, SHIEN merchants with priority exhibition participation.', es: 'Monetización de canales globales. Suministro B2B a Amazon, TikTok, SHIEN con participación prioritaria en ferias.', ar: 'تحقيق إيرادات من القنوات العالمية عبر أوروبا والأمريكتين وجنوب شرق آسيا والشرق الأوسط. إمداد B2B لتجار Amazon وTikTok وSHIEN مع أولوية المشاركة في المعارض.', ko: '유럽/미주/동남아/중동 등 글로벌 채널 수익화. Amazon, TikTok, SHIEN 판매자에게 B2B 공급, 해외 전시 우선 참여.', ja: '欧州/米州/東南アジア/中東等グローバルチャネル収益化。Amazon, TikTok, SHIEN販売者にB2B供給、海外展示会優先出展。' },
  'about_pos2_title': { zh: '跨境电商', en: 'Cross-border E-commerce', es: 'E-commerce Transfronterizo', ar: 'التجارة الإلكترونية العابرة', ko: '국경 간 전자상거래', ja: '越境EC' },
  'about_pos2_desc': { zh: '阿里巴巴国际站B端自营店，C端TikTok/TEMU/SHIEN平台自营店运营，多渠道出货实现"快速出货"目标。', en: 'Alibaba International B2B store + C2C TikTok/TEMU/SHIEN direct stores for rapid multi-channel fulfillment.', es: 'Tienda B2B Alibaba + tiendas directas TikTok/TEMU/SHIEN para cumplimiento rápido.', ar: 'متجر B2B في Alibaba الدولي + متاجر مباشرة TikTok/TEMU/SHIEN لتلبية سريعة متعددة القنوات.', ko: 'Alibaba International B2B 매장 + TikTok/TEMU/SHIEN 직영 매장으로 빠른 멀티채널 출하.', ja: 'Alibaba International B2B店舗 + TikTok/TEMU/SHIEN直営店舗で高速マルチチャネル出荷。' },
  'about_pos3_title': { zh: '出海营销', en: 'Global Marketing', es: 'Marketing Global', ar: 'التسويق العالمي', ko: '글로벌 마케팅', ja: 'グローバルマーケティング' },
  'about_pos3_desc': { zh: 'IP授权、社媒营销、海外展参展等多维营销手段，快速反馈品牌方对应海外市场推广策略，提供B端数据支持。', en: 'Multi-dimensional marketing including IP licensing, social media, and overseas exhibitions with rapid B2B data feedback.', es: 'Marketing multidimensional incluyendo licenciamiento IP, redes sociales y ferias.', ar: 'تسويق متعدد الأبعاد يشمل ترخيص IP ووسائل التواصل والمعارض الدولية مع تغذية راجعة سريعة لبيانات B2B.', ko: 'IP 라이선스, 소셜 미디어, 해외 전시 등 다차원 마케팅으로 빠른 B2B 데이터 피드백.', ja: 'IPライセンス、SNS、海外展示会等の多次元マーケティングで、迅速なB2Bデータフィードバックを提供。' },

  // ============ 关于我们 - 市场背景 ============
  'about_market_label': { zh: '市场背景', en: 'Market Background', es: 'Contexto de Mercado', ar: 'خلفية السوق', ko: '시장 배경', ja: '市場背景' },
  'about_market_title': { zh: '潮玩出海的黄金时代', en: 'The Golden Age of Art Toy Globalization', es: 'La Era Dorada de Juguetes de Arte', ar: 'العصر الذهبي لألعاب الفن العالمية', ko: '아트토이 글로벌화의 황금기', ja: 'アートトイグローバル化の黄金期' },
  'about_market_desc': { zh: '情绪消费撬动400%增长，中国潮玩出海空间广阔。', en: 'Emotional consumption driving 400% growth — massive opportunities for Chinese art toy global expansion.', es: 'El consumo emocional impulsa un crecimiento del 400% — oportunidades masivas.', ar: 'الاستهلاك العاطفي يدفع نمواً بنسبة 400% — فرص هائلة لتوسع ألعاب الفن الصينية عالمياً.', ko: '감성 소비가 400% 성장을 이끌고 있으며, 중국 아트토이 글로벌 확장의 기회가 무궁무진합니다.', ja: 'エモーショナル消費が400%の成長を牽引し、中国アートトイのグローバル展開に巨大な機会。' },
  'market1_title': { zh: '市场高速增长', en: 'Rapid Market Growth', es: 'Crecimiento Rápido', ar: 'نمو سريع للسوق', ko: '시장 급성장', ja: '市場の急成長' },
  'market1_desc': { zh: '潮玩市场预计2026年达千亿规模。泡泡玛特2025年Q1海外收入同比增长近400%，印证出海潜力巨大。', en: 'Art toy market projected to reach ¥100B+ by 2026. POP MART\'s Q1 2025 overseas revenue grew nearly 400% YoY.', es: 'Mercado proyectado a alcanzar más de ¥100B para 2026. Ingresos internacionales de POP MART crecieron 400%.', ar: 'من المتوقع أن يصل سوق ألعاب الفن إلى أكثر من 100 مليار يوان بحلول 2026. نمت إيرادات POP MART الدولية بنسبة 400%.', ko: '아트토이 시장은 2026년까지 1000억 위안 이상으로 전망. POP MART 2025년 Q1 해외 매출 전년 동기 대비 400% 성장.', ja: 'アートトイ市場は2026年に1000億元規模に到達予想。POP MARTの2025年Q1海外売上高は前年同期比約400%成長。' },
  'market2_title': { zh: '社交媒体驱动', en: 'Social Media Driven', es: 'Impulsado por Redes Sociales', ar: 'مدفوع بوسائل التواصل', ko: '소셜 미디어 주도', ja: 'SNSドリブン' },
  'market2_desc': { zh: '全球日均社交媒体使用时长持续攀升，短内容IP、互动型潮玩快速崛起，社交媒体成为IP传播与变现的核心阵地。', en: 'Global social media usage continues to rise. Short-form IP and interactive art toys are emerging rapidly.', es: 'El uso global de redes sociales sigue en aumento. IP de formato corto y juguetes interactivos emergen rápidamente.', ar: 'استخدام وسائل التواصل الاجتماعي عالمياً في تزايد مستمر. IP المحتوى القصير وألعاب الفن التفاعلية تنمو بسرعة.', ko: '글로벌 소셜 미디어 사용량이 지속적으로 증가. 숏폼 IP와 인터랙티브 아트토이가 빠르게 부상.', ja: '世界的なSNS利用時間が継続的に増加。ショートフォームIPとインタラクティブアートトイが急速に台頭。' },
  'market3_title': { zh: '中国制造优势', en: 'Chinese Manufacturing Edge', es: 'Ventaja Manufacturera China', ar: 'التفوق التصنيعي الصيني', ko: '중국 제조업 우위', ja: '中国製造業の優位性' },
  'market3_desc': { zh: '中国玩具制造业全球领先，成为潮玩出海的坚实产业基础。中国潮玩产品高文化附加值不断提升出口竞争力。', en: 'China\'s toy manufacturing leads globally, providing a solid foundation for art toy export competitiveness.', es: 'La manufactura de juguetes de China lidera mundialmente, base sólida para exportación.', ar: 'تصنيع الألعاب في الصين يتصدر عالمياً، مما يوفر أساساً متيناً لتنافسية تصدير ألعاب الفن.', ko: '중국 장난감 제조업이 세계를 선도하며 아트토이 수출 경쟁력의 탄탄한 기반 제공.', ja: '中国のおもちゃ製造業は世界をリードし、アートトイ輸出競争力の強固な基盤を提供。' },
  'market4_title': { zh: '全球竞争分散', en: 'Fragmented Global Competition', es: 'Competencia Global Fragmentada', ar: 'منافسة عالمية متفرقة', ko: '글로벌 경쟁 분산', ja: 'グローバル競争の分散化' },
  'market4_desc': { zh: '全球玩具市场竞争相对分散，前五大玩家占比合计较低，中国潮玩品牌出海空间广阔。', en: 'Global toy market competition is relatively fragmented. Top 5 players hold low combined share — vast room for Chinese brands.', es: 'El mercado global de juguetes está fragmentado. Los 5 principales tienen baja cuota combinada.', ar: 'منافسة سوق الألعاب العالمية متفرقة نسبياً. أكبر 5 لاعبين يحملون حصة منخفضة — مساحة واسعة للعلامات الصينية.', ko: '글로벌 장난감 시장 경쟁이 상대적으로 분산. 상위 5개사 점유율 합계가 낮아 중국 브랜드의 글로벌 확장 여유가 큼.', ja: '世界のおもちゃ市場の競争は比較的分散。トップ5の合計シェアが低く、中国ブランドのグローバル展開余地が広大。' },
  'market5_title': { zh: '文化出海加速', en: 'Cultural Export Accelerating', es: 'Exportación Cultural Acelerada', ar: 'تصدير ثقافي متسارع', ko: '문화 수출 가속화', ja: '文化輸出の加速' },
  'market5_desc': { zh: '随着中国文化影响力逐步提升，中国动漫、网剧、网文、网游加快出海步伐，IP全球化进入快速发展期。', en: 'Chinese cultural influence is rising. Anime, web series, web novels, and gaming are accelerating global expansion.', es: 'La influencia cultural china crece. Anime, series web y gaming aceleran su expansión.', ar: 'التأثير الثقافي الصيني في ارتفاع. الأنمي والمسلسلات والروايات والألعاب تتسارع عالمياً.', ko: '중국 문화적 영향력이 점진적으로 향상. 애니메이션, 웹드라마, 웹소설, 게임의 글로벌 확장이 가속화.', ja: '中国の文化的影響力が徐々に向上。アニメ、ウェブドラマ、ウェブ小説、ゲームのグローバル展開が加速。' },
  'market6_title': { zh: '情绪消费崛起', en: 'Emotional Consumption Rising', es: 'Consumo Emocional en Auge', ar: 'صعود الاستهلاك العاطفي', ko: '감성 소비 부상', ja: 'エモーショナル消費の台頭' },
  'market6_desc': { zh: '"让年轻人上头"的情绪消费成为新消费主力，潮玩承载的情感价值与文化认同正在被全球Z世代消费者广泛接受。', en: 'Emotional consumption is the new mainstream. The emotional value and cultural identity of art toys are being embraced by Gen Z globally.', es: 'El consumo emocional es la nueva corriente principal. El valor emocional de los juguetes es aceptado por Gen Z.', ar: 'الاستهلاك العاطفي هو التيار السائد الجديد. القيمة العاطفية والهوية الثقافية لألعاب الفن يتقبلها جيل Z عالمياً.', ko: '감성 소비가 새로운 메인스트림으로 자리잡고 있으며, 아트토이의 감정적 가치와 문화적 정체성이 글로벌 Z세대 소비자에게 널리 수용되고 있습니다.', ja: 'エモーショナル消費が新たな主流に。アートトイが持つ感情的価値と文化的アイデンティティが世界的にZ世代に広く受け入れられている。' },

  // ============ 关于我们 - 运营模式 ============
  'about_ops_label': { zh: '运营模式', en: 'Operation Model', es: 'Modelo de Operación', ar: 'نموذج التشغيل', ko: '운영 모델', ja: '運営モデル' },
  'about_ops_title': { zh: '授权复用 · 数据反哺 · 孵化支持', en: 'License Reuse · Data Feedback · Incubation Support', es: 'Reutilización · Retroalimentación · Soporte de Incubación', ar: 'إعادة استخدام الترخيص · تغذية البيانات · دعم الحضانة', ko: '라이선스 재사용 · 데이터 피드백 · 인큐베이션 지원', ja: 'ライセンス再利用 · データフィードバック · インキュベーション支援' },
  'about_ops_desc': { zh: '以中国头部潮玩IP合作矩阵为基础，构建B2B供货 + 自营渠道 + 多平台运营的立体运营体系。', en: 'Based on top Chinese art toy IP partnerships, building a multi-dimensional operation system of B2B supply + direct channels + multi-platform operations.', es: 'Basado en alianzas con IP premium chinas, construyendo sistema B2B + canales directos + multi-plataforma.', ar: 'بناءً على شراكات IP لألعاب الفن الصينية الرائدة، نبني نظام تشغيل متعدد الأبعاد يشمل إمداد B2B + قنوات مباشرة + عمليات متعددة المنصات.', ko: '중국 최고의 아트토이 IP 파트너십을 기반으로 B2B 공급 + 직영 채널 + 멀티 플랫폼 운영의 다차원 운영 시스템 구축.', ja: '中国トップクラスのアートトイIPパートナーシップを基盤に、B2B供給 + 直営チャネル + マルチプラットフォーム運営の多次元運営体系を構築。' },
  'ops1_tag': { zh: 'B2B供货', en: 'B2B Supply', es: 'Suministro B2B', ar: 'إمداد B2B', ko: 'B2B 공급', ja: 'B2B供給' },
  'ops1_title': { zh: 'B2B渠道供货', en: 'B2B Channel Supply', es: 'Suministro Canal B2B', ar: 'إمداد قناة B2B', ko: 'B2B 채널 공급', ja: 'B2Bチャネル供給' },
  'ops1_desc': { zh: '给亚马逊、TikTok、SHIEN等平台商家供货，阿里巴巴国际站B端自营店数据支持，海外展优先参展。', en: 'Supplying Amazon, TikTok, SHIEN merchants. Alibaba International B2B store with data support and priority exhibition access.', es: 'Suministrando a vendedores de Amazon, TikTok, SHIEN. Tienda B2B con soporte de datos.', ar: 'إمداد تجار Amazon وTikTok وSHIEN. متجر B2B في Alibaba الدولي مع دعم البيانات وأولوية المعارض.', ko: 'Amazon, TikTok, SHIEN 판매자에게 공급. Alibaba International B2B 매장 데이터 지원 및 해외 전시 우선 참여.', ja: 'Amazon, TikTok, SHIEN販売者に供給。Alibaba International B2B店舗でデータサポートと展示会優先出展。' },
  'ops2_tag': { zh: '自营渠道', en: 'Direct Channels', es: 'Canales Directos', ar: 'قنوات مباشرة', ko: '직영 채널', ja: '直営チャネル' },
  'ops2_title': { zh: '海外自营渠道', en: 'Overseas Direct Channels', es: 'Canales Directos Internacionales', ar: 'قنوات مباشرة دولية', ko: '해외 직영 채널', ja: '海外直営チャネル' },
  'ops2_desc': { zh: '海外TikTok自营店运营，美国线下连锁店门店渠道，欧洲大卖合作，海外仓和线下门店体系。', en: 'Overseas TikTok stores, US retail chain channels, European wholesale partnerships, overseas warehouses and retail network.', es: 'Tiendas TikTok internacionales, canales retail en EE.UU., alianzas mayoristas europeas.', ar: 'متاجر TikTok الدولية، قنوات سلاسل البيع الأمريكية، شراكات الجملة الأوروبية، مستودعات وشبكة متاجر دولية.', ko: '해외 TikTok 직영점, 미국 오프라인 체인점 채널, 유럽 도매 파트너십, 해외 창고 및 오프라인 매장망.', ja: '海外TikTok直営店、米国オフラインチェーン店チャネル、欧州卸売パートナーシップ、海外倉庫・実店舗ネットワーク。' },
  'ops3_tag': { zh: '多平台运营', en: 'Multi-Platform', es: 'Multi-Plataforma', ar: 'متعدد المنصات', ko: '멀티 플랫폼', ja: 'マルチプラットフォーム' },
  'ops3_title': { zh: '多平台自营', en: 'Multi-Platform Operations', es: 'Operaciones Multi-Plataforma', ar: 'عمليات متعددة المنصات', ko: '멀티 플랫폼 운영', ja: 'マルチプラットフォーム運営' },
  'ops3_desc': { zh: 'C端平台自营店运营覆盖TikTok、TEMU、SHIEN，国内电商渠道同步运营，多渠道出货快速变现。', en: 'C2C platform operations on TikTok, TEMU, SHIEN with synchronized domestic channels for rapid multi-channel monetization.', es: 'Operaciones C2C en TikTok, TEMU, SHIEN con canales domésticos sincronizados.', ar: 'عمليات C2C على TikTok وTEMU وSHIEN مع قنوات محلية متزامنة لتحقيق أرباح سريعة متعددة القنوات.', ko: 'TikTok, TEMU, SHIEN에서 C2C 플랫폼 직영 운영, 국내 이커머스 채널 동기화로 멀티채널 빠른 수익화.', ja: 'TikTok, TEMU, SHIENでC2Cプラットフォーム直営運営、国内ECチャネルと同期しマルチチャネルで高速収益化。' },

  // ============ 关于我们 - 核心理念 ============
  'about_values_label': { zh: '核心理念', en: 'Core Philosophy', es: 'Filosofía Central', ar: 'الفلسفة الأساسية', ko: '핵심 철학', ja: 'コアフィロソフィー' },
  'about_values_title': { zh: '致力于帮助中国潮玩与文化衍生产品<br>实现商业渠道的全球拓展与品牌化', en: 'Dedicated to helping Chinese art toys and cultural derivatives<br>achieve global commercial expansion and branding', es: 'Dedicados a ayudar a juguetes de arte y derivados culturales chinos<br>a lograr expansión comercial global', ar: 'مكرسون لمساعدة ألعاب الفن والمنتجات الثقافية الصينية<br>على تحقيق التوسع التجاري والعلامة التجارية العالمية', ko: '중국 아트토이와 문화 파생 제품이<br>글로벌 상업 확장과 브랜딩을 달성하도록 지원', ja: '中国のアートトイと文化的派生商品の<br>グローバル商業展開とブランド化を実現するために尽力' },
  'val1_title': { zh: '授权复用', en: 'License Reuse', es: 'Reutilización de Licencia', ar: 'إعادة استخدام الترخيص', ko: '라이선스 재사용', ja: 'ライセンス再利用' },
  'val1_desc': { zh: '高效利用IP授权资源，实现多渠道、多品类的商业化复用', en: 'Efficient IP licensing utilization across multi-channel, multi-category commercial applications.', es: 'Utilización eficiente de licencias IP en aplicaciones comerciales multicanal.', ar: 'استخدام فعال لتراخيص IP عبر تطبيقات تجارية متعددة القنوات والفئات.', ko: 'IP 라이선스를 효율적으로 활용하여 멀티채널, 멀티 카테고리 상업적 재사용 실현.', ja: 'IPライセンスを効率的に活用し、マルチチャネル・マルチカテゴリの商業的再利用を実現。' },
  'val2_title': { zh: '数据反哺', en: 'Data Feedback', es: 'Retroalimentación de Datos', ar: 'تغذية البيانات', ko: '데이터 피드백', ja: 'データフィードバック' },
  'val2_desc': { zh: '共享平台数据与消费趋势，反哺品牌方优化产品策略', en: 'Shared platform data and consumer trends to help brands optimize product strategies.', es: 'Datos compartidos y tendencias para optimizar estrategias de producto.', ar: 'بيانات المنصات المشتركة واتجاهات الاستهلاك لمساعدة العلامات التجارية على تحسين استراتيجيات المنتجات.', ko: '공유 플랫폼 데이터와 소비 트렌드로 브랜드의 제품 전략 최적화 지원.', ja: '共有プラットフォームデータと消費トレンドでブランドの製品戦略最適化を支援。' },
  'val3_title': { zh: '孵化支持', en: 'Incubation Support', es: 'Soporte de Incubación', ar: 'دعم الحضانة', ko: '인큐베이션 지원', ja: 'インキュベーション支援' },
  'val3_desc': { zh: '从IP孵化到出海落地，全流程赋能品牌全球化成长', en: 'Full-process empowerment from IP incubation to global market entry.', es: 'Empoderamiento integral desde incubación IP hasta entrada al mercado global.', ar: 'تمكين شامل من حضانة IP إلى دخول السوق العالمي.', ko: 'IP 인큐베이션부터 글로벌 시장 진출까지 전 프로세스 지원.', ja: 'IPインキュベーションからグローバル市場参入まで、全プロセスのエンパワーメント。' },

  // ============ 产品服务 ============
  'products_banner_title': { zh: '产品服务', en: 'Products & Services', es: 'Productos y Servicios', ar: 'المنتجات والخدمات', ko: '제품 및 서비스', ja: '製品・サービス' },
  'products_banner_desc': { zh: '四大品类 · 三大业务板块 · 全链路服务', en: 'Four Categories · Three Pillars · Full-Chain Services', es: 'Cuatro Categorías · Tres Pilares · Servicios Integrales', ar: 'أربع فئات · ثلاث ركائز · خدمات شاملة', ko: '4대 카테고리 · 3대 비즈니스 축 · 풀체인 서비스', ja: '4カテゴリ · 3つの柱 · フルチェーンサービス' },
  'products_cat_label': { zh: '四大品类', en: 'Four Categories', es: 'Cuatro Categorías', ar: 'أربع فئات', ko: '4대 카테고리', ja: '4カテゴリ' },
  'products_cat_title': { zh: '盲盒 · 谷子 · 卡牌 · AI玩具', en: 'Blind Boxes · Merch · Cards · AI Toys', es: 'Cajas Ciegas · Merch · Cartas · Juguetes IA', ar: 'صناديق عمياء · بضائع · بطاقات · ألعاب ذكية', ko: '블라인드박스 · 굿즈 · 카드 · AI 장난감', ja: 'ブラインドボックス · グッズ · カード · AIおもちゃ' },
  'products_cat_desc': { zh: '覆盖潮玩消费全场景，从传统收藏到科技互动，满足不同市场与消费群体的需求。', en: 'Covering all art toy consumption scenarios — from traditional collectibles to tech-enabled interactive products.', es: 'Cubriendo todos los escenarios — desde coleccionables tradicionales hasta productos interactivos.', ar: 'تغطي جميع سيناريوهات استهلاك ألعاب الفن — من المقتنيات التقليدية إلى المنتجات التفاعلية.', ko: '전통 수집품부터 테크 인터랙티브 제품까지 아트토이 소비의 모든 시나리오를 커버.', ja: '伝統的なコレクションからテクノロジーインタラクティブ製品まで、アートトイ消費の全シナリオをカバー。' },
  'cat1_tag': { zh: '核心品类', en: 'Core Category', es: 'Categoría Principal', ar: 'الفئة الأساسية', ko: '핵심 카테고리', ja: 'コアカテゴリ' },
  'cat1_title': { zh: '盲盒系列', en: 'Blind Box Series', es: 'Serie Cajas Ciegas', ar: 'سلسلة الصناديق العمياء', ko: '블라인드박스 시리즈', ja: 'ブラインドボックスシリーズ' },
  'cat1_desc': { zh: '涵盖艺术家联名盲盒、IP原创盲盒、动漫周边盲盒等多系列。与YOBU悠布、MIOCO米可、taketata等头部潮玩IP深度合作，提供高品质盲盒产品。', en: 'Artist collab, original IP, and anime blind box series. Deep partnerships with YOBU, MIOCO, taketata and other top art toy IPs.', es: 'Series de cajas ciegas de artistas, IP original y anime. Alianzas con YOBU, MIOCO, taketata.', ar: 'سلسلة صناديق عمياء بالتعاون مع فنانين وIP أصلية وأنمي. شراكات عميقة مع YOBU وMIOCO وtaketata.', ko: '아티스트 콜라보, 오리지널 IP, 애니메이션 블라인드박스 시리즈. YOBU, MIOCO, taketata 등 탑 아트토이 IP와 심층 파트너십.', ja: 'アーティストコラボ、オリジナルIP、アニメブラインドボックスシリーズ。YOBU、MIOCO、taketata等トップアートトイIPと深い提携。' },
  'cat2_tag': { zh: '热门品类', en: 'Hot Category', es: 'Categoría Popular', ar: 'الفئة الرائجة', ko: '인기 카테고리', ja: '注目カテゴリ' },
  'cat2_title': { zh: '谷子（Goods）周边', en: 'Anime & Gaming Merchandise', es: 'Merchandise Anime y Gaming', ar: 'بضائع الأنمي والألعاب', ko: '애니메이션/게임 굿즈', ja: 'アニメ・ゲームグッズ' },
  'cat2_desc': { zh: '影视与动漫IP衍生周边，涵盖徽章盲盒、吧唧、纪念票、立牌等。如《一人之下》原画系列徽章盲盒（VOL1-VOL3），多款SKU覆盖粉丝需求。', en: 'Entertainment IP derivatives including badge blind boxes, pins, tickets, and standees. Like "Under One Person" art badge series (VOL1-VOL3).', es: 'Derivados de IP de entretenimiento: pines, tickets, stands. Serie "Under One Person" (VOL1-VOL3).', ar: 'مشاعات IP الترفيهية: صندوق شارات عمياء، دبابيس، تذاكر، حوامل. سلسلة "Under One Person" (VOL1-VOL3).', ko: '엔터테인먼트 IP 파생 굿즈: 배지 블라인드박스, 핀, 티켓, 스탠드 등. "一人之下" 아트 배지 시리즈 (VOL1-VOL3).', ja: 'エンタメIP派生グッズ：バッジブラインドボックス、ピンバッジ、チケット、スタンド等。「一人之下」アートバッジシリーズ(VOL1-VOL3)等。' },
  'cat3_tag': { zh: '收藏品类', en: 'Collectible', es: 'Coleccionable', ar: 'مقتنيات', ko: '수집품', ja: 'コレクション' },
  'cat3_title': { zh: '卡牌系列', en: 'Trading Card Series', es: 'Serie de Cartas Coleccionables', ar: 'سلسلة بطاقات التبادل', ko: '트레이딩 카드 시리즈', ja: 'トレーディングカードシリーズ' },
  'cat3_desc': { zh: '游戏、动漫IP授权卡牌产品，包括集换式卡牌、收藏卡等品类，满足收藏爱好者与竞技玩家的多元需求。', en: 'Gaming and anime licensed cards including TCG and collectible cards for enthusiasts and competitive players.', es: 'Cartas con licencia de gaming y anime incluyendo TCG y cartas coleccionables.', ar: 'بطاقات مرخصة للألعاب والأنمي بما في ذلك TCG وبطاقات التبادل.', ko: '게임, 애니메이션 IP 라이선스 카드. TCG, 수집 카드 등으로 수집가와 경기 플레이어의 다양한 니즈 충족.', ja: 'ゲーム・アニメIPライセンスカード。TCG、コレクションカード等、コレクターと競技プレイヤーの多様なニーズに対応。' },
  'cat4_tag': { zh: '科技新品', en: 'Tech Innovation', es: 'Innovación Tech', ar: 'ابتكار تقني', ko: '테크 혁신', ja: 'テックイノベーション' },
  'cat4_title': { zh: 'AI玩具系列', en: 'AI Toy Series', es: 'Serie de Juguetes IA', ar: 'سلسلة الألعاب الذكية', ko: 'AI 장난감 시리즈', ja: 'AIおもちゃシリーズ' },
  'cat4_desc': { zh: '搭载大模型的智能毛绒玩具，如Jopark娃噜噜系列（支持40+国语言、多种表情交互、多角色切换）。更多AI仿真宠物、AI机器人、AI桌宠正在研发中。', en: 'LLM-powered smart plush toys like Jopark Walulu series (40+ languages,表情 interaction, multi-role switching). More AI pets, robots, and desk companions in development.', es: 'Peluches inteligentes con LLM como serie Jopark Walulu (40+ idiomas, interacción de expresiones). Más productos IA en desarrollo.', ar: 'ألعاب محشوة ذكية مدعومة بنماذج لغوية كبيرة مثل سلسلة Jopark Walulu (أكثر من 40 لغة، تفاعل تعبيري، تبديل الأدوار). المزيد من المنتجات الذكية قيد التطوير.', ko: 'Jopark Walulu 시리즈(40+개국 언어, 표정 인터랙션, 멀티 역할 전환) 등 LLM 기반 스마트 인형. 더 많은 AI 반려동물, AI 로봇, AI 데스크메이트 개발 중.', ja: 'Jopark Waluluシリーズ(40+ヶ国語対応、表情インタラクション、マルチロール切替)等、LLM搭載スマートぬいぐるみ。さらにAIペット、AIロボット、AIデスクメイトを開発中。' },
  'cat5_tag': { zh: '经典品类', en: 'Classic Category', es: 'Categoría Clásica', ar: 'الفئة الكلاسيكية', ko: '클래식 카테고리', ja: 'クラシックカテゴリ' },
  'cat5_title': { zh: '毛绒玩偶系列', en: 'Plush Toy Series', es: 'Serie de Peluches', ar: 'سلسلة الألعاب المحشوة', ko: '인형 시리즈', ja: 'ぬいぐるみシリーズ' },
  'cat5_desc': { zh: 'taketata品牌毛绒系列，秉承"Maintain childlike innocence"理念，让每一个毛绒玩偶赋予更有意义的生命。治愈系设计，多元化的陪伴与爱。', en: 'taketata plush series embodying "Maintain childlike innocence" — healing designs for diverse companionship and love.', es: 'Serie de peluches taketata con filosofía "Mantener la inocencia infantil" — diseños reconfortantes.', ar: 'سلسلة محشوة taketata تجسد فلسفة "الحفاظ على براءة الطفولة" — تصاميم شافية للرفقة والحب المتنوع.', ko: 'taketata 인형 시리즈, "순수한 어린이 마음 유지" 철학으로 각 인형에 의미 있는 생명 부여. 힐링 디자인, 다양한 동반과 사랑.', ja: 'taketataぬいぐるみシリーズ、「Maintain childlike innocence」の理念のもと、各ぬいぐるみに有意義な命を吹き込む。ヒーリングデザイン、多様な寄り添いと愛。' },
  'cat6_tag': { zh: '品质之选', en: 'Premium Choice', es: 'Selección Premium', ar: 'الخيار المتميز', ko: '프리미엄 초이스', ja: 'プレミアムチョイス' },
  'cat6_title': { zh: '艺术家手办与积木', en: 'Artist Figures & Building Blocks', es: 'Figuras de Artista y Bloques', ar: 'تماثيل فنية ومكعبات', ko: '아티스트 피규어 & 블록', ja: 'アーティストフィギュア＆ブロック' },
  'cat6_desc': { zh: '"做大众消费得起的艺术品"，与儿力力、周日央、小丑不丑、惠唯、安东尼不二兔、骆馅饼等艺术家联名，艺术品级别品质，质感爆棚。', en: '"Art affordable for everyone" — collaborations with artists including Er Lili, Zhou Riyang, Clown Not Ugly, and more. Art-quality craftsmanship.', es: '"Arte accesible para todos" — colaboraciones con artistas. Calidad artística.', ar: '"فن ميسور للجميع" — تعاون مع فنانين بجودة فنية استثنائية.', ko: '"모두가 누릴 수 있는 예술" — Er Lili, Zhou Riyang 등 아티스트와의 콜라보. 예술급 장인정신.', ja: '「大衆が手に届けるアート」— Er Lili、Zhou Riyang、Clown Not Ugly等のアーティストとのコラボ。アート級の品質。' },

  // ============ 产品服务 - AI玩具详情 ============
  'products_ai_label': { zh: '科技潮玩', en: 'Tech Art Toys', es: 'Juguetes Tech', ar: 'ألعاب الفن التقنية', ko: '테크 아트토이', ja: 'テックアートトイ' },
  'products_ai_title': { zh: 'AI玩具 — 下一代潮玩体验', en: 'AI Toys — Next-Gen Art Toy Experience', es: 'Juguetes IA — La Siguiente Generación', ar: 'ألعاب ذكية — تجربة الجيل القادم', ko: 'AI 장난감 — 차세대 아트토이 경험', ja: 'AIおもちゃ — 次世代アートトイ体験' },
  'products_ai_desc': { zh: '搭载大模型的智能玩具，实现情感陪伴、多语言对话、声光互动，正在重新定义潮玩边界。', en: 'LLM-powered smart toys with emotional companionship, multilingual dialogue, and sound-light interaction — redefining art toy boundaries.', es: 'Juguetes inteligentes con IA para compañía emocional, diálogo multilingüe e interacción.', ar: 'ألعاب ذكية مدعومة بنماذج لغوية كبيرة مع مرافقة عاطفية وحوار متعدد اللغات وتفاعل صوتي ضوئي.', ko: '감정적 동반, 다국어 대화, 음성/조명 인터랙션을 실현하는 LLM 기반 스마트 장난감으로 아트토이의 경계를 재정의.', ja: 'エモーショナルコンパニオン、多言語対話、音声光インタラクションを実現するLLM搭載スマートおもちゃでアートトイの境界を再定義。' },
  'products_ai_more_title': { zh: '更多AI产品正在研发中', en: 'More AI Products in Development', es: 'Más Productos IA en Desarrollo', ar: 'المزيد من المنتجات الذكية قيد التطوير', ko: '더 많은 AI 제품 개발 중', ja: 'さらに多くのAI製品を開発中' },
  'products_ai_more_desc': { zh: 'AI仿真宠物 · AI机器人 · AI桌宠 · AI潮玩 · AI周边', en: 'AI Pets · AI Robots · AI Desk Pets · AI Art Toys · AI Merchandise', es: 'Mascotas IA · Robots IA · Desk Pets IA · Juguetes IA · Merch IA', ar: 'حيوانات ذكية · روبوتات ذكية · حيوانات مكتبية ذكية · ألعاب فن ذكية · بضائع ذكية', ko: 'AI 반려동물 · AI 로봇 · AI 데스크메이트 · AI 아트토이 · AI 굿즈', ja: 'AIペット · AIロボット · AIデスクメイト · AIアートトイ · AIグッズ' },

  // ============ 产品服务 - 合作IP ============
  'products_ip_label': { zh: '合作IP矩阵', en: 'Partner IP Matrix', es: 'Matriz de IP Socias', ar: 'مصفوفة شراكات IP', ko: '파트너 IP 매트릭스', ja: 'パートナーIPマトリックス' },
  'products_ip_title': { zh: '中国头部潮玩IP合作矩阵', en: 'Top Chinese Art Toy IP Partnership Matrix', es: 'Matriz de IP Premium Chinas', ar: 'مصفوفة شراكات ألعاب الفن الصينية الرائدة', ko: '중국 탑 아트토이 IP 파트너십 매트릭스', ja: '中国トップアートトイIPパートナーシップマトリックス' },
  'products_ip_desc': { zh: '与众多优质原创IP品牌深度合作，构建丰富的IP资源池。', en: 'Deep partnerships with numerous quality original IP brands, building a rich IP resource pool.', es: 'Alianzas profundas con marcas IP originales de calidad, construyendo un pool rico.', ar: 'شراكات عميقة مع العديد من علامات IP الأصلية عالية الجودة، لبناء مج موارد IP غني.', ko: '다수의 고품질 오리지널 IP 브랜드와 심층 파트너십으로 풍부한 IP 리소스 풀 구축.', ja: '多数の高品質オリジナルIPブランドと深い提携で、豊富なIPリソースプールを構築。' },

  // ============ 产品服务 - 合作保障 ============
  'products_guarantee_label': { zh: '合作保障', en: 'Partnership Guarantee', es: 'Garantía de Alianza', ar: 'ضمانات الشراكة', ko: '파트너십 보장', ja: 'パートナーシップ保証' },
  'products_guarantee_title': { zh: '选择潜鲸出海的六大理由', en: '6 Reasons to Choose KOKOX TOYS', es: '6 Razones para Elegir KOKOX TOYS', ar: '6 أسباب لاختيار KOKOX TOYS', ko: 'KOKOX TOYS를 선택하는 6가지 이유', ja: 'KOKOX TOYSを選ぶ6つの理由' },
  'guarantee1_title': { zh: '合规护航', en: 'Compliance Support', es: 'Soporte de Cumplimiento', ar: 'دعم الامتثال', ko: '컴플라이언스 지원', ja: 'コンプライアンスサポート' },
  'guarantee1_desc': { zh: '解决商家难授权、合规经营风险，可报备上跨境电商平台，合法合规经营无后顾之忧。', en: 'Solving authorization challenges and compliance risks. Register on cross-border platforms for worry-free operations.', es: 'Resolviendo desafíos de autorización y riesgos de cumplimiento.', ar: 'حل تحديات الترخيص ومخاطر الامتثال. التسجيل على المنصات العابرة للحدود لعمليات خالية من القلق.', ko: '라이선스 획득 및 컴플라이언스 리스크 해결. 국경 간 플랫폼 등록로 안심 운영.', ja: 'ライセンス課題とコンプライアンスリスクを解決。越境ECプラットフォームに登録し、安心して運営。' },
  'guarantee2_title': { zh: '独家IP供给', en: 'Exclusive IP Supply', es: 'Suministro IP Exclusivo', ar: 'إمداد IP حصري', ko: '독점 IP 공급', ja: '独占IP供給' },
  'guarantee2_desc': { zh: '优先获得爆款IP新品，全品类IP资源池，国内主流产品都可供货。', en: 'Priority access to trending IP releases with a full-category IP resource pool.', es: 'Acceso prioritario a lanzamientos IP con pool de recursos completo.', ar: 'أولوية الوصول إلى إصدارات IP الرائجة مع مج موارد IP شامل.', ko: '인기 IP 신제품 우선 공급, 전 카테고리 IP 리소스 풀, 국내 주류 제품 전체 공급 가능.', ja: 'トレンドIP新商品への優先アクセス、全カテゴリIPリソースプール、国内主要製品すべて供給可能。' },
  'guarantee3_title': { zh: '数据支持', en: 'Data Support', es: 'Soporte de Datos', ar: 'دعم البيانات', ko: '데이터 지원', ja: 'データサポート' },
  'guarantee3_desc': { zh: '共享素材库与平台数据，提供爆品选品支持，海外消费趋势实时洞察。', en: 'Shared asset library and platform data with trending product selection and real-time consumer insights.', es: 'Biblioteca compartida y datos de plataformas con insights de consumo.', ar: 'مكتبة أصول مشتركة وبيانات المنصات مع اختيار المنتجات الرائجة ورؤى استهلاكية فورية.', ko: '공유 에셋 라이브러리와 플랫폼 데이터로 인기 상품 선정 및 실시간 소비 트렌드 인사이트 제공.', ja: '共有アセットライブラリとプラットフォームデータで、トレンド商品選定とリアルタイム消費インサイトを提供。' },
  'guarantee4_title': { zh: '拿货灵活', en: 'Flexible Ordering', es: 'Pedidos Flexibles', ar: 'طلب مرن', ko: '유연한 발주', ja: '柔軟な発注' },
  'guarantee4_desc': { zh: '平台商家市场最优条件拿货，出单后拿货，一箱起拿。部分产品可一件代发，零库存风险。', en: 'Best market conditions for platform sellers. Order after sale, one carton minimum. Drop shipping available.', es: 'Mejores condiciones para vendedores. Pedido post-venta, mínimo una caja. Drop shipping disponible.', ar: 'أفضل شروط السوق للبائعين. طلب بعد البيع، حد أدنى صندوق واحد. الشحن المباشر متاح.', ko: '최적의 시장 조건. 판매 후 주문, 1박스부터. 일부 품목 드롭쉬핑 지원, 재고 리스크 제로.', ja: 'プラットフォーム販売者に最適な条件。販売後に発注、1箱からOK。一部ドロップシッピング対応、在庫リスクゼロ。' },
  'guarantee5_title': { zh: '货品齐全', en: 'Complete Product Range', es: 'Catálogo Completo', ar: 'تشكيلة منتجات كاملة', ko: '완전한 제품 라인업', ja: '充実した製品ラインナップ' },
  'guarantee5_desc': { zh: '国内主流产品都可供货，大部分可提供授权支持，满足多品类经营需求。', en: 'All mainstream domestic products available. Most with authorization support for multi-category operations.', es: 'Todos los productos mainstream disponibles. La mayoría con soporte de autorización.', ar: 'جميع المنتجات المحلية الرئيسية متاحة. معظمها مع دعم الترخيص لعمليات متعددة الفئات.', ko: '국내 주류 제품 전체 공급 가능, 대부분 라이선스 지원, 멀티 카테고리 운영 니즈 충족.', ja: '国内主要製品すべて供給可能、大部分ライセンスサポート対応、マルチカテゴリ運営ニーズに対応。' },
  'guarantee6_title': { zh: '海外仓布局', en: 'Overseas Warehouses', es: 'Almacenes Internacionales', ar: 'مستودعات دولية', ko: '해외 창고', ja: '海外倉庫' },
  'guarantee6_desc': { zh: '2026年头部IP产品阿联酋海外仓布局，降低海外运营和出货成本，提升物流时效。', en: '2026 UAE overseas warehouse for top IP products, reducing costs and improving delivery times.', es: 'Almacén en EAU 2026 para productos IP premium, reduciendo costos y mejorando entregas.', ar: 'مستودع دولي في الإمارات 2026 لمنتجات IP الرائدة، مما يقلل التكاليف ويسرع التوصيل.', ko: '2026년 UAE 해외 창고로 탑 IP 제품의 비용 절감 및 배송 시간 향상.', ja: '2026年UAE海外倉庫でトップIP製品のコスト削減と配送時間短縮。' },

  // ============ 联系我们 ============
  'contact_banner_title': { zh: '联系我们', en: 'Contact Us', es: 'Contacto', ar: 'اتصل بنا', ko: '문의하기', ja: 'お問い合わせ' },
  'contact_banner_desc': { zh: '合作共赢，出海无界 — 期待与您交流', en: 'Win-Win Partnership, Borderless Expansion — Let\'s Talk', es: 'Alianza Ganar-Ganar — Hablemos', ar: 'شراكة رابحة، توسع بلا حدود — نتطلع للتواصل معكم', ko: '윈윈 파트너십, 국경 없는 확장 — 대화를 나눠요', ja: 'ウィンウィンパートナーシップ、ボーダレスな展開 — お話しませんか' },
  'contact_info_title': { zh: '合作咨询', en: 'Partnership Inquiry', es: 'Consulta de Cooperación', ar: 'استفسار الشراكة', ko: '제휴 문의', ja: 'パートナーシップ相談' },
  'contact_info_desc': { zh: '无论您是IP品牌方寻求出海渠道、跨境电商卖家寻找供货资源、还是渠道商希望拓展产品线，我们都欢迎您的咨询。以下是我们的联系方式：', en: 'Whether you\'re an IP brand seeking global channels, a cross-border seller looking for supply resources, or a distributor expanding your product line — we welcome your inquiry.', es: 'Ya seas marca IP buscando canales globales, vendedor transfronterizo o distribuidor expandiendo tu línea — bienvenido.', ar: 'سواء كنت علامة IP تبحث عن قنوات عالمية أو بائعاً عابراً للحدود يبحث عن موارد إمداد أو موزعاً يريد توسيع خط المنتجات — نرحب باستفساركم.', ko: 'IP 브랜드가 글로벌 채널을 찾거나, 국경 간 판매자가 공급 자원을 찾거나, 유통업체가 제품 라인을 확장하려는 경우 — 문의를 환영합니다.', ja: 'IPブランドがグローバルチャネルを求めている、越境ECセラーが供給リソースを探している、ディストリビューターが製品ラインを拡大したい — どなたのお問い合わせも歓迎。' },
  'contact_name': { zh: '商务联系人', en: 'Business Contact', es: 'Contacto Comercial', ar: 'جهة الاتصال التجارية', ko: '비즈니스 연락처', ja: 'ビジネス連絡先' },
  'contact_phone': { zh: '联系电话', en: 'Phone', es: 'Teléfono', ar: 'الهاتف', ko: '전화', ja: '電話番号' },
  'contact_phone_note': { zh: '欢迎来电咨询合作事宜', en: 'Feel free to call for partnership inquiries', es: 'Llámenos para consultas de cooperación', ar: 'لا تتردد في الاتصال للاستفسار عن الشراكة', ko: '제휴 문의 전화 환영합니다', ja: 'パートナーシップに関するお電話お気軽にどうぞ' },
  'contact_email': { zh: '工作邮箱', en: 'Email', es: 'Correo Electrónico', ar: 'البريد الإلكتروني', ko: '이메일', ja: 'メール' },
  'contact_company': { zh: '公司名称', en: 'Company', es: 'Empresa', ar: 'الشركة', ko: '회사명', ja: '会社名' },
  'contact_brand': { zh: '品牌名称', en: 'Brand', es: 'Marca', ar: 'العلامة التجارية', ko: '브랜드명', ja: 'ブランド' },
  'contact_brand_desc': { zh: '专注潮玩IP全球商业化', en: 'Global Art Toy IP Commercialization', es: 'Comercialización IP Global', ar: 'التسويق العالمي لألعاب الفن آرت توي', ko: '글로벌 아트토이 IP 상업화', ja: 'グローバルアートトイIP商業化' },
  'contact_form_title': { zh: '在线咨询', en: 'Online Inquiry', es: 'Consulta en Línea', ar: 'استفسار عبر الإنترنت', ko: '온라인 문의', ja: 'オンラインお問い合わせ' },
  'contact_label_name': { zh: '您的姓名 *', en: 'Your Name *', es: 'Su Nombre *', ar: 'الاسم *', ko: '성함 *', ja: 'お名前 *' },
  'contact_ph_name': { zh: '请输入姓名', en: 'Enter your name', es: 'Ingrese su nombre', ar: 'أدخل اسمك', ko: '성함을 입력하세요', ja: 'お名前を入力してください' },
  'contact_label_company': { zh: '公司名称', en: 'Company', es: 'Empresa', ar: 'الشركة', ko: '회사명', ja: '会社名' },
  'contact_ph_company': { zh: '请输入公司名称', en: 'Enter company name', es: 'Ingrese la empresa', ar: 'أدخل اسم الشركة', ko: '회사명을 입력하세요', ja: '会社名を入力してください' },
  'contact_label_phone': { zh: '联系电话 *', en: 'Phone *', es: 'Teléfono *', ar: 'الهاتف *', ko: '연락처 *', ja: '電話番号 *' },
  'contact_ph_phone': { zh: '请输入电话号码', en: 'Enter phone number', es: 'Ingrese el teléfono', ar: 'أدخل رقم الهاتف', ko: '전화번호를 입력하세요', ja: '電話番号を入力してください' },
  'contact_label_wechat': { zh: '微信号', en: 'WeChat', es: 'WeChat', ar: 'WeChat', ko: 'WeChat', ja: 'WeChat' },
  'contact_ph_wechat': { zh: '请输入微信号', en: 'Enter WeChat ID', es: 'Ingrese WeChat', ar: 'أدخل WeChat', ko: 'WeChat ID를 입력하세요', ja: 'WeChat IDを入力してください' },
  'contact_label_identity': { zh: '您的身份', en: 'Your Identity', es: 'Su Identidad', ar: 'هويتك', ko: '귀하의 신분', ja: 'お客様の属性' },
  'contact_ph_identity': { zh: '请选择（可选）', en: 'Select (optional)', es: 'Seleccionar (opcional)', ar: 'اختر (اختياري)', ko: '선택하세요 (선택사항)', ja: '選択してください（任意）' },
  'contact_id_opt1': { zh: 'IP品牌方', en: 'IP Brand', es: 'Marca IP', ar: 'علامة IP', ko: 'IP 브랜드', ja: 'IPブランド' },
  'contact_id_opt2': { zh: '跨境电商卖家', en: 'Cross-border Seller', es: 'Vendedor Transfronterizo', ar: 'بائع عابر للحدود', ko: '국경 간 판매자', ja: '越境ECセラー' },
  'contact_id_opt3': { zh: '渠道商/分销商', en: 'Distributor', es: 'Distribuidor', ar: 'موزع', ko: '유통업체/디스트리뷰터', ja: 'チャネル/ディストリビューター' },
  'contact_id_opt4': { zh: '电商平台商家', en: 'E-commerce Seller', es: 'Vendedor E-commerce', ar: 'بائع تجارة إلكترونية', ko: '이커머스 판매자', ja: 'ECプラットフォーム販売者' },
  'contact_id_opt5': { zh: '其他', en: 'Other', es: 'Otro', ar: 'أخرى', ko: '기타', ja: 'その他' },
  'contact_label_service': { zh: '感兴趣的合作类型', en: 'Partnership Type', es: 'Tipo de Cooperación', ar: 'نوع الشراكة', ko: '관심 제휴 유형', ja: 'ご希望のパートナーシップ' },
  'contact_ph_service': { zh: '请选择合作类型', en: 'Select partnership type', es: 'Seleccionar tipo', ar: 'اختر نوع الشراكة', ko: '제휴 유형을 선택하세요', ja: 'パートナーシップの種類を選択' },
  'contact_svc_opt1': { zh: 'B2B供货合作', en: 'B2B Supply Partnership', es: 'Alianza Suministro B2B', ar: 'شراكة إمداد B2B', ko: 'B2B 공급 파트너십', ja: 'B2B供給パートナーシップ' },
  'contact_svc_opt2': { zh: 'IP授权合作', en: 'IP Licensing Partnership', es: 'Alianza Licenciamiento IP', ar: 'شراكة ترخيص IP', ko: 'IP 라이선스 파트너십', ja: 'IPライセンスパートナーシップ' },
  'contact_svc_opt3': { zh: '盲盒/谷子/卡牌产品', en: 'Blind Box/Merch/Card Products', es: 'Productos Cajas/Merch/Cartas', ar: 'منتجات صناديق عمياء/بضائع/بطاقات', ko: '블라인드박스/굿즈/카드 제품', ja: 'ブラインドボックス/グッズ/カード製品' },
  'contact_svc_opt4': { zh: 'AI玩具产品', en: 'AI Toy Products', es: 'Productos Juguetes IA', ar: 'منتجات ألعاب ذكية', ko: 'AI 장난감 제품', ja: 'AIおもちゃ製品' },
  'contact_svc_opt5': { zh: 'IP定制解决方案', en: 'IP Customization Solutions', es: 'Soluciones Personalización IP', ar: 'حلول تخصيص IP', ko: 'IP 커스터마이징 솔루션', ja: 'IPカスタマイズソリューション' },
  'contact_svc_opt6': { zh: '出海营销合作', en: 'Global Marketing Partnership', es: 'Alianza Marketing Global', ar: 'شراكة تسويق عالمي', ko: '글로벌 마케팅 파트너십', ja: 'グローバルマーケティングパートナーシップ' },
  'contact_svc_opt7': { zh: '全品类合作', en: 'Full-Category Partnership', es: 'Alianza Categoría Completa', ar: 'شراكة شاملة الفئات', ko: '전 카테고리 파트너십', ja: '全カテゴリパートナーシップ' },
  'contact_label_message': { zh: '合作需求描述 *', en: 'Requirements Description *', es: 'Descripción de Requisitos *', ar: 'وصف المتطلبات *', ko: '협력 요구사항 *', ja: 'ご要望の詳細 *' },
  'contact_ph_message': { zh: '请描述您的具体需求，如感兴趣的IP/品类、目标市场、预计合作规模等', en: 'Describe your requirements — interested IPs/categories, target markets, expected scale, etc.', es: 'Describa sus requisitos — IPs/categorías, mercados objetivo, escala esperada, etc.', ar: 'صف متطلباتك — IPs/فئات مهتم بها، أسواق مستهدفة، حجم متوقع، إلخ.', ko: '요구사항을 기술해 주세요 — 관심 IP/카테고리, 목표 시장, 예상 규모 등', ja: 'ご要望を記載ください — 興味のあるIP/カテゴリ、ターゲット市場、想定規模など' },
  'contact_btn': { zh: '提交咨询 →', en: 'Submit Inquiry →', es: 'Enviar Consulta →', ar: 'إرسال الاستفسار ←', ko: '문의 제출 →', ja: '送信 →' },
  'contact_success_title': { zh: '提交成功！', en: 'Submitted Successfully!', es: '¡Enviado con Éxito!', ar: 'تم الإرسال بنجاح!', ko: '제출 완료!', ja: '送信完了！' },
  'contact_success_p1': { zh: '感谢您的咨询，我们将在24小时内与您联系。', en: 'Thank you for your inquiry. We will contact you within 24 hours.', es: 'Gracias por su consulta. Nos pondremos en contacto en 24 horas.', ar: 'شكراً لاستفساركم. سنتواصل معكم خلال 24 ساعة.', ko: '문의해 주셔서 감사합니다. 24시간 이내에 연락드리겠습니다.', ja: 'お問い合わせありがとうございます。24時間以内にご連絡いたします。' },
  'contact_success_p2_prefix': { zh: '紧急事务请直接致电：', en: 'For urgent matters, call: ', es: 'Para asuntos urgentes, llame: ', ar: 'للمسائل العاجلة، اتصل: ', ko: '긴급 사항은 직접 전화주세요: ', ja: '緊急の場合は直接お電話ください：' },

  // ============ 联系我们 - 合作对象 ============
  'contact_target_label': { zh: '合作对象', en: 'Partnership Targets', es: 'Objetivos de Alianza', ar: 'أهداف الشراكة', ko: '파트너십 대상', ja: 'パートナーシップ対象' },
  'contact_target_title': { zh: '我们期待与谁合作', en: 'Who We Work With', es: 'Con Quién Trabajamos', ar: 'مع من نعمل', ko: '누구와 협력하나요', ja: 'パートナーシップを期待するお客様' },
  'target1_title': { zh: 'IP品牌方', en: 'IP Brands', es: 'Marcas IP', ar: 'علامات IP', ko: 'IP 브랜드', ja: 'IPブランド' },
  'target1_desc': { zh: '如果您拥有原创IP或已获得IP授权，我们可提供全球渠道分销、海外营销推广、供应链支持，帮助您的IP快速触达海外消费者。', en: 'If you own original IP or hold IP licensing, we provide global distribution, overseas marketing, and supply chain support.', es: 'Si tiene IP original o licencias, ofrecemos distribución global y marketing.', ar: 'إذا كنت تمتلك IP أصلي أو حصلت على ترخيص IP، نقدم توزيعاً عالمياً وتسويقاً دولياً ودعم سلسلة الإمداد.', ko: '오리지널 IP를 보유하거나 IP 라이선스를 보유한 경우, 글로벌 유통, 해외 마케팅, 공급망 지원을 제공합니다.', ja: 'オリジナルIPを保有、またはIPライセンスを取得している場合、グローバル流通、海外マーケティング、サプライチェーンサポートを提供。' },
  'target2_title': { zh: '跨境电商卖家', en: 'Cross-border Sellers', es: 'Vendedores Transfronterizos', ar: 'بائعون عابرون للحدود', ko: '국경 간 판매자', ja: '越境ECセラー' },
  'target2_desc': { zh: '亚马逊、TikTok、TEMU、SHIEN等平台卖家，我们可提供B2B供货、一件代发、授权支持，出单后拿货，零库存风险。', en: 'Amazon, TikTok, TEMU, SHIEN sellers — B2B supply, drop shipping, and authorization support with zero inventory risk.', es: 'Vendedores de Amazon, TikTok, TEMU, SHIEN — suministro B2B y drop shipping.', ar: 'بائعو Amazon وTikTok وTEMU وSHIEN — إمداد B2B وشحن مباشر ودعم ترخيص بدون مخاطر مخزون.', ko: 'Amazon, TikTok, TEMU, SHIEN 판매자 — B2B 공급, 드롭쉬핑, 라이선스 지원, 재고 리스크 제로.', ja: 'Amazon, TikTok, TEMU, SHIEN販売者 — B2B供給、ドロップシッピング、ライセンスサポート、在庫リスクゼロ。' },
  'target3_title': { zh: '渠道商/分销商', en: 'Distributors', es: 'Distribuidores', ar: 'موزعون', ko: '유통업체/디스트리뷰터', ja: 'チャネル/ディストリビューター' },
  'target3_desc': { zh: '海外线下连锁店、分销商、大卖合作方，我们可提供稳定供货、海外仓支持、授权保障，共同开拓当地市场。', en: 'Overseas retail chains, distributors, and wholesale partners — stable supply, overseas warehouse support, and authorization.', es: 'Cadenas retail, distribuidores — suministro estable, almacenes y autorización.', ar: 'سلاسل البيع بالتجزئة الدولية والموزعين وشركاء الجملة — إمداد مستقر ودعم مستودعات دولية وترخيص.', ko: '해외 오프라인 체인점, 유통업체, 도매 파트너 — 안정적인 공급, 해외 창고 지원, 라이선스 보장.', ja: '海外オフラインチェーン店、ディストリビューター、卸売パートナー — 安定供給、海外倉庫サポート、ライセンス保証。' },
  'target4_title': { zh: '战略合作伙伴', en: 'Strategic Partners', es: 'Socios Estratégicos', ar: 'شركاء استراتيجيون', ko: '전략적 파트너', ja: '戦略的パートナー' },
  'target4_desc': { zh: 'IP授权方、营销机构、物流服务商等，欢迎洽谈深度战略合作，共同构建潮玩出海生态。', en: 'IP licensors, marketing agencies, logistics providers — welcome to discuss deep strategic cooperation.', es: 'Licenciantes IP, agencias de marketing — bienvenidos a cooperación estratégica.', ar: 'مرخصو IP ووكالات تسويق ومقدمو خدمات لوجستية — نرحب بمناقشة التعاون الاستراتيجي العميق.', ko: 'IP 라이선서, 마케팅 에이전시, 물류 서비스 제공업체 — 심층 전략적 협력 논의 환영.', ja: 'IPライセンサー、マーケティングエージェンシー、物流サービスプロバイダー — 深い戦略的提携のご相談を歓迎。' },

  // ============ 联系我们 - FAQ ============
  'contact_faq_label': { zh: '常见问题', en: 'FAQ', es: 'Preguntas Frecuentes', ar: 'الأسئلة الشائعة', ko: '자주 묻는 질문', ja: 'よくある質問' },
  'contact_faq_title': { zh: '合作FAQ', en: 'Partnership FAQ', es: 'FAQ de Cooperación', ar: 'الأسئلة الشائعة عن الشراكة', ko: '제휴 FAQ', ja: 'パートナーシップ FAQ' },
  'faq1_title': { zh: '最小起订量是多少？', en: 'What is the minimum order quantity?', es: '¿Cuál es la cantidad mínima de pedido?', ar: 'ما هو الحد الأدنى للطلب؟', ko: '최소 주문량은 얼마인가요?', ja: '最小注文数はいくつですか？' },
  'faq1_desc': { zh: '一箱起拿，出单后拿货。部分产品支持一件代发，零库存风险，非常适合中小卖家试水新市场。', en: 'One carton minimum, order after sale. Some products support drop shipping — zero inventory risk, ideal for testing new markets.', es: 'Mínimo una caja. Algunos productos con drop shipping — riesgo cero de inventario.', ar: 'الحد الأدنى صندوق واحد، اطلب بعد البيع. بعض المنتجات تدعم الشحن المباشر — بدون مخاطر مخزون.', ko: '최소 1박스, 판매 후 주문. 일부 품목 드롭쉬핑 지원 — 재고 리스크 제로, 신규 시장 테스트에 최적.', ja: '最小1箱、販売後に発注。一部ドロップシッピング対応 — 在庫リスクゼロ、新市場テストに最適。' },
  'faq2_title': { zh: '是否提供IP授权支持？', en: 'Do you provide IP authorization support?', es: '¿Ofrecen soporte de autorización IP?', ar: 'هل تقدمون دعم ترخيص IP؟', ko: 'IP 라이선스 지원을 제공하나요?', ja: 'IPライセンスサポートはありますか？' },
  'faq2_desc': { zh: '是的，我们持有大量国际IP授权资源，大部分产品可提供授权支持。可报备上跨境电商平台，合规经营。', en: 'Yes, we hold extensive international IP licensing. Most products come with authorization support for cross-border platform compliance.', es: 'Sí, contamos con amplias licencias IP internacionales. La mayoría con soporte.', ar: 'نعم، نحمل تراخيص IP دولية واسعة. معظم المنتجات تأتي مع دعم الترخيص.', ko: '네, 광범위한 국제 IP 라이선스를 보유하고 있습니다. 대부분의 제품에 라이선스 지원 제공.', ja: 'はい、豊富な国際IPライセンスを保有。大部分の製品にライセンスサポート付き。' },
  'faq3_title': { zh: '支持哪些出货渠道？', en: 'What sales channels do you support?', es: '¿Qué canales de venta soportan?', ar: 'ما قنوات البيع المدعومة؟', ko: '어떤 출하 채널을 지원하나요?', ja: 'どの出荷チャネルに対応？' },
  'faq3_desc': { zh: 'B2B供货给平台商家 + C端自营（TikTok/TEMU/SHIEN）+ 海外线下门店 + 海外仓（阿联酋），多渠道灵活选择。', en: 'B2B supply + Direct sales (TikTok/TEMU/SHIEN) + Offline stores + Overseas warehouses (UAE) — flexible multi-channel.', es: 'Suministro B2B + Ventas directas + Tiendas + Almacenes (EAU) — multicanal flexible.', ar: 'إمداد B2B + مبيعات مباشرة + متاجر + مستودعات دولية — قنوات مرنة متعددة.', ko: 'B2B 공급 + 직영 판매 + 오프라인 매장 + 해외 창고(UAE) — 유연한 멀티채널.', ja: 'B2B供給 + 直営販売 + オフライン店舗 + 海外倉庫(UAE) — 柔軟なマルチチャネル。' },
  'faq4_title': { zh: 'AI玩具是否支持出口？', en: 'Are AI toys available for export?', es: '¿Los juguetes IA están disponibles para exportación?', ar: 'هل الألعاب الذكية متاحة للتصدير؟', ko: 'AI 장난감 수출이 가능한가요?', ja: 'AIおもちゃは輸出対応？' },
  'faq4_desc': { zh: '支持。AI毛绒玩具支持40+国语言，搭载海外版ChatGPT/Google大模型，专为出海市场设计。', en: 'Yes. AI plush toys support 40+ languages with overseas ChatGPT/Google LLM, designed for global markets.', es: 'Sí. Los peluches IA soportan 40+ idiomas con ChatGPT/Google, diseñados para mercados globales.', ar: 'نعم. الألعاب المحشوة الذكية تدعم أكثر من 40 لغة مع ChatGPT/Google العالمي، مصممة للأسواق العالمية.', ko: '네. AI 인형은 40+개국 언어를 지원하며, 해외용 ChatGPT/Google LLM을 탑재하여 글로벌 시장용으로 설계되었습니다.', ja: 'はい。AIぬいぐるみは40+ヶ国語対応、海外版ChatGPT/Google LLM搭載、グローバル市場向けに設計。' },

  // ============ Footer ============
  'footer_nav': { zh: '快速导航', en: 'Quick Links', es: 'Enlaces Rápidos', ar: 'روابط سريعة', ko: '빠른 링크', ja: 'クイックリンク' },
  'footer_biz': { zh: '业务板块', en: 'Business', es: 'Negocio', ar: 'الأعمال', ko: '비즈니스', ja: 'ビジネス' },
  'footer_contact': { zh: '联系方式', en: 'Contact', es: 'Contacto', ar: 'اتصل بنا', ko: '연락처', ja: 'お問い合わせ' },
  'footer_brand_desc': { zh: '潜鲸出海国际贸易有限公司<br>专注潮玩IP全球商业化', en: 'Shenzhen Qianjing ChuHai Trading Co., Ltd.<br>Global Art Toy IP Commercialization', es: 'Shenzhen Qianjing ChuHai Trading Co., Ltd.<br>Comercialización IP Global', ar: 'Shenzhen Qianjing ChuHai Trading Co., Ltd.<br>التسويق العالمي لألعاب الفن آرت توي', ko: 'Shenzhen Qianjing ChuHai Trading Co., Ltd.<br>글로벌 아트토이 IP 상업화', ja: 'Shenzhen Qianjing ChuHai Trading Co., Ltd.<br>グローバルアートトイIP商業化' },
  'footer_biz1': { zh: '潮玩供应链', en: 'Art Toy Supply Chain', es: 'Cadena de Suministro', ar: 'سلسلة إمداد ألعاب الفن', ko: '아트토이 공급망', ja: 'アートトイサプライチェーン' },
  'footer_biz2': { zh: '影视动漫周边', en: 'Entertainment Merchandise', es: 'Merchandise Entretenimiento', ar: 'بضائع الترفيه', ko: '엔터테인먼트 굿즈', ja: 'エンタメグッズ' },
  'footer_biz3': { zh: 'IP授权与定制', en: 'IP Licensing', es: 'Licenciamiento IP', ar: 'ترخيص IP', ko: 'IP 라이선스', ja: 'IPライセンス' },
  'footer_biz4': { zh: '出海营销', en: 'Global Marketing', es: 'Marketing Global', ar: 'التسويق العالمي', ko: '글로벌 마케팅', ja: 'グローバルマーケティング' },
  'footer_city': { zh: '深圳市龙岗区天安云谷', en: 'Tian\'an Cloud Park, Longgang, Shenzhen', es: 'Parque Cloud Tian\'an, Longgang, Shenzhen', ar: 'حديقة تيانآن السحابية، لونغغانغ، شنتشن', ko: 'Tian\'an Cloud Park, Longgang, Shenzhen', ja: 'Tian\'an Cloud Park, Longgang, Shenzhen' },
};

// ============ 语言切换引擎 ============
const LANG_KEY = 'kokox_lang';
const SUPPORTED_LANGS = ['zh', 'en', 'es', 'ar', 'ko', 'ja'];
const LANG_NAMES = { zh: '中文', en: 'EN', es: 'ES', ar: 'العربية', ko: '한국어', ja: '日本語' };
const RTL_LANGS = ['ar'];

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'zh';
}

function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = 'zh';
  localStorage.setItem(LANG_KEY, lang);
  // 设置 lang 属性
  if (lang === 'zh') {
    document.documentElement.lang = 'zh-CN';
  } else {
    document.documentElement.lang = lang;
  }
  // 设置 RTL/LTR
  if (RTL_LANGS.includes(lang)) {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }
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
  // 设置 lang 属性
  if (lang === 'zh') {
    document.documentElement.lang = 'zh-CN';
  } else {
    document.documentElement.lang = lang;
  }
  // 设置 RTL/LTR
  if (RTL_LANGS.includes(lang)) {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }
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
