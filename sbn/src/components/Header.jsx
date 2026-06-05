import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { allArticles } from '../data/articles'
import logo from '../assets/icono_light.png'
import './Header.css'
import './MobileHeader.css'

const navCategories = [
  { name: 'Inicio', path: '/' },
  {
    name: 'Noticias',
    path: '/noticias',
    subcategories: [
      { name: 'Local', path: '/noticias/local' },
      { name: 'Estatal', path: '/noticias/estatal' },
      { name: 'Nacional', path: '/noticias/nacional' },
      { name: 'Internacional', path: '/noticias/internacional' },
    ]
  },
  {
    name: 'Ciencia',
    path: '/ciencia',
    subcategories: [
      { name: 'Ciencia y Tecnología', path: '/ciencia/tecnologia' },
      { name: 'Medicina', path: '/ciencia/medicina' },
      { name: 'Psicología', path: '/ciencia/psicologia' },
      { name: 'Medio Ambiente', path: '/ciencia/medio-ambiente' },
    ]
  },
  {
    name: 'Inspiración',
    path: '/inspiracion',
    subcategories: [
      { name: 'Historias que Inspiran', path: '/inspiracion/historias' },
      { name: 'Héroes de Carne y Hueso', path: '/inspiracion/heroes' },
      { name: 'Mujeres Talentosas', path: '/inspiracion/mujeres' },
      { name: 'Entrevistas', path: '/inspiracion/entrevistas' },
    ]
  },
  {
    name: 'Cultura',
    path: '/cultura',
    subcategories: [
      { name: 'Cultura', path: '/cultura/cultura' },
      { name: 'Consejos', path: '/cultura/consejos' },
      { name: 'Deporte', path: '/cultura/deporte' },
      { name: 'Economía', path: '/cultura/economia' },
    ]
  }
]

export default function Header() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  const { pathname } = useLocation()

  const activeCat = (() => {
    if (pathname === '/') return 'Inicio'
    if (pathname.startsWith('/noticias')) return 'Noticias'
    if (pathname.startsWith('/ciencia')) return 'Ciencia'
    if (pathname.startsWith('/inspiracion')) return 'Inspiración'
    if (pathname.startsWith('/cultura')) return 'Cultura'
    return ''
  })()

  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openMobileCategory, setOpenMobileCategory] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [dateStr, setDateStr] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [notifOpen, setNotifOpen] = useState(false)
  const searchRef = useRef(null)

  const results = useMemo(() => {
    if (!query.trim()) return []
    const normalize = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const q = normalize(query)
    return allArticles.filter(a => {
      return normalize(a.title).includes(q) ||
             normalize(a.category).includes(q) ||
             normalize(a.excerpt).includes(q)
    }).slice(0, 5)
  }, [query])

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
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  })



  useEffect(() => {
    if (!menuOpen && !notifOpen) return
    function onKeyDown(e) {
      if (e.key === 'Escape') { setMenuOpen(false); setNotifOpen(false) }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen, notifOpen])

  useEffect(() => {
    if (!searchOpen) return
    function handleClick(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false)
        setQuery('')
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [searchOpen])

  const toggleTheme = () => setIsDark(p => !p)
  const closeMenu = () => { setMenuOpen(false); setOpenMobileCategory(null) }
  const toggleMobileCategory = (categoryName) => {
    console.log('toggle llamado:', categoryName, 'actual:', openMobileCategory)
    setOpenMobileCategory(prev => prev === categoryName ? null : categoryName);
  }
  const openSearch = () => setSearchOpen(p => !p)
  const closeNotif = useCallback(() => setNotifOpen(false), [])

  const showDropdown = searchOpen && query.trim()

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
              {navCategories.map(cat => (
                <li
                  key={cat.name}
                  className="nav-item"
                  onMouseEnter={() => setOpenDropdown(cat.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {cat.path ? (
                    <Link to={cat.path} className={`nav-link${activeCat === cat.name ? ' active' : ''}`}>{cat.name}</Link>
                  ) : (
                    <a href="#" className={`nav-link${activeCat === cat.name ? ' active' : ''}`}>{cat.name}</a>
                  )}
                  {cat.subcategories && (
                    <div className={`nav-dropdown${openDropdown === cat.name ? ' visible' : ''}`}>
                      {cat.subcategories.map(sub => (
                        <Link key={sub.name} to={sub.path} className={`nav-dropdown-link${pathname === sub.path ? ' active' : ''}`}>{sub.name}</Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="main-header__actions">
            <div className="search-wrapper" ref={searchRef}>
              <input
                type="text"
                className={`search-input${searchOpen ? ' open' : ''}`}
                placeholder="Buscar noticias..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => { if (e.key === 'Escape') { setSearchOpen(false); setQuery('') } }}
              />
              <button className="search-btn" aria-label="Buscar" onClick={openSearch}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
              </button>
              {showDropdown && (
                <div className="search-dropdown">
                  {results.length > 0 ? (
                    results.map(r => (
                      <Link
                        key={r.slug}
                        to={`/articulo/${r.slug}`}
                        className="search-dropdown__item"
                        onClick={() => { setSearchOpen(false); setQuery('') }}
                      >
                        <img className="search-dropdown__img" src={`https://picsum.photos/40/40?random=${r.img}`} alt="" loading="lazy" />
                        <div className="search-dropdown__info">
                          <span className="search-dropdown__title">{r.title}</span>
                          <span className="search-dropdown__category">{r.category}</span>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="search-dropdown__empty">No se encontraron noticias</div>
                  )}
                </div>
              )}
            </div>
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
            <button className="notif-btn" onClick={() => setNotifOpen(true)}>🔔 Notificaciones</button>
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
            {navCategories.map(cat => (
              <li key={cat.name} className="mobile-nav-item">
                {cat.subcategories ? (
                  <>
                    <div className="mobile-nav-top">
                      <Link to={cat.path} className={activeCat === cat.name ? 'active' : ''} onClick={closeMenu}>{cat.name}</Link>
                      <button
                        className={`mobile-dropdown-toggle${openMobileCategory === cat.name ? ' expanded' : ''}`}
                        onClick={() => toggleMobileCategory(cat.name)}
                        aria-label={`${openMobileCategory === cat.name ? 'Colapsar' : 'Expandir'} subcategorías de ${cat.name}`}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M3 4.5L6 7.5L9 4.5" />
                        </svg>
                      </button>
                    </div>
                    <div className={`mobile-sub-list${openMobileCategory === cat.name ? ' expanded' : ''}`}>
                      {cat.subcategories.map(sub => (
                        <Link key={sub.name} to={sub.path} className={pathname === sub.path ? 'active' : ''} onClick={closeMenu}>{sub.name}</Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={cat.path} className={activeCat === cat.name ? 'active' : ''} onClick={closeMenu}>{cat.name}</Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mobile-cta">
            <button className="notif-btn" onClick={() => { closeMenu(); setNotifOpen(true) }}>🔔 Notificaciones</button>
          </div>
        </nav>
      </div>

      {notifOpen && (
        <div className="notif-overlay" onClick={closeNotif}>
          <div className="notif-modal" onClick={e => e.stopPropagation()}>
            <button className="notif-modal__close" onClick={closeNotif} aria-label="Cerrar">✕</button>
            <div className="notif-modal__icon">🔔</div>
            <h2 className="notif-modal__title">Activa las notificaciones</h2>
            <p className="notif-modal__desc">Pronto podrás recibir alertas de las mejores noticias del día directamente en tu dispositivo.</p>
            <span className="notif-modal__badge">Próximamente</span>
            <button className="notif-modal__action" onClick={closeNotif}>Entendido</button>
          </div>
        </div>
      )}

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
