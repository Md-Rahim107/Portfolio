import { useEffect, useRef } from 'react'

/**
 * Attaches IntersectionObserver to the returned ref.
 * Every child with class "fade-in" gets class "visible" when it enters the viewport.
 */
export function useFadeIn() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    const els = ref.current?.querySelectorAll('.fade-in') ?? []
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
