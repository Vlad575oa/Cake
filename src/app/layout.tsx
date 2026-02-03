import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { SmoothScroll } from '@/components/providers/SmoothScroll'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nano-banana.com'),
  title: {
    default: 'Nano Banana | Premium Cake Collection',
    template: '%s | Nano Banana',
  },
  description: 'Experience the future of freshness with Nano Banana. Premium chocolate cakes crafted with precision and passion.',
  keywords: [
    'chocolate cakes',
    'premium desserts',
    'nano banana',
    'luxury confectionery',
    'artisanal cakes',
  ],
  authors: [{ name: 'Nano Banana' }],
  creator: 'Nano Banana',
  publisher: 'Nano Banana',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Nano Banana',
    title: 'Nano Banana | Future of Freshness',
    description: 'Premium chocolate cakes crafted with precision and passion.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nano Banana | Premium Cakes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nano Banana | Future of Freshness',
    description: 'Premium chocolate cakes crafted with precision and passion.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={cn(outfit.variable, "bg-background text-foreground antialiased selection:bg-primary/20 font-sans")}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
