import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Socials() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#works',
            start: 'top 80%'
          }
        }
      )

      gsap.utils.toArray('.social-link').forEach((node, i) => {
        gsap.fromTo(
          node,
          { x: -15, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            delay: 0.1 * i,
            duration: 0.4,
            scrollTrigger: {
              trigger: '#works',
              start: 'top 80%'
            }
          }
        )
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <aside
      ref={ref}
      aria-label="Social links & channels"
      className="socials fixed left-3 xl:left-5 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2.5 pointer-events-auto"
    >
      <div className="font-mono text-[9px] uppercase tracking-widest text-pencil transform -rotate-90 origin-bottom-left ml-4 mb-2 select-none opacity-60">
        MARGIN INDEX
      </div>

      <a
        className="social-link hand-card px-3 py-1.5 text-xs font-headline bg-paper-light hover:bg-coral hover:text-white shadow-[2px_2px_0px_#1C1C1C] transition-all hover:translate-x-1"
        href="https://github.com/nyabokegrace"
        target="_blank"
        rel="noreferrer"
      >
        <span>GitHub</span>
      </a>

      <a
        className="social-link hand-card px-3 py-1.5 text-xs font-headline bg-paper-light hover:bg-cyan hover:text-charcoal shadow-[2px_2px_0px_#1C1C1C] transition-all hover:translate-x-1"
        href="https://www.linkedin.com/in/nyabokegrace"
        target="_blank"
        rel="noreferrer"
      >
        <span>LinkedIn</span>
      </a>

      <a
        className="social-link hand-card px-3 py-1.5 text-xs font-headline bg-paper-light hover:bg-yellow-200 hover:text-charcoal shadow-[2px_2px_0px_#1C1C1C] transition-all hover:translate-x-1"
        href="https://twitter.com/nyaboke_grace"
        target="_blank"
        rel="noreferrer"
      >
        <span>Twitter / X</span>
      </a>

      <a
        className="social-link hand-card px-3 py-1.5 text-xs font-headline bg-paper-light hover:bg-coral hover:text-white shadow-[2px_2px_0px_#1C1C1C] transition-all hover:translate-x-1"
        href="mailto:nyabokegrace007@gmail.com"
      >
        <span>Email</span>
      </a>
    </aside>
  )
}
