'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { Award, Camera, Users, Zap } from 'lucide-react'

const stats = [
  {
    icon: Camera,
    number: '100+',
    label: 'Professional Shoots',
    description: 'Collaborated with renowned photographers'
  },
  {
    icon: Users,
    number: '50+',
    label: 'Brand Collaborations',
    description: 'Worked with leading fashion brands'
  },
  {
    icon: Award,
    number: '5+',
    label: 'Years Experience',
    description: 'Professional modeling career'
  },
  {
    icon: Zap,
    number: '25+',
    label: 'Magazine Features',
    description: 'Published in fashion publications'
  }
]

const skills = [
  'Fashion Modeling',
  'Editorial Photography',
  'Commercial Advertising',
  'Runway Experience',
  'Portrait Photography',
  'Brand Ambassadorship'
]

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
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
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left Column - Image */}
          <motion.div
            variants={itemVariants}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-primary-100">
              <Image
                src="/assets/IMG-20250816-WA0046.jpg"
                alt="Tarak Md Shabbir - Professional Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 glass-effect p-6 rounded-xl text-center backdrop-blur-lg bg-white/90 border border-white/20 shadow-xl"
              >
                <div className="text-2xl font-bold text-primary-900 mb-1">6'2"</div>
                <div className="text-sm text-primary-600 font-medium">Height</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2"
          >
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <h2 className="text-4xl lg:text-6xl font-serif font-bold text-primary-900 mb-6">
                ABOUT
                <br />
                <span className="text-primary-700">TARAK</span>
              </h2>
              <div className="w-16 h-0.5 bg-primary-600 mb-8" />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="prose prose-lg max-w-none mb-8"
            >
              <p className="text-primary-700 leading-relaxed mb-6">
                I am <strong className="text-primary-900">Tarak Md Shabbir</strong>, a dedicated fashion model 
                with a passion for bringing creative visions to life. With over 5 years of experience 
                in the fashion industry, I have worked with renowned photographers, designers, and brands 
                to create compelling visual stories.
              </p>
              
              <p className="text-primary-700 leading-relaxed mb-6">
                My approach to modeling combines professionalism with artistic expression, ensuring 
                that every shoot delivers exceptional results. I believe in the power of fashion 
                to communicate emotion and inspire confidence.
              </p>
              
              <p className="text-primary-700 leading-relaxed">
                Based in Bangladesh, I am available for international assignments and collaborate 
                with clients worldwide to create impactful fashion content.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Specializations</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary-900 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-800 transition-colors duration-300"
                onClick={() => {
                  try {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  } catch {
                    window.location.hash = 'contact'
                  }
                }}
              >
                Let's Work Together
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 lg:mt-28"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-primary-50 hover:bg-primary-100 transition-colors duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-primary-900 text-white rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <IconComponent size={24} />
                  </motion.div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="text-3xl font-bold text-primary-900 mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  
                  <div className="text-lg font-semibold text-primary-800 mb-1">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-primary-600">
                    {stat.description}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection