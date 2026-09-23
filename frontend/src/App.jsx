import React from 'react'
import Nav from './components/Nav'
import Home from './sections/Home'
import Works from './sections/Works'
import OutsideTheIde from './sections/OutsideTheIde'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Socials from './components/Socials'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-charcoal font-body relative selection:bg-coral selection:text-white">
      {/* Authentic Sketchbook Margin Spine on Desktop */}
      <div className="sketchbook-spine" aria-hidden="true">
        {/* Binder punch holes down the margin */}
        <div className="flex flex-col gap-32 pt-28 items-center -ml-1.5">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="binder-hole" />
          ))}
        </div>
      </div>

      {/* Persistent Navigation */}
      <Nav />

      {/* Main Sketchbook Page Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 relative z-20">
        {/* Section 01: Hero & Brand Strategy Fold */}
        <Home />

        {/* Section 02: Flagship Case Studies (NEMO & Siwolo) */}
        <Works />

        {/* Section 03: Outside the IDE (Music, Cooking, Travel) */}
        <OutsideTheIde />

        {/* Section 04: Technical Stack & UI/UX Craft */}
        <TechStack />

        {/* Section 05: Dispatch / Inquiries */}
        <Contact />
      </main>

      {/* Floating Margin Social Bookmark Tabs */}
      <Socials />

      {/* Sketchbook Colophon / Footer */}
      <footer className="mt-20 border-t-2 border-dashed border-charcoal/20 bg-paper-light/80 py-10 relative z-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="text-lg font-headline text-charcoal">
              Nyaboke Grace
            </div>
            <div className="text-xs font-mono text-pencil mt-0.5">
              Brand Strategist · UI/UX Designer · Front-End Developer
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="ink-stamp text-[9px]">REACT 19</span>
            <span className="ink-stamp text-[9px]">GSAP SCROLLTRIGGER</span>
            <span className="ink-stamp text-[9px]">TAILWIND CSS</span>
            <span className="ink-stamp ink-stamp-coral text-[9px]">CLEANUP LOOPS 100%</span>
          </div>

          <div className="text-xs font-mono text-pencil">
            © 2026 Tactile Paper & Ink Portfolio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
