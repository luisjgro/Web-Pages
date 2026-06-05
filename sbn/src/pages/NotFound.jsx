import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './NotFound.css'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Página no encontrada — Solo Buenas Noticias</title>
        <meta name="description" content="La página que buscas no existe." />
        <meta property="og:title" content="Página no encontrada — Solo Buenas Noticias" />
        <meta property="og:description" content="La página que buscas no existe." />
        <meta property="og:image" content="/icono_favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    <div className="not-found">
      <div className="not-found__content">
        <span className="not-found__code" aria-hidden="true">404</span>
        <h1 className="not-found__title">¡Ups! Esta página no existe</h1>
        <p className="not-found__subtitle">
          Parece que la noticia que buscas no está aquí,
          pero tenemos muchas buenas historias esperándote.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary">Volver al inicio</Link>
          <Link to="/noticias/local" className="btn btn--secondary">Ver todas las noticias</Link>
        </div>
      </div>
    </div>
    </>
  )
}
