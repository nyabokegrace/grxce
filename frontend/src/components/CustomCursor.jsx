import React, { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Spring physics for smooth magnetic kinetic cursor motion
  const springConfig = { damping: 28, stiffness: 450, mass: 0.4 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    // Detect touch-only devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)

      // Check if hovering over any interactive element or link
      const interactive = e.target.closest('a, button, input, textarea, select, [role="button"], [data-cursor], .cursor-pointer')
      setIsHovered(!!interactive)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [mouseX, mouseY, isVisible])

  if (isTouch || !isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* Magnetic Pink Cursor Halo / Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          width: isHovered ? 36 : 14,
          height: isHovered ? 36 : 14,
          backgroundColor: isHovered ? 'rgba(255, 181, 197, 0.45)' : '#F092A5',
          borderColor: '#F092A5',
          borderWidth: isHovered ? '2px' : '1.5px',
          scale: isHovered ? 1.15 : 1
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 380 }}
        className="rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(240,146,165,0.6)]"
      >
        {/* Inner Pink Core Dot when expanded */}
        {isHovered && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-2 h-2 rounded-full bg-[#F092A5]"
          />
        )}
      </motion.div>
    </div>
  )
}
