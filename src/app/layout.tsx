import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Sava-Line | Premium Ventilation Solutions',
  description: 'High-performance invisible air diffusion systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(manrope.variable, inter.variable, "bg-background text-foreground antialiased selection:bg-white/20")}>
        {children}
      </body>
    </html>
  )
}
