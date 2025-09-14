'use client'

import { motion } from 'framer-motion'

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className="w-8 h-8 border-2 border-primary-300 border-t-primary-900 rounded-full"
      />
      <span className="ml-3 text-primary-700 font-medium">Loading...</span>
    </div>
  )
}

export default LoadingSpinner