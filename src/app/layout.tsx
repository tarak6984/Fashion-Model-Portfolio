import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tarak Md Shabbir - Fashion Model Portfolio',
  description: 'Professional fashion modeling portfolio of Tarak Md Shabbir. Discover striking photographs and professional modeling work.',
  keywords: ['fashion model', 'male model', 'Tarak Md Shabbir', 'portfolio', 'modeling', 'fashion photography'],
  authors: [{ name: 'Tarak Md Shabbir' }],
  openGraph: {
    title: 'Tarak Md Shabbir - Fashion Model Portfolio',
    description: 'Professional fashion modeling portfolio showcasing striking photographs and professional work.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarak Md Shabbir - Fashion Model Portfolio',
    description: 'Professional fashion modeling portfolio showcasing striking photographs and professional work.',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-primary-900 font-sans antialiased">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}