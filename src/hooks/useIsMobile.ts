'use client'

import { useState, useEffect } from 'react'

/**
 * Returns true on touch/coarse-pointer devices or screens narrower than 768px.
 * Safe for SSR — defaults to false until mounted.
 * Used to disable heavy animations (parallax, 3D tilt) on mobile.
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => {
      setIsMobile(
        window.matchMedia('(pointer: coarse)').matches ||
        window.innerWidth < 768
      )
    }
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  return isMobile
}
