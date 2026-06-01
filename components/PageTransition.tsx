"use client"
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface PageTransitionProps {
    title: string
    description: string
    children: ReactNode
}

export default function PageTransition({ title, description, children }: PageTransitionProps) {
    return (
        <motion.main
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="min-h-screen bg-background px-6 py-16 sm:px-8 lg:px-10"
        >
            <div className="mx-auto max-w-7xl">
                <section className="mb-12 max-w-4xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">{title}</p>
                    <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">{description}</h1>
                </section>
                {children}
            </div>
        </motion.main>
    )
}
