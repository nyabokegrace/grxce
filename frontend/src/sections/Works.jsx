import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import nemoImg from '../assets/nemo.jpeg'
import siwoloImg from '../assets/siwolo.jpg'
import shieldherImg from '../assets/shieldher.jpeg'

gsap.registerPlugin(ScrollTrigger)

const CASE_STUDIES = [
  {
    id: 'nemo',
    title: 'NEMO',
    subtitle: 'IoT Aquaculture Solution & Satellite Telemetry',
    role: 'Frontend Lead',
    context: 'Built during Kijani Space Hackathon',
    tagColor: 'ink-stamp-cyan',
    badge: 'HACKATHON BUILD',
    img: nemoImg,
    imgCaption: 'Fig 02.1 — NEMO Field Sensor & Telemetry Gateway',
    summary:
      'An end-to-end intelligent aquaculture monitoring system addressing severe fish mortality and oxygen depletion in African fresh-water fisheries through integrated hardware sensing and satellite earth observation.',
    bulletPoints: [
      {
        title: 'Hardware tracking using ultrasonic sensors',
        desc: 'Engineered real-time telemetry pipelines connecting custom ultrasonic sensor nodes to monitor water depth variations, pond volume, and subsurface biomass density with sub-second sample rates.'
      },
      {
        title: 'Copernicus satellite imaging integration',
        desc: 'Processed multispectral Sentinel-2 & Sentinel-3 Earth Observation data feeds to dynamically map algae bloom surface proliferation, chlorophyll-a concentration, and high-risk dissolved oxygen depletion zones.'
      },
      {
        title: 'Offline direct-to-SMS emergency alerts',
        desc: 'Developed a resilient cellular GSM failover daemon dispatching immediate priority SMS warning messages to rural fish farmers when water parameters breach critical safety thresholds—zero internet required.'
      }
    ],
    techStack: ['React', 'Leaflet GIS', 'Copernicus Sentinel API', 'ESP32 / Arduino', 'GSM Gateway', 'TailwindCSS'],
    telemetryData: [
      { label: 'Dissolved O₂', val: '6.8 mg/L', status: 'Optimal' },
      { label: 'Ultrasonic Depth', val: '2.42 m', status: 'Stable' },
      { label: 'Algae Bloom Risk', val: '14.2%', status: 'Low (Copernicus)' },
      { label: 'SMS Alert Daemon', val: 'Active', status: 'Cellular Ready' }
    ]
  },
  {
    id: 'siwolo',
    title: 'Siwolo Law Advocates',
    subtitle: 'End-to-End Legal Practice Branding & Client Intake Portal',
    role: 'Brand Strategist, UI/UX Designer, Front-End Developer & Digital Marketer',
    context: 'Commercial Legal Firm Transformation',
    tagColor: 'ink-stamp-coral',
    badge: 'CLIENT TRANSFORMATION',
    img: siwoloImg,
    imgCaption: 'Fig 02.2 — Siwolo Brandmark & Identity Architecture',
    summary:
      'A holistic digital transformation for a premier legal advocacy firm, merging dignified editorial brand identity with an automated client intake engine and streamlined dispute consultation workflows.',
    bulletPoints: [
      {
        title: 'End-to-End Legal Firm Branding',
        desc: 'Spearheaded comprehensive visual brand architecture—from the bespoke monogram logo mark and legal typography scale to corporate stationery and complete digital brand governance guidelines.'
      },
      {
        title: 'Automated Client Consultation Booking Portal',
        desc: 'Architected an intuitive multi-step booking engine featuring conflict-of-interest pre-screening triage, automated retainer form generation, real-time calendar slot syncing, and intake questionnaires.'
      },
      {
        title: 'Streamlined Communication Workflows',
        desc: 'Replaced manual back-and-forth email scheduling with an encrypted, self-serve client intake pipeline that reduced administrative coordination friction and secured legal document transfers.'
      }
    ],
    metrics: [
      { label: 'Inbound Consultations', value: '+180%', detail: 'Increase within first quarter' },
      { label: 'Onboarding Latency', value: '-65%', detail: 'Faster intake to consultation' },
      { label: 'Admin Hours Saved', value: '40+ hrs', detail: 'Per month in manual scheduling' },
      { label: 'Client Satisfaction', value: '99.4%', detail: 'Positive booking experience index' }
    ],
    techStack: ['Brand Strategy', 'UI/UX Design', 'React', 'TailwindCSS', 'Booking API', 'SEO & Marketing']
  },
  {
    id: 'shieldher',
    title: 'ShieldHer',
    subtitle: 'Rapid Response Women Safety & Emergency Beacon Network',
    role: 'UI/UX Designer & Front-End Developer',
    context: 'Social Impact Platform',
    tagColor: 'ink-stamp',
    badge: 'SOCIAL IMPACT',
    img: shieldherImg,
    imgCaption: 'Fig 02.3 — ShieldHer Distress Interface & Safe Havens',
    summary:
      'A discreet, rapid-response web platform engineered to empower women facing unsafe situations through stealth SOS triggers, real-time live location beaconing, and automated community emergency network routing.',
    bulletPoints: [
      {
        title: 'Discreet Panic Trigger UI',
        desc: 'Engineered a disguised camouflage interface that allows high-stress users to activate emergency alerts with a quick gesture, masked behind everyday utility screens.'
      },
      {
        title: 'Geo-Location Beacon Routing',
        desc: 'Real-time GPS coordinate streaming dispatching location links to pre-configured trusted circles and verified local crisis responder units.'
      },
      {
        title: 'Community Verified Safe Spaces',
        desc: 'Crowdsourced, verified safe-haven map indexing open pharmacies, 24-hour service stations, and community sanctuaries.'
      }
    ],
    techStack: ['React', 'Geolocation API', 'WebSockets', 'TailwindCSS', 'Accessibility Standards']
  }
]

export default function Works() {
  const [activeTab, setActiveTab] = useState(0)
  const containerRef = useRef(null)
  const detailRef = useRef(null)
  const project = CASE_STUDIES[activeTab]

  // GSAP animation for tab switching and section entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header on scroll
      gsap.fromTo(
        '.works-header',
        { opacity: 0, y: 30, filter: 'blur(3px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%'
          }
        }
      )

      // Staggered ink-fade on active project details
      if (detailRef.current) {
        gsap.fromTo(
          detailRef.current.querySelectorAll('.animate-ink'),
          { opacity: 0, y: 20, filter: 'blur(2px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out'
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [activeTab])

  return (
    <section id="works" ref={containerRef} className="py-16 md:py-24 relative">
      {/* Background Watermark Sketch Blueprint */}
      <div className="absolute top-1/3 -left-12 pointer-events-none select-none opacity-[0.035] text-8xl md:text-9xl font-headline transform -rotate-90 hidden xl:block">
        CASE STUDIES
      </div>

      {/* Section Header */}
      <div className="works-header mb-10 text-left">
        <div className="flex items-center gap-2 mb-2">
          <span className="ink-stamp ink-stamp-coral">Section 02</span>
          <span className="text-xs font-mono tracking-widest uppercase text-pencil">
            Selected Works & Field Implementations
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline tracking-tight">
          Case Studies & Technical Blueprints
        </h2>
        <p className="text-pencil text-base md:text-lg max-w-2xl font-body mt-2">
          High-fidelity summaries of systems deployed to production—from space hackathon IoT telemetry to full legal firm brand ecosystems.
        </p>
      </div>

      {/* Case Study Tab Selectors (Hand-Drawn Folder Tabs) */}
      <div className="flex flex-wrap gap-3 mb-8 border-b-2 border-charcoal/20 pb-4">
        {CASE_STUDIES.map((item, idx) => {
          const isActive = idx === activeTab
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-[18px_255px_14px_240px/245px_15px_255px_12px] border-2 border-charcoal font-headline text-lg transition-all flex items-center gap-2 relative ${
                isActive
                  ? 'bg-charcoal text-paper shadow-[3px_4px_0px_#FF6B6B] translate-y-[-2px]'
                  : 'bg-paper-light text-charcoal hover:bg-paper-dark hover:translate-y-[-1px]'
              }`}
            >
              <span className="font-mono text-xs opacity-75">0{idx + 1}.</span>
              <span>{item.title}</span>
              {isActive && (
                <span className="w-2 h-2 rounded-full bg-coral inline-block animate-pulse ml-1" />
              )}
            </button>
          )
        })}
      </div>

      {/* Active Case Study Detailed Card */}
      <div
        ref={detailRef}
        className="hand-card p-6 md:p-10 bg-paper-light/95 relative overflow-hidden"
      >
        {/* Washi Tape Pinning the Dossier */}
        <div className="washi-tape washi-tape-top" style={{ width: '120px' }} />

        {/* Top Meta Bar */}
        <div className="animate-ink flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-dashed border-charcoal/20">
          <div className="flex items-center gap-3">
            <span className={`ink-stamp ${project.tagColor}`}>{project.badge}</span>
            <span className="font-mono text-xs uppercase text-pencil tracking-wide">
              {project.context}
            </span>
          </div>

          <div className="bg-paper-dark/80 px-3 py-1.5 rounded-lg border border-charcoal/30 flex items-center gap-2">
            <span className="text-xs font-mono text-pencil">Role:</span>
            <span className="text-sm font-headline text-charcoal">{project.role}</span>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-10 mt-8 items-start">
          {/* Left Column: Technical Narrative & Bullet Points */}
          <div className="lg:col-span-7 space-y-6">
            <div className="animate-ink">
              <h3 className="text-3xl md:text-4xl font-headline tracking-tight text-charcoal mb-2">
                {project.title}
              </h3>
              <div className="text-base md:text-lg font-body text-pencil italic mb-4">
                {project.subtitle}
              </div>
              <p className="text-charcoal/85 text-base md:text-lg font-body leading-relaxed bg-white/50 p-4 rounded-xl border border-charcoal/15">
                {project.summary}
              </p>
            </div>

            {/* Technical Bullet Points */}
            <div className="animate-ink space-y-4 pt-2">
              <h4 className="font-mono text-xs uppercase tracking-widest text-pencil font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-charcoal" />
                Technical Architecture & Highlights
              </h4>

              <div className="space-y-3">
                {project.bulletPoints.map((bp, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/70 border-2 border-charcoal/20 hover:border-charcoal transition-colors relative"
                  >
                    <div className="font-headline text-lg text-charcoal mb-1 flex items-start gap-2">
                      <span className="font-mono text-xs text-coral mt-1">▸</span>
                      <span>{bp.title}</span>
                    </div>
                    <p className="text-sm md:text-base text-charcoal/80 font-body pl-4 leading-relaxed">
                      {bp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics Cards for Siwolo */}
            {project.metrics && (
              <div className="animate-ink pt-4">
                <h4 className="font-mono text-xs uppercase tracking-widest text-pencil font-bold mb-3">
                  Verified Commercial Impact
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white/80 rounded-lg border border-charcoal/30 text-center"
                    >
                      <div className="text-2xl font-headline text-coral font-bold">{m.value}</div>
                      <div className="text-xs font-headline text-charcoal mt-0.5">{m.label}</div>
                      <div className="text-[10px] font-mono text-pencil mt-1">{m.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NEMO Telemetry Live Board Simulation */}
            {project.telemetryData && (
              <div className="animate-ink pt-2">
                <h4 className="font-mono text-xs uppercase tracking-widest text-pencil font-bold mb-3 flex items-center justify-between">
                  <span>Hardware & Satellite Stream (Simulation)</span>
                  <span className="text-[10px] text-green-700 bg-green-100 px-2 py-0.5 rounded-full border border-green-300 font-mono">
                    ● Telemetry Active
                  </span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.telemetryData.map((tel, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-cyan/20 rounded-lg border border-charcoal/20 text-left"
                    >
                      <div className="text-[11px] font-mono text-pencil">{tel.label}</div>
                      <div className="text-lg font-mono font-bold text-charcoal mt-1">{tel.val}</div>
                      <div className="text-[10px] font-mono text-cyan-800 mt-0.5">
                        {tel.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="animate-ink pt-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-pencil uppercase mr-2">Stack:</span>
                {project.techStack.map(t => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono bg-paper-dark border border-charcoal/30 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Technical Schematics */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Visual Frame */}
            <div className="animate-ink relative">
              <div className="washi-tape washi-tape-corner" />
              
              <div className="hand-card p-3 bg-white rotate-[1deg] hover:rotate-0 transition-transform">
                <div className="relative overflow-hidden rounded-[20px_255px_20px_255px/255px_20px_255px_20px] border-2 border-charcoal bg-paper-dark">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-72 sm:h-80 object-cover filter contrast-[1.02]"
                  />
                  <div className="absolute bottom-2 right-2 bg-charcoal/80 text-paper text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-sm">
                    {project.badge}
                  </div>
                </div>

                <div className="mt-3 px-1 flex items-center justify-between text-xs font-mono text-pencil">
                  <span className="font-scribble text-sm font-semibold">{project.imgCaption}</span>
                  <span>CONFIDENTIAL</span>
                </div>
              </div>
            </div>

            {/* Blueprint Sketch Box */}
            <div className="animate-ink p-4 rounded-xl blueprint-grid border-2 border-charcoal/30 relative">
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-charcoal/20">
                <span className="text-[11px] font-mono font-bold uppercase text-charcoal">
                  Blueprint Diagnostic
                </span>
                <span className="text-[10px] font-mono text-pencil">SYS-ARCH-2026</span>
              </div>

              {project.id === 'nemo' ? (
                <div className="text-xs font-mono space-y-1.5 text-charcoal/90">
                  <div className="flex justify-between">
                    <span>Transducer:</span>
                    <span className="font-bold">40kHz Ultrasonic Array</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sat Ingestion:</span>
                    <span className="font-bold">Copernicus API (NDVI/O₂)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Failover Engine:</span>
                    <span className="font-bold">SIM800L Direct SMS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dashboard:</span>
                    <span className="font-bold">React + Leaflet GIS</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-charcoal/20 text-[10px] text-pencil font-scribble text-base">
                    *Field tested in Lake Victoria fresh-water trial ponds.
                  </div>
                </div>
              ) : project.id === 'siwolo' ? (
                <div className="text-xs font-mono space-y-1.5 text-charcoal/90">
                  <div className="flex justify-between">
                    <span>Identity Scope:</span>
                    <span className="font-bold">Monogram + Full Governance</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Scheduling Triage:</span>
                    <span className="font-bold">Conflict Screening Engine</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Retainer Flow:</span>
                    <span className="font-bold">Automated PDF Generation</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform:</span>
                    <span className="font-bold">React + Tailored Booking API</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-charcoal/20 text-[10px] text-pencil font-scribble text-base">
                    *Complete digital branding and practice management modernization.
                  </div>
                </div>
              ) : (
                <div className="text-xs font-mono space-y-1.5 text-charcoal/90">
                  <div className="flex justify-between">
                    <span>Beacon Trigger:</span>
                    <span className="font-bold">Gesture Stealth Dispatch</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Geo Mesh:</span>
                    <span className="font-bold">Live GPS Coordinate Stream</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Responder Hub:</span>
                    <span className="font-bold">Crowdsourced Safe Havens</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-charcoal/20 text-[10px] text-pencil font-scribble text-base">
                    *Designed for rapid, low-friction accessibility under duress.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          INTEGRATED DESIGN QUOTE 2: NEAR NEMO / CODE
          "Design is not just what it looks like and feels like. Design is how it works." – Steve Jobs
         ========================================================= */}
      <div className="mt-14 p-6 relative overflow-hidden blueprint-grid hand-card border-2 border-charcoal shadow-[4px_4px_0px_#1C1C1C]">
        {/* Subtle Watermark Crosshairs */}
        <div className="absolute top-2 left-2 text-[10px] font-mono text-pencil opacity-60">
          DIM: 400x120 | TOL: ±0.05mm | REF: HARDWARE-ETHOS
        </div>

        <div className="max-w-4xl mx-auto py-2 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl text-cyan-600 font-headline select-none">“</span>
            <blockquote className="font-scribble text-2xl md:text-3xl text-charcoal leading-snug">
              Design is not just what it looks like and feels like. Design is how it works.
            </blockquote>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="w-8 h-[2px] bg-charcoal/40" />
            <div className="text-right">
              <div className="font-mono text-xs uppercase tracking-wider text-charcoal font-bold">
                Steve Jobs
              </div>
              <div className="font-mono text-[10px] text-pencil">NEMO · IoT & Systems Ethos</div>
            </div>
            <span className="ink-stamp ink-stamp-cyan text-[9px]">ENGINEERING</span>
          </div>
        </div>
      </div>
    </section>
  )
}
