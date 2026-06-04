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
    <header className={`fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-7xl -translate-x-1/2 border transition duration-300 ${
      scrolled
        ? 'border-slate-950/10 bg-white/95 text-slate-950 shadow-[0_18px_60px_rgba(15,23,42,.12)] backdrop-blur-xl'
        : 'border-white/15 bg-slate-950/58 text-white shadow-[0_18px_60px_rgba(0,0,0,.24)] backdrop-blur-xl'
    }`}>
      <div className="mx-auto flex items-center justify-between px-4 py-3 sm:px-5">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3">
            <span className={`flex h-11 w-11 items-center justify-center bg-white text-lg font-black ${scrolled ? 'text-orange-700' : 'text-slate-950'}`}>
              V
            </span>
            <span className="space-y-1">
              <span className={`block text-xl font-black tracking-tight ${scrolled ? 'text-slate-950' : 'text-white'}`}>Velar Info</span>
              <span className={`block text-xs uppercase tracking-[0.28em] ${scrolled ? 'text-slate-500' : 'text-white/58'}`}>Powered by AI</span>
            </span>
          </Link>

          <nav className={`hidden items-center gap-6 text-sm font-bold md:flex ${scrolled ? 'text-slate-700' : 'text-white/78'}`}>
            {navGroups.map((group) => (
              <div key={group.label} className="group relative">
                <button className={`inline-flex items-center gap-1 transition ${scrolled ? 'hover:text-orange-700' : 'hover:text-cyan-200'}`}>
                  {group.label} <ChevronDown size={14} />
                </button>
                <div className="invisible pointer-events-none absolute left-0 top-full z-30 mt-3 w-80 border border-slate-950/10 bg-white/95 p-4 opacity-0 shadow-[0_18px_60px_rgba(15,23,42,.14)] backdrop-blur-xl transition duration-200 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100">
                  <ul className="space-y-2 text-sm text-slate-700">
                    {group.items.map((item) => {
                      const active = item.href && pathname === item.href
                      return (
                        <li key={item.label}>
                          <Link
                            href={item.href ?? '#'}
                            className={`block px-3 py-2 transition ${active ? 'bg-slate-950 text-white' : 'hover:bg-slate-100 hover:text-orange-700'
                              }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            ))}
            <Link href="/company/contact" className={`transition ${scrolled ? 'hover:text-orange-700' : 'hover:text-cyan-200'}`}>
              Contact Us
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/company/contact" className="hidden bg-orange-600 px-5 py-2.5 text-sm font-black text-white transition hover:bg-orange-700 md:inline-flex">
            Get a Free Demo
          </Link>

          <button
            aria-label="Open mobile menu"
            className="inline-flex border border-slate-950/10 bg-white p-3 text-slate-950 transition hover:border-orange-700 hover:text-orange-700 md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-50 bg-white/96 px-6 py-6 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold text-slate-950">Velar Info</div>
                <p className="text-sm text-slate-500">Powered by AI</p>
              </div>
              <button
                aria-label="Close mobile menu"
                className="border border-slate-950/10 bg-white p-2 text-slate-950"
                onClick={() => setMenuOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-10 space-y-6 text-slate-700">
              {navGroups.map((group) => (
                <div key={group.label}>
                  <div className="mb-3 flex items-center justify-between text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    <span>{group.label}</span>
                    <ArrowRight size={16} />
                  </div>
                  <div className="space-y-3 border border-slate-950/10 bg-slate-50 p-4">
                    {group.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href ?? '#'}
                        onClick={() => setMenuOpen(false)}
                    className="block w-full px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-white hover:text-orange-700"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <Link href="/company/contact" onClick={() => setMenuOpen(false)} className="w-full bg-slate-950 px-5 py-3 text-center text-sm font-black text-white">
                Get a Free Demo
              </Link>
              <Link
                href="/company/contact"
                className="w-full border border-slate-950/10 bg-white px-5 py-3 text-sm font-black text-slate-950"
                onClick={() => setMenuOpen(false)}
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
