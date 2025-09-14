'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const portfolioImages = [
  {
    src: '/assets/IMG-20250816-WA0043.jpg',
    alt: 'Tarak Md Shabbir - Professional Fashion Model',
    category: 'Fashion'
  },
  {
    src: '/assets/IMG-20250816-WA0046.jpg',
    alt: 'Tarak Md Shabbir - Portrait Photography',
    category: 'Portrait'
  },
  {
    src: '/assets/IMG_20250816_132950.jpg',
    alt: 'Tarak Md Shabbir - Editorial Fashion',
    category: 'Editorial'
  },
  {
    src: '/assets/IMG-20250816-WA0033.jpg',
    alt: 'Tarak Md Shabbir - Commercial Modeling',
    category: 'Commercial'
  },
  {
    src: '/assets/06c6eebf-1992-44b6-a0ae-b9f7eff715b0~1.jpg',
    alt: 'Tarak Md Shabbir - Fashion Photography',
    category: 'Fashion'
  },
  {
    src: '/assets/8e5f0c37-5793-49f9-b29a-fba75b9b28d2~1.jpg',
    alt: 'Tarak Md Shabbir - Studio Portrait',
    category: 'Portrait'
  }
]

const categories = ['All', 'Fashion', 'Portrait', 'Editorial', 'Commercial']

const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const filteredImages = selectedCategory === 'All' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    if (index >= 0 && index < filteredImages.length) {
      setSelectedImage(index)
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden'
      }
    }
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto'
    }
  }

  const nextImage = () => {
    if (selectedImage !== null && filteredImages.length > 0) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null && filteredImages.length > 0) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        switch (e.key) {
          case 'Escape':
            closeLightbox()
            break
          case 'ArrowRight':
            nextImage()
            break
          case 'ArrowLeft':
            prevImage()
            break
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, filteredImages.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-primary-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-primary-900 mb-6">
            PORTFOLIO
          </h2>
          <div className="w-24 h-0.5 bg-primary-600 mx-auto mb-8" />
          <p className="text-lg text-primary-700 max-w-2xl mx-auto leading-relaxed">
            A curated collection of professional fashion modeling work, showcasing versatility 
            and dedication to the craft of modeling.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-900 text-white'
                  : 'bg-white text-primary-700 hover:bg-primary-100 border border-primary-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${selectedCategory}-${index}`}
                variants={itemVariants}
                layout
                className="group cursor-pointer relative aspect-[4/5] overflow-hidden rounded-2xl bg-primary-100 focus:outline-none focus:ring-4 focus:ring-primary-400 focus:ring-opacity-50"
                onClick={() => openLightbox(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openLightbox(index)
                  }
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                tabIndex={0}
                role="button"
                aria-label={`View ${image.alt} in lightbox`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-medium opacity-90">{image.category}</p>
                    <p className="text-xs opacity-70 mt-1">Click to view</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                width={800}
                height={1000}
                className="object-contain max-h-[90vh] w-auto rounded-lg"
                quality={95}
              />
              
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-900 hover:bg-primary-100 transition-colors"
              >
                <X size={20} />
              </motion.button>

              {/* Navigation Arrows */}
              {filteredImages.length > 1 && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </motion.button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default PortfolioGallery