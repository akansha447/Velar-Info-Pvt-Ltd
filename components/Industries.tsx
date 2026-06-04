"use client"

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { industryData } from '../lib/constants'

export default function Industries() {
  return (
    <section id="industries" className="bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[.82fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Industries</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-black leading-[1.04] tracking-normal text-white sm:text-6xl">
              Deep industry knowledge meets smart technology.
            </h2>
          </div>
          <p className="max-w-2xl text-base font-semibold leading-8 text-white/64 lg:ml-auto">
            We build AI systems around sector-specific workflows, compliance expectations, data structures, and customer journeys.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industryData.map((industry, index) => (
            <Link
              key={industry.id}
              href={`/industries#${industry.id}`}
              className="group relative min-h-[420px] overflow-hidden border border-white/10 bg-slate-900"
            >
              <img src={industry.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,.12),rgba(2,6,23,.94))]" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">0{index + 1}</span>
                <h3 className="mt-4 text-2xl font-black leading-tight text-white">{industry.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/68">{industry.summary}</p>
                <ul className="mt-5 grid gap-2 text-sm text-white/72">
                  {industry.cases.slice(0, 3).map((caseItem) => (
                    <li key={caseItem} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 bg-orange-500" />
                      {caseItem}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-white">
                  Explore industry
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
