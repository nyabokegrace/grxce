import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import graceImg from '../assets/grace.png'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const containerRef = useRef(null)
  const photoRef = useRef(null)
  const quoteRef = useRef(null)
  const underlineRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    const ctx = gsap.context(() => {
      // 1. Charcoal Pencil Reveal / Staggered Ink-Fade Timeline
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' }
      })

      tl.fromTo(
        '.hero-kicker',
        { opacity: 0, y: -15, filter: 'blur(3px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6 }
      )
        .fromTo(
          '.hero-word',
          { opacity: 0, y: 35, rotate: (i) => (i % 2 === 0 ? -3 : 3), filter: 'blur(4px)' },
          { opacity: 1, y: 0, rotate: 0, filter: 'blur(0px)', duration: 0.7, stagger: 0.15 },
          '-=0.3'
        )
        .fromTo(
          '.hero-desc',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.2'
        )
        .fromTo(
          '.hero-frame',
          { opacity: 0, scale: 0.94, rotate: -2 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.8, ease: 'back.out(1.4)' },
          '-=0.5'
        )
        .fromTo(
          '.specialty-card',
          { opacity: 0, y: 30, filter: 'blur(3px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6, stagger: 0.12 },
          '-=0.3'
        )
        .add(() => {
          if (underlineRef.current) {
            underlineRef.current.classList.add('drawn')
          }
        }, '-=0.2')

      // 2. Parallax effect on photo wrapper
      if (photoRef.current) {
        gsap.to(photoRef.current, {
          y: 35,
          rotate: 1.5,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2
          }
        })
      }

      // 3. Floating Scrollytelling Quote (Near Brand Strategy) - Parallax
      if (quoteRef.current) {
        gsap.fromTo(
          quoteRef.current,
          { x: -30, opacity: 0.3 },
          {
            x: 30,
            opacity: 0.85,
            ease: 'none',
            scrollTrigger: {
              trigger: quoteRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5
            }
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const specialties = [
    {
      title: 'Brand Strategy',
      badge: 'IDENTITY · NARRATIVE',
      color: 'bg-cyan/40',
      stamp: 'CORE CRAFT',
      desc: 'Defining crystal-clear positioning, bespoke visual identities, and architectural design systems that anchor legal, commercial, and technical ventures.'
    },
    {
      title: 'UI/UX Design',
      badge: 'PROTOTYPING · SYSTEMS',
      color: 'bg-highlighter/30',
      stamp: 'INTERACTIVE',
      desc: 'Forging human-centered, tactile user interfaces rooted in deep user research, accessibility standards, and intuitive micro-interaction flows.'
    },
    {
      title: 'Front-End Development',
      badge: 'REACT · GSAP · TELEMETRY',
      color: 'bg-coral/20',
      stamp: 'PRODUCTION',
      desc: 'Bringing tactile concepts to production life with high-performance React architectures, offline-first resilient sync, and fluid GSAP animation loops.'
    }
  ]

  return (
    <section id="home" ref={containerRef} className="py-12 md:py-20 relative">
      {/* Background Watermark Sketch Motif */}
      <div className="absolute -top-10 right-4 pointer-events-none select-none opacity-[0.04] text-9xl font-headline hidden lg:block">
        SKETCHBOOK 2026
      </div>

      {/* Hero Section Header */}
      <div className="grid md:grid-cols-12 gap-8 items-center">
        {/* Left Text Column */}
        <div className="md:col-span-7 text-left">
          <div className="hero-kicker flex items-center gap-2 mb-3">
            <span className="ink-stamp ink-stamp-coral">Vol. 03</span>
            <span className="text-xs font-mono tracking-widest uppercase text-pencil">
              Field Notes · Nyaboke Grace
            </span>
          </div>

          <h1 className="headline-slab mb-5 tracking-tight text-charcoal">
            <span className="inline-block hero-word mr-3">Strategize.</span>
            <span className="inline-block hero-word mr-3 text-pencil">Design.</span>
            <span className="inline-block hero-word relative">
              <span ref={underlineRef} className="charcoal-underline">
                Develop.
              </span>
            </span>
          </h1>

          <p className="hero-desc text-lg md:text-xl text-charcoal/85 max-w-xl font-body leading-relaxed mb-6">
            I craft tactile digital experiences and resilient software by bridging rigorous brand strategy,
            human-centered product design, and production-ready front-end engineering.
          </p>

          <div className="hero-desc flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#works"
              className="px-5 py-2.5 bg-charcoal text-paper font-headline text-lg rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-[3px_4px_0px_#FF6B6B] hover:translate-y-[-2px] hover:shadow-[4px_6px_0px_#FF6B6B] transition-all"
            >
              Examine Case Studies ↓
            </a>
            <a
              href="#outside-ide"
              className="px-4 py-2 border-2 border-charcoal bg-white/70 font-body text-base rounded-[15px_225px_15px_255px] hover:bg-paper-dark transition-colors flex items-center gap-1.5"
            >
              <span>Outside the IDE</span>
              <span className="text-coral">✦</span>
            </a>
          </div>
        </div>

        {/* Right Photo Column: Asymmetrical Hand-Drawn Frame */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div ref={photoRef} className="hero-frame relative max-w-[280px] sm:max-w-[320px] w-full">
            {/* Washi tape pin */}
            <div className="washi-tape washi-tape-top" style={{ width: '100px' }} />
            
            {/* Charcoal Sketch Frame Container */}
            <div className="hand-card p-3 bg-paper-light rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300">
              <div className="relative overflow-hidden border-2 border-charcoal rounded-[240px_12px_230px_14px/14px_235px_12px_245px] bg-paper-dark">
                <img
                  src={graceImg}
                  alt="Nyaboke Grace"
                  className="w-full h-80 object-cover filter contrast-[1.03] saturate-[0.98]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Hand-scrawled caption */}
              <div className="mt-3 flex items-center justify-between px-1">
                <span className="font-scribble text-base text-pencil font-semibold">
                  Fig 01.0 — Nyaboke Grace
                </span>
                <span className="font-mono text-[10px] uppercase bg-paper-dark border border-charcoal/30 px-2 py-0.5 rounded">
                  Active in Field
                </span>
              </div>
            </div>

            {/* Margin scribble arrow decoration */}
            <div className="absolute -bottom-6 -left-8 hidden sm:flex items-center gap-1 font-scribble text-sm text-pencil rotate-[-6deg]">
              <span>↖ brand & front-end architect</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          INTEGRATED DESIGN QUOTE 1: BRAND STRATEGY
          "Digital design is like painting, except the paint never dries." – Neville Brody
         ========================================================= */}
      <div
        ref={quoteRef}
        className="my-14 py-4 px-6 relative overflow-hidden border-y-2 border-dashed border-charcoal/20 bg-paper-light/60 rounded-xl"
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl text-coral font-headline select-none">“</span>
            <blockquote className="font-scribble text-2xl md:text-3xl text-charcoal/90 leading-tight">
              Digital design is like painting, except the paint never dries.
            </blockquote>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="w-6 h-[1px] bg-pencil/40" />
            <span className="font-mono text-xs uppercase tracking-wider text-pencil font-bold">
              Neville Brody
            </span>
            <span className="ink-stamp ink-stamp-cyan text-[9px] py-0.5 px-1.5 ml-2">Brand Strategy</span>
          </div>
        </div>
      </div>

      {/* Specialties Grid */}
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {specialties.map((spec, i) => (
          <div
            key={spec.title}
            className={`specialty-card hand-card p-6 flex flex-col justify-between ${
              i === 1 ? 'hand-card-alt' : i === 2 ? 'hand-card-wobble' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] text-pencil uppercase tracking-wider">
                  {spec.badge}
                </span>
                <span className="ink-stamp text-[9px] px-1.5 py-0.5">{spec.stamp}</span>
              </div>
              <h2 className="text-2xl font-headline mb-2 text-charcoal">{spec.title}</h2>
              <p className="text-charcoal/80 text-sm md:text-base font-body leading-relaxed">
                {spec.desc}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-charcoal/15 flex items-center justify-between text-xs font-mono text-pencil">
              <span>Spec #{String(i + 1).padStart(2, '0')}</span>
              <span className="w-3 h-3 rounded-full border border-charcoal" style={{ background: i === 0 ? '#D4F1F9' : i === 1 ? '#FEF08A' : '#FF6B6B' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
