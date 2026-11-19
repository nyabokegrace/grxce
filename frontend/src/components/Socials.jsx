import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons'
import { Mail, Check } from 'lucide-react'

export default function Socials() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText('nyabokegrace007@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const links = [
    {
      name: 'GitHub',
      href: 'https://github.com/nyabokegrace',
      icon: <GithubIcon className="w-4 h-4" />
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nyabokegrace',
      icon: <LinkedinIcon className="w-4 h-4" />
    },
    {
      name: 'Twitter / X',
      href: 'https://twitter.com/nyaboke_grace',
      icon: <TwitterIcon className="w-4 h-4" />
    }
  ]

  return (
    <aside
      aria-label="Social links and margin index"
      className="fixed left-5 bottom-8 z-30 hidden lg:flex flex-col items-center gap-3 pointer-events-auto"
    >
      {/* Vertical Spine Label */}
      <div className="font-mono text-[9px] uppercase tracking-widest text-pencil/70 transform -rotate-90 origin-bottom-left ml-3 mb-4 select-none">
        CONNECT • INDEX
      </div>

      <div className="flex flex-col gap-2 p-1.5 rounded-full border border-charcoal/15 bg-paper-light/90 backdrop-blur-md shadow-sm">
        {links.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.95 }}
            title={link.name}
            className="w-8 h-8 rounded-full flex items-center justify-center text-charcoal/70 hover:text-charcoal hover:bg-paper-dark/80 transition-colors"
          >
            {link.icon}
          </motion.a>
        ))}

        {/* Copy Email Button */}
        <div className="relative">
          <motion.button
            onClick={handleCopyEmail}
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.95 }}
            title="Copy Email Address"
            className="w-8 h-8 rounded-full flex items-center justify-center text-charcoal/70 hover:text-coral hover:bg-paper-dark/80 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Mail className="w-4 h-4" />}
          </motion.button>

          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 18, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute left-full top-1/2 -translate-y-1/2 px-2.5 py-1 bg-charcoal text-paper text-[10px] font-mono rounded whitespace-nowrap shadow-md pointer-events-none"
              >
                Copied to clipboard!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </aside>
  )
}
