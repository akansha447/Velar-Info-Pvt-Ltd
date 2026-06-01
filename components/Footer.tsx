import { Linkedin, Twitter, Instagram } from 'lucide-react'

const links = {
  services: ['AI Chatbots', 'Voice AI', 'Automation', 'Custom AI', 'Consulting'],
  solutions: ['Enterprise', 'SMB & Startups', 'Government'],
  company: ['About Us', 'Blog', 'Careers', 'Privacy Policy', 'Terms'],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 md:px-8">
        <div className="space-y-4">
          <div className="text-2xl font-semibold text-white">Velar Info Pvt Ltd</div>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            Intelligent AI Solutions for a Smarter India, built for enterprises, SMBs, startups, and government organizations.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Services</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {links.services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Solutions</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {links.solutions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Company</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {links.company.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 text-sm text-slate-400">
            <p>📧 hello@velarinfo.com</p>
            <p>📞 +91-XXXXXXXXXX</p>
            <p>📍 India</p>
          </div>
          <div className="mt-6 flex items-center gap-3 text-slate-200">
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-slate-950/95 px-6 py-5 text-center text-sm text-slate-500 md:px-8">
        © 2026 Velar Info Pvt Ltd. All Rights Reserved.
      </div>
    </footer>
  )
}
