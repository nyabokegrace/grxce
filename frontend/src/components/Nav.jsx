import React, { useState } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4 sm:px-6 pointer-events-auto">
      <nav className="relative flex items-center justify-between bg-paper-light/95 backdrop-blur-md hand-card px-5 py-3 shadow-md">
        {/* Washi tape on nav corner */}
        <div className="washi-tape washi-tape-top" style={{ width: '80px', height: '16px' }} />

        {/* Logo / Monogram */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full border-2 border-charcoal flex items-center justify-center font-headline text-lg bg-cyan/60 group-hover:bg-coral/60 transition-colors">
            G
          </span>
          <div className="flex flex-col">
            <span className="text-xl font-headline leading-tight tracking-tight">Nyaboke Grace</span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-pencil -mt-1 hidden sm:block">
              Portfolio & Field Notes
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 font-body text-base">
          <a href="#home" className="hover:text-coral transition-colors py-1 relative group">
            <span>Index</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-charcoal group-hover:w-full transition-all duration-200" />
          </a>
          <a href="#works" className="hover:text-coral transition-colors py-1 relative group">
            <span>Case Studies</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-charcoal group-hover:w-full transition-all duration-200" />
          </a>
          <a href="#outside-ide" className="hover:text-coral transition-colors py-1 relative group">
            <span>Outside the IDE</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-coral group-hover:w-full transition-all duration-200" />
          </a>
          <a href="#techstack" className="hover:text-coral transition-colors py-1 relative group">
            <span>Tech & Craft</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-charcoal group-hover:w-full transition-all duration-200" />
          </a>
          <a href="#contact" className="hover:text-coral transition-colors py-1 relative group">
            <span>Dispatch</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-charcoal group-hover:w-full transition-all duration-200" />
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="#contact"
            className="ink-stamp ink-stamp-coral hover:scale-105 active:scale-95 transition-transform"
          >
            Say Hello ✍️
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded border-2 border-charcoal bg-paper focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2 hand-card p-4 bg-paper-light/95 backdrop-blur-md flex flex-col gap-3 font-body text-lg animate-fadeIn">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="py-1 border-b border-charcoal/15 hover:text-coral"
          >
            Index (Home)
          </a>
          <a
            href="#works"
            onClick={() => setMenuOpen(false)}
            className="py-1 border-b border-charcoal/15 hover:text-coral"
          >
            Case Studies (Nemo & Siwolo)
          </a>
          <a
            href="#outside-ide"
            onClick={() => setMenuOpen(false)}
            className="py-1 border-b border-charcoal/15 hover:text-coral font-medium text-coral"
          >
            Outside the IDE (Music · Cook · Travel)
          </a>
          <a
            href="#techstack"
            onClick={() => setMenuOpen(false)}
            className="py-1 border-b border-charcoal/15 hover:text-coral"
          >
            Tech & Craft
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="py-1 hover:text-coral"
          >
            Dispatch (Contact)
          </a>
        </div>
      )}
    </header>
  )
}
