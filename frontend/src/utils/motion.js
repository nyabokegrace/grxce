import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

// =========================================================================
// 1. SPRING PRESETS & EDITORIAL EASING
// =========================================================================

export const tactileSpring = {
  type: 'spring',
  stiffness: 260,
  damping: 22,
  mass: 0.9
}

export const gentleSpring = {
  type: 'spring',
  stiffness: 180,
  damping: 20
}

export const bouncySpring = {
  type: 'spring',
  stiffness: 300,
  damping: 18
}

export const editorialEase = [0.22, 1, 0.36, 1]

export const transitionTactile = {
  duration: 0.7,
  ease: editorialEase
}

export const transitionFast = {
  duration: 0.35,
  ease: editorialEase
}

// =========================================================================
// 2. REUSABLE ANIMATION VARIANTS
// =========================================================================

// Fade up animation with editorial easing
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
      ease: editorialEase
    }
  })
}

// Stagger container
export const staggerContainer = (staggerDelay = 0.08, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren
    }
  }
})

// Stagger child
export const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: editorialEase
    }
  }
}

// Masked line reveal variants
export const maskTextRevealVariants = {
  hidden: { y: '115%', opacity: 0 },
  visible: (i = 0) => ({
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: i * 0.12,
      ease: editorialEase
    }
  })
}

// Scale in for cards & device mockups
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      ...tactileSpring,
      delay
    }
  })
}

// SVG path draw animation (0 to 1)
export const drawPath = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay = 0.2) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.15, delay, ease: editorialEase },
      opacity: { duration: 0.2, delay }
    }
  })
}

// Vertical curtain wipe for preloader
export const curtainSlide = {
  initial: { y: 0 },
  exit: (custom = 0) => ({
    y: '-100%',
    transition: {
      duration: 0.85,
      delay: custom * 0.08,
      ease: [0.76, 0, 0.24, 1]
    }
  })
}

// Card hover animation settings
export const cardHoverMotion = {
  whileHover: {
    scale: 1.02,
    y: -4,
    transition: tactileSpring
  },
  whileTap: {
    scale: 0.99,
    y: 0,
    transition: { duration: 0.15 }
  }
}

// Image scale-on-hover inside overflow-hidden frame
export const imageHoverMotion = {
  initial: { scale: 1 },
  whileHover: {
    scale: 1.04,
    transition: {
      duration: 0.5,
      ease: editorialEase
    }
  }
}

// =========================================================================
// 3. REUSABLE KINETIC COMPONENTS (PURE JS WITH REACT.CREATEELEMENT)
// =========================================================================

/**
 * MaskTextReveal
 * Line-by-line overflow-hidden slide-up text reveal inspired by editorial typography.
 */
export function MaskTextReveal({ children, delay = 0, className = '', as = 'span' }) {
  const prefersReduced = useReducedMotion()
  const Component = motion[as] || motion.span

  if (prefersReduced) {
    return React.createElement('span', { className }, children)
  }

  return React.createElement(
    'span',
    { className: `inline-block overflow-hidden align-top ${className}` },
    React.createElement(
      Component,
      {
        initial: { y: '115%', opacity: 0 },
        animate: { y: '0%', opacity: 1 },
        transition: {
          duration: 0.9,
          delay,
          ease: editorialEase
        },
        className: 'inline-block'
      },
      children
    )
  )
}

/**
 * MagneticWrapper
 * Subtle cursor-following pull effect on buttons and badges using useMotionValue + useSpring.
 */
export function MagneticWrapper({
  children,
  pullStrength = 0.35,
  className = '',
  as = 'div',
  ...props
}) {
  const ref = useRef(null)
  const prefersReduced = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring physics for authentic tactile recovery
  const springX = useSpring(x, tactileSpring)
  const springY = useSpring(y, tactileSpring)

  const handleMouseMove = (e) => {
    if (prefersReduced || !ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    const deltaX = (clientX - centerX) * pullStrength
    const deltaY = (clientY - centerY) * pullStrength

    x.set(deltaX)
    y.set(deltaY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const MotionComponent = motion[as] || motion.div

  if (prefersReduced) {
    return React.createElement('div', { className, ...props }, children)
  }

  return React.createElement(
    MotionComponent,
    {
      ref,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      style: { x: springX, y: springY },
      className: `inline-block ${className}`,
      ...props
    },
    children
  )
}
