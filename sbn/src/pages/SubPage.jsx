import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import ScrollToTop from '../components/ScrollToTop'
import Pagination from '../components/Pagination'
import AnimatedCard from '../components/AnimatedCard'
import { getArticlesByBadge } from '../data/articles'
import './SubPage.css'

const titles = {
  'noticias/local': 'Local',
  'noticias/estatal': 'Estatal',
  'noticias/nacional': 'Nacional',
  'noticias/internacional': 'Internacional',
  'ciencia/tecnologia': 'Ciencia y Tecnología',
  'ciencia/medicina': 'Medicina',
  'ciencia/psicologia': 'Psicología',
  'ciencia/medio-ambiente': 'Medio Ambiente',
  'inspiracion/historias': 'Historias que Inspiran',
  'inspiracion/heroes': 'Héroes de Carne y Hueso',
  'inspiracion/mujeres': 'Mujeres Talentosas',
  'inspiracion/entrevistas': 'Entrevistas',
  'cultura/cultura': 'Cultura',
  'cultura/consejos': 'Consejos',
  'cultura/deporte': 'Deporte',
  'cultura/economia': 'Economía',
}

export default function SubPage() {
  const { category, slug } = useParams()
  const key = `${category}/${slug}`
  const title = titles[key] || 'Categoría'

  const [page, setPage] = useState(1)
  const PER_PAGE = 6

  const allArticles = getArticlesByBadge(title)
  const totalPages = Math.ceil(allArticles.length / PER_PAGE)
  const currentArticles = allArticles.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  useEffect(() => {
    setPage(1)
  }, [key])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [key, page])

  const categoryNames = {
    noticias: 'Noticias',
    ciencia: 'Ciencia',
    inspiracion: 'Inspiración',
    cultura: 'Cultura',
  }
  const categoryName = categoryNames[category] || 'Categoría'

  const helmetTitle = `${title} — Solo Buenas Noticias`

  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
        <meta name="description" content={`Noticias de ${title} — Solo Buenas Noticias`} />
        <meta property="og:title" content={helmetTitle} />
        <meta property="og:description" content={`Noticias de ${title} — Solo Buenas Noticias`} />
        <meta property="og:image" content="/icono_favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <main id="main-content">
        <section className="subpage-hero">
          <div className="subpage-hero__content">
            <h1>{title}</h1>
            <div className="subpage-hero__divider" />
          </div>
        </section>

        <div className="container">
          {currentArticles.length > 0 ? (
            <>
              <Link to={`/${category}`} className="subpage-back-btn">← Volver a {categoryName}</Link>
              <div className="subpage-grid" style={{ paddingBottom: totalPages <= 1 ? '80px' : '24px' }}>
                {currentArticles.map((article, i) => (
                  <AnimatedCard key={article.slug} index={i}>
                    <article className="article-card">
                      <Link to={`/articulo/${article.slug}`} className="article-card__link">
                        <div className="article-card__image-wrap">
                          <img className="article-card__image" src={`https://picsum.photos/400/250?random=${article.img}`} alt="" loading="lazy" />
                          <span className="article-card__badge">{title}</span>
                        </div>
                        <div className="article-card__body">
                          <div className="article-card__category">{title}</div>
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
              <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
            </>
          ) : (
            <p className="subpage-hero__placeholder">Contenido próximamente...</p>
          )}
        </div>
      </main>
      <ScrollToTop />
    </>
  )
}
