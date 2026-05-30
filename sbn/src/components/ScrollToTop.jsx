import { useState, useEffect } from 'react'
import './ScrollToTop.css'

export default function ScrollToTop() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const visible = scrollY > 300

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`scroll-to-top${visible ? ' scroll-to-top--visible' : ''}`}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}
