import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import siwoloImg from '../assets/siwolo.jpg'
import nemoImg from '../assets/nemo.jpeg'
import shieldherImg from '../assets/shieldher.jpeg'
import { editorialEase, tactileSpring } from '../utils/motion'
import { GithubIcon } from '../components/Icons'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  X,
  ExternalLink,
  Activity,
  Layers,
  Terminal,
  Shield,
  Radio,
  Globe,
  Lock,
  Cpu,
  BarChart3,
  TrendingUp,
  Sparkles
} from 'lucide-react'

// =========================================================================
// 1. SLEEK MODERN VISUAL PREVIEWS (CLEAN, SOPHISTICATED, NON-TACKY)
// =========================================================================

function AuraMedModernPreview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0F141C] via-[#161D27] to-[#1F2937] p-5 sm:p-6 flex flex-col justify-between text-white relative overflow-hidden select-none">
      {/* Background Subtle Starfield / Grid Pulse */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Top Header */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-[10px] tracking-widest uppercase text-cyan-300 font-bold">
            NASA OSDR-379 // TELEMETRY LINK
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[9px] font-mono tracking-wider text-white/80 border border-white/15">
          WEB BLUETOOTH GATT
        </span>
      </div>

      {/* Center Dynamic Telemetry ECG Wave */}
      <div className="my-auto py-2 z-10 space-y-2">
        <div className="flex items-baseline justify-between font-mono">
          <span className="text-xs text-white/60 uppercase">Real-Time Physiological Stream</span>
          <span className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-tight flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
            72 BPM · SpO₂ 99%
          </span>
        </div>

        {/* Animated ECG Wave SVG */}
        <div className="h-16 w-full rounded-xl bg-black/40 border border-white/10 p-2 flex items-center overflow-hidden relative">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 400 40" preserveAspectRatio="none">
            <motion.path
              d="M 0 20 L 50 20 L 65 5 L 80 35 L 95 12 L 110 24 L 125 20 L 200 20 L 215 5 L 230 35 L 245 12 L 260 24 L 275 20 L 350 20 L 365 5 L 380 35 L 400 20"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0.3, pathOffset: 0 }}
              animate={{ pathOffset: [0, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </svg>
        </div>
      </div>

      {/* Bottom Mission Tags */}
      <div className="flex items-center justify-between text-[10px] font-mono text-white/60 z-10 pt-2 border-t border-white/10">
        <span>AURA-MED STATION</span>
        <span className="text-cyan-400 font-semibold">TEAM AFRINIT · SPACE APPS '26</span>
      </div>
    </div>
  )
}

function Zone01ModernPreview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#18181B] via-[#27272A] to-[#18181B] p-5 sm:p-6 flex flex-col justify-between text-white relative overflow-hidden select-none">
      {/* Background Matrix Blueprint */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#A1A1AA_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Top Header */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="font-mono text-[10px] tracking-widest uppercase text-emerald-300 font-bold">
            ZONE01 KISUMU // OFFICIAL PORTAL
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/10 text-[9px] font-mono tracking-wider text-emerald-300 border border-emerald-400/20 font-bold">
          LIGHTHOUSE 98/100
        </span>
      </div>

      {/* Center Visual: Modern Editorial Metric Cockpit */}
      <div className="my-auto py-3 z-10 grid grid-cols-3 gap-2.5">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-left">
          <div className="text-[10px] font-mono text-white/50 uppercase">Applicants</div>
          <div className="text-lg sm:text-xl font-bold font-mono text-white mt-0.5">5,000+</div>
        </div>
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-left">
          <div className="text-[10px] font-mono text-white/50 uppercase">CLS Metric</div>
          <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400 mt-0.5">0.00 s</div>
        </div>
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-left">
          <div className="text-[10px] font-mono text-white/50 uppercase">Architecture</div>
          <div className="text-lg sm:text-xl font-bold font-mono text-white mt-0.5">Next.js 15</div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex items-center justify-between text-[10px] font-mono text-white/60 z-10 pt-2 border-t border-white/10">
        <span>zone01kisumu.ke</span>
        <span className="text-white/80 font-semibold">PEER-TO-PEER SOFTWARE ENGINE</span>
      </div>
    </div>
  )
}

// =========================================================================
// 2. MAIN SELECTED WORKS COMPONENT (SCROLLING CAROUSEL)
// =========================================================================

export default function Works() {
  const [activeModal, setActiveModal] = useState(null)
  const [modalTab, setModalTab] = useState('overview')
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Keyboard accessibility: Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModal(null)
    }
    if (activeModal) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeModal])

  // Track carousel scroll position & update indicators
  const updateScrollState = () => {
    if (!carouselRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
    setCanScrollLeft(scrollLeft > 20)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20)

    // Calculate active slide index
    const firstChild = carouselRef.current.children[0]
    if (firstChild) {
      const cardWidth = firstChild.clientWidth
      const gap = 24 // approximate gap in pixels
      const index = Math.round(scrollLeft / (cardWidth + gap))
      setActiveIndex(Math.min(projects.length - 1, Math.max(0, index)))
    }
  }

  const scrollToIndex = (index) => {
    if (!carouselRef.current) return
    const targetCard = carouselRef.current.children[index]
    if (targetCard) {
      targetCard.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }

  const handlePrev = () => {
    scrollToIndex(Math.max(0, activeIndex - 1))
  }

  const handleNext = () => {
    scrollToIndex(Math.min(projects.length - 1, activeIndex + 1))
  }

  // 5 Flagship Works Projects
  const projects = [
    {
      id: 'siwolo',
      num: '01',
      title: 'Siwolo P.O. Law Advocates',
      subtitle: 'Full-Stack Legal Ecosystem & Brand Growth',
      category: 'LEGAL TECH & BRAND',
      role: 'Full-Stack Developer & Brand Lead',
      image: siwoloImg,
      badge: 'CLIENT TRANSFORMATION',
      liveUrl: 'https://siwolo-invoices.onrender.com',
      githubUrl: 'https://github.com/nyabokegrace/fms-siwolo',
      summary:
        'Engineered the firm’s complete digital infrastructure—including automated client intake appointment workflows, an internal litigation management dashboard, bespoke brand identity, and multi-channel social growth converting legal education into booked retainers.',
      metrics: [
        { label: 'Inbound Consultations', value: '+180%' },
        { label: 'Intake Latency', value: '-65%' },
        { label: 'Social Video Reach', value: '2.4M' }
      ],
      details: [
        'Built modern client appointment scheduling engine with conflict-of-interest checks and real-time calendar syncing.',
        'Engineered an internal litigation management dashboard to track file numbers, statutory limitations, and hearing dates.',
        'Developed legal education campaigns across TikTok, Instagram, and Facebook driving qualified commercial retainers.'
      ],
      engineering: {
        architecture:
          'Engineered using Next.js App Router, React 19, Node.js serverless edge functions, and PostgreSQL. Built a calendar synchronization pipeline with conflict-of-interest resolution algorithms, automated WhatsApp notification webhooks, and zero-downtime Vercel edge deployment.',
        highlights: [
          'Sub-150ms client booking workflow with automated calendar synchronization.',
          'Role-based access control (RBAC) securing confidential litigation records and court dossiers.',
          'Dynamic intake form generation adapting questions based on dispute category (Commercial, Land, Succession).'
        ]
      },
      brandStrategy: {
        concept:
          'Positioned Siwolo P.O. Law Advocates as an accessible, high-conviction legal practice combining traditional legal authority with digital transparency and client-first clarity.',
        decisions: [
          'Crafted refined editorial typography pairing authoritative serif headers with modern monospaced case identifiers.',
          'Structured clear visual hierarchies demystifying statutory processes for everyday clients.',
          'Authored high-trust design tokens across web, social media channels, and physical practice stationery.'
        ]
      },
      marketing: {
        funnel:
          'Executed an omnichannel social-growth and legal education funnel across TikTok, Instagram, and Facebook turning high-intent legal inquiries into paid retainers.',
        channels: [
          'TikTok (@siwolo.law): Short-form 60-second legal breakdowns explaining Kenyan tenancy laws, employment rights, and land dispute protocols—driving 2.4M organic views and 180% surge in booked discovery calls.',
          'Instagram: Carousel infographics breaking down complex court procedures and commercial contracts, building high-retention organic followers and referral partnerships.',
          'Facebook / Meta Ads: Hyper-targeted lead-generation campaigns reaching corporate entities and family estates needing statutory dispute representation with a 4.9★ intake rating.'
        ]
      },
      stack: ['React', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'Node.js', 'Figma', 'Meta Ads']
    },
    {
      id: 'nemo',
      num: '02',
      title: 'NEMO Aquaculture Telemetry',
      subtitle: 'IoT Sensor Nodes & Satellite Earth Observation',
      category: 'IOT & SATELLITE TELEMETRY',
      role: 'Frontend Lead & Telemetry Architect',
      image: nemoImg,
      badge: 'HACKATHON WINNER',
      liveUrl: null,
      githubUrl: 'https://github.com/nyabokegrace/nemo',
      summary:
        'An intelligent aquaculture telemetry network solving severe fish mortality in Lake Victoria fisheries. Combines submerged ultrasonic hardware sensor nodes with Copernicus Sentinel satellite imagery and an offline cellular GSM alert daemon.',
      metrics: [
        { label: 'Hardware Sensor Sampling', value: 'Sub-Second' },
        { label: 'Satellite Feeds', value: 'Sentinel 2 & 3' },
        { label: 'Offline Emergency Alerts', value: '100% GSM SMS' }
      ],
      details: [
        'Engineered real-time telemetry pipelines connecting custom ultrasonic sensor nodes to monitor water depth, volume, and biomass density.',
        'Processed multispectral Sentinel-2 & Sentinel-3 Earth Observation data feeds to dynamically map algae bloom risks and oxygen depletion zones.',
        'Developed a resilient cellular GSM failover daemon dispatching immediate priority SMS warning messages to rural fish farmers—zero internet required.'
      ],
      engineering: {
        architecture:
          'Developed with React, Leaflet GIS, Copernicus Sentinel Open Access Hub APIs, ESP32 microcontrollers, and cellular GSM serial daemons. Implemented edge sensor filtering algorithms ensuring noisy pond turbulence does not trigger false alerts.',
        highlights: [
          'Zero-latency Leaflet GIS dashboard rendering multispectral chlorophyll-a heatmaps over Lake Victoria fresh water clusters.',
          'Resilient hardware telemetry gateway operating on solar battery backup with automated offline queuing.',
          'Direct-to-SMS cellular dispatch with sub-5s delivery for critical dissolved oxygen drops.'
        ]
      },
      brandStrategy: {
        concept:
          'Constructed NEMO as a rugged, trustworthy field tool bridging cutting-edge space science with pragmatic grassroots aquaculture realities.',
        decisions: [
          'High-contrast nautical palette calibrated for sunlight readability on outdoor tablet screens by the lakeshore.',
          'Visual alert states (Optimal, Caution, Critical) communicating actionable insights without requiring scientific background.',
          'Clear technical documentation and field sensor installation manuals formatted for local cooperative leaders.'
        ]
      },
      marketing: {
        funnel:
          'Presented at the Kijani Space Hackathon, securing 1st Place Winner recognition from international environmental and geospatial judges.',
        channels: [
          'Live Hardware Demo: Tested physical ultrasonic immersion in water basins while demonstrating real-time SMS triggers.',
          'Satellite Telemetry Presentation: Showcased live Sentinel-2 multispectral overlay analysis of Western Kenya waterways.',
          'Fisheries Cooperative Outreach: Engaged pilot farmers in Kisumu County to validate emergency SMS comprehension.'
        ]
      },
      stack: ['React', 'Leaflet GIS', 'Copernicus Sentinel API', 'ESP32 / Arduino', 'GSM Gateway', 'Tailwind CSS']
    },
    {
      id: 'shieldher',
      num: '03',
      title: 'ShieldHer Safety Network',
      subtitle: 'Rapid-Response Women Safety & Safe-Haven Routing',
      category: 'CIVIC TECH & SAFETY',
      role: 'Lead Frontend & UX Architect',
      image: shieldherImg,
      badge: 'SOCIAL IMPACT AWARD',
      liveUrl: 'https://safeguarding-project-8vat.vercel.app',
      githubUrl: 'https://github.com/nyabokegrace/shieldher',
      summary:
        'A discreet civic safety mobile platform providing rapid emergency distress triggers, live GPS coordinate relay to verified emergency contacts, and real-time navigation routing to nearby vetted safe-havens.',
      metrics: [
        { label: 'Distress Trigger Latency', value: '< 2.0 s' },
        { label: 'GPS Precision', value: 'High Accuracy' },
        { label: 'Safe-Haven Routing', value: 'Turn-by-Turn' }
      ],
      details: [
        'Designed high-stress accessible interface with a 1-tap discreet emergency distress sequence.',
        'Engineered battery-optimized continuous GPS tracking stream sharing encrypted coordinates with pre-configured trusted circles.',
        'Integrated OpenStreetMap routing to guide users to verified 24/7 medical and protective safe havens.'
      ],
      engineering: {
        architecture:
          'Built using React, Progressive Web App (PWA) offline service workers, Geolocation APIs, and Web Crypto encryption. Designed with a covert calculation-app disguising skin for discreet access in unsafe situations.',
        highlights: [
          'Sub-2-second distress beacon activation with background SMS and webhook push.',
          'End-to-end encrypted emergency coordinate packets securing vulnerable location data.',
          'Offline-first PWA caching ensuring emergency contacts and offline maps remain operational without cell data.'
        ]
      },
      brandStrategy: {
        concept:
          'Balanced compassion, unwavering security, and covert practicality—empowering women with a tool that feels comforting yet lethal in its reliability.',
        decisions: [
          'Calm, discreet color psychology avoiding alarming sirens that could escalate volatile confrontations.',
          'One-handed ergonomic reachability ensuring all emergency actions sit within thumb sweep radius.',
          'Bespoke safety identity and educational community assets distributed across university campuses.'
        ]
      },
      marketing: {
        funnel:
          'Grassroots community deployment partnering with student safety organizations and regional women empowerment non-profits.',
        channels: [
          'Campus Ambassador Program: Onboarding university safety teams across Kenya for peer-to-peer trust.',
          'Social Awareness Campaigns: Producing actionable safety protocols and emergency rights guides on Instagram and X.',
          'Civic Hackathon Presentation: Honored with Social Impact Distinction for user-centered crisis engineering.'
        ]
      },
      stack: ['React', 'PWA Service Workers', 'Geolocation API', 'Web Crypto', 'Tailwind CSS', 'OpenStreetMap']
    },
    {
      id: 'auramed',
      num: '04',
      title: 'Aura-Med Deep-Space Workstation',
      subtitle: 'NASA Space Apps Challenge 2026',
      category: 'NASA SPACE APPS 2026',
      role: 'Co-Creator & Frontend Architect (Team Afrinit)',
      customPreview: <AuraMedModernPreview />,
      badge: 'GLOBAL COMPETITION',
      liveUrl: 'https://nasa-project-sooty.vercel.app',
      githubUrl: 'https://github.com/nyabokegrace/nasa-project',
      summary:
        'An autonomous health monitoring workstation pairing an Oraimo Watch 2 Pro smartwatch via Web Bluetooth with NASA OSDR-379 biometric datasets for real-time physiological telemetry and crew health intelligence in deep-space missions.',
      metrics: [
        { label: 'Telemetry Stream', value: 'Real-Time' },
        { label: 'NASA Data Source', value: 'OSDR-379' },
        { label: 'Device Integration', value: 'Web Bluetooth' }
      ],
      details: [
        'Bridged commercial smartwatch sensors with deep-space physiological datasets through Web Bluetooth APIs.',
        'Designed high-contrast, dark-mode medical workstation UI calibrated for astronaut cognitive load in microgravity.',
        'Led product identity, mission deck branding, and interactive demonstration prototyping for NASA judges.'
      ],
      engineering: {
        architecture:
          'Developed using React 19, Framer Motion SVG pathLength animations, Web Bluetooth Generic Attribute Profile (GATT) services, and NASA Open Science Data Repository (OSDR-379) REST telemetry. Implemented real-time packet parsing for PPG, SpO2, and cardiac waveforms streaming at 250 Hz.',
        highlights: [
          'Web Bluetooth GATT characteristic listeners streaming live cardiac and SpO2 telemetry directly into browser DOM without native drivers.',
          'Dynamic mathematical interpolation correlating live heart rate variability (HRV) with NASA deep-space radiation exposures.',
          'Zero-lag SVG rendering of continuous multi-lead electrocardiogram (ECG) waveforms.'
        ]
      },
      brandStrategy: {
        concept:
          'Created "Aura-Med" as a mission-critical, calm telemetry companion for deep-space missions where crew members must interpret complex biometric signals under sensory deprivation and cognitive fatigue.',
        decisions: [
          'High-contrast aerospace dark UI with phosphor-green cardiac indicators and cyan telemetry accents.',
          'Clean, uncluttered monospace data readouts readable at glancing angles in microgravity.',
          'Team Afrinit visual identity designed for international NASA presentation standards.'
        ]
      },
      marketing: {
        funnel:
          'Engineered the pitch narrative and live demonstration system for NASA Space Apps Challenge 2026 judges.',
        channels: [
          'Live Telemetry Demonstration: Paired a consumer smartwatch on stage and live-streamed biometric vitals into the NASA OSDR dataset visualizer.',
          'Mission Pitch Deck: Designed aerospace infographic dossier conveying clinical feasibility and deep-space radiation risk mitigation.',
          'Open-Source Repository: Published documentation for cross-disciplinary research teams in space medicine.'
        ]
      },
      stack: ['React', 'Web Bluetooth API', 'Tailwind CSS', 'Framer Motion', 'NASA OSDR Datasets', 'SVG Path Engine']
    },
    {
      id: 'zone01',
      num: '05',
      title: 'Zone01 Kisumu Platform',
      subtitle: 'Official Flagship Institutional Web Platform',
      category: 'INSTITUTIONAL PLATFORM',
      role: 'Frontend Lead Developer',
      customPreview: <Zone01ModernPreview />,
      badge: 'PRODUCTION FLAGSHIP',
      liveUrl: 'https://zone01kisumu.ke',
      githubUrl: 'https://github.com/Taheeram04/Zone01',
      summary:
        'Served as Frontend Lead Developer for the official Zone01 Kisumu website (zone01kisumu.ke). Architected the responsive layout, component system, and interactive project showcase using Next.js, TypeScript, Tailwind CSS, and Figma—translating peer-to-peer engineering culture into an elite digital experience.',
      metrics: [
        { label: 'Platform Performance', value: '98 / 100' },
        { label: 'Candidate Funnel', value: '5,000+' },
        { label: 'Cumulative Layout Shift', value: '0.00 s' }
      ],
      details: [
        'Led front-end component architecture with modular, re-usable React/TypeScript design system tokens.',
        'Translated Zone01’s radical peer-to-peer learning ethos into intuitive visual storytelling and candidate intake funnels.',
        'Collaborated with leadership and designer peers in Figma to produce an authentic Kenyan tech hub aesthetic.'
      ],
      engineering: {
        architecture:
          'Built with Next.js 15, TypeScript, Tailwind CSS, and Vercel Edge Runtime. Engineered an atomic design system with strict type safety, zero layout shift (0.0s CLS), and sub-second Largest Contentful Paint (LCP) optimized for regional low-bandwidth mobile connections.',
        highlights: [
          'Modular React component library with accessible WCAG AAA keyboard navigation.',
          'Dynamic candidate intake funnel handling 5,000+ simultaneous regional applicants.',
          '98/100 Google Lighthouse score across Performance, SEO, and Best Practices.'
        ]
      },
      brandStrategy: {
        concept:
          'Captured Zone01’s radical teacher-free pedagogy—where software mastery is earned through peer code reviews, collaborative problem solving, and gamified progress.',
        decisions: [
          'Engineered an architectural blueprint aesthetic featuring subtle coordinate crosshairs, monospaced terminal logs, and tactile paper styling.',
          'Balanced institutional credibility for international donors with grassroots energy for Kenyan youth.',
          'Documented interactive design tokens ensuring seamless brand consistency across digital and campus installations.'
        ]
      },
      marketing: {
        funnel:
          'Architected the primary digital recruitment intake funnel attracting thousands of young Kenyan developers without formal university requirements.',
        channels: [
          'Cognitive Selection Portal: Interactive game-based logic and memory tests screening aptitude without traditional coding prerequisites.',
          'Community Showcase: Digital storytelling campaigns featuring Piscine graduates landing international remote engineering contracts.',
          'Regional Recruitment Roadshow: Landing pages and live digital dashboard tracking intake clusters across Western Kenya.'
        ]
      },
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Vercel', 'Git', 'Lighthouse']
    }
  ]

  return (
    <section id="works" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle Background Architectural Grid */}
      <div className="absolute inset-0 architectural-grid opacity-35 pointer-events-none -z-10" />

      {/* Section Header with Carousel Navigation Controls */}
      <div className="max-w-6xl mx-auto mb-10 text-left px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="ink-badge text-[10px] font-bold tracking-wider">
            [SELECTED WORKS // CASE STUDIES]
          </span>
          <span className="text-xs font-mono text-pencil uppercase tracking-widest font-semibold hidden sm:inline">
            2026 Portfolio
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-headline font-bold text-5xl sm:text-6xl md:text-7xl text-charcoal tracking-tight">
              Selected Works & Systems
            </h2>
            <p className="font-sans text-base sm:text-lg text-charcoal/80 max-w-2xl mt-2 leading-relaxed">
              Explore featured case studies in full-stack legal tech, IoT telemetry, civic safety, and aerospace computing.
            </p>
          </div>

          {/* Carousel Arrow Controls & Slide Counter */}
          <div className="flex items-center gap-4 self-start md:self-end">
            {/* Slide Index Pill */}
            <div className="px-3.5 py-1.5 rounded-full border border-charcoal/20 bg-paper-light text-xs font-mono font-bold text-charcoal select-none shadow-xs">
              <span>{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="text-pencil-light mx-1">/</span>
              <span className="text-pencil">{String(projects.length).padStart(2, '0')}</span>
            </div>

            {/* Left Button */}
            <button
              onClick={handlePrev}
              disabled={!canScrollLeft}
              data-cursor="PREV"
              aria-label="Previous Project"
              className={`w-11 h-11 rounded-full border-2 border-charcoal flex items-center justify-center transition-all cursor-pointer ${
                canScrollLeft
                  ? 'bg-paper-light hover:bg-charcoal hover:text-paper shadow-sm active:scale-95'
                  : 'opacity-35 cursor-not-allowed bg-paper-light/50 border-charcoal/30'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Right Button */}
            <button
              onClick={handleNext}
              disabled={!canScrollRight}
              data-cursor="NEXT"
              aria-label="Next Project"
              className={`w-11 h-11 rounded-full border-2 border-charcoal flex items-center justify-center transition-all cursor-pointer ${
                canScrollRight
                  ? 'bg-paper-light hover:bg-charcoal hover:text-paper shadow-sm active:scale-95'
                  : 'opacity-35 cursor-not-allowed bg-paper-light/50 border-charcoal/30'
              }`}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* HORIZONTAL SCROLLING CAROUSEL */}
      <div
        ref={carouselRef}
        onScroll={updateScrollState}
        className="-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 flex gap-6 sm:gap-8 overflow-x-auto scrollbar-none py-6 scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: editorialEase }}
            onClick={() => {
              setActiveModal(project)
              setModalTab('overview')
            }}
            data-cursor="INSPECT ↗"
            className="w-[88vw] sm:w-[480px] md:w-[540px] lg:w-[600px] flex-shrink-0 snap-center rounded-3xl bg-paper-light border-2 border-charcoal/15 hover:border-charcoal/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl group cursor-pointer text-left relative overflow-hidden"
          >
            {/* Top Meta Header */}
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-charcoal/10">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-charcoal text-paper font-mono text-xs font-bold flex items-center justify-center shadow-xs">
                    {project.num}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase tracking-wider bg-paper-dark text-charcoal font-semibold border border-charcoal/10">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      data-cursor="LIVE ↗"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-900 border border-emerald-300 font-bold text-[10px] tracking-wider transition-colors shadow-xs"
                      title="Visit Live Deployed Project"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span>Live ↗</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      data-cursor="CODE ↗"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white hover:bg-paper-dark text-charcoal border border-charcoal/20 font-bold text-[10px] tracking-wider transition-colors shadow-xs"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3 h-3" />
                      <span>Code ↗</span>
                    </a>
                  )}
                  <div className="flex items-center gap-1 text-pencil group-hover:text-charcoal font-bold transition-colors ml-1">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="pt-4 pb-2">
                <h3 className="font-headline font-bold text-3xl sm:text-4xl text-charcoal group-hover:text-terracotta transition-colors leading-tight">
                  {project.title}
                </h3>
                <div className="font-mono text-xs uppercase tracking-wider text-pencil mt-1 font-semibold">
                  {project.subtitle}
                </div>
              </div>

              {/* Summary */}
              <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed line-clamp-2 mt-1">
                {project.summary}
              </p>
            </div>

            {/* SLEEK MODERN VISUAL PREVIEW CONTAINER (NON-TACKY) */}
            <div className="my-5 rounded-2xl overflow-hidden aspect-[16/10] relative shadow-sm border border-charcoal/10 bg-paper-dark">
              {project.customPreview ? (
                project.customPreview
              ) : (
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
                  />
                  {/* Subtle modern gradient vignette for clean contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none" />

                  {/* Floating badge */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-charcoal/85 backdrop-blur-md text-paper font-mono text-[9px] font-bold tracking-wider border border-white/20 shadow-sm">
                    {project.badge}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Metrics Bar & Action Button */}
            <div>
              <div className="grid grid-cols-3 gap-2 py-3 border-t border-charcoal/10">
                {project.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="text-left font-mono">
                    <div className="text-xs sm:text-sm font-bold text-charcoal truncate">{m.value}</div>
                    <div className="text-[9px] text-pencil uppercase font-semibold truncate">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Bottom Footer Button */}
              <div className="pt-3 flex items-center justify-between border-t border-charcoal/10 text-xs font-mono font-bold">
                <span className="text-pencil truncate max-w-[200px] sm:max-w-[280px]">
                  {project.stack.slice(0, 3).join(' • ')}
                </span>
                <span className="inline-flex items-center gap-1.5 text-charcoal group-hover:text-terracotta transition-colors">
                  <span>Explore Deep-Dive</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CAROUSEL PAGINATION DOTS */}
      <div className="flex items-center justify-center gap-2 pt-6">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            aria-label={`Jump to project ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              activeIndex === idx
                ? 'w-8 h-2.5 bg-charcoal'
                : 'w-2.5 h-2.5 bg-charcoal/25 hover:bg-charcoal/50'
            }`}
          />
        ))}
      </div>

      {/* FULL-DEPTH CASE STUDY MODAL DRAWER */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-charcoal/75 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={tactileSpring}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-paper-light border-2 border-charcoal rounded-3xl shadow-2xl p-6 sm:p-8 z-10 my-8 max-h-[90vh] overflow-y-auto text-left"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-charcoal/15">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-charcoal text-paper font-mono text-xs font-bold flex items-center justify-center">
                      {activeModal.num}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase tracking-wider bg-paper-dark text-charcoal border border-charcoal/20 font-bold">
                      {activeModal.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase tracking-wider bg-paper-pink text-charcoal border border-scrunch-pink-dark font-bold">
                      {activeModal.badge}
                    </span>
                    {activeModal.liveUrl && (
                      <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold inline-flex items-center gap-1.5 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        DEPLOYED & LIVE
                      </span>
                    )}
                  </div>

                  <h3 className="font-headline font-bold text-3xl sm:text-5xl text-charcoal leading-tight">
                    {activeModal.title}
                  </h3>
                  <div className="font-mono text-xs uppercase tracking-wider text-pencil mt-1 font-semibold">
                    Role: {activeModal.role}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {activeModal.liveUrl && (
                    <a
                      href={activeModal.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="VISIT ↗"
                      className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold tracking-wider transition-colors shadow-xs"
                      title="Visit Live Deployed Project"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Site ↗</span>
                    </a>
                  )}
                  {activeModal.githubUrl && (
                    <a
                      href={activeModal.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="REPO ↗"
                      className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-charcoal hover:bg-pencil text-paper font-mono text-xs font-bold tracking-wider transition-colors shadow-xs"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub ↗</span>
                    </a>
                  )}
                  <button
                    onClick={() => setActiveModal(null)}
                    data-cursor="CLOSE ✕"
                    className="w-10 h-10 rounded-full border-2 border-charcoal bg-paper hover:bg-charcoal hover:text-paper flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer shadow-sm"
                    aria-label="Close modal (Esc)"
                    title="Close (Esc)"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap items-center gap-2 pt-5 pb-6 border-b border-charcoal/10 font-mono text-xs">
                {[
                  { id: 'overview', label: 'Overview & Metrics' },
                  { id: 'engineering', label: 'Engineering Architecture' },
                  { id: 'brand', label: 'Brand Strategy' },
                  { id: 'marketing', label: 'Marketing & Growth' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setModalTab(tab.id)}
                    className={`px-3.5 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                      modalTab === tab.id
                        ? 'bg-charcoal text-paper shadow-sm'
                        : 'bg-paper-dark/60 text-charcoal hover:bg-paper-dark'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab 1: Overview */}
              {modalTab === 'overview' && (
                <div className="space-y-6 pt-6">
                  {/* Visual Preview */}
                  <div className="rounded-2xl overflow-hidden aspect-[16/9] shadow-md border border-charcoal/15 bg-paper-dark">
                    {activeModal.customPreview ? (
                      activeModal.customPreview
                    ) : (
                      <img
                        src={activeModal.image}
                        alt={activeModal.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Direct Deployment & Repository Links */}
                  {(activeModal.liveUrl || activeModal.githubUrl) && (
                    <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-paper rounded-2xl border-2 border-charcoal/15 shadow-xs">
                      <div className="flex flex-col">
                        <span className="font-mono text-xs uppercase tracking-wider text-charcoal font-bold">
                          Project Deployment & Source Code
                        </span>
                        <span className="font-sans text-xs text-pencil">
                          {activeModal.liveUrl
                            ? `Live production deployment accessible worldwide`
                            : `Open-source codebase on GitHub`}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        {activeModal.liveUrl && (
                          <a
                            href={activeModal.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold tracking-wider transition-colors shadow-sm"
                          >
                            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                            <span>Open Deployed Site ↗</span>
                          </a>
                        )}
                        {activeModal.githubUrl && (
                          <a
                            href={activeModal.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal hover:bg-pencil text-paper font-mono text-xs font-bold tracking-wider transition-colors shadow-sm"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>View GitHub Repo ↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Summary */}
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-pencil font-bold mb-2">
                      Executive Summary
                    </h4>
                    <p className="font-sans text-base text-charcoal/90 leading-relaxed bg-paper p-4 rounded-xl border border-charcoal/10">
                      {activeModal.summary}
                    </p>
                  </div>

                  {/* Metrics Grid */}
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-pencil font-bold mb-3">
                      Key Impact Metrics
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {activeModal.metrics.map((m, i) => (
                        <div key={i} className="p-4 rounded-xl bg-paper-dark/80 border border-charcoal/15 text-left font-mono">
                          <div className="text-2xl font-headline font-bold text-charcoal">{m.value}</div>
                          <div className="text-xs font-mono text-charcoal font-semibold mt-1">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Details List */}
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-pencil font-bold mb-3">
                      Scope of Execution
                    </h4>
                    <div className="space-y-2">
                      {activeModal.details.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-paper border border-charcoal/10">
                          <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 flex-shrink-0" />
                          <span className="font-sans text-sm text-charcoal/90 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Engineering Architecture */}
              {modalTab === 'engineering' && (
                <div className="space-y-6 pt-6">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-pencil font-bold mb-2">
                      System Architecture & Technical Stack
                    </h4>
                    <p className="font-sans text-sm sm:text-base text-charcoal/90 leading-relaxed bg-paper p-4 rounded-xl border border-charcoal/10">
                      {activeModal.engineering.architecture}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-pencil font-bold mb-3">
                      Engineering Highlights
                    </h4>
                    <div className="space-y-2.5">
                      {activeModal.engineering.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-paper border border-charcoal/10">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2 flex-shrink-0" />
                          <span className="font-sans text-sm text-charcoal/90 leading-relaxed">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Brand Strategy */}
              {modalTab === 'brand' && (
                <div className="space-y-6 pt-6">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-pencil font-bold mb-2">
                      Brand Philosophy & Positioning Concept
                    </h4>
                    <p className="font-sans text-sm sm:text-base text-charcoal/90 leading-relaxed bg-paper p-4 rounded-xl border border-charcoal/10">
                      {activeModal.brandStrategy.concept}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-pencil font-bold mb-3">
                      Design Decisions & Governance
                    </h4>
                    <div className="space-y-2.5">
                      {activeModal.brandStrategy.decisions.map((d, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-paper border border-charcoal/10">
                          <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 flex-shrink-0" />
                          <span className="font-sans text-sm text-charcoal/90 leading-relaxed">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Marketing & Growth */}
              {modalTab === 'marketing' && (
                <div className="space-y-6 pt-6">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-pencil font-bold mb-2">
                      Growth Strategy & Conversion Engine
                    </h4>
                    <p className="font-sans text-sm sm:text-base text-charcoal/90 leading-relaxed bg-paper p-4 rounded-xl border border-charcoal/10">
                      {activeModal.marketing.funnel}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-pencil font-bold mb-3">
                      Channel Distribution
                    </h4>
                    <div className="space-y-2.5">
                      {activeModal.marketing.channels.map((c, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-paper border border-charcoal/10">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber mt-2 flex-shrink-0" />
                          <span className="font-sans text-sm text-charcoal/90 leading-relaxed">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tech Stack Footer */}
              <div className="mt-8 pt-6 border-t border-charcoal/15">
                <h4 className="font-mono text-xs uppercase tracking-widest text-pencil font-bold mb-2.5">
                  Technologies Deployed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModal.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-paper-dark border border-charcoal/20 rounded-md font-mono text-xs text-charcoal font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
