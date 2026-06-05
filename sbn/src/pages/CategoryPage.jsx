import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import AnimatedCard from '../components/AnimatedCard'
import { getArticlesByBadge } from '../data/articles'
import './CategoryPage.css'

const config = {
  noticias: {
    titulo: 'Noticias',
    descripcion: 'Las mejores noticias que construyen, informan y transforman nuestra sociedad.',
    tabs: ['Local', 'Estatal', 'Nacional', 'Internacional'],
    slugs: ['local', 'estatal', 'nacional', 'internacional'],
  },
  ciencia: {
    titulo: 'Ciencia',
    descripcion: 'Descubrimientos y avances científicos que están cambiando el mundo para bien.',
    tabs: ['Ciencia y Tecnología', 'Medicina', 'Psicología', 'Medio Ambiente'],
    slugs: ['tecnologia', 'medicina', 'psicologia', 'medio-ambiente'],
  },
  inspiracion: {
    titulo: 'Inspiración',
    descripcion: 'Historias que mueven al mundo y nos recuerdan la fuerza del espíritu humano.',
    tabs: ['Historias que Inspiran', 'Héroes de Carne y Hueso', 'Mujeres Talentosas', 'Entrevistas'],
    slugs: ['historias', 'heroes', 'mujeres', 'entrevistas'],
  },
  cultura: {
    titulo: 'Cultura',
    descripcion: 'Arte, tradición y sociedad: todo lo que nos define como comunidad.',
    tabs: ['Cultura', 'Consejos', 'Deporte', 'Economía'],
    slugs: ['cultura', 'consejos', 'deporte', 'economia'],
  },
}

export default function CategoryPage() {
  const { pathname } = useLocation()
  const category = pathname.replace(/^\//, '')
  const info = config[category] || config.noticias

  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    setActiveTab(0)
  }, [category])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [category, activeTab])

  const currentBadge = info.tabs[activeTab]
  const currentSlug = info.slugs[activeTab]
  const currentArticles = getArticlesByBadge(currentBadge).slice(0, 3)

  const helmetTitle = `${info.titulo} — Solo Buenas Noticias`
  const helmetDesc = info.descripcion

  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
        <meta name="description" content={helmetDesc} />
        <meta property="og:title" content={helmetTitle} />
        <meta property="og:description" content={helmetDesc} />
        <meta property="og:image" content="/icono_favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main id="main-content">
        <section className="catpage-hero">
          <div className="container">
            <h1 className="catpage-hero__title">{info.titulo}</h1>
            <p className="catpage-hero__subtitle">{info.descripcion}</p>
          </div>
        </section>

        <div className="container">
          <div className="catpage-tabs" role="tablist">
            {info.tabs.map((tab, i) => (
              <button
                key={tab}
                role="tab"
                aria-selected={i === activeTab}
                className={`catpage-tab${i === activeTab ? ' active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="catpage-grid">
            {currentArticles.map((article, i) => (
              <AnimatedCard key={article.slug} index={i}>
                <article className="article-card">
                  <Link to={`/articulo/${article.slug}`} className="article-card__link">
                    <div className="article-card__image-wrap">
                      <img className="article-card__image" src={`https://picsum.photos/400/250?random=${article.img}`} alt="" loading="lazy" />
                      <span className="article-card__badge">{info.tabs[activeTab]}</span>
                    </div>
                    <div className="article-card__body">
                      <div className="article-card__category">{info.tabs[activeTab]}</div>
                      <h3 className="article-card__title">{article.title}</h3>
                      <p className="article-card__excerpt">{article.excerpt}</p>
                      <div className="article-card__footer">
                        <span>👤 {article.author}</span>
                        <span>📅 {article.date}</span>
                        <span>⏱ {article.time} de lectura</span>
                      </div>
                    </div>
                  </Link>
                </article>
              </AnimatedCard>
            ))}
          </div>

          <Link to={`/${category}/${currentSlug}`} className="catpage-btn">Ver más {info.tabs[activeTab]} →</Link>
        </div>
      </main>
    </>)
  }
