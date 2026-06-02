"use client"
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { testimonials } from '../lib/constants'

export default function Testimonials() {
    return (
        <section className="bg-[#f5f1ea] px-6 py-20 text-slate-950 sm:px-8 lg:px-10 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-700">Client Outcomes</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
                            Proof from teams using AI in the field.
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto">
                        Each engagement is designed around adoption: faster support, lower manual workload, and cleaner operational visibility.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: index * 0.08 }}
                            className="border border-slate-950/10 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,.08)]"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center bg-slate-950 text-white">
                                    <span className="text-lg font-semibold">{item.name.charAt(0)}</span>
                                </div>
                                <div>
                                    <p className="font-black text-slate-950">{item.name}</p>
                                    <p className="text-sm text-slate-500">{item.role}</p>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center gap-1 text-orange-600">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <Star key={idx} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="mt-6 leading-7 text-slate-700">&quot;{item.quote}&quot;</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
