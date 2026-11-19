import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { editorialEase, tactileSpring } from '../utils/motion'
import { GithubIcon } from './Icons'

export default function Nav({ onOpenDossier }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-4 left-0 right-0 z-40 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Monogram / Brandmark Pill */}
        <motion.a
          href="#home"
          data-cursor="GRACE // 2026"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: editorialEase }}
          className={`flex items-center gap-3 px-3.5 py-2 rounded-full border border-charcoal/15 transition-all duration-300 ${
            scrolled ? 'bg-paper/95 backdrop-blur-md shadow-md' : 'bg-paper-light/85 backdrop-blur-sm'
          } hover:border-charcoal group`}
        >
          <div className="w-8 h-8 rounded-full bg-charcoal text-paper flex items-center justify-center font-headline font-bold text-xl transition-colors">
            NG
          </div>
          <div className="flex flex-col text-left">
            <span className="font-headline font-bold text-2xl leading-none text-charcoal">
              Nyaboke Grace
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-pencil leading-tight font-semibold">
              Developer & Strategist
            </span>
          </div>
        </motion.a>

        {/* Center Desktop Navigation Pill */}
        <motion.nav
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: editorialEase }}
          className={`hidden md:flex items-center gap-1 px-4 py-2 rounded-full border border-charcoal/15 transition-all duration-300 ${
            scrolled ? 'bg-paper/95 backdrop-blur-md shadow-md' : 'bg-paper-light/85 backdrop-blur-sm'
          }`}
        >
          <a
            href="#works"
            data-cursor="VIEW WORKS"
            className="px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-charcoal/80 hover:text-charcoal hover:bg-paper-dark/60 rounded-full transition-all font-semibold"
          >
            Selected Works
          </a>
          <a
            href="#techstack"
            data-cursor="VIEW ROLES"
            className="px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-charcoal/80 hover:text-charcoal hover:bg-paper-dark/60 rounded-full transition-all font-semibold"
          >
            4 Pillars & Toolkit
          </a>
          <a
            href="#outside-ide"
            data-cursor="FIELD DESK"
            className="px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-charcoal/80 hover:text-charcoal hover:bg-paper-dark/60 rounded-full transition-all font-semibold"
          >
            Outside The IDE
          </a>
          <a
            href="#contact"
            data-cursor="DISPATCH"
            className="px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-charcoal/80 hover:text-charcoal hover:bg-paper-dark/60 rounded-full transition-all font-semibold"
          >
            Contact
          </a>

          {/* Dossier quick link */}
          <button
            onClick={onOpenDossier}
            data-cursor="UNFOLD ✦"
            className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider bg-scrunch-pink/50 hover:bg-scrunch-pink text-charcoal rounded-full font-bold transition-all ml-1 cursor-pointer"
          >
            [Dossier ↗]
          </button>
        </motion.nav>

        {/* Right CTA / Availability Status (Zero Coloured Dots) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: editorialEase }}
          className="flex items-center gap-2.5"
        >
          {/* Availability Status Badge in Editorial Monospace */}
          <div className="hidden lg:flex items-center px-3 py-1.5 rounded-full border border-charcoal/20 bg-white/80 backdrop-blur-sm text-[11px] font-mono text-charcoal">
            <span className="font-bold tracking-wider">[STATUS: OPEN FOR HIRE]</span>
          </div>

          {/* Direct GitHub Profile Link */}
          <a
            href="https://github.com/nyabokegrace"
            target="_blank"
            rel="noreferrer"
            data-cursor="GITHUB ↗"
            title="GitHub @nyabokegrace"
            className="w-9 h-9 rounded-full border border-charcoal/20 bg-paper-light hover:bg-paper-dark hover:border-charcoal flex items-center justify-center text-charcoal transition-all shadow-xs"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-charcoal text-paper hover:bg-pencil text-xs font-mono tracking-wider uppercase transition-colors shadow-sm font-bold"
          >
            <span>Get in Touch</span>
            <span className="font-bold">↗</span>
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-full border border-charcoal/20 bg-paper-light flex items-center justify-center text-charcoal focus:outline-none shadow-sm"
            aria-label="Toggle navigation menu"
          >
            <div className="w-4 flex flex-col gap-1 items-end">
              <span className={`block h-[1.5px] bg-charcoal transition-all ${menuOpen ? 'w-4 rotate-45 translate-y-[5.5px]' : 'w-4'}`} />
              <span className={`block h-[1.5px] bg-charcoal transition-all ${menuOpen ? 'opacity-0' : 'w-3'}`} />
              <span className={`block h-[1.5px] bg-charcoal transition-all ${menuOpen ? 'w-4 -rotate-45 -translate-y-[5.5px]' : 'w-2.5'}`} />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: editorialEase }}
            className="md:hidden mt-3 max-w-sm mx-auto bg-paper-light/95 backdrop-blur-xl border-2 border-charcoal/20 rounded-2xl p-5 shadow-editorial pointer-events-auto"
          >
            <div className="flex flex-col gap-2 font-mono text-sm uppercase tracking-wider font-semibold">
              <a
                href="#works"
                onClick={() => setMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-paper-dark/60 text-charcoal border-b border-charcoal/10"
              >
                01. Selected Works
              </a>
              <a
                href="#techstack"
                onClick={() => setMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-paper-dark/60 text-charcoal border-b border-charcoal/10"
              >
                02. 4 Pillars & Toolkit
              </a>
              <a
                href="#outside-ide"
                onClick={() => setMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-paper-dark/60 text-charcoal border-b border-charcoal/10"
              >
                03. Outside The IDE
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-paper-dark/60 text-charcoal border-b border-charcoal/10"
              >
                04. Contact & Inquiries
              </a>
              <button
                onClick={() => {
                  setMenuOpen(false)
                  onOpenDossier()
                }}
                className="py-2.5 px-3 rounded-lg bg-scrunch-pink/60 text-charcoal text-left font-bold"
              >
                05. Open Pink Dossier ✦
              </button>
              <a
                href="https://github.com/nyabokegrace"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-paper-dark/60 text-charcoal border-b border-charcoal/10 flex items-center justify-between font-bold"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </span>
                <span className="text-pencil text-xs">@nyabokegrace ↗</span>
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-charcoal/10 flex items-center justify-between text-xs font-mono text-pencil">
              <span>KISUMU • NAIROBI</span>
              <a
                href="mailto:nyabokegrace007@gmail.com"
                className="text-charcoal hover:underline font-bold"
              >
                Say Hello ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
