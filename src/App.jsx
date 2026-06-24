import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import {
  AlertTriangle,
  BookOpen,
  Briefcase,
  Bus,
  Check,
  ChevronRight,
  Clock,
  ExternalLink,
  Globe,
  GraduationCap,
  Home as HomeIcon,
  Languages,
  MessageSquare,
  Phone,
  Scale,
  Search,
  Send,
  Stethoscope,
  Users,
  Utensils,
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

const BRAND = 'New American Kits';
const KIT_PDF_PATH = '/kits/houston-assistance-guide.pdf';

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

function trackerLabel(key, lang, t) {
  const categoryById = categories.find(category => category.id === key);
  if (categoryById) return localize(categoryById.name, lang);

  const topicMap = {
    'Food Assistance': 'food',
    'Utility Assistance': 'utilities',
    Healthcare: 'health',
    'School Enrollment': 'education',
    'Legal Aid': 'legal',
    Transportation: 'transport',
    Emergency: 'emergency',
    'Required Documents': 'documents',
    'Source check': 'source',
    source: 'source',
    unknown: 'unknown'
  };
  const mapped = topicMap[key] || key;
  const category = categories.find(item => item.id === mapped);
  if (category) return localize(category.name, lang);
  if (mapped === 'emergency') return t.nav.emergency;
  if (mapped === 'documents') return t.labels.documents;
  if (mapped === 'source') return t.labels.source;
  if (mapped === 'unknown') return t.chatbot.unknown;
  return key;
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
            <Route path="/guides" element={<GuidesPage lang={lang} />} />
            <Route path="/kit" element={<KitPage lang={lang} />} />
            <Route path="/partners" element={<Navigate to="/" replace />} />
            <Route path="/volunteer" element={<VolunteerPage lang={lang} />} />
            <Route path="/feedback" element={<FeedbackPage lang={lang} tracker={tracker} setTracker={setTracker} />} />
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
    <nav className="floating-nav" aria-label={ui.primaryNav}>
      <Link to="/" className="brand-mark" aria-label={`${BRAND} ${t.nav.home}`}>
        <span className="brand-icon">NA</span>
        <span>{BRAND}</span>
      </Link>
      <div className="nav-links">
        {links.map(([path, label]) => (
          <Link key={path} to={path} className={location.pathname === path ? 'active' : ''}>
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
        <Link to="/emergency" className="nav-cta">
          {t.nav.emergency} <ChevronRight size={14} />
        </Link>
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

function ResourceCard({ resource, lang, t, trackReferral }) {
  const category = categories.find(item => item.id === resource.categoryId);

  return (
    <article className="paper-card resource-card">
      <div className="resource-topline">
        <span className="resource-category">{category ? localize(category.name, lang) : resource.categoryId}</span>
        <span>{t.labels.lastVerified}: {resource.lastVerified}</span>
      </div>
      <div>
        <h2>{resource.name}</h2>
        <p>{localize(resource.description, lang)}</p>
      </div>
      <dl className="resource-details">
        <div><dt>{t.labels.areaServed}</dt><dd>{localize(resource.areaServed, lang)}</dd></div>
        <div><dt>{t.labels.hours}</dt><dd>{localize(resource.hours, lang)}</dd></div>
        <div><dt>{t.labels.languages}</dt><dd>{resource.languages.map(language => translateStaticText(language, lang)).join(', ')}</dd></div>
        <div><dt>{t.labels.cost}</dt><dd>{localize(resource.cost, lang)}</dd></div>
        <div><dt>{t.labels.eligibility}</dt><dd>{localize(resource.eligibility, lang)}</dd></div>
        <div><dt>{t.labels.documents}</dt><dd>{localize(resource.documentsRequired, lang)}</dd></div>
        <div><dt>{t.labels.services}</dt><dd>{localize(resource.servicesOffered, lang)}</dd></div>
        <div><dt>{t.labels.contact}</dt><dd>{resource.phone}</dd></div>
      </dl>
      <p className="source-note">{t.labels.sourceNote}</p>
      <div className="card-actions">
        <a href={resource.website} target="_blank" rel="noreferrer" onClick={() => trackReferral(resource.categoryId)}>
          {t.labels.website} <Globe size={15} />
        </a>
        {resource.sourceUrl && (
          <a href={resource.sourceUrl} target="_blank" rel="noreferrer" onClick={() => trackReferral('source')}>
            {t.labels.source} <ExternalLink size={15} />
          </a>
        )}
        {telHref(resource.phone) && (
          <a href={telHref(resource.phone)} onClick={() => trackReferral(resource.categoryId)}>
            {t.labels.call} <Phone size={15} />
          </a>
        )}
      </div>
    </article>
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

  return (
    <PageTransition>
      <PageHeader eyebrow={t.misc.guide} title={t.pages.guidesTitle} subtitle={t.pages.guidesDesc} />
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
              <div className="steps-list">
                {selectedGuide.steps.map((step, index) => (
                  <article key={`${selectedGuide.id}-${index}`}>
                    <span>{index + 1}</span>
                    <p>{localize(step, lang)}</p>
                  </article>
                ))}
              </div>
              <div className="guide-notes">
                <p><strong>{t.misc.documentsNeeded}:</strong> {localize(selectedGuide.documentsNeeded, lang)}</p>
                <p><strong>{t.labels.eligibility}:</strong> {localize(selectedGuide.eligibility, lang)}</p>
                <p><strong>{t.misc.safetyNote}:</strong> {localize(selectedGuide.safetyNote, lang)}</p>
              </div>
            </>
          ) : (
            <p>{t.labels.noResults}</p>
          )}
        </div>
      </section>
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
    </PageTransition>
  );
}

function VolunteerPage({ lang }) {
  const t = useCopy(lang);
  const [saved, setSaved] = useState(false);
  const saveInterest = (event) => {
    event.preventDefault();
    const form = event.currentTarget.form || event.currentTarget;
    if (typeof form.reportValidity === 'function' && !form.reportValidity()) return;
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
              <h2>{t.forms.received}</h2>
              <p>{t.forms.receivedBody}</p>
              <button type="button" onClick={() => setSaved(false)}>{t.forms.another}</button>
            </div>
          ) : (
            <>
              <label><span>{t.forms.name}</span><input required placeholder={t.forms.name} /></label>
              <label><span>{t.forms.email}</span><input required type="email" placeholder="name@example.com" /></label>
              <label>
                <span>{t.forms.role}</span>
                <select>
                  {reviewRoles.map(role => <option key={role.title}>{localize(role.title, lang)}</option>)}
                </select>
              </label>
              <label><span>{t.forms.why}</span><textarea rows="4" placeholder={t.forms.why} /></label>
              <button type="submit" className="dark-button" onClick={saveInterest}>{t.forms.saveInterest} <ChevronRight size={16} /></button>
            </>
          )}
        </form>
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

function FeedbackPage({ lang, tracker, setTracker }) {
  const t = useCopy(lang);
  const [success, setSuccess] = useState(false);
  const [feedbackType, setFeedbackType] = useState('outdated');
  const [inputs, setInputs] = useState({ message: '', email: '', resourceName: '' });
  const tabIds = ['outdated', 'suggest', 'translation', 'story', 'question'];

  const submit = (event) => {
    event.preventDefault();
    if (!inputs.message.trim()) return;
    setSuccess(true);
    setTracker(prev => ({ ...prev, conversations: prev.conversations + 1 }));
  };

  return (
    <PageTransition>
      <PageHeader eyebrow={t.forms.feedbackType} title={t.pages.feedbackTitle} subtitle={t.pages.feedbackDesc} />
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
              <h2>{t.forms.received}</h2>
              <p>{t.forms.receivedBody}</p>
              <button type="button" onClick={() => { setSuccess(false); setInputs({ message: '', email: '', resourceName: '' }); }}>{t.forms.another}</button>
            </div>
          ) : (
            <form onSubmit={submit} className="feedback-form">
              {feedbackType === 'outdated' && (
                <label><span>{t.forms.organization}</span><input value={inputs.resourceName} onChange={event => setInputs({ ...inputs, resourceName: event.target.value })} placeholder={t.forms.organization} /></label>
              )}
              <label><span>{t.forms.details}</span><textarea rows="6" required value={inputs.message} onChange={event => setInputs({ ...inputs, message: event.target.value })} placeholder={t.forms.details} /></label>
              <label><span>{t.forms.email}</span><input type="email" value={inputs.email} onChange={event => setInputs({ ...inputs, email: event.target.value })} placeholder="name@example.com" /></label>
              <button className="dark-button">{t.forms.submitFeedback} <Send size={16} /></button>
            </form>
          )}
        </div>
        <aside className="paper-card tracker-card">
          <p className="eyebrow">{t.misc.liveOps}</p>
          <h2>{t.misc.trackerTitle}</h2>
          <dl>
            <div><dt>{t.misc.portalConsultations}</dt><dd>{tracker.conversations}</dd></div>
            <div><dt>{t.misc.outwardReferrals}</dt><dd>{tracker.referrals}</dd></div>
            <div><dt>{t.misc.trackedClicks}</dt><dd>{tracker.clicks}</dd></div>
          </dl>
          <h3>{t.misc.mostConsulted}</h3>
          {Object.entries(tracker.searches).slice(0, 5).map(([key, value]) => (
            <p className="tracker-row" key={key}><span>{trackerLabel(key, lang, t)}</span><strong>{value}</strong></p>
          ))}
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
        <figure className="image-card"><img src={imageSet.handoff} alt="" /></figure>
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
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const quickQueries = ['food', 'utility bill', 'doctor', 'school enrollment', 'legal aid', 'transportation', 'emergency', 'documents'];

  const processQuery = (queryText) => {
    const lowerQuery = queryText.toLowerCase();
    const matchedAnswer = chatbotAnswers.find(answer => answer.keywords.some(keyword => lowerQuery.includes(keyword)));
    const replyText = matchedAnswer ? localize(matchedAnswer.reply, lang) : t.chatbot.unknown;
    const topic = matchedAnswer ? matchedAnswer.topic : 'unknown';

    setTracker(prev => ({
      ...prev,
      conversations: prev.conversations + 1,
      searches: {
        ...prev.searches,
        [topic]: (prev.searches[topic] || 0) + 1
      }
    }));
    setMessages(prev => [...prev, { type: 'user', text: queryText }, { type: 'bot', text: replyText }]);
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
          <motion.div className="chat-panel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}>
            <header>
              <div><span /> {t.chatbot.title}</div>
              <button type="button" onClick={() => setIsOpen(false)}>{t.chatbot.close}</button>
            </header>
            <div className="chat-messages">
              {[{ type: 'bot', text: t.chatbot.welcome }, ...messages].map((message, index) => (
                <div key={`${message.type}-${index}`} className={message.type === 'user' ? 'message user' : 'message bot'}>
                  {message.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
            <div className="quick-prompts">
              {t.chatbot.prompts.map((label, index) => (
                <button type="button" key={label} onClick={() => processQuery(quickQueries[index])}>{label}</button>
              ))}
            </div>
            <form onSubmit={submit}>
              <input value={inputValue} onChange={event => setInputValue(event.target.value)} placeholder={t.chatbot.placeholder} />
              <button type="submit"><Send size={15} /></button>
            </form>
            <p className="chat-footnote">{t.chatbot.footnote}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <button type="button" className="chat-toggle" onClick={() => setIsOpen(prev => !prev)} aria-label={t.chatbot.title}>
        <MessageSquare size={22} />
        <span>{tracker.conversations}</span>
      </button>
    </div>
  );
}
