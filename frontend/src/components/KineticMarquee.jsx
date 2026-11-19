import React from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue
} from 'framer-motion'

function ParqueeItem({ children, baseVelocity = 0.08 }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })

  // Gentle velocity factor so scroll doesn't make it zip past
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 0.35], {
    clamp: false
  })

  // Wrap calculation to keep a calm, smooth infinite crawl
  useAnimationFrame((t, delta) => {
    // Calm base speed
    let moveBy = baseVelocity * (delta / 16)

    // Gentle scroll boost
    const currentVelocity = velocityFactor.get()
    if (currentVelocity) {
      moveBy += currentVelocity * (delta / 16)
    }

    let newX = baseX.get() - moveBy
    // Wrap around smoothly at -50%
    if (newX <= -50) {
      newX = 0
    }
    baseX.set(newX)
  })

  return (
    <div className="overflow-hidden flex whitespace-nowrap select-none py-3.5">
      <motion.div
        className="flex whitespace-nowrap gap-8 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-charcoal items-center"
        style={{ x: useTransform(baseX, (v) => `${v}%`) }}
      >
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  )
}

export default function KineticMarquee() {
  const phrase = (
    <>
      <span className="hover:text-terracotta transition-colors">SOFTWARE DEVELOPER</span>
      <span className="text-scrunch-pink-dark animate-spin" style={{ animationDuration: '14s' }}>✦</span>
      <span className="hover:text-terracotta transition-colors">BRAND STRATEGIST</span>
      <span className="text-scrunch-pink-dark animate-spin" style={{ animationDuration: '14s' }}>✦</span>
      <span className="hover:text-terracotta transition-colors">DIGITAL MARKETER</span>
      <span className="text-scrunch-pink-dark animate-spin" style={{ animationDuration: '14s' }}>✦</span>
      <span className="hover:text-terracotta transition-colors">EXECUTIVE ASSISTANT</span>
      <span className="text-scrunch-pink-dark animate-spin" style={{ animationDuration: '14s' }}>✦</span>

      {/* Tactile Pink Badge Patch */}
      <span className="px-2.5 py-0.5 rounded-full bg-paper-pink border border-scrunch-pink-dark text-charcoal font-mono text-[9px] uppercase font-bold tracking-wider shadow-sm flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-scrunch-pink-dark animate-ping" />
        <span>KISUMU • NAIROBI • REMOTE</span>
      </span>
      <span className="text-scrunch-pink-dark animate-spin" style={{ animationDuration: '14s' }}>✦</span>
    </>
  )

  return (
    <div
      data-cursor="KINETIC TICKER ✦"
      className="relative w-screen -mx-[calc((100vw-100%)/2)] my-12 border-y-2 border-charcoal bg-paper-dark/85 backdrop-blur-xs shadow-tactile-solid overflow-hidden cursor-grab active:cursor-grabbing"
    >
      {/* Pink Washi Tape Patch Accent on Corner */}
      <div className="absolute top-0 left-8 z-30 washi-tape-pink w-16 h-3.5 -rotate-2 shadow-xs pointer-events-none" />
      <div className="absolute bottom-0 right-12 z-30 washi-tape-pink w-14 h-3.5 rotate-1 shadow-xs pointer-events-none" />

      {/* Subtle Architectural Sprocket Lines */}
      <div className="absolute top-0 inset-x-0 h-1 bg-charcoal/10" />
      <div className="absolute bottom-0 inset-x-0 h-1 bg-charcoal/10" />

      {/* Calm, Gentle Kinetic Marquee Row */}
      <ParqueeItem baseVelocity={0.08}>
        <div className="flex items-center gap-8">
          {phrase}
        </div>
      </ParqueeItem>
    </div>
  )
}
