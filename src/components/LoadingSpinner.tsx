'use client'

import { memo } from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showText?: boolean
}

const LoadingSpinner = memo(({ size = 'md', className = '', showText = true }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <div
        className={`border-2 border-primary-300 border-t-primary-900 rounded-full ${sizeClasses[size]} animate-spin`}
        role="status"
        aria-label="Loading"
      />
      {showText && (
        <span className="ml-3 text-primary-700 font-medium">Loading...</span>
      )}
    </div>
  )
})

LoadingSpinner.displayName = 'LoadingSpinner'

export default LoadingSpinner
