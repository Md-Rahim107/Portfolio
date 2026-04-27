import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveSection } from '../store/uiSlice'

/**
 * Watches scroll position and dispatches the currently-visible
 * section ID to the Redux store (ui.activeSection).
 */
export function useScrollSpy(sectionIds) {
  const dispatch = useDispatch()

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 120
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          dispatch(setActiveSection(id))
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // run once on mount
    return () => window.removeEventListener('scroll', onScroll)
  }, [dispatch, sectionIds])
}
