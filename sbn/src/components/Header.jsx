import { useState, useEffect } from 'react'
import logo from '../assets/icono_light.png'
import './Header.css'

const navItems = ['Hoy', 'Sociedad', 'Ciencia', 'Cultura', 'Medio Ambiente', 'Mundo']

export default function Header() {
  const [isDark, setIsDark] = useState(() => {
    let val = false
    try {
      const saved = localStorage.getItem('sbn-theme')
      if (saved === 'dark') val = true
      else if (saved === null && window.matchMedia?.('(prefers-color-scheme: dark)').matches) val = true
    } catch { /* ignore */ }
    return val
  })

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dateStr, setDateStr] = useState('')

  useEffect(() => {
    const now = new Date()
    const str = now.toLocaleDateString('es-ES', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    })
    setTimeout(() => setDateStr(str), 0)
  }, [])

  useEffect(() => {
    const topBar = document.querySelector('.top-bar')
    const ticker = document.querySelector('.ticker')
    const nav = document.querySelector('.main-header')
    if (!topBar || !ticker || !nav) return

    const totalHeight = topBar.offsetHeight

    const onScroll = () => {
      const offset = Math.max(0, totalHeight - window.scrollY)
      nav.style.top = offset + 'px'
      setScrolled(window.scrollY > 0)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark)
    try {
      if (isDark) localStorage.setItem('sbn-theme', 'dark')
      else localStorage.removeItem('sbn-theme')
    } catch { /* ignore */ }
  }, [isDark])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    function onKeyDown(e) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const toggleTheme = () => setIsDark(p => !p)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>

      <div className="top-bar">
        <div className="container">
          <span className="top-bar__date">{dateStr}</span>
          <div className="top-bar__social">
            <a href="https://www.instagram.com/solo_buenas_noticias/" aria-label="Instagram" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/emma.delao/" aria-label="Facebook" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@SoloBuenasNoticiasSBN" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@solo_buenas_noticias" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={`main-header${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="main-header__logo">
            <a href="/" aria-label="Solo Buenas Noticias — Ir al inicio">
              <img src={logo} alt="Solo Buenas Noticias" style={{ height: 40, width: 'auto', verticalAlign: 'middle', display: 'block', alignSelf: 'center' }} />
            </a>
          </div>

          <nav className="main-header__nav" aria-label="Navegación principal">
            <ul>
              {navItems.map(item => (
                <li key={item}>
                  <a href="#" className={item === 'Hoy' ? 'active' : ''}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="main-header__actions">
            <button className="search-btn" aria-label="Buscar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>
            <button
              className={`theme-toggle${isDark ? ' dark' : ''}`}
              role="switch"
              aria-checked={isDark}
              aria-label="Cambiar tema oscuro / claro"
              onClick={toggleTheme}
            >
              <span className="theme-toggle__track">
                <span className="theme-toggle__icon theme-toggle__icon--sun" aria-hidden="true">☀️</span>
                <span className="theme-toggle__knob"></span>
                <span className="theme-toggle__icon theme-toggle__icon--moon" aria-hidden="true">🌙</span>
              </span>
            </button>
            <a href="#" className="btn btn--primary">Suscribirse</a>
          </div>

          <button
            className={`hamburger${menuOpen ? ' active' : ''}`}
            aria-label="Menú de navegación"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(p => !p)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-overlay${menuOpen ? ' active' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Navegación móvil">
          <ul>
            {navItems.map(item => (
              <li key={item}>
                <a href="#" className={item === 'Hoy' ? 'active' : ''} onClick={closeMenu}>{item}</a>
              </li>
            ))}
          </ul>
          <div className="mobile-cta">
            <a href="#" className="btn btn--primary" onClick={closeMenu}>Suscribirse</a>
          </div>
        </nav>
      </div>

      <div className="ticker">
        <div className="container">
          <div className="ticker__inner">
            <span className="ticker__label">✦ Buena noticia del día</span>
            <div className="ticker__track-wrap">
              <div className="ticker__track">
                <span>Científicos desarrollan un método revolucionario para limpiar los océanos en una década</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
