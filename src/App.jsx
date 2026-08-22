import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  Briefcase,
  Building2,
  Bus,
  CalendarDays,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  ChevronRight,
  Clock,
  ExternalLink,
  Globe,
  GraduationCap,
  Home as HomeIcon,
  Languages,
  Map as MapIcon,
  MapPin,
  Menu,
  MessageSquare,
  Navigation,
  Phone,
  Scale,
  Search,
  Send,
  ShieldCheck,
  Stethoscope,
  Users,
  Utensils,
  X,
  Zap
} from 'lucide-react';
import {
  categoryScope,
  categories,
  chatbotAnswers,
  emergencyResources,
  impactMetrics,
  locales,
  researchCards,
  resources,
  rtlLanguages,
  stepByStepGuides,
  supportedLanguages,
  translateStaticText
} from './houstonData';
import {
  texasDataSources,
  texasFoodBanks,
  texasNeedFilters,
  texasStatewideResources
} from './texasResources';
import { resourceProfileMedia } from './resourceProfileMedia';
import { observeUiTranslations } from './uiTranslation';

const BRAND = 'civicnavigation';
const BRAND_LOGO_PATH = '/brand/civicnavigation-premium-logo.png';
const KIT_PDF_PATH = '/kits/houston-assistance-guide.pdf';
const CONTACT_EMAIL = 'nacivicnav@gmail.com';

const verifiedServiceFacts = [
  {
    label: 'Start anywhere',
    title: '211 Texas searches by need and ZIP code',
    text: 'Call 2-1-1 or 1-877-541-7905, or search online for food, housing, health, transportation, childcare, and other local services.',
    href: 'https://www.211texas.org/'
  },
  {
    label: 'Food today',
    title: 'Confirm a pantry before traveling',
    text: 'Houston Food Bank’s locator shows nearby pantries and distributions. Its official guidance asks visitors to confirm hours, services, and requirements first.',
    href: 'https://www.houstonfoodbank.org/find-help/find-food-map/'
  },
  {
    label: 'Healthcare costs',
    title: 'Harris Health assistance is not insurance',
    text: 'Harris County residents can review financial-assistance eligibility and required documents. Applying is free; call 713-566-6509 with questions.',
    href: 'https://www.harrishealth.org/access-care-hh/eligibility/Pages/default.aspx'
  },
  {
    label: 'Learn and prepare',
    title: 'Free English and citizenship learning',
    text: 'Harris County Public Library offers English learning, citizenship preparation, literacy, and adult-education resources; schedules and registration vary by branch.',
    href: 'https://hcpl.net/adult-education/'
  }
];

const collaborationPaths = [
  { title: 'Families and newcomers', text: 'Find a practical first call, compare documents and eligibility notes, and leave with questions to ask the provider.' },
  { title: 'Schools and libraries', text: 'Use the portal during a referral conversation, request printable kits, or invite students to support a resource-navigation event.' },
  { title: 'Community partners', text: 'Suggest a service, correct a listing, sponsor printing, or discuss a local distribution and translation partnership.' }
];

const guideSupport = {
  food: {
    before: 'Know your ZIP code, how many people need food, whether anyone needs food today, and whether you can travel to a pantry.',
    say: '“I need food help near my ZIP code. Can you tell me what is open, what I should bring, and whether I need an appointment?”',
    blocked: 'Call 211 and ask for another pantry, meal site, or same-day distribution near your ZIP code.',
    after: 'Write down the pantry name, address, hours, contact person, documents requested, and the date you plan to go.'
  },
  health: {
    before: 'Write down symptoms, medicines, allergies, your preferred language, and whether the need is urgent. Bring insurance information only if you have it.',
    say: '“I need a low-cost appointment. I live in Harris County, I prefer help in my language, and I need to know the cost and documents before I come.”',
    blocked: 'Call 211 for another community clinic. For immediate danger or a life-threatening emergency, call 911.',
    after: 'Keep the appointment time, clinic address, payment estimate, medicine list, and follow-up instructions together.'
  },
  school: {
    before: 'Know the child’s age, grade, home address, previous school, preferred language, and any disability or learning support they receive.',
    say: '“I need to enroll my child. These are the documents I have. Please tell me what else is required and how I can receive language help.”',
    blocked: 'Ask for the campus registrar or district enrollment office and request a written list of acceptable alternative documents.',
    after: 'Save the student ID, school contact, start date, bus information, meal information, and copies of everything submitted.'
  },
  'housing-utilities': {
    before: 'Find the exact deadline on the eviction, rent, or disconnect notice. Gather the lease, bill, notice, income proof, and household information.',
    say: '“I have a housing or utility deadline on this date. I live in this ZIP code. Is funding open, and what must I submit today?”',
    blocked: 'Call 211 for another open program. If court papers are involved, contact a qualified legal-aid provider immediately.',
    after: 'Record the application number, documents submitted, staff name, next deadline, and when to follow up.'
  },
  english: {
    before: 'Decide whether you need English, citizenship, GED, computer, or job help. Know the days, times, transportation, and childcare you need.',
    say: '“I am looking for a class near me. What level is it, when does it start, is it free, and how do I register?”',
    blocked: 'Ask to join a waitlist, check another library branch, or call 211 for another adult-learning program.',
    after: 'Save the registration date, class schedule, address, teacher contact, cost, materials, and bus route.'
  },
  legal: {
    before: 'Put every notice and deadline in date order. Bring copies—not your only originals—and write a short timeline of what happened.',
    say: '“I need help understanding this legal notice. My deadline is this date. Do you handle this type of case, and how does your intake work?”',
    blocked: 'Ask for a referral to a licensed attorney or DOJ-accredited representative. Never pay someone who guarantees a result.',
    after: 'Write down the lawyer or advocate’s name, advice, deadlines, fees, and documents you were asked to provide.'
  },
  transport: {
    before: 'Know the pickup address, destination, arrival time, return time, mobility needs, and whether you can use regular bus or rail.',
    say: '“I need to arrive at this address by this time. Which service fits, what will it cost, and how do I arrange the return trip?”',
    blocked: 'Ask the clinic, school, provider, or 211 whether another transportation benefit or voucher is available.',
    after: 'Save route numbers, pickup points, fare, transfer instructions, return-trip rules, and the customer-service number.'
  },
  documents: {
    before: 'Choose a safe folder and a secure place for digital copies. Separate originals from the copies you can hand to an office.',
    say: '“Before I submit this, which documents are required, will you keep a copy, and can I receive a receipt?”',
    blocked: 'Ask whether another document can prove the same fact. Do not send sensitive information through this website.',
    after: 'Add the submission date, receipt, application number, contact person, and next deadline to the folder.'
  }
};

const iconMap = {
  BookOpen,
  Briefcase,
  Bus,
  GraduationCap,
  HomeIcon,
  Scale,
  Stethoscope,
  Users,
  Utensils,
  Zap
};

const imageSet = {
  hero: '/illustrations/fulshear-network-map.webp',
  localNode: '/illustrations/fulshear-local-node.webp',
  handoff: '/illustrations/kit-handoff-ink.webp',
  system: '/illustrations/system-path-ink.webp',
  library: '/illustrations/library-kits-ink.webp',
  scale: '/illustrations/scale-network-ink.webp'
};

const chromeCopy = {
  en: { primaryNav: 'Primary navigation', selectLanguage: 'Select language', centralTime: 'CT' },
  es: { primaryNav: 'Navegación principal', selectLanguage: 'Seleccionar idioma', centralTime: 'CT' },
  ar: { primaryNav: 'التنقل الرئيسي', selectLanguage: 'اختر اللغة', centralTime: 'CT' },
  zh: { primaryNav: '主导航', selectLanguage: '选择语言', centralTime: 'CT' },
  vi: { primaryNav: 'Điều hướng chính', selectLanguage: 'Chọn ngôn ngữ', centralTime: 'CT' },
  hi: { primaryNav: 'मुख्य नेविगेशन', selectLanguage: 'भाषा चुनें', centralTime: 'CT' },
  ur: { primaryNav: 'مرکزی نیویگیشن', selectLanguage: 'زبان منتخب کریں', centralTime: 'CT' }
};

const reviewRoles = [
  {
    title: 'Research desk',
    text: 'Verify source pages, phone numbers, documents, and changes before listings are printed.'
  },
  {
    title: 'Translation review',
    text: 'Check short, plain-language summaries with bilingual volunteers and trusted adults.'
  },
  {
    title: 'Design and QR',
    text: 'Keep printed guides readable, visual, and connected to the live portal.'
  },
  {
    title: 'Distribution team',
    text: 'Place kits through libraries, food fairs, clinics, schools, and faith groups.'
  },
  {
    title: 'Historian',
    text: 'Track sources, updates, partner notes, feedback, and handoff instructions.'
  }
];

function localize(value, lang) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value[lang] || value.en || Object.values(value)[0] || '';
  }
  if (typeof value === 'string') return translateStaticText(value, lang);
  return value ?? '';
}

function searchableText(value) {
  if (Array.isArray(value)) {
    return value.map(item => searchableText(item)).join(' ');
  }
  if (value && typeof value === 'object') {
    return Object.values(value).map(item => searchableText(item)).join(' ');
  }
  return value ?? '';
}

function useCopy(lang) {
  return locales[lang] || locales.en;
}

function Icon({ name, className = '', ...props }) {
  const Component = iconMap[name];
  return Component ? <Component className={className} {...props} /> : null;
}

function telHref(phone) {
  const first = String(phone || '').split('/')[0].replace(/[^\d+]/g, '');
  return first ? `tel:${first}` : undefined;
}

function mapHref(address) {
  return address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}` : undefined;
}

function mapEmbedHref(address) {
  return address ? `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed` : undefined;
}

let texasZipDataPromise;

function loadTexasZipData() {
  if (!texasZipDataPromise) {
    texasZipDataPromise = fetch('/data/texas-zip-centroids.json').then(response => {
      if (!response.ok) throw new Error('ZIP data could not be loaded.');
      return response.json();
    });
  }
  return texasZipDataPromise;
}

function distanceInMiles(from, to) {
  const earthRadiusMiles = 3958.8;
  const radians = degrees => degrees * (Math.PI / 180);
  const latitudeDelta = radians(to.latitude - from.latitude);
  const longitudeDelta = radians(to.longitude - from.longitude);
  const fromLatitude = radians(from.latitude);
  const toLatitude = radians(to.latitude);
  const a = Math.sin(latitudeDelta / 2) ** 2
    + Math.cos(fromLatitude) * Math.cos(toLatitude) * Math.sin(longitudeDelta / 2) ** 2;
  return earthRadiusMiles * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function organizationInitials(name) {
  return String(name || '')
    .replace(/\([^)]*\)/g, '')
    .split(/\s+/)
    .filter(word => /^[A-Za-z0-9]/.test(word))
    .slice(0, 3)
    .map(word => word[0])
    .join('')
    .toUpperCase();
}

function organizationIconHref(website) {
  try {
    return `${new URL(website).origin}/favicon.ico`;
  } catch {
    return undefined;
  }
}

function serviceList(resource, lang) {
  return String(localize(resource.servicesOffered, lang))
    .split(/[,;]/)
    .map(item => item.trim().replace(/^and\s+/i, ''))
    .filter(Boolean);
}

function mailtoHref(subject, body = '') {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${CONTACT_EMAIL}?${params.toString()}`;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const [lang, setLang] = useState(() => {
    const saved = window.localStorage.getItem('newAmericanKitsLanguage');
    return supportedLanguages.some(language => language.code === saved) ? saved : 'en';
  });
  const [tracker, setTracker] = useState({
    conversations: 42,
    searches: {
      food: 18,
      utilities: 10,
      health: 9,
      education: 8,
      legal: 5
    },
    referrals: 24,
    clicks: 67
  });

  useEffect(() => {
    const direction = rtlLanguages.includes(lang) ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dir = 'ltr';
    document.documentElement.dataset.textDirection = direction;
    window.localStorage.setItem('newAmericanKitsLanguage', lang);
  }, [lang]);

  useEffect(() => observeUiTranslations(document.body, lang), [lang]);

  const trackReferral = (topic) => {
    setTracker(prev => ({
      ...prev,
      referrals: prev.referrals + 1,
      clicks: prev.clicks + 1,
      searches: {
        ...prev.searches,
        [topic]: (prev.searches[topic] || 0) + 1
      }
    }));
  };

  return (
    <div className={`site-shell ${rtlLanguages.includes(lang) ? 'rtl' : ''}`}>
      <div className="canvas-texture" aria-hidden="true" />
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/directory" element={<DirectoryPage lang={lang} trackReferral={trackReferral} />} />
            <Route path="/directory/texas/:resourceId" element={<TexasFoodBankProfilePage trackReferral={trackReferral} />} />
            <Route path="/directory/:resourceId" element={<ResourceProfilePage lang={lang} trackReferral={trackReferral} />} />
            <Route path="/guides" element={<GuidesPage lang={lang} />} />
            <Route path="/kit" element={<KitPage lang={lang} />} />
            <Route path="/partners" element={<Navigate to="/" replace />} />
            <Route path="/volunteer" element={<VolunteerPage lang={lang} />} />
            <Route path="/feedback" element={<FeedbackPage lang={lang} setTracker={setTracker} />} />
            <Route path="/about" element={<AboutPage lang={lang} />} />
            <Route path="/emergency" element={<EmergencyPage lang={lang} />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer lang={lang} />
      <Chatbot lang={lang} tracker={tracker} setTracker={setTracker} />
    </div>
  );
}

function Navbar({ lang, setLang }) {
  const t = useCopy(lang);
  const ui = chromeCopy[lang] || chromeCopy.en;
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const now = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  const links = [
    ['/', t.nav.home],
    ['/directory', t.nav.directory],
    ['/guides', t.nav.guides],
    ['/kit', t.nav.kit],
    ['/volunteer', t.nav.volunteer],
    ['/about', t.nav.about]
  ];

  return (
    <nav className={`floating-nav${menuOpen ? ' menu-open' : ''}`} aria-label={ui.primaryNav}>
      <Link to="/" className="brand-mark" aria-label={`${BRAND} ${t.nav.home}`} onClick={() => setMenuOpen(false)}>
        <span className="brand-icon" aria-hidden="true">
          <img src={BRAND_LOGO_PATH} alt="" />
        </span>
        <span className="brand-wordmark">{BRAND}</span>
      </Link>
      <div className="nav-links" id="primary-navigation-links">
        {links.map(([path, label]) => (
          <Link key={path} to={path} onClick={() => setMenuOpen(false)} className={location.pathname === path || (path !== '/' && location.pathname.startsWith(`${path}/`)) ? 'active' : ''}>
            {label}
          </Link>
        ))}
      </div>
      <div className="nav-actions">
        <span className="timezone"><Clock size={13} /> {now} {ui.centralTime}</span>
        <label className="language-select">
          <Languages size={14} />
          <select value={lang} onChange={event => setLang(event.target.value)} aria-label={ui.selectLanguage}>
            {supportedLanguages.map(language => (
              <option key={language.code} value={language.code}>{language.name}</option>
            ))}
          </select>
        </label>
        <Link to="/emergency" className="nav-cta" onClick={() => setMenuOpen(false)}>
          {t.nav.emergency} <ChevronRight size={14} />
        </Link>
        <button
          type="button"
          className="nav-menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation-links"
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </nav>
  );
}

function PageTransition({ children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
      {children}
    </motion.div>
  );
}

function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="page-header">
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </header>
  );
}

function InternalPhoto({ src, alt, caption }) {
  return (
    <figure className="internal-photo container">
      <img src={src} alt={alt} loading="lazy" />
      <figcaption><span>Representative scene</span>{caption}</figcaption>
    </figure>
  );
}

function Home({ lang }) {
  const t = useCopy(lang);
  const storyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ['start start', 'end end']
  });
  const mapScale = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [1.01, 1.08, 1.14, 0.98]);
  const mapY = useTransform(scrollYProgress, [0, 0.58, 1], [0, -22, -64]);
  const mapOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0.78]);
  const heroY = useTransform(scrollYProgress, [0, 0.24, 0.42], [0, -18, -58]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2, 0.38], [1, 0.92, 0.18]);

  return (
    <PageTransition>
      <section className="story-viewport" ref={storyRef}>
        <div className="sticky-stage">
          <div className="story-atmosphere" aria-hidden="true">
            <span className="paper-current current-one" />
            <span className="paper-current current-two" />
            <span className="paper-current current-three" />
            <span className="scan-light" />
            <span className="civic-spark spark-one" />
            <span className="civic-spark spark-two" />
            <span className="civic-spark spark-three" />
          </div>
          <motion.figure className="map-canvas-frame" style={{ scale: mapScale, y: mapY, opacity: mapOpacity }}>
            <img src={imageSet.hero} alt="" />
            <span className="origin-pulse" />
            <span className="route-arc arc-one" />
            <span className="route-arc arc-two" />
            <span className="route-arc arc-three" />
          </motion.figure>
          <motion.div className="story-cue" style={{ opacity: heroOpacity, y: heroY }} aria-hidden="true">
            <span>{t.home.storyEyebrow}</span>
          </motion.div>
          <motion.div className="hero-card ink-panel" style={{ opacity: heroOpacity, y: heroY }}>
            <p className="eyebrow cyan">{t.home.eyebrow}</p>
            <h1>{t.home.title}</h1>
            <p>{t.home.subtitle}</p>
            <div className="hero-actions">
              <Link to="/directory" className="ink-link">{t.home.primary} <ChevronRight size={16} /></Link>
              <Link to="/guides" className="ink-link secondary">{t.home.secondary} <ChevronRight size={16} /></Link>
            </div>
          </motion.div>
          <div className="story-progress" aria-hidden="true">
            {t.home.chapters.map((chapter, index) => (
              <span key={chapter[0]} style={{ '--step': index }} />
            ))}
          </div>
        </div>
        <div className="story-cards container">
          {t.home.chapters.map(([title, text], index) => (
            <motion.article
              className="narrative-card"
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.55 }}
              transition={{ duration: 0.45 }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="editorial-section">
        <div className="container two-column">
          <div>
            <p className="eyebrow">{t.home.storyEyebrow}</p>
            <h2 className="display-heading">{t.home.storyTitle}</h2>
          </div>
          <div className="paper-card prose-card">
            <p>{t.home.portalText}</p>
            <p>{t.home.modelText}</p>
            <Link to="/directory" className="outline-button">{t.home.portalTitle} <ChevronRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="image-band">
        <img src={imageSet.localNode} alt="" />
        <div className="frosted-card">
          <p className="eyebrow cyan">{t.home.modelTitle}</p>
          <h2>{t.home.portalTitle}</h2>
          <p>{t.home.portalText}</p>
        </div>
      </section>

      <section className="editorial-section alt">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">{t.labels.lifeSituations}</p>
            <h2 className="display-heading">{t.labels.allResources}</h2>
          </div>
          <div className="situation-list">
            {categories.map((category, index) => (
              <Link to={`/directory?category=${category.id}`} className="situation-row" key={category.id}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Icon name={category.icon} />
                <strong>{localize(category.name, lang)}</strong>
                <p>{localize(category.desc, lang)}</p>
                <ChevronRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="container split-visual">
          <figure className="image-card"><img src={imageSet.system} alt="" /></figure>
          <div>
            <p className="eyebrow">{t.home.actionTitle}</p>
            <h2 className="display-heading">{t.home.modelTitle}</h2>
            <p className="section-copy">{t.home.actionText}</p>
            <div className="stat-row">
              <span><strong>{impactMetrics.partnerOrganizations}</strong>{t.misc.touchpoints || 'Community touchpoints'}</span>
              <span><strong>{impactMetrics.languagesSupported}</strong>{t.labels.languages}</span>
              <span><strong>2026</strong>{t.labels.lastVerified}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="image-band right">
        <img src={imageSet.scale} alt="" />
        <div className="frosted-card">
          <p className="eyebrow cyan">{t.misc.research}</p>
          <h2>{t.home.actionTitle}</h2>
          <p>{t.home.actionText}</p>
        </div>
      </section>
    </PageTransition>
  );
}

function DirectoryPage({ lang, trackReferral }) {
  const t = useCopy(lang);
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get('category') || 'all';
  const searchQuery = params.get('search') || '';

  const filteredResources = resources.filter(resource => {
    const query = searchQuery.toLowerCase().trim();
    const matchesCategory = selectedCategory === 'all' || resource.categoryId === selectedCategory;
    const searchable = [
      resource.name,
      resource.address,
      resource.phone,
      resource.areaServed,
      searchableText(resource.description),
      searchableText(resource.servicesOffered),
      searchableText(resource.eligibility),
      resource.languages?.join(' ')
    ].join(' ').toLowerCase();
    return matchesCategory && (!query || searchable.includes(query));
  });

  const updateQuery = (category, search) => {
    const next = new URLSearchParams();
    if (category && category !== 'all') next.set('category', category);
    if (search) next.set('search', search);
    navigate(`/directory${next.toString() ? `?${next.toString()}` : ''}`);
  };

  return (
    <PageTransition>
      <PageHeader eyebrow={t.nav.directory} title={t.pages.directoryTitle} subtitle={t.pages.directoryDesc} />
      <section className="container content-intro-grid" aria-label="How to use the directory">
        <article>
          <p className="eyebrow">Use the directory with confidence</p>
          <h2>Start with your ZIP, then open the details.</h2>
          <p>The Texas finder gives every ZIP code a trusted local starting point. Below it, detailed Houston profiles explain eligibility, cost, documents, language access, and the next action to take.</p>
        </article>
        <ol className="plain-steps">
          <li><strong>Enter your ZIP.</strong><span>See nearby physical locations and official statewide tools.</span></li>
          <li><strong>Choose a need.</strong><span>Filter food, benefits, housing, jobs, schools, or legal help.</span></li>
          <li><strong>Confirm before traveling.</strong><span>Call or open the official source because funding, hours, and intake rules can change.</span></li>
        </ol>
      </section>
      <TexasZipFinder trackReferral={trackReferral} />
      <section className="portal-layout container">
        <aside className="filter-panel">
          <label>
            <span>{t.labels.search}</span>
            <div className="input-wrap">
              <Search size={16} />
              <input value={searchQuery} onChange={event => updateQuery(selectedCategory, event.target.value)} placeholder={t.labels.searchPlaceholder} />
            </div>
          </label>
          <div>
            <span className="filter-label">{t.labels.lifeSituations}</span>
            <button type="button" className={selectedCategory === 'all' ? 'filter-active' : ''} onClick={() => updateQuery('all', searchQuery)}>{t.labels.allResources}</button>
            {categories.map(category => (
              <button key={category.id} type="button" className={selectedCategory === category.id ? 'filter-active' : ''} onClick={() => updateQuery(category.id, searchQuery)}>
                <Icon name={category.icon} /> {localize(category.name, lang)}
              </button>
            ))}
          </div>
        </aside>
        <div className="results-panel">
          {selectedCategory !== 'all' && (
            <div className="paper-card scope-card">
              <p className="eyebrow">{t.labels.categoryScope}</p>
              <p>{localize(categoryScope[selectedCategory], lang)}</p>
              <Link to="/guides">{t.labels.relatedGuides} <ChevronRight size={15} /></Link>
            </div>
          )}
          <div className="result-meta">
            <span>{t.labels.verified}</span>
            <strong>{filteredResources.length} {t.labels.items}</strong>
          </div>
          {filteredResources.length ? (
            <div className="resource-list">
              {filteredResources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} lang={lang} t={t} trackReferral={trackReferral} />
              ))}
            </div>
          ) : (
            <div className="paper-card empty-state">{t.labels.noResults}</div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}

function TexasZipFinder({ trackReferral }) {
  const [zipInput, setZipInput] = useState('');
  const [selectedNeed, setSelectedNeed] = useState('all');
  const [zipResult, setZipResult] = useState(null);
  const [nearbyFoodBanks, setNearbyFoodBanks] = useState([]);
  const [expandedMapId, setExpandedMapId] = useState(null);
  const [searchError, setSearchError] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const submitZip = async event => {
    event.preventDefault();
    const cleanZip = zipInput.replace(/\D/g, '').slice(0, 5);
    setZipInput(cleanZip);
    setExpandedMapId(null);

    if (cleanZip.length !== 5) {
      setSearchError('Enter a five-digit Texas ZIP code.');
      setZipResult(null);
      return;
    }

    setIsSearching(true);
    setSearchError('');

    try {
      const zipRows = await loadTexasZipData();
      const zipLookup = new Map(zipRows.map(row => [row.zip, row]));
      const matchedZip = zipLookup.get(cleanZip);

      if (!matchedZip) {
        setZipResult(null);
        setNearbyFoodBanks([]);
        setSearchError('That ZIP code was not found in Texas. Check the number and try again.');
        return;
      }

      const rankedFoodBanks = texasFoodBanks
        .map(resource => {
          const resourceZip = zipLookup.get(resource.zip);
          return resourceZip
            ? { ...resource, distance: distanceInMiles(matchedZip, resourceZip) }
            : null;
        })
        .filter(Boolean)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 5);

      setZipResult(matchedZip);
      setNearbyFoodBanks(rankedFoodBanks);
      trackReferral('zip-search');
    } catch {
      setZipResult(null);
      setNearbyFoodBanks([]);
      setSearchError('The ZIP finder could not load. Please try again or call 211 for immediate local referrals.');
    } finally {
      setIsSearching(false);
    }
  };

  const statewideResults = texasStatewideResources.filter(resource => (
    selectedNeed === 'all' || resource.need === 'all' || resource.need === selectedNeed
  ));
  const showFoodBanks = selectedNeed === 'all' || selectedNeed === 'food';

  return (
    <section className="container texas-finder" aria-labelledby="texas-finder-title">
      <div className="texas-finder-heading">
        <div>
          <p className="eyebrow">Now serving every Texas ZIP code</p>
          <h2 id="texas-finder-title">Find trusted help near you</h2>
          <p>Enter your ZIP code to see the closest statewide food-bank network partners and official Texas search tools for benefits, health, jobs, childcare, and legal help.</p>
        </div>
        <span className="texas-coverage-badge"><MapPin size={16} /> 254 counties covered</span>
      </div>

      <form className="zip-search-form" onSubmit={submitZip} noValidate>
        <label htmlFor="texas-zip">Your Texas ZIP code</label>
        <div className="zip-search-controls">
          <div className="zip-input-wrap">
            <MapPin size={19} />
            <input
              id="texas-zip"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength="5"
              pattern="[0-9]{5}"
              placeholder="Example: 78701"
              value={zipInput}
              onChange={event => setZipInput(event.target.value.replace(/\D/g, '').slice(0, 5))}
            />
          </div>
          <button className="dark-button" type="submit" disabled={isSearching}>
            <Search size={17} /> {isSearching ? 'Finding help…' : 'Find nearby help'}
          </button>
        </div>
        {searchError && <p className="zip-search-error" role="alert"><AlertTriangle size={16} /> {searchError}</p>}
      </form>

      <div className="need-filter-row" aria-label="Filter Texas results by need">
        {texasNeedFilters.map(filter => (
          <button
            key={filter.id}
            type="button"
            className={selectedNeed === filter.id ? 'active' : ''}
            aria-pressed={selectedNeed === filter.id}
            onClick={() => setSelectedNeed(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {zipResult && (
        <div className="texas-results" aria-live="polite">
          <div className="texas-results-summary">
            <div>
              <p className="eyebrow">Results near {zipResult.zip}</p>
              <h3>{zipResult.city}{zipResult.county ? ` · ${zipResult.county} County` : ''}</h3>
              <p>Distances are estimates between ZIP-code centers. Call before traveling to confirm the right location, hours, documents, and service area.</p>
            </div>
            <a href="https://www.211texas.org/" target="_blank" rel="noreferrer" onClick={() => trackReferral('zip-search')}>
              Search every listed service on 211 Texas <ExternalLink size={15} />
            </a>
          </div>

          {showFoodBanks && nearbyFoodBanks.length > 0 && (
            <div className="nearby-section">
              <div className="nearby-section-title">
                <div><p className="eyebrow">Closest physical starting points</p><h3>Food and benefits assistance</h3></div>
                <span>Feeding Texas network</span>
              </div>
              <div className="nearby-resource-grid">
                {nearbyFoodBanks.map((resource, index) => {
                  const mapIsOpen = expandedMapId === resource.id;
                  return (
                    <article className="nearby-resource-card" key={resource.id}>
                      <div className="nearby-card-topline"><span>#{index + 1} nearest</span><strong>~{Math.round(resource.distance)} miles</strong></div>
                      <Link className={`nearby-resource-image ${resource.imageKind === 'identity' ? 'identity-image' : ''}`} to={`/directory/texas/${resource.id}`} aria-label={`View the full ${resource.name} profile`}>
                        <img src={resource.image} alt={`${resource.name} organization image from its official website`} />
                      </Link>
                      <h4><Link to={`/directory/texas/${resource.id}`}>{resource.name}</Link></h4>
                      <p className="nearby-address"><MapPin size={16} /> {resource.address}</p>
                      <p className="nearby-counties"><strong>Service area:</strong> {resource.counties}</p>
                      <div className="nearby-card-actions">
                        <Link className="nearby-details-link" to={`/directory/texas/${resource.id}`}>View details <ChevronRight size={15} /></Link>
                        <a href={telHref(resource.phone)} onClick={() => trackReferral('food')}><Phone size={15} /> Call</a>
                        <button type="button" aria-expanded={mapIsOpen} onClick={() => setExpandedMapId(mapIsOpen ? null : resource.id)}><MapIcon size={15} /> {mapIsOpen ? 'Hide map' : 'See map'}</button>
                        <a href={resource.website} target="_blank" rel="noreferrer" onClick={() => trackReferral('food')}>Official site <ExternalLink size={14} /></a>
                      </div>
                      {mapIsOpen && (
                        <div className="nearby-inline-map">
                          <iframe title={`Map showing ${resource.name}`} src={mapEmbedHref(resource.address)} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                          <a href={mapHref(resource.address)} target="_blank" rel="noreferrer"><Navigation size={15} /> Open turn-by-turn directions</a>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          )}

          <div className="statewide-section">
            <div className="nearby-section-title">
              <div><p className="eyebrow">Official statewide tools</p><h3>More help for ZIP {zipResult.zip}</h3></div>
              <span>{statewideResults.length} starting points</span>
            </div>
            <div className="statewide-resource-grid">
              {statewideResults.map(resource => (
                <article className="statewide-resource-card" key={resource.id}>
                  <div><span>Statewide</span><ShieldCheck size={17} /></div>
                  <h4>{resource.name}</h4>
                  <p>{resource.description}</p>
                  <small>Source: {resource.source}</small>
                  <div className="nearby-card-actions">
                    {resource.phone && <a href={telHref(resource.phone)} onClick={() => trackReferral('texas')}><Phone size={15} /> Call</a>}
                    <a href={resource.website} target="_blank" rel="noreferrer" onClick={() => trackReferral('texas')}>{resource.action} <ExternalLink size={14} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

function TexasFoodBankProfilePage({ trackReferral }) {
  const { resourceId } = useParams();
  const resource = texasFoodBanks.find(item => item.id === resourceId);

  if (!resource) {
    return (
      <PageTransition>
        <PageHeader eyebrow="Texas resource finder" title="Organization not found" subtitle="This Texas food-bank profile may have moved or been removed." />
        <section className="container profile-not-found"><Link className="dark-button" to="/directory"><ArrowLeft size={15} /> Back to ZIP finder</Link></section>
      </PageTransition>
    );
  }

  const phoneLink = telHref(resource.phone);
  const directionsLink = mapHref(resource.address);

  return (
    <PageTransition>
      <section className="profile-hero texas-profile-hero">
        <div className="container profile-hero-grid">
          <div className="profile-identity">
            <Link className="back-link" to="/directory"><ArrowLeft size={15} /> Back to Texas ZIP finder</Link>
            <div className="profile-title-row">
              <span className="organization-mark large" aria-hidden="true"><Utensils size={24} /></span>
              <div><p className="eyebrow">Feeding Texas network member</p><h1>{resource.name}</h1></div>
            </div>
            <p className="profile-lede">A regional food-bank organization serving families and community partners across {resource.counties}. Use this page to understand the service area, prepare your questions, and contact the organization for the nearest current food distribution or partner pantry.</p>
            <div className="profile-primary-actions">
              <a className="dark-button" href={phoneLink} onClick={() => trackReferral('food')}><Phone size={17} /> Call now</a>
              <a className="outline-button" href={directionsLink} target="_blank" rel="noreferrer" onClick={() => trackReferral('food')}><Navigation size={17} /> Get directions</a>
              <a className="outline-button" href={resource.website} target="_blank" rel="noreferrer" onClick={() => trackReferral('food')}><Globe size={17} /> Official website</a>
            </div>
          </div>
          <figure className={`profile-banner texas-profile-banner ${resource.imageKind === 'identity' ? 'identity-image' : ''}`}>
            <img src={resource.image} alt={`${resource.name} organization image from its official website`} />
            <figcaption>Organization image from <a href={resource.website} target="_blank" rel="noreferrer">{resource.name}’s official website <ExternalLink size={12} /></a>.</figcaption>
          </figure>
        </div>
      </section>

      <section className="container profile-contact-strip texas-profile-contact" aria-label="Organization contact summary">
        <div><MapPin size={19} /><span><strong>Address</strong>{resource.address}</span></div>
        <div><Phone size={19} /><span><strong>Phone</strong><a href={phoneLink}>{resource.phone}</a></span></div>
        <div><Building2 size={19} /><span><strong>Regional service area</strong>{resource.counties}</span></div>
        <div><ShieldCheck size={19} /><span><strong>Directory source</strong><a href={texasDataSources.foodBanks} target="_blank" rel="noreferrer">Feeding Texas</a></span></div>
      </section>

      <section className="container profile-main-grid">
        <div className="profile-main-column">
          <article className="profile-section-card">
            <p className="eyebrow">What this network can help with</p>
            <h2>Start here, then confirm the local program</h2>
            <div className="service-offer-grid">
              <div><span>01</span><strong>Find nearby partner pantries and food distributions</strong></div>
              <div><span>02</span><strong>Ask about emergency groceries and mobile distributions</strong></div>
              <div><span>03</span><strong>Ask whether benefits-application help is available</strong></div>
              <div><span>04</span><strong>Get referred to other community support when available</strong></div>
            </div>
            <div className="program-status-card"><AlertTriangle size={23} /><div><strong>The listed address may be a warehouse or administrative office.</strong><p>Call or use the official website to find the correct public distribution site before traveling.</p></div></div>
          </article>

          <article className="profile-section-card about-organization">
            <p className="eyebrow">About this organization</p>
            <h2>Regional help connected to local partners</h2>
            <p>{resource.name} is listed in the statewide Feeding Texas food-bank network. Regional food banks typically work through local pantries, schools, mobile distributions, and community organizations. Exact services, schedules, intake rules, and available food vary by partner and day.</p>
            <div className="about-fact-grid">
              <div><Building2 size={18} /><span><strong>Counties listed</strong>{resource.counties}</span></div>
              <div><MapPin size={18} /><span><strong>Organization location</strong>{resource.address}</span></div>
              <div><Phone size={18} /><span><strong>Best first step</strong>Call and share your ZIP code and immediate need.</span></div>
              <div><Globe size={18} /><span><strong>Current information</strong>Check the organization’s official website.</span></div>
            </div>
          </article>

          <article className="profile-section-card faq-section">
            <p className="eyebrow">Common questions</p>
            <h2>Know what to ask before you go</h2>
            <details open><summary>Can I receive food at this address?</summary><p>Not always. A food bank may be a warehouse that supplies other locations. Ask for the closest public pantry or distribution serving your ZIP code.</p></details>
            <details><summary>What documents should I bring?</summary><p>Requirements vary. Ask whether the local partner requests an ID, proof of address, household information, or no documents. Do not delay an urgent call because you are missing paperwork.</p></details>
            <details><summary>Do I need an appointment?</summary><p>Some distributions are walk-in, while others require registration or have limited arrival windows. Confirm the day, time, location, and appointment rules before leaving.</p></details>
            <details><summary>Can I ask for language help?</summary><p>Tell the organization your preferred language at the start of the call. Ask whether the local site offers bilingual staff, interpretation, or translated instructions.</p></details>
          </article>
        </div>

        <aside className="profile-side-column">
          <article className="profile-section-card preparation-card">
            <ClipboardCheck size={26} />
            <p className="eyebrow">Before you call</p>
            <h2>Have these details ready</h2>
            <div className="profile-call-script"><ul><li>Your five-digit ZIP code.</li><li>How many people are in your household.</li><li>Whether you need food today or can visit later.</li><li>Your preferred language and transportation limits.</li><li>Any dietary, mobility, or accessibility needs.</li></ul></div>
          </article>

          <article className="profile-section-card map-card">
            <p className="eyebrow">Organization map</p>
            <h2>See the location</h2>
            <iframe title={`Map showing ${resource.name}`} src={mapEmbedHref(resource.address)} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <p>{resource.address}</p>
            <a className="outline-button" href={directionsLink} target="_blank" rel="noreferrer"><Navigation size={16} /> Open directions</a>
          </article>

          <article className="profile-section-card verification-card">
            <ShieldCheck size={25} />
            <h2>Confirm before traveling</h2>
            <p>CivicNavigation provides a starting point, not a guarantee of food availability, eligibility, or hours. Confirm details with the organization or call 211.</p>
            <a href={resource.website} target="_blank" rel="noreferrer" onClick={() => trackReferral('source')}>Open official source <ExternalLink size={15} /></a>
          </article>
        </aside>
      </section>

      <section className="container profile-bottom-cta">
        <div><p className="eyebrow">Need another option?</p><h2>Call 211 for a broader local search, or return to the Texas ZIP finder.</h2></div>
        <div><a className="dark-button" href="tel:211"><Phone size={16} /> Call 211</a><Link className="outline-button" to="/directory">Search another ZIP code</Link></div>
      </section>
    </PageTransition>
  );
}

function ResourceCard({ resource, lang, t, trackReferral }) {
  const category = categories.find(item => item.id === resource.categoryId);
  const phoneLink = telHref(resource.phone);
  const directionsLink = mapHref(resource.address);
  const services = serviceList(resource, lang).slice(0, 4);

  return (
    <article className="paper-card resource-preview-card">
      <div className="resource-preview-heading">
        <span className="organization-mark" aria-hidden="true">
          <b>{organizationInitials(resource.name)}</b>
          {organizationIconHref(resource.website) && <img src={organizationIconHref(resource.website)} alt="" onError={event => { event.currentTarget.style.display = 'none'; }} />}
        </span>
        <div>
          <div className="resource-topline">
            <span className="resource-category">{category ? localize(category.name, lang) : resource.categoryId}</span>
            <span><ShieldCheck size={13} /> {t.labels.lastVerified}: {resource.lastVerified}</span>
          </div>
          <h2><Link to={`/directory/${resource.id}`}>{resource.name}</Link></h2>
          <p>{localize(resource.description, lang)}</p>
        </div>
      </div>
      <div className="preview-facts">
        <span><MapPin size={16} /><strong>Serves</strong>{localize(resource.areaServed, lang)}</span>
        <span><Clock size={16} /><strong>Hours</strong>{localize(resource.hours, lang)}</span>
        <span><CircleDollarSign size={16} /><strong>Cost</strong>{localize(resource.cost, lang)}</span>
      </div>
      <div className="service-chip-row" aria-label="Services offered">
        {services.map(service => <span key={service}>{service}</span>)}
      </div>
      <div className="card-actions profile-preview-actions">
        <Link className="profile-link" to={`/directory/${resource.id}`}>View full profile <ChevronRight size={15} /></Link>
        {phoneLink && <a href={phoneLink} onClick={() => trackReferral(resource.categoryId)}>Call now <Phone size={15} /></a>}
        {directionsLink && <a href={directionsLink} target="_blank" rel="noreferrer" onClick={() => trackReferral(resource.categoryId)}>Directions <Navigation size={15} /></a>}
      </div>
    </article>
  );
}

function ResourceProfilePage({ lang, trackReferral }) {
  const t = useCopy(lang);
  const { resourceId } = useParams();
  const resource = resources.find(item => item.id === resourceId);

  if (!resource) {
    return (
      <PageTransition>
        <PageHeader eyebrow={t.nav.directory} title="Resource not found" subtitle="This listing may have moved or been removed." />
        <section className="container profile-not-found"><Link className="dark-button" to="/directory"><ArrowLeft size={15} /> Back to directory</Link></section>
      </PageTransition>
    );
  }

  const category = categories.find(item => item.id === resource.categoryId);
  const phoneLink = telHref(resource.phone);
  const directionsLink = mapHref(resource.address);
  const mapEmbed = mapEmbedHref(resource.address);
  const profileMedia = resourceProfileMedia[resource.id];
  const services = serviceList(resource, lang);
  const languages = resource.languages.map(language => translateStaticText(language, lang)).join(', ');

  return (
    <PageTransition>
      <section className="profile-hero">
        <div className="container profile-hero-grid">
          <div className="profile-identity">
            <Link className="back-link" to="/directory"><ArrowLeft size={15} /> Back to directory</Link>
            <div className="profile-title-row">
              <div>
                <p className="eyebrow">{category ? localize(category.name, lang) : resource.categoryId} resource</p>
                <h1>{resource.name}</h1>
              </div>
            </div>
            <p className="profile-lede">{localize(resource.description, lang)}</p>
            <div className="profile-primary-actions">
              {phoneLink && <a className="dark-button" href={phoneLink} onClick={() => trackReferral(resource.categoryId)}><Phone size={17} /> Call now</a>}
              {directionsLink && <a className="outline-button" href={directionsLink} target="_blank" rel="noreferrer" onClick={() => trackReferral(resource.categoryId)}><Navigation size={17} /> Get directions</a>}
              <a className="outline-button" href={resource.website} target="_blank" rel="noreferrer" onClick={() => trackReferral(resource.categoryId)}><Globe size={17} /> Visit website</a>
            </div>
          </div>
          {profileMedia ? (
            <figure className="profile-banner profile-provider-photo">
              <img src={profileMedia.src} alt={profileMedia.alt} />
              <figcaption>Official organization image · <a href={profileMedia.sourceUrl} target="_blank" rel="noreferrer">{profileMedia.sourceLabel} <ExternalLink size={12} /></a></figcaption>
            </figure>
          ) : (
            <figure className="profile-banner profile-location-visual">
              {mapEmbed && <iframe title={`Location preview for ${resource.name}`} src={mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />}
              <figcaption>Location preview based on the provider’s listed address · <a href={directionsLink} target="_blank" rel="noreferrer">Open map <ExternalLink size={12} /></a></figcaption>
            </figure>
          )}
        </div>
      </section>

      <section className="container profile-contact-strip" aria-label="Organization contact summary">
        <div><MapPin size={19} /><span><strong>Address</strong>{resource.address}</span></div>
        <div><Clock size={19} /><span><strong>Hours</strong>{localize(resource.hours, lang)}</span></div>
        <div><Phone size={19} /><span><strong>Phone</strong>{phoneLink ? <a href={phoneLink}>{resource.phone}</a> : resource.phone}</span></div>
        <div><ShieldCheck size={19} /><span><strong>Information checked</strong>{resource.lastVerified}</span></div>
      </section>

      <section className="container profile-main-grid">
        <div className="profile-main-column">
          <article className="profile-section-card">
            <p className="eyebrow">What we offer</p>
            <h2>Services available through this organization</h2>
            <div className="service-offer-grid">
              {services.map((service, index) => (
                <div key={service}><span>{String(index + 1).padStart(2, '0')}</span><strong>{service}</strong></div>
              ))}
            </div>
          </article>

          <article className="profile-section-card about-organization">
            <p className="eyebrow">About this resource</p>
            <h2>Who it helps and where it works</h2>
            <p>{localize(resource.description, lang)}</p>
            <div className="about-fact-grid">
              <div><Building2 size={18} /><span><strong>Service area</strong>{localize(resource.areaServed, lang)}</span></div>
              <div><Users size={18} /><span><strong>Who may qualify</strong>{localize(resource.eligibility, lang)}</span></div>
              <div><Languages size={18} /><span><strong>Language access</strong>{languages}</span></div>
              <div><CircleDollarSign size={18} /><span><strong>Expected cost</strong>{localize(resource.cost, lang)}</span></div>
            </div>
          </article>

          <article className="profile-section-card">
            <p className="eyebrow">Programs, intake, and availability</p>
            <h2>Check what is open before you go</h2>
            <div className="program-status-card">
              <CalendarDays size={24} />
              <div><strong>Schedules and funding can change.</strong><p>Use the official website for current programs, appointment rules, application windows, distributions, classes, or events. Call if the website is unclear.</p></div>
            </div>
            <a className="inline-source-link" href={resource.website} target="_blank" rel="noreferrer" onClick={() => trackReferral('source')}>Check current programs on the official website <ExternalLink size={15} /></a>
          </article>

          <article className="profile-section-card faq-section">
            <p className="eyebrow">Common questions</p>
            <h2>Before you contact the organization</h2>
            <details open><summary>Do I need an appointment?</summary><p>Appointment and walk-in rules vary. Call before traveling and ask whether the service you need is accepting people today.</p></details>
            <details><summary>What will it cost?</summary><p>{localize(resource.cost, lang)} Ask about every fee before agreeing to a service.</p></details>
            <details><summary>What if I do not have every document?</summary><p>Call anyway. Explain which documents you have and ask whether another document can be accepted. Never send sensitive documents through CivicNavigation.</p></details>
            <details><summary>Can I ask for help in my language?</summary><p>Listed language information: {languages}. Ask the provider what interpretation or translated materials are available for your appointment.</p></details>
          </article>
        </div>

        <aside className="profile-side-column">
          <article className="profile-section-card preparation-card">
            <ClipboardCheck size={26} />
            <p className="eyebrow">What to bring</p>
            <h2>Prepare before you call or visit</h2>
            <p>{localize(resource.documentsRequired, lang)}</p>
            <div className="profile-call-script"><strong>Ask these questions</strong><ul><li>Is this service open today?</li><li>Do you serve my ZIP code?</li><li>Do I need an appointment?</li><li>What documents and costs should I expect?</li></ul></div>
          </article>

          <article className="profile-section-card map-card">
            <p className="eyebrow">Location</p>
            <h2>Plan your visit</h2>
            {mapEmbed && <iframe title={`Map showing ${resource.name}`} src={mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />}
            <p>{resource.address}</p>
            {directionsLink && <a className="outline-button" href={directionsLink} target="_blank" rel="noreferrer"><Navigation size={16} /> Open directions</a>}
          </article>

          <article className="profile-section-card verification-card">
            <ShieldCheck size={25} />
            <h2>Use the official source</h2>
            <p>CivicNavigation summarizes public information. The provider decides eligibility, availability, appointments, and final costs.</p>
            {resource.sourceUrl && <a href={resource.sourceUrl} target="_blank" rel="noreferrer" onClick={() => trackReferral('source')}>Open verified source <ExternalLink size={15} /></a>}
          </article>
        </aside>
      </section>

      <section className="container profile-bottom-cta">
        <div><p className="eyebrow">Ready for the next step?</p><h2>Contact the organization, or compare another resource.</h2></div>
        <div>{phoneLink && <a className="dark-button" href={phoneLink}><Phone size={16} /> Call {resource.phone.split('/')[0]}</a>}<Link className="outline-button" to={`/directory?category=${resource.categoryId}`}>Compare similar resources</Link></div>
      </section>
    </PageTransition>
  );
}

function GuidesPage({ lang }) {
  const t = useCopy(lang);
  const [activeGuide, setActiveGuide] = useState(stepByStepGuides[0]?.id || null);
  const [query, setQuery] = useState('');
  const filteredGuides = stepByStepGuides.filter(guide => {
    const term = query.toLowerCase();
    return !term ||
      searchableText(guide.title).toLowerCase().includes(term) ||
      searchableText(guide.summary).toLowerCase().includes(term) ||
      searchableText(guide.steps).toLowerCase().includes(term);
  });
  const selectedGuide = filteredGuides.find(guide => guide.id === activeGuide) || filteredGuides[0];
  const support = guideSupport[selectedGuide?.id];

  return (
    <PageTransition>
      <PageHeader eyebrow={t.misc.guide} title={t.pages.guidesTitle} subtitle={t.pages.guidesDesc} />
      <section className="container content-intro-grid" aria-label="Guide purpose">
        <article>
          <p className="eyebrow">A calm path through a complicated system</p>
          <h2>Every guide answers four questions.</h2>
          <p>Where do I start? What should I say? What should I bring? What should I do if the first option does not work?</p>
        </article>
        <div className="paper-card expectation-card">
          <strong>What these guides can do</strong>
          <p>Help you prepare and connect to official providers.</p>
          <strong>What they cannot do</strong>
          <p>Guarantee eligibility, funding, appointments, legal outcomes, or emergency response.</p>
        </div>
      </section>
      <section className="container guide-layout">
        <aside className="filter-panel">
          <label>
            <span>{t.labels.search}</span>
            <div className="input-wrap">
              <Search size={16} />
              <input value={query} onChange={event => setQuery(event.target.value)} placeholder={t.labels.searchPlaceholder} />
            </div>
          </label>
          {filteredGuides.map(guide => (
            <button key={guide.id} type="button" className={selectedGuide?.id === guide.id ? 'filter-active' : ''} onClick={() => setActiveGuide(guide.id)}>
              <Icon name={guide.icon} /> {localize(guide.title, lang)}
            </button>
          ))}
        </aside>
        <div className="paper-card guide-card">
          {selectedGuide ? (
            <>
              <p className="eyebrow">{t.misc.guide} {String(filteredGuides.findIndex(guide => guide.id === selectedGuide.id) + 1).padStart(2, '0')}</p>
              <h2>{localize(selectedGuide.title, lang)}</h2>
              <p>{localize(selectedGuide.summary, lang)}</p>
              <section className="guide-orientation">
                <p><strong>You can start before you know every rule.</strong> Tell the provider what you need, your ZIP code, your deadline, and which documents you already have.</p>
                <p><strong>Ask for language help.</strong> Say your preferred language at the beginning of the call or visit. Do not sign something you do not understand.</p>
              </section>
              {support && (
                <section className="guide-support-grid" aria-label="Guide preparation and call help">
                  <article><span>Before you start</span><p>{support.before}</p></article>
                  <article className="call-script"><span>Words you can use</span><blockquote>{support.say}</blockquote></article>
                  <article><span>If the first option does not work</span><p>{support.blocked}</p></article>
                  <article><span>After the call or visit</span><p>{support.after}</p></article>
                </section>
              )}
              <div className="guide-section-heading"><span>Step-by-step plan</span><p>Complete one step at a time. Write down names, dates, and next actions as you go.</p></div>
              <div className="steps-list">
                {selectedGuide.steps.map((step, index) => (
                  <article key={`${selectedGuide.id}-${index}`}>
                    <span>{index + 1}</span>
                    <div><strong>Step {index + 1}</strong><p>{localize(step, lang)}</p></div>
                  </article>
                ))}
              </div>
              <div className="guide-checklist-grid">
                <article><ClipboardCheck size={20} /><div><strong>{t.misc.documentsNeeded}</strong><p>{localize(selectedGuide.documentsNeeded, lang)}</p></div></article>
                <article><Users size={20} /><div><strong>{t.labels.eligibility}</strong><p>{localize(selectedGuide.eligibility, lang)}</p></div></article>
                <article className="safety-card"><ShieldCheck size={20} /><div><strong>{t.misc.safetyNote}</strong><p>{localize(selectedGuide.safetyNote, lang)}</p></div></article>
              </div>
              <div className="guide-actions">
                <Link className="dark-button" to={`/directory?category=${selectedGuide.target}`}>Find related services <Search size={15} /></Link>
                <a className="outline-button" href={mailtoHref(`Question about: ${localize(selectedGuide.title, 'en')}`)}>Ask CivicNavigation <Send size={15} /></a>
              </div>
            </>
          ) : (
            <p>{t.labels.noResults}</p>
          )}
        </div>
      </section>
      <InternalPhoto
        src="/photos/student-family-guide.webp"
        alt="A student volunteer explaining a document checklist to an immigrant family at their kitchen table."
        caption="Students can walk through a guide with a family, explain unfamiliar terms, and help organize questions for a provider."
      />
    </PageTransition>
  );
}

function KitPage({ lang }) {
  const t = useCopy(lang);
  const kitTopics = categories.slice(0, 6);

  return (
    <PageTransition>
      <PageHeader eyebrow={t.nav.kit} title={t.pages.kitTitle} subtitle={t.pages.kitDesc} />
      <section className="container kit-layout">
        <div className="paper-card kit-intro-card">
          <p className="eyebrow">{t.home.storyEyebrow}</p>
          <h2>{t.home.modelTitle}</h2>
          <p>{t.pages.kitIntro}</p>
          <div className="kit-actions">
            <a href={KIT_PDF_PATH} target="_blank" rel="noreferrer" className="dark-button">
              {t.pages.kitOpen} <ExternalLink size={16} />
            </a>
            <a href={KIT_PDF_PATH} download="new-american-kits-houston-assistance-guide.pdf" className="outline-button">
              {t.pages.kitDownload} <ChevronRight size={16} />
            </a>
          </div>
          <p className="source-note">{t.pages.kitNote}</p>
          <div className="kit-topic-grid">
            {kitTopics.map(topic => (
              <span key={topic.id}>
                <Icon name={topic.icon} />
                {localize(topic.name, lang)}
              </span>
            ))}
          </div>
        </div>
        <div className="paper-card pdf-preview-card">
          <div className="pdf-toolbar">
            <span>{t.pages.kitTitle}</span>
            <a href={KIT_PDF_PATH} target="_blank" rel="noreferrer">{t.pages.kitOpen}</a>
          </div>
          <iframe src={`${KIT_PDF_PATH}#view=FitH`} title={t.pages.kitTitle} loading="lazy" />
        </div>
      </section>
      <section className="container client-section">
        <div className="section-heading-row">
          <div><p className="eyebrow">Bring the kit to your community</p><h2>Built for handoffs, workshops, and referral desks.</h2></div>
          <a className="outline-button" href={mailtoHref('Printed kit or community partnership request')}>Request kits or a partnership <Send size={15} /></a>
        </div>
        <div className="collaboration-grid">
          {collaborationPaths.map(path => <article className="paper-card" key={path.title}><h3>{path.title}</h3><p>{path.text}</p></article>)}
        </div>
        <p className="verification-disclaimer">Printed information can become outdated. Use the QR-linked portal and official source buttons for the newest provider information before acting.</p>
      </section>
    </PageTransition>
  );
}

function VolunteerPage({ lang }) {
  const t = useCopy(lang);
  const [saved, setSaved] = useState(false);
  const saveInterest = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (typeof form.reportValidity === 'function' && !form.reportValidity()) return;
    const values = new FormData(form);
    window.location.href = mailtoHref(
      `Volunteer interest: ${values.get('role') || 'CivicNavigation'}`,
      `Name: ${values.get('name') || ''}\nReply email: ${values.get('email') || ''}\nPreferred role: ${values.get('role') || ''}\n\nWhy I want to help:\n${values.get('why') || ''}`
    );
    setSaved(true);
  };

  return (
    <PageTransition>
      <PageHeader eyebrow={t.nav.volunteer} title={t.pages.volunteerTitle} subtitle={t.pages.volunteerDesc} />
      <section className="container two-column">
        <div>
          <h2 className="display-heading">{t.home.actionTitle}</h2>
          <p className="section-copy">{t.home.actionText}</p>
          <figure className="image-card"><img src={imageSet.library} alt="" /></figure>
        </div>
        <form
          className="paper-card volunteer-form"
          onSubmit={saveInterest}
        >
          {saved ? (
            <div className="success-state">
              <Check size={34} />
              <h2>Your email draft is ready.</h2>
              <p>Review and send it in your email app. If nothing opened, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> directly.</p>
              <button type="button" onClick={() => setSaved(false)}>Edit the form</button>
            </div>
          ) : (
            <>
              <p className="form-explainer">Submitting opens a pre-addressed email to our student team. We do not silently store your information in this browser.</p>
              <label><span>{t.forms.name}</span><input required name="name" placeholder={t.forms.name} /></label>
              <label><span>{t.forms.email}</span><input required name="email" type="email" placeholder="name@example.com" /></label>
              <label>
                <span>{t.forms.role}</span>
                <select name="role">
                  {reviewRoles.map(role => <option key={role.title}>{localize(role.title, lang)}</option>)}
                </select>
              </label>
              <label><span>{t.forms.why}</span><textarea name="why" rows="4" placeholder={t.forms.why} /></label>
              <button type="submit" className="dark-button">Email my interest <Send size={16} /></button>
            </>
          )}
        </form>
      </section>
      <section className="container process-section">
        <p className="eyebrow">What happens next</p>
        <div className="collaboration-grid">
          <article className="paper-card"><strong>1. Introduce yourself</strong><p>Tell us your school, skills, languages, availability, and the role that interests you.</p></article>
          <article className="paper-card"><strong>2. Complete orientation</strong><p>Learn the source-checking, privacy, plain-language, and referral boundaries used by the project.</p></article>
          <article className="paper-card"><strong>3. Work with review</strong><p>Student work is checked before publication; volunteers do not give legal, medical, or benefits advice.</p></article>
        </div>
      </section>
      <section className="container role-list-wide">
        {reviewRoles.map(role => (
          <article className="paper-card role-card" key={role.title}>
            <h3>{localize(role.title, lang)}</h3>
            <p>{localize(role.text, lang)}</p>
          </article>
        ))}
      </section>
    </PageTransition>
  );
}

function FeedbackPage({ lang, setTracker }) {
  const t = useCopy(lang);
  const [success, setSuccess] = useState(false);
  const [feedbackType, setFeedbackType] = useState('outdated');
  const [inputs, setInputs] = useState({ message: '', email: '', resourceName: '' });
  const tabIds = ['outdated', 'suggest', 'translation', 'story', 'question'];

  const submit = (event) => {
    event.preventDefault();
    if (!inputs.message.trim()) return;
    const subject = `${t.forms.tabs[tabIds.indexOf(feedbackType)] || 'Website feedback'}${inputs.resourceName ? `: ${inputs.resourceName}` : ''}`;
    window.location.href = mailtoHref(subject, `Feedback type: ${feedbackType}\nOrganization/resource: ${inputs.resourceName || 'Not provided'}\nReply email: ${inputs.email || 'Not provided'}\n\nDetails:\n${inputs.message}`);
    setSuccess(true);
    setTracker(prev => ({ ...prev, conversations: prev.conversations + 1 }));
  };

  return (
    <PageTransition>
      <PageHeader eyebrow={t.forms.feedbackType} title={t.pages.feedbackTitle} subtitle={t.pages.feedbackDesc} />
      <InternalPhoto
        src="/photos/students-resource-call.webp"
        alt="Student volunteers helping an immigrant adult call for local resource information and record the next steps."
        caption="Student navigators listen, help families prepare questions, and point them toward current provider information."
      />
      <section className="container feedback-layout">
        <div className="paper-card">
          <div className="feedback-tabs">
            {tabIds.map((id, index) => (
              <button key={id} className={feedbackType === id ? 'filter-active' : ''} onClick={() => setFeedbackType(id)} type="button">{t.forms.tabs[index]}</button>
            ))}
          </div>
          {success ? (
            <div className="success-state">
              <Check size={34} />
              <h2>Your email draft is ready.</h2>
              <p>Review and send it in your email app. If nothing opened, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
              <button type="button" onClick={() => { setSuccess(false); setInputs({ message: '', email: '', resourceName: '' }); }}>{t.forms.another}</button>
            </div>
          ) : (
            <form onSubmit={submit} className="feedback-form">
              <p className="form-explainer">This form opens a pre-addressed email so your correction or question reaches a real person. It does not claim to save data to a backend.</p>
              {feedbackType === 'outdated' && (
                <label><span>{t.forms.organization}</span><input value={inputs.resourceName} onChange={event => setInputs({ ...inputs, resourceName: event.target.value })} placeholder={t.forms.organization} /></label>
              )}
              <label><span>{t.forms.details}</span><textarea rows="6" required value={inputs.message} onChange={event => setInputs({ ...inputs, message: event.target.value })} placeholder={t.forms.details} /></label>
              <label><span>{t.forms.email}</span><input type="email" value={inputs.email} onChange={event => setInputs({ ...inputs, email: event.target.value })} placeholder="name@example.com" /></label>
              <button className="dark-button">{t.forms.submitFeedback} <Send size={16} /></button>
            </form>
          )}
        </div>
        <aside className="paper-card contact-card">
          <p className="eyebrow">A real contact point</p>
          <h2>Talk to the CivicNavigation team.</h2>
          <p>Use this contact for corrections, translation questions, school or library partnerships, printing support, volunteer interest, and general project questions.</p>
          <a className="dark-button" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL} <Send size={15} /></a>
          <div className="response-notes">
            <strong>Not an emergency line</strong><p>Call 911 for immediate danger or 988 for a mental-health crisis.</p>
            <strong>Not a caseworker or law office</strong><p>We can point to sources and providers, but cannot determine eligibility or give legal advice.</p>
          </div>
        </aside>
      </section>
    </PageTransition>
  );
}

function AboutPage({ lang }) {
  const t = useCopy(lang);
  const uniqueSources = Array.from(new Map(resources.map(resource => [resource.sourceUrl, resource])).values()).slice(0, 8);

  return (
    <PageTransition>
      <PageHeader eyebrow={t.nav.about} title={t.pages.aboutTitle} subtitle={t.pages.aboutDesc} />
      <section className="container split-visual">
        <div>
          <h2 className="display-heading">{t.home.storyTitle}</h2>
          <p className="section-copy">{t.home.actionText}</p>
        </div>
        <figure className="image-card">
          <img src="/photos/students-directory-guidance.webp" alt="Student volunteers and an immigrant family reviewing local resource information together at a library table." />
          <figcaption>Representative scene: CivicNavigation students make local information easier to understand, compare, and act on.</figcaption>
        </figure>
      </section>
      <section className="container research-grid">
        {researchCards.map(card => (
          <article className="paper-card stat-card" key={card.source}>
            <span>{card.source}</span>
            <strong>{card.stat}</strong>
            <p>{localize(card.text, lang)}</p>
          </article>
        ))}
      </section>
      <section className="container client-section">
        <div className="section-heading-row"><div><p className="eyebrow">Current, source-first information</p><h2>What we verified while strengthening this portal.</h2></div></div>
        <div className="verified-facts-grid">
          {verifiedServiceFacts.map(fact => (
            <a className="paper-card verified-fact" href={fact.href} target="_blank" rel="noreferrer" key={fact.title}>
              <span>{fact.label}</span><h3>{fact.title}</h3><p>{fact.text}</p><small>Open official source <ExternalLink size={13} /></small>
            </a>
          ))}
        </div>
      </section>
      <section className="container methodology-section">
        <article><p className="eyebrow">Verification method</p><h2>How a listing earns its place.</h2></article>
        <ol className="plain-steps">
          <li><strong>Start with an official provider page.</strong><span>We prefer the agency’s own current website over copied directories or social posts.</span></li>
          <li><strong>Capture decision details.</strong><span>Phone, service area, hours, cost, eligibility, documents, languages, and official source.</span></li>
          <li><strong>Publish with limits.</strong><span>The portal never promises funding, appointments, eligibility, or outcomes.</span></li>
          <li><strong>Invite corrections.</strong><span>Every visitor can report a change directly to {CONTACT_EMAIL}.</span></li>
        </ol>
      </section>
      <section className="container client-section compact-client-section">
        <div className="section-heading-row">
          <div><p className="eyebrow">Work with us</p><h2>Turn local knowledge into a trusted community handoff.</h2></div>
          <a className="dark-button" href={mailtoHref('CivicNavigation partnership inquiry')}>Start a conversation <Send size={15} /></a>
        </div>
        <div className="collaboration-grid">{collaborationPaths.map(path => <article className="paper-card" key={path.title}><h3>{path.title}</h3><p>{path.text}</p></article>)}</div>
      </section>
      <section className="container source-grid">
        {uniqueSources.map(resource => (
          <a className="source-card" href={resource.sourceUrl} target="_blank" rel="noreferrer" key={resource.id}>
            <span>{t.labels.source}</span>
            <strong>{resource.name}</strong>
            <ExternalLink size={16} />
          </a>
        ))}
      </section>
    </PageTransition>
  );
}

function EmergencyPage({ lang }) {
  const t = useCopy(lang);

  return (
    <PageTransition>
      <PageHeader eyebrow={t.misc.urgent} title={t.pages.emergencyTitle} subtitle={t.pages.emergencyDesc} />
      <InternalPhoto
        src="/photos/students-resource-call.webp"
        alt="A student volunteer helping an immigrant adult make a resource call while another student checks a printed guide."
        caption="Students can help someone locate the right number and prepare for a call; trained emergency services handle urgent situations."
      />
      <section className="container emergency-intro">
        <strong>If there is immediate danger, call 911.</strong>
        <p>Use the cards below for direct crisis and support lines. A student volunteer or website cannot replace emergency responders, trained advocates, or licensed clinicians.</p>
      </section>
      <section className="container emergency-grid">
        {emergencyResources.map(resource => (
          <article className="paper-card emergency-card" key={resource.name}>
            <span><AlertTriangle size={14} /> {localize(resource.category, lang)}</span>
            <h2>{resource.name}</h2>
            <p>{localize(resource.details, lang)}</p>
            <div className="card-actions">
              <a href={telHref(resource.phone)}>{t.labels.call} {resource.phone} <Phone size={15} /></a>
              <a href={resource.website} target="_blank" rel="noreferrer">{t.labels.source} <ExternalLink size={15} /></a>
            </div>
          </article>
        ))}
      </section>
    </PageTransition>
  );
}

function Footer({ lang }) {
  const t = useCopy(lang);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>{BRAND}</strong>
          <p>{t.misc.footer}</p>
          <a className="footer-email" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('CivicNavigation question')}`}>
            {CONTACT_EMAIL}
          </a>
          <p className="footer-note">Questions, corrections, partnerships, printing requests, and volunteer interest are welcome.</p>
        </div>
        <div>
          <Link to="/directory">{t.pages.directoryTitle}</Link>
          <Link to="/guides">{t.pages.guidesTitle}</Link>
          <Link to="/kit">{t.pages.kitTitle}</Link>
          <Link to="/feedback">{t.pages.feedbackTitle}</Link>
        </div>
      </div>
    </footer>
  );
}

function Chatbot({ lang, tracker, setTracker }) {
  const t = useCopy(lang);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showAllTopics, setShowAllTopics] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const quickQueries = ['food', 'utility bill', 'doctor', 'school enrollment', 'legal aid', 'transportation', 'emergency', 'documents', 'housing rent', 'english classes', 'childcare', 'benefits 211'];
  const topicActions = {
    'Food Assistance': [
      { kind: 'call', href: 'tel:+18323699390', label: 'Houston Food Bank' },
      { kind: 'route', to: '/directory/houston-food-bank-community-assistance', label: t.nav.directory }
    ],
    'Utility Assistance': [
      { kind: 'call', href: 'tel:+17135902327', label: 'BakerRipley' },
      { kind: 'route', to: '/directory/bakerripley-utility-assistance', label: t.nav.directory }
    ],
    Healthcare: [
      { kind: 'call', href: 'tel:+17135666509', label: 'Harris Health' },
      { kind: 'route', to: '/directory/harris-health-financial-assistance', label: t.nav.directory }
    ],
    'School Enrollment': [
      { kind: 'call', href: 'tel:+17135566000', label: 'Houston ISD' },
      { kind: 'route', to: '/guides', label: t.nav.guides }
    ],
    'Housing & Shelter': [
      { kind: 'call', href: 'tel:211', label: '211' },
      { kind: 'route', to: '/directory', label: t.nav.directory }
    ],
    'English Classes': [
      { kind: 'call', href: 'tel:+18323931313', label: 'Houston Public Library' },
      { kind: 'route', to: '/directory/houston-public-library-language-citizenship', label: t.nav.directory }
    ],
    'Legal Aid': [
      { kind: 'call', href: 'tel:+17132280735', label: 'Houston Volunteer Lawyers' },
      { kind: 'route', to: '/guides', label: t.nav.guides }
    ],
    Transportation: [
      { kind: 'call', href: 'tel:+17136354000', label: 'METRO' },
      { kind: 'route', to: '/directory/metro-houston', label: t.nav.directory }
    ],
    Childcare: [{ kind: 'call', href: 'tel:211', label: '211' }],
    'Benefits Navigation': [
      { kind: 'call', href: 'tel:211', label: '211' },
      { kind: 'route', to: '/directory/houston-food-bank-community-assistance', label: t.nav.directory }
    ],
    'Mental Health': [
      { kind: 'call', href: 'tel:988', label: '988' },
      { kind: 'route', to: '/emergency', label: t.nav.emergency }
    ],
    'Safety & Domestic Violence': [
      { kind: 'call', href: 'tel:+17135282121', label: 'HAWC' },
      { kind: 'route', to: '/emergency', label: t.nav.emergency }
    ],
    'Disaster Recovery': [{ kind: 'call', href: 'tel:211', label: '211' }],
    Emergency: [
      { kind: 'call', href: 'tel:911', label: '911' },
      { kind: 'route', to: '/emergency', label: t.nav.emergency }
    ],
    'Required Documents': [
      { kind: 'route', to: '/guides', label: t.nav.guides },
      { kind: 'route', to: '/kit', label: t.nav.kit }
    ],
    'Language Access': [{ kind: 'call', href: 'tel:211', label: '211' }],
    'Printed Kit': [{ kind: 'route', to: '/kit', label: t.nav.kit }],
    'Volunteer & Partnerships': [
      { kind: 'route', to: '/volunteer', label: t.nav.volunteer },
      { kind: 'email', href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('CivicNavigation volunteer or partnership')}`, label: CONTACT_EMAIL }
    ],
    'Website Feedback': [
      { kind: 'route', to: '/feedback', label: t.pages.feedbackTitle },
      { kind: 'email', href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('CivicNavigation website feedback')}`, label: CONTACT_EMAIL }
    ]
  };

  const defaultActions = [
    { kind: 'route', to: '/directory', label: t.nav.directory },
    { kind: 'call', href: 'tel:211', label: '211' }
  ];

  const keywordMatches = (text, keyword) => {
    const normalizedKeyword = keyword.toLowerCase();
    if (/^[a-z0-9 ]+$/.test(normalizedKeyword)) {
      const escapedKeyword = normalizedKeyword
        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        .replace(/\s+/g, '\\s+');
      return new RegExp(`\\b${escapedKeyword}\\b`, 'i').test(text);
    }
    return text.includes(normalizedKeyword);
  };

  const processQuery = (queryText) => {
    const lowerQuery = queryText.toLowerCase();
    const matchedAnswer = chatbotAnswers
      .map(answer => ({
        answer,
        score: answer.keywords.reduce((total, keyword) => total + (keywordMatches(lowerQuery, keyword) ? Math.max(1, keyword.split(' ').length) : 0), 0)
      }))
      .sort((first, second) => second.score - first.score)
      .find(result => result.score > 0)?.answer;
    const replyText = matchedAnswer ? localize(matchedAnswer.reply, lang) : t.chatbot.unknown;
    const topic = matchedAnswer ? matchedAnswer.topic : 'unknown';
    const actions = matchedAnswer ? (topicActions[topic] || defaultActions) : defaultActions;

    setTracker(prev => ({
      ...prev,
      conversations: prev.conversations + 1,
      searches: {
        ...prev.searches,
        [topic]: (prev.searches[topic] || 0) + 1
      }
    }));
    setMessages(prev => [...prev, { type: 'user', text: queryText }, { type: 'bot', text: replyText, actions }]);
  };

  const submit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    processQuery(inputValue.trim());
    setInputValue('');
  };

  return (
    <div className="chatbot">
      <AnimatePresence>
        {isOpen && (
          <motion.div id="civic-navigator-panel" className="chat-panel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}>
            <header>
              <div><span /> Quick resource finder</div>
              <div className="chat-header-actions">
                {messages.length > 0 && <button type="button" onClick={() => setMessages([])}>{t.chatbot.clear}</button>}
                <button type="button" onClick={() => setIsOpen(false)}>{t.chatbot.close}</button>
              </div>
            </header>
            <p className="chat-disclosure">This is a simple on-site guide, not live AI or a caseworker. It can point you to the right local starting place; always confirm details with the provider.</p>
            <div className="chat-messages" aria-live="polite">
              {[{ type: 'bot', text: t.chatbot.welcome }, ...messages].map((message, index) => (
                <div key={`${message.type}-${index}`} className={message.type === 'user' ? 'message user' : 'message bot'}>
                  <span>{message.text}</span>
                  {message.actions && (
                    <div className="message-actions">
                      {message.actions.map(action => {
                        const icon = action.kind === 'call' ? <Phone size={13} /> : action.kind === 'email' ? <Send size={13} /> : <ChevronRight size={13} />;
                        const label = action.kind === 'call' ? `${t.labels.call} ${action.label}` : action.label;
                        return action.to ? (
                          <Link key={`${action.kind}-${action.to}`} to={action.to} onClick={() => setIsOpen(false)}>{icon}{label}</Link>
                        ) : (
                          <a key={`${action.kind}-${action.href}`} href={action.href}>{icon}{label}</a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
            <div className="quick-prompt-heading">
              <span>{t.chatbot.suggested}</span>
              <button type="button" onClick={() => setShowAllTopics(show => !show)}>{showAllTopics ? t.chatbot.fewerTopics : t.chatbot.moreTopics}</button>
            </div>
            <div className="quick-prompts">
              {t.chatbot.prompts.slice(0, showAllTopics ? quickQueries.length : 6).map((label, index) => (
                <button type="button" key={label} onClick={() => processQuery(quickQueries[index])}>{label}</button>
              ))}
            </div>
            <form onSubmit={submit}>
              <input value={inputValue} onChange={event => setInputValue(event.target.value)} placeholder={t.chatbot.placeholder} aria-label={t.chatbot.placeholder} />
              <button type="submit" aria-label="Send question"><Send size={15} /></button>
            </form>
            <p className="chat-footnote">For urgent danger, call 911. For current local referrals, call 211. For help we do not cover here, <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('CivicNavigation support request')}`}>email the team</a>.</p>
          </motion.div>
        )}
      </AnimatePresence>
      <button type="button" className="chat-toggle" onClick={() => setIsOpen(prev => !prev)} aria-label="Open quick resource finder" aria-expanded={isOpen} aria-controls="civic-navigator-panel">
        <MessageSquare size={22} />
        <span>{tracker.conversations}</span>
      </button>
    </div>
  );
}
