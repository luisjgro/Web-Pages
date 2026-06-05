import { useRef, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AnimatedCard from './components/AnimatedCard'
import SubPage from './pages/SubPage'
import NotFound from './pages/NotFound'
import CategoryPage from './pages/CategoryPage'
import ArticlePage from './pages/ArticlePage'
import {
  getArticleBySlug, featuredSlug, featuredSideSlugs,
  homeArticleSlugs, noticiasArticleSlugs, cienciaArticleSlugs,
  inspiracionArticleSlugs, culturaArticleSlugs
} from './data/articles'

function renderArticleCard(a, i = 0) {
  return (
    <AnimatedCard key={a.slug} index={i}>
      <article className="article-card">
        <Link to={`/articulo/${a.slug}`} className="article-card__link">
          <div className="article-card__image-wrap">
            <img className="article-card__image" src={`https://picsum.photos/400/250?random=${a.img}`} alt="" loading="lazy" />
            <span className="article-card__badge">{a.badge}</span>
          </div>
          <div className="article-card__body">
            <div className="article-card__category">{a.category}</div>
            <h3 className="article-card__title">{a.title}</h3>
            <p className="article-card__excerpt">{a.excerpt}</p>
            <div className="article-card__footer">
              <span>👤 {a.author}</span>
              <span>📅 {a.date}</span>
              <span>⏱ {a.time} de lectura</span>
            </div>
          </div>
        </Link>
      </article>
    </AnimatedCard>
  )
}

function renderSection(title, linkTo, slugs, alt) {
  return (
    <section className={`cat-section${alt ? ' cat-section--alt' : ''}`} key={linkTo}>
      <div className="container">
        <div className="cat-section__header">
          <h2 className="cat-section__title">{title}</h2>
          <Link to={`/${linkTo}`} className="cat-section__link">Ver todo →</Link>
        </div>
        <div className="cat-section__grid">
          {slugs.map((slug, i) => {
            const a = getArticleBySlug(slug)
            return a ? renderArticleCard(a, i) : null
          })}
        </div>
      </div>
    </section>
  )
}

function HomePage() {
  const heroRef = useRef(null)
  const featured = getArticleBySlug(featuredSlug)
  const sideA = getArticleBySlug(featuredSideSlugs[0])
  const sideB = getArticleBySlug(featuredSideSlugs[1])

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
      <Helmet>
        <title>Solo Buenas Noticias — El mundo también tiene historias que valen la pena</title>
        <meta name="description" content="Noticias positivas, constructivas e inspiradoras de México y el mundo" />
        <meta property="og:title" content="Solo Buenas Noticias — El mundo también tiene historias que valen la pena" />
        <meta property="og:description" content="Noticias positivas, constructivas e inspiradoras de México y el mundo" />
        <meta property="og:image" content="/icono_favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />

      <main id="main-content">
        <section className="hero-section" ref={heroRef}>
          <div className="hero-content">
            <h1>El mundo <em>también</em> tiene historias que valen la pena</h1>
            <p>Creado para dar a conocer noticias que construyen, inspiran y sanan, a través de historias que te reconcilian con el mundo…¡¡ Y porque lo bueno también merece portada!!</p>
            <div className="hero-cta">
              <Link to="/noticias/local" className="hero-btn hero-btn--primary">Explorar noticias</Link>
              <Link to="/nosotros" className="hero-btn hero-btn--outline">Conoce nuestra misión</Link>
            </div>
            <div className="hero-divider"></div>
          </div>
        </section>

        {featured && (
          <section className="featured-section">
            <div className="container">
              <h2 className="featured-section__title">✦ Noticia del Día</h2>
              <div className="featured-grid">
                <AnimatedCard index={0}>
                <article className="featured-main">
                  <Link to={`/articulo/${featured.slug}`} className="featured-main__link">
                    <div className="featured-main__image-wrap">
                      <img className="featured-main__image" src="https://picsum.photos/800/450?random=10" alt="" loading="lazy" />
                      <span className="featured-main__badge">DESTACADO</span>
                    </div>
                    <div className="featured-main__body">
                      <div className="featured-main__category">{featured.category}</div>
                      <h3 className="featured-main__title">{featured.title}</h3>
                      <p className="featured-main__excerpt">{featured.excerpt}</p>
                      <div className="featured-main__footer">
                        <span>👤 {featured.author}</span>
                        <span>📅 {featured.date}</span>
                        <span>⏱ {featured.time} de lectura</span>
                      </div>
                      <span className="featured-main__cta">Leer más</span>
                    </div>
                  </Link>
                </article>
                </AnimatedCard>
                <div className="featured-side">
                  {sideA && (
                    <AnimatedCard index={1}>
                    <article className="featured-side__card">
                      <Link to={`/articulo/${sideA.slug}`} className="featured-side__link">
                        <div className="featured-side__image-wrap">
                          <img className="featured-side__image" src={`https://picsum.photos/400/200?random=11`} alt="" loading="lazy" />
                        </div>
                        <div className="featured-side__body">
                          <div className="featured-side__category">{sideA.category}</div>
                          <h3 className="featured-side__title">{sideA.title}</h3>
                          <span className="featured-side__date">📅 {sideA.date}</span>
                        </div>
                      </Link>
                    </article>
                    </AnimatedCard>
                  )}
                  {sideB && (
                    <AnimatedCard index={2}>
                    <article className="featured-side__card">
                      <Link to={`/articulo/${sideB.slug}`} className="featured-side__link">
                        <div className="featured-side__image-wrap">
                          <img className="featured-side__image" src={`https://picsum.photos/400/200?random=12`} alt="" loading="lazy" />
                        </div>
                        <div className="featured-side__body">
                          <div className="featured-side__category">{sideB.category}</div>
                          <h3 className="featured-side__title">{sideB.title}</h3>
                          <span className="featured-side__date">📅 {sideB.date}</span>
                        </div>
                      </Link>
                    </article>
                    </AnimatedCard>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="container">
          <h2 className="section-title">Hoy destacamos</h2>
          <div className="articles-grid">
            {homeArticleSlugs.map((slug, i) => {
              const a = getArticleBySlug(slug)
              return a ? renderArticleCard(a, i) : null
            })}
          </div>
        </div>

        {renderSection('Últimas de Noticias', 'noticias', noticiasArticleSlugs, true)}
        {renderSection('Últimas de Ciencia', 'ciencia', cienciaArticleSlugs, false)}
        {renderSection('Últimas de Inspiración', 'inspiracion', inspiracionArticleSlugs, true)}
        {renderSection('Últimas de Cultura', 'cultura', culturaArticleSlugs, false)}
      </main>
    </>
  )
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/noticias" element={<CategoryPage />} />
        <Route path="/ciencia" element={<CategoryPage />} />
        <Route path="/inspiracion" element={<CategoryPage />} />
        <Route path="/cultura" element={<CategoryPage />} />
        <Route path="/articulo/:slug" element={<ArticlePage />} />
        <Route path="/:category/:slug" element={<SubPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  )
}
