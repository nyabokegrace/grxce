import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function OutsideTheIde() {
  const containerRef = useRef(null)
  const travelPathRef = useRef(null)
  const compassRef = useRef(null)

  // Music Player State (Amapiano & Soul)
  const [isPlaying, setIsPlaying] = useState(true)
  const [activeTrack, setActiveTrack] = useState(0)
  const [volume, setVolume] = useState(82)

  const tracks = [
    { title: 'Private School Amapiano & Deep Log Drums', bpm: '114 BPM', genre: 'Amapiano' },
    { title: 'Neo-Soul & Late Night Warm Vinyl Grooves', bpm: '84 BPM', genre: 'Soul Music' },
    { title: 'Soothing Vocal Jazz & Acoustic Soul Melodies', bpm: '78 BPM', genre: 'Soul & Jazz' }
  ]

  // Cooking & Culinary Arts State
  const [activeDish, setActiveDish] = useState(0)

  const culinaryDishes = [
    {
      name: 'Swahili Coconut Curry',
      icon: '🥥',
      category: 'Coastal Aromatics',
      ingredients: 'Cardamom, turmeric, rich coconut milk, fresh ginger & chili',
      taste: 'Velvety, aromatic, warming coastal comfort'
    },
    {
      name: 'Cast Iron Sizzles',
      icon: '🍳',
      category: 'Rustic Skillet',
      ingredients: 'Browned butter, crushed garlic, rosemary sprigs & searing heat',
      taste: 'Caramelized crust, rich savory umami'
    },
    {
      name: 'Aromatic Pilau & Biryani',
      icon: '🍚',
      category: 'Spice Alchemy',
      ingredients: 'Whole cumin, cloves, toasted cinnamon bark & golden onions',
      taste: 'Festive, fragrant, rich celebratory feast'
    },
    {
      name: 'Artisan Oven Baking',
      icon: '🥐',
      category: 'Pastry & Bakes',
      ingredients: 'Golden flaky pastry, slow-proofed dough & sweet glazes',
      taste: 'Crispy edges, warm cloud-like center'
    }
  ]

  // Travel Destinations (Diani Kongo River, Museums, Art Galleries, Nakuru, Maasai Mara, Lamu, Kisumu)
  const [activeDestination, setActiveDestination] = useState(0)

  const destinations = [
    {
      name: 'Diani Kongo River',
      icon: '🛶',
      region: 'South Coast',
      vibe: 'Golden hour canoe rides where freshwater meets the Indian Ocean waves',
      highlight: 'Sunset sandbanks & calm mangrove channels'
    },
    {
      name: 'Lamu Old Town',
      icon: '⛵',
      region: 'Coast Archipelago',
      vibe: 'Carved wooden doorways, traditional dhow sailing & quiet coral stone lanes',
      highlight: 'Ancient Swahili tranquility & ocean breeze'
    },
    {
      name: 'Maasai Mara',
      icon: '🦁',
      region: 'The Great Savanna',
      vibe: 'Endless golden horizons, dawn safari drives & dramatic acacia silhouettes',
      highlight: 'Raw untamed wilderness & vast open skies'
    },
    {
      name: 'Museums & Art Galleries',
      icon: '🎨',
      region: 'Cultural Spaces',
      vibe: 'Wandering through contemporary African art exhibitions, canvas textures & sculpture',
      highlight: 'Visual inspiration, heritage & storytelling'
    },
    {
      name: 'Road Trips to Nakuru',
      icon: '🚙',
      region: 'Rift Valley Escarpment',
      vibe: 'Spontaneous weekend drives with scenic lake views, crater lookouts & open windows',
      highlight: 'Panoramic viewpoints & lake breeze'
    },
    {
      name: 'Kisumu on the Lake',
      icon: '🌊',
      region: 'Lake Victoria',
      vibe: 'Lakeside breezes, glowing amber sunsets over calm waters & fresh lakeside dining',
      highlight: 'Warm community hospitality & lake life'
    }
  ]

  // GSAP ScrollTrigger for Winding Travel Vector Path & Compass
  useEffect(() => {
    const el = containerRef.current
    const path = travelPathRef.current

    const ctx = gsap.context(() => {
      // Winding road trip vector path drawn on scroll
      if (path) {
        const pathLength = path.getTotalLength ? path.getTotalLength() : 2400
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength
        })

        gsap.to(path, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: '#travel-panel',
            start: 'top 75%',
            end: 'bottom 85%',
            scrub: 1.2
          }
        })
      }

      // Compass rotation on scroll
      if (compassRef.current) {
        gsap.to(compassRef.current, {
          rotate: 180,
          ease: 'none',
          scrollTrigger: {
            trigger: '#travel-panel',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
          }
        })
      }

      // Staggered panel entrance
      gsap.fromTo(
        '.hobby-panel',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.18,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 75%'
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="outside-ide" ref={containerRef} className="py-24 relative">
      {/* Background Coffee Ring Watermark */}
      <div
        className="absolute top-16 right-8 w-44 h-44 rounded-full border-[10px] border-[#8c5e3c]/[0.07] pointer-events-none select-none transform rotate-12 hidden lg:block"
        style={{
          boxShadow: 'inset 0 0 15px rgba(140,94,60,0.05), 0 0 15px rgba(140,94,60,0.03)'
        }}
      />

      {/* Spacious Section Header */}
      <div className="mb-16 text-left">
        <div className="flex items-center gap-2 mb-3">
          <span className="ink-stamp ink-stamp-coral">Section 03</span>
          <span className="text-xs font-mono tracking-widest uppercase text-pencil">
            Marginalia & Field Notes
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline tracking-tight text-charcoal">
          Outside the IDE
        </h2>
        <p className="text-pencil text-lg md:text-xl max-w-xl font-body mt-2">
          The sounds, culinary experiments, and scenic roads that bring color and soul to everyday life.
        </p>
      </div>

      {/* Spacious Layout of the Three: Generous Breathing Room */}
      <div className="space-y-12">
        {/* Top Row: Music & Cooking */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* =========================================================
              1. MUSIC: Amapiano & Soul Music
             ========================================================= */}
          <div className="hobby-panel lg:col-span-6 hand-card p-6 sm:p-8 bg-paper-light flex flex-col justify-between relative overflow-hidden">
            {/* Washi tape pin */}
            <div className="washi-tape washi-tape-top" style={{ width: '90px' }} />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-charcoal/15">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎵</span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-headline text-charcoal leading-none">
                      Amapiano & Soul
                    </h3>
                    <span className="font-mono text-xs uppercase text-pencil">
                      {tracks[activeTrack].genre} · {tracks[activeTrack].bpm}
                    </span>
                  </div>
                </div>

                <span className="ink-stamp ink-stamp-coral text-[10px]">VINYL & BASS</span>
              </div>

              {/* Hand-Drawn Cassette Deck */}
              <div className="p-4 bg-white/95 rounded-2xl border-2 border-charcoal shadow-[3px_3px_0px_#1C1C1C]">
                {/* Cassette Body */}
                <div className="flex items-center justify-between gap-4 bg-paper-dark/60 p-3 rounded-xl border border-charcoal/25 mb-4">
                  {/* Spool 1 */}
                  <div
                    className={`w-12 h-12 rounded-full border-2 border-charcoal flex items-center justify-center bg-white ${
                      isPlaying ? 'tape-spin' : 'tape-paused'
                    }`}
                  >
                    <div className="w-4 h-4 rounded-full bg-charcoal flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-paper" />
                    </div>
                  </div>

                  {/* Animated Rhythmic Equalizer */}
                  <div className="flex-1 h-12 flex items-center justify-center gap-1 bg-charcoal/5 rounded-lg px-2 overflow-hidden border border-charcoal/15">
                    {[20, 32, 16, 40, 24, 36, 18, 30, 22, 38, 26, 34, 16, 28, 40, 20, 32, 36].map(
                      (height, idx) => (
                        <div
                          key={idx}
                          className="w-1.5 bg-charcoal rounded-full transition-all duration-150"
                          style={{
                            height: isPlaying ? `${Math.max(4, (height * (volume / 100)) % 40)}px` : '4px',
                            animation: isPlaying ? `pulse 0.75s ease-in-out infinite ${idx * 0.06}s` : 'none'
                          }}
                        />
                      )
                    )}
                  </div>

                  {/* Spool 2 */}
                  <div
                    className={`w-12 h-12 rounded-full border-2 border-charcoal flex items-center justify-center bg-white ${
                      isPlaying ? 'tape-spin' : 'tape-paused'
                    }`}
                  >
                    <div className="w-4 h-4 rounded-full bg-charcoal flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-paper" />
                    </div>
                  </div>
                </div>

                {/* Current Track Label */}
                <div className="text-center mb-3">
                  <div className="font-headline text-lg text-charcoal font-semibold">
                    {tracks[activeTrack].title}
                  </div>
                </div>

                {/* Track Selector Buttons */}
                <div className="flex flex-wrap gap-2 justify-center pt-2 border-t border-charcoal/15">
                  {tracks.map((t, idx) => (
                    <button
                      key={t.title}
                      onClick={() => setActiveTrack(idx)}
                      className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                        activeTrack === idx
                          ? 'bg-charcoal text-paper font-bold shadow-[1px_2px_0px_#FF6B6B]'
                          : 'bg-paper-dark/70 text-charcoal hover:bg-paper-dark'
                      }`}
                    >
                      {t.genre}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Controls Bar */}
            <div className="mt-6 pt-4 border-t border-charcoal/20 flex items-center justify-between gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-4 py-2 rounded-xl border-2 border-charcoal bg-coral text-white font-headline text-base shadow-[2px_3px_0px_#1C1C1C] hover:translate-y-[-1px] active:translate-y-[1px] transition-all flex items-center gap-2"
              >
                <span>{isPlaying ? '⏸ Pause' : '▶ Play'}</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-pencil">Vol</span>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-24 accent-charcoal cursor-pointer"
                />
                <span className="font-mono text-xs text-charcoal w-6">{volume}%</span>
              </div>
            </div>
          </div>

          {/* =========================================================
              2. COOKING: Culinary Arts & Kitchen Exploration
             ========================================================= */}
          <div className="hobby-panel lg:col-span-6 hand-card-alt p-6 sm:p-8 bg-paper-light flex flex-col justify-between relative overflow-hidden">
            {/* Washi tape pin */}
            <div className="washi-tape washi-tape-top" style={{ width: '85px' }} />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-charcoal/15">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🍳</span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-headline text-charcoal leading-none">
                      Culinary Arts
                    </h3>
                    <span className="font-mono text-xs uppercase text-pencil">
                      Aromatic Spices & Kitchen Craft
                    </span>
                  </div>
                </div>

                <span className="ink-stamp ink-stamp-cyan text-[10px]">FLAVOR LAB</span>
              </div>

              {/* Interactive Dish Selector Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
                {culinaryDishes.map((dish, idx) => {
                  const isSelected = activeDish === idx
                  return (
                    <button
                      key={dish.name}
                      onClick={() => setActiveDish(idx)}
                      className={`p-3 rounded-xl border-2 border-charcoal flex flex-col items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-charcoal text-paper shadow-[3px_3px_0px_#FF6B6B] translate-y-[-2px]'
                          : 'bg-white/90 text-charcoal hover:bg-paper-dark'
                      }`}
                    >
                      <span className="text-2xl mb-1">{dish.icon}</span>
                      <span className="font-headline text-xs font-bold truncate w-full text-center">
                        {dish.name}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Active Dish Spotlight Card */}
              <div className="p-4 bg-white/95 rounded-2xl border-2 border-charcoal shadow-[2px_2px_0px_#1C1C1C] relative">
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-charcoal/15">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{culinaryDishes[activeDish].icon}</span>
                    <span className="font-headline text-xl text-charcoal font-bold">
                      {culinaryDishes[activeDish].name}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-yellow-100 text-charcoal text-[11px] font-mono border border-charcoal/30 rounded font-bold">
                    {culinaryDishes[activeDish].category}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs md:text-sm font-body text-charcoal/90">
                  <div className="flex items-start gap-1.5">
                    <span className="font-headline text-coral font-bold text-base">Key Flavors:</span>
                    <span>{culinaryDishes[activeDish].ingredients}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="font-headline text-pencil font-bold text-base">Profile:</span>
                    <span>{culinaryDishes[activeDish].taste}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Handwritten Quote */}
            <div className="mt-6 pt-4 border-t border-charcoal/20 flex items-center justify-between text-xs font-mono text-pencil">
              <span>EXPLORING GASTRONOMY</span>
              <span className="font-scribble text-sm text-charcoal font-semibold">
                "Cooking is love made edible—fresh herbs, patience & good company."
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================
            Row 2: TRAVELING: Diani Kongo River, Museums, Nakuru, Mara, Lamu, Kisumu
           ========================================================= */}
        <div
          id="travel-panel"
          className="hobby-panel hand-card-wobble p-6 sm:p-8 md:p-10 bg-paper-light relative overflow-hidden"
        >
          {/* Washi tape pin */}
          <div className="washi-tape washi-tape-top" style={{ width: '120px' }} />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b-2 border-charcoal/15 gap-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧭</span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-headline text-charcoal leading-none">
                  Road Trips, Coast & Galleries
                </h3>
                <span className="font-mono text-xs uppercase text-pencil">
                  Diani Kongo River · Art Spaces · Nakuru · Maasai Mara · Lamu · Kisumu
                </span>
              </div>
            </div>

            {/* Rotating Compass Watermark */}
            <div className="flex items-center gap-3">
              <div
                ref={compassRef}
                className="w-10 h-10 border-2 border-charcoal rounded-full flex items-center justify-center relative bg-white shadow-[1px_2px_0px_#1C1C1C]"
              >
                <div className="font-mono text-[9px] font-bold text-coral">N</div>
                <div className="absolute w-[1px] h-full bg-charcoal/30" />
                <div className="absolute h-[1px] w-full bg-charcoal/30" />
              </div>
              <span className="ink-stamp ink-stamp-coral text-[10px]">WANDERLUST</span>
            </div>
          </div>

          {/* Panoramic Winding Road Trip Canvas */}
          <div className="p-4 sm:p-6 bg-paper-dark/50 rounded-2xl border-2 border-charcoal relative overflow-hidden shadow-[inset_0_2px_6px_rgba(0,0,0,0.06)]">
            <svg
              viewBox="0 0 900 200"
              className="w-full h-36 sm:h-44 md:h-52 overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Subtle Map Coordinates Grid */}
              <line x1="0" y1="50" x2="900" y2="50" stroke="rgba(28,28,28,0.05)" strokeWidth="1" />
              <line x1="0" y1="100" x2="900" y2="100" stroke="rgba(28,28,28,0.05)" strokeWidth="1" />
              <line x1="0" y1="150" x2="900" y2="150" stroke="rgba(28,28,28,0.05)" strokeWidth="1" />

              {/* Faint Guide Contour Path */}
              <path
                d="M 50 140 C 180 30, 240 170, 360 60 C 480 180, 580 40, 700 150 C 780 170, 820 80, 850 60"
                stroke="rgba(28, 28, 28, 0.18)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray="5 7"
              />

              {/* Animated Charcoal Vector Path Line */}
              <path
                ref={travelPathRef}
                className="travel-path-line"
                d="M 50 140 C 180 30, 240 170, 360 60 C 480 180, 580 40, 700 150 C 780 170, 820 80, 850 60"
                stroke="#1C1C1C"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* 1. Diani Kongo River */}
              <g transform="translate(50, 140)">
                <circle r="9" fill="#0284C7" stroke="#1C1C1C" strokeWidth="2.5" />
                <circle r="16" stroke="#0284C7" strokeWidth="1" opacity="0.3" />
                <text x="14" y="4" fontFamily="Architects Daughter" fontSize="13" fontWeight="bold" fill="#1C1C1C">
                  Diani Kongo River
                </text>
              </g>

              {/* 2. Lamu Old Town */}
              <g transform="translate(240, 160)">
                <circle r="8" fill="#FEF08A" stroke="#1C1C1C" strokeWidth="2.5" />
                <text x="-12" y="-12" fontFamily="Architects Daughter" fontSize="13" fontWeight="bold" fill="#1C1C1C">
                  Lamu Dhows
                </text>
              </g>

              {/* 3. Maasai Mara */}
              <g transform="translate(360, 60)">
                <circle r="8" fill="#FF6B6B" stroke="#1C1C1C" strokeWidth="2.5" />
                <text x="14" y="-2" fontFamily="Architects Daughter" fontSize="13" fontWeight="bold" fill="#1C1C1C">
                  Maasai Mara
                </text>
              </g>

              {/* 4. Art Galleries */}
              <g transform="translate(480, 175)">
                <circle r="8" fill="#C084FC" stroke="#1C1C1C" strokeWidth="2.5" />
                <text x="-40" y="22" fontFamily="Architects Daughter" fontSize="13" fontWeight="bold" fill="#1C1C1C">
                  Museums & Galleries
                </text>
              </g>

              {/* 5. Nakuru Road Trips */}
              <g transform="translate(700, 150)">
                <circle r="8" fill="#86EFAC" stroke="#1C1C1C" strokeWidth="2.5" />
                <text x="-60" y="-12" fontFamily="Architects Daughter" fontSize="13" fontWeight="bold" fill="#1C1C1C">
                  Nakuru Lake Drive
                </text>
              </g>

              {/* 6. Kisumu Lake Victoria */}
              <g transform="translate(850, 60)">
                <circle r="8" fill="#38BDF8" stroke="#1C1C1C" strokeWidth="2.5" />
                <text x="-95" y="20" fontFamily="Architects Daughter" fontSize="13" fontWeight="bold" fill="#1C1C1C">
                  Kisumu Waters
                </text>
              </g>
            </svg>

            {/* Interactive Waypoint Destination Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mt-5 pt-4 border-t border-charcoal/20">
              {destinations.map((dest, i) => (
                <button
                  key={dest.name}
                  onClick={() => setActiveDestination(i)}
                  className={`p-2.5 rounded-xl border-2 border-charcoal text-left transition-all ${
                    activeDestination === i
                      ? 'bg-charcoal text-paper shadow-[2px_3px_0px_#FF6B6B] translate-y-[-2px]'
                      : 'bg-white/90 text-charcoal hover:bg-paper-dark'
                  }`}
                >
                  <div className="text-xl mb-1">{dest.icon}</div>
                  <div className="font-headline text-sm font-bold truncate leading-tight">
                    {dest.name}
                  </div>
                  <div className="font-mono text-[9px] opacity-75 mt-0.5 uppercase truncate">
                    {dest.region}
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Destination Spotlight */}
            <div className="mt-4 p-3.5 bg-white/95 rounded-xl border-2 border-charcoal flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{destinations[activeDestination].icon}</span>
                <div>
                  <div className="font-headline text-base text-charcoal font-bold">
                    {destinations[activeDestination].name} — {destinations[activeDestination].highlight}
                  </div>
                  <div className="font-body text-xs sm:text-sm text-charcoal/80">
                    {destinations[activeDestination].vibe}
                  </div>
                </div>
              </div>
              <span className="ink-stamp ink-stamp-cyan text-[10px] self-start sm:self-auto">
                KENYA EXPEDITIONS
              </span>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-4 pt-3 border-t border-charcoal/20 flex items-center justify-between text-xs font-mono text-pencil">
            <span>FIELD MAP & ROAD TRIPS</span>
            <span className="font-scribble text-sm text-charcoal font-semibold">
              "Collecting sunsets, gallery prints, and open-road memories."
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
