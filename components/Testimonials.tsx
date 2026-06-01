"use client"
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { testimonials } from '../lib/constants'

export default function Testimonials() {
    return (
        <section className="px-6 py-20 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">What Our Clients Say</p>
                    <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">What Our Clients Say</h2>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: index * 0.08 }}
                            className="glass-card rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primaryFrom via-primaryMid to-primaryTo text-white">
                                    <span className="text-lg font-semibold">{item.name.charAt(0)}</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">{item.name}</p>
                                    <p className="text-sm text-slate-400">{item.role}</p>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center gap-1 text-cyan-300">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <Star key={idx} size={16} />
                                ))}
                            </div>
                            <p className="mt-6 text-slate-300 leading-7">“{item.quote}”</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
