'use client'

import ErrorBoundary from '@/components/ErrorBoundary'
import HeroSection from '@/components/HeroSection'
import PortfolioGallery from '@/components/PortfolioGallery'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'

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
