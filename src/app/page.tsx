'use client'

import dynamic from 'next/dynamic'
import ErrorBoundary from '@/components/ErrorBoundary'
import HeroSection from '@/components/HeroSection'

// Dynamically import components that are not immediately visible
const PortfolioGallery = dynamic(() => import('@/components/PortfolioGallery'), {
  loading: () => <div className="min-h-screen flex items-center justify-center bg-primary-50"><div className="animate-pulse text-primary-700">Loading Gallery...</div></div>
})

const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center bg-white"><div className="animate-pulse text-primary-700">Loading About...</div></div>
})

const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center bg-primary-900"><div className="animate-pulse text-white">Loading Contact...</div></div>
})

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen">
        <HeroSection />
        <PortfolioGallery />
        <AboutSection />
        <ContactSection />
      </main>
    </ErrorBoundary>
  )
}
