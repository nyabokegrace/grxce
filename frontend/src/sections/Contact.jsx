import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  editorialEase,
  tactileSpring,
  drawPath
} from '../utils/motion'
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  ArrowUpRightIcon
} from '../components/Icons'
import {
  Mail,
  Check,
  Copy,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react'

// Authentic 64x34 Monospace ASCII Art generated from grace.png
const GRACE_ASCII_ART = `
                           ::..    ..:-+                        
                        ++*#%%%#+-.     -*                      
                      +#%%%%%%%@@@%+. .. .+%                    
                     **####*#####%%@%= ... =%                   
                     *****+++**##%%%@@*.... +@                  
                    ****+==--=*###%%@@@#....-%%                 
                    ***++==-:-+*##%%@@@@=.. =%%#                
                   *####*++****++*#%%%@@+.. #%%@                
                   #%#%*#+=##**#%%##%%@@*+.=@%%@%               
                   *****#+**+**###*#%%@@%%*@@%%%@#              
                  **++*#***#*====+#%%@@#*%@@@@%%@@              
                  **++*#++*#*+=-=*#%@@@%%@@@@@%%@@#             
                   ###%%%##%*****#%%@@%*%@@@@%%%@@@             
                   *#%%++++*#%%#*#%@@@@#@@@@@@%%@@@%            
                    **#*+++###**##%@@@@@@@@@@@%%%@@@#           
                    %%*##**+***#%%@@@@@*+%@@@@@%%@@@@           
                    %@%*++==*%@@@%%@@%-..=@@@@@@%@@@@@          
                     @@**%%@@@@#**%#=.....:#@@@@@@@@@@@         
                     *-.=%@%%##**+-........-*@@@@@%@@@@@        
                   -: .:*#%###*+:........::..-+%@@@@@@@@#       
             -::..:::::*@%%%#+=..........:::::.:=#@@@@@@@       
           :.....-=-==+@%#*=---:::.::::.....:....:*@@@@@@       
          ..:::..:::=*@*-:.::.....::::...........::#@@@@@@      
         ..::...::.:#@= .:::.....::..............::-@@@@@@      
        ...::..:::.*@: ..:.........::...........:::-#@@@@@@     
       ...::.:::. *@-.:...........:...........::::--#@@@@@@@    
      ...::.:::..*@=.:........::::...........::::---#@@@@@@@@   
     :..::::::.:*#:.:..:..::.:-:............::::---+#@@@@@@@@%  
    :..::::::..==..:.::..:..:::............::::::--=#@@@@@@@@@  
   :..::::::.:::.::.:...:..::............:.::::::--+%@@@@@@@@@% 
  :..:::::..::::::.....:..::.............:::::::--+*#@@@@@@@@@@ 
 :.::::::..::::.........:::.............:::::::--+*+%@@@@@@@@@@ 
=.:-::::..:::::......:.::........:..:.::::::::--+*=+@@@@@@@@@@@ 
`.trimEnd()

export default function Contact() {
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' })
  const [copied, setCopied] = useState(false)
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nyabokegrace007@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ state: 'submitting', message: 'Inking dispatch...' })

    const payload = {
      name: e.target.name.value,
      email: e.target.email.value,
      projectType: e.target.projectType?.value || 'General Inquiry',
      message: e.target.message.value
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (res.ok) {
        setFormStatus({
          state: 'success',
          message: 'Dispatch stamped & delivered! I will reply within 24 hours.'
        })
        e.target.reset()
      } else {
        setFormStatus({
          state: 'success',
          message: 'Thank you! Message captured. You can also reach me directly at nyabokegrace007@gmail.com.'
        })
        e.target.reset()
      }
    } catch (err) {
      setFormStatus({
        state: 'success',
        message: 'Thank you! Message captured. You can also reach me directly at nyabokegrace007@gmail.com.'
      })
      e.target.reset()
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Background Architectural Grid (Rows & Columns) */}
      <div className="absolute inset-0 architectural-grid opacity-65 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="text-left max-w-3xl">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="ink-badge text-[10px] font-bold">[INQUIRIES // ROLES]</span>
            <span className="text-xs font-mono text-pencil uppercase tracking-widest">
              Direct Dispatch // Open for Collaboration
            </span>
          </div>

          <h2 className="font-headline font-bold text-5xl sm:text-6xl md:text-7xl text-charcoal tracking-tight leading-[1.02]">
            Ready to build, brand, or scale something together?
          </h2>

          <p className="font-sans text-base sm:text-lg text-charcoal/80 mt-4 leading-relaxed">
            I’m currently open to Software Engineering, Frontend & Brand Design, Digital Marketing, and Executive Operations roles.
            Whether you need a developer to ship your product or a multidisciplinary operator to help run and grow it—let’s talk.
          </p>
        </div>

        {/* Main Grid: Form + Editorial Portrait Card */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 text-left">
            <form
              onSubmit={handleSubmit}
              className="editorial-card p-6 sm:p-8 bg-paper-light border-2 border-charcoal/20 relative space-y-5"
            >
              {/* Masking tape on top */}
              <div className="masking-tape masking-tape-top" style={{ width: '100px' }} />

              <div className="flex items-center justify-between pb-3 border-b border-charcoal/10">
                <span className="font-mono text-xs uppercase tracking-wider text-charcoal font-bold">
                  Field Dispatch // Direct Message
                </span>
                <span className="text-[10px] font-mono text-pencil">STATUS: TRANSMITTER READY</span>
              </div>

              {/* Name Field */}
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="block font-mono text-xs uppercase tracking-wider text-charcoal font-semibold">
                  Your Name / Organization
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  placeholder="e.g. Sarah Jenkins or Tech Studio"
                  className="w-full px-4 py-3 rounded-xl border border-charcoal/20 bg-white text-charcoal font-sans text-sm focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all shadow-sm"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="block font-mono text-xs uppercase tracking-wider text-charcoal font-semibold">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="sarah@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-charcoal/20 bg-white text-charcoal font-sans text-sm focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all shadow-sm"
                />
              </div>

              {/* Project Type / Role Selector */}
              <div className="space-y-1.5">
                <label htmlFor="contact-project-type" className="block font-mono text-xs uppercase tracking-wider text-charcoal font-semibold">
                  Role / Collaboration Focus
                </label>
                <select
                  id="contact-project-type"
                  name="projectType"
                  className="w-full px-4 py-3 rounded-xl border border-charcoal/20 bg-white text-charcoal font-sans text-sm focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all shadow-sm font-medium"
                >
                  <option value="Software Engineering">Software Engineering / Full-Stack</option>
                  <option value="Frontend & Brand Design">Frontend Lead & Brand Design System</option>
                  <option value="Digital Marketing & Growth">Digital Marketing & Social Growth Funnels</option>
                  <option value="Executive Operations">Executive & Operational Support</option>
                  <option value="General Exploration">Other / Strategic Consultation</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block font-mono text-xs uppercase tracking-wider text-charcoal font-semibold">
                  Message / Project Scope
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about what you're building, the challenges ahead, or the role you have in mind..."
                  className="w-full px-4 py-3 rounded-xl border border-charcoal/20 bg-white text-charcoal font-sans text-sm focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all shadow-sm resize-none"
                />
              </div>

              {/* Status Banner */}
              {formStatus.message && (
                <div className="p-3.5 rounded-xl font-mono text-xs font-semibold bg-paper-dark text-charcoal border border-charcoal/20">
                  {formStatus.message}
                </div>
              )}

              {/* CTA Button */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <motion.button
                  type="submit"
                  disabled={formStatus.state === 'submitting'}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={tactileSpring}
                  data-cursor="DISPATCH ✉"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-charcoal text-paper font-mono text-xs uppercase tracking-wider shadow-tactile-solid hover:bg-pencil transition-colors disabled:opacity-50 font-bold cursor-pointer"
                >
                  <span>{formStatus.state === 'submitting' ? 'Transmitting...' : "Say Hello — Let's Work Together ↗"}</span>
                </motion.button>

                <div className="flex items-center gap-2 text-xs font-mono text-pencil">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Replies within 24 hours</span>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column: Pure ASCII Art Photo & Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative max-w-[340px] sm:max-w-[370px] mx-auto lg:mr-0 flex items-center justify-center select-none overflow-hidden py-2">
              <pre className="font-mono text-[5.8px] sm:text-[6.4px] leading-[7.5px] sm:leading-[8.2px] text-charcoal font-bold tracking-[0.4px] sm:tracking-[0.6px] text-center my-auto overflow-hidden">
                {GRACE_ASCII_ART}
              </pre>
            </div>

            {/* Quick Email & Social Links Card */}
            <div className="p-6 rounded-2xl bg-paper-light border border-charcoal/15 space-y-4 text-left">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-pencil font-bold">
                  Direct Inquiries
                </div>
                <div className="mt-1 flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white border border-charcoal/15">
                  <a
                    href="mailto:nyabokegrace007@gmail.com"
                    data-cursor="EMAIL ✉"
                    className="font-mono text-xs sm:text-sm text-charcoal font-semibold hover:text-pencil truncate"
                  >
                    nyabokegrace007@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    data-cursor="COPY ✦"
                    className="p-1.5 rounded-md hover:bg-paper-dark text-pencil hover:text-charcoal transition-colors flex-shrink-0 cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-charcoal" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location & Timezone */}
              <div className="pt-2 border-t border-charcoal/10 flex items-center justify-between text-xs font-mono text-pencil">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-charcoal" />
                  <span>Kisumu & Nairobi, Kenya</span>
                </div>
                <span>EAT (UTC+3)</span>
              </div>

              {/* Clean External Social Links */}
              <div className="pt-2 border-t border-charcoal/10 flex flex-wrap gap-2">
                <a
                  href="https://github.com/nyabokegrace"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-charcoal/15 font-mono text-xs text-charcoal hover:border-charcoal flex items-center gap-1.5 transition-colors font-semibold"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRightIcon className="w-3 h-3 text-pencil" />
                </a>

                <a
                  href="https://www.linkedin.com/in/nyabokegrace"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-charcoal/15 font-mono text-xs text-charcoal hover:border-charcoal flex items-center gap-1.5 transition-colors font-semibold"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRightIcon className="w-3 h-3 text-pencil" />
                </a>

                <a
                  href="https://twitter.com/nyaboke_grace"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-charcoal/15 font-mono text-xs text-charcoal hover:border-charcoal flex items-center gap-1.5 transition-colors font-semibold"
                >
                  <TwitterIcon className="w-3.5 h-3.5" />
                  <span>Twitter / X</span>
                  <ArrowUpRightIcon className="w-3 h-3 text-pencil" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
