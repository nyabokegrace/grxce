import React, { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useReducedMotion
} from 'framer-motion'
import graceImg from '../assets/grace.png'
import {
  editorialEase,
  tactileSpring,
  fadeUp,
  staggerContainer,
  staggerChild,
  MaskTextReveal,
  MagneticWrapper
} from '../utils/motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '../components/Icons'

// Tactile Semi-Translucent Scrapbook Masking Tape with Jagged Serrated Ends
function ScrapbookTape({ className = '', style = {} }) {
  return (
    <div
      style={style}
      className={`absolute z-30 pointer-events-none select-none filter drop-shadow-[0_2px_3px_rgba(25,24,23,0.18)] ${className}`}
    >
      <svg
        viewBox="0 0 120 32"
        className="w-full h-full overflow-visible"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,0 L 120,0 L 115,4 L 119,8 L 114,12 L 118,16 L 113,20 L 119,24 L 114,28 L 118,32 L 2,32 L 6,27 L 1,23 L 7,19 L 2,15 L 6,11 L 1,7 L 5,3 Z"
          fill="rgba(244, 236, 218, 0.85)"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth="0.75"
        />
        {/* Subtle translucent tape adhesive grain line */}
        <line
          x1="6"
          y1="4"
          x2="114"
          y2="4"
          stroke="rgba(255, 255, 255, 0.55)"
          strokeWidth="0.75"
          strokeDasharray="4 8"
        />
      </svg>
    </div>
  )
}

export default function Home({ onOpenDossier }) {
  const prefersReduced = useReducedMotion()
  const heroRef = useRef(null)

  // Continuous Scroll-Linked Parallax with useScroll and useTransform
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  // Smooth scroll transformations for portrait card with natural scrapbook slant
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, 90])
  const rotatePortrait = useTransform(scrollYProgress, [0, 1], [-2.5, 2])

  // -------------------------------------------------------------------------
  // INTERACTIVE 3D TILT WITH REALISTIC DYNAMIC DROP SHADOWS FOR PHOTO CARD
  // -------------------------------------------------------------------------
  const cardRef = useRef(null)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)

  // Calibrated spring physics for authentic tactile tilt feel
  const springPointerX = useSpring(pointerX, tactileSpring)
  const springPointerY = useSpring(pointerY, tactileSpring)

  // 3D rotation mapping: subtle tilt based on pointer position
  const rotateX = useTransform(springPointerY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springPointerX, [-0.5, 0.5], [-8, 8])

  // Dynamic soft drop shadow following cursor angle
  const shadowOffsetX = useTransform(springPointerX, [-0.5, 0.5], [-14, 14])
  const shadowOffsetY = useTransform(springPointerY, [-0.5, 0.5], [16, 34])
  const dynamicBoxShadow = useMotionTemplate`${shadowOffsetX}px ${shadowOffsetY}px 40px -8px rgba(25, 24, 23, 0.18)`

  // Specular sheen highlight moving across the photo
  const sheenX = useTransform(springPointerX, [-0.5, 0.5], ['0%', '100%'])
  const sheenY = useTransform(springPointerY, [-0.5, 0.5], ['0%', '100%'])

  const handlePointerMove = (e) => {
    if (prefersReduced || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    pointerX.set(x)
    pointerY.set(y)
  }

  const handlePointerLeave = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section
      ref={heroRef}
      id="home"
      className="pt-28 pb-20 md:pt-40 md:pb-28 relative overflow-hidden"
    >
      {/* Subtle Background Architectural Canvas Grid */}
      <div className="absolute inset-0 architectural-grid opacity-40 pointer-events-none -z-10" />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Column: Editorial Typography & Staggered Kinetic Entrance */}
        <motion.div
          variants={staggerContainer(0.12, 0.15)}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-left space-y-6"
        >
          {/* Status Badge & Dossier Trigger */}
          <motion.div variants={staggerChild} className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-charcoal/20 bg-paper-light/90 text-charcoal font-mono text-xs font-semibold tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>AVAILABLE FOR HIRE // NAIROBI • REMOTE</span>
            </div>

            <button
              onClick={onOpenDossier}
              data-cursor="UNFOLD ✦"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-scrunch-pink/40 hover:bg-scrunch-pink border border-scrunch-pink-dark/60 text-xs font-mono text-charcoal font-semibold transition-all shadow-xs cursor-pointer"
              title="Click to unfold the pink paper dossier"
            >
              <span>[Read Dossier ↗]</span>
            </button>
          </motion.div>

          {/* Oversized Headline with Masked Slide-Up Line Reveal */}
          <div className="pt-2">
            <h1 className="font-headline font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[7.5rem] leading-[0.92] tracking-normal text-charcoal flex flex-wrap gap-x-4">
              <MaskTextReveal delay={0.25}>NYABOKE</MaskTextReveal>
              <MaskTextReveal delay={0.38}>GRACE</MaskTextReveal>
            </h1>
          </div>

          {/* Clean 4-Pillar Positioning Subtitle */}
          <motion.div variants={fadeUp} custom={2}>
            <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-charcoal/80 font-bold flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>Software Developer</span>
              <span className="text-pencil-light">/</span>
              <span>Brand Strategist</span>
              <span className="text-pencil-light">/</span>
              <span>Digital Marketer</span>
              <span className="text-pencil-light">/</span>
              <span>Executive Assistant</span>
            </p>
          </motion.div>

          {/* Editorial Bio */}
          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-base sm:text-lg md:text-xl text-charcoal/85 leading-relaxed font-sans font-normal max-w-xl pt-1"
          >
            I build full-stack web applications, shape distinct brand identities, grow digital audiences,
            and keep fast-moving operations running without friction. From concurrent Go systems to end-to-end
            legal tech and brand architecture, I turn complex ideas into products people actually use.
          </motion.p>

          {/* Action CTAs with Magnetic Hover Pull */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="flex flex-wrap items-center gap-4 pt-3"
          >
            <MagneticWrapper pullStrength={0.25}>
              <motion.a
                href="#works"
                data-cursor="VIEW WORKS ↗"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-charcoal text-paper font-mono text-xs uppercase tracking-wider hover:bg-pencil transition-colors font-bold shadow-md"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </MagneticWrapper>

            <MagneticWrapper pullStrength={0.25}>
              <motion.a
                href="#contact"
                data-cursor="SAY HI ✦"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-charcoal/80 bg-paper-light text-charcoal font-mono text-xs uppercase tracking-wider hover:bg-paper-dark transition-all font-bold"
              >
                <span>Get in Touch ↗</span>
              </motion.a>
            </MagneticWrapper>

            <MagneticWrapper pullStrength={0.25}>
              <motion.a
                href="https://github.com/nyabokegrace"
                target="_blank"
                rel="noreferrer"
                data-cursor="GITHUB ↗"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border-2 border-charcoal/20 bg-paper-light text-charcoal font-mono text-xs uppercase tracking-wider hover:border-charcoal hover:bg-paper-dark transition-all font-bold"
                title="View GitHub Profile @nyabokegrace"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub ↗</span>
              </motion.a>
            </MagneticWrapper>
          </motion.div>
        </motion.div>

        {/* Right Column: Authentic Photograph Taped to a Scrapbook */}
        <motion.div
          style={{ y: yPortrait, rotate: rotatePortrait, perspective: 1200 }}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: editorialEase }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative select-none"
        >
          <div className="relative max-w-[320px] sm:max-w-[370px] w-full pt-4 pr-3">
            <motion.div
              ref={cardRef}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              style={{
                rotateX: prefersReduced ? 0 : rotateX,
                rotateY: prefersReduced ? 0 : rotateY,
                boxShadow: prefersReduced
                  ? '0 18px 38px -8px rgba(25, 24, 23, 0.16)'
                  : dynamicBoxShadow,
                transformStyle: 'preserve-3d'
              }}
              className="relative overflow-visible transition-transform duration-200"
            >
              {/* TAPE 1: Top-Left Diagonal Scrapbook Tape Strip */}
              <ScrapbookTape
                className="-top-3.5 -left-5 sm:-top-4 sm:-left-6 w-28 sm:w-32 h-7 sm:h-8 -rotate-[35deg]"
              />

              {/* TAPE 2: Top-Right Diagonal Scrapbook Tape Strip */}
              <ScrapbookTape
                className="-top-3.5 -right-5 sm:-top-4 sm:-right-6 w-28 sm:w-32 h-7 sm:h-8 rotate-[35deg]"
              />

              {/* TAPE 3: Bottom-Right Diagonal Scrapbook Tape Strip */}
              <ScrapbookTape
                className="-bottom-3 -right-4 sm:-bottom-3.5 sm:-right-5 w-24 sm:w-28 h-6 sm:h-7 -rotate-[35deg]"
              />

              {/* THE PHOTO PRINT: Classic White Scrapbook Matting Border with Bottom Caption */}
              <div
                className="bg-[#FAF8F5] p-3 sm:p-3.5 pb-7 sm:pb-8 rounded-sm shadow-[0_16px_36px_-6px_rgba(25,24,23,0.16),0_4px_12px_-2px_rgba(25,24,23,0.08),0_0_0_1px_rgba(25,24,23,0.06)] relative ring-1 ring-black/[0.05]"
                style={{ transform: 'translateZ(15px)' }}
              >
                {/* Photo Frame (Square Aspect, Crisp Inner Border) */}
                <div className="relative overflow-hidden aspect-square bg-paper-dark rounded-[2px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.12)]">
                  <motion.img
                    src={graceImg}
                    alt="Nyaboke Grace — Software Developer & Brand Strategist"
                    initial={{ scale: 1.01 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: editorialEase }}
                    className="w-full h-full object-cover object-center filter contrast-[1.02]"
                  />

                  {/* Subtle photo gloss sheen highlight */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none opacity-15 bg-gradient-to-tr from-transparent via-white to-transparent"
                    style={{
                      transform: useMotionTemplate`translate(${sheenX}, ${sheenY})`
                    }}
                  />
                </div>

                {/* Scrapbook Handwritten Caption at Bottom Margin */}
                <div className="mt-2.5 sm:mt-3 px-1 flex items-center justify-between select-none">
                  <span className="font-headline font-bold text-xl sm:text-2xl text-charcoal/85 leading-none tracking-wide">
                    Nyaboke Grace
                  </span>
                  <span className="font-mono text-[9px] text-pencil/70 uppercase tracking-widest font-semibold">
                    '26 // NAIROBI
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
