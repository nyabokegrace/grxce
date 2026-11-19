import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { editorialEase } from '../utils/motion'

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0)
  const [stageIndex, setStageIndex] = useState(0)
  const [isWiping, setIsWiping] = useState(false)
  const timerRef = useRef(null)

  const stages = [
    '01 // INITIALIZING FIELD WORKSPACE & MARGIN RULES',
    '02 // CALIBRATING NASA BIOMETRIC TELEMETRY (OSDR-379)',
    '03 // ARCHITECTING ZONE01 PEER-TO-PEER CODE ENGINES',
    '04 // SYNCHRONIZING SIWOLO LEGAL PRACTICE & GROWTH FUNNELS',
    '05 // INKING EDITORIAL SPECIMENS & PHYSICAL ARTIFACTS',
    '06 // READY — REVEALING NYABOKE GRACE PORTFOLIO'
  ]

  const finishLoading = () => {
    setIsWiping(true)
    setTimeout(() => {
      if (onComplete) onComplete()
      // Smoothly scroll to the hero section
      setTimeout(() => {
        const heroEl = document.getElementById('home')
        if (heroEl) {
          heroEl.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 100)
    }, 850)
  }

  useEffect(() => {
    // 15 seconds loading progression (~15,000 ms)
    const startTime = Date.now()
    const targetDuration = 14500 // 14.5 seconds for counter, then 0.5s snap & wipe

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(100, Math.floor((elapsed / targetDuration) * 100))
      setCount(progress)

      // Update message stage every ~2.5 seconds
      const currentStage = Math.min(stages.length - 1, Math.floor((progress / 100) * stages.length))
      setStageIndex(currentStage)

      if (progress >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          finishLoading()
        }, 300)
      }
    }, 75)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 pointer-events-none select-none overflow-hidden">
      {/* Vertical Curtain Wipe Panels (3 Layered Slats for Editorial Reveal) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isWiping ? '-100%' : 0 }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0 }}
        className="absolute inset-0 bg-charcoal pointer-events-auto flex flex-col justify-between p-6 sm:p-12 text-paper z-20 overflow-hidden"
      >
        {/* Top Preloader Header (Zero Coloured Dots) */}
        <div className="flex items-center justify-between text-xs font-mono text-paper/70 tracking-widest uppercase relative z-10">
          <div className="flex items-center gap-2">
            <span className="font-bold text-paper">[CALIBRATING // 2026 EDITION]</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">KISUMU • NAIROBI • REMOTE</span>
            {/* Skip Intro Button */}
            <button
              onClick={finishLoading}
              className="px-3 py-1 rounded-full border border-paper/30 hover:border-paper hover:bg-paper/10 text-[10px] font-mono uppercase tracking-wider text-paper transition-all font-semibold cursor-pointer"
            >
              Skip Intro ➔
            </button>
          </div>
        </div>

        {/* Center Stage: Animated Handwriting Monogram & Signature */}
        <div className="relative flex flex-col items-center justify-center my-auto text-center space-y-6 py-8 px-4 w-full max-w-4xl mx-auto z-10">
          {/* Subtle Ambient Glow */}
          <div className="absolute w-80 sm:w-[520px] h-64 sm:h-80 rounded-full bg-scrunch-pink-dark/10 blur-3xl pointer-events-none -z-10" />

          {/* Animated SVG Signature Monogram */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg
              viewBox="0 0 160 160"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Dashed Seal Ring */}
              <motion.circle
                cx="80"
                cy="80"
                r="72"
                stroke="rgba(250, 247, 242, 0.3)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />

              {/* Hand-Drawn Monogram 'N' */}
              <motion.path
                d="M 50 115 L 50 48 L 78 112 L 78 48"
                stroke="#FAF7F2"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: editorialEase }}
              />

              {/* Hand-Drawn Monogram 'G' */}
              <motion.path
                d="M 116 64 C 110 50, 88 48, 88 80 C 88 108, 108 112, 116 98 L 116 82 L 102 82"
                stroke="#FAF7F2"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.2, delay: 0.4, ease: editorialEase }}
              />

              {/* Monogram Star Accent */}
              <motion.path
                d="M 80 26 L 82 32 L 88 34 L 82 36 L 80 42 L 78 36 L 72 34 L 78 32 Z"
                fill="#FAF7F2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              />
            </svg>
          </div>

          {/* Headline in authentic Human Handwriting Font (Caveat/Architects Daughter, NO ITALICS) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-2"
          >
            <h1 className="font-headline font-bold text-5xl sm:text-6xl md:text-7xl tracking-wide text-paper">
              Nyaboke Grace
            </h1>
            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-paper/70 font-semibold">
              Software Developer • Brand Strategist • Digital Marketer • Executive Assistant
            </p>
          </motion.div>

          {/* Current Loading Stage Narrative */}
          <div className="h-6 flex items-center justify-center">
            <motion.p
              key={stageIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-[11px] text-paper/90 font-bold tracking-wider"
            >
              {stages[stageIndex]}
            </motion.p>
          </div>
        </div>

        {/* Bottom Loading Counter & Kinetic Progress Track */}
        <div className="space-y-3">
          <div className="flex items-baseline justify-between font-mono">
            <span className="text-xs text-paper/60 uppercase tracking-widest flex items-center gap-2">
              <span>[PROGRESS // WORKSPACE SETUP]</span>
            </span>
            <span className="text-4xl sm:text-5xl font-bold tracking-tighter text-paper">
              {String(count).padStart(2, '0')}%
            </span>
          </div>

          {/* Precision Loading Track (15s duration) */}
          <div className="h-[2px] w-full bg-paper/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-paper"
              style={{ width: `${count}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-paper/50">
            <span>CALIBRATION DURATION: ~15s</span>
            <span>AUTONOMOUS DESCENT TO HERO UPON COMPLETION</span>
          </div>
        </div>
      </motion.div>

      {/* Layer 2: Soft Charcoal Sub-Curtain */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isWiping ? '-100%' : 0 }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.08 }}
        className="absolute inset-0 bg-[#2D2B2A] z-10 pointer-events-none"
      />

      {/* Layer 3: Warm Paper Curtain Slat */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isWiping ? '-100%' : 0 }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.16 }}
        className="absolute inset-0 bg-paper-dark z-[5] pointer-events-none"
      />
    </div>
  )
}
