"use client"

import { useState, useEffect, useRef } from "react"

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = false,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when intersection status changes
        const isVisible = entry.isIntersecting

        if (isVisible) {
          setIsInView(true)
          if (triggerOnce) {
            setHasTriggered(true)
          }
        } else {
          // Only set to false if we're not using triggerOnce or it hasn't triggered yet
          if (!triggerOnce || !hasTriggered) {
            setIsInView(false)
          }
        }
      },
      { threshold, rootMargin },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered])

  return { ref, isInView }
}
