'use client'

import { useEffect, useRef } from 'react'

/**
 * Observe a single element. Adds "visible" class when it enters the viewport.
 * The CSS handles the actual animation — this hook just flips the class.
 *
 * @param threshold  Fraction of element visible before triggering (default 0.15)
 * @param rootMargin IntersectionObserver rootMargin (default '-40px')
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
  rootMargin = '-40px'
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Already visible from a previous render (e.g. fast-refresh)
    if (el.classList.contains('visible')) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}

/**
 * Observe a container. When it enters the viewport, adds "visible" to every
 * direct child that has a reveal class. Children with data-delay attributes
 * stagger via CSS transition-delay — no setTimeout needed.
 *
 * @param threshold  Fraction of container visible before triggering (default 0.1)
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.1
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = Array.from(container.children) as HTMLElement[]
          children.forEach((child) => child.classList.add('visible'))
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
