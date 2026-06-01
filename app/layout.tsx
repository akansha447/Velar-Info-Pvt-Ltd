import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Velar Info Pvt Ltd — AI Chatbots, Voice AI & Automation Workflows',
  description:
    'Velar Info delivers enterprise-grade AI Chatbots, Voice Agents, and Automation Workflows for Enterprises, SMBs, Startups, and Government.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-background text-slate-950">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col bg-background text-slate-950">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
