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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://cake-lab.com'),
  title: {
    default: 'Cake | Премиум Коллекция',
    template: '%s | Cake',
  },
  description: 'Попробуйте будущее свежести с Cake. Премиальные торты, созданные с точностью и страстью.',
  keywords: [
    'торты',
    'премиум десерты',
    'cake',
    'кондитерская',
    'авторские торты',
  ],
  authors: [{ name: 'Cake' }],
  creator: 'Cake',
  publisher: 'Cake',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    siteName: 'Cake',
    title: 'Cake | Будущее Свежести',
    description: 'Премиальные торты, созданные с точностью и страстью.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cake | Премиум Десерты',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cake | Будущее Свежести',
    description: 'Премиальные торты, созданные с точностью и страстью.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
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
