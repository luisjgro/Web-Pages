import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import ScrollToTop from '../components/ScrollToTop'
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [key])

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="subpage-hero">
          <div className="subpage-hero__content">
            <h1>{title}</h1>
            <div className="subpage-hero__divider" />
            <p className="subpage-hero__placeholder">Contenido próximamente...</p>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </>
  )
}
