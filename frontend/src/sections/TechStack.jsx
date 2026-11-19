import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  editorialEase,
  tactileSpring,
  fadeUp,
  staggerContainer,
  staggerChild
} from '../utils/motion'
import {
  Code2,
  Palette,
  Megaphone,
  Briefcase,
  Layers,
  Sparkles,
  ArrowRight,
  Workflow,
  Cpu,
  Terminal,
  Database,
  Radio,
  FileCode,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react'

// -------------------------------------------------------------------------
// MAIN TECH STACK COMPONENT
// -------------------------------------------------------------------------
export default function TechStack() {
  const [activePillar, setActivePillar] = useState(0)
  const [selectedFilter, setSelectedFilter] = useState('all')

  const pillars = [
    {
      id: 'software',
      title: 'Software Developer',
      icon: <Code2 className="w-5 h-5 text-charcoal" />,
      tagline: 'Full-Stack Web & Concurrent Backend Systems',
      description:
        'Full-stack web platforms, Go backend architectures, REST APIs, database modeling, and kinetic frontend engineering. I write clean, resilient code that bridges complex backend data pipelines with fluid, human-centered user experiences.',
      strengths: [
        'Concurrent microservices & API design in Go (Golang)',
        'Kinetic, high-performance interfaces with React, Next.js & Framer Motion',
        'Relational & document database schemas (PostgreSQL, MongoDB, SQLite)',
        'Containerized deployment workflows with Docker, Linux environments & Git'
      ],
      tools: ['Go', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'MongoDB', 'SQLite', 'Docker', 'Linux', 'Git'],
      synergy: 'Builds the actual product that delivers on brand promises without technical debt.'
    },
    {
      id: 'brand',
      title: 'Brand Strategist',
      icon: <Palette className="w-5 h-5 text-charcoal" />,
      tagline: 'Visual Identity Systems & Product Narrative',
      description:
        'Visual identity systems, brand positioning, product naming, and translating professional services into memorable digital experiences. I clarify who a product is for, why it matters, and how every visual touchpoint conveys authority.',
      strengths: [
        'End-to-end brand identity architecture from monograms to governance',
        'Design systems and component token hierarchies in Figma',
        'Strategic product naming, voice tone calibration, and messaging frameworks',
        'Bridging corporate enterprise dignity with modern web craftsmanship'
      ],
      tools: ['Figma', 'Canva', 'Design Systems', 'Brand Storytelling', 'Typography Systems', 'Design Tokens'],
      synergy: 'Ensures code isn’t just functional, but deeply resonant, dignified, and memorable.'
    },
    {
      id: 'marketing',
      title: 'Digital Marketer',
      icon: <Megaphone className="w-5 h-5 text-charcoal" />,
      tagline: 'Audience Funnels, Short-Form Video & Campaign Analytics',
      description:
        'High-converting social media marketing, short-form video strategy across TikTok, Instagram, and Facebook, and turning organic views into paying retainers. I translate legal education and tech products into viral clarity.',
      strengths: [
        'Short-form legal & educational video funnels on TikTok (+180% consultations)',
        'Multi-platform Meta advertising and organic engagement optimization',
        'Data-informed conversion funnels and intake latency reduction',
        'High-retention visual assets and editorial campaign direction'
      ],
      tools: ['TikTok Funnels', 'Instagram Campaigns', 'Meta Ads', 'Analytics', 'Conversion Copy', 'Content Strategy'],
      synergy: 'Connects the product with its users so software doesn’t launch into an empty room.'
    },
    {
      id: 'executive',
      title: 'Executive Assistant',
      icon: <Briefcase className="w-5 h-5 text-charcoal" />,
      tagline: 'High-Trust Operations, Legal Tech Triage & Scheduling',
      description:
        'High-velocity operational coordination, litigation calendar management, confidential documentation, and executive support. I keep fast-moving practices and builder teams structured, focused, and frictionless.',
      strengths: [
        'Conflict-of-interest screening and legal case file triage',
        'Complex calendar synchronization across court dates and corporate retainers',
        'Confidential executive documentation and stakeholder correspondence',
        'Operational workflow automation and operational backlog clearing'
      ],
      tools: ['Litigation Management', 'Calendar Sync', 'Triage Systems', 'Legal Ops', 'Google Workspace', 'Notion'],
      synergy: 'Provides the operational scaffolding that allows creative and engineering work to compound.'
    }
  ]

  const toolCategories = [
    { key: 'all', name: 'All Stack' },
    { key: 'engineering', name: 'Engineering & Systems' },
    { key: 'design', name: 'Brand & UX Design' },
    { key: 'marketing', name: 'Growth & Funnels' },
    { key: 'operations', name: 'Executive Operations' }
  ]

  const categorizedTools = [
    { name: 'Go (Golang)', cat: 'engineering', badge: 'Concurrency' },
    { name: 'JavaScript (ES6+)', cat: 'engineering', badge: 'Core' },
    { name: 'TypeScript', cat: 'engineering', badge: 'Type-Safe' },
    { name: 'React', cat: 'engineering', badge: 'Frontend' },
    { name: 'Next.js', cat: 'engineering', badge: 'SSR / Edge' },
    { name: 'Tailwind CSS', cat: 'engineering', badge: 'Styling' },
    { name: 'Node.js', cat: 'engineering', badge: 'Runtime' },
    { name: 'PostgreSQL', cat: 'engineering', badge: 'Database' },
    { name: 'MongoDB', cat: 'engineering', badge: 'NoSQL' },
    { name: 'SQLite', cat: 'engineering', badge: 'Embedded' },
    { name: 'Docker', cat: 'engineering', badge: 'Containers' },
    { name: 'Linux', cat: 'engineering', badge: 'Kernel / OS' },
    { name: 'Git', cat: 'engineering', badge: 'VCS' },
    { name: 'Figma', cat: 'design', badge: 'UI/UX Design' },
    { name: 'Canva', cat: 'design', badge: 'Brand Assets' },
    { name: 'Design Systems', cat: 'design', badge: 'Tokens & UI' },
    { name: 'Brand Storytelling', cat: 'design', badge: 'Narrative' },
    { name: 'TikTok Funnels', cat: 'marketing', badge: 'Short-Form Video' },
    { name: 'Instagram Campaigns', cat: 'marketing', badge: 'Visual Storytelling' },
    { name: 'Facebook Outreach', cat: 'marketing', badge: 'Community' },
    { name: 'Audience Funnels', cat: 'marketing', badge: 'Consultations' },
    { name: 'Calendar Orchestration', cat: 'operations', badge: 'Executive Ops' },
    { name: 'Client Intake Triage', cat: 'operations', badge: 'Legal Tech' },
    { name: 'Process Automation', cat: 'operations', badge: 'Efficiency' },
    { name: 'Executive Documentation', cat: 'operations', badge: 'High-Trust' }
  ]

  const filteredTools =
    selectedFilter === 'all'
      ? categorizedTools
      : categorizedTools.filter((t) => t.cat === selectedFilter)

  return (
    <section id="techstack" className="py-20 md:py-28 relative">
      {/* Background Architectural Grid (Rows & Columns) */}
      <div className="absolute inset-0 architectural-grid opacity-65 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-left">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="ink-badge text-[10px] font-bold">[4-PILLAR REINFORCEMENT]</span>
            <span className="text-xs font-mono text-pencil uppercase tracking-widest font-semibold">
              Capabilities // Synergy
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-headline font-bold text-5xl sm:text-6xl md:text-7xl text-charcoal tracking-tight">
                4-Pillar Roles & Unified Toolkit
              </h2>
              <p className="font-sans text-base sm:text-lg text-charcoal/80 max-w-2xl mt-2 leading-relaxed">
                Rather than working in silos, my four roles reinforce each other—turning raw code into branded products,
                distributing them to real audiences, and keeping operations flawlessly organized.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-charcoal font-bold">
              <span>[OPERATOR SYNERGY]</span>
            </div>
          </div>
        </div>

        {/* Scrollytelling Interactive Pillar Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {pillars.map((pillar, idx) => {
            const isSelected = activePillar === idx
            return (
              <motion.button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={tactileSpring}
                data-cursor="PILLAR // ROLE"
                className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-charcoal text-paper border-charcoal shadow-tactile-solid'
                    : 'bg-paper-light text-charcoal border-charcoal/15 hover:border-charcoal/40 shadow-sm'
                }`}
              >
                {/* Washi tape accent on active */}
                {isSelected && <div className="washi-tape-pink absolute top-0 left-4 w-14 h-3.5 -rotate-2" />}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-lg bg-white/10 border border-current/15">
                      {pillar.icon}
                    </span>
                    <span className="font-mono text-[10px] tracking-wider opacity-60">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-headline font-bold text-2xl sm:text-3xl leading-snug">
                    {pillar.title}
                  </h3>
                </div>

                <div className="mt-4 pt-2 border-t border-current/15 flex items-center justify-between text-[10px] font-mono">
                  <span className="opacity-75 truncate">{pillar.tagline.split('&')[0]}</span>
                  <span className={`font-bold ${isSelected ? 'text-paper' : 'text-pencil'}`}>
                    {isSelected ? '[ACTIVE]' : '[VIEW]'}
                  </span>
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Selected Pillar Deep Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: editorialEase }}
            className="editorial-card p-6 sm:p-10 bg-white border-2 border-charcoal/20 relative overflow-hidden text-left"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Narrative & Strengths */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase tracking-wider bg-paper-pink text-charcoal border border-scrunch-pink-dark font-bold">
                      PILLAR 0{activePillar + 1}
                    </span>
                    <span className="font-mono text-xs text-pencil uppercase tracking-wider font-semibold">
                      {pillars[activePillar].tagline}
                    </span>
                  </div>

                  <h3 className="font-headline font-bold text-4xl sm:text-5xl text-charcoal">
                    {pillars[activePillar].title}
                  </h3>
                  <p className="font-sans text-base text-charcoal/80 mt-2.5 leading-relaxed">
                    {pillars[activePillar].description}
                  </p>
                </div>

                {/* Core Strengths */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-pencil font-bold mb-3 flex items-center gap-2">
                    <span className="font-mono text-charcoal font-bold">▸</span>
                    Key Capabilities & Outcomes
                  </h4>
                  <div className="space-y-2">
                    {pillars[activePillar].strengths.map((strength, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-lg bg-paper-light border border-charcoal/10 flex items-start gap-2.5"
                      >
                        <span className="font-mono text-xs text-charcoal font-bold mt-0.5">▸</span>
                        <span className="font-sans text-sm text-charcoal/90">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Synergy & Tools */}
              <div className="lg:col-span-5 space-y-6">
                {/* Cross-Discipline Synergy Box with Pink Paper Background */}
                <div className="p-5 rounded-2xl bg-paper-pink/40 border border-scrunch-pink-dark/50 space-y-2.5 relative">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-charcoal">
                    <Workflow className="w-4 h-4 text-charcoal" />
                    <span>How This Reinforces The Other Pillars</span>
                  </div>
                  <p className="font-sans text-sm text-charcoal/85 leading-relaxed">
                    "{pillars[activePillar].synergy}"
                  </p>
                </div>

                {/* Primary Tools in This Domain */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-pencil font-bold mb-2.5">
                    Domain Toolkit
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pillars[activePillar].tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-lg bg-paper-light border border-charcoal/20 font-mono text-xs text-charcoal font-semibold shadow-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stamped Seal Note */}
                <div className="pt-3 border-t border-charcoal/10 flex items-center justify-between text-xs font-mono text-pencil">
                  <span>DISCIPLINE CALIBRATED</span>
                  <span className="font-headline font-bold text-xl text-charcoal">
                    Multi-disciplinary operator
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Categorized Interactive Toolkit Filter */}
        <div className="space-y-6 pt-4 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-charcoal/15">
            <div>
              <h3 className="font-headline font-bold text-3xl sm:text-4xl text-charcoal">
                Comprehensive Toolkit & Technology Stack
              </h3>
              <p className="font-mono text-xs text-pencil uppercase tracking-wider mt-0.5 font-semibold">
                Filtered by domain and operational workflow
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-1.5">
              {toolCategories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedFilter(cat.key)}
                  data-cursor="FILTER ✦"
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all font-semibold cursor-pointer ${
                    selectedFilter === cat.key
                      ? 'bg-charcoal text-paper font-bold shadow-sm'
                      : 'bg-paper-light text-charcoal hover:bg-paper-dark'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Tools Badges Grid */}
          <motion.div layout className="flex flex-wrap gap-2.5">
            <AnimatePresence>
              {filteredTools.map((tool) => (
                <motion.div
                  key={tool.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={tactileSpring}
                  data-cursor="TOOL // STACK"
                  className="px-3.5 py-2 rounded-xl bg-paper-light border-2 border-charcoal/15 flex items-center gap-2 text-xs font-mono text-charcoal shadow-sm hover:border-charcoal hover:bg-white transition-all cursor-default"
                >
                  <span className="font-semibold">{tool.name}</span>
                  <span className="text-[10px] text-pencil opacity-70">[{tool.badge}]</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
