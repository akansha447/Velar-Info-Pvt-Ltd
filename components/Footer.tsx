import Link from 'next/link'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { companyNavItems, industryNavItems, servicesData } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05080e] text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.15fr_1fr_1fr_1fr] lg:px-10">
        <div className="space-y-5">
          <div>
            <div className="text-2xl font-black text-white">Velar Info Pvt LTD</div>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.28em] text-slate-500">Powered by AI</p>
          </div>
          <p className="max-w-sm text-sm font-semibold leading-7 text-slate-400">
            Intelligent AI chatbots, voice agents, automation workflows, and custom AI platforms for enterprises, SMBs, startups, and public sector teams.
          </p>
          <div className="space-y-2 text-sm font-semibold text-slate-400">
            <p>sales@velarinfo.com</p>
            <p>+91-9811051060</p>
            <p>www.velarinfo.com</p>
            <p>X-20 First Floor ,Naveen Shahdara ,Delhi - 110032</p>
          </div>
          <div className="flex items-center gap-3 text-slate-200">
            <a href="#" aria-label="LinkedIn" className="border border-white/10 p-2 transition hover:border-orange-500 hover:text-orange-400">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="border border-white/10 p-2 transition hover:border-orange-500 hover:text-orange-400">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="border border-white/10 p-2 transition hover:border-orange-500 hover:text-orange-400">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.24em] text-slate-500">Services</h3>
          <ul className="mt-5 space-y-3 text-sm font-semibold text-slate-300">
            {servicesData.map((item) => (
              <li key={item.title}>
                <Link href={item.href ?? '/#services'} className="transition hover:text-orange-400">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.24em] text-slate-500">Industries</h3>
          <ul className="mt-5 space-y-3 text-sm font-semibold text-slate-300">
            {industryNavItems.slice(1).map((item) => (
              <li key={item.label}>
                <Link href={item.href ?? '/industries'} className="transition hover:text-orange-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.24em] text-slate-500">Company</h3>
          <ul className="mt-5 space-y-3 text-sm font-semibold text-slate-300">
            {companyNavItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition hover:text-orange-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/company/contact" className="mt-7 inline-flex bg-orange-600 px-5 py-3 text-sm font-black text-white transition hover:bg-orange-700">
            Start a Project
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-sm font-semibold text-slate-500 sm:px-8">
        Copyright © 2026 Velar Info Pvt LTD. All Rights Reserved.
      </div>
    </footer>
  )
}
