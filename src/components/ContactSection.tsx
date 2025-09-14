'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tarak@example.com',
    href: 'mailto:tarak@example.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 XXX-XXXX',
    href: 'tel:+880XXXXXXX'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: null
  }
]

const socialLinks = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com/tarakmdshabbir',
    color: 'hover:text-pink-500'
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://facebook.com/tarakmdshabbir',
    color: 'hover:text-blue-600'
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com/tarakmdshabbir',
    color: 'hover:text-sky-500'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/tarakmdshabbir',
    color: 'hover:text-blue-700'
  }
]

const ContactSection = () => {
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
    <section id="contact" className="py-20 lg:py-28 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-serif font-bold mb-6"
          >
            LET'S CREATE
            <br />
            <span className="text-primary-300">TOGETHER</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-0.5 bg-primary-300 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-primary-100 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to bring your vision to life? I'm available for collaborations, 
            fashion shoots, brand partnerships, and creative projects worldwide.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-8 text-primary-100"
            >
              Get In Touch
            </motion.h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary-800 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center">
                      <IconComponent size={20} className="text-primary-100" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-300 font-medium">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg text-primary-100 hover:text-white transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-lg text-primary-100">{item.value}</div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
            >
              <h4 className="text-xl font-semibold mb-6 text-primary-100">Follow My Journey</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center text-primary-200 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <IconComponent size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-8 text-primary-100"
            >
              Send a Message
            </motion.h3>
            
            <motion.form
              variants={containerVariants}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Your name"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-primary-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="What's this about?"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-primary-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell me about your project or collaboration idea..."
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-white text-primary-900 py-3 px-6 rounded-lg font-semibold hover:bg-primary-100 transition-colors duration-300"
                >
                  Send Message
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 pt-8 border-t border-primary-700 text-center"
        >
          <p className="text-primary-400 text-sm">
            © 2024 Tarak Md Shabbir. All rights reserved. | Professional Fashion Model Portfolio
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection