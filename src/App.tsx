/**
 * Volker Flory - Schädlingsbekämpfung Website
 * IHK geprüfter Schädlingsbekämpfer & staatlich geprüfter Desinfektor
 */

import { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Star,
  ShieldCheck,
  Clock,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Menu,
  X,
  Award,
  Users,
  Rat,
  Bug,
  Mail,
  TreePine,
  Leaf
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// ============================================
// BUSINESS CONFIGURATION - Volker Flory
// ============================================
const CONFIG = {
  companyName: 'Volker Flory',
  companyNameFull: 'Schädlings\u00ADbekämpfung Flory',
  companyLegalName: 'Volker Flory - IHK geprüfter Schädlingsbekämpfer',
  tagline: 'Wir beraten Sie gerne zu all Ihren Fragen',
  phone: '06221 / 705932',
  phoneLink: 'tel:+496221705932',
  whatsapp: '496221705932',
  email: 'Volker.Flory@gmx.de',
  address: 'Heidelberg & Umgebung',
  region: 'Heidelberg & Rhein-Neckar',
  yearsExperience: '25',
  responseTime: '24 Stunden',
  googleRating: '5.0',
  googleReviewCount: '15+',
  hours: {
    weekdays: 'Mo-Fr: 8:00 - 18:00 Uhr',
    saturday: 'Sa: Nach Vereinbarung'
  },
  founderName: 'Volker Flory',
  logo: '/logo.jpg',
};

const SERVICES = [
  { title: 'Ratten & Mäuse', description: 'Professionelle Schadnagerbekämpfung mit modernsten Methoden der Fangjagd.', Icon: Rat, emergency: true },
  { title: 'Wespen & Hornissen', description: 'Fachgerechte Entfernung und kostenlose Hornissenumsiedlung.', Icon: Bug, emergency: true },
  { title: 'Holz- & Bautenschutz', description: 'Spezialist für Holzschutz und Gebäudesanierung bei Schädlingsbefall.', Icon: TreePine, emergency: false },
  { title: 'Desinfektion', description: 'Staatlich geprüfter Desinfektor für Todesfälle und Insektenbefall.', Icon: ShieldCheck, emergency: false },
];

const SERVICES_EXTENDED = [
  'Ameisenbekämpfung',
  'Schabenbekämpfung',
  'Flohbekämpfung',
  'Taubenabwehr',
  'Wühlmausbekämpfung',
  'Mottenbekämpfung',
  'HACCP Beratung',
  'Pflanzenschutz',
];

const PROCESS_STEPS = [
  { step: '1', title: 'Anruf', description: 'Kontaktieren Sie uns telefonisch oder per E-Mail.' },
  { step: '2', title: 'Beratung', description: 'Kostenlose Erstberatung und Analyse Ihres Problems.' },
  { step: '3', title: 'Termin', description: 'Zeitnahe Terminvergabe nach Ihren Wünschen.' },
  { step: '4', title: 'Lösung', description: 'Effektive Bekämpfung mit fachgerechten Methoden.' },
];

const FAQ_ITEMS = [
  { q: 'Was kostet eine Schädlingsbekämpfung?', a: 'Die Kosten variieren je nach Art und Umfang des Befalls. Wir erstellen Ihnen ein transparentes, faires Angebot nach der Besichtigung.' },
  { q: 'Bieten Sie kostenlose Hornissenumsiedlung an?', a: 'Ja, als ehrenamtlicher Hornissenberater bieten wir die Umsiedlung von Hornissennestern kostenlos an.' },
  { q: 'In welchen Regionen sind Sie tätig?', a: 'Wir betreuen die gesamte Rhein-Neckar-Region, insbesondere Heidelberg und Umgebung.' },
  { q: 'Haben Sie HACCP-Erfahrung?', a: 'Ja, wir sind spezialisiert auf Schädlingsbekämpfung nach HACCP-Richtlinien für Lebensmittelbetriebe.' },
];

const TESTIMONIALS = [
  { name: 'Familie Weber', location: 'Heidelberg', text: 'Herr Flory hat unser Wespenproblem schnell und professionell gelöst. Sehr kompetent und freundlich!', rating: 5 },
  { name: 'Bäckerei Müller', location: 'Heidelberg', text: 'Seit Jahren unser zuverlässiger Partner für HACCP-konforme Schädlingsprävention. Immer pünktlich und gründlich.', rating: 5 },
  { name: 'Peter K.', location: 'Dossenheim', text: 'Top Service bei der Rattenbekämpfung. Diskret, effektiv und faire Preise. Sehr empfehlenswert!', rating: 5 },
];

const CERTIFICATIONS = [
  { name: 'IHK geprüft', label: 'Schädlingsbekämpfer' },
  { name: 'Staatlich', label: 'gepr. Desinfektor' },
  { name: 'Holzschutz', label: 'Spezialist' },
  { name: 'Fangjagd', label: 'Experte' },
];

const SERVICE_AREAS = ['Heidelberg', 'Dossenheim', 'Eppelheim', 'Leimen', 'Sandhausen', 'Walldorf', 'Wiesloch', 'Neckargemünd'];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-green-100 selection:text-green-900">
      {/* Top Emergency Bar */}
      <div className="bg-brand-primary text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto flex justify-center items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1.5">
            <Clock className="size-4 text-brand-highlight" />
            {CONFIG.hours.weekdays}
          </span>
          <a href={CONFIG.phoneLink} className="flex items-center gap-1 hover:underline text-white font-bold">
            <Phone className="size-4" /> {CONFIG.phone}
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-brand-primary">{CONFIG.companyNameFull}</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-brand-secondary">
            <a href="#services" className="hover:text-brand-accent transition-colors">Leistungen</a>
            <a href="#about" className="hover:text-brand-accent transition-colors">Über uns</a>
            <a href="#testimonials" className="hover:text-brand-accent transition-colors">Bewertungen</a>
            <a href="#contact" className="hover:text-brand-accent transition-colors">Kontakt</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${CONFIG.whatsapp}`}
              className="hidden sm:flex items-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white px-4 py-2 rounded-full text-sm font-bold transition-colors shadow-lg"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
            <button
              className="md:hidden p-2 text-brand-primary cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 rounded-lg"
              aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-bold text-brand-primary">
              <a href="#services" onClick={() => setIsMenuOpen(false)}>Leistungen</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>Über uns</a>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Bewertungen</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
              <hr />
              <a href={CONFIG.phoneLink} className="text-brand-accent">{CONFIG.phone}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 mb-6 badge-trust">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="size-3 fill-current" />)}
                </div>
                <span className="text-slate-600">{CONFIG.googleRating}/5 Google Bewertung ({CONFIG.googleReviewCount} Bewertungen)</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-brand-primary leading-[1.1] mb-6 tracking-tight">
                {CONFIG.companyNameFull}<br />
                <span className="text-brand-accent">{CONFIG.region}</span>
              </h1>

              <p className="text-xl text-slate-600 mb-4 max-w-lg leading-relaxed">
                <span className="font-bold text-brand-primary">{CONFIG.tagline}</span>
              </p>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                IHK geprüfter Schädlingsbekämpfer und staatlich geprüfter Desinfektor mit über <span className="font-bold text-brand-accent">{CONFIG.yearsExperience} Jahren Erfahrung</span>. Spezialist für Holz- und Bautenschutz.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={CONFIG.phoneLink} className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-xl flex items-center justify-center gap-2 group">
                  <Phone className="size-5" /> Jetzt anrufen
                </a>
                <a href="#contact" className="bg-white border-2 border-slate-200 hover:border-brand-accent px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                  Kostenlose Beratung <ArrowRight className="size-5 text-brand-accent" />
                </a>
              </div>

              <div className="mt-10 flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <Award className="text-brand-accent size-5" />
                  <span className="text-sm font-semibold text-slate-700">IHK geprüft</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-brand-accent size-5" />
                  <span className="text-sm font-semibold text-slate-700">Staatl. gepr. Desinfektor</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative order-first lg:order-last"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
                <img
                  src="/cdc-wz3ijPHvL54-unsplash.jpg"
                  alt="Professionelle Schädlingsbekämpfung"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Leaf className="text-brand-accent size-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-accent uppercase tracking-wider">Hornissenberater</p>
                      <p className="text-brand-primary font-bold">Kostenlose Umsiedlung</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="size-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="text-brand-accent size-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Seit über</p>
                    <p className="text-sm font-bold">{CONFIG.yearsExperience} Jahren</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50/50 -skew-x-12 translate-x-1/2 -z-10" />
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="flex flex-col items-center">
                <span className="text-xl font-black text-brand-primary">{cert.name}</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Unsere Leistungen</h2>
            <h3 className="text-4xl font-bold text-brand-primary mb-6">Professionelle Schädlingsbekämpfung</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Als IHK geprüfter Schädlingsbekämpfer und staatlich geprüfter Desinfektor bieten wir Ihnen umfassende Lösungen für alle Schädlingsprobleme.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer relative"
              >
                {service.emergency && (
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Notdienst
                  </div>
                )}
                <div className="mb-6 bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <service.Icon className="size-8 text-brand-accent" />
                </div>
                <h4 className="text-xl font-bold text-brand-primary mb-3">{service.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                <a href="#contact" className="text-brand-accent font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Jetzt anfragen <ArrowRight className="size-4" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Extended Services */}
          <div className="mt-16 text-center">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Weitere Leistungen</p>
            <div className="flex flex-wrap justify-center gap-3">
              {SERVICES_EXTENDED.map((service) => (
                <span key={service} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-600 border border-slate-200">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">So funktioniert's</h2>
            <h3 className="text-4xl font-bold text-brand-primary mb-6">In 4 Schritten schädlingsfrei</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Von Ihrem Anruf bis zur effektiven Lösung. Transparent, zuverlässig und professionell.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary text-white rounded-full text-2xl font-bold mb-6">
                  {item.step}
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-green-200" />
                )}
                <h4 className="text-xl font-bold text-brand-primary mb-3">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/mesto-sprayers-spruhgerate-KtU82_xkOJs-unsplash.jpg"
                  alt="Professionelle Schädlingsbekämpfung"
                  className="w-full object-cover aspect-[3/4]"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-primary text-white p-8 rounded-3xl shadow-xl max-w-xs hidden sm:block">
                <p className="italic text-lg mb-4">"Kompetent, zuverlässig, diskret"</p>
                <p className="font-bold">— {CONFIG.founderName}</p>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Über uns</h2>
              <h3 className="text-4xl font-bold text-brand-primary mb-8">Ihr Experte vor Ort</h3>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Mit über {CONFIG.yearsExperience} Jahren Erfahrung ist Volker Flory Ihr kompetenter Ansprechpartner für alle Fragen rund um die Schädlingsbekämpfung in Heidelberg und Umgebung.
                </p>
                <p>
                  Als IHK geprüfter Schädlingsbekämpfer und staatlich geprüfter Desinfektor biete ich Ihnen umfassende Lösungen. Meine Spezialgebiete sind Holz- und Bautenschutz sowie die fachgerechte Beratung zu Wespen und Hornissen.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Users className="text-brand-accent size-5" />
                    </div>
                    <div>
                      <p className="text-brand-primary font-bold">{CONFIG.yearsExperience}+ Jahre</p>
                      <p className="text-xs">Erfahrung</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Award className="text-brand-accent size-5" />
                    </div>
                    <div>
                      <p className="text-brand-primary font-bold">IHK geprüft</p>
                      <p className="text-xs">Schädlingsbekämpfer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Kundenstimmen</h2>
              <h3 className="text-4xl font-bold text-brand-primary">Das sagen unsere Kunden</h3>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="text-right">
                <p className="font-bold text-brand-primary">Ausgezeichnet {CONFIG.googleRating}/5</p>
                <p className="text-xs text-slate-500">Basierend auf {CONFIG.googleReviewCount} Google Bewertungen</p>
              </div>
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-brand-primary text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="size-3" /> {t.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services Callout */}
      <section className="py-16 bg-brand-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-2xl">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">HACCP-konforme Schädlingsbekämpfung</h3>
              <p className="text-white/80">
                Für Lebensmittelbetriebe, Gastronomie, Bäckereien und Metzgereien: Professionelle Schädlingsbekämpfung nach HACCP-Richtlinien mit regelmäßiger Dokumentation.
              </p>
            </div>
            <a href="#contact" className="bg-white text-brand-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors flex items-center gap-2 whitespace-nowrap">
              Gewerbe-Anfrage <ArrowRight className="size-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Häufige Fragen</h2>
              <h3 className="text-4xl font-bold text-brand-primary">Was Sie wissen sollten</h3>
            </div>

            <div className="space-y-4">
              {FAQ_ITEMS.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
                >
                  <h4 className="font-bold text-brand-primary mb-2 flex items-start gap-3">
                    <span className="bg-green-100 text-brand-accent rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">?</span>
                    {item.q}
                  </h4>
                  <p className="text-slate-600 ml-9">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Unser Einsatzgebiet</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {SERVICE_AREAS.map(city => (
              <span key={city} className="text-slate-600 font-medium">
                Kammerjäger {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-brand-primary rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="p-12 lg:w-1/2 text-white">
              <h3 className="text-4xl font-bold mb-6">Kontaktieren Sie uns</h3>
              <p className="text-slate-300 mb-8">
                Schildern Sie uns Ihr Schädlingsproblem und erhalten Sie schnelle, professionelle Hilfe.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Phone className="size-6 text-brand-highlight" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Telefon</p>
                    <p className="text-xl font-bold">{CONFIG.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Mail className="size-6 text-brand-highlight" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">E-Mail</p>
                    <p className="text-lg font-bold">{CONFIG.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <MapPin className="size-6 text-brand-highlight" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Einsatzgebiet</p>
                    <p className="text-lg font-bold">{CONFIG.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Clock className="size-6 text-brand-highlight" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Erreichbarkeit</p>
                    <p className="text-sm font-bold">{CONFIG.hours.weekdays}</p>
                    <p className="text-sm font-bold">{CONFIG.hours.saturday}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-brand-accent/20 rounded-2xl border border-brand-accent/30">
                <p className="text-brand-highlight font-bold mb-2 flex items-center gap-2">
                  <Award className="size-5" /> IHK geprüfter Schädlingsbekämpfer
                </p>
                <p className="text-sm text-slate-300">
                  Staatlich geprüfter Desinfektor mit Spezialisierung auf Holz- und Bautenschutz.
                </p>
              </div>
            </div>

            <div className="bg-white p-12 lg:w-1/2">
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Ihr Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-0 transition-colors outline-none" placeholder="Max Mustermann" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Telefon</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-0 transition-colors outline-none" placeholder="+49..." />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Schädlingsart</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-0 transition-colors outline-none appearance-none">
                    <option>Bitte wählen...</option>
                    <option>Ratten / Mäuse</option>
                    <option>Wespen / Hornissen</option>
                    <option>Holzschädlinge</option>
                    <option>Schaben / Kakerlaken</option>
                    <option>Ameisen</option>
                    <option>Tauben / Vogelabwehr</option>
                    <option>Wühlmäuse</option>
                    <option>Desinfektion</option>
                    <option>Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Nachricht</label>
                  <textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-0 transition-colors outline-none h-32" placeholder="Beschreiben Sie die Situation..."></textarea>
                </div>
                <button className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg">
                  Anfrage senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center mb-6">
                <span className="text-xl font-bold tracking-tight text-white">{CONFIG.companyNameFull}</span>
              </div>
              <p className="max-w-sm mb-8">
                IHK geprüfter Schädlingsbekämpfer und staatlich geprüfter Desinfektor in {CONFIG.region}. Kompetent, zuverlässig, diskret.
              </p>
              <div className="flex gap-4">
                <a href={`https://wa.me/${CONFIG.whatsapp}`} aria-label="WhatsApp" className="size-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent">
                  <MessageCircle className="size-5" />
                </a>
                <a href={CONFIG.phoneLink} aria-label="Anrufen" className="size-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent">
                  <Phone className="size-5" />
                </a>
                <a href={`mailto:${CONFIG.email}`} aria-label="E-Mail" className="size-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent">
                  <Mail className="size-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Leistungen</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#services" className="hover:text-brand-accent transition-colors">Schädlingsbekämpfung</a></li>
                <li><a href="#services" className="hover:text-brand-accent transition-colors">Holz- & Bautenschutz</a></li>
                <li><a href="#services" className="hover:text-brand-accent transition-colors">Wespen & Hornissen</a></li>
                <li><a href="#services" className="hover:text-brand-accent transition-colors">Desinfektion</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Kontakt</h4>
              <ul className="space-y-4 text-sm">
                <li>{CONFIG.phone}</li>
                <li>{CONFIG.email}</li>
                <li>{CONFIG.address}</li>
                <li>{CONFIG.hours.weekdays}</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2026 {CONFIG.companyLegalName}. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button (Mobile) */}
      <a
        href={`https://wa.me/${CONFIG.whatsapp}`}
        className="fixed bottom-6 right-6 z-50 sm:hidden bg-brand-primary text-white p-4 rounded-full shadow-2xl motion-safe:animate-bounce"
        aria-label="WhatsApp Kontakt"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
