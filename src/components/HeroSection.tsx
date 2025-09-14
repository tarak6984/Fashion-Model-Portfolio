'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, Play, Pause, Volume2, VolumeX } from 'lucide-react'
import Image from 'next/image'

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
        setIsVideoPlaying(false)
      } else {
        videoRef.current.play()
        setIsVideoPlaying(true)
      }
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false)
    try {
      const element = document.getElementById(sectionId.toLowerCase())
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } catch (error) {
      console.warn('Smooth scroll not supported, falling back to regular scroll')
      window.location.hash = sectionId.toLowerCase()
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Skip to main content link for accessibility */}
      <a
        href="#portfolio"
        className="absolute -top-40 left-4 z-50 bg-white text-primary-900 px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:top-4 transition-all duration-300"
      >
        Skip to main content
      </a>
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="video-background"
          poster="/assets/IMG-20250816-WA0043.jpg"
          preload="metadata"
        >
          <source src="/assets/mrexplorer15_7549987260339539218-no-watermark.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <Image
            src="/assets/IMG-20250816-WA0043.jpg" 
            alt="Tarak Md Shabbir - Fashion Model"
            fill
            className="object-cover"
            priority
          />
        </video>
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 flex justify-between items-center p-6 lg:p-8"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-white font-serif text-xl lg:text-2xl font-semibold"
        >
          TARAK MD SHABBIR
        </motion.div>
        
        <div className="hidden md:flex space-x-8 text-white font-medium">
          {['Portfolio', 'About', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.1, color: '#f1f3f4' }}
              className="cursor-pointer transition-colors hover:text-primary-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md px-2 py-1"
              aria-label={`Navigate to ${item} section`}
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md p-2"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.nav>

      {/* Video Controls */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute top-20 right-6 md:top-24 md:right-8 z-20 flex space-x-2 md:space-x-3"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleVideoPlayback}
          className="w-10 h-10 bg-black bg-opacity-30 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-opacity-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
        >
          {isVideoPlaying ? <Pause size={18} /> : <Play size={18} />}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMute}
          className="w-10 h-10 bg-black bg-opacity-30 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-opacity-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </motion.button>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-8">
        <div className="text-center text-white max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6"
          >
            FASHION
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl font-light italic">
              MODEL
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-24 h-0.5 bg-white mx-auto mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Redefining elegance through professional modeling and fashion photography.
            Discover a portfolio that speaks to the art of style and sophistication.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              whileTap={{ scale: 0.98 }}
              className="glass-effect px-8 py-3 rounded-full font-medium text-white border border-white/30 backdrop-blur-md transition-all duration-300"
              onClick={() => {
                try {
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
                } catch {
                  window.location.hash = 'portfolio'
                }
              }}
            >
              VIEW PORTFOLIO
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-full font-medium text-white border border-white hover:bg-white hover:text-primary-900 transition-all duration-300"
              onClick={() => {
                try {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                } catch {
                  window.location.hash = 'contact'
                }
              }}
            >
              GET IN TOUCH
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white cursor-pointer"
          onClick={() => {
            try {
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
            } catch {
              window.location.hash = 'portfolio'
            }
          }}
        >
          <span className="text-sm font-light mb-2 tracking-wider">SCROLL</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-95 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md p-2"
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </motion.button>
              
              {['Portfolio', 'About', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  onClick={() => handleNavClick(item)}
                  className="text-white text-2xl font-serif font-medium hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md px-4 py-2 transition-colors"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default HeroSection
