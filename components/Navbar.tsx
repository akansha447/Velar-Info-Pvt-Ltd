"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { navGroups } from '../lib/constants'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition duration-300 ${scrolled ? 'backdrop-blur-xl bg-[#05050f]/90 border-b border-white/10' : 'bg-transparent'
      }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <div className="space-y-1">
            <div className="text-white text-xl font-semibold tracking-tight">Velar Info</div>
            <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Powered by AI</p>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navGroups.map((group) => (
              <div key={group.label} className="group relative">
                <button className="inline-flex items-center gap-1 text-slate-200 transition hover:text-white">
                  {group.label} <ChevronDown size={14} />
                </button>
                <div className="absolute left-0 top-full z-30 mt-1 w-72 rounded-3xl border border-white/10 bg-white/5 p-4 opacity-0 shadow-glow transition duration-200 group-hover:opacity-100 group-hover:visible invisible group-hover:pointer-events-auto pointer-events-none backdrop-blur-xl">
                  <ul className="space-y-2 text-sm text-slate-200">
                    {group.items.map((item) => {
                      const active = item.href && pathname === item.href
                      return (
                        <li key={item.label}>
                          <a
                            href={item.href ?? '#'}
                            className={`block rounded-2xl px-3 py-2 transition ${active ? 'bg-gradient-to-r from-primaryFrom via-primaryMid to-primaryTo text-slate-950' : 'hover:bg-slate-950/70 hover:text-white'
                              }`}
                          >
                            {item.label}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full bg-gradient-to-r from-primaryFrom via-primaryMid to-primaryTo px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:opacity-95 md:inline-flex">
            Get a Free Demo
          </button>

          <button
            aria-label="Open mobile menu"
            className="inline-flex rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-primaryMid hover:text-white md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-50 bg-slate-950/95 px-6 py-6 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold text-white">Velar Info</div>
                <p className="text-sm text-slate-400">Powered by AI</p>
              </div>
              <button
                aria-label="Close mobile menu"
                className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200"
                onClick={() => setMenuOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-10 space-y-6 text-slate-200">
              {navGroups.map((group) => (
                <div key={group.label}>
                  <div className="mb-3 flex items-center justify-between text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                    <span>{group.label}</span>
                    <ArrowRight size={16} />
                  </div>
                  <div className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-4">
                    {group.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href ?? '#'}
                        onClick={() => setMenuOpen(false)}
                        className="block w-full rounded-2xl px-4 py-3 text-left text-sm text-slate-200 transition hover:bg-slate-900/80 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <button className="w-full rounded-full bg-gradient-to-r from-primaryFrom via-primaryMid to-primaryTo px-5 py-3 text-sm font-semibold text-slate-950">
                Get a Free Demo
              </button>
              <button
                className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100"
                onClick={() => setMenuOpen(false)}
              >
                Contact Sales
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
