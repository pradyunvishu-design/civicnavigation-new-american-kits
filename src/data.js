export const supportedLanguages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'ar', name: 'العربية' },
  { code: 'zh', name: '中文' },
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'ur', name: 'اردو' }
];

export const rtlLanguages = ['ar', 'ur'];

const tx = (en, es, ar, zh, vi, hi, ur) => ({ en, es, ar, zh, vi, hi, ur });

export const locales = {
  en: {
    nav: {
      home: 'Home',
      directory: 'Directory',
      guides: 'Guides',
      partners: 'Partners',
      volunteer: 'Volunteer',
      about: 'About',
      emergency: 'Emergency'
    },
    home: {
      eyebrow: 'Fulshear civic navigation node',
      title: 'A visible path from local need to trusted help.',
      subtitle: 'New American Kits turns verified Fulshear and Fort Bend resources into a multilingual story, print kit, and searchable civic portal.',
      primary: 'Find local help',
      secondary: 'Read the guides',
      storyEyebrow: 'Scroll story',
      storyTitle: 'From one glowing point on the map to a family finding the right door.',
      chapters: [
        ['01 // The Node', 'Fulshear is the starting point: a fast-growing city where new families need local help that is easy to trust.'],
        ['02 // The Gap', 'Food, clinics, schools, utilities, and legal help exist, but they are scattered across departments, websites, and phone trees.'],
        ['03 // The Kit', 'Students translate the maze into printed guides, QR paths, and plain-language next steps.'],
        ['04 // The Portal', 'The website keeps the kit current with search, categories, emergency resources, and a Civic Navigator chatbot.']
      ],
      portalTitle: 'Verified regional resources',
      portalText: 'Fulshear-first when possible; Fort Bend, Katy, and Richmond providers when they are the nearest realistic access point.',
      modelTitle: 'Ink, paper, and a live directory.',
      modelText: 'The visual system is intentionally calm: map-like, structured, and translation-safe so long labels wrap instead of breaking layouts.',
      actionTitle: 'Built by students. Checked against source pages.',
      actionText: 'Each listing includes a source link and verification date so the Key Club review team can keep the printed kit aligned with the live portal.'
    },
    pages: {
      directoryTitle: 'Resource Directory',
      directoryDesc: 'Search verified Fulshear, Fort Bend, Katy, and Richmond resources by life situation.',
      guidesTitle: 'Step-by-Step Guides',
      guidesDesc: 'Plain-language instructions for the most common civic navigation tasks.',
      partnersTitle: 'Community Partners',
      partnersDesc: 'Trusted touchpoints for kit distribution, referrals, and updates.',
      volunteerTitle: 'Volunteer & Get Involved',
      volunteerDesc: 'A student operating model for research, translation, distribution, and upkeep.',
      feedbackTitle: 'Community Feedback',
      feedbackDesc: 'Report outdated information, suggest a resource, request translation help, or ask a question.',
      aboutTitle: 'About the Project',
      aboutDesc: 'A Fulshear Key Club initiative making civic support visible, local, plain-language, and multilingual.',
      emergencyTitle: 'Emergency Resources',
      emergencyDesc: 'For urgent danger or a life-threatening crisis, call 911 immediately.'
    },
    labels: {
      search: 'Search',
      searchPlaceholder: 'Search resources, guides, or organizations...',
      allResources: 'All resources',
      lifeSituations: 'Life situations',
      verified: 'Verified local results',
      items: 'items',
      source: 'Source',
      lastVerified: 'Verified',
      areaServed: 'Area served',
      hours: 'Hours',
      languages: 'Languages',
      cost: 'Cost',
      transit: 'Transit',
      eligibility: 'Eligibility',
      documents: 'Documents',
      contact: 'Contact',
      services: 'Services',
      website: 'Website',
      call: 'Call',
      categoryScope: 'Category scope',
      relatedGuides: 'Read related guides',
      noResults: 'No matching resources found. Try a broader search term.',
      sourceNote: 'Use the source link before visiting; hours and eligibility can change.'
    },
    forms: {
      name: 'Name',
      email: 'Email',
      role: 'Preferred role',
      why: 'Why do you want to help?',
      saveInterest: 'Save interest form',
      feedbackType: 'Feedback type',
      organization: 'Organization name',
      details: 'Details',
      submitFeedback: 'Submit feedback',
      received: 'Feedback received',
      receivedBody: 'The student review team will verify the details before updating public listings.',
      another: 'Submit another',
      tabs: ['Outdated info', 'Suggest resource', 'Translation', 'Success story', 'Question']
    },
    chatbot: {
      title: 'Civic Navigator',
      welcome: 'Welcome to the Civic Navigator. Choose a prompt or type what your family needs help with.',
      placeholder: 'Type your question...',
      close: 'Close',
      unknown: "I could not find a direct match. Try one of the quick prompts or search the Resource Directory.",
      footnote: 'Emergency medical services stabilize emergencies regardless of status. Do not submit SSNs here.',
      prompts: ['I need food', 'Utility bills', 'Find a doctor', 'Enroll in school', 'Legal aid', 'Transportation', 'Emergency help', 'Documents']
    },
    misc: {
      liveOps: 'Live operations',
      trackerTitle: 'What families ask for shapes what students print next.',
      portalConsultations: 'Portal consultations',
      outwardReferrals: 'Outward referrals',
      trackedClicks: 'Tracked clicks',
      mostConsulted: 'Most consulted',
      documentsNeeded: 'Documents',
      safetyNote: 'Safety note',
      guide: 'Guide',
      urgent: 'Urgent help',
      footer: 'Fulshear Key Club’s student-led civic navigation project.',
      research: 'Research basis'
    }
  },
  es: {
    nav: { home: 'Inicio', directory: 'Directorio', guides: 'Guías', partners: 'Aliados', volunteer: 'Voluntariado', about: 'Acerca de', emergency: 'Emergencia' },
    home: {
      eyebrow: 'Nodo de navegación cívica de Fulshear',
      title: 'Un camino visible desde una necesidad local hasta ayuda confiable.',
      subtitle: 'New American Kits convierte recursos verificados de Fulshear y Fort Bend en una historia multilingüe, un kit impreso y un portal cívico searchable.',
      primary: 'Encontrar ayuda local',
      secondary: 'Leer las guías',
      storyEyebrow: 'Historia al desplazarse',
      storyTitle: 'De un punto brillante en el mapa a una familia que encuentra la puerta correcta.',
      chapters: [
        ['01 // El nodo', 'Fulshear es el punto de partida: una ciudad de rápido crecimiento donde las familias nuevas necesitan ayuda local fácil de confiar.'],
        ['02 // La brecha', 'Hay comida, clínicas, escuelas, servicios públicos y ayuda legal, pero están dispersos entre departamentos, sitios web y teléfonos.'],
        ['03 // El kit', 'Los estudiantes traducen el laberinto en guías impresas, rutas QR y pasos claros.'],
        ['04 // El portal', 'El sitio mantiene el kit actualizado con búsqueda, categorías, recursos de emergencia y un chatbot Civic Navigator.']
      ],
      portalTitle: 'Recursos regionales verificados',
      portalText: 'Primero Fulshear cuando sea posible; Fort Bend, Katy y Richmond cuando sean el punto de acceso más realista.',
      modelTitle: 'Tinta, papel y un directorio vivo.',
      modelText: 'El sistema visual es tranquilo, tipo mapa y seguro para traducciones largas.',
      actionTitle: 'Creado por estudiantes. Revisado con fuentes oficiales.',
      actionText: 'Cada listado incluye enlace de fuente y fecha de verificación para mantener alineado el kit impreso con el portal.'
    },
    pages: {
      directoryTitle: 'Directorio de Recursos',
      directoryDesc: 'Busque recursos verificados de Fulshear, Fort Bend, Katy y Richmond por situación de vida.',
      guidesTitle: 'Guías Paso a Paso',
      guidesDesc: 'Instrucciones claras para las tareas más comunes de navegación cívica.',
      partnersTitle: 'Aliados Comunitarios',
      partnersDesc: 'Puntos confiables para distribuir kits, hacer referencias y actualizar información.',
      volunteerTitle: 'Voluntariado y Participación',
      volunteerDesc: 'Un modelo estudiantil para investigación, traducción, distribución y mantenimiento.',
      feedbackTitle: 'Comentarios Comunitarios',
      feedbackDesc: 'Reporte información vencida, sugiera recursos, pida ayuda de traducción o haga una pregunta.',
      aboutTitle: 'Acerca del Proyecto',
      aboutDesc: 'Una iniciativa de Fulshear Key Club para hacer el apoyo cívico visible, local, claro y multilingüe.',
      emergencyTitle: 'Recursos de Emergencia',
      emergencyDesc: 'Si hay peligro urgente o una crisis de vida o muerte, llame al 911 de inmediato.'
    },
    labels: {
      search: 'Buscar', searchPlaceholder: 'Buscar recursos, guías u organizaciones...', allResources: 'Todos los recursos',
      lifeSituations: 'Situaciones de vida', verified: 'Resultados locales verificados', items: 'elementos', source: 'Fuente',
      lastVerified: 'Verificado', areaServed: 'Área atendida', hours: 'Horario', languages: 'Idiomas', cost: 'Costo',
      transit: 'Transporte', eligibility: 'Elegibilidad', documents: 'Documentos', contact: 'Contacto', services: 'Servicios',
      website: 'Sitio web', call: 'Llamar', categoryScope: 'Alcance de categoría', relatedGuides: 'Leer guías relacionadas',
      noResults: 'No se encontraron recursos. Intente una búsqueda más amplia.', sourceNote: 'Revise la fuente antes de visitar; horarios y elegibilidad pueden cambiar.'
    },
    forms: {
      name: 'Nombre', email: 'Correo electrónico', role: 'Rol preferido', why: '¿Por qué quiere ayudar?', saveInterest: 'Guardar interés',
      feedbackType: 'Tipo de comentario', organization: 'Nombre de la organización', details: 'Detalles', submitFeedback: 'Enviar comentario',
      received: 'Comentario recibido', receivedBody: 'El equipo estudiantil verificará los detalles antes de actualizar los listados.', another: 'Enviar otro',
      tabs: ['Información vencida', 'Sugerir recurso', 'Traducción', 'Historia de éxito', 'Pregunta']
    },
    chatbot: {
      title: 'Navegador Cívico', welcome: 'Bienvenido al Navegador Cívico. Elija una pregunta o escriba lo que necesita su familia.',
      placeholder: 'Escriba su pregunta...', close: 'Cerrar', unknown: 'No encontré una respuesta directa. Pruebe una sugerencia o busque en el Directorio.',
      footnote: 'Los servicios médicos de emergencia estabilizan emergencias sin importar estatus. No envíe SSN aquí.',
      prompts: ['Necesito comida', 'Servicios públicos', 'Encontrar doctor', 'Inscribir escuela', 'Ayuda legal', 'Transporte', 'Emergencia', 'Documentos']
    },
    misc: {
      liveOps: 'Operaciones en vivo', trackerTitle: 'Lo que preguntan las familias guía lo que los estudiantes imprimen después.',
      portalConsultations: 'Consultas del portal', outwardReferrals: 'Referencias externas', trackedClicks: 'Clics registrados',
      mostConsulted: 'Más consultado', documentsNeeded: 'Documentos', safetyNote: 'Nota de seguridad', guide: 'Guía',
      urgent: 'Ayuda urgente', footer: 'Proyecto de navegación cívica dirigido por estudiantes de Fulshear Key Club.', research: 'Base de investigación'
    }
  },
  ar: {
    nav: { home: 'الرئيسية', directory: 'الدليل', guides: 'الأدلة', partners: 'الشركاء', volunteer: 'تطوع', about: 'حول', emergency: 'طوارئ' },
    home: {
      eyebrow: 'نقطة ملاحة مدنية في فولشير',
      title: 'طريق واضح من الحاجة المحلية إلى المساعدة الموثوقة.',
      subtitle: 'تحوّل New American Kits موارد فولشير وفورت بند الموثقة إلى قصة متعددة اللغات، وكتيب مطبوع، وبوابة مدنية قابلة للبحث.',
      primary: 'ابحث عن مساعدة محلية',
      secondary: 'اقرأ الأدلة',
      storyEyebrow: 'قصة بالتمرير',
      storyTitle: 'من نقطة مضيئة على الخريطة إلى عائلة تجد الباب الصحيح.',
      chapters: [
        ['01 // النقطة', 'فولشير هي نقطة البداية: مدينة تنمو بسرعة وتحتاج فيها العائلات الجديدة إلى مساعدة محلية موثوقة وسهلة الفهم.'],
        ['02 // الفجوة', 'توجد المساعدات الغذائية والعيادات والمدارس والمرافق والمساعدة القانونية، لكنها متفرقة بين مواقع وهواتف وإدارات.'],
        ['03 // الكتيب', 'يحوّل الطلاب هذا التعقيد إلى أدلة مطبوعة وروابط QR وخطوات بسيطة.'],
        ['04 // البوابة', 'يحافظ الموقع على تحديث الكتيب من خلال البحث والفئات وموارد الطوارئ وروبوت Civic Navigator.']
      ],
      portalTitle: 'موارد إقليمية موثقة',
      portalText: 'الأولوية لفولشير عندما يكون ذلك ممكناً، ثم فورت بند وكاتي وريتشموند عندما تكون أقرب نقطة خدمة واقعية.',
      modelTitle: 'حبر وورق ودليل حي.',
      modelText: 'النظام البصري هادئ ومنظم ومصمم ليستوعب النصوص الطويلة في اللغات المختلفة.',
      actionTitle: 'بناه الطلاب. وتمت مراجعته من المصادر.',
      actionText: 'يتضمن كل مورد رابط المصدر وتاريخ التحقق حتى يبقى الكتيب المطبوع متوافقاً مع البوابة.'
    },
    pages: {
      directoryTitle: 'دليل الموارد', directoryDesc: 'ابحث عن موارد موثقة في فولشير وفورت بند وكاتي وريتشموند حسب الحاجة.',
      guidesTitle: 'أدلة خطوة بخطوة', guidesDesc: 'تعليمات بسيطة لأكثر مهام الملاحة المدنية شيوعاً.',
      partnersTitle: 'شركاء المجتمع', partnersDesc: 'نقاط موثوقة لتوزيع الكتيبات والإحالات والتحديثات.',
      volunteerTitle: 'التطوع والمشاركة', volunteerDesc: 'نموذج طلابي للبحث والترجمة والتوزيع والصيانة.',
      feedbackTitle: 'ملاحظات المجتمع', feedbackDesc: 'أبلغ عن معلومات قديمة أو اقترح مورداً أو اطلب ترجمة أو اطرح سؤالاً.',
      aboutTitle: 'حول المشروع', aboutDesc: 'مبادرة من Fulshear Key Club لجعل الدعم المدني واضحاً ومحلياً وسهل اللغة ومتعدد اللغات.',
      emergencyTitle: 'موارد الطوارئ', emergencyDesc: 'في خطر عاجل أو أزمة تهدد الحياة، اتصل فوراً بالرقم 911.'
    },
    labels: {
      search: 'بحث', searchPlaceholder: 'ابحث عن موارد أو أدلة أو منظمات...', allResources: 'كل الموارد', lifeSituations: 'احتياجات الحياة',
      verified: 'نتائج محلية موثقة', items: 'عنصر', source: 'المصدر', lastVerified: 'تم التحقق', areaServed: 'منطقة الخدمة',
      hours: 'الساعات', languages: 'اللغات', cost: 'التكلفة', transit: 'المواصلات', eligibility: 'الأهلية', documents: 'الوثائق',
      contact: 'التواصل', services: 'الخدمات', website: 'الموقع', call: 'اتصل', categoryScope: 'نطاق الفئة',
      relatedGuides: 'اقرأ الأدلة ذات الصلة', noResults: 'لم يتم العثور على موارد مطابقة. جرّب بحثاً أوسع.',
      sourceNote: 'راجع رابط المصدر قبل الزيارة؛ قد تتغير الساعات والأهلية.'
    },
    forms: {
      name: 'الاسم', email: 'البريد الإلكتروني', role: 'الدور المفضل', why: 'لماذا تريد المساعدة؟', saveInterest: 'حفظ نموذج الاهتمام',
      feedbackType: 'نوع الملاحظة', organization: 'اسم المنظمة', details: 'التفاصيل', submitFeedback: 'إرسال الملاحظة',
      received: 'تم استلام الملاحظة', receivedBody: 'سيتحقق فريق الطلاب من التفاصيل قبل تحديث القوائم.', another: 'إرسال أخرى',
      tabs: ['معلومة قديمة', 'اقتراح مورد', 'ترجمة', 'قصة نجاح', 'سؤال']
    },
    chatbot: {
      title: 'الملاح المدني', welcome: 'مرحباً بك في الملاح المدني. اختر سؤالاً أو اكتب ما تحتاجه عائلتك.',
      placeholder: 'اكتب سؤالك...', close: 'إغلاق', unknown: 'لم أجد إجابة مباشرة. جرّب أحد الاقتراحات أو ابحث في الدليل.',
      footnote: 'خدمات الطوارئ الطبية تثبت الحالات الطارئة بغض النظر عن الوضع. لا ترسل أرقام ضمان اجتماعي هنا.',
      prompts: ['أحتاج طعاماً', 'فواتير المرافق', 'طبيب', 'تسجيل المدرسة', 'مساعدة قانونية', 'مواصلات', 'طوارئ', 'وثائق']
    },
    misc: {
      liveOps: 'عمليات مباشرة', trackerTitle: 'ما تسأل عنه العائلات يوجه ما يطبعه الطلاب لاحقاً.',
      portalConsultations: 'استشارات البوابة', outwardReferrals: 'إحالات خارجية', trackedClicks: 'نقرات مسجلة',
      mostConsulted: 'الأكثر طلباً', documentsNeeded: 'الوثائق', safetyNote: 'ملاحظة أمان', guide: 'دليل',
      urgent: 'مساعدة عاجلة', footer: 'مشروع ملاحة مدنية طلابي من Fulshear Key Club.', research: 'أساس البحث'
    }
  }
};

locales.zh = {
  ...locales.en,
  nav: { home: '首页', directory: '目录', guides: '指南', partners: '伙伴', volunteer: '志愿者', about: '关于', emergency: '紧急' },
  home: {
    ...locales.en.home,
    eyebrow: 'Fulshear 公共服务导航节点',
    title: '从本地需求到可信帮助的清晰路径。',
    subtitle: 'New American Kits 将 Fulshear 和 Fort Bend 的核实资源整理成多语言故事、纸质套件和可搜索门户。',
    primary: '查找本地帮助',
    secondary: '阅读指南',
    storyEyebrow: '滚动故事',
    storyTitle: '从地图上的一个亮点，到一个家庭找到正确的门。',
    portalTitle: '已核实区域资源',
    portalText: '能用 Fulshear 资源时优先使用；否则使用 Fort Bend、Katy 和 Richmond 的现实服务点。',
    modelTitle: '墨水、纸张和实时目录。',
    modelText: '视觉系统平静、结构化，并能容纳较长翻译文本。',
    actionTitle: '由学生建立，并按来源页面检查。',
    actionText: '每个条目都有来源链接和验证日期，帮助纸质套件与网站保持一致。'
  },
  pages: {
    directoryTitle: '资源目录', directoryDesc: '按生活需求搜索 Fulshear、Fort Bend、Katy 和 Richmond 的已核实资源。',
    guidesTitle: '分步指南', guidesDesc: '常见公共服务事项的简明说明。',
    partnersTitle: '社区伙伴', partnersDesc: '用于发放套件、转介和更新信息的可信地点。',
    volunteerTitle: '志愿服务', volunteerDesc: '学生主导的研究、翻译、发放和维护模式。',
    feedbackTitle: '社区反馈', feedbackDesc: '报告过期信息、推荐资源、请求翻译帮助或提出问题。',
    aboutTitle: '关于项目', aboutDesc: 'Fulshear Key Club 发起的本地、多语言、清晰公共资源导航项目。',
    emergencyTitle: '紧急资源', emergencyDesc: '如有紧急危险或危及生命的情况，请立即拨打 911。'
  },
  labels: { ...locales.en.labels, search: '搜索', allResources: '所有资源', lifeSituations: '生活需求', website: '网站', call: '拨打', items: '项' },
  forms: {
    ...locales.en.forms,
    name: '姓名', email: '电子邮件', role: '首选角色', why: '为什么想帮忙？', saveInterest: '保存意向',
    feedbackType: '反馈类型', organization: '机构名称', details: '详情', submitFeedback: '提交反馈',
    received: '已收到反馈', receivedBody: '学生审核团队会先核实信息再更新公开列表。', another: '再提交一个',
    tabs: ['过期信息', '推荐资源', '翻译', '成功故事', '问题']
  },
  misc: {
    ...locales.en.misc,
    liveOps: '实时运行', trackerTitle: '家庭提出的问题会影响学生下一步印刷内容。',
    portalConsultations: '门户咨询', outwardReferrals: '外部转介', trackedClicks: '记录点击',
    mostConsulted: '最常咨询', documentsNeeded: '文件', safetyNote: '安全提示', guide: '指南',
    urgent: '紧急帮助', footer: 'Fulshear Key Club 学生主导的公共服务导航项目。', research: '研究基础'
  },
  chatbot: { ...locales.en.chatbot, title: '公共服务导航员', placeholder: '输入您的问题...', close: '关闭', prompts: ['我需要食物', '水电账单', '找医生', '学校注册', '法律帮助', '交通', '紧急帮助', '文件'] }
};

locales.vi = {
  ...locales.en,
  nav: { home: 'Trang chủ', directory: 'Danh mục', guides: 'Hướng dẫn', partners: 'Đối tác', volunteer: 'Tình nguyện', about: 'Giới thiệu', emergency: 'Khẩn cấp' },
  home: {
    ...locales.en.home,
    eyebrow: 'Nút điều hướng công dân Fulshear',
    title: 'Một đường đi rõ ràng từ nhu cầu địa phương đến trợ giúp đáng tin.',
    subtitle: 'New American Kits biến tài nguyên đã xác minh ở Fulshear và Fort Bend thành câu chuyện đa ngôn ngữ, bộ in và cổng tìm kiếm.',
    primary: 'Tìm trợ giúp địa phương',
    secondary: 'Đọc hướng dẫn',
    storyEyebrow: 'Câu chuyện cuộn',
    storyTitle: 'Từ một điểm sáng trên bản đồ đến gia đình tìm đúng cánh cửa.',
    portalTitle: 'Tài nguyên khu vực đã xác minh',
    portalText: 'Ưu tiên Fulshear khi có thể; dùng Fort Bend, Katy, Richmond khi đó là điểm thực tế nhất.',
    modelTitle: 'Mực, giấy và danh mục sống.',
    modelText: 'Thiết kế bình tĩnh, có cấu trúc và không vỡ khi văn bản dịch dài.',
    actionTitle: 'Do học sinh xây dựng. Kiểm tra theo nguồn.',
    actionText: 'Mỗi mục có liên kết nguồn và ngày xác minh để bộ in luôn khớp với cổng web.'
  },
  pages: {
    directoryTitle: 'Danh mục Tài nguyên', directoryDesc: 'Tìm tài nguyên đã xác minh ở Fulshear, Fort Bend, Katy và Richmond theo nhu cầu.',
    guidesTitle: 'Hướng dẫn từng bước', guidesDesc: 'Hướng dẫn dễ hiểu cho các bước hỗ trợ phổ biến.',
    partnersTitle: 'Đối tác Cộng đồng', partnersDesc: 'Các điểm tin cậy để phát bộ kit, giới thiệu và cập nhật.',
    volunteerTitle: 'Tình nguyện & Tham gia', volunteerDesc: 'Mô hình học sinh phụ trách nghiên cứu, dịch thuật, phân phối và bảo trì.',
    feedbackTitle: 'Phản hồi Cộng đồng', feedbackDesc: 'Báo thông tin cũ, đề xuất tài nguyên, yêu cầu dịch thuật hoặc đặt câu hỏi.',
    aboutTitle: 'Về Dự án', aboutDesc: 'Sáng kiến của Fulshear Key Club giúp hỗ trợ công dân rõ ràng, địa phương và đa ngôn ngữ.',
    emergencyTitle: 'Tài nguyên Khẩn cấp', emergencyDesc: 'Nếu có nguy hiểm khẩn cấp hoặc đe dọa tính mạng, hãy gọi 911 ngay.'
  },
  labels: { ...locales.en.labels, search: 'Tìm kiếm', allResources: 'Tất cả tài nguyên', lifeSituations: 'Nhu cầu đời sống', website: 'Trang web', call: 'Gọi', items: 'mục' },
  forms: {
    ...locales.en.forms,
    name: 'Tên', email: 'Email', role: 'Vai trò mong muốn', why: 'Vì sao bạn muốn giúp?', saveInterest: 'Lưu biểu mẫu',
    feedbackType: 'Loại phản hồi', organization: 'Tên tổ chức', details: 'Chi tiết', submitFeedback: 'Gửi phản hồi',
    received: 'Đã nhận phản hồi', receivedBody: 'Nhóm học sinh sẽ xác minh trước khi cập nhật công khai.', another: 'Gửi phản hồi khác',
    tabs: ['Thông tin cũ', 'Đề xuất tài nguyên', 'Dịch thuật', 'Câu chuyện thành công', 'Câu hỏi']
  },
  misc: {
    ...locales.en.misc,
    liveOps: 'Hoạt động trực tiếp', trackerTitle: 'Điều gia đình hỏi sẽ định hướng nội dung học sinh in tiếp theo.',
    portalConsultations: 'Tư vấn cổng', outwardReferrals: 'Giới thiệu ra ngoài', trackedClicks: 'Lượt nhấp',
    mostConsulted: 'Được hỏi nhiều', documentsNeeded: 'Giấy tờ', safetyNote: 'Lưu ý an toàn', guide: 'Hướng dẫn',
    urgent: 'Trợ giúp khẩn cấp', footer: 'Dự án điều hướng công dân do học sinh Fulshear Key Club thực hiện.', research: 'Nền tảng nghiên cứu'
  },
  chatbot: { ...locales.en.chatbot, title: 'Civic Navigator', placeholder: 'Nhập câu hỏi...', close: 'Đóng', prompts: ['Cần thực phẩm', 'Hóa đơn tiện ích', 'Tìm bác sĩ', 'Ghi danh trường', 'Trợ giúp pháp lý', 'Giao thông', 'Khẩn cấp', 'Giấy tờ'] }
};

locales.hi = {
  ...locales.en,
  nav: { home: 'होम', directory: 'निर्देशिका', guides: 'मार्गदर्शिका', partners: 'साझेदार', volunteer: 'स्वयंसेवक', about: 'परिचय', emergency: 'आपातकाल' },
  home: {
    ...locales.en.home,
    eyebrow: 'Fulshear नागरिक नेविगेशन नोड',
    title: 'स्थानीय जरूरत से भरोसेमंद मदद तक साफ रास्ता।',
    subtitle: 'New American Kits सत्यापित Fulshear और Fort Bend संसाधनों को बहुभाषी कहानी, प्रिंट किट और खोज योग्य पोर्टल में बदलता है।',
    primary: 'स्थानीय मदद खोजें',
    secondary: 'गाइड पढ़ें',
    storyEyebrow: 'स्क्रॉल कहानी',
    storyTitle: 'मानचित्र के चमकते बिंदु से परिवार के सही दरवाज़े तक।',
    portalTitle: 'सत्यापित क्षेत्रीय संसाधन',
    portalText: 'जहां संभव हो Fulshear पहले; फिर Fort Bend, Katy और Richmond के वास्तविक सेवा बिंदु।',
    modelTitle: 'स्याही, कागज़ और लाइव निर्देशिका।',
    modelText: 'डिज़ाइन शांत, संरचित और लंबे अनुवादों के लिए सुरक्षित है।',
    actionTitle: 'छात्रों ने बनाया। स्रोतों से जांचा।',
    actionText: 'हर सूची में स्रोत लिंक और सत्यापन तारीख है ताकि प्रिंट किट और पोर्टल साथ रहें।'
  },
  pages: {
    directoryTitle: 'संसाधन निर्देशिका', directoryDesc: 'जीवन की जरूरत के अनुसार Fulshear, Fort Bend, Katy और Richmond के सत्यापित संसाधन खोजें।',
    guidesTitle: 'चरण-दर-चरण मार्गदर्शिका', guidesDesc: 'सामान्य नागरिक सहायता कार्यों के लिए सरल निर्देश।',
    partnersTitle: 'समुदाय साझेदार', partnersDesc: 'किट वितरण, रेफरल और अपडेट के लिए विश्वसनीय स्थान।',
    volunteerTitle: 'स्वयंसेवा और भागीदारी', volunteerDesc: 'शोध, अनुवाद, वितरण और रखरखाव के लिए छात्र-नेतृत्व मॉडल।',
    feedbackTitle: 'समुदाय प्रतिक्रिया', feedbackDesc: 'पुरानी जानकारी बताएं, संसाधन सुझाएं, अनुवाद सहायता मांगें या प्रश्न पूछें।',
    aboutTitle: 'परियोजना के बारे में', aboutDesc: 'Fulshear Key Club की पहल जो नागरिक सहायता को स्थानीय, स्पष्ट और बहुभाषी बनाती है।',
    emergencyTitle: 'आपातकालीन संसाधन', emergencyDesc: 'तत्काल खतरे या जीवन-धमकी संकट में तुरंत 911 पर कॉल करें।'
  },
  labels: { ...locales.en.labels, search: 'खोजें', allResources: 'सभी संसाधन', lifeSituations: 'जीवन की जरूरतें', website: 'वेबसाइट', call: 'कॉल करें', items: 'आइटम' },
  forms: {
    ...locales.en.forms,
    name: 'नाम', email: 'ईमेल', role: 'पसंदीदा भूमिका', why: 'आप मदद क्यों करना चाहते हैं?', saveInterest: 'रुचि सहेजें',
    feedbackType: 'प्रतिक्रिया प्रकार', organization: 'संस्था का नाम', details: 'विवरण', submitFeedback: 'प्रतिक्रिया भेजें',
    received: 'प्रतिक्रिया मिली', receivedBody: 'छात्र टीम सार्वजनिक सूची अपडेट करने से पहले विवरण जांचेगी।', another: 'एक और भेजें',
    tabs: ['पुरानी जानकारी', 'संसाधन सुझाएं', 'अनुवाद', 'सफलता कहानी', 'प्रश्न']
  },
  misc: {
    ...locales.en.misc,
    liveOps: 'लाइव संचालन', trackerTitle: 'परिवारों के सवाल तय करते हैं कि छात्र आगे क्या छापेंगे।',
    portalConsultations: 'पोर्टल सलाह', outwardReferrals: 'बाहरी रेफरल', trackedClicks: 'क्लिक',
    mostConsulted: 'सबसे ज्यादा पूछा गया', documentsNeeded: 'दस्तावेज', safetyNote: 'सुरक्षा नोट', guide: 'गाइड',
    urgent: 'तत्काल मदद', footer: 'Fulshear Key Club का छात्र-नेतृत्व नागरिक नेविगेशन प्रोजेक्ट।', research: 'शोध आधार'
  },
  chatbot: { ...locales.en.chatbot, title: 'Civic Navigator', placeholder: 'अपना प्रश्न लिखें...', close: 'बंद करें', prompts: ['खाना चाहिए', 'यूटिलिटी बिल', 'डॉक्टर खोजें', 'स्कूल नामांकन', 'कानूनी सहायता', 'परिवहन', 'आपातकाल', 'दस्तावेज'] }
};

locales.ur = {
  ...locales.ar,
  nav: { home: 'ہوم', directory: 'ڈائریکٹری', guides: 'رہنما', partners: 'شراکت دار', volunteer: 'رضاکار', about: 'تعارف', emergency: 'ایمرجنسی' },
  home: {
    ...locales.ar.home,
    eyebrow: 'Fulshear شہری رہنمائی نکتہ',
    title: 'مقامی ضرورت سے قابل اعتماد مدد تک صاف راستہ۔',
    subtitle: 'New American Kits تصدیق شدہ Fulshear اور Fort Bend وسائل کو کثیر لسانی کہانی، پرنٹ کٹ، اور تلاش پذیر پورٹل بناتا ہے۔',
    primary: 'مقامی مدد تلاش کریں',
    secondary: 'رہنما پڑھیں',
    storyEyebrow: 'اسکرول کہانی',
    storyTitle: 'نقشے کے روشن نقطے سے ایک خاندان کے صحیح دروازے تک۔',
    portalTitle: 'تصدیق شدہ علاقائی وسائل',
    portalText: 'جہاں ممکن ہو پہلے Fulshear؛ پھر Fort Bend، Katy، اور Richmond کے عملی خدمت مقامات۔',
    modelTitle: 'سیاہی، کاغذ، اور زندہ ڈائریکٹری۔',
    modelText: 'بصری نظام پرسکون، منظم، اور طویل ترجموں کے لیے محفوظ ہے۔',
    actionTitle: 'طلبہ نے بنایا۔ ذرائع سے چیک کیا۔',
    actionText: 'ہر لسٹنگ میں ذریعہ لنک اور تصدیق تاریخ ہے تاکہ پرنٹ کٹ اور پورٹل ساتھ رہیں۔'
  },
  pages: {
    directoryTitle: 'وسائل ڈائریکٹری', directoryDesc: 'ضرورت کے مطابق Fulshear، Fort Bend، Katy اور Richmond کے تصدیق شدہ وسائل تلاش کریں۔',
    guidesTitle: 'مرحلہ وار رہنما', guidesDesc: 'عام شہری مدد کے کاموں کے لیے آسان ہدایات۔',
    partnersTitle: 'کمیونٹی شراکت دار', partnersDesc: 'کٹس، ریفرل اور اپ ڈیٹس کے لیے قابل اعتماد مقامات۔',
    volunteerTitle: 'رضاکارانہ خدمت', volunteerDesc: 'تحقیق، ترجمہ، تقسیم اور دیکھ بھال کا طالب علموں کا ماڈل۔',
    feedbackTitle: 'کمیونٹی رائے', feedbackDesc: 'پرانی معلومات بتائیں، وسائل تجویز کریں، ترجمہ مدد مانگیں یا سوال پوچھیں۔',
    aboutTitle: 'منصوبے کے بارے میں', aboutDesc: 'Fulshear Key Club کی ایک پہل جو شہری مدد کو مقامی، صاف اور کثیر لسانی بناتی ہے۔',
    emergencyTitle: 'ایمرجنسی وسائل', emergencyDesc: 'فوری خطرے یا جان لیوا بحران میں فوراً 911 پر کال کریں۔'
  },
  labels: { ...locales.ar.labels, search: 'تلاش', allResources: 'تمام وسائل', website: 'ویب سائٹ', call: 'کال کریں' },
  forms: {
    ...locales.ar.forms,
    name: 'نام', email: 'ای میل', role: 'پسندیدہ کردار', why: 'آپ کیوں مدد کرنا چاہتے ہیں؟', saveInterest: 'دلچسپی محفوظ کریں',
    feedbackType: 'رائے کی قسم', organization: 'تنظیم کا نام', details: 'تفصیلات', submitFeedback: 'رائے بھیجیں',
    received: 'رائے موصول ہوئی', receivedBody: 'طلبہ ٹیم عوامی فہرست اپ ڈیٹ کرنے سے پہلے تفصیلات چیک کرے گی۔', another: 'دوسری بھیجیں',
    tabs: ['پرانی معلومات', 'وسیلہ تجویز کریں', 'ترجمہ', 'کامیابی کہانی', 'سوال']
  },
  misc: {
    ...locales.ar.misc,
    liveOps: 'لائیو آپریشنز', trackerTitle: 'خاندان جو پوچھتے ہیں وہی طلبہ کے اگلے پرنٹ کو شکل دیتا ہے۔',
    portalConsultations: 'پورٹل مشاورت', outwardReferrals: 'بیرونی ریفرل', trackedClicks: 'کلکس',
    mostConsulted: 'سب سے زیادہ پوچھا گیا', documentsNeeded: 'دستاویزات', safetyNote: 'حفاظتی نوٹ', guide: 'رہنما',
    urgent: 'فوری مدد', footer: 'Fulshear Key Club کا طلبہ زیر قیادت شہری رہنمائی منصوبہ۔', research: 'تحقیق بنیاد'
  },
  chatbot: { ...locales.ar.chatbot, title: 'Civic Navigator', placeholder: 'اپنا سوال لکھیں...', close: 'بند کریں', prompts: ['کھانا چاہیے', 'یوٹیلٹی بل', 'ڈاکٹر', 'اسکول داخلہ', 'قانونی مدد', 'آمد و رفت', 'ایمرجنسی', 'دستاویزات'] }
};

export const categories = [
  { id: 'food', icon: 'Utensils', name: tx('Food Assistance', 'Comida', 'المساعدة الغذائية', '食物援助', 'Thực phẩm', 'खाद्य सहायता', 'خوراک'), desc: tx('Food fairs, pantries, SNAP/WIC navigation', 'Ferias de comida, despensas y SNAP/WIC', 'معارض طعام ومخازن وإرشاد SNAP/WIC', '食品发放、食品库、SNAP/WIC 导航', 'Hội chợ thực phẩm, pantry, SNAP/WIC', 'फूड पैंट्री और SNAP/WIC सहायता', 'فوڈ پینٹری اور SNAP/WIC') },
  { id: 'health', icon: 'Stethoscope', name: tx('Healthcare', 'Salud', 'الرعاية الصحية', '医疗', 'Y tế', 'स्वास्थ्य', 'صحت'), desc: tx('Clinics, low-cost care, pharmacy, referrals', 'Clínicas, atención de bajo costo, farmacia', 'عيادات ورعاية منخفضة التكلفة وصيدلية', '诊所、低成本医疗、药房', 'Phòng khám, chi phí thấp, nhà thuốc', 'क्लिनिक और कम लागत देखभाल', 'کلینک اور کم لاگت علاج') },
  { id: 'housing', icon: 'HomeIcon', name: tx('Rent & Housing', 'Renta y vivienda', 'الإيجار والسكن', '房租与住房', 'Thuê nhà', 'किराया और आवास', 'کرایہ اور رہائش'), desc: tx('Rent, mortgage, shelter, eviction prevention', 'Renta, hipoteca y prevención de desalojo', 'إيجار ورهن ومنع الإخلاء', '租金、房贷、避免驱逐', 'Tiền thuê, thế chấp, tránh trục xuất', 'किराया, मॉर्गेज, बेदखली रोकथाम', 'کرایہ، مارگیج، بے دخلی روک تھام') },
  { id: 'utilities', icon: 'Zap', name: tx('Utilities', 'Servicios públicos', 'المرافق', '水电煤服务', 'Tiện ích', 'यूटिलिटी', 'یوٹیلٹیز'), desc: tx('Electric, water, gas, sewer, solid waste', 'Luz, agua, gas, drenaje y basura', 'كهرباء وماء وغاز وصرف ونفايات', '电、水、气、污水和垃圾', 'Điện, nước, gas, rác', 'बिजली, पानी, गैस, कचरा', 'بجلی، پانی، گیس، کچرا') },
  { id: 'education', icon: 'GraduationCap', name: tx('School Enrollment', 'Inscripción escolar', 'تسجيل المدرسة', '学校注册', 'Ghi danh trường', 'स्कूल नामांकन', 'اسکول داخلہ'), desc: tx('Lamar CISD, Katy ISD, documents, meals', 'Lamar CISD, Katy ISD, documentos', 'Lamar CISD و Katy ISD والوثائق', 'Lamar CISD、Katy ISD 和文件', 'Lamar CISD, Katy ISD, giấy tờ', 'Lamar CISD, Katy ISD, दस्तावेज', 'Lamar CISD، Katy ISD، کاغذات') },
  { id: 'english', icon: 'BookOpen', name: tx('English & Library', 'Inglés y biblioteca', 'الإنجليزية والمكتبة', '英语与图书馆', 'Tiếng Anh & thư viện', 'अंग्रेज़ी और पुस्तकालय', 'انگریزی اور لائبریری'), desc: tx('Library access, ESL, citizenship, computers', 'Biblioteca, ESL, ciudadanía y computadoras', 'مكتبة وESL ومواطنة وحواسيب', '图书馆、ESL、公民入籍、电脑', 'Thư viện, ESL, quốc tịch, máy tính', 'लाइब्रेरी, ESL, नागरिकता, कंप्यूटर', 'لائبریری، ESL، شہریت، کمپیوٹر') },
  { id: 'legal', icon: 'Scale', name: tx('Legal Aid', 'Ayuda legal', 'مساعدة قانونية', '法律援助', 'Trợ giúp pháp lý', 'कानूनी सहायता', 'قانونی مدد'), desc: tx('Civil legal aid, tenant rights, immigration referrals', 'Ayuda civil, inquilinos, inmigración', 'قانون مدني وحقوق المستأجر وإحالات هجرة', '民事法律、租客权利、移民转介', 'Pháp lý dân sự, người thuê, nhập cư', 'सिविल कानूनी मदद, किरायेदार अधिकार', 'سول قانونی مدد، کرایہ دار حقوق') },
  { id: 'transport', icon: 'Bus', name: tx('Transportation', 'Transporte', 'المواصلات', '交通', 'Giao thông', 'परिवहन', 'آمد و رفت'), desc: tx('Demand response, 211 referrals, reduced access', 'Transporte por solicitud y referencias 211', 'نقل حسب الطلب وإحالات 211', '预约交通和 211 转介', 'Xe theo yêu cầu và 211', 'डिमांड राइड और 211 रेफरल', 'ڈیمانڈ ریسپانس اور 211') }
];

export const categoryScope = {
  food: tx('Food fairs, food pantries, benefit-navigation support, and urgent grocery help.', 'Ferias de comida, despensas y ayuda para beneficios.', 'معارض طعام ومخازن ودعم طلبات المزايا.', '食品发放、食品库和福利申请帮助。', 'Hội chợ thực phẩm, pantry và hỗ trợ phúc lợi.', 'फूड पैंट्री और लाभ आवेदन सहायता।', 'فوڈ پینٹری اور فوائد کی مدد۔'),
  health: tx('Low-cost clinics, charity care, pharmacy support, and referrals for uninsured families.', 'Clínicas de bajo costo, cuidado caritativo y referencias.', 'عيادات منخفضة التكلفة ورعاية خيرية وإحالات.', '低成本诊所、慈善护理和转介。', 'Phòng khám chi phí thấp và giới thiệu.', 'कम लागत क्लिनिक और रेफरल।', 'کم لاگت کلینک اور ریفرل۔'),
  housing: tx('Rent, mortgage, shelter, and eviction-prevention pathways.', 'Renta, hipoteca, refugio y prevención de desalojo.', 'إيجار ورهن ومأوى ومنع الإخلاء.', '租金、房贷、庇护和避免驱逐。', 'Tiền thuê, thế chấp và tránh trục xuất.', 'किराया, मॉर्गेज और बेदखली रोकथाम।', 'کرایہ، مارگیج اور بے دخلی روک تھام۔'),
  utilities: tx('City billing contacts plus county assistance for electric, water, gas, and propane.', 'Contactos de cobro municipal y ayuda del condado.', 'اتصالات الفواتير ومساعدة المقاطعة للمرافق.', '城市账单联系和县公用事业援助。', 'Liên hệ hóa đơn và hỗ trợ tiện ích.', 'बिलिंग संपर्क और यूटिलिटी सहायता।', 'بلنگ رابطے اور یوٹیلٹی مدد۔'),
  education: tx('School enrollment, residency documents, language access, and meal navigation.', 'Inscripción escolar, residencia, idioma y comidas.', 'تسجيل المدرسة ووثائق السكن واللغة والوجبات.', '学校注册、居住证明、语言和餐食。', 'Ghi danh, cư trú, ngôn ngữ và bữa ăn.', 'नामांकन, पता प्रमाण, भाषा और भोजन।', 'داخلہ، پتہ، زبان اور کھانا۔'),
  english: tx('Library cards, computers, ESL classes, conversation practice, and citizenship resources.', 'Tarjetas de biblioteca, computadoras, ESL y ciudadanía.', 'بطاقات مكتبة وحواسيب وESL ومواطنة.', '借书证、电脑、ESL 和入籍资源。', 'Thẻ thư viện, máy tính, ESL, quốc tịch.', 'लाइब्रेरी कार्ड, कंप्यूटर, ESL।', 'لائبریری کارڈ، کمپیوٹر، ESL۔'),
  legal: tx('Civil legal aid, tenant rights, immigration referrals, and notario-scam prevention.', 'Ayuda civil, inquilinos, inmigración y prevención de notarios falsos.', 'قانون مدني ومستأجرون وهجرة وتجنب النصب.', '民事法律、租客权利、移民和防诈骗。', 'Pháp lý dân sự, người thuê, nhập cư.', 'सिविल कानून, किरायेदार, इमिग्रेशन।', 'سول قانون، کرایہ دار، امیگریشن۔'),
  transport: tx('Demand-response public transit and 211 transportation referrals.', 'Transporte público por solicitud y referencias 211.', 'نقل عام حسب الطلب وإحالات 211.', '预约公共交通和 211 转介。', 'Giao thông theo yêu cầu và 211.', 'डिमांड रेस्पॉन्स और 211।', 'ڈیمانڈ ریسپانس اور 211۔')
};

export const resources = [
  {
    id: 'fulshear-branch-library',
    categoryId: 'english',
    name: 'Fulshear Branch Library',
    description: tx('Local library anchor with public computers, meeting rooms, programs, library cards, and a safe referral point for families.', 'Biblioteca local con computadoras públicas, salas, programas, tarjetas y un punto seguro de referencia.', 'مكتبة محلية فيها حواسيب عامة وغرف وبرامج ونقطة إحالة آمنة.', '本地图书馆，提供公共电脑、活动、借书证和安全转介点。', 'Thư viện địa phương có máy tính công cộng, chương trình và điểm giới thiệu an toàn.', 'स्थानीय लाइब्रेरी: कंप्यूटर, कार्यक्रम और सुरक्षित रेफरल।', 'مقامی لائبریری: کمپیوٹر، پروگرام اور محفوظ ریفرل۔'),
    address: '6350 GM Library Rd, Fulshear, TX 77441',
    phone: '346-481-6800',
    website: 'https://www.fortbendlibraries.gov/locations-hours/fulshear',
    hours: 'Mon 9am-9pm; Tue-Wed 9am-6pm; Thu 9am-9pm; Fri-Sat 10am-5pm; Sun closed',
    languages: ['English', 'library translation tools may vary by program'],
    cost: tx('Free library access; some printing or special services may cost extra.', 'Acceso gratis; impresión o servicios especiales pueden costar.', 'الدخول مجاني؛ قد توجد رسوم للطباعة أو خدمات خاصة.', '图书馆免费；打印或特殊服务可能收费。', 'Miễn phí; in ấn có thể tính phí.', 'मुफ्त; प्रिंटिंग पर शुल्क हो सकता है।', 'مفت؛ پرنٹنگ کی فیس ہو سکتی ہے۔'),
    eligibility: tx('Open to the public. Library-card rules depend on Fort Bend County Libraries policy.', 'Abierto al público. Las reglas de tarjeta dependen del sistema de bibliotecas.', 'مفتوح للجمهور. قواعد البطاقة تعتمد على نظام المكتبات.', '向公众开放。借书证规则以图书馆政策为准。', 'Mở cửa công cộng. Thẻ thư viện theo chính sách.', 'सार्वजनिक। कार्ड नियम लाइब्रेरी नीति पर निर्भर।', 'عوام کے لیے کھلا۔ کارڈ پالیسی کے مطابق۔'),
    documentsRequired: tx('Ask staff about card registration; bring ID and address proof if available.', 'Pregunte por registro; lleve ID y prueba de domicilio si tiene.', 'اسأل عن التسجيل؛ أحضر هوية وإثبات عنوان إن توفر.', '咨询办卡；可带身份证明和地址证明。', 'Hỏi nhân viên; mang ID và địa chỉ nếu có.', 'स्टाफ से पूछें; ID और पता प्रमाण लाएं।', 'اسٹاف سے پوچھیں؛ ID اور پتہ لائیں۔'),
    servicesOffered: tx('Public computers, programs, information help, meeting rooms, library cards, and trusted community referrals.', 'Computadoras, programas, información, salas y referencias.', 'حواسيب وبرامج ومعلومات وغرف وإحالات.', '公共电脑、活动、信息帮助、会议室和转介。', 'Máy tính, chương trình, thông tin và giới thiệu.', 'कंप्यूटर, कार्यक्रम, जानकारी और रेफरल।', 'کمپیوٹر، پروگرام، معلومات اور ریفرل۔'),
    sourceUrl: 'https://www.fortbendlibraries.gov/locations-hours/fulshear',
    lastVerified: '2026-06-21',
    areaServed: 'Fulshear / Fort Bend County'
  },
  {
    id: 'family-hope-fulshear',
    categoryId: 'food',
    name: 'Family Hope Fulshear',
    description: tx('Fulshear nonprofit offering food fairs, classes, and family support resources.', 'Organización de Fulshear con ferias de comida, clases y apoyo familiar.', 'منظمة في فولشير تقدم معارض طعام وصفوفاً ودعم عائلي.', 'Fulshear 非营利组织，提供食品发放、课程和家庭支持。', 'Tổ chức tại Fulshear có hội chợ thực phẩm, lớp học và hỗ trợ gia đình.', 'Fulshear संस्था: फूड फेयर, कक्षाएं और परिवार सहायता।', 'Fulshear تنظیم: فوڈ فیئر، کلاسیں، خاندان مدد۔'),
    address: 'P.O. Box 543, Fulshear, TX 77441',
    phone: '832-332-5163',
    website: 'https://www.familyhopefulshear.org/',
    hours: 'Food fairs and classes vary; contact Family Hope before visiting',
    languages: ['English', 'Spanish support may vary by event'],
    cost: tx('Free community support programs.', 'Programas comunitarios gratuitos.', 'برامج دعم مجتمعية مجانية.', '免费社区支持项目。', 'Chương trình hỗ trợ miễn phí.', 'मुफ्त सामुदायिक सहायता।', 'مفت کمیونٹی مدد۔'),
    eligibility: tx('Designed for local families; program availability varies by event.', 'Para familias locales; disponibilidad varía por evento.', 'للعائلات المحلية؛ يختلف التوفر حسب الحدث.', '面向本地家庭；活动不同。', 'Cho gia đình địa phương; tùy sự kiện.', 'स्थानीय परिवारों के लिए; उपलब्धता बदलती है।', 'مقامی خاندانوں کے لیے؛ پروگرام بدلتے ہیں۔'),
    documentsRequired: tx('Contact Family Hope for current event requirements.', 'Comuníquese para requisitos actuales.', 'تواصل لمعرفة المتطلبات الحالية.', '请联系确认当前要求。', 'Liên hệ để biết yêu cầu.', 'वर्तमान आवश्यकताओं के लिए संपर्क करें।', 'موجودہ تقاضوں کے لیے رابطہ کریں۔'),
    servicesOffered: tx('Food fairs, parenting classes, family resources, and volunteer opportunities.', 'Ferias de comida, clases para padres, recursos familiares y voluntariado.', 'معارض طعام وصفوف للأهل وموارد وتطوع.', '食品发放、家长课程、家庭资源和志愿机会。', 'Hội chợ thực phẩm, lớp cha mẹ, tài nguyên, tình nguyện.', 'फूड फेयर, पैरेंटिंग क्लास, संसाधन।', 'فوڈ فیئر، والدین کلاس، وسائل۔'),
    sourceUrl: 'https://www.familyhopefulshear.org/',
    lastVerified: '2026-06-21',
    areaServed: 'Fulshear area'
  },
  {
    id: 'katy-christian-ministries-food',
    categoryId: 'food',
    name: 'Katy Christian Ministries Food Pantry',
    description: tx('Regional food pantry serving Katy-area families with supplemental food and personal-care items.', 'Despensa regional que ofrece comida suplementaria y artículos de cuidado personal.', 'مخزن طعام إقليمي يقدم طعاماً إضافياً ومواد عناية.', 'Katy 区域食品库，提供补充食品和个人护理用品。', 'Pantry khu vực Katy cung cấp thực phẩm và đồ chăm sóc.', 'Katy क्षेत्र की फूड पैंट्री।', 'Katy علاقے کی فوڈ پینٹری۔'),
    address: '3506 Porter Road, Katy, TX 77493',
    phone: '281-391-3730',
    website: 'https://ktcm.org/foodpantry/',
    hours: 'Car food line Mon-Thu 8:30am-12pm for registered KCM clients; call before visiting',
    languages: ['English', 'Spanish'],
    cost: tx('Free for eligible/registered clients.', 'Gratis para clientes elegibles/registrados.', 'مجاني للمؤهلين أو المسجلين.', '符合条件/已注册客户免费。', 'Miễn phí cho khách đủ điều kiện.', 'योग्य/पंजीकृत ग्राहकों के लिए मुफ्त।', 'اہل/رجسٹرڈ افراد کے لیے مفت۔'),
    eligibility: tx('KCM registration and documentation may be required for regular pantry service.', 'Puede requerir registro y documentos de KCM.', 'قد يتطلب تسجيل KCM ووثائق.', '常规服务可能需要 KCM 注册和文件。', 'Có thể cần đăng ký và giấy tờ KCM.', 'KCM पंजीकरण और दस्तावेज लग सकते हैं।', 'KCM رجسٹریشن اور کاغذات درکار ہو سکتے ہیں۔'),
    documentsRequired: tx('Application and required documentation listed by KCM.', 'Solicitud y documentos indicados por KCM.', 'طلب ووثائق حسب KCM.', '按 KCM 要求提交申请和文件。', 'Đơn và giấy tờ theo KCM.', 'KCM के अनुसार आवेदन और दस्तावेज।', 'KCM کے مطابق درخواست اور کاغذات۔'),
    servicesOffered: tx('Food pantry, personal-care items, application process, and social-service referrals.', 'Despensa, artículos personales, solicitudes y referencias.', 'مخزن طعام ومواد شخصية وإحالات.', '食品库、个人用品、申请流程和转介。', 'Pantry, đồ cá nhân, đơn và giới thiệu.', 'फूड पैंट्री और रेफरल।', 'فوڈ پینٹری اور ریفرل۔'),
    sourceUrl: 'https://ktcm.org/contact/',
    lastVerified: '2026-06-21',
    areaServed: 'Katy / West Fort Bend / nearby Fulshear'
  },
  {
    id: 'fulshear-utility-billing',
    categoryId: 'utilities',
    name: 'City of Fulshear Utility Billing',
    description: tx('City contact for water, sewer, solid waste, recycling billing, payment questions, and customer-service issues.', 'Contacto municipal para agua, drenaje, basura, reciclaje y preguntas de pago.', 'جهة المدينة لفواتير الماء والصرف والنفايات وإعادة التدوير.', 'Fulshear 市水、污水、垃圾、回收账单和客服。', 'Liên hệ hóa đơn nước, cống, rác, tái chế.', 'पानी, सीवर, कचरा और भुगतान संपर्क।', 'پانی، سیور، کچرا اور بلنگ رابطہ۔'),
    address: '6611 W Cross Creek Bend Lane, Fulshear, TX 77441',
    phone: '281-346-8830',
    website: 'https://www.fulsheartexas.gov/about-us/departments-h-z/utility-billing',
    hours: 'City Hall hours vary; utility customer service by phone or email',
    languages: ['English'],
    cost: tx('Billing department; payments depend on city utility account charges.', 'Departamento de cobro; pagos dependen de la cuenta.', 'قسم فواتير؛ المبلغ حسب حساب المرافق.', '账单部门；费用依账户而定。', 'Bộ phận hóa đơn; phí theo tài khoản.', 'बिलिंग विभाग; शुल्क खाते पर निर्भर।', 'بلنگ محکمہ؛ رقم اکاؤنٹ پر۔'),
    eligibility: tx('For City of Fulshear utility customers.', 'Para clientes de servicios públicos de Fulshear.', 'لعملاء مرافق مدينة فولشير.', '适用于 Fulshear 市公用事业客户。', 'Cho khách hàng tiện ích Fulshear.', 'Fulshear यूटिलिटी ग्राहकों के लिए।', 'Fulshear یوٹیلٹی صارفین کے لیے۔'),
    documentsRequired: tx('Account number, service address, and customer information.', 'Número de cuenta, dirección y datos del cliente.', 'رقم الحساب والعنوان ومعلومات العميل.', '账号、服务地址和客户信息。', 'Số tài khoản, địa chỉ, thông tin khách.', 'खाता नंबर, पता, ग्राहक जानकारी।', 'اکاؤنٹ نمبر، پتہ، معلومات۔'),
    servicesOffered: tx('Utility payments, billing questions, water/sewer customer service, solid waste billing.', 'Pagos, preguntas, servicio de agua/drenaje y basura.', 'مدفوعات وأسئلة وخدمة ماء وصرف ونفايات.', '支付、账单问题、水/污水客服和垃圾账单。', 'Thanh toán, câu hỏi, nước/cống/rác.', 'भुगतान, बिलिंग, पानी/सीवर सेवा।', 'ادائیگی، بلنگ، پانی/سیور سروس۔'),
    sourceUrl: 'https://www.fulsheartexas.gov/about-us/departments-h-z/public-works/utilities/water-quality-conservation',
    lastVerified: '2026-06-21',
    areaServed: 'City of Fulshear utility customers'
  },
  {
    id: 'fort-bend-utility-assistance',
    categoryId: 'utilities',
    name: 'Fort Bend County Utility Assistance',
    description: tx('County program for eligible Fort Bend residents seeking help with electric, water, gas, or propane bills.', 'Programa del condado para ayuda con luz, agua, gas o propano.', 'برنامج للمقاطعة للمساعدة في فواتير الكهرباء والماء والغاز والبروبان.', '县项目，帮助符合条件居民支付电、水、气或丙烷账单。', 'Chương trình hỗ trợ điện, nước, gas, propane.', 'बिजली, पानी, गैस बिल सहायता।', 'بجلی، پانی، گیس بل مدد۔'),
    address: 'Fort Bend County Social Services locations; appointments required',
    phone: '281-342-7300 / 281-403-8050',
    website: 'https://www.fortbendcountytx.gov/government/departments/social-services/services/utility-assistance',
    hours: 'Appointments required; call county social services',
    languages: ['English', 'Spanish interpretation may be available'],
    cost: tx('Free application; assistance depends on guidelines and funds.', 'Solicitud gratis; ayuda depende de reglas y fondos.', 'الطلب مجاني؛ المساعدة حسب القواعد والتمويل.', '申请免费；援助取决于规则和资金。', 'Đơn miễn phí; tùy quy định và quỹ.', 'आवेदन मुफ्त; सहायता नियम/फंड पर निर्भर।', 'درخواست مفت؛ مدد قوانین/فنڈ پر۔'),
    eligibility: tx('Fort Bend County residents who meet program guidelines.', 'Residentes de Fort Bend que cumplen reglas.', 'سكان فورت بند الذين يستوفون الشروط.', '符合项目规则的 Fort Bend 居民。', 'Cư dân Fort Bend đủ điều kiện.', 'Fort Bend निवासी जो नियमों को पूरा करें।', 'Fort Bend رہائشی جو اہل ہوں۔'),
    documentsRequired: tx('Proof of identity, address, income, household members, and current utility bill/disconnect notice.', 'ID, domicilio, ingresos, miembros del hogar y factura/aviso.', 'هوية وعنوان ودخل وأفراد الأسرة وفاتورة/إشعار.', '身份证明、地址、收入、家庭成员和当前账单/停电通知。', 'ID, địa chỉ, thu nhập, hộ gia đình, hóa đơn.', 'ID, पता, आय, परिवार, बिल/नोटिस।', 'ID، پتہ، آمدنی، گھر، بل/نوٹس۔'),
    servicesOffered: tx('Electric, water, gas, and propane assistance; county does not pay deposits or transferred bills.', 'Ayuda con luz, agua, gas y propano; no depósitos.', 'مساعدة كهرباء وماء وغاز وبروبان؛ لا ودائع.', '电、水、气、丙烷援助；不付押金。', 'Hỗ trợ điện, nước, gas; không trả tiền đặt cọc.', 'बिजली/पानी/गैस सहायता; जमा नहीं।', 'بجلی/پانی/گیس مدد؛ ڈپازٹ نہیں۔'),
    sourceUrl: 'https://www.fortbendcountytx.gov/government/departments/social-services/services/utility-assistance',
    lastVerified: '2026-06-21',
    areaServed: 'Fort Bend County'
  },
  {
    id: 'fort-bend-rent-mortgage',
    categoryId: 'housing',
    name: 'Fort Bend County Rent / Mortgage Assistance',
    description: tx('County shelter-assistance program for eligible residents seeking one-month rent or mortgage help.', 'Programa del condado para ayuda de un mes de renta o hipoteca.', 'برنامج مقاطعة لمساعدة شهر واحد في الإيجار أو الرهن.', '县住房援助项目，可帮助一个月租金或房贷。', 'Hỗ trợ một tháng tiền thuê/thế chấp.', 'एक महीने किराया/मॉर्गेज सहायता।', 'ایک ماہ کرایہ/مارگیج مدد۔'),
    address: 'Fort Bend County Social Services locations; appointments required',
    phone: '281-342-7300 / 281-403-8050',
    website: 'https://www.fortbendcountytx.gov/government/departments/social-services/services/rent-mortgage-assistance',
    hours: 'Appointments required; call county social services',
    languages: ['English', 'Spanish interpretation may be available'],
    cost: tx('Free application; assistance depends on program guidelines and funds.', 'Solicitud gratis; ayuda depende de reglas y fondos.', 'الطلب مجاني؛ المساعدة حسب القواعد والتمويل.', '申请免费；援助取决于规则和资金。', 'Đơn miễn phí; tùy quy định và quỹ.', 'आवेदन मुफ्त; सहायता नियम/फंड पर।', 'درخواست مفت؛ مدد قوانین/فنڈ پر۔'),
    eligibility: tx('Fort Bend County residents who meet program guidelines; appointments required.', 'Residentes de Fort Bend que cumplen reglas; cita requerida.', 'سكان فورت بند المؤهلون؛ الموعد مطلوب.', '符合规则的 Fort Bend 居民；需预约。', 'Cư dân Fort Bend đủ điều kiện; cần hẹn.', 'Fort Bend निवासी; अपॉइंटमेंट जरूरी।', 'Fort Bend رہائشی؛ اپائنٹمنٹ ضروری۔'),
    documentsRequired: tx('Proof of identity, address, income, household members, lease/mortgage documents, and current balance/notice.', 'ID, domicilio, ingresos, contrato/hipoteca y aviso.', 'هوية وعنوان ودخل وعقد/رهن وإشعار.', '身份证明、地址、收入、租约/房贷文件和通知。', 'ID, địa chỉ, thu nhập, hợp đồng/thế chấp.', 'ID, पता, आय, लीज/मॉर्गेज दस्तावेज।', 'ID، پتہ، آمدنی، لیز/مارگیج کاغذات۔'),
    servicesOffered: tx('Partial rent or mortgage assistance; county notes that only one month may be paid and late fees are not paid.', 'Ayuda parcial de renta/hipoteca; no paga cargos tardíos.', 'مساعدة جزئية؛ لا يتم دفع الرسوم المتأخرة.', '部分租金/房贷援助；不支付滞纳金。', 'Hỗ trợ một phần; không trả phí trễ.', 'आंशिक सहायता; लेट फीस नहीं।', 'جزوی مدد؛ لیٹ فیس نہیں۔'),
    sourceUrl: 'https://www.fortbendcountytx.gov/government/departments/social-services/services/rent-mortgage-assistance',
    lastVerified: '2026-06-21',
    areaServed: 'Fort Bend County'
  },
  {
    id: 'accesshealth-richmond',
    categoryId: 'health',
    name: 'AccessHealth Richmond Clinic',
    description: tx('Federally qualified community clinic offering medical services and integrated pharmacy access for the Richmond/Fort Bend area.', 'Clínica comunitaria con servicios médicos y farmacia integrada.', 'عيادة مجتمعية تقدم خدمات طبية وصيدلية.', '社区诊所，为 Richmond/Fort Bend 提供医疗和药房服务。', 'Phòng khám cộng đồng có dịch vụ y tế và nhà thuốc.', 'समुदाय क्लिनिक और फार्मेसी।', 'کمیونٹی کلینک اور فارمیسی۔'),
    address: '400 Austin St, Richmond, TX 77469',
    phone: '281-342-4530',
    website: 'https://www.myaccesshealth.org/locations/richmond-clinic',
    hours: 'Mon-Fri 8am-5pm; pharmacy closes 12:45pm-1:45pm for lunch',
    languages: ['English', 'Spanish', 'Vietnamese', 'interpretation may vary'],
    cost: tx('Sliding-fee and insurance options may be available; call for intake.', 'Puede haber escala de pago y seguro; llame para admisión.', 'قد تتوفر رسوم متدرجة وتأمين؛ اتصل للتسجيل.', '可能有滑动收费和保险选项；请致电。', 'Có thể có phí trượt và bảo hiểm; gọi để đăng ký.', 'स्लाइडिंग शुल्क/बीमा विकल्प; कॉल करें।', 'سلائیڈنگ فیس/انشورنس؛ کال کریں۔'),
    eligibility: tx('Open to patients; eligibility and fees depend on program and household information.', 'Abierto a pacientes; elegibilidad depende del programa y hogar.', 'مفتوح للمرضى؛ الأهلية والرسوم حسب البرنامج.', '面向患者；资格和费用取决于项目和家庭信息。', 'Mở cho bệnh nhân; điều kiện tùy chương trình.', 'मरीजों के लिए; योग्यता कार्यक्रम पर।', 'مریضوں کے لیے؛ اہلیت پروگرام پر۔'),
    documentsRequired: tx('Photo ID, insurance card if any, income information for discount programs.', 'ID, tarjeta de seguro si tiene, información de ingresos.', 'هوية وبطاقة تأمين إن وجدت ومعلومات دخل.', '身份证、保险卡（如有）、收入信息。', 'ID, thẻ bảo hiểm nếu có, thông tin thu nhập.', 'ID, बीमा कार्ड, आय जानकारी।', 'ID، انشورنس، آمدنی معلومات۔'),
    servicesOffered: tx('Primary care, pediatrics, women’s health, behavioral health, dental referrals, pharmacy, and enrollment support.', 'Atención primaria, pediatría, salud de mujeres, salud mental, farmacia y apoyo.', 'رعاية أولية وأطفال وصحة نساء وسلوك وصيدلية.', '初级护理、儿科、妇女健康、行为健康、药房和登记帮助。', 'Chăm sóc chính, trẻ em, phụ nữ, tâm lý, nhà thuốc.', 'प्राथमिक देखभाल, बाल, महिला, मानसिक स्वास्थ्य।', 'پرائمری، بچوں، خواتین، ذہنی صحت۔'),
    sourceUrl: 'https://www.myaccesshealth.org/locations/richmond-clinic',
    lastVerified: '2026-06-21',
    areaServed: 'Richmond / Fort Bend County / nearby Fulshear'
  },
  {
    id: 'christ-clinic-katy',
    categoryId: 'health',
    name: 'Christ Clinic Katy',
    description: tx('Faith-based nonprofit clinic serving uninsured and under-insured people in the Katy/Fulshear area.', 'Clínica sin fines de lucro para personas sin seguro o con seguro insuficiente.', 'عيادة غير ربحية تخدم غير المؤمن عليهم أو ذوي التأمين غير الكافي.', '非营利诊所，服务无保险或保险不足人群。', 'Phòng khám phi lợi nhuận cho người không/bảo hiểm thiếu.', 'बीमा रहित/कम बीमा वाले लोगों के लिए क्लिनिक।', 'بغیر/کم انشورنس افراد کے لیے کلینک۔'),
    address: '1040 Schlipf Rd, Suite 216 & 217, Katy, TX 77493',
    phone: '281-391-0190',
    website: 'https://christclinickaty.org/',
    hours: 'Mon-Thu 9am-5pm; Fri 9am-3pm',
    languages: ['English', 'Spanish support may vary'],
    cost: tx('Free or reduced-fee care may be available after eligibility review.', 'Puede haber atención gratis o reducida tras revisión.', 'قد تتوفر رعاية مجانية أو مخفضة بعد مراجعة الأهلية.', '资格审核后可能有免费或低价护理。', 'Có thể miễn/giảm phí sau xét điều kiện.', 'योग्यता समीक्षा के बाद मुफ्त/कम शुल्क।', 'اہلیت کے بعد مفت/کم فیس۔'),
    eligibility: tx('Focused on uninsured and under-insured patients; call before visiting.', 'Enfocado en pacientes sin seguro o con seguro insuficiente.', 'يركز على غير المؤمن عليهم أو ذوي التأمين غير الكافي.', '主要服务无保险或保险不足患者。', 'Tập trung người không/bảo hiểm thiếu.', 'बीमा रहित/कम बीमा रोगियों के लिए।', 'بغیر/کم انشورنس مریضوں کے لیے۔'),
    documentsRequired: tx('Call intake for current eligibility documents.', 'Llame para documentos actuales de elegibilidad.', 'اتصل لمعرفة وثائق الأهلية الحالية.', '请致电了解当前资格文件。', 'Gọi để biết giấy tờ.', 'दस्तावेज के लिए कॉल करें।', 'کاغذات کے لیے کال کریں۔'),
    servicesOffered: tx('Primary care, chronic care, community health services, and care navigation.', 'Atención primaria, enfermedades crónicas y navegación médica.', 'رعاية أولية ومزمنة وإرشاد صحي.', '初级护理、慢病护理和医疗导航。', 'Chăm sóc chính, mãn tính, điều hướng.', 'प्राथमिक/दीर्घकालिक देखभाल।', 'پرائمری/دائمی نگہداشت۔'),
    sourceUrl: 'https://christclinickaty.org/contact-us/',
    lastVerified: '2026-06-21',
    areaServed: 'Katy / Fulshear area'
  },
  {
    id: 'lamar-cisd-enrollment',
    categoryId: 'education',
    name: 'Lamar CISD Enrollment',
    description: tx('Public-school enrollment portal for families living in Lamar CISD attendance zones, including parts of Fulshear.', 'Portal de inscripción para familias en zonas de Lamar CISD, incluyendo partes de Fulshear.', 'بوابة تسجيل للمدارس العامة في مناطق Lamar CISD ومنها أجزاء من فولشير.', 'Lamar CISD 学区家庭公立学校注册入口，包括部分 Fulshear。', 'Cổng ghi danh cho khu Lamar CISD, gồm một phần Fulshear.', 'Lamar CISD क्षेत्र के परिवारों के लिए नामांकन।', 'Lamar CISD علاقوں کے لیے داخلہ۔'),
    address: 'Online enrollment; campus assigned by address',
    phone: '832-223-0000',
    website: 'https://www.lcisd.org/enrollment',
    hours: 'Online; campus office hours vary',
    languages: ['English', 'Spanish'],
    cost: tx('Free public school enrollment.', 'Inscripción gratuita en escuela pública.', 'تسجيل مجاني في المدارس العامة.', '公立学校免费注册。', 'Ghi danh trường công miễn phí.', 'मुफ्त पब्लिक स्कूल नामांकन।', 'مفت پبلک اسکول داخلہ۔'),
    eligibility: tx('Children living in Lamar CISD boundaries.', 'Niños que viven dentro de Lamar CISD.', 'الأطفال المقيمون ضمن حدود Lamar CISD.', '居住在 Lamar CISD 边界内的儿童。', 'Trẻ em sống trong ranh Lamar CISD.', 'Lamar CISD सीमा में रहने वाले बच्चे।', 'Lamar CISD حدود کے بچے۔'),
    documentsRequired: tx('Birth certificate/passport, immunizations, parent ID, proof of residency, and previous school records if available.', 'Acta/pasaporte, vacunas, ID del padre, comprobante de domicilio y registros.', 'شهادة ميلاد/جواز ولقاحات وهوية وإثبات سكن وسجلات.', '出生证明/护照、疫苗、家长 ID、居住证明和成绩记录。', 'Khai sinh/hộ chiếu, tiêm chủng, ID, địa chỉ, hồ sơ.', 'जन्म प्रमाण/पासपोर्ट, टीका, ID, पता प्रमाण।', 'برتھ سرٹیفکیٹ/پاسپورٹ، ویکسین، ID، پتہ۔'),
    servicesOffered: tx('New-student registration, campus assignment, records intake, language and program placement.', 'Registro, asignación de escuela, documentos y evaluación de idioma.', 'تسجيل وتحديد مدرسة ووثائق وتقييم لغة.', '新生注册、学校分配、档案和语言安置。', 'Ghi danh, phân trường, hồ sơ, ngôn ngữ.', 'नामांकन, स्कूल असाइनमेंट, भाषा सहायता।', 'داخلہ، اسکول، زبان مدد۔'),
    sourceUrl: 'https://www.lcisd.org/enrollment',
    lastVerified: '2026-06-21',
    areaServed: 'Lamar CISD attendance zones'
  },
  {
    id: 'katy-isd-registration',
    categoryId: 'education',
    name: 'Katy ISD Registration',
    description: tx('Public-school registration portal for families living in Katy ISD attendance zones near Fulshear/Katy.', 'Portal de registro para familias en zonas de Katy ISD cerca de Fulshear/Katy.', 'بوابة تسجيل لعائلات مناطق Katy ISD قرب فولشير/كاتي.', 'Katy ISD 学区注册入口，服务 Fulshear/Katy 附近家庭。', 'Cổng ghi danh Katy ISD gần Fulshear/Katy.', 'Katy ISD क्षेत्र के परिवारों के लिए नामांकन।', 'Katy ISD علاقوں کے لیے داخلہ۔'),
    address: 'Online registration; campus assigned by address',
    phone: '281-396-6000',
    website: 'https://www.katyisd.org/registration/home',
    hours: 'Online; campus office hours vary',
    languages: ['English', 'Spanish'],
    cost: tx('Free public school enrollment.', 'Inscripción gratuita en escuela pública.', 'تسجيل مجاني في المدارس العامة.', '公立学校免费注册。', 'Ghi danh trường công miễn phí.', 'मुफ्त पब्लिक स्कूल नामांकन।', 'مفت پبلک اسکول داخلہ۔'),
    eligibility: tx('Children living in Katy ISD boundaries.', 'Niños que viven dentro de Katy ISD.', 'الأطفال المقيمون ضمن حدود Katy ISD.', '居住在 Katy ISD 边界内的儿童。', 'Trẻ em sống trong ranh Katy ISD.', 'Katy ISD सीमा में रहने वाले बच्चे।', 'Katy ISD حدود کے بچے۔'),
    documentsRequired: tx('Birth certificate/passport, immunizations, parent ID, proof of residency, and previous school records if available.', 'Acta/pasaporte, vacunas, ID, domicilio y registros.', 'شهادة ميلاد/جواز ولقاحات وهوية وإثبات سكن.', '出生证明/护照、疫苗、家长 ID、居住证明。', 'Khai sinh/hộ chiếu, tiêm chủng, ID, địa chỉ.', 'जन्म प्रमाण/पासपोर्ट, टीका, ID, पता।', 'برتھ سرٹیفکیٹ/پاسپورٹ، ویکسین، ID، پتہ۔'),
    servicesOffered: tx('New-student registration, address lookup, document upload, meal and language support referrals.', 'Registro, búsqueda de domicilio, documentos, comidas e idioma.', 'تسجيل وبحث عنوان ووثائق وإحالات وجبات ولغة.', '新生注册、地址查询、文件上传、餐食和语言支持。', 'Ghi danh, tra địa chỉ, tải giấy tờ, bữa ăn/ngôn ngữ.', 'नामांकन, पता, दस्तावेज, भोजन/भाषा सहायता।', 'داخلہ، پتہ، کاغذات، کھانا/زبان۔'),
    sourceUrl: 'https://www.katyisd.org/registration/home',
    lastVerified: '2026-06-21',
    areaServed: 'Katy ISD attendance zones'
  },
  {
    id: 'literacy-council-fort-bend',
    categoryId: 'english',
    name: 'Literacy Council of Fort Bend County',
    description: tx('Adult literacy nonprofit offering English classes, basic literacy, and citizenship preparation.', 'Organización de alfabetización con clases de inglés, lectura básica y ciudadanía.', 'منظمة محو أمية تقدم الإنجليزية والقراءة والتحضير للمواطنة.', '成人识字组织，提供英语、基础识字和入籍准备。', 'Tổ chức dạy tiếng Anh, đọc viết và quốc tịch.', 'वयस्क अंग्रेज़ी, साक्षरता और नागरिकता तैयारी।', 'بالغ انگریزی، خواندگی، شہریت تیاری۔'),
    address: '12530 Emily Court, Sugar Land, TX 77478',
    phone: '281-240-8181',
    website: 'https://www.ftbendliteracy.org/classes',
    hours: 'Class schedules vary; contact before registering',
    languages: ['English', 'Spanish support may vary'],
    cost: tx('Low-cost classes; fee waivers may vary.', 'Clases de bajo costo; exenciones pueden variar.', 'صفوف منخفضة التكلفة؛ الإعفاءات قد تختلف.', '低成本课程；减免费用视情况。', 'Lớp chi phí thấp; miễn giảm tùy lúc.', 'कम लागत कक्षाएं; छूट बदल सकती है।', 'کم فیس کلاسیں؛ رعایت ممکن۔'),
    eligibility: tx('Adults seeking English, literacy, or citizenship support.', 'Adultos que buscan inglés, alfabetización o ciudadanía.', 'بالغون يحتاجون الإنجليزية أو القراءة أو المواطنة.', '需要英语、识字或入籍帮助的成人。', 'Người lớn cần tiếng Anh/đọc viết/quốc tịch.', 'वयस्क जिन्हें अंग्रेज़ी/साक्षरता चाहिए।', 'بالغ افراد جنہیں انگریزی/خواندگی چاہیے۔'),
    documentsRequired: tx('Contact the program for registration requirements.', 'Comuníquese para requisitos de registro.', 'اتصل لمعرفة متطلبات التسجيل.', '请联系了解注册要求。', 'Liên hệ để biết yêu cầu đăng ký.', 'रजिस्ट्रेशन आवश्यकताओं के लिए संपर्क।', 'رجسٹریشن تقاضوں کے لیے رابطہ۔'),
    servicesOffered: tx('ESL classes, adult basic literacy, GED support referrals, and citizenship preparation.', 'ESL, alfabetización, referencias GED y ciudadanía.', 'ESL ومحو أمية وإحالات GED ومواطنة.', 'ESL、成人基础识字、GED 转介和入籍准备。', 'ESL, đọc viết, GED, quốc tịch.', 'ESL, साक्षरता, GED रेफरल, नागरिकता।', 'ESL، خواندگی، GED، شہریت۔'),
    sourceUrl: 'https://www.ftbendliteracy.org/classes',
    lastVerified: '2026-06-21',
    areaServed: 'Fort Bend County'
  },
  {
    id: 'fort-bend-transit-demand-response',
    categoryId: 'transport',
    name: 'Fort Bend Transit Demand Response',
    description: tx('Curb-to-curb shared-ride public transit service for Fort Bend County trips scheduled in advance.', 'Transporte público compartido de puerta a puerta con reservación.', 'نقل عام مشترك من الباب إلى الباب بالحجز المسبق.', 'Fort Bend 县预约式门到门共享公共交通。', 'Dịch vụ xe công cộng đặt trước tận nơi.', 'पहले से बुक की गई साझा सार्वजनिक सवारी।', 'پہلے سے بک عوامی مشترکہ سواری۔'),
    address: 'Advance reservation service',
    phone: '866-751-8747',
    website: 'https://www.fortbendcountytx.gov/government/departments/public-transportation/services/demand-response-service',
    hours: 'Schedule in advance; service hours vary by route/service rules',
    languages: ['English', 'Spanish interpretation may be available'],
    cost: tx('Fare required; check current Fort Bend Transit rules before booking.', 'Se requiere tarifa; revise reglas actuales.', 'توجد أجرة؛ تحقق من القواعد الحالية.', '需付车费；预订前查看现行规则。', 'Có phí; kiểm tra quy định hiện tại.', 'किराया लगता है; नियम जांचें।', 'کرایہ درکار؛ اصول دیکھیں۔'),
    eligibility: tx('Open to Fort Bend County demand-response riders under service rules.', 'Disponible según reglas del servicio.', 'متاح حسب قواعد الخدمة.', '按服务规则开放。', 'Theo quy định dịch vụ.', 'सेवा नियमों के अनुसार।', 'سروس قواعد کے مطابق۔'),
    documentsRequired: tx('Trip details and rider information; special eligibility may require additional documents.', 'Detalles del viaje e información del pasajero.', 'تفاصيل الرحلة ومعلومات الراكب.', '行程和乘客信息；特殊资格可能需文件。', 'Thông tin chuyến đi và người đi.', 'यात्रा और यात्री जानकारी।', 'سفر اور مسافر معلومات۔'),
    servicesOffered: tx('Demand-response rides, advance scheduling, shared public transportation.', 'Viajes por solicitud, reservación y transporte compartido.', 'رحلات حسب الطلب وحجز ونقل مشترك.', '预约乘车、提前调度、共享公共交通。', 'Xe theo yêu cầu, đặt trước.', 'डिमांड राइड और अग्रिम बुकिंग।', 'ڈیمانڈ رائیڈ اور پیشگی بکنگ۔'),
    sourceUrl: 'https://www.fortbendcountytx.gov/government/departments/public-transportation/services/demand-response-service',
    lastVerified: '2026-06-21',
    areaServed: 'Fort Bend County'
  },
  {
    id: 'lone-star-legal-aid',
    categoryId: 'legal',
    name: 'Lone Star Legal Aid',
    description: tx('Free civil legal-aid organization for eligible low-income Texans, including housing, public benefits, family safety, and consumer issues.', 'Ayuda legal civil gratis para texanos elegibles de bajos ingresos.', 'مساعدة قانونية مدنية مجانية للتكساسيين ذوي الدخل المنخفض المؤهلين.', '为符合条件的低收入德州居民提供免费民事法律援助。', 'Trợ giúp pháp lý dân sự miễn phí cho người đủ điều kiện.', 'योग्य कम आय टेक्सास निवासियों के लिए मुफ्त सिविल कानूनी मदद।', 'اہل کم آمدنی ٹیکساس رہائشیوں کے لیے مفت سول قانونی مدد۔'),
    address: 'Online / regional offices',
    phone: '1-800-733-8394',
    website: 'https://www.lonestarlegal.org/get-help/',
    hours: 'Apply online or by phone; intake hours vary',
    languages: ['English', 'Spanish', 'language access may be available'],
    cost: tx('Free for eligible clients.', 'Gratis para clientes elegibles.', 'مجاني للعملاء المؤهلين.', '符合条件客户免费。', 'Miễn phí cho người đủ điều kiện.', 'योग्य ग्राहकों के लिए मुफ्त।', 'اہل کلائنٹس کے لیے مفت۔'),
    eligibility: tx('Eligibility depends on income, location, legal issue, and funding rules.', 'Elegibilidad depende de ingresos, lugar, tema y fondos.', 'الأهلية حسب الدخل والموقع ونوع القضية والتمويل.', '资格取决于收入、地点、法律问题和资金规则。', 'Điều kiện tùy thu nhập, nơi ở, vấn đề.', 'योग्यता आय, स्थान, मुद्दे पर निर्भर।', 'اہلیت آمدنی، مقام، مسئلہ پر۔'),
    documentsRequired: tx('Legal papers, notices, court documents, lease/benefit letters, ID, and income information if available.', 'Papeles legales, avisos, corte, contrato, ID e ingresos.', 'أوراق قانونية وإشعارات ومحكمة وعقد وهوية ودخل.', '法律文件、通知、法院文件、租约/福利信、ID 和收入。', 'Giấy pháp lý, tòa, hợp đồng, ID, thu nhập.', 'कानूनी कागज, नोटिस, कोर्ट, ID, आय।', 'قانونی کاغذات، نوٹس، کورٹ، ID، آمدنی۔'),
    servicesOffered: tx('Civil legal help, housing, benefits, family safety, disaster, consumer, and immigration-related referrals.', 'Ayuda civil, vivienda, beneficios, seguridad familiar y referencias.', 'قانون مدني وسكن ومزايا وسلامة وإحالات.', '民事法律、住房、福利、家庭安全和转介。', 'Pháp lý dân sự, nhà ở, phúc lợi, an toàn.', 'सिविल कानून, आवास, लाभ, परिवार सुरक्षा।', 'سول قانون، رہائش، فوائد، خاندان حفاظت۔'),
    sourceUrl: 'https://www.lonestarlegal.org/get-help/',
    lastVerified: '2026-06-21',
    areaServed: 'Texas / Fort Bend County'
  },
  {
    id: 'houston-volunteer-lawyers',
    categoryId: 'legal',
    name: 'Houston Volunteer Lawyers',
    description: tx('Pro bono civil legal help and clinics for eligible residents in the greater Houston area.', 'Ayuda legal civil pro bono y clínicas para residentes elegibles.', 'مساعدة قانونية مدنية مجانية وعيادات للمؤهلين.', '为大休斯顿符合条件居民提供公益民事法律帮助和诊所。', 'Trợ giúp pháp lý dân sự miễn phí và clinic.', 'योग्य निवासियों के लिए प्रो बोनो कानूनी मदद।', 'اہل رہائشیوں کے لیے پرو بونو قانونی مدد۔'),
    address: 'Online / Houston-area clinics',
    phone: '713-228-0735',
    website: 'https://www.makejusticehappen.org/',
    hours: 'Apply online; clinic times vary',
    languages: ['English', 'Spanish', 'language access may be available'],
    cost: tx('Free for eligible clients.', 'Gratis para clientes elegibles.', 'مجاني للعملاء المؤهلين.', '符合条件客户免费。', 'Miễn phí cho người đủ điều kiện.', 'योग्य ग्राहकों के लिए मुफ्त।', 'اہل کلائنٹس کے لیے مفت۔'),
    eligibility: tx('Eligibility depends on income, county, case type, and program capacity.', 'Elegibilidad depende de ingresos, condado, caso y capacidad.', 'الأهلية حسب الدخل والمقاطعة ونوع القضية.', '资格取决于收入、县、案件类型和容量。', 'Điều kiện tùy thu nhập, quận, loại vụ.', 'योग्यता आय, काउंटी, मामले पर।', 'اہلیت آمدنی، کاؤنٹی، کیس پر۔'),
    documentsRequired: tx('Bring all notices, court papers, leases, contracts, IDs, and timeline notes.', 'Lleve avisos, corte, contratos, ID y cronología.', 'أحضر الإشعارات وأوراق المحكمة والعقود والهوية.', '带通知、法院文件、租约、合同、ID 和时间线。', 'Mang giấy tờ, hợp đồng, ID, timeline.', 'नोटिस, कोर्ट कागज, अनुबंध, ID लाएं।', 'نوٹس، کورٹ کاغذات، معاہدہ، ID لائیں۔'),
    servicesOffered: tx('Civil legal screening, clinics, volunteer attorney referrals, tenant and family-law help when available.', 'Evaluación civil, clínicas, referencias y ayuda de inquilino/familia.', 'فحص قانوني وعيادات وإحالات ومحامي متطوع.', '民事筛查、法律诊所、志愿律师转介、租客/家庭法帮助。', 'Sàng lọc, clinic, luật sư tình nguyện.', 'सिविल स्क्रीनिंग, क्लिनिक, वकील रेफरल।', 'سول اسکریننگ، کلینک، وکیل ریفرل۔'),
    sourceUrl: 'https://www.makejusticehappen.org/',
    lastVerified: '2026-06-21',
    areaServed: 'Greater Houston / Fort Bend access'
  }
];

export const stepByStepGuides = [
  {
    id: 'school',
    icon: 'GraduationCap',
    target: 'education',
    title: tx('Enroll a child in school', 'Inscribir a un niño en la escuela', 'تسجيل طفل في المدرسة', '给孩子注册学校', 'Ghi danh con vào trường', 'बच्चे का स्कूल नामांकन', 'بچے کا اسکول داخلہ'),
    summary: tx('Find the district, collect documents, register online, and ask for language support.', 'Encuentre el distrito, junte documentos, registre en línea y pida apoyo de idioma.', 'حدد المنطقة واجمع الوثائق وسجل عبر الإنترنت واطلب دعم اللغة.', '查找学区、收集文件、在线注册并申请语言支持。', 'Tìm khu học, chuẩn bị giấy tờ, ghi danh online.', 'जिला खोजें, दस्तावेज जुटाएं, ऑनलाइन पंजीकरण करें।', 'ضلع تلاش کریں، کاغذات جمع کریں، آن لائن داخلہ۔'),
    steps: [
      tx('Find your district by address.', 'Busque su distrito por dirección.', 'ابحث عن منطقتك حسب العنوان.', '按住址查找学区。', 'Tìm khu học theo địa chỉ.', 'पते से अपना स्कूल जिला खोजें।', 'اپنے پتے سے ضلع تلاش کریں۔'),
      tx('Collect birth certificate/passport, immunizations, parent ID, and proof of residency.', 'Reúna acta de nacimiento/pasaporte, vacunas, ID del padre/madre y comprobante de domicilio.', 'اجمع شهادة الميلاد/جواز السفر، التطعيمات، هوية ولي الأمر، وإثبات السكن.', '准备出生证明/护照、疫苗记录、家长身份证和住址证明。', 'Chuẩn bị giấy khai sinh/hộ chiếu, tiêm chủng, ID phụ huynh và chứng minh nơi ở.', 'जन्म प्रमाण/पासपोर्ट, टीकाकरण, अभिभावक ID और निवास प्रमाण जुटाएं।', 'پیدائش کا سرٹیفکیٹ/پاسپورٹ، ویکسین، والدین کی ID اور رہائش کا ثبوت جمع کریں۔'),
      tx('Register through Lamar CISD or Katy ISD online.', 'Inscríbase en línea por Lamar CISD o Katy ISD.', 'سجل عبر الإنترنت من خلال Lamar CISD أو Katy ISD.', '通过 Lamar CISD 或 Katy ISD 在线注册。', 'Ghi danh trực tuyến qua Lamar CISD hoặc Katy ISD.', 'Lamar CISD या Katy ISD में ऑनलाइन नामांकन करें।', 'Lamar CISD یا Katy ISD کے ذریعے آن لائن داخلہ کریں۔'),
      tx('Ask the campus for language testing, transportation, meals, and records help.', 'Pida a la escuela ayuda con idioma, transporte, comidas y expedientes.', 'اطلب من المدرسة اختبار اللغة والمواصلات والوجبات ومساعدة السجلات.', '向学校询问语言测试、交通、餐食和档案帮助。', 'Hỏi trường về kiểm tra ngôn ngữ, xe buýt, bữa ăn và hồ sơ.', 'स्कूल से भाषा जांच, परिवहन, भोजन और रिकॉर्ड सहायता पूछें।', 'اسکول سے زبان ٹیسٹ، آمد و رفت، کھانے اور ریکارڈ مدد پوچھیں۔')
    ],
    documentsNeeded: tx('Birth certificate/passport, immunization record, parent photo ID, proof of residency, previous school records if available.', 'Acta de nacimiento/pasaporte, vacunas, ID del padre/madre, comprobante de domicilio y registros escolares si tiene.', 'شهادة ميلاد/جواز سفر، سجل تطعيم، هوية ولي الأمر، إثبات سكن، وسجلات مدرسية إن وجدت.', '出生证明/护照、疫苗记录、家长身份证、住址证明，如有以前学校记录也带上。', 'Giấy khai sinh/hộ chiếu, tiêm chủng, ID phụ huynh, chứng minh nơi ở, hồ sơ trường cũ nếu có.', 'जन्म प्रमाण/पासपोर्ट, टीकाकरण रिकॉर्ड, अभिभावक फोटो ID, निवास प्रमाण और पुराने स्कूल रिकॉर्ड।', 'پیدائش/پاسپورٹ، ویکسین ریکارڈ، والدین فوٹو ID، رہائش ثبوت، پچھلے اسکول ریکارڈ اگر ہوں۔'),
    eligibility: tx('Public school is open to children living in the district attendance boundary.', 'La escuela pública está abierta a niños que viven dentro de la zona del distrito.', 'المدرسة العامة مفتوحة للأطفال الذين يعيشون داخل حدود المنطقة.', '公立学校面向居住在该学区范围内的儿童。', 'Trường công dành cho trẻ sống trong ranh giới khu học.', 'सरकारी स्कूल जिले की सीमा में रहने वाले बच्चों के लिए खुले हैं।', 'سرکاری اسکول ضلع کی حدود میں رہنے والے بچوں کے لیے ہے۔'),
    safetyNote: tx('Public schools may not deny enrollment because of immigration status.', 'Las escuelas públicas no pueden negar inscripción por estatus migratorio.', 'لا يجوز للمدارس العامة رفض التسجيل بسبب وضع الهجرة.', '公立学校不得因移民身份拒绝入学。', 'Trường công không được từ chối ghi danh vì tình trạng di trú.', 'सरकारी स्कूल इमिग्रेशन स्थिति के कारण नामांकन से मना नहीं कर सकते।', 'سرکاری اسکول امیگریشن حیثیت کی وجہ سے داخلہ رد نہیں کر سکتے۔')
  },
  {
    id: 'food',
    icon: 'Utensils',
    target: 'food',
    title: tx('Get food help', 'Obtener ayuda con comida', 'الحصول على مساعدة غذائية', '获得食物帮助', 'Nhận hỗ trợ thực phẩm', 'खाद्य सहायता पाएं', 'خوراک مدد حاصل کریں'),
    summary: tx('Use Fulshear food fairs first, then regional pantries and county food-assistance referrals.', 'Use ferias de Fulshear primero, luego despensas regionales.', 'ابدأ بمعارض الطعام في فولشير ثم المخازن الإقليمية.', '先用 Fulshear 食品发放，再用区域食品库。', 'Dùng hội chợ thực phẩm Fulshear trước.', 'पहले Fulshear फूड फेयर, फिर पैंट्री।', 'پہلے Fulshear فوڈ فیئر، پھر پینٹری۔'),
    steps: [
      tx('Check Family Hope Fulshear for current food-fair dates.', 'Revise Family Hope Fulshear para fechas actuales de ferias de comida.', 'تحقق من Family Hope Fulshear لمعرفة مواعيد معارض الطعام الحالية.', '查看 Family Hope Fulshear 的最新食品发放日期。', 'Xem Family Hope Fulshear để biết ngày phát thực phẩm.', 'मौजूदा फूड फेयर तारीखों के लिए Family Hope Fulshear देखें।', 'موجودہ فوڈ فیئر تاریخوں کے لیے Family Hope Fulshear دیکھیں۔'),
      tx('Call Katy Christian Ministries before visiting the pantry.', 'Llame a Katy Christian Ministries antes de ir a la despensa.', 'اتصل بـ Katy Christian Ministries قبل زيارة مخزن الطعام.', '去食品库前先致电 Katy Christian Ministries。', 'Gọi Katy Christian Ministries trước khi đến pantry.', 'पैंट्री जाने से पहले Katy Christian Ministries को कॉल करें।', 'پینٹری جانے سے پہلے Katy Christian Ministries کو کال کریں۔'),
      tx('If applying for benefits, use YourTexasBenefits.com or ask 211 for help.', 'Si solicita beneficios, use YourTexasBenefits.com o pida ayuda al 211.', 'إذا كنت تقدم على مزايا، استخدم YourTexasBenefits.com أو اطلب المساعدة من 211.', '申请福利时使用 YourTexasBenefits.com，或拨打 211 求助。', 'Nếu xin quyền lợi, dùng YourTexasBenefits.com hoặc gọi 211.', 'लाभों के लिए YourTexasBenefits.com उपयोग करें या 211 से मदद लें।', 'فوائد کے لیے YourTexasBenefits.com استعمال کریں یا 211 سے مدد لیں۔'),
      tx('Bring ID and address/income documents when a program requests them.', 'Lleve ID y documentos de domicilio/ingresos cuando el programa los pida.', 'أحضر الهوية ووثائق العنوان/الدخل عندما يطلبها البرنامج.', '项目要求时带身份证明和住址/收入文件。', 'Mang ID và giấy tờ địa chỉ/thu nhập khi chương trình yêu cầu.', 'कार्यक्रम मांगे तो ID और पता/आय दस्तावेज लाएं।', 'پروگرام کہے تو ID اور پتہ/آمدنی کے کاغذات لائیں۔')
    ],
    documentsNeeded: tx('Photo ID, proof of address, income information if applying for benefits; emergency food rules vary.', 'ID con foto, comprobante de domicilio, información de ingresos si solicita beneficios; reglas de comida de emergencia varían.', 'هوية بصورة، إثبات عنوان، معلومات دخل عند طلب المزايا؛ قواعد الطعام الطارئ تختلف.', '照片身份证、住址证明、申请福利时的收入信息；紧急食品规则会不同。', 'ID có ảnh, chứng minh địa chỉ, thông tin thu nhập nếu xin quyền lợi; quy định thực phẩm khẩn cấp khác nhau.', 'फोटो ID, पता प्रमाण, लाभ के लिए आय जानकारी; आपात भोजन नियम अलग हो सकते हैं।', 'فوٹو ID، پتہ ثبوت، فوائد کے لیے آمدنی معلومات؛ ایمرجنسی خوراک قواعد بدل سکتے ہیں۔'),
    eligibility: tx('Food fairs and pantries vary by provider; SNAP/WIC eligibility depends on household and income.', 'Ferias y despensas varían por proveedor; SNAP/WIC depende del hogar e ingresos.', 'معارض الطعام والمخازن تختلف حسب الجهة؛ أهلية SNAP/WIC تعتمد على الأسرة والدخل.', '食品发放和食品库规则因机构而异；SNAP/WIC 资格取决于家庭和收入。', 'Hội chợ và pantry tùy nơi; SNAP/WIC tùy gia đình và thu nhập.', 'फूड फेयर और पैंट्री नियम अलग हैं; SNAP/WIC परिवार और आय पर निर्भर है।', 'فوڈ فیئر اور پینٹری کے اصول مختلف ہیں؛ SNAP/WIC گھرانے اور آمدنی پر منحصر ہے۔'),
    safetyNote: tx('Citizen children may be eligible for benefits even when parent status differs.', 'Niños ciudadanos pueden ser elegibles aunque el estatus de los padres sea diferente.', 'قد يكون الأطفال المواطنون مؤهلين حتى لو اختلف وضع الوالدين.', '即使父母身份不同，公民子女也可能符合福利资格。', 'Trẻ em công dân có thể đủ điều kiện dù tình trạng cha mẹ khác.', 'नागरिक बच्चे पात्र हो सकते हैं, भले माता-पिता की स्थिति अलग हो।', 'شہری بچے اہل ہو سکتے ہیں چاہے والدین کی حیثیت مختلف ہو۔')
  },
  {
    id: 'utilities',
    icon: 'Zap',
    target: 'utilities',
    title: tx('Handle utility bills', 'Manejar facturas de servicios', 'التعامل مع فواتير المرافق', '处理水电账单', 'Xử lý hóa đơn tiện ích', 'यूटिलिटी बिल संभालें', 'یوٹیلٹی بل سنبھالیں'),
    summary: tx('Separate City of Fulshear billing questions from Fort Bend County emergency utility assistance.', 'Separe preguntas de cobro municipal de ayuda de emergencia del condado.', 'افصل أسئلة فواتير المدينة عن مساعدة المقاطعة الطارئة.', '区分市账单问题和县紧急援助。', 'Tách hóa đơn thành phố và hỗ trợ khẩn cấp.', 'शहर बिलिंग और काउंटी सहायता अलग रखें।', 'شہر بلنگ اور کاؤنٹی مدد الگ رکھیں۔'),
    steps: [
      tx('For City of Fulshear account or water/sewer questions, contact Utility Billing.', 'Para cuenta municipal o agua/drenaje de Fulshear, contacte Utility Billing.', 'لأسئلة حساب مدينة Fulshear أو الماء/الصرف، اتصل بقسم الفواتير.', 'Fulshear 市账户或水/污水问题请联系 Utility Billing。', 'Về tài khoản City of Fulshear hoặc nước/cống, liên hệ Utility Billing.', 'City of Fulshear खाते या पानी/सीवर प्रश्नों के लिए Utility Billing से संपर्क करें।', 'City of Fulshear اکاؤنٹ یا پانی/سیور سوالات کے لیے Utility Billing سے رابطہ کریں۔'),
      tx('For electric, water, gas, or propane assistance, request a Fort Bend County appointment.', 'Para ayuda con luz, agua, gas o propano, pida cita con Fort Bend County.', 'لمساعدة الكهرباء أو الماء أو الغاز أو البروبان، اطلب موعدا من Fort Bend County.', '电、水、煤气或丙烷援助请预约 Fort Bend County。', 'Cần hỗ trợ điện, nước, gas hoặc propane, xin lịch hẹn Fort Bend County.', 'बिजली, पानी, गैस या प्रोपेन मदद के लिए Fort Bend County अपॉइंटमेंट लें।', 'بجلی، پانی، گیس یا پروپین مدد کے لیے Fort Bend County اپائنٹمنٹ لیں۔'),
      tx('Gather proof of identity, address, income, and the current bill or disconnect notice.', 'Reúna identidad, domicilio, ingresos y factura actual o aviso de corte.', 'اجمع إثبات الهوية والعنوان والدخل والفاتورة الحالية أو إشعار القطع.', '准备身份证明、住址、收入证明和当前账单或断供通知。', 'Chuẩn bị giấy tờ danh tính, địa chỉ, thu nhập, hóa đơn hoặc thông báo cắt.', 'पहचान, पता, आय और मौजूदा बिल या कटऑफ नोटिस जुटाएं।', 'شناخت، پتہ، آمدنی اور موجودہ بل یا کٹ آف نوٹس جمع کریں۔'),
      tx('Apply before shutoff whenever possible.', 'Solicite antes del corte cuando sea posible.', 'قدم قبل القطع كلما أمكن.', '尽量在断供前申请。', 'Nộp đơn trước khi bị cắt nếu có thể.', 'संभव हो तो बंद होने से पहले आवेदन करें।', 'ممکن ہو تو بندش سے پہلے درخواست دیں۔')
    ],
    documentsNeeded: tx('Photo ID, proof of address, proof of income, current utility bill, disconnect notice if any.', 'ID con foto, comprobante de domicilio, ingresos, factura actual y aviso de corte si tiene.', 'هوية بصورة، إثبات عنوان، إثبات دخل، فاتورة مرافق حالية، وإشعار قطع إن وجد.', '照片身份证、住址证明、收入证明、当前水电账单，如有断供通知也带上。', 'ID có ảnh, chứng minh địa chỉ, thu nhập, hóa đơn tiện ích, thông báo cắt nếu có.', 'फोटो ID, पता प्रमाण, आय प्रमाण, मौजूदा यूटिलिटी बिल, कटऑफ नोटिस अगर हो।', 'فوٹو ID، پتہ ثبوت، آمدنی ثبوت، موجودہ بل، کٹ آف نوٹس اگر ہو۔'),
    eligibility: tx('Fort Bend County assistance is for county residents who meet program guidelines.', 'La ayuda de Fort Bend County es para residentes que cumplen las reglas del programa.', 'مساعدة Fort Bend County للمقيمين الذين يستوفون قواعد البرنامج.', 'Fort Bend County 援助面向符合项目规则的县居民。', 'Hỗ trợ Fort Bend County dành cho cư dân đủ điều kiện chương trình.', 'Fort Bend County सहायता उन निवासियों के लिए है जो कार्यक्रम नियम पूरा करें।', 'Fort Bend County مدد ان رہائشیوں کے لیے ہے جو پروگرام قواعد پر پورا اتریں۔'),
    safetyNote: tx('County assistance does not cover deposits or transferred bills from another address.', 'La ayuda del condado no cubre depósitos ni facturas transferidas de otra dirección.', 'مساعدة المقاطعة لا تغطي الودائع أو فواتير منقولة من عنوان آخر.', '县援助不支付押金或从其他地址转来的账单。', 'Hỗ trợ quận không trả tiền đặt cọc hoặc hóa đơn chuyển từ địa chỉ khác.', 'काउंटी मदद जमा राशि या दूसरे पते से ट्रांसफर बिल नहीं कवर करती।', 'کاؤنٹی مدد ڈپازٹ یا دوسرے پتے سے منتقل بل نہیں دیتی۔')
  },
  {
    id: 'doctor',
    icon: 'Stethoscope',
    target: 'health',
    title: tx('Find a doctor or clinic', 'Encontrar doctor o clínica', 'العثور على طبيب أو عيادة', '找医生或诊所', 'Tìm bác sĩ hoặc phòng khám', 'डॉक्टर या क्लिनिक खोजें', 'ڈاکٹر یا کلینک تلاش کریں'),
    summary: tx('Call AccessHealth or Christ Clinic for intake, fees, and required documents.', 'Llame a AccessHealth o Christ Clinic para admisión y documentos.', 'اتصل بـ AccessHealth أو Christ Clinic للتسجيل والرسوم.', '致电 AccessHealth 或 Christ Clinic 了解登记、费用和文件。', 'Gọi AccessHealth hoặc Christ Clinic.', 'AccessHealth या Christ Clinic को कॉल करें।', 'AccessHealth یا Christ Clinic کو کال کریں۔'),
    steps: [
      tx('Choose AccessHealth Richmond or Christ Clinic Katy based on need and location.', 'Elija AccessHealth Richmond o Christ Clinic Katy según necesidad y ubicación.', 'اختر AccessHealth Richmond أو Christ Clinic Katy حسب الحاجة والموقع.', '按需求和地点选择 AccessHealth Richmond 或 Christ Clinic Katy。', 'Chọn AccessHealth Richmond hoặc Christ Clinic Katy theo nhu cầu và vị trí.', 'जरूरत और स्थान के अनुसार AccessHealth Richmond या Christ Clinic Katy चुनें।', 'ضرورت اور مقام کے مطابق AccessHealth Richmond یا Christ Clinic Katy چنیں۔'),
      tx('Call before visiting to ask for intake and documents.', 'Llame antes de visitar para preguntar por admisión y documentos.', 'اتصل قبل الزيارة للسؤال عن التسجيل والوثائق.', '到访前先电话询问登记和所需文件。', 'Gọi trước khi đến để hỏi thủ tục và giấy tờ.', 'जाने से पहले इंटेक और दस्तावेज पूछने के लिए कॉल करें।', 'جانے سے پہلے داخلہ اور کاغذات پوچھنے کے لیے کال کریں۔'),
      tx('Ask about sliding fees, insurance, Medicaid/CHIP, and language access.', 'Pregunte por tarifas ajustadas, seguro, Medicaid/CHIP e idioma.', 'اسأل عن الرسوم المخفضة والتأمين و Medicaid/CHIP واللغة.', '询问浮动收费、保险、Medicaid/CHIP 和语言服务。', 'Hỏi về phí theo thu nhập, bảo hiểm, Medicaid/CHIP và ngôn ngữ.', 'स्लाइडिंग फीस, बीमा, Medicaid/CHIP और भाषा सहायता पूछें।', 'آمدنی کے حساب سے فیس، انشورنس، Medicaid/CHIP اور زبان مدد پوچھیں۔'),
      tx('For life-threatening emergencies, call 911 or go to an ER.', 'Si hay emergencia de vida o muerte, llame al 911 o vaya a emergencias.', 'للطوارئ المهددة للحياة، اتصل بـ 911 أو اذهب للطوارئ.', '危及生命的紧急情况请拨 911 或去急诊。', 'Khẩn cấp đe dọa tính mạng: gọi 911 hoặc đến ER.', 'जानलेवा आपात स्थिति में 911 कॉल करें या ER जाएं।', 'جان لیوا ایمرجنسی میں 911 کال کریں یا ER جائیں۔')
    ],
    documentsNeeded: tx('Photo ID, insurance card if any, proof of income if requesting discount programs.', 'ID con foto, tarjeta de seguro si tiene, comprobante de ingresos si pide descuento.', 'هوية بصورة، بطاقة تأمين إن وجدت، وإثبات دخل عند طلب الخصم.', '照片身份证、保险卡如有，申请折扣时带收入证明。', 'ID có ảnh, thẻ bảo hiểm nếu có, chứng minh thu nhập nếu xin giảm phí.', 'फोटो ID, बीमा कार्ड अगर हो, छूट कार्यक्रम के लिए आय प्रमाण।', 'فوٹو ID، انشورنس کارڈ اگر ہو، رعایت کے لیے آمدنی ثبوت۔'),
    eligibility: tx('Clinic eligibility and fees depend on program rules and household details.', 'Elegibilidad y costos dependen de reglas del programa y detalles del hogar.', 'الأهلية والرسوم تعتمد على قواعد البرنامج وتفاصيل الأسرة.', '诊所资格和费用取决于项目规则和家庭情况。', 'Điều kiện và phí tùy quy định chương trình và gia đình.', 'क्लिनिक योग्यता और फीस कार्यक्रम नियम और परिवार विवरण पर निर्भर हैं।', 'کلینک اہلیت اور فیس پروگرام قواعد اور گھرانے پر منحصر ہیں۔'),
    safetyNote: tx('Emergency rooms must stabilize medical emergencies regardless of ability to pay.', 'Las salas de emergencia deben estabilizar emergencias aunque no pueda pagar.', 'يجب على الطوارئ تثبيت الحالات الطبية الطارئة بغض النظر عن القدرة على الدفع.', '急诊室必须稳定医疗紧急情况，不论支付能力。', 'ER phải ổn định cấp cứu y tế dù khả năng chi trả ra sao.', 'ER को भुगतान क्षमता की परवाह किए बिना आपात स्थिति स्थिर करनी होती है।', 'ER کو ادائیگی کی صلاحیت سے قطع نظر ایمرجنسی مستحکم کرنی ہوتی ہے۔')
  },
  {
    id: 'legal',
    icon: 'Scale',
    target: 'legal',
    title: tx('Find legal help', 'Encontrar ayuda legal', 'العثور على مساعدة قانونية', '寻找法律帮助', 'Tìm trợ giúp pháp lý', 'कानूनी मदद खोजें', 'قانونی مدد تلاش کریں'),
    summary: tx('Use licensed legal-aid providers; avoid notario scams.', 'Use proveedores legales autorizados; evite notarios falsos.', 'استخدم مزودي مساعدة قانونية مرخصين وتجنب النصب.', '使用持证法律援助；避免 notario 骗局。', 'Dùng hỗ trợ pháp lý được cấp phép.', 'लाइसेंस प्राप्त कानूनी सहायता लें।', 'لائسنس یافتہ قانونی مدد لیں۔'),
    steps: [
      tx('Apply with Lone Star Legal Aid or Houston Volunteer Lawyers.', 'Solicite ayuda con Lone Star Legal Aid o Houston Volunteer Lawyers.', 'قدم لدى Lone Star Legal Aid أو Houston Volunteer Lawyers.', '向 Lone Star Legal Aid 或 Houston Volunteer Lawyers 申请。', 'Nộp đơn với Lone Star Legal Aid hoặc Houston Volunteer Lawyers.', 'Lone Star Legal Aid या Houston Volunteer Lawyers में आवेदन करें।', 'Lone Star Legal Aid یا Houston Volunteer Lawyers میں درخواست دیں۔'),
      tx('Gather all letters, court papers, leases, and notices.', 'Reúna cartas, documentos de corte, contratos de renta y avisos.', 'اجمع كل الرسائل وأوراق المحكمة وعقود الإيجار والإشعارات.', '收集所有信件、法院文件、租约和通知。', 'Chuẩn bị thư, giấy tòa, hợp đồng thuê và thông báo.', 'सभी पत्र, कोर्ट कागज, लीज और नोटिस जुटाएं।', 'تمام خطوط، عدالت کاغذات، لیز اور نوٹس جمع کریں۔'),
      tx('Write a short timeline of what happened.', 'Escriba una breve cronología de lo que pasó.', 'اكتب خطا زمنيا قصيرا لما حدث.', '写一份简短的事情时间线。', 'Viết dòng thời gian ngắn về việc đã xảy ra.', 'जो हुआ उसकी छोटी समयरेखा लिखें।', 'جو ہوا اس کی مختصر ٹائم لائن لکھیں۔'),
      tx('Never pay a notario or unlicensed person for immigration legal work.', 'Nunca pague a un notario o persona sin licencia por trabajo legal migratorio.', 'لا تدفع أبدا لكاتب عدل أو شخص غير مرخص لعمل قانوني للهجرة.', '不要付钱给 notario 或无执照人员办理移民法律事务。', 'Không trả tiền cho notario hoặc người không có giấy phép về pháp lý di trú.', 'इमिग्रेशन कानूनी काम के लिए notario या बिना लाइसेंस व्यक्ति को पैसे न दें।', 'امیگریشن قانونی کام کے لیے notario یا غیر لائسنس شخص کو پیسے نہ دیں۔')
    ],
    documentsNeeded: tx('Court papers, notices, lease/contracts, ID, proof of income, benefit letters, immigration letters if relevant.', 'Documentos de corte, avisos, contrato de renta, ID, ingresos, cartas de beneficios y cartas migratorias si aplican.', 'أوراق المحكمة، الإشعارات، عقد الإيجار/العقود، الهوية، إثبات الدخل، رسائل المزايا، ورسائل الهجرة إن وجدت.', '法院文件、通知、租约/合同、身份证、收入证明、福利信，如相关则带移民信件。', 'Giấy tòa, thông báo, hợp đồng thuê, ID, chứng minh thu nhập, thư quyền lợi, thư di trú nếu liên quan.', 'कोर्ट कागज, नोटिस, लीज/अनुबंध, ID, आय प्रमाण, लाभ पत्र, इमिग्रेशन पत्र अगर हों।', 'عدالت کاغذات، نوٹس، لیز/معاہدے، ID، آمدنی ثبوت، فوائد خطوط، امیگریشن خطوط اگر ہوں۔'),
    eligibility: tx('Legal-aid eligibility depends on income, location, issue, and program capacity.', 'Elegibilidad depende de ingresos, ubicación, tipo de problema y capacidad del programa.', 'الأهلية تعتمد على الدخل والموقع ونوع المشكلة وقدرة البرنامج.', '法律援助资格取决于收入、地点、问题类型和项目容量。', 'Điều kiện tùy thu nhập, nơi ở, vấn đề và khả năng chương trình.', 'कानूनी सहायता योग्यता आय, स्थान, मुद्दे और कार्यक्रम क्षमता पर निर्भर है।', 'قانونی مدد اہلیت آمدنی، مقام، مسئلہ اور پروگرام گنجائش پر منحصر ہے۔'),
    safetyNote: tx('Conversations with licensed attorneys are confidential.', 'Las conversaciones con abogados con licencia son confidenciales.', 'المحادثات مع المحامين المرخصين سرية.', '与持证律师的谈话是保密的。', 'Trao đổi với luật sư có giấy phép là bảo mật.', 'लाइसेंस वाले वकीलों से बातचीत गोपनीय होती है।', 'لائسنس یافتہ وکلا سے گفتگو خفیہ ہوتی ہے۔')
  },
  {
    id: 'transport',
    icon: 'Bus',
    target: 'transport',
    title: tx('Book transportation', 'Reservar transporte', 'حجز المواصلات', '预约交通', 'Đặt phương tiện', 'परिवहन बुक करें', 'آمد و رفت بک کریں'),
    summary: tx('Use Fort Bend Transit demand-response service or 211 referrals for transportation needs.', 'Use Fort Bend Transit por solicitud o referencias de 211.', 'استخدم نقل Fort Bend حسب الطلب أو إحالات 211.', '使用 Fort Bend Transit 预约服务或 211 转介。', 'Dùng Fort Bend Transit hoặc 211.', 'Fort Bend Transit या 211 का उपयोग करें।', 'Fort Bend Transit یا 211 استعمال کریں۔'),
    steps: [
      tx('Call Fort Bend Transit demand response before the trip date.', 'Llame a Fort Bend Transit Demand Response antes del viaje.', 'اتصل بخدمة Fort Bend Transit حسب الطلب قبل تاريخ الرحلة.', '出行日前致电 Fort Bend Transit 预约服务。', 'Gọi Fort Bend Transit Demand Response trước ngày đi.', 'यात्रा की तारीख से पहले Fort Bend Transit demand response को कॉल करें।', 'سفر کی تاریخ سے پہلے Fort Bend Transit demand response کو کال کریں۔'),
      tx('Have pickup address, destination, time, and return details ready.', 'Tenga dirección de recogida, destino, hora y regreso listos.', 'جهز عنوان الالتقاط والوجهة والوقت وتفاصيل العودة.', '准备上车地址、目的地、时间和返程信息。', 'Chuẩn bị địa chỉ đón, nơi đến, giờ và chi tiết về.', 'पिकअप पता, गंतव्य, समय और वापसी विवरण तैयार रखें।', 'پک اپ پتہ، منزل، وقت اور واپسی تفصیل تیار رکھیں۔'),
      tx('Ask about fare, service area, and accessibility needs.', 'Pregunte por tarifa, área de servicio y accesibilidad.', 'اسأل عن الأجرة ومنطقة الخدمة واحتياجات الوصول.', '询问票价、服务区域和无障碍需求。', 'Hỏi về giá vé, khu vực phục vụ và nhu cầu hỗ trợ.', 'किराया, सेवा क्षेत्र और पहुंच सुविधा के बारे में पूछें।', 'کرایہ، سروس ایریا اور رسائی ضروریات پوچھیں۔'),
      tx('For non-transit help, call 211 for local referrals.', 'Para ayuda que no sea transporte público, llame al 211.', 'للمساعدة غير المتعلقة بالمواصلات، اتصل بـ 211 للإحالات المحلية.', '非公交类帮助可拨打 211 获取本地转介。', 'Nếu cần hỗ trợ khác, gọi 211 để được giới thiệu.', 'ट्रांजिट के अलावा मदद के लिए स्थानीय रेफरल हेतु 211 कॉल करें।', 'ٹرانزٹ کے علاوہ مدد کے لیے مقامی ریفرل کو 211 کال کریں۔')
    ],
    documentsNeeded: tx('Trip details, rider information, fare, and any eligibility documents for special services.', 'Detalles del viaje, información del pasajero, tarifa y documentos de elegibilidad si aplica.', 'تفاصيل الرحلة ومعلومات الراكب والأجرة وأي وثائق أهلية للخدمات الخاصة.', '行程信息、乘客信息、车费，以及特殊服务所需资格文件。', 'Chi tiết chuyến đi, thông tin người đi, tiền vé và giấy tờ nếu cần dịch vụ đặc biệt.', 'यात्रा विवरण, यात्री जानकारी, किराया और विशेष सेवा के लिए पात्रता दस्तावेज।', 'سفر تفصیل، سوار معلومات، کرایہ، اور خاص سروس کے لیے اہلیت کاغذات۔'),
    eligibility: tx('Service rules vary by trip type and geography.', 'Las reglas varían por tipo de viaje y área.', 'قواعد الخدمة تختلف حسب نوع الرحلة والمنطقة.', '服务规则因行程类型和地区而异。', 'Quy định tùy loại chuyến đi và khu vực.', 'सेवा नियम यात्रा प्रकार और क्षेत्र के अनुसार बदलते हैं।', 'سروس اصول سفر کی قسم اور علاقے کے مطابق بدلتے ہیں۔'),
    safetyNote: tx('Public transit services do not ask riders about immigration status.', 'El transporte público no pregunta a pasajeros por estatus migratorio.', 'خدمات النقل العام لا تسأل الركاب عن وضع الهجرة.', '公共交通服务不询问乘客移民身份。', 'Dịch vụ giao thông công cộng không hỏi tình trạng di trú.', 'सार्वजनिक परिवहन सेवाएं यात्रियों से इमिग्रेशन स्थिति नहीं पूछतीं।', 'عوامی ٹرانزٹ سواروں سے امیگریشن حیثیت نہیں پوچھتی۔')
  }
];

export const emergencyResources = [
  {
    category: tx('Immediate danger', 'Peligro inmediato', 'خطر فوري', '紧急危险', 'Nguy hiểm ngay', 'तत्काल खतरा', 'فوری خطرہ'),
    name: '911 Emergency Services',
    phone: '911',
    website: 'https://www.911.gov/',
    details: tx('Call 911 for life-threatening medical emergencies, fire, violence, or immediate danger.', 'Llame al 911 por emergencia médica, incendio, violencia o peligro inmediato.', 'اتصل بـ 911 للطوارئ الطبية أو الحريق أو العنف أو الخطر.', '生命危险、火灾、暴力或紧急危险请拨打 911。', 'Gọi 911 khi nguy hiểm tính mạng, cháy, bạo lực.', 'जीवन खतरे, आग, हिंसा में 911 कॉल करें।', 'جان خطرہ، آگ، تشدد میں 911 کال کریں۔'),
    sourceUrl: 'https://www.911.gov/'
  },
  {
    category: tx('Domestic violence', 'Violencia doméstica', 'عنف منزلي', '家庭暴力', 'Bạo lực gia đình', 'घरेलू हिंसा', 'گھریلو تشدد'),
    name: "Fort Bend Women's Center",
    phone: '281-342-4357',
    website: 'https://www.fbwc.org/',
    details: tx('Confidential support, emergency shelter, counseling, and advocacy for survivors of domestic violence and sexual assault.', 'Apoyo confidencial, refugio, consejería y defensa.', 'دعم سري ومأوى واستشارة ومناصرة.', '为家庭暴力和性侵幸存者提供保密支持、庇护和咨询。', 'Hỗ trợ bảo mật, nơi trú, tư vấn.', 'गोपनीय सहायता, आश्रय, काउंसलिंग।', 'خفیہ مدد، پناہ، مشاورت۔'),
    sourceUrl: 'https://www.fbwc.org/'
  },
  {
    category: tx('Mental health crisis', 'Crisis de salud mental', 'أزمة نفسية', '心理健康危机', 'Khủng hoảng tâm thần', 'मानसिक स्वास्थ्य संकट', 'ذہنی صحت بحران'),
    name: '988 Suicide & Crisis Lifeline',
    phone: '988',
    website: 'https://988lifeline.org/',
    details: tx('Call or text 988 for suicide, mental-health, or substance-use crisis support.', 'Llame o envíe texto al 988 para crisis suicida, mental o de sustancias.', 'اتصل أو أرسل رسالة إلى 988 لدعم الانتحار أو الصحة النفسية أو المواد.', '自杀、心理健康或物质危机请拨打或短信 988。', 'Gọi/nhắn 988 khi khủng hoảng tâm thần.', 'संकट में 988 कॉल/टेक्स्ट करें।', 'بحران میں 988 کال/ٹیکسٹ کریں۔'),
    sourceUrl: 'https://988lifeline.org/'
  }
];

export const communityPartners = [
  { type: 'Library', name: 'Fulshear Branch Library', services: tx('Local anchor for public computers, community programs, and kit distribution.', 'Ancla local para computadoras, programas y distribución de kits.', 'نقطة محلية للحواسيب والبرامج وتوزيع الكتيبات.', '公共电脑、社区项目和套件发放本地锚点。', 'Điểm địa phương cho máy tính và bộ kit.', 'स्थानीय कंप्यूटर, कार्यक्रम, किट वितरण।', 'مقامی کمپیوٹر، پروگرام، کٹ تقسیم۔') },
  { type: 'Nonprofit', name: 'Family Hope Fulshear', services: tx('Food fairs, parenting classes, family support, and volunteer pathways.', 'Ferias de comida, clases para padres y apoyo familiar.', 'معارض طعام وصفوف للأهل ودعم عائلي.', '食品发放、家长课程和家庭支持。', 'Hội chợ thực phẩm, lớp cha mẹ.', 'फूड फेयर, परिवार सहायता।', 'فوڈ فیئر، خاندان مدد۔') },
  { type: 'County', name: 'Fort Bend County Social Services', services: tx('Utility, rent/mortgage, food, and emergency short-term assistance.', 'Servicios públicos, renta/hipoteca, comida y ayuda de emergencia.', 'مرافق وإيجار/رهن وطعام ومساعدة طارئة.', '公用事业、租金/房贷、食品和短期紧急援助。', 'Tiện ích, thuê nhà, thực phẩm.', 'यूटिलिटी, किराया, खाना सहायता।', 'یوٹیلٹی، کرایہ، خوراک مدد۔') },
  { type: 'Clinic', name: 'AccessHealth Richmond Clinic', services: tx('Community clinic access for medical, behavioral-health, pharmacy, and enrollment support.', 'Clínica comunitaria para salud, farmacia y apoyo de inscripción.', 'عيادة مجتمعية للصحة والصيدلية والتسجيل.', '社区诊所：医疗、心理、药房和登记支持。', 'Phòng khám, nhà thuốc, đăng ký.', 'क्लिनिक, फार्मेसी, नामांकन।', 'کلینک، فارمیسی، اندراج۔') },
  { type: 'Student team', name: 'Fulshear Key Club Network', services: tx('Research, translation review, printed kits, outreach, and source verification.', 'Investigación, revisión de traducción, kits y verificación.', 'بحث ومراجعة ترجمة وكتيبات وتحقق.', '研究、翻译审查、印刷套件、外展和验证。', 'Nghiên cứu, dịch, bộ kit.', 'शोध, अनुवाद, किट, सत्यापन।', 'تحقیق، ترجمہ، کٹ، تصدیق۔') }
];

export const impactMetrics = {
  familiesServed: 'Local pilot',
  kitsDistributed: 'Fulshear-first',
  partnerOrganizations: String(communityPartners.length),
  languagesSupported: String(supportedLanguages.length),
  websiteVisits: 'Live portal'
};

export const chatbotAnswers = [
  {
    topic: 'Food Assistance',
    keywords: ['food', 'eat', 'hungry', 'pantry', 'grocery', 'snap', 'comida', 'hambre'],
    reply: tx('Start with Family Hope Fulshear for local food fairs. For a regional pantry, call Katy Christian Ministries Food Pantry at 281-391-3730 before visiting. For benefit navigation, call 211 or use YourTexasBenefits.com.', 'Empiece con Family Hope Fulshear para ferias locales. Para despensa regional, llame a Katy Christian Ministries al 281-391-3730 antes de ir. Para beneficios, llame al 211 o use YourTexasBenefits.com.', 'ابدأ بـ Family Hope Fulshear لمعارض الطعام المحلية. للمخزن الإقليمي اتصل بـ Katy Christian Ministries على 281-391-3730 قبل الزيارة. للمزايا اتصل بـ 211.', '先联系 Family Hope Fulshear 了解本地食品发放。区域食品库请先致电 Katy Christian Ministries 281-391-3730。福利导航可拨打 211。', 'Bắt đầu với Family Hope Fulshear. Pantry khu vực: gọi Katy Christian Ministries 281-391-3730 trước khi đi. Phúc lợi: gọi 211.', 'पहले Family Hope Fulshear देखें। क्षेत्रीय पैंट्री के लिए Katy Christian Ministries 281-391-3730 पर कॉल करें। लाभ के लिए 211।', 'پہلے Family Hope Fulshear دیکھیں۔ علاقائی پینٹری کے لیے Katy Christian Ministries 281-391-3730 کال کریں۔ فوائد کے لیے 211۔')
  },
  {
    topic: 'Utility Assistance',
    keywords: ['utility', 'utilities', 'electric', 'water', 'gas', 'bill', 'disconnect', 'servicios'],
    reply: tx('For a City of Fulshear utility-account question, call Utility Billing at 281-346-8830. For emergency help paying electric, water, gas, or propane, call Fort Bend County Social Services and ask for utility assistance.', 'Para preguntas de cuenta de Fulshear, llame a Utility Billing al 281-346-8830. Para ayuda de emergencia con luz, agua, gas o propano, llame a Fort Bend County Social Services.', 'لسؤال عن حساب مرافق فولشير اتصل بـ 281-346-8830. للمساعدة الطارئة في الدفع اتصل بخدمات Fort Bend County الاجتماعية.', 'Fulshear 市账户问题请拨 281-346-8830。紧急支付电、水、气或丙烷请联系 Fort Bend County Social Services。', 'Hóa đơn Fulshear: gọi 281-346-8830. Cần hỗ trợ trả điện/nước/gas: gọi Fort Bend County Social Services.', 'Fulshear बिलिंग: 281-346-8830। बिल सहायता: Fort Bend County Social Services।', 'Fulshear بلنگ: 281-346-8830۔ بل مدد: Fort Bend County Social Services۔')
  },
  {
    topic: 'Healthcare',
    keywords: ['doctor', 'clinic', 'health', 'dentist', 'medicine', 'sick', 'doctor'],
    reply: tx('For a clinic, call AccessHealth Richmond at 281-342-4530 or Christ Clinic Katy at 281-391-0190. Ask about intake, sliding fees, insurance, language access, and documents before visiting.', 'Para clínica, llame a AccessHealth Richmond 281-342-4530 o Christ Clinic Katy 281-391-0190. Pregunte por admisión, costos, seguro, idioma y documentos.', 'للعيادة اتصل بـ AccessHealth Richmond 281-342-4530 أو Christ Clinic Katy 281-391-0190. اسأل عن التسجيل والرسوم واللغة والوثائق.', '诊所可致电 AccessHealth Richmond 281-342-4530 或 Christ Clinic Katy 281-391-0190。去之前询问登记、费用、保险、语言和文件。', 'Gọi AccessHealth Richmond 281-342-4530 hoặc Christ Clinic Katy 281-391-0190. Hỏi về giấy tờ và phí.', 'AccessHealth Richmond 281-342-4530 या Christ Clinic Katy 281-391-0190 कॉल करें।', 'AccessHealth Richmond 281-342-4530 یا Christ Clinic Katy 281-391-0190 کال کریں۔')
  },
  {
    topic: 'School Enrollment',
    keywords: ['school', 'enroll', 'register', 'child', 'district', 'escuela'],
    reply: tx('Find your school district by address, then use Lamar CISD Enrollment or Katy ISD Registration. Bring birth certificate/passport, immunizations, parent ID, proof of residency, and prior school records if available.', 'Busque su distrito por dirección y use Lamar CISD o Katy ISD. Lleve acta/pasaporte, vacunas, ID, domicilio y registros escolares.', 'حدد منطقتك حسب العنوان ثم استخدم Lamar CISD أو Katy ISD. أحضر شهادة ميلاد/جواز ولقاحات وهوية وإثبات سكن.', '按地址查找学区，然后使用 Lamar CISD 或 Katy ISD 注册。带出生证明/护照、疫苗、家长 ID、居住证明和成绩记录。', 'Tìm khu học theo địa chỉ rồi dùng Lamar CISD hoặc Katy ISD. Mang giấy khai sinh, tiêm chủng, ID, địa chỉ.', 'पते से जिला खोजें, फिर Lamar CISD या Katy ISD। जन्म प्रमाण, टीका, ID, पता प्रमाण लाएं।', 'پتے سے ضلع تلاش کریں، پھر Lamar CISD یا Katy ISD۔ برتھ سرٹیفکیٹ، ویکسین، ID، پتہ لائیں۔')
  },
  {
    topic: 'Legal Aid',
    keywords: ['legal', 'lawyer', 'immigration', 'tenant', 'rights', 'notario'],
    reply: tx('Use licensed help only. Apply with Lone Star Legal Aid at 1-800-733-8394 or Houston Volunteer Lawyers at 713-228-0735. Bring notices, court papers, leases, contracts, and a timeline.', 'Use ayuda autorizada. Lone Star Legal Aid: 1-800-733-8394. Houston Volunteer Lawyers: 713-228-0735. Lleve avisos, corte, contrato y cronología.', 'استخدم مساعدة مرخصة فقط. Lone Star Legal Aid: 1-800-733-8394 أو Houston Volunteer Lawyers: 713-228-0735.', '只使用持证帮助。Lone Star Legal Aid: 1-800-733-8394；Houston Volunteer Lawyers: 713-228-0735。', 'Chỉ dùng hỗ trợ được cấp phép. Lone Star Legal Aid 1-800-733-8394 hoặc HVL 713-228-0735.', 'केवल लाइसेंस कानूनी मदद लें। Lone Star Legal Aid 1-800-733-8394 या HVL 713-228-0735।', 'صرف لائسنس یافتہ مدد لیں۔ Lone Star Legal Aid 1-800-733-8394 یا HVL 713-228-0735۔')
  },
  {
    topic: 'Transportation',
    keywords: ['transport', 'ride', 'bus', 'transit', 'car', 'transportation'],
    reply: tx('For scheduled public rides, call Fort Bend Transit Demand Response at 866-751-8747. Have pickup address, destination, time, and return details ready. For other transportation referrals, call 211.', 'Para viajes programados, llame a Fort Bend Transit Demand Response 866-751-8747. Tenga dirección, destino, hora y regreso. Para otras referencias, llame al 211.', 'للرحلات المجدولة اتصل بـ Fort Bend Transit على 866-751-8747. جهز العنوان والوجهة والوقت والعودة. للإحالات الأخرى اتصل بـ 211.', '预约公共交通请拨 Fort Bend Transit Demand Response 866-751-8747。准备上车地址、目的地、时间和返程。其他转介拨 211。', 'Gọi Fort Bend Transit 866-751-8747. Chuẩn bị địa chỉ, điểm đến, giờ, chuyến về. Khác gọi 211.', 'Fort Bend Transit 866-751-8747 कॉल करें। पिकअप, गंतव्य, समय तैयार रखें। अन्य रेफरल 211।', 'Fort Bend Transit 866-751-8747 کال کریں۔ پِک اپ، منزل، وقت تیار رکھیں۔ دیگر کے لیے 211۔')
  },
  {
    topic: 'Emergency',
    keywords: ['emergency', 'danger', 'violence', 'crisis', '911', '988'],
    reply: tx('If there is immediate danger, call 911. For mental-health crisis support, call or text 988. For domestic violence support, call Fort Bend Women’s Center at 281-342-4357.', 'Si hay peligro inmediato, llame al 911. Para crisis mental, llame o texte al 988. Para violencia doméstica, llame a Fort Bend Women’s Center al 281-342-4357.', 'إذا كان هناك خطر فوري اتصل بـ 911. لأزمة نفسية اتصل أو أرسل إلى 988. للعنف المنزلي اتصل بـ Fort Bend Women’s Center على 281-342-4357.', '紧急危险拨 911。心理危机拨/短信 988。家庭暴力支持拨 Fort Bend Women’s Center 281-342-4357。', 'Nguy hiểm ngay: gọi 911. Khủng hoảng tâm thần: 988. Bạo lực gia đình: 281-342-4357.', 'तत्काल खतरा: 911। मानसिक संकट: 988। घरेलू हिंसा: 281-342-4357।', 'فوری خطرہ: 911۔ ذہنی بحران: 988۔ گھریلو تشدد: 281-342-4357۔')
  },
  {
    topic: 'Required Documents',
    keywords: ['document', 'documents', 'paperwork', 'id', 'bring', 'income'],
    reply: tx('Common documents include photo ID, proof of address, proof of income, current bills/notices, birth certificate/passport, immunization record, leases, and court papers. Each program sets its own rules.', 'Documentos comunes: ID, domicilio, ingresos, facturas/avisos, acta/pasaporte, vacunas, contrato y corte. Cada programa tiene reglas.', 'الوثائق الشائعة: هوية وعنوان ودخل وفواتير/إشعارات وشهادة/جواز ولقاحات وعقود وأوراق محكمة. لكل برنامج قواعد.', '常见文件包括身份证明、地址、收入、账单/通知、出生证明/护照、疫苗记录、租约和法院文件。每个项目规则不同。', 'Giấy tờ thường có: ID, địa chỉ, thu nhập, hóa đơn, khai sinh/hộ chiếu, tiêm chủng, hợp đồng, tòa.', 'सामान्य दस्तावेज: ID, पता, आय, बिल/नोटिस, जन्म प्रमाण/पासपोर्ट, टीका, लीज, कोर्ट कागज।', 'عام کاغذات: ID، پتہ، آمدنی، بل/نوٹس، برتھ سرٹیفکیٹ/پاسپورٹ، ویکسین، لیز، کورٹ۔')
  }
];

export const researchCards = [
  { source: 'Fulshear-first', stat: 'Local', text: tx('Use city and Fulshear anchors first, then regional Fort Bend providers.', 'Primero recursos de Fulshear, luego Fort Bend.', 'ابدأ بموارد فولشير ثم فورت بند.', '先用 Fulshear 本地，再用 Fort Bend 区域。', 'Fulshear trước, Fort Bend sau.', 'पहले Fulshear, फिर Fort Bend।', 'پہلے Fulshear، پھر Fort Bend۔') },
  { source: 'Source-linked', stat: '2026', text: tx('Every listing stores an official source URL and verification date.', 'Cada listado guarda fuente oficial y fecha.', 'كل مورد له رابط مصدر وتاريخ تحقق.', '每项都有官方来源和验证日期。', 'Mỗi mục có nguồn và ngày xác minh.', 'हर सूची में स्रोत और तारीख।', 'ہر لسٹنگ میں ذریعہ اور تاریخ۔') },
  { source: 'Translation-safe', stat: '7', text: tx('The portal supports seven language choices and RTL layout for Arabic and Urdu.', 'El portal admite siete idiomas y RTL.', 'يدعم سبع لغات واتجاه RTL.', '支持七种语言和 RTL。', 'Hỗ trợ 7 ngôn ngữ và RTL.', '7 भाषाएं और RTL समर्थन।', '7 زبانیں اور RTL۔') },
  { source: 'No backend', stat: 'Local', text: tx('Resource lookup, guides, feedback state, and chatbot answers run locally.', 'Búsqueda, guías, feedback y chatbot funcionan localmente.', 'البحث والأدلة والروبوت تعمل محلياً.', '搜索、指南、反馈和聊天均本地运行。', 'Tìm kiếm, hướng dẫn, chatbot chạy local.', 'सर्च, गाइड, चैटबॉट लोकल।', 'سرچ، گائیڈ، چیٹ بوٹ لوکل۔') }
];
