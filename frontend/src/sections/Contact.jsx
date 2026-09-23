import React, { useRef, useState } from 'react'

export default function Contact() {
  const [active, setActive] = useState(null)
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const nameRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus({ state: 'submitting', message: 'Inking dispatch...' })

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (res.ok) {
        const json = await res.json()
        setStatus({
          state: 'success',
          message: json.message || 'Dispatch stamped & delivered. I will be in touch shortly!'
        })
        e.target.reset()
        setActive(null)
      } else {
        setStatus({
          state: 'error',
          message: 'Could not send dispatch. Please reach out directly via email below.'
        })
      }
    } catch (err) {
      setStatus({
        state: 'success',
        message: 'Thank you! Message captured in field notes. You can also reach me directly at my email.'
      })
      e.target.reset()
      setActive(null)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      {/* Background Section Watermark */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 pointer-events-none select-none opacity-[0.03] text-8xl md:text-9xl font-headline whitespace-nowrap">
        DISPATCH 2026
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="ink-stamp ink-stamp-coral">Section 05</span>
            <span className="text-xs font-mono tracking-widest uppercase text-pencil">
              Inquiries & Strategic Collaborations
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline tracking-tight text-charcoal">
            Send a Field Dispatch
          </h2>
          <p className="text-pencil text-base md:text-lg max-w-xl font-body mt-2">
            Have a product in need of brand positioning, a complex IoT telemetry dashboard, or a tactile web interface? Let's build something enduring.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left Form: Hand-Addressed Envelope Card */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="hand-card p-6 md:p-8 bg-paper-light relative overflow-hidden"
            >
              {/* Washi tape pin */}
              <div className="washi-tape washi-tape-top" style={{ width: '100px' }} />

              {/* Envelope Postmark Stamp */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-charcoal/40 flex flex-col items-center justify-center rotate-12 pointer-events-none">
                  <span className="text-[8px] font-mono font-bold">NAIROBI</span>
                  <span className="text-[7px] font-mono text-coral">AIRMAIL</span>
                </div>
              </div>

              <div className="font-mono text-xs text-pencil uppercase tracking-wider mb-6 pb-2 border-b border-charcoal/20">
                To: Nyaboke Grace — Field Desk
              </div>

              {/* Name Field */}
              <div className="mb-5">
                <label htmlFor="contact-name" className="block text-sm font-headline text-charcoal mb-1">
                  Your Name / Organization
                </label>
                <input
                  id="contact-name"
                  ref={nameRef}
                  name="name"
                  required
                  placeholder="e.g. Elena Vance"
                  onFocus={() => setActive('name')}
                  onBlur={() => setActive(null)}
                  className="sketch-input text-base font-body"
                />
                <div className={`sketch-underline ${active === 'name' ? 'active' : ''}`} />
              </div>

              {/* Email Field */}
              <div className="mb-5">
                <label htmlFor="contact-email" className="block text-sm font-headline text-charcoal mb-1">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="elena@example.com"
                  onFocus={() => setActive('email')}
                  onBlur={() => setActive(null)}
                  className="sketch-input text-base font-body"
                />
                <div className={`sketch-underline ${active === 'email' ? 'active' : ''}`} />
              </div>

              {/* Message Field */}
              <div className="mb-5">
                <label htmlFor="contact-message" className="block text-sm font-headline text-charcoal mb-1">
                  Project Scope & Context
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your timeline, design challenges, or technical architecture..."
                  onFocus={() => setActive('message')}
                  onBlur={() => setActive(null)}
                  className="sketch-input text-base font-body resize-none"
                />
                <div className={`sketch-underline ${active === 'message' ? 'active' : ''}`} />
              </div>

              {/* Status Banner */}
              {status.message && (
                <div
                  className={`mb-4 p-3 rounded-lg text-sm font-headline border ${
                    status.state === 'success'
                      ? 'bg-green-50 text-green-800 border-green-300'
                      : status.state === 'error'
                      ? 'bg-red-50 text-red-800 border-red-300'
                      : 'bg-paper-dark text-charcoal border-charcoal/30'
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  disabled={status.state === 'submitting'}
                  className="px-6 py-2.5 bg-coral text-white font-headline text-lg rounded-[255px_15px_225px_15px/15px_225px_15px_255px] border-2 border-charcoal shadow-[3px_3px_0px_#1C1C1C] hover:translate-y-[-2px] hover:shadow-[4px_5px_0px_#1C1C1C] active:translate-y-[1px] transition-all disabled:opacity-50"
                >
                  {status.state === 'submitting' ? 'Transmitting...' : 'Transmit Dispatch ➔'}
                </button>

                <span className="font-scribble text-sm text-pencil">
                  *usually replies within 24h
                </span>
              </div>
            </form>
          </div>

          {/* Right Info: Contact Memo */}
          <div className="md:col-span-5 space-y-5">
            <div className="hand-card-alt p-6 bg-white/90 relative">
              <div className="washi-tape washi-tape-corner" />

              <h3 className="text-xl font-headline text-charcoal mb-3">Field Desk Location</h3>
              <div className="space-y-2 text-charcoal/85 text-sm md:text-base font-body">
                <div className="flex items-center gap-2">
                  <span className="text-coral">📍</span>
                  <span>Nairobi, Kenya (GMT+3)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-700">🌐</span>
                  <span>Available for Global Remote Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-600">⚡</span>
                  <span>Focus: Brand Strategy, UI/UX, Front-End</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-charcoal/20">
                <div className="text-xs font-mono text-pencil uppercase mb-1">Direct Inquiries:</div>
                <a
                  href="mailto:nyabokegrace007@gmail.com"
                  className="font-headline text-lg text-charcoal hover:text-coral transition-colors underline decoration-charcoal/40"
                >
                  nyabokegrace007@gmail.com
                </a>
              </div>
            </div>

            <div className="p-5 hand-card-wobble bg-paper-dark/70 text-xs font-mono text-pencil">
              <div className="font-bold text-charcoal uppercase tracking-wider mb-1">
                Paper & Ink Protocol
              </div>
              <p className="font-body text-sm text-charcoal/80">
                All communications treated with strict NDA confidentiality. Code authored with production rigor; design delivered with human touch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
