'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'motion/react'

/**
 * Observe a single element via Motion's useInView.
 * Adds "visible" class when in viewport — CSS handles the animation.
 * Drop-in replacement for the old IntersectionObserver version.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
  rootMargin = '-40px'
) {
  const ref     = useRef<T>(null)
  const isInView = useInView(ref as React.RefObject<Element>, {
    once:   true,
    margin: rootMargin as `${number}px`,
    amount: threshold,
  })

  useEffect(() => {
    if (isInView && ref.current && !ref.current.classList.contains('visible')) {
      ref.current.classList.add('visible')
    }
  }, [isInView])

  return ref
}

/**
 * Observe a container. Adds "visible" to every direct child when container
 * enters viewport. CSS data-delay attributes handle stagger timing.
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.1
) {
  const ref     = useRef<T>(null)
  const isInView = useInView(ref as React.RefObject<Element>, {
    once:   true,
    amount: threshold,
  })

  useEffect(() => {
    if (isInView && ref.current) {
      const children = Array.from(ref.current.children) as HTMLElement[]
      children.forEach((child) => {
        if (!child.classList.contains('visible')) child.classList.add('visible')
      })
    }
  }, [isInView])

  return ref
}
