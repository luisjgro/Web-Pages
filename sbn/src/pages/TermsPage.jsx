import { Helmet } from 'react-helmet-async'
import './TermsPage.css'

export default function TermsPage() {
  const sections = [
    {
      titulo: '1. Objeto',
      contenido:
        'Solo Buenas Noticias es un medio digital cuyo objeto es la difusión de noticias, historias e información de carácter positivo, constructivo e inspirador. El acceso y uso del sitio web implica la aceptación plena y sin reservas de los presentes Términos y Condiciones.'
    },
    {
      titulo: '2. Propiedad intelectual',
      contenido:
        'Todos los contenidos publicados en Solo Buenas Noticias —incluyendo textos, imágenes, logotipos, gráficos y diseño— están protegidos por las leyes de propiedad intelectual y derechos de autor. Queda prohibida la reproducción total o parcial de los contenidos sin autorización expresa por escrito. Para reportar infracciones a los derechos de autor, contáctanos en: solobuenasnoticias0@gmail.com.'
    },
    {
      titulo: '3. Enlaces externos',
      contenido:
        'Nuestro sitio puede contener enlaces a sitios web de terceros. Solo Buenas Noticias no asume ninguna responsabilidad por el contenido, prácticas de privacidad o disponibilidad de dichos sitios externos. El acceso a través de estos enlaces se realiza bajo la propia responsabilidad del usuario.'
    },
    {
      titulo: '4. Publicidad',
      contenido:
        'Solo Buenas Noticias puede mostrar anuncios de terceros (incluyendo Google AdSense) en su sitio. No somos responsables del contenido de dichos anuncios ni de las prácticas de los anunciantes. Te recomendamos revisar nuestra política de privacidad para más información sobre el uso de cookies y datos para publicidad personalizada.'
    },
    {
      titulo: '5. Envío de contenido',
      contenido:
        'Los usuarios pueden enviar historias, comentarios u otro contenido voluntariamente. Al hacerlo, otorgan a Solo Buenas Noticias el derecho de editar, publicar y distribuir dicho contenido sin compensación económica, respetando siempre la autoría del material original. Nos reservamos el derecho de no publicar contenido que consideremos inapropiado o que no cumpla con nuestros valores editoriales.'
    },
    {
      titulo: '6. Modificaciones',
      contenido:
        'Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios serán publicados en esta página y entrarán en vigor inmediatamente. Recomendamos a los usuarios revisar periódicamente esta sección para estar al tanto de cualquier modificación.'
    },
    {
      titulo: '7. Contacto',
      contenido:
        'Si tienes preguntas sobre estos Términos y Condiciones, puedes contactarnos a través de: solobuenasnoticias0@gmail.com. Estamos ubicados en Chihuahua, México.'
    },
  ]

  return (
    <>
      <Helmet>
        <title>Términos y Condiciones — Solo Buenas Noticias</title>
        <meta name="description" content="Términos y condiciones de uso de Solo Buenas Noticias. Conoce las reglas y políticas de nuestro sitio." />
        <meta property="og:title" content="Términos y Condiciones — Solo Buenas Noticias" />
        <meta property="og:description" content="Términos y condiciones de uso de Solo Buenas Noticias." />
        <meta property="og:image" content="/icono_favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main id="main-content">
        <section className="page-hero">
          <div className="container">
            <h1 className="page-hero__title">Términos y Condiciones</h1>
          </div>
        </section>

        <section className="legal-section">
          <div className="page-container">
            <p className="legal-update">Última actualización: 25 de julio de 2025</p>
            {sections.map((s) => (
              <div className="legal-block" key={s.titulo}>
                <h2 className="legal-block__title">{s.titulo}</h2>
                <p className="legal-block__text">{s.contenido}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
