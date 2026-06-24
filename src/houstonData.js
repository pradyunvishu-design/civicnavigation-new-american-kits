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
const all = (text) => tx(text, text, text, text, text, text, text);

const enLocale = {
  nav: {
    home: 'Home',
    directory: 'Directory',
    guides: 'Guides',
    kit: 'Sample Kit',
    volunteer: 'Volunteer',
    about: 'About',
    emergency: 'Emergency'
  },
  home: {
    eyebrow: 'Houston civic navigation network',
    title: 'A visible path through Houston’s help systems.',
    subtitle: 'New American Kits turns verified Houston and Harris County resources into a multilingual story, printed handout, and searchable civic portal for immigrant and refugee families.',
    primary: 'Find Houston help',
    secondary: 'Read the guides',
    storyEyebrow: 'Harris County edition',
    storyTitle: 'From one printed booklet to a citywide map of trusted support.',
    chapters: [
      ['01 // The City', 'Houston is vast: a family may need food in Gulfton, a clinic in the East End, school enrollment in HISD, and legal help downtown.'],
      ['02 // The Gap', 'Resources exist, but phone trees, documents, office hours, and language barriers can make the system feel invisible.'],
      ['03 // The Kit', 'The booklet gives families a first path: 911, 988, 211, key documents, and plain-language next steps.'],
      ['04 // The Portal', 'The website keeps that path current with Houston-wide search, source links, emergency contacts, guides, and the Civic Navigator chatbot.']
    ],
    portalTitle: 'Verified Houston resources',
    portalText: 'Houston-first, Harris County-wide: food, healthcare, school enrollment, housing, utilities, English classes, legal aid, transportation, and emergency support.',
    modelTitle: 'One handout. One live portal. One citywide support map.',
    modelText: 'The design stays calm and readable while the directory handles long names, multilingual labels, and source-checked local details.',
    actionTitle: 'Built for Harris County families.',
    actionText: 'Each listing includes a source link and verification date so volunteers can keep the printed booklet aligned with the live portal.'
  },
  pages: {
    directoryTitle: 'Houston Resource Directory',
    directoryDesc: 'Search verified Houston and Harris County resources by life situation.',
    guidesTitle: 'Step-by-Step Houston Guides',
    guidesDesc: 'Plain-language instructions based on the Harris County booklet and current local source pages.',
    kitTitle: 'Sample Printed Kit',
    kitDesc: 'A preview of the Harris County assistance guide families can receive in a physical New American Kit.',
    kitIntro: 'This sample booklet shows how the printed kit turns Houston resources into simple, step-by-step pages families can keep, share, and scan back into the live portal.',
    kitOpen: 'Open PDF',
    kitDownload: 'Download guide',
    kitNote: 'PDF preview works best on desktop. On phones, use Open PDF for a full-screen reader.',
    volunteerTitle: 'Volunteer & Get Involved',
    volunteerDesc: 'A student operating model for research, translation, distribution, and upkeep across Houston.',
    feedbackTitle: 'Community Feedback',
    feedbackDesc: 'Report outdated information, suggest a Houston resource, request translation help, or ask a question.',
    aboutTitle: 'About the Project',
    aboutDesc: 'A student-led Houston civic navigation initiative making support visible, local, plain-language, and multilingual.',
    emergencyTitle: 'Emergency Resources',
    emergencyDesc: 'For urgent danger or a life-threatening crisis, call 911 immediately.'
  },
  labels: {
    search: 'Search',
    searchPlaceholder: 'Search resources, guides, or organizations...',
    allResources: 'All resources',
    lifeSituations: 'Life situations',
    verified: 'Verified Houston results',
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
    noResults: 'No matching resources found. Try a broader search term or call 211.',
    sourceNote: 'Use the source link or call before visiting; funding, hours, and eligibility can change.'
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
    welcome: 'Welcome to the Houston Civic Navigator. Choose a prompt or type what your family needs help with.',
    placeholder: 'Type your question...',
    close: 'Close',
    unknown: 'I could not find a direct match. Try food, healthcare, school, rent, utility bills, English classes, legal aid, transportation, or emergency.',
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
    footer: 'A student-led civic navigation project for Houston and Harris County families.',
    research: 'Research basis',
    touchpoints: 'Houston touchpoints'
  }
};

function mergeLocale(overrides) {
  return {
    ...enLocale,
    ...overrides,
    nav: { ...enLocale.nav, ...(overrides.nav || {}) },
    home: { ...enLocale.home, ...(overrides.home || {}) },
    pages: { ...enLocale.pages, ...(overrides.pages || {}) },
    labels: { ...enLocale.labels, ...(overrides.labels || {}) },
    forms: { ...enLocale.forms, ...(overrides.forms || {}) },
    chatbot: { ...enLocale.chatbot, ...(overrides.chatbot || {}) },
    misc: { ...enLocale.misc, ...(overrides.misc || {}) }
  };
}

export const locales = {
  en: enLocale,
  es: mergeLocale({
    nav: { home: 'Inicio', directory: 'Directorio', guides: 'Guías', kit: 'Kit ejemplo', volunteer: 'Voluntariado', about: 'Acerca de', emergency: 'Emergencia' },
    home: {
      eyebrow: 'Red de navegación cívica de Houston',
      title: 'Un camino visible por los sistemas de ayuda de Houston.',
      subtitle: 'New American Kits convierte recursos verificados de Houston y el condado Harris en una historia multilingüe, una guía impresa y un portal cívico searchable.',
      primary: 'Encontrar ayuda en Houston',
      secondary: 'Leer las guías',
      storyEyebrow: 'Edición del condado Harris',
      storyTitle: 'De un folleto impreso a un mapa de apoyo confiable en toda la ciudad.',
      chapters: [
        ['01 // La ciudad', 'Houston es enorme: una familia puede necesitar comida en Gulfton, una clínica en East End, inscripción escolar en HISD y ayuda legal en el centro.'],
        ['02 // La brecha', 'Los recursos existen, pero teléfonos, documentos, horarios y barreras de idioma pueden hacer invisible el sistema.'],
        ['03 // El kit', 'El folleto da un primer camino: 911, 988, 211, documentos clave y pasos claros.'],
        ['04 // El portal', 'El sitio mantiene ese camino actualizado con búsqueda, fuentes, emergencias, guías y el chatbot Civic Navigator.']
      ],
      portalTitle: 'Recursos verificados de Houston',
      portalText: 'Houston primero y todo el condado Harris: comida, salud, escuela, vivienda, servicios públicos, inglés, ayuda legal, transporte y emergencias.',
      modelTitle: 'Un folleto. Un portal vivo. Un mapa de apoyo para la ciudad.',
      actionTitle: 'Creado para familias del condado Harris.',
      actionText: 'Cada listado incluye fuente y fecha de verificación para mantener el folleto impreso alineado con el portal.'
    },
    pages: {
      directoryTitle: 'Directorio de Recursos de Houston',
      directoryDesc: 'Busque recursos verificados de Houston y el condado Harris por situación de vida.',
      guidesTitle: 'Guías de Houston Paso a Paso',
      guidesDesc: 'Instrucciones claras basadas en el folleto del condado Harris y fuentes locales actuales.',
      kitTitle: 'Kit impreso de ejemplo',
      kitDesc: 'Vista previa de la guía de asistencia del condado Harris que las familias pueden recibir en un New American Kit físico.',
      kitIntro: 'Este folleto muestra cómo el kit impreso convierte recursos de Houston en páginas simples que las familias pueden guardar, compartir y escanear para volver al portal.',
      kitOpen: 'Abrir PDF',
      kitDownload: 'Descargar guía',
      kitNote: 'La vista previa funciona mejor en computadora. En teléfono, use Abrir PDF para lector de pantalla completa.',
      volunteerDesc: 'Un modelo estudiantil para investigación, traducción, distribución y mantenimiento en Houston.',
      feedbackDesc: 'Reporte información vencida, sugiera recursos de Houston, pida traducción o haga una pregunta.',
      aboutDesc: 'Una iniciativa estudiantil de navegación cívica de Houston para apoyo visible, local, claro y multilingüe.'
    },
    labels: {
      search: 'Buscar', allResources: 'Todos los recursos', lifeSituations: 'Situaciones de vida', verified: 'Resultados verificados de Houston',
      items: 'elementos', source: 'Fuente', lastVerified: 'Verificado', areaServed: 'Área atendida', hours: 'Horario', languages: 'Idiomas',
      cost: 'Costo', eligibility: 'Elegibilidad', documents: 'Documentos', contact: 'Contacto', services: 'Servicios', website: 'Sitio web',
      call: 'Llamar', categoryScope: 'Alcance de categoría', relatedGuides: 'Leer guías relacionadas',
      noResults: 'No se encontraron recursos. Pruebe una búsqueda más amplia o llame al 211.'
    },
    forms: {
      name: 'Nombre', email: 'Correo electrónico', role: 'Rol preferido', why: '¿Por qué quiere ayudar?', saveInterest: 'Guardar interés',
      feedbackType: 'Tipo de comentario', organization: 'Nombre de la organización', details: 'Detalles', submitFeedback: 'Enviar comentario',
      received: 'Comentario recibido', another: 'Enviar otro',
      tabs: ['Información vencida', 'Sugerir recurso', 'Traducción', 'Historia de éxito', 'Pregunta']
    },
    chatbot: {
      title: 'Navegador Cívico', welcome: 'Bienvenido al Navegador Cívico de Houston. Elija una pregunta o escriba lo que necesita su familia.',
      placeholder: 'Escriba su pregunta...', close: 'Cerrar',
      prompts: ['Necesito comida', 'Servicios públicos', 'Encontrar doctor', 'Inscribir escuela', 'Ayuda legal', 'Transporte', 'Emergencia', 'Documentos']
    },
    misc: { guide: 'Guía', urgent: 'Ayuda urgente', touchpoints: 'Puntos de ayuda en Houston' }
  }),
  ar: mergeLocale({
    nav: { home: 'الرئيسية', directory: 'الدليل', guides: 'الأدلة', kit: 'نموذج الكتيب', volunteer: 'تطوع', about: 'حول', emergency: 'طوارئ' },
    home: {
      eyebrow: 'شبكة الملاحة المدنية في هيوستن',
      title: 'طريق واضح داخل أنظمة المساعدة في هيوستن.',
      subtitle: 'تحول New American Kits موارد هيوستن ومقاطعة هاريس الموثقة إلى كتيب مطبوع وبوابة مدنية متعددة اللغات.',
      primary: 'ابحث عن مساعدة في هيوستن',
      secondary: 'اقرأ الأدلة',
      storyEyebrow: 'إصدار مقاطعة هاريس',
      storyTitle: 'من كتيب مطبوع إلى خريطة دعم موثوقة في المدينة.',
      chapters: [
        ['01 // المدينة', 'هيوستن واسعة؛ قد تحتاج الأسرة إلى طعام أو عيادة أو تسجيل مدرسة أو مساعدة قانونية في أماكن مختلفة.'],
        ['02 // الفجوة', 'الموارد موجودة، لكن الهواتف والوثائق والساعات واللغة قد تجعل النظام غير واضح.'],
        ['03 // الكتيب', 'يعطي الكتيب بداية واضحة: 911 و988 و211 والوثائق الأساسية والخطوات التالية.'],
        ['04 // البوابة', 'يبقي الموقع المعلومات محدثة بالبحث والروابط والمساعدة الطارئة والأدلة وروبوت Civic Navigator.']
      ],
      portalTitle: 'موارد موثقة في هيوستن',
      portalText: 'هيوستن ومقاطعة هاريس: طعام، صحة، مدرسة، سكن، مرافق، إنجليزية، قانون، مواصلات وطوارئ.',
      modelTitle: 'كتيب واحد. بوابة حية. خريطة دعم للمدينة.',
      actionTitle: 'مصمم لعائلات مقاطعة هاريس.'
    },
    pages: {
      directoryTitle: 'دليل موارد هيوستن',
      directoryDesc: 'ابحث عن موارد موثقة في هيوستن ومقاطعة هاريس حسب الحاجة.',
      guidesTitle: 'أدلة هيوستن خطوة بخطوة',
      kitTitle: 'نموذج الكتيب المطبوع',
      kitDesc: 'معاينة لدليل المساعدة في مقاطعة هاريس الذي يمكن للعائلات الحصول عليه داخل New American Kit.',
      kitIntro: 'يوضح هذا الكتيب كيف يحول الإصدار المطبوع موارد هيوستن إلى صفحات بسيطة يمكن للعائلات الاحتفاظ بها ومشاركتها والعودة منها إلى البوابة.',
      kitOpen: 'فتح PDF',
      kitDownload: 'تنزيل الدليل',
      kitNote: 'تعمل المعاينة بشكل أفضل على الكمبيوتر. على الهاتف استخدم فتح PDF للقراءة بملء الشاشة.',
      volunteerDesc: 'نموذج طلابي للبحث والترجمة والتوزيع والتحديث في هيوستن.',
      aboutDesc: 'مبادرة طلابية تجعل الدعم المدني في هيوستن واضحاً ومحلياً ومتعدد اللغات.'
    },
    labels: { search: 'بحث', allResources: 'كل الموارد', lifeSituations: 'احتياجات الحياة', verified: 'نتائج موثقة في هيوستن', source: 'المصدر', call: 'اتصل', website: 'الموقع' },
    forms: { name: 'الاسم', email: 'البريد الإلكتروني', role: 'الدور المفضل', details: 'التفاصيل', submitFeedback: 'إرسال الملاحظة', received: 'تم الاستلام' },
    chatbot: { title: 'الملاح المدني', placeholder: 'اكتب سؤالك...', close: 'إغلاق', prompts: ['طعام', 'فواتير', 'طبيب', 'مدرسة', 'قانون', 'مواصلات', 'طوارئ', 'وثائق'] },
    misc: { guide: 'دليل', urgent: 'مساعدة عاجلة', touchpoints: 'نقاط مساعدة في هيوستن' }
  }),
  zh: mergeLocale({
    nav: { home: '首页', directory: '目录', guides: '指南', kit: '样例工具包', volunteer: '志愿者', about: '关于', emergency: '紧急' },
    home: {
      eyebrow: '休斯顿公共服务导航网络',
      title: '在休斯顿求助系统中找到清晰路径。',
      subtitle: 'New American Kits 将休斯顿和哈里斯县已核实资源整理成多语言故事、纸质手册和可搜索门户。',
      primary: '寻找休斯顿帮助',
      secondary: '阅读指南',
      storyEyebrow: '哈里斯县版本',
      storyTitle: '从一本手册到全城可信支持地图。',
      chapters: [
        ['01 // 城市', '休斯顿很大：家庭可能需要食品、诊所、HISD 入学和法律帮助。'],
        ['02 // 缺口', '资源存在，但电话、文件、时间和语言障碍会让系统难以看见。'],
        ['03 // 工具包', '手册提供第一步：911、988、211、关键文件和清晰步骤。'],
        ['04 // 门户', '网站用搜索、来源链接、紧急资源、指南和聊天助手保持信息更新。']
      ],
      portalTitle: '已核实的休斯顿资源',
      modelTitle: '一本手册。一个在线门户。一张城市支持地图。',
      actionTitle: '为哈里斯县家庭建立。'
    },
    pages: {
      directoryTitle: '休斯顿资源目录',
      directoryDesc: '按生活需求搜索休斯顿和哈里斯县资源。',
      guidesTitle: '休斯顿分步指南',
      kitTitle: '纸质工具包样例',
      kitDesc: '哈里斯县援助指南预览，家庭可在实体 New American Kit 中收到。',
      kitIntro: '这本样例手册展示纸质工具包如何把休斯顿资源整理成家庭可保存、分享并扫码返回门户的简单页面。',
      kitOpen: '打开 PDF',
      kitDownload: '下载指南',
      kitNote: 'PDF 预览在电脑上效果最好。手机上请使用打开 PDF。'
    },
    labels: { search: '搜索', allResources: '所有资源', lifeSituations: '生活需求', verified: '已核实休斯顿结果', source: '来源', call: '拨打', website: '网站' },
    forms: { name: '姓名', email: '电子邮件', details: '详情', submitFeedback: '提交反馈', received: '已收到' },
    chatbot: { title: '公共服务导航员', placeholder: '输入问题...', close: '关闭', prompts: ['需要食物', '水电费', '找医生', '学校注册', '法律帮助', '交通', '紧急', '文件'] },
    misc: { guide: '指南', urgent: '紧急帮助', touchpoints: '休斯顿服务点' }
  }),
  vi: mergeLocale({
    nav: { home: 'Trang chủ', directory: 'Danh mục', guides: 'Hướng dẫn', kit: 'Bộ kit mẫu', volunteer: 'Tình nguyện', about: 'Giới thiệu', emergency: 'Khẩn cấp' },
    home: {
      eyebrow: 'Mạng điều hướng công dân Houston',
      title: 'Một lối đi rõ ràng qua hệ thống trợ giúp Houston.',
      subtitle: 'New American Kits biến nguồn lực đã kiểm chứng của Houston và Harris County thành sổ tay, câu chuyện đa ngôn ngữ và cổng tìm kiếm.',
      primary: 'Tìm trợ giúp Houston',
      secondary: 'Đọc hướng dẫn',
      storyEyebrow: 'Bản Harris County',
      storyTitle: 'Từ sổ tay in đến bản đồ hỗ trợ đáng tin cậy toàn thành phố.',
      chapters: [
        ['01 // Thành phố', 'Houston rất rộng; một gia đình có thể cần thực phẩm, phòng khám, ghi danh HISD và trợ giúp pháp lý.'],
        ['02 // Khoảng cách', 'Nguồn lực có sẵn nhưng điện thoại, giấy tờ, giờ mở cửa và ngôn ngữ gây khó khăn.'],
        ['03 // Bộ kit', 'Sổ tay cho bước đầu: 911, 988, 211, giấy tờ cần giữ và các bước đơn giản.'],
        ['04 // Cổng thông tin', 'Trang web cập nhật thông tin với tìm kiếm, nguồn, khẩn cấp, hướng dẫn và chatbot.']
      ],
      portalTitle: 'Nguồn lực Houston đã kiểm chứng',
      actionTitle: 'Dành cho gia đình Harris County.'
    },
    pages: {
      directoryTitle: 'Danh mục nguồn lực Houston',
      directoryDesc: 'Tìm nguồn lực Houston và Harris County theo nhu cầu.',
      guidesTitle: 'Hướng dẫn Houston từng bước',
      kitTitle: 'Bộ kit in mẫu',
      kitDesc: 'Bản xem trước hướng dẫn hỗ trợ Harris County mà gia đình có thể nhận trong New American Kit.',
      kitIntro: 'Sổ tay mẫu này cho thấy bộ kit in biến nguồn lực Houston thành các trang đơn giản để gia đình giữ, chia sẻ và quét về cổng trực tuyến.',
      kitOpen: 'Mở PDF',
      kitDownload: 'Tải hướng dẫn',
      kitNote: 'Xem trước PDF tốt nhất trên máy tính. Trên điện thoại, dùng Mở PDF.'
    },
    labels: { search: 'Tìm kiếm', allResources: 'Tất cả nguồn lực', lifeSituations: 'Nhu cầu', verified: 'Kết quả Houston đã kiểm chứng', source: 'Nguồn', call: 'Gọi', website: 'Trang web' },
    forms: { name: 'Tên', email: 'Email', details: 'Chi tiết', submitFeedback: 'Gửi phản hồi', received: 'Đã nhận' },
    chatbot: { title: 'Civic Navigator', placeholder: 'Nhập câu hỏi...', close: 'Đóng', prompts: ['Cần thức ăn', 'Hóa đơn', 'Bác sĩ', 'Ghi danh trường', 'Pháp lý', 'Giao thông', 'Khẩn cấp', 'Giấy tờ'] },
    misc: { guide: 'Hướng dẫn', urgent: 'Trợ giúp khẩn cấp', touchpoints: 'Điểm hỗ trợ Houston' }
  }),
  hi: mergeLocale({
    nav: { home: 'होम', directory: 'डायरेक्टरी', guides: 'गाइड', kit: 'नमूना किट', volunteer: 'स्वयंसेवक', about: 'परिचय', emergency: 'आपातकाल' },
    home: {
      eyebrow: 'ह्यूस्टन नागरिक सहायता नेटवर्क',
      title: 'ह्यूस्टन की सहायता प्रणालियों में साफ रास्ता।',
      subtitle: 'New American Kits ह्यूस्टन और Harris County संसाधनों को बहुभाषी कहानी, छपे हैंडआउट और खोज योग्य पोर्टल में बदलता है।',
      primary: 'ह्यूस्टन मदद खोजें',
      secondary: 'गाइड पढ़ें',
      storyEyebrow: 'Harris County संस्करण',
      storyTitle: 'एक छपे बुकलेट से पूरे शहर के भरोसेमंद सहायता नक्शे तक।',
      chapters: [
        ['01 // शहर', 'ह्यूस्टन बड़ा है; परिवार को भोजन, क्लिनिक, HISD नामांकन और कानूनी मदद अलग जगहों पर चाहिए हो सकती है।'],
        ['02 // दूरी', 'संसाधन हैं, लेकिन फोन, कागज, समय और भाषा प्रणाली को कठिन बना सकते हैं।'],
        ['03 // किट', 'बुकलेट पहला रास्ता देता है: 911, 988, 211, जरूरी दस्तावेज और सरल कदम।'],
        ['04 // पोर्टल', 'वेबसाइट खोज, स्रोत, आपात संसाधन, गाइड और चैटबॉट से जानकारी अपडेट रखती है।']
      ],
      portalTitle: 'सत्यापित ह्यूस्टन संसाधन',
      actionTitle: 'Harris County परिवारों के लिए बनाया गया।'
    },
    pages: {
      directoryTitle: 'ह्यूस्टन संसाधन डायरेक्टरी',
      directoryDesc: 'जरूरत के अनुसार ह्यूस्टन और Harris County संसाधन खोजें।',
      guidesTitle: 'ह्यूस्टन चरण-दर-चरण गाइड',
      kitTitle: 'प्रिंट किट नमूना',
      kitDesc: 'Harris County सहायता गाइड का पूर्वावलोकन जिसे परिवार New American Kit में पा सकते हैं।',
      kitIntro: 'यह नमूना बुकलेट दिखाता है कि प्रिंट किट ह्यूस्टन संसाधनों को आसान पन्नों में कैसे बदलता है जिन्हें परिवार रख सकते हैं, साझा कर सकते हैं और पोर्टल पर वापस स्कैन कर सकते हैं।',
      kitOpen: 'PDF खोलें',
      kitDownload: 'गाइड डाउनलोड करें',
      kitNote: 'PDF पूर्वावलोकन कंप्यूटर पर बेहतर है। फोन पर PDF खोलें का उपयोग करें।'
    },
    labels: { search: 'खोजें', allResources: 'सभी संसाधन', lifeSituations: 'जीवन जरूरतें', verified: 'सत्यापित ह्यूस्टन परिणाम', source: 'स्रोत', call: 'कॉल', website: 'वेबसाइट' },
    forms: { name: 'नाम', email: 'ईमेल', details: 'विवरण', submitFeedback: 'फीडबैक भेजें', received: 'प्राप्त हुआ' },
    chatbot: { title: 'Civic Navigator', placeholder: 'अपना प्रश्न लिखें...', close: 'बंद करें', prompts: ['भोजन', 'बिल', 'डॉक्टर', 'स्कूल', 'कानूनी मदद', 'यातायात', 'आपातकाल', 'दस्तावेज'] },
    misc: { guide: 'गाइड', urgent: 'तत्काल मदद', touchpoints: 'ह्यूस्टन सहायता बिंदु' }
  }),
  ur: mergeLocale({
    nav: { home: 'ہوم', directory: 'ڈائریکٹری', guides: 'رہنما', kit: 'نمونہ کٹ', volunteer: 'رضاکار', about: 'تعارف', emergency: 'ایمرجنسی' },
    home: {
      eyebrow: 'ہیوسٹن شہری رہنمائی نیٹ ورک',
      title: 'ہیوسٹن کے مدد نظام میں واضح راستہ۔',
      subtitle: 'New American Kits ہیوسٹن اور Harris County کے تصدیق شدہ وسائل کو کثیر لسانی ہینڈ آؤٹ اور سرچ پورٹل بناتا ہے۔',
      primary: 'ہیوسٹن مدد تلاش کریں',
      secondary: 'رہنما پڑھیں',
      storyEyebrow: 'Harris County ایڈیشن',
      storyTitle: 'ایک پرنٹ کتابچے سے شہر بھر کے قابل اعتماد مدد نقشے تک۔',
      chapters: [
        ['01 // شہر', 'ہیوسٹن وسیع ہے؛ خاندان کو خوراک، کلینک، HISD داخلہ اور قانونی مدد درکار ہو سکتی ہے۔'],
        ['02 // خلا', 'وسائل موجود ہیں مگر فون، کاغذات، اوقات اور زبان نظام کو مشکل بناتے ہیں۔'],
        ['03 // کٹ', 'کتابچہ پہلا راستہ دیتا ہے: 911، 988، 211، ضروری دستاویزات اور آسان قدم۔'],
        ['04 // پورٹل', 'ویب سائٹ تلاش، ذرائع، ایمرجنسی، رہنما اور چیٹ بوٹ سے معلومات تازہ رکھتی ہے۔']
      ],
      portalTitle: 'تصدیق شدہ ہیوسٹن وسائل',
      actionTitle: 'Harris County خاندانوں کے لیے بنایا گیا۔'
    },
    pages: {
      directoryTitle: 'ہیوسٹن وسائل ڈائریکٹری',
      directoryDesc: 'ضرورت کے مطابق ہیوسٹن اور Harris County وسائل تلاش کریں۔',
      guidesTitle: 'ہیوسٹن قدم بہ قدم رہنما',
      kitTitle: 'پرنٹ کٹ نمونہ',
      kitDesc: 'Harris County امدادی گائیڈ کا پیش نظارہ جو خاندان New American Kit میں حاصل کر سکتے ہیں۔',
      kitIntro: 'یہ نمونہ کتابچہ دکھاتا ہے کہ پرنٹ کٹ ہیوسٹن وسائل کو آسان صفحات میں کیسے بدلتی ہے جنہیں خاندان محفوظ، شیئر اور پورٹل پر واپس اسکین کر سکتے ہیں۔',
      kitOpen: 'PDF کھولیں',
      kitDownload: 'گائیڈ ڈاؤن لوڈ کریں',
      kitNote: 'PDF پیش نظارہ کمپیوٹر پر بہتر ہے۔ فون پر PDF کھولیں استعمال کریں۔'
    },
    labels: { search: 'تلاش', allResources: 'تمام وسائل', lifeSituations: 'زندگی کی ضروریات', verified: 'تصدیق شدہ ہیوسٹن نتائج', source: 'ذریعہ', call: 'کال', website: 'ویب سائٹ' },
    forms: { name: 'نام', email: 'ای میل', details: 'تفصیلات', submitFeedback: 'رائے بھیجیں', received: 'موصول ہوا' },
    chatbot: { title: 'Civic Navigator', placeholder: 'اپنا سوال لکھیں...', close: 'بند کریں', prompts: ['خوراک', 'بل', 'ڈاکٹر', 'اسکول', 'قانونی مدد', 'آمد و رفت', 'ایمرجنسی', 'دستاویزات'] },
    misc: { guide: 'رہنما', urgent: 'فوری مدد', touchpoints: 'ہیوسٹن مدد مقامات' }
  })
};

export const categories = [
  { id: 'food', icon: 'Utensils', name: tx('Food Assistance', 'Comida', 'المساعدة الغذائية', '食物援助', 'Thực phẩm', 'खाद्य सहायता', 'خوراک'), desc: all('Food pantries, SNAP help, grocery referrals, and school meal reminders.') },
  { id: 'health', icon: 'Stethoscope', name: tx('Healthcare', 'Salud', 'الرعاية الصحية', '医疗', 'Y tế', 'स्वास्थ्य', 'صحت'), desc: all('Low-cost clinics, Harris Health, FQHCs, pharmacy, mental health, and prenatal care.') },
  { id: 'housing', icon: 'HomeIcon', name: tx('Housing & Shelter', 'Vivienda y refugio', 'السكن والمأوى', '住房与庇护', 'Nhà ở', 'आवास और आश्रय', 'رہائش'), desc: all('Rent help, eviction prevention, emergency shelter, and stabilization programs.') },
  { id: 'utilities', icon: 'Zap', name: tx('Utilities', 'Servicios públicos', 'المرافق', '水电煤', 'Tiện ích', 'यूटिलिटी', 'یوٹیلیٹی'), desc: all('Electric, gas, propane, water, weatherization, and shutoff prevention.') },
  { id: 'education', icon: 'GraduationCap', name: tx('School Enrollment', 'Inscripción escolar', 'تسجيل المدرسة', '学校注册', 'Ghi danh trường', 'स्कूल नामांकन', 'اسکول داخلہ'), desc: all('HISD enrollment, documents, school meals, ESL support, and transportation questions.') },
  { id: 'english', icon: 'BookOpen', name: tx('English & Library', 'Inglés y biblioteca', 'الإنجليزية والمكتبة', '英语与图书馆', 'Tiếng Anh & thư viện', 'अंग्रेज़ी और पुस्तकालय', 'انگریزی اور لائبریری'), desc: all('ESL, citizenship classes, library cards, computers, GED, and workforce learning.') },
  { id: 'legal', icon: 'Scale', name: tx('Legal Aid', 'Ayuda legal', 'مساعدة قانونية', '法律援助', 'Trợ giúp pháp lý', 'कानूनी सहायता', 'قانونی مدد'), desc: all('Civil legal help, immigrant legal referrals, tenant issues, and notario-scam prevention.') },
  { id: 'transport', icon: 'Bus', name: tx('Transportation', 'Transporte', 'المواصلات', '交通', 'Giao thông', 'परिवहन', 'آمد و رفت'), desc: all('METRO, METROLift, Harris County RIDES, medical trips, and reduced fare guidance.') },
  { id: 'community', icon: 'Users', name: tx('Community Navigation', 'Navegación comunitaria', 'إرشاد مجتمعي', '社区导航', 'Điều hướng cộng đồng', 'सामुदायिक मार्गदर्शन', 'کمیونٹی رہنمائی'), desc: all('211, public libraries, community centers, and cross-category referral points.') }
];

export const categoryScope = {
  food: all('Start with Houston Food Bank for pantry and SNAP navigation; call before visiting pantries because hours change quickly.'),
  health: all('Use Harris Health for county financial assistance and FQHCs such as Legacy, Avenue 360, El Centro, and Vecino for sliding-fee care.'),
  housing: all('Call 211 early for shelter and rental referrals; eviction and utility programs often depend on funding windows and documents.'),
  utilities: all('BakerRipley handles major Harris County utility assistance rounds; check whether applications are open before gathering documents.'),
  education: all('Use HISD enrollment for Houston schools; bring documents you have, but ask the registrar for help if anything is missing.'),
  english: all('BakerRipley, Houston Public Library, and Harris County Public Library offer English, citizenship, computer, GED, and job-learning supports.'),
  legal: all('Use licensed nonprofit legal providers. Avoid notarios who promise immigration results but are not authorized attorneys or accredited representatives.'),
  transport: all('METRO covers bus and rail; METROLift and Harris County RIDES can help eligible riders with disabilities, older adults, or transportation barriers.'),
  community: all('211 Texas/United Way is the best first call when you do not know which Houston program fits your situation.')
};

export const resources = [
  {
    id: '211-texas-united-way-houston',
    categoryId: 'community',
    name: '211 Texas / United Way Greater Houston HELPLINE',
    description: all('A 24/7 information and referral line for food, housing, utility assistance, healthcare, childcare, transportation, disaster help, and many other needs.'),
    address: 'United Way Greater Houston, Houston, TX',
    phone: '2-1-1 / 1-877-541-7905',
    website: 'https://www.211texas.org/',
    hours: '24 hours a day, 7 days a week',
    languages: ['English', 'Spanish', 'interpretation available'],
    cost: all('Free'),
    eligibility: all('Open to anyone looking for local referrals in Texas.'),
    documentsRequired: all('No documents required to call; have your ZIP code, household size, and urgent deadlines ready.'),
    servicesOffered: all('Information and referrals for food, rent, utilities, healthcare, legal aid, childcare, transportation, and disaster recovery.'),
    sourceUrl: 'https://unitedwayhouston.org/what-we-do/211-texas-united-way-helpline/',
    lastVerified: '2026-06-24',
    areaServed: 'Greater Houston and Texas'
  },
  {
    id: 'houston-food-bank-community-assistance',
    categoryId: 'food',
    name: 'Houston Food Bank Community Assistance Program',
    description: all('The main regional food assistance hub for pantry referrals and SNAP application support. Good first call for families who are unsure where to start.'),
    address: '535 Portwall St, Houston, TX 77029',
    phone: '832-369-9390',
    website: 'https://www.houstonfoodbank.org/find-help/',
    hours: 'Helpline generally Mon-Fri 8am-5pm; check source for current service hours',
    languages: ['English', 'Spanish', 'language access varies by program'],
    cost: all('Free assistance and referrals'),
    eligibility: all('Pantry access and benefit eligibility vary by program; mixed-status families can ask about benefits for eligible children.'),
    documentsRequired: all('Photo ID, address, household size, income information, and benefit letters if applying for SNAP or Medicaid support.'),
    servicesOffered: all('Food pantry locator, SNAP application assistance, Medicaid referrals, and community assistance navigation.'),
    sourceUrl: 'https://www.houstonfoodbank.org/our-programs/communityassistanceprogram/snap/',
    lastVerified: '2026-06-24',
    areaServed: 'Houston Food Bank service area, including Harris County'
  },
  {
    id: 'bakerripley-utility-assistance',
    categoryId: 'utilities',
    name: 'BakerRipley Utility Assistance',
    description: all('Utility assistance for eligible Harris, Brazoria, and Galveston County households. Application windows can fill quickly, so check the portal before visiting.'),
    address: 'P.O. Box 271389, Houston, TX 77277',
    phone: '713-590-2327',
    website: 'https://bakerripley.org/programs-and-services/utility-assistance/',
    hours: 'Application windows vary; call or check the website',
    languages: ['English', 'Spanish', 'interpretation may be available'],
    cost: all('Free to apply'),
    eligibility: all('Income-qualified households in the service area; assistance depends on funding and program rules.'),
    documentsRequired: all('Recent utility bill, proof of income, proof of address, ID for head of household, and SSN/ITIN if available.'),
    servicesOffered: all('Electric, gas, propane, and weatherization-related utility assistance when funding is open.'),
    sourceUrl: 'https://hrc-ic.tdhca.state.tx.us/hrc/GetDetails.m?assistanceType=CEAP&city=Houston&county=&currentOrgId=21602',
    lastVerified: '2026-06-24',
    areaServed: 'Harris, Brazoria, and Galveston Counties'
  },
  {
    id: 'harris-health-financial-assistance',
    categoryId: 'health',
    name: 'Harris Health Financial Assistance Program',
    description: all('Financial assistance for Harris County residents using Harris Health services. The program is not insurance, but can lower costs for eligible patients.'),
    address: 'Harris Health System eligibility sites and clinics, Harris County, TX',
    phone: '713-566-6509',
    website: 'https://www.harrishealth.org/access-care/patient-eligibility',
    hours: 'Eligibility Call Center Mon-Fri 8am-4pm; fourth Friday 8am-2pm',
    languages: ['English', 'Spanish', 'language assistance available'],
    cost: all('Free to apply; patient costs depend on eligibility level and services.'),
    eligibility: all('Harris County residency and household income documentation are used to determine assistance.'),
    documentsRequired: all('Photo ID, proof of address, proof of income, household information, and immigration or benefit documents if available.'),
    servicesOffered: all('Eligibility screening for reduced-cost Harris Health medical, pharmacy, dental, vision, prenatal, and behavioral-health care.'),
    sourceUrl: 'https://www.harrishealth.org/access-care/patient-information',
    lastVerified: '2026-06-24',
    areaServed: 'Harris County'
  },
  {
    id: 'legacy-community-health',
    categoryId: 'health',
    name: 'Legacy Community Health',
    description: all('Federally Qualified Health Center network offering medical, behavioral health, OB/GYN, pediatric, pharmacy, and support services with a sliding fee scale.'),
    address: 'Multiple Houston-area clinics',
    phone: '832-548-5000',
    website: 'https://www.legacycommunityhealth.org/',
    hours: 'Varies by clinic; call for appointments',
    languages: ['English', 'Spanish', 'language assistance may be available'],
    cost: all('Sliding fee scale for eligible patients; inability to pay should not block care.'),
    eligibility: all('Open to patients with or without insurance; discounts depend on income and family size.'),
    documentsRequired: all('Picture ID, insurance card if any, proof of income, and form of payment if available.'),
    servicesOffered: all('Primary care, pediatrics, OB/GYN, behavioral health, dental referrals, pharmacy, HIV care, and eligibility assistance.'),
    sourceUrl: 'https://www.legacycommunityhealth.org/patient-center/eligibility/',
    lastVerified: '2026-06-24',
    areaServed: 'Greater Houston'
  },
  {
    id: 'el-centro-de-corazon',
    categoryId: 'health',
    name: 'El Centro de Corazón',
    description: all('East Houston community health centers with primary care, pediatrics, women’s health, dental, and behavioral-health support.'),
    address: '412 Telephone Rd; 7037 Capitol St; 7635 Canal St, Houston, TX',
    phone: '713-660-1880',
    website: 'https://www.elcentrodecorazon.org/locations/',
    hours: 'Call center Mon-Fri 8am-5pm; clinic hours vary',
    languages: ['English', 'Spanish'],
    cost: all('Low-cost and sliding-scale care may be available.'),
    eligibility: all('Call for appointment and eligibility details; community health services focus on underserved families.'),
    documentsRequired: all('ID, address, income, insurance card if any, medication list, and medical records if available.'),
    servicesOffered: all('Primary care, pediatrics, women’s health, dental care, behavioral health, and referrals.'),
    sourceUrl: 'https://www.elcentrodecorazon.org/contact-us/',
    lastVerified: '2026-06-24',
    areaServed: 'East Houston and surrounding neighborhoods'
  },
  {
    id: 'hisd-student-enrollment',
    categoryId: 'education',
    name: 'Houston ISD Student Enrollment',
    description: all('Enrollment pathway for students entering HISD schools. Families can start online and ask campus staff for help with missing documents or language access.'),
    address: '4400 West 18th St, Houston, TX 77092',
    phone: '713-556-6000',
    website: 'https://www.houstonisd.org/schools-academics/student-enrollment',
    hours: 'School and district hours vary; online enrollment is available through the school year',
    languages: ['English', 'Spanish', 'campus language services vary'],
    cost: all('Free public school enrollment'),
    eligibility: all('Children living in the district can enroll in public school; placement depends on address, grade, and program rules.'),
    documentsRequired: all('Birth certificate, immunization record, proof of address, parent ID, previous school records, and any special-program documents you have.'),
    servicesOffered: all('New student enrollment, neighborhood school placement, school choice information, meal questions, ESL support, and campus referrals.'),
    sourceUrl: 'https://www.houstonisd.org/schools-academics/our-schools',
    lastVerified: '2026-06-24',
    areaServed: 'Houston ISD boundaries'
  },
  {
    id: 'bakerripley-gulfton-sharpstown',
    categoryId: 'english',
    name: 'BakerRipley Gulfton Sharpstown Campus',
    description: all('Community campus with adult education, English classes, workforce support, youth learning, SNAP/Medicaid help, and neighborhood programs.'),
    address: '6500 Rookin Street, Houston, TX 77074',
    phone: '713-273-3700',
    website: 'https://bakerripley.org/locations/gulfton-sharpstown-campus/',
    hours: 'Mon-Fri 10am-8pm; major holidays closed',
    languages: ['English', 'Spanish', 'community language support varies'],
    cost: all('Some services are free; community center membership or class fees may apply. Ask about subsidized options.'),
    eligibility: all('Open to community members; specific classes and services may have registration rules.'),
    documentsRequired: all('Photo ID, address, household information, and benefit documents if applying for assistance.'),
    servicesOffered: all('ESL, GED/HSE, job programs, youth education, community events, benefits assistance, and referrals.'),
    sourceUrl: 'https://economicinitiatives.bakerripley.org/',
    lastVerified: '2026-06-24',
    areaServed: 'Gulfton, Sharpstown, and Greater Houston'
  },
  {
    id: 'houston-public-library-language-citizenship',
    categoryId: 'english',
    name: 'Houston Public Library Language & Citizenship',
    description: all('Free library-based classes and support for English learning, citizenship preparation, computers, job labs, GED, and public library access.'),
    address: 'Houston Public Library locations, including Central Library at 500 McKinney St, Houston, TX 77002',
    phone: '832-393-1313',
    website: 'https://houstonlibrary.org/language-citizenship',
    hours: 'Varies by branch and class schedule',
    languages: ['English', 'Spanish', 'class availability varies'],
    cost: all('Many classes and library services are free.'),
    eligibility: all('Open to the public; library card rules depend on residency and library policy.'),
    documentsRequired: all('For a library card, bring ID and proof of Texas address if available; classes may require registration.'),
    servicesOffered: all('English classes, citizenship preparation, library cards, computers, job search labs, GED resources, and passport services.'),
    sourceUrl: 'https://houstonlibrary.org/get-help',
    lastVerified: '2026-06-24',
    areaServed: 'City of Houston'
  },
  {
    id: 'harris-county-housing-stabilization',
    categoryId: 'housing',
    name: 'Harris County Housing Stabilization Programs',
    description: all('County housing resource pathway for rental assistance, eviction prevention, affordable housing resources, and stabilization referrals.'),
    address: '1111 Fannin St, 9th Floor, Houston, TX 77002',
    phone: '832-927-4955',
    website: 'https://hcd.harriscountytx.gov/Residents/Housing-Stabilization-Programs',
    hours: 'Business hours vary; many programs route through 211',
    languages: ['English', 'Spanish', 'interpretation may be available'],
    cost: all('Free screening and referrals'),
    eligibility: all('Program eligibility depends on household income, location, eviction risk, and available funding.'),
    documentsRequired: all('Lease, eviction notice or court date if any, ID, income proof, utility bills, and proof of hardship.'),
    servicesOffered: all('Rental assistance referrals, housing stabilization, eviction prevention, affordable housing information, and resource navigation.'),
    sourceUrl: 'https://hcd.harriscountytx.gov/',
    lastVerified: '2026-06-24',
    areaServed: 'Harris County'
  },
  {
    id: 'ccsc-rent-utility',
    categoryId: 'housing',
    name: 'Christian Community Service Center Rent & Utility Assistance',
    description: all('Emergency financial assistance with rent or utilities during a crisis so families can remain housed with electricity, gas, and water.'),
    address: '3434 Branard St, Houston, TX 77027',
    phone: '713-871-9741',
    website: 'https://ccschouston.org/services/utility-bill-rental-assistance/',
    hours: 'Call Mon-Fri 10am-2pm for appointment; high call volume expected',
    languages: ['English', 'Spanish support may be available'],
    cost: all('Free assistance if eligible and funding is available'),
    eligibility: all('Eligibility depends on crisis, income, service area, documents, and available funds.'),
    documentsRequired: all('Photo ID, proof of income, lease, utility bill, eviction or disconnect notice, and household documents.'),
    servicesOffered: all('Rent assistance, utility assistance, food pantry referrals, and case interviews.'),
    sourceUrl: 'https://ccschouston.org/services/utility-bill-rental-assistance/',
    lastVerified: '2026-06-24',
    areaServed: 'Houston service area; call to confirm ZIP-code eligibility'
  },
  {
    id: 'star-of-hope',
    categoryId: 'housing',
    name: 'Star of Hope Mission',
    description: all('Emergency shelter and recovery programs for men, women, and families experiencing homelessness in Houston. Intake rules depend on program and space.'),
    address: 'Men: 1811 Ruiz St, Houston, TX 77002; Women/families: program locations vary',
    phone: '713-226-5414 / 713-222-2220',
    website: 'https://www.sohmission.org/get-help/',
    hours: 'Men’s intake listed Mon-Fri 8am-2pm, based on availability; call first',
    languages: ['English', 'language support varies'],
    cost: all('Emergency shelter support is generally free; program rules vary.'),
    eligibility: all('Space, safety, ID, ability to care for self, and program rules may apply.'),
    documentsRequired: all('Valid ID and Social Security card if available; one bag per person may be allowed in some programs.'),
    servicesOffered: all('Emergency shelter, meals, showers, clothing, case management, recovery programs, and transitional support.'),
    sourceUrl: 'https://www.sohmission.org/how-we-help/for-men/',
    lastVerified: '2026-06-24',
    areaServed: 'Houston'
  },
  {
    id: 'houston-volunteer-lawyers',
    categoryId: 'legal',
    name: 'Houston Volunteer Lawyers',
    description: all('Free civil legal help for eligible low-income residents of Greater Houston, including family, housing, wills, veterans, taxes, and other non-criminal matters.'),
    address: '1000 Louisiana Street, Suite 3600, Houston, TX 77002',
    phone: '713-228-0735',
    website: 'https://legalhelphouston.org/',
    hours: 'Questionnaire available online; call for current intake details',
    languages: ['English', 'Spanish help may be available'],
    cost: all('Free for eligible clients'),
    eligibility: all('Eligibility depends on income, location, case type, and program capacity.'),
    documentsRequired: all('Court papers, notices, lease, ID, income proof, benefit letters, and any deadlines.'),
    servicesOffered: all('Civil legal intake, pro bono attorney referrals, LegalLine, housing, family, probate, veterans, tax, and non-criminal legal issues.'),
    sourceUrl: 'https://www.makejusticehappen.org/',
    lastVerified: '2026-06-24',
    areaServed: 'Greater Houston and surrounding areas'
  },
  {
    id: 'catholic-charities-cabrini',
    categoryId: 'legal',
    name: 'Catholic Charities Cabrini Center for Immigrant Legal Assistance',
    description: all('Free and low-cost immigration legal services for families, crime victims, asylum seekers, unaccompanied minors, and people seeking citizenship.'),
    address: '2900 Louisiana Street, Houston, TX 77006',
    phone: '713-595-4100 / 1-833-HOU-IMMI',
    website: 'https://catholiccharities.org/cabrini/',
    hours: 'Call for current intake and appointment rules',
    languages: ['English', 'Spanish', 'other language support may vary'],
    cost: all('Free or low-cost depending on case and program funding'),
    eligibility: all('Eligibility depends on immigration issue, income, appointment availability, and program priorities.'),
    documentsRequired: all('Immigration notices, court papers, IDs, passports, birth certificates, addresses, incident reports, and any deadline letters.'),
    servicesOffered: all('Immigration consultations, representation referrals, citizenship, family petitions, crime-victim cases, asylum, and removal-defense support.'),
    sourceUrl: 'https://houstonimmigration.org/hilsc-partner/catholic-charities-of-the-archdiocese-of-galveston-houston/',
    lastVerified: '2026-06-24',
    areaServed: 'Greater Houston'
  },
  {
    id: 'metro-houston',
    categoryId: 'transport',
    name: 'METRO Houston Bus, Rail, curb2curb, and METROLift',
    description: all('Public bus and rail system for Houston, with discounted fare options and METROLift paratransit eligibility for riders whose disability prevents regular transit use.'),
    address: 'METRO RideStore, 1900 Main St, Houston, TX 77002',
    phone: '713-635-4000 / METROLift 713-225-0119',
    website: 'https://www.ridemetro.org/',
    hours: 'Customer service and RideStore hours vary; METROLift eligibility weekdays 10am-5pm',
    languages: ['English', 'Spanish', 'language support varies'],
    cost: all('Local bus, rail, and curb2curb regular fare is $1.25; discounted fare is $0.60 for eligible riders.'),
    eligibility: all('Regular METRO is public; discount cards and METROLift require eligibility rules and applications.'),
    documentsRequired: all('Fare card or payment; for discounted fare or METROLift, bring ID and eligibility/disability documents as requested.'),
    servicesOffered: all('Local bus, rail, Park & Ride, curb2curb, discounted fares, trip planning, METROLift applications, and RideStore support.'),
    sourceUrl: 'https://www.ridemetro.org/riding-metro/transit-services/metrolift-paratransit',
    lastVerified: '2026-06-24',
    areaServed: 'Houston and METRO service area'
  },
  {
    id: 'harris-county-rides',
    categoryId: 'transport',
    name: 'Harris County RIDES',
    description: all('Subsidized transportation for older adults, people with disabilities, and eligible vulnerable low-income residents who need help reaching medical care, groceries, pharmacies, and essential trips.'),
    address: '8410 Lantern Point Drive, Houston, TX 77054',
    phone: '713-368-7433',
    website: 'https://rides.harriscountytx.gov/',
    hours: 'Call for registration and scheduling details',
    languages: ['English', 'Spanish support may be available'],
    cost: all('Subsidized rides; customer share depends on program and trip type.'),
    eligibility: all('Older adults, people with disabilities, and vulnerable low-income residents in Harris County who meet program rules.'),
    documentsRequired: all('Registration information, ID, proof of residence, eligibility/disability documents if requested, and trip details.'),
    servicesOffered: all('Coordinated subsidized transportation, taxi/shared ride options, Uber voucher option when available, and registration assistance.'),
    sourceUrl: 'https://rides.harriscountytx.gov/Registration/Registration-Information',
    lastVerified: '2026-06-24',
    areaServed: 'Harris County'
  },
  {
    id: 'houston-area-womens-center',
    categoryId: 'legal',
    name: 'Houston Area Women’s Center',
    description: all('Confidential crisis support, advocacy, counseling, emergency shelter access, and referrals for survivors of domestic violence, sexual assault, and sex trafficking.'),
    address: '3077 El Camino Street, Houston, TX 77054',
    phone: 'Domestic Violence 713-528-2121 / Sexual Assault 713-528-7273',
    website: 'https://hawc.org/24-hour-hotlines/',
    hours: '24/7 hotlines',
    languages: ['English', 'Spanish', 'hotline help regardless of language'],
    cost: all('Free and confidential hotline support'),
    eligibility: all('Survivors and people seeking safety planning, crisis support, or referrals. Call 911 first if in immediate danger.'),
    documentsRequired: all('No documents required to call. If seeking shelter or legal steps, ask the advocate what to bring.'),
    servicesOffered: all('24/7 hotlines, emergency shelter information, counseling, advocacy, safety planning, and referrals.'),
    sourceUrl: 'https://hawc.org/contact/',
    lastVerified: '2026-06-24',
    areaServed: 'Houston area'
  }
];

export const stepByStepGuides = [
  {
    id: 'food',
    icon: 'Utensils',
    target: 'food',
    title: all('Get food help in Houston'),
    summary: all('Use the booklet path: call Houston Food Bank, ask about nearby pantries, and apply for SNAP if your household may qualify.'),
    steps: [
      all('Call Houston Food Bank at 832-369-9390 and share your ZIP code, household size, and whether you need food today.'),
      all('Ask for a pantry near you and confirm hours before going. Bring bags, ID if available, and proof of address if the pantry asks.'),
      all('Ask whether Community Assistance Program staff can help with SNAP, Medicaid, or other benefits.'),
      all('If your child attends public school, ask the school office about free breakfast, lunch, summer meals, and any meal forms.'),
      all('If you are unsure where to start, call 211 and ask for food assistance in your ZIP code.')
    ],
    documentsNeeded: all('ID if available, proof of address, household size, income information, benefit letters, and children’s information if applying for benefits.'),
    eligibility: all('Pantry rules vary. SNAP eligibility depends on household income, size, expenses, and immigration/benefit rules.'),
    safetyNote: all('Do not skip emergency food because you are unsure about eligibility. Ask which programs are safe for your household.')
  },
  {
    id: 'health',
    icon: 'Stethoscope',
    target: 'health',
    title: all('Find low-cost healthcare'),
    summary: all('Harris Health and Houston FQHCs can help uninsured or underinsured families access care before small problems become emergencies.'),
    steps: [
      all('If it is life-threatening, call 911 or go to the nearest emergency room. Emergency rooms must stabilize emergencies first.'),
      all('For Harris Health assistance, call 713-566-6509 and ask what documents you need for eligibility.'),
      all('For community clinics, call Legacy, El Centro, Avenue 360, Vecino, or 211 to find the closest FQHC.'),
      all('Ask for an interpreter at check-in. Clinics receiving federal funding should provide language assistance.'),
      all('Bring medication bottles, medical records, ID, address proof, income proof, and insurance card if you have one.')
    ],
    documentsNeeded: all('Photo ID, proof of Harris County address, proof of income, insurance card if any, medication list, medical records, and immigration or benefit documents if available.'),
    eligibility: all('Harris Health requires Harris County residency and income review. FQHC sliding-fee eligibility depends on family size and income.'),
    safetyNote: all('Medical information is confidential. Do not use a child as an interpreter for serious medical decisions.')
  },
  {
    id: 'school',
    icon: 'GraduationCap',
    target: 'education',
    title: all('Enroll a child in school'),
    summary: all('Children living in Houston can enroll in public school. Start online, contact the zoned school, and ask for ESL and translation support.'),
    steps: [
      all('Use HISD enrollment or call 713-556-6000 to identify the school and start the new student pathway.'),
      all('Gather birth certificate, immunization records, proof of address, parent ID, and previous school records.'),
      all('If documents are missing, go anyway and ask the registrar what alternatives are accepted.'),
      all('Ask for the ESL coordinator, translation services, school meals, transportation, counseling, and after-school programs.'),
      all('Keep copies of enrollment forms and the school contact information in the document holder.')
    ],
    documentsNeeded: all('Birth certificate, immunization record, proof of address, parent ID, school records, special education documents, and custody papers if applicable.'),
    eligibility: all('Public school enrollment depends on residency, age, grade, and district rules. Schools can help when documents are incomplete.'),
    safetyNote: all('Families can ask for language assistance. Do not sign forms you do not understand; request interpretation.')
  },
  {
    id: 'housing-utilities',
    icon: 'HomeIcon',
    target: 'housing',
    title: all('Handle rent, shelter, or utility crisis'),
    summary: all('Act early: call 211, check Harris County housing programs, and contact BakerRipley or CCSC before a disconnect or eviction deadline.'),
    steps: [
      all('Call 211 and say whether you need rent, shelter, utility help, or eviction legal aid. Give your ZIP code and deadline.'),
      all('For utility bills, check BakerRipley’s application status and gather your recent bill, income proof, address proof, and ID.'),
      all('For rent or eviction, check Harris County Housing Stabilization Programs and ask 211 for current funding options.'),
      all('If you have a court date or eviction notice, contact Houston Volunteer Lawyers or a legal-aid referral immediately.'),
      all('For shelter tonight, call 211 and Star of Hope, then confirm intake hours and required documents before traveling.')
    ],
    documentsNeeded: all('Lease, eviction notice, court papers, utility bills, disconnect notice, ID, proof of income, proof of address, and hardship documentation.'),
    eligibility: all('Funding windows, income, ZIP code, household size, and crisis documentation determine eligibility.'),
    safetyNote: all('Do not wait until the day of court or shutoff. Earlier calls create more options.')
  },
  {
    id: 'english',
    icon: 'BookOpen',
    target: 'english',
    title: all('Start English, citizenship, or job classes'),
    summary: all('Houston libraries and BakerRipley offer English, citizenship, GED, computer, and workforce learning supports.'),
    steps: [
      all('Call BakerRipley Gulfton Sharpstown at 713-273-3700 or check the learning center for current ESL and workforce class registration.'),
      all('Call Houston Public Library at 832-393-1313 and ask for English, citizenship, GED, computer, or job lab classes near you.'),
      all('Ask whether registration, membership, placement testing, or a library card is required.'),
      all('Write down class start date, location, cost, childcare options, and bus route.'),
      all('If classes are full, ask to be added to a waitlist and call 211 for other adult education options.')
    ],
    documentsNeeded: all('Photo ID if available, proof of address for library card, phone/email, class registration information, and payment if a membership applies.'),
    eligibility: all('Many classes are open to adults; some require registration, membership, level placement, or residency rules.'),
    safetyNote: all('Free or low-cost classes should clearly explain any fee before you enroll.')
  },
  {
    id: 'legal',
    icon: 'Scale',
    target: 'legal',
    title: all('Get legal or immigration help safely'),
    summary: all('Use licensed legal-aid providers and immigration nonprofits. Avoid notarios who promise results or pressure you to pay quickly.'),
    steps: [
      all('For civil legal problems, start the Houston Volunteer Lawyers questionnaire or call 713-228-0735.'),
      all('For immigration legal help, call Catholic Charities Cabrini Center or the Houston immigration hotline at 1-833-HOU-IMMI.'),
      all('Gather all notices, court papers, IDs, passports, addresses, deadlines, police reports, and prior applications.'),
      all('Ask whether the person helping you is a licensed attorney or DOJ-accredited representative.'),
      all('Keep copies of everything you submit and never sign a blank form.')
    ],
    documentsNeeded: all('Court papers, immigration notices, IDs, passports, birth certificates, lease, pay stubs, police reports, and any deadline letters.'),
    eligibility: all('Eligibility depends on case type, income, location, urgency, and provider capacity.'),
    safetyNote: all('Notarios are not the same as attorneys in the United States. Be careful with anyone who guarantees immigration results.')
  },
  {
    id: 'transport',
    icon: 'Bus',
    target: 'transport',
    title: all('Plan transportation'),
    summary: all('Use METRO for bus and rail, METROLift for eligible paratransit, and Harris County RIDES for subsidized trips when regular transit is not enough.'),
    steps: [
      all('For regular bus or rail, check METRO routes, fare cards, and reduced fare rules.'),
      all('If disability prevents regular transit use, call METROLift eligibility at 713-225-0119.'),
      all('If you are older, disabled, low-income, or outside easy METRO access, call Harris County RIDES at 713-368-7433.'),
      all('Have pickup address, destination, appointment time, return time, mobility needs, and fare questions ready.'),
      all('For medical trips, ask the clinic or 211 whether additional transportation programs are available.')
    ],
    documentsNeeded: all('Trip details, ID, eligibility documents for special services, mobility device information, and appointment details.'),
    eligibility: all('METRO is public; METROLift and RIDES require program eligibility.'),
    safetyNote: all('Confirm return-trip rules before leaving for an appointment.')
  },
  {
    id: 'documents',
    icon: 'Briefcase',
    target: 'community',
    title: all('Build the document folder'),
    summary: all('The booklet’s document holder matters: keeping documents together makes applications faster and less stressful.'),
    steps: [
      all('Put IDs, passports, birth certificates, school records, immunization records, lease, utility bills, and benefit letters in one folder.'),
      all('Add medical records, prescription bottles list, insurance cards, court papers, immigration notices, and emergency contacts.'),
      all('Take phone photos of important papers and store them somewhere secure.'),
      all('Make copies before handing documents to any office. Ask for receipts for applications you submit.'),
      all('Update the folder after every move, school change, medical visit, or legal notice.')
    ],
    documentsNeeded: all('ID, passports, birth certificates, school records, immunizations, proof of address, income proof, benefits letters, medical records, and notices.'),
    eligibility: all('Everyone can build a document folder; specific programs decide which documents they require.'),
    safetyNote: all('Protect originals. Do not send Social Security numbers or sensitive documents through this website.')
  }
];

export const emergencyResources = [
  {
    category: all('Immediate danger'),
    name: '911 Emergency Services',
    phone: '911',
    website: 'https://www.911.gov/',
    details: all('Call 911 for life-threatening medical emergencies, fire, violence, or immediate danger.'),
    sourceUrl: 'https://www.911.gov/'
  },
  {
    category: all('Mental health crisis'),
    name: '988 Suicide & Crisis Lifeline',
    phone: '988',
    website: 'https://988lifeline.org/',
    details: all('Call or text 988 for suicide, mental-health, or substance-use crisis support.'),
    sourceUrl: 'https://988lifeline.org/'
  },
  {
    category: all('Community crisis referral'),
    name: '211 Texas / United Way HELPLINE',
    phone: '2-1-1 / 1-877-541-7905',
    website: 'https://www.211texas.org/',
    details: all('Call 211 for urgent referrals to shelter, food, utilities, transportation, disaster support, mental health, and benefits navigation.'),
    sourceUrl: 'https://www.211texas.org/contact-2-1-1/'
  },
  {
    category: all('Domestic violence or sexual assault'),
    name: 'Houston Area Women’s Center',
    phone: 'DV 713-528-2121 / SA 713-528-7273',
    website: 'https://hawc.org/24-hour-hotlines/',
    details: all('Free, confidential 24/7 hotline support, safety planning, emergency shelter access, counseling, advocacy, and referrals. If in immediate danger, call 911 first.'),
    sourceUrl: 'https://hawc.org/contact/'
  },
  {
    category: all('Poison emergency'),
    name: 'Poison Help / Texas Poison Center Network',
    phone: '1-800-222-1222',
    website: 'https://poisoncontrol.org/contact-us/',
    details: all('Call for poisoning emergencies or questions. If someone collapses, has a seizure, cannot breathe, or cannot wake up, call 911 first.'),
    sourceUrl: 'https://poisonhelp.hrsa.gov/poison-centers/find-poison-center'
  },
  {
    category: all('Shelter'),
    name: 'Star of Hope Mission',
    phone: '713-226-5414 / 713-222-2220',
    website: 'https://www.sohmission.org/get-help/',
    details: all('Emergency shelter and recovery support for people experiencing homelessness. Call first to confirm intake hours, location, and documents.'),
    sourceUrl: 'https://www.sohmission.org/get-help/'
  }
];

export const communityPartners = [
  { type: 'Food hub', name: 'Houston Food Bank', services: all('Food pantry referrals, SNAP help, and community assistance navigation.') },
  { type: 'Community center', name: 'BakerRipley', services: all('Utility assistance, ESL, workforce learning, benefits navigation, and community programs.') },
  { type: 'Health system', name: 'Harris Health', services: all('Harris County financial assistance and medical care pathway.') },
  { type: 'School district', name: 'Houston ISD', services: all('Public school enrollment, student support, school meals, and campus referrals.') },
  { type: 'Library system', name: 'Houston Public Library', services: all('English, citizenship, computer access, job labs, and library services.') },
  { type: 'Legal aid', name: 'Houston Volunteer Lawyers / Catholic Charities Cabrini Center', services: all('Civil legal aid and immigration legal services referrals.') },
  { type: 'Navigation line', name: '211 Texas / United Way', services: all('Cross-category referrals available 24/7.') }
];

export const impactMetrics = {
  familiesServed: 'Harris County edition',
  kitsDistributed: 'Houston-wide',
  partnerOrganizations: String(communityPartners.length),
  languagesSupported: String(supportedLanguages.length),
  websiteVisits: 'Live portal'
};

export const chatbotAnswers = [
  {
    topic: 'Food Assistance',
    keywords: ['food', 'eat', 'hungry', 'pantry', 'grocery', 'snap', 'comida', 'hambre'],
    reply: tx(
      'Call Houston Food Bank at 832-369-9390 for pantry and SNAP help. If you need a broader referral or it is after hours, call 211 and give your ZIP code.',
      'Llame a Houston Food Bank al 832-369-9390 para despensas y SNAP. Si necesita otra referencia o es fuera de horario, llame al 211 con su código postal.',
      'اتصل بـ Houston Food Bank على 832-369-9390 للطعام وSNAP. بعد الساعات أو للمزيد اتصل بـ 211 واذكر الرمز البريدي.',
      '请致电 Houston Food Bank 832-369-9390 寻找食品和 SNAP 帮助。下班后或需要更多转介，请拨打 211 并提供邮编。',
      'Gọi Houston Food Bank 832-369-9390 để tìm pantry và SNAP. Ngoài giờ, gọi 211 và cho biết ZIP.',
      'पैंट्री और SNAP के लिए Houston Food Bank 832-369-9390 पर कॉल करें। बाद में या अन्य रेफरल के लिए 211 पर ZIP दें।',
      'خوراک اور SNAP کے لیے Houston Food Bank 832-369-9390 کال کریں۔ بعد از وقت یا مزید ریفرل کے لیے 211 پر ZIP بتائیں۔'
    )
  },
  {
    topic: 'Utility Assistance',
    keywords: ['utility', 'utilities', 'electric', 'water', 'gas', 'propane', 'bill', 'disconnect', 'servicios'],
    reply: all('For utility bills, check BakerRipley Utility Assistance or call 713-590-2327. Applications can close when capacity is reached, so also call 211 for backup referrals.')
  },
  {
    topic: 'Healthcare',
    keywords: ['doctor', 'clinic', 'health', 'dentist', 'medicine', 'sick', 'pregnant', 'prenatal'],
    reply: all('For Harris Health financial assistance, call 713-566-6509. For community clinics, try Legacy 832-548-5000, El Centro 713-660-1880, or call 211 for the nearest FQHC.')
  },
  {
    topic: 'School Enrollment',
    keywords: ['school', 'enroll', 'hisd', 'student', 'child', 'children', 'esl', 'lunch'],
    reply: all('Start with HISD Student Enrollment online or call 713-556-6000. Bring birth certificate, immunizations, proof of address, parent ID, and school records if you have them.')
  },
  {
    topic: 'Housing & Shelter',
    keywords: ['rent', 'eviction', 'shelter', 'homeless', 'housing', 'landlord', 'lease'],
    reply: all('Call 211 first for current rent, eviction, and shelter referrals. For county housing programs, check Harris County Housing Stabilization. If there is a court date, contact Houston Volunteer Lawyers quickly.')
  },
  {
    topic: 'English Classes',
    keywords: ['english', 'esl', 'ged', 'citizenship', 'library', 'classes', 'job'],
    reply: all('For English and adult learning, call BakerRipley Gulfton Sharpstown at 713-273-3700 or Houston Public Library at 832-393-1313. Ask about ESL, citizenship, GED, computers, and job labs.')
  },
  {
    topic: 'Legal Aid',
    keywords: ['legal', 'lawyer', 'attorney', 'immigration', 'notario', 'court', 'tenant'],
    reply: all('For civil legal help, contact Houston Volunteer Lawyers at 713-228-0735. For immigration legal help, contact Catholic Charities Cabrini Center at 713-595-4100 or 1-833-HOU-IMMI.')
  },
  {
    topic: 'Transportation',
    keywords: ['transport', 'bus', 'metro', 'ride', 'rides', 'metrolift', 'trip'],
    reply: all('For METRO routes and fares call 713-635-4000. For METROLift eligibility call 713-225-0119. For Harris County RIDES call 713-368-7433.')
  },
  {
    topic: 'Emergency',
    keywords: ['emergency', 'danger', 'violence', 'suicide', 'crisis', 'poison', '911', '988'],
    reply: all('For immediate danger call 911. For mental-health crisis call or text 988. For domestic violence call HAWC at 713-528-2121. For poison help call 1-800-222-1222.')
  },
  {
    topic: 'Required Documents',
    keywords: ['document', 'documents', 'paper', 'papers', 'id', 'passport', 'birth certificate'],
    reply: all('Keep ID/passport, birth certificates, immunization records, school records, lease or utility bill, proof of income, benefit letters, medical records, and legal notices together in the kit folder.')
  }
];

export const researchCards = [
  {
    stat: '39%',
    source: 'Rice Kinder Institute',
    text: all('Harris County households reported as food insecure in a 2025 Houston/Harris County snapshot, matching the booklet’s urgency around food help.'),
    sourceUrl: 'https://kinder.rice.edu/research/food-insecurity-houston-and-harris-county'
  },
  {
    stat: '24/7',
    source: '211 Texas / United Way',
    text: all('The Houston-area helpline connects residents to food, housing, utilities, healthcare, transportation, and disaster referrals day and night.'),
    sourceUrl: 'https://unitedwayhouston.org/what-we-do/211-texas-united-way-helpline/'
  },
  {
    stat: '1M+',
    source: 'Houston Food Bank',
    text: all('More than one million people in Houston Food Bank’s service area are food insecure, making pantry and benefit navigation a core need.'),
    sourceUrl: 'https://www.houstonfoodbank.org/take-action/learn-about-hunger/'
  },
  {
    stat: '$1.25',
    source: 'METRO Houston',
    text: all('Local bus, rail, and curb2curb regular fare gives families a concrete low-cost transit option when routes fit their trip.'),
    sourceUrl: 'https://www.ridemetro.org/fares/all-about-fares'
  }
];
