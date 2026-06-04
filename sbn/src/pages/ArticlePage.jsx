import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NotFound from './NotFound'
import { getArticleBySlug, getRelatedArticles } from '../data/articles'
import './ArticlePage.css'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)
  const related = article ? getRelatedArticles(article, 3) : []

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!article) {
    return <NotFound />
  }

  return (
    <>
      <Header />
      <main id="main-content">
        <article className="article-page">
          <div className="article-page__container">
            <div className="article-page__header">
              <span className="article-page__badge">{article.badge}</span>
              <h1 className="article-page__title">{article.title}</h1>
              <p className="article-page__desc">{article.excerpt}</p>
              <div className="article-page__meta">
                <div className="article-page__author">
                  <img className="article-page__author-img" src={`https://picsum.photos/40/40?random=${article.img}`} alt="" />
                  <span>{article.author}</span>
                </div>
                <span>📅 {article.date}</span>
                <span>⏱ {article.time} de lectura</span>
              </div>
            </div>

            <figure className="article-page__figure">
              <img className="article-page__image" src={`https://picsum.photos/1200/600?random=${article.img + 100}`} alt={article.title} />
              <figcaption className="article-page__caption">{article.title}.</figcaption>
            </figure>

            <div className="article-page__body">
              {article.contenido.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </article>

        <section className="article-page__related">
          <div className="container">
            <h2 className="section-title">También te puede interesar</h2>
            <div className="articles-grid">
              {related.map((item) => (
                <article className="article-card" key={item.slug}>
                  <Link to={`/articulo/${item.slug}`} className="article-card__link">
                    <div className="article-card__image-wrap">
                      <img className="article-card__image" src={`https://picsum.photos/400/250?random=${item.img}`} alt="" loading="lazy" />
                      <span className="article-card__badge">{item.badge}</span>
                    </div>
                    <div className="article-card__body">
                      <div className="article-card__category">{item.category}</div>
                      <h3 className="article-card__title">{item.title}</h3>
                      <p className="article-card__excerpt">{item.excerpt}</p>
                      <div className="article-card__footer">
                        <span>👤 {item.author}</span>
                        <span>📅 {item.date}</span>
                        <span>⏱ {item.time} de lectura</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
