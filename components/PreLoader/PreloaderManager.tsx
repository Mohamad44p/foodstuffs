'use client'

import { useState, useEffect } from 'react'
import Preloader from './PreLoader'

export default function PreloaderManager({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    const hasSeenPreloader = localStorage.getItem('hasSeenPreloader')
    
    if (!hasSeenPreloader) {
      const timer = setTimeout(() => {
        setShowPreloader(false)
        localStorage.setItem('hasSeenPreloader', 'true')
      }, 3000)

      return () => clearTimeout(timer)
    } else {
      setShowPreloader(false)
    }
  }, [])

  if (showPreloader) {
    return <Preloader />
  }

  return <>{children}</>
}