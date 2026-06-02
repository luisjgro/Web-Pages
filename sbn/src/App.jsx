import { useRef, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import SubPage from './pages/SubPage'

function HomePage() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onScroll = () => {
      const opacity = 1 - (window.scrollY / 400)
      el.style.opacity = Math.max(0, opacity)
      el.style.transform = `translateY(${window.scrollY * 0.2}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Header />

      <main id="main-content">
        <section className="hero-section" ref={heroRef}>
          <div className="hero-content">
            <h1>El mundo <em>también</em> tiene historias que valen la pena</h1>
            <p>Creado para dar a conocer noticias que construyen, inspiran y sanan, a través de historias que te reconcilian con el mundo…¡¡ Y porque lo bueno también merece portada!!</p>
            <div className="hero-divider"></div>
          </div>
        </section>

        <div className="container">
          <h2 className="section-title">Hoy destacamos</h2>
          <div className="articles-grid">
            <article className="article-card">
              <div className="article-card__image">🌱</div>
              <div className="article-card__body">
                <div className="article-card__category">Medio Ambiente</div>
                <h3 className="article-card__title">Comunidad costera logra reforestar 50 kilómetros de manglares</h3>
                <p className="article-card__excerpt">Más de 2.000 voluntarios participaron en la iniciativa que devolvió la vida a ecosistemas clave para la biodiversidad y la protección contra tormentas.</p>
                <div className="article-card__meta">28 de mayo, 2026 — 4 min de lectura</div>
              </div>
            </article>
            <article className="article-card">
              <div className="article-card__image">🔬</div>
              <div className="article-card__body">
                <div className="article-card__category">Ciencia</div>
                <h3 className="article-card__title">Nueva batería de origen vegetal promete energía limpia y accesible</h3>
                <p className="article-card__excerpt">Investigadores desarrollan una batería biodegradable a base de celulosa que podría reemplazar las baterías de litio en dispositivos de bajo consumo.</p>
                <div className="article-card__meta">26 de mayo, 2026 — 6 min de lectura</div>
              </div>
            </article>
            <article className="article-card">
              <div className="article-card__image">📚</div>
              <div className="article-card__body">
                <div className="article-card__category">Cultura</div>
                <h3 className="article-card__title">Bibliotecas móviles llevan lectura a comunidades rurales del país</h3>
                <p className="article-card__excerpt">Un programa de bibliotecas itinerantes ha logrado que más de 15.000 niños y adultos tengan acceso a libros en zonas donde antes no llegaba ningún servicio de lectura.</p>
                <div className="article-card__meta">24 de mayo, 2026 — 3 min de lectura</div>
              </div>
            </article>
            <article className="article-card">
              <div className="article-card__image">🤝</div>
              <div className="article-card__body">
                <div className="article-card__category">Sociedad</div>
                <h3 className="article-card__title">Programa de mentoría reduce brecha educativa en 40%</h3>
                <p className="article-card__excerpt">Estudiantes de secundaria que participaron en el programa de mentoría mostraron mejoras significativas en matemáticas y comprensión lectora en solo un año.</p>
                <div className="article-card__meta">22 de mayo, 2026 — 5 min de lectura</div>
              </div>
            </article>
            <article className="article-card">
              <div className="article-card__image">🌍</div>
              <div className="article-card__body">
                <div className="article-card__category">Mundo</div>
                <h3 className="article-card__title">Acuerdo histórico: 50 países se comprometen a eliminar plásticos de un solo uso</h3>
                <p className="article-card__excerpt">El tratado, firmado en la cumbre de Ottawa, establece metas vinculantes para la reducción progresiva de plásticos con un horizonte de 2030.</p>
                <div className="article-card__meta">20 de mayo, 2026 — 4 min de lectura</div>
              </div>
            </article>
            <article className="article-card">
              <div className="article-card__image">🏥</div>
              <div className="article-card__body">
                <div className="article-card__category">Sociedad</div>
                <h3 className="article-card__title">Hospital público implementa modelo de atención que reduce esperas un 60%</h3>
                <p className="article-card__excerpt">El nuevo sistema de triaje inteligente y citas digitales ha transformado la experiencia de miles de pacientes en el sistema de salud pública.</p>
                <div className="article-card__meta">18 de mayo, 2026 — 7 min de lectura</div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category/:slug" element={<SubPage />} />
      </Routes>
      <ScrollToTop />
    </>
  )
}
