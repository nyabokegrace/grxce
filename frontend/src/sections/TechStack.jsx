import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SKILL_CATEGORIES = [
  {
    category: 'Creative Engineering & Front-End',
    badge: 'INTERACTIVE',
    skills: [
      { name: 'React (Next.js & Vite)', pct: 94, note: 'State management, custom hooks, micro-frontends' },
      { name: 'GSAP & ScrollTrigger', pct: 90, note: 'Scrollytelling, physics easing, tactile motion' },
      { name: 'TailwindCSS & CSS Architecture', pct: 96, note: 'Custom design systems, tactile shaders & textures' },
      { name: 'TypeScript & Modern JS', pct: 92, note: 'Type-safe contracts, async pipelines' }
    ]
  },
  {
    category: 'Systems, Hardware & IoT Integration',
    badge: 'ARCHITECTURE',
    skills: [
      { name: 'Go (Golang)', pct: 82, note: 'Concurrent microservices, API gateways, daemon alert engines' },
      { name: 'IoT Telemetry & Sensors', pct: 84, note: 'Ultrasonic arrays, ESP32 microcontrollers, serial streams' },
      { name: 'Copernicus Earth Observation', pct: 78, note: 'Sentinel satellite data mapping & geospatial GIS' },
      { name: 'Offline-First & SMS Daemons', pct: 88, note: 'GSM modem alerts, zero-bandwidth fallback architectures' }
    ]
  },
  {
    category: 'Brand Strategy & UI/UX Systems',
    badge: 'DESIGN GOVERNANCE',
    skills: [
      { name: 'Brand Identity Strategy', pct: 95, note: 'Market positioning, monogram creation, tone of voice' },
      { name: 'UI/UX & Design Systems', pct: 92, note: 'Design tokens, Figma design components, accessibility' },
      { name: 'Digital Marketing & Conversion', pct: 86, note: 'SEO pipelines, consultation funnels, user research' },
      { name: 'Legal & Enterprise Portals', pct: 89, note: 'Automated intake workflows, scheduling pipelines' }
    ]
  }
]

export default function TechStack() {
  const containerRef = useRef(null)
  const barRefs = useRef([])
  const quoteRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    const ctx = gsap.context(() => {
      // 1. Kinetic headline cycling
      const words = gsap.utils.toArray('#kineticWords span')
      gsap.set(words, { autoAlpha: 0, y: 15 })
      const kw = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%'
        }
      })
      words.forEach((w) => {
        kw.to(w, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' })
          .to(w, { autoAlpha: 0, y: -15, duration: 0.5, delay: 1.2 })
      })

      // 2. Bar fill animations with staggered ink fade
      barRefs.current.forEach((bar) => {
        if (!bar) return
        const targetWidth = bar.getAttribute('data-pct') || '0'
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${targetWidth}%`,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%'
            }
          }
        )
      })

      // 3. Staggered reveal of skill cards
      gsap.fromTo(
        '.tech-category-card',
        { opacity: 0, y: 30, filter: 'blur(3px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: el,
            start: 'top 75%'
          }
        }
      )

      // 4. Parallax watermark quote
      if (quoteRef.current) {
        gsap.fromTo(
          quoteRef.current,
          { x: -20, opacity: 0.2 },
          {
            x: 20,
            opacity: 0.85,
            ease: 'none',
            scrollTrigger: {
              trigger: quoteRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2
            }
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="techstack" ref={containerRef} className="py-16 md:py-24 relative">
      {/* Background Watermark */}
      <div className="absolute top-1/4 -right-8 pointer-events-none select-none opacity-[0.035] text-8xl md:text-9xl font-headline hidden xl:block">
        ENGINEERING
      </div>

      {/* Kinetic Headline Header */}
      <div className="mb-10 text-left">
        <div className="flex items-center gap-2 mb-2">
          <span className="ink-stamp ink-stamp-cyan">Section 04</span>
          <span className="text-xs font-mono tracking-widest uppercase text-pencil">
            Technical Proficiency & Design Disciplines
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div id="kineticWords" className="relative text-4xl sm:text-5xl md:text-6xl font-headline h-14 sm:h-16 overflow-hidden">
              <span className="absolute left-0 text-charcoal">Strategize.</span>
              <span className="absolute left-0 text-cyan-800">Architect.</span>
              <span className="absolute left-0 text-coral">Implement.</span>
              <span className="absolute left-0 text-charcoal">Optimize.</span>
            </div>
            <p className="mt-2 text-pencil text-base md:text-lg font-body max-w-xl">
              From raw hardware signals to meticulous editorial typography—tools chosen for tactile elegance and reliability.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-pencil">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan inline-block border border-charcoal" />
            <span>Calibrated for Production Quality</span>
          </div>
        </div>
      </div>

      {/* =========================================================
          INTEGRATED DESIGN QUOTE 3: NEAR UI/UX
          "Good design is as little design as possible. Less, but better." – Dieter Rams
         ========================================================= */}
      <div
        ref={quoteRef}
        className="my-10 p-5 relative overflow-hidden hand-card border-2 border-charcoal/30 bg-white/70 rounded-xl shadow-[3px_3px_0px_#1C1C1C]"
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl text-charcoal font-headline select-none">“</span>
            <blockquote className="font-scribble text-2xl md:text-3xl text-charcoal leading-snug">
              Good design is as little design as possible. Less, but better.
            </blockquote>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="w-6 h-[1px] bg-pencil/50" />
            <div className="text-right">
              <span className="font-mono text-xs uppercase tracking-wider text-charcoal font-bold block">
                Dieter Rams
              </span>
              <span className="font-mono text-[10px] text-pencil">UI/UX & Design Philosophy</span>
            </div>
            <span className="ink-stamp text-[9px] px-1.5 py-0.5">MINIMALISM</span>
          </div>
        </div>
      </div>

      {/* Skill Categories Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, catIdx) => (
          <div
            key={cat.category}
            className={`tech-category-card hand-card p-6 flex flex-col justify-between ${
              catIdx === 1 ? 'hand-card-alt' : catIdx === 2 ? 'hand-card-wobble' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-charcoal/20">
                <span className="font-mono text-[11px] text-pencil tracking-wider uppercase">
                  Stack 0{catIdx + 1}
                </span>
                <span className="ink-stamp text-[9px] px-1.5 py-0.5">{cat.badge}</span>
              </div>

              <h3 className="text-xl font-headline mb-4 text-charcoal">{cat.category}</h3>

              {/* Skills List */}
              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => {
                  const globalIdx = catIdx * 4 + sIdx
                  return (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between items-baseline text-sm">
                        <span className="font-headline text-charcoal text-base">{skill.name}</span>
                        <span className="font-mono text-xs text-pencil">{skill.pct}%</span>
                      </div>

                      {/* Progress Bar with Charcoal Stroke & Ink Fill */}
                      <div className="w-full bg-paper-dark/80 h-3 rounded-md border border-charcoal/30 overflow-hidden relative">
                        <div
                          ref={(el) => (barRefs.current[globalIdx] = el)}
                          data-pct={skill.pct}
                          className="h-full bg-cyan transition-all duration-300"
                          style={{
                            width: '0%',
                            background: catIdx === 0 ? '#D4F1F9' : catIdx === 1 ? '#FEF08A' : '#FF6B6B'
                          }}
                        />
                      </div>

                      <div className="text-[11px] font-mono text-pencil leading-tight">
                        {skill.note}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-charcoal/15 flex items-center justify-between text-[11px] font-mono text-pencil">
              <span>Discipline #{catIdx + 1}</span>
              <span className="font-scribble text-sm text-charcoal">verified production skill</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
