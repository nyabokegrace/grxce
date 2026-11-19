import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { editorialEase, tactileSpring } from '../utils/motion'
import {
  X,
  FileText,
  Sparkles,
  ArrowUpRight,
  Download,
  Mail,
  Award,
  CheckCircle2,
  Workflow,
  RotateCcw,
  ExternalLink
} from 'lucide-react'
import { GithubIcon } from './Icons'

export default function PinkPaperScrunch({ isOpen, onToggle }) {
  const [isScrunching, setIsScrunching] = useState(false)

  const handleTriggerClick = () => {
    setIsScrunching(true)
    setTimeout(() => {
      setIsScrunching(false)
      onToggle(true)
    }, 450)
  }

  const handleClose = () => {
    setIsScrunching(true)
    setTimeout(() => {
      setIsScrunching(false)
      onToggle(false)
    }, 400)
  }

  return (
    <>
      {/* 1. FLOATING CRUMPLED PINK PAPER STICKY NOTE TRIGGER */}
      <motion.div
        className="fixed bottom-6 right-6 z-40 pointer-events-auto"
        initial={{ scale: 0, opacity: 0, rotate: 12 }}
        animate={{ scale: 1, opacity: 1, rotate: 3 }}
        transition={{ delay: 1, duration: 0.6, ease: editorialEase }}
      >
        <motion.button
          onClick={handleTriggerClick}
          whileHover={{ scale: 1.08, rotate: -2, y: -4 }}
          whileTap={{ scale: 0.85, rotate: 15 }}
          animate={
            isScrunching
              ? {
                  scale: [1, 0.4, 0.2, 0.9],
                  rotate: [3, -45, 90, 0],
                  borderRadius: ['14px', '50%', '50%', '14px']
                }
              : {}
          }
          transition={{ duration: 0.4 }}
          className="relative group p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#FFD1DC] via-[#FFB6C1] to-[#FFAAA6] text-charcoal border-2 border-charcoal shadow-tactile-pink flex items-center gap-3 overflow-hidden cursor-pointer"
          title="Click to scrunch & open full executive dossier"
        >
          {/* Masking tape on pink paper note */}
          <div
            className="masking-tape masking-tape-top"
            style={{ width: '60px', height: '14px', top: '-7px' }}
          />

          {/* Realistic Paper Crease SVG Lines */}
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-charcoal fill-none">
              <path d="M 10 20 L 50 60 L 90 30 M 30 90 L 60 40 L 80 80" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="w-7 h-7 rounded-lg bg-white/70 border border-charcoal/30 flex items-center justify-center font-bold text-charcoal flex-shrink-0 shadow-sm font-mono text-xs">
            ✦
          </div>

          <div className="text-left font-sans">
            <div className="font-headline font-bold text-base sm:text-lg text-charcoal leading-none">
              Scrunch me! ↗
            </div>
            <div className="font-mono text-[9px] uppercase tracking-wider text-charcoal/80 font-bold mt-0.5">
              Open Full Dossier
            </div>
          </div>
        </motion.button>
      </motion.div>

      {/* 2. FULL-PAGE UNFOLDED PINK EDITORIAL DOSSIER (NEW PAGE) */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 md:p-10">
            {/* Backdrop with paper texture */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-charcoal/75 backdrop-blur-md"
            />

            {/* Unfolded Pink Editorial Page */}
            <motion.div
              initial={{
                scale: 0.3,
                rotate: -15,
                opacity: 0,
                borderRadius: '80px'
              }}
              animate={{
                scale: 1,
                rotate: 0,
                opacity: 1,
                borderRadius: '24px'
              }}
              exit={{
                scale: 0.25,
                rotate: 20,
                opacity: 0,
                borderRadius: '80px'
              }}
              transition={tactileSpring}
              className="relative w-full max-w-4xl bg-gradient-to-b from-[#FFF5F7] via-[#FFF0F3] to-[#FCE7EB] border-3 border-charcoal rounded-3xl p-6 sm:p-10 shadow-2xl z-10 my-6 max-h-[92vh] overflow-y-auto text-left"
            >
              {/* Corner Washi Tape Accents */}
              <div className="masking-tape masking-tape-corner" style={{ width: '110px' }} />
              <div className="masking-tape masking-tape-corner-left" style={{ width: '110px' }} />

              {/* Page Top Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b-2 border-charcoal/20 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="ink-badge bg-white text-charcoal border-charcoal/30 font-bold text-[10px]">
                      [CONFIDENTIAL FIELD DOSSIER]
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-pencil font-semibold">
                      Origin: Kisumu • Nairobi
                    </span>
                  </div>

                  <h2 className="font-headline font-bold text-4xl sm:text-5xl text-charcoal leading-tight">
                    Nyaboke Grace — Operator Blueprint
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-wider text-pencil mt-1 font-semibold">
                    Software Developer • Brand Strategist • Digital Marketer • Executive Assistant
                  </p>
                </div>

                {/* Scrunch Back Up Button */}
                <button
                  onClick={handleClose}
                  className="px-4 py-2 rounded-full border-2 border-charcoal bg-white hover:bg-charcoal hover:text-paper font-mono text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all self-start sm:self-auto font-bold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Scrunch & Close ↩</span>
                </button>
              </div>

              {/* Dossier Body Content */}
              <div className="py-6 space-y-8">
                {/* 1. Executive Summary */}
                <div className="p-5 rounded-2xl bg-white/80 border-2 border-charcoal/15 shadow-sm space-y-3">
                  <h3 className="font-headline font-bold text-2xl text-charcoal flex items-center gap-2">
                    <span className="font-mono text-sm text-charcoal font-bold">▸</span>
                    <span>The Unfair Advantage: Multi-Disciplinary Operator</span>
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed">
                    Most companies hire four separate people to handle software engineering, brand identity,
                    social media marketing, and executive operations. I unify these four disciplines into a single,
                    high-velocity execution loop. I write concurrent Go APIs, build kinetic React frontends,
                    craft authoritative Figma brand systems, shoot high-converting short-form video campaigns,
                    and keep fast-moving organizational workflows on schedule.
                  </p>
                </div>

                {/* 2. Key Accomplishments & Verifiable Track Record */}
                <div className="space-y-4">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-charcoal font-bold">
                    Key Engagements & Institutional Milestones
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Item 1 */}
                    <div className="p-4 rounded-xl bg-white/70 border border-charcoal/20 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-charcoal">[NASA SPACE APPS 2026]</span>
                        <span className="text-pencil font-semibold">GLOBAL SPRINT</span>
                      </div>
                      <h4 className="font-headline font-bold text-xl text-charcoal flex items-center justify-between">
                        <span>Aura-Med Deep-Space Health Workstation</span>
                      </h4>
                      <p className="font-sans text-xs text-charcoal/80 leading-relaxed">
                        Co-created with Team Afrinit. Engineered a biometric telemetry workstation integrating
                        an Oraimo Watch 2 Pro via Web Bluetooth with NASA OSDR-379 astronaut physiological datasets.
                      </p>
                      <div className="pt-1 flex flex-wrap gap-2 text-[11px] font-mono">
                        <a
                          href="https://nasa-project-sooty.vercel.app"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Live Demo ↗</span>
                        </a>
                        <a
                          href="https://github.com/nyabokegrace/nasa-project"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-charcoal hover:text-pencil font-bold bg-white px-2 py-0.5 rounded border border-charcoal/20"
                        >
                          <GithubIcon className="w-3 h-3" />
                          <span>GitHub ↗</span>
                        </a>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="p-4 rounded-xl bg-white/70 border border-charcoal/20 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-charcoal">[ZONE01 KISUMU]</span>
                        <span className="text-pencil font-semibold">FLAGSHIP PLATFORM</span>
                      </div>
                      <h4 className="font-headline font-bold text-xl text-charcoal">
                        Frontend Lead Developer (zone01kisumu.ke)
                      </h4>
                      <p className="font-sans text-xs text-charcoal/80 leading-relaxed">
                        Architected the component system, responsive layouts, and interactive project showcase
                        using Next.js, TypeScript, and Tailwind CSS for 5,000+ candidates.
                      </p>
                      <div className="pt-1 flex flex-wrap gap-2 text-[11px] font-mono">
                        <a
                          href="https://zone01kisumu.ke"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>zone01kisumu.ke ↗</span>
                        </a>
                        <a
                          href="https://github.com/Taheeram04/Zone01"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-charcoal hover:text-pencil font-bold bg-white px-2 py-0.5 rounded border border-charcoal/20"
                        >
                          <GithubIcon className="w-3 h-3" />
                          <span>GitHub ↗</span>
                        </a>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="p-4 rounded-xl bg-white/70 border border-charcoal/20 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-charcoal">[LEGAL TECH TRANSFORMATION]</span>
                        <span className="text-pencil font-semibold">COMMERCIAL CLIENT</span>
                      </div>
                      <h4 className="font-headline font-bold text-xl text-charcoal">
                        Siwolo P.O. Law Advocates Digital Backbone
                      </h4>
                      <p className="font-sans text-xs text-charcoal/80 leading-relaxed">
                        Built the firm's client booking portal, litigation management system, brand identity,
                        and short-form social funnels across TikTok & Instagram yielding +180% consultations.
                      </p>
                      <div className="pt-1 flex flex-wrap gap-2 text-[11px] font-mono">
                        <a
                          href="https://siwolo-invoices.onrender.com"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Live Deployment ↗</span>
                        </a>
                        <a
                          href="https://github.com/nyabokegrace/fms-siwolo"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-charcoal hover:text-pencil font-bold bg-white px-2 py-0.5 rounded border border-charcoal/20"
                        >
                          <GithubIcon className="w-3 h-3" />
                          <span>GitHub ↗</span>
                        </a>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="p-4 rounded-xl bg-white/70 border border-charcoal/20 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-charcoal">[CIVIC TECH & POLICY]</span>
                        <span className="text-pencil font-semibold">KENYAN PARLIAMENT</span>
                      </div>
                      <h4 className="font-headline font-bold text-xl text-charcoal">
                        Civic Memorandum on Digital Finance
                      </h4>
                      <p className="font-sans text-xs text-charcoal/80 leading-relaxed">
                        Authored and submitted a formal civic policy memorandum to the Kenyan National Assembly
                        advocating for transparent digital finance regulations and grassroots builder protections.
                      </p>
                      <div className="pt-1 flex flex-wrap gap-2 text-[11px] font-mono">
                        <a
                          href="https://safeguarding-project-8vat.vercel.app"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>ShieldHer Live ↗</span>
                        </a>
                        <a
                          href="https://github.com/nyabokegrace/shieldher"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-charcoal hover:text-pencil font-bold bg-white px-2 py-0.5 rounded border border-charcoal/20"
                        >
                          <GithubIcon className="w-3 h-3" />
                          <span>GitHub ↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Operational Standards & Ready Availability */}
                <div className="p-4 rounded-2xl bg-white/90 border-2 border-charcoal/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="font-headline font-bold text-xl text-charcoal">
                      Available for High-Impact Roles & Consulting
                    </div>
                    <div className="font-sans text-xs text-pencil font-semibold">
                      Full-Stack Web Engineering • Brand Direction • Growth Marketing • Operations
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 self-start sm:self-auto">
                    <a
                      href="https://github.com/nyabokegrace"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-full border-2 border-charcoal bg-white hover:bg-charcoal hover:text-paper font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-all font-bold"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub @nyabokegrace ↗</span>
                    </a>
                    <a
                      href="mailto:nyabokegrace007@gmail.com"
                      className="px-5 py-2.5 rounded-full bg-charcoal text-paper font-mono text-xs uppercase tracking-wider hover:bg-pencil transition-colors flex items-center justify-center gap-2 shadow-xs font-bold"
                    >
                      <span>Send Inquiries ↗</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-charcoal/20 flex items-center justify-between text-xs font-mono text-pencil">
                <span>VERIFIED OPERATOR DOSSIER</span>
                <span className="font-headline text-lg text-charcoal font-bold">
                  Nyaboke Grace • Kisumu & Nairobi
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
