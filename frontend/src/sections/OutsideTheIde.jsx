import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { tactileSpring, editorialEase } from '../utils/motion'
import {
  Compass,
  Film,
  Mountain,
  Plane,
  Award,
  FileText,
  RotateCcw,
  Sparkles,
  MapPin,
  Ticket,
  Maximize2
} from 'lucide-react'

export default function OutsideTheIde() {
  const constraintsRef = useRef(null)
  const [resetKey, setResetKey] = useState(0)

  // 5 Physical Tactile Graphic Artifacts
  const artifacts = [
    {
      id: 'hiking',
      title: 'Hiking & Elevation',
      tag: 'TRAIL LOG • 01',
      stamp: 'OFF THE GRID',
      rotation: -2,
      type: 'topographic',
      desc: 'Chasing steep trails, high-altitude elevation, and clear perspective off the grid. Moving through high escarpment ridges resets mental bandwidth and fuels sustained focus for deep engineering sprints.',
      meta: 'ELEV: 2,400M+ • RIFT ESCARPMENT'
    },
    {
      id: 'film',
      title: 'Cinema & 35mm Film',
      tag: 'FRAME RATE • 24FPS',
      stamp: 'VISUAL CRAFT',
      rotation: 1.5,
      type: 'film-strip',
      desc: 'A dedicated cinema lover—studying pacing, framing, color grading, and visual storytelling (which directly fuels my motion design work). Finding inspiration in master atmospheric cinematography.',
      meta: 'ASPECT: 2.39:1 • KODAK VISION3'
    },
    {
      id: 'travelling',
      title: 'Travelling & Exploration',
      tag: 'BOARDING PASS • 03',
      stamp: 'EXPEDITION',
      rotation: -1.8,
      type: 'boarding-pass',
      desc: 'Exploring new towns, landscapes, and local stories—collecting fresh visual inspiration along the way. From coastal Swahili architecture in Lamu to the Great Savanna of Maasai Mara.',
      meta: 'KQ 604 • KISUMU ➔ NAIROBI ➔ LAMU'
    },
    {
      id: 'tech-challenge',
      title: 'The Tech Challenge 2026',
      tag: 'EXHIBITOR PASS • 04',
      stamp: 'ZONE01 KISUMU',
      rotation: 2.5,
      type: 'event-badge',
      desc: 'Represented Zone01 Kisumu at the exhibition table (Theme: Surviving the Storm), engaging students and builders around structural resilience, peer-to-peer pedagogy, and applied engineering.',
      meta: 'SURVIVING THE STORM • EXPO 2026'
    },
    {
      id: 'civic-tech',
      title: 'Builder Rooms & Civic Tech',
      tag: 'MEMORANDUM & FIELD NOTE',
      stamp: 'KENYAN PARLIAMENT',
      rotation: -2.2,
      type: 'field-note',
      desc: 'From NASA Space Apps and creative-sector sprints at Baraza Media Lab to the Built in Africa Garage Conference and submitting a civic memorandum to the Kenyan Parliament on digital finance policy.',
      meta: 'POLICY • HACKATHONS • PARLIAMENT'
    }
  ]

  return (
    <section id="outside-ide" className="py-20 md:py-28 relative">
      {/* Background Architectural Grid (Rows & Columns) */}
      <div className="absolute inset-0 architectural-grid opacity-65 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-left relative">
          {/* Tactile Pink Washi Tape Accent */}
          <div className="washi-tape-pink absolute -top-4 left-44 w-16 h-4 rotate-[-2deg] pointer-events-none" />

          <div className="flex items-center gap-2 mb-2.5">
            <span className="ink-badge text-[10px] bg-paper-pink border border-scrunch-pink-dark font-bold text-charcoal">
              MARGINALIA & FIELD ARTIFACTS
            </span>
            <span className="text-xs font-mono text-pencil uppercase tracking-widest font-semibold">
              Tactile Pinboard • Physical Analog Graphics
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-headline font-bold text-5xl sm:text-6xl md:text-7xl text-charcoal tracking-tight">
                Outside The IDE
              </h2>
              <p className="font-sans text-base sm:text-lg text-charcoal/80 max-w-2xl mt-2 leading-relaxed">
                Physical artifacts and tactile graphic cards representing the cinema studies,
                civic engagements, and outdoor expeditions that fuel my creative engineering. Toss and drag them across the pinboard.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-headline font-bold text-2xl text-pencil hidden sm:inline-block">
                Drag and toss anywhere ↗
              </span>
              <button
                onClick={() => setResetKey((k) => k + 1)}
                data-cursor="RESET ✦"
                className="px-4 py-2 rounded-full border-2 border-charcoal bg-paper-light hover:bg-paper-dark text-xs font-mono text-charcoal flex items-center gap-1.5 shadow-tactile-solid transition-all font-bold cursor-pointer"
                title="Reset artifact positions"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Pinboard</span>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Tactile Pinboard Canvas */}
        <div
          ref={constraintsRef}
          key={resetKey}
          className="relative min-h-[820px] lg:min-h-[720px] p-4 sm:p-8 rounded-3xl bg-paper-dark/40 border-3 border-dashed border-charcoal/25 overflow-hidden shadow-inner select-none"
        >
          {/* Subtle Watermark Stamp */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-charcoal/[0.04] font-headline font-bold text-8xl sm:text-9xl pointer-events-none select-none text-center">
            FIELD DESK // 2026
          </div>

          {/* Draggable Artifacts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {artifacts.map((card, idx) => (
              <motion.div
                key={card.id}
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                whileDrag={{ scale: 1.05, rotate: 0, zIndex: 60, cursor: 'grabbing' }}
                whileHover={{ scale: 1.02, y: -4 }}
                initial={{ opacity: 0, y: 30, rotate: card.rotation }}
                whileInView={{ opacity: 1, y: 0, rotate: card.rotation }}
                viewport={{ once: true }}
                transition={tactileSpring}
                data-cursor="DRAG ME ✦"
                className={`rounded-2xl border-2 border-charcoal shadow-tactile-solid hover:shadow-tactile-solid-lg cursor-grab active:cursor-grabbing text-left relative flex flex-col justify-between overflow-hidden bg-white p-5 ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ touchAction: 'none' }}
              >
                {/* Tactile Pink Washi Tape Pinboard Accent */}
                <div
                  className={`washi-tape-pink absolute -top-1.5 ${
                    idx % 2 === 0 ? 'right-6 rotate-[-2deg]' : 'left-6 rotate-[2deg]'
                  } w-14 h-3.5 z-30 pointer-events-none`}
                />

                {/* 1. CINEMA & 35MM FILM STRIP ARTIFACT */}
                {card.type === 'film-strip' && (
                  <>
                    {/* Top 35mm Perforated Sprocket Band */}
                    <div className="absolute top-0 inset-x-0 h-4 bg-charcoal flex items-center justify-between px-2 overflow-hidden z-20">
                      {[...Array(14)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-paper rounded-[1px] shadow-inner" />
                      ))}
                    </div>

                    {/* Film Visual Header */}
                    <div className="mt-3 relative rounded-lg overflow-hidden border border-charcoal/20 bg-black aspect-[2.39/1] my-2 flex items-center justify-center text-paper">
                      {/* Cinematic Color-Graded Warm Amber/Teal Horizon */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/60 via-transparent to-cyan-600/40 mix-blend-screen" />
                      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:6px_6px] opacity-10" />

                      <div className="relative z-10 text-center font-mono">
                        <div className="text-[8px] uppercase tracking-widest text-pencil-light">
                          SCENE: 04 • TAKE: 02 • 24 FPS
                        </div>
                        <div className="font-headline font-bold text-lg text-paper mt-0.5">
                          ATMOSPHERIC PACING
                        </div>
                        <div className="text-[7px] text-paper/70 font-mono">KODAK VISION3 500T // 35MM</div>
                      </div>

                      <div className="absolute bottom-1 right-2 text-[7px] font-mono text-terracotta font-bold">
                        TC 01:24:18:04
                      </div>
                    </div>

                    {/* Bottom 35mm Perforated Sprocket Band */}
                    <div className="absolute bottom-0 inset-x-0 h-4 bg-charcoal flex items-center justify-between px-2 overflow-hidden z-20">
                      {[...Array(14)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-paper rounded-[1px] shadow-inner" />
                      ))}
                    </div>
                  </>
                )}

                {/* 2. TOPOGRAPHIC HIKING & ELEVATION CONTOUR MAP ARTIFACT */}
                {card.type === 'topographic' && (
                  <div className="relative rounded-xl overflow-hidden border-2 border-dashed border-emerald-800/30 bg-emerald-950/5 p-3 my-1">
                    {/* Multi-Ring Topographic Elevation Contour Map SVG */}
                    <div className="h-28 w-full relative flex items-center justify-center">
                      <svg viewBox="0 0 320 140" className="w-full h-full stroke-emerald-900 fill-none opacity-40">
                        <ellipse cx="160" cy="70" rx="140" ry="60" strokeWidth="1.2" strokeDasharray="3 2" />
                        <ellipse cx="160" cy="70" rx="105" ry="45" strokeWidth="1.5" />
                        <ellipse cx="160" cy="70" rx="70" ry="30" strokeWidth="1.8" />
                        <ellipse cx="160" cy="70" rx="35" ry="15" strokeWidth="2.2" />
                      </svg>

                      {/* Pulsing Summit Beacon Pin */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="relative flex items-center justify-center">
                          <span className="w-3 h-3 rounded-full bg-emerald-600 animate-ping absolute" />
                          <span className="w-3 h-3 rounded-full bg-emerald-700 border-2 border-white shadow-md relative z-10" />
                        </div>
                        <span className="font-mono text-[7px] font-bold text-emerald-900 mt-1 bg-white/90 px-1.5 py-0.2 rounded border border-emerald-300">
                          SUMMIT: 2,400M // ELEVATION & CLARITY
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. VINTAGE-MODERN AIRLINE BOARDING PASS & PASSPORT STAMP */}
                {card.type === 'boarding-pass' && (
                  <div className="relative rounded-xl border border-charcoal/20 bg-paper-light p-2.5 my-1 font-mono">
                    {/* Tear-Off Perforation Notch */}
                    <div className="flex items-center justify-between pb-1.5 border-b-2 border-dashed border-charcoal/20 text-[8px] text-pencil">
                      <span className="font-bold text-charcoal">KENYA AIRWAYS // EXPEDITION</span>
                      <span className="text-terracotta font-bold">BOARDING PASS</span>
                    </div>

                    <div className="py-2 flex items-center justify-between text-left">
                      <div>
                        <div className="text-[7px] text-pencil uppercase">ORIGIN</div>
                        <div className="font-headline font-bold text-xl text-charcoal leading-none">KIS</div>
                        <div className="text-[7px] text-pencil">KISUMU</div>
                      </div>
                      <div className="text-center font-mono text-[9px] text-terracotta font-bold">
                        ✈ FLIGHT KQ 604 ➔
                      </div>
                      <div className="text-right">
                        <div className="text-[7px] text-pencil uppercase">DESTINATION</div>
                        <div className="font-headline font-bold text-xl text-charcoal leading-none">NBO / LAMU</div>
                        <div className="text-[7px] text-pencil">COASTAL SWAHILI</div>
                      </div>
                    </div>

                    {/* Barcode & Passport Stamp */}
                    <div className="flex items-center justify-between pt-1 border-t border-charcoal/10">
                      {/* Barcode Lines */}
                      <div className="flex gap-[2px] h-4 items-center">
                        {[4, 2, 6, 3, 1, 5, 2, 4, 3, 6, 2, 5, 3].map((w, bi) => (
                          <div key={bi} style={{ width: `${w}px` }} className="h-full bg-charcoal" />
                        ))}
                      </div>
                      {/* Circular Ink Visa Stamp */}
                      <div className="px-2 py-0.5 rounded border border-terracotta/70 text-terracotta text-[7px] font-bold rotate-6 bg-white/80">
                        KENYA ENTRY // GRANTED
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. THE TECH CHALLENGE 2026 EXHIBITOR BADGE */}
                {card.type === 'event-badge' && (
                  <div className="relative rounded-xl border-2 border-charcoal bg-white p-2.5 my-1 text-center font-mono overflow-hidden">
                    {/* Metal Badge Clip Slot */}
                    <div className="w-10 h-2 bg-charcoal rounded-full mx-auto mb-1.5 shadow-inner" />

                    <div className="text-[8px] text-pencil font-bold">THE TECH CHALLENGE 2026</div>
                    <div className="font-headline font-bold text-xl text-charcoal leading-tight mt-0.5">
                      ZONE01 KISUMU
                    </div>
                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-terracotta text-paper text-[8px] font-bold uppercase tracking-wider my-1 shadow-sm">
                      EXHIBITOR // LEAD MENTOR
                    </div>
                    <div className="text-[7px] text-pencil font-semibold">
                      THEME: SURVIVING THE STORM // RESILIENCE
                    </div>

                    {/* Holographic Security Sheen Bar */}
                    <div className="mt-2 h-1.5 w-full bg-gradient-to-r from-cyan-400 via-rose-400 to-amber-300 rounded-full" />
                  </div>
                )}

                {/* 5. CIVIC TECH & PARLIAMENTARY MEMORANDUM INDEX CARD */}
                {card.type === 'field-note' && (
                  <div className="relative rounded-xl border border-charcoal/20 bg-paper-rose p-3 my-1 font-mono text-left overflow-hidden">
                    {/* Translucent Masking Tape Strips Across Corners */}
                    <div className="masking-tape masking-tape-corner-left z-20" />
                    <div className="masking-tape masking-tape-corner z-20" />

                    <div className="flex items-center justify-between pb-1 border-b border-charcoal/15 text-[8px] text-pencil">
                      <span className="font-bold text-charcoal">PARLIAMENTARY MEMORANDUM</span>
                      <span className="text-terracotta font-bold">FILED // 2026</span>
                    </div>

                    <div className="py-1.5 space-y-1">
                      <div className="text-[8px] text-charcoal font-semibold">
                        Subject: Digital Finance Policy & Youth Dev Infrastructure
                      </div>
                      <div className="text-[7px] text-pencil leading-relaxed font-sans">
                        Formal civic memorandum delivered to the Kenyan Parliament advocating for decentralized technical education & regional hub funding.
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-charcoal/15 text-[7px] text-pencil">
                      <span>BARAZA MEDIA LAB // SPRINT</span>
                      <span className="font-bold text-charcoal">AUTHENTICATED</span>
                    </div>
                  </div>
                )}

                {/* Card Title & Text Header */}
                <div className="pt-2">
                  <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-charcoal/10">
                    <span className="font-mono text-[9px] uppercase font-bold text-pencil">
                      {card.tag}
                    </span>
                    <span className="ink-badge text-[8px] py-0.5 px-2 bg-paper-light font-bold">
                      {card.stamp}
                    </span>
                  </div>

                  <h3 className="font-headline font-bold text-2xl sm:text-3xl text-charcoal leading-snug">
                    {card.title}
                  </h3>

                  <p className="font-sans text-xs text-charcoal/80 mt-1 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Card Footer Meta */}
                <div className="mt-4 pt-2.5 border-t border-charcoal/10 flex items-center justify-between text-[9px] font-mono text-pencil">
                  <span className="truncate font-semibold">{card.meta}</span>
                  <span className="font-headline font-bold text-sm text-terracotta flex items-center gap-1">
                    <span>● Pinboard</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Canvas Bottom Colophon */}
          <div className="mt-8 pt-4 border-t border-charcoal/15 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-pencil gap-2">
            <span>KENYA FIELD DESK • DRIFT & DISCOVERY</span>
            <span className="font-headline font-bold text-xl text-charcoal">
              Every adventure off-screen refines the clarity of what I build on-screen.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
