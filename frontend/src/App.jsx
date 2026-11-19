import React, { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Preloader from './components/Preloader'
import Nav from './components/Nav'
import CustomCursor from './components/CustomCursor'
import KineticMarquee from './components/KineticMarquee'
import Home from './sections/Home'
import Works from './sections/Works'
import TechStack from './sections/TechStack'
import OutsideTheIde from './sections/OutsideTheIde'
import Contact from './sections/Contact'
import Socials from './components/Socials'
import PinkPaperScrunch from './components/PinkPaperScrunch'
import { ArrowUp } from 'lucide-react'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [isDossierOpen, setIsDossierOpen] = useState(false)

  // Global Scrollytelling Scroll Progress Bar (Minimalist Charcoal Ink Rule)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePreloaderComplete = () => {
    setLoading(false)
    setTimeout(() => {
      const hero = document.getElementById('home')
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' })
      }
    }, 150)
  }

  return (
    <div className="min-h-screen bg-paper text-charcoal font-sans relative selection:bg-charcoal/10 selection:text-charcoal overflow-x-hidden">
      {/* Custom Interactive Desktop Pill Cursor */}
      <CustomCursor />

      {/* Top Global Scrollytelling Progress Bar (Sleek Ink Rule) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-charcoal origin-left z-50"
        style={{ scaleX }}
      />

      {/* Bespoke 15-Second Preloader Intro Animatic */}
      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Persistent Navigation */}
      <Nav onOpenDossier={() => setIsDossierOpen(true)} />

      {/* Main Editorial Canvas Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section 01: Hero & Positioning */}
        <Home onOpenDossier={() => setIsDossierOpen(true)} />

        {/* Continuous Kinetic Infinite Marquee Ticker */}
        <KineticMarquee />

        {/* Section 02: Selected Works (Immaculate 2x2 Grid + Deep Dive Drawers) */}
        <Works />

        {/* Section 03: 4-Pillar Roles & Unified Toolkit */}
        <TechStack />

        {/* Section 04: Outside The IDE (Tactile Sticker Artifacts) */}
        <OutsideTheIde />

        {/* Section 05: Contact & Dispatch */}
        <Contact />
      </main>

      {/* Floating Margin Social Bookmark Dock */}
      <Socials />

      {/* Pink Paper Scrunch Interactive Modal / Page Trigger */}
      <PinkPaperScrunch
        isOpen={isDossierOpen}
        onToggle={(val) => setIsDossierOpen(val)}
      />

      {/* Editorial Colophon / Footer */}
      <footer className="mt-24 border-t-2 border-dashed border-charcoal/20 bg-paper-light/90 py-12 relative z-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-charcoal text-paper flex items-center justify-center font-headline font-bold text-2xl">
              NG
            </div>
            <div>
              <div className="font-headline font-bold text-2xl text-charcoal">
                Nyaboke Grace
              </div>
              <div className="text-xs font-mono text-pencil mt-0.5 font-semibold">
                Software Developer • Brand Strategist • Digital Marketer • Executive Assistant
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-mono text-pencil font-semibold">
            <span className="px-2.5 py-1 rounded-full bg-paper-dark border border-charcoal/10">
              KISUMU / NAIROBI
            </span>
            <span className="px-2.5 py-1 rounded-full bg-paper-dark border border-charcoal/10">
              FRAMER MOTION
            </span>
            <span className="px-2.5 py-1 rounded-full bg-paper-dark border border-charcoal/10">
              EDITORIAL CRAFT
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-xs font-mono text-pencil font-semibold">
              © 2026 Nyaboke Grace. All rights reserved.
            </div>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full border-2 border-charcoal/20 bg-paper-light hover:bg-charcoal hover:text-paper flex items-center justify-center transition-colors shadow-sm"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
