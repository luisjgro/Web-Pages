import { Helmet } from 'react-helmet-async'
import './AboutPage.css'

export default function AboutPage() {
  const values = [
    { titulo: 'Veracidad', icono: '🔍', desc: 'Nos comprometemos a compartir solo información verificada y confiable. Cada historia que publicamos pasa por un proceso riguroso de revisión para garantizar su autenticidad.' },
    { titulo: 'Positividad', icono: '✨', desc: 'Creemos en el poder de las buenas noticias para transformar perspectivas. Buscamos historias que inspiren, motiven y muestren que el cambio positivo es posible.' },
    { titulo: 'Comunidad', icono: '🤝', desc: 'Somos una plataforma construida por y para la comunidad. Valoramos las historias de nuestra audiencia y fomentamos un espacio de colaboración y respeto.' },
  ]

  const team = [
    { nombre: 'Ana Martínez', rol: 'Fundadora & Directora Editorial', img: 'https://picsum.photos/seed/ana/300/300' },
    { nombre: 'Carlos Rivera', rol: 'Redactor & Community Manager', img: 'https://picsum.photos/seed/carlos/300/300' },
    { nombre: 'María Fernanda López', rol: 'Diseñadora & Productora Audiovisual', img: 'https://picsum.photos/seed/maria/300/300' },
  ]

  return (
    <>
      <Helmet>
        <title>Acerca de Nosotros — Solo Buenas Noticias</title>
        <meta name="description" content="Conoce la misión, valores y equipo detrás de Solo Buenas Noticias, el medio que difunde historias positivas de México y el mundo." />
        <meta property="og:title" content="Acerca de Nosotros — Solo Buenas Noticias" />
        <meta property="og:description" content="Conoce la misión, valores y equipo detrás de Solo Buenas Noticias." />
        <meta property="og:image" content="/icono_favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main id="main-content">
        <section className="page-hero">
          <div className="container">
            <h1 className="page-hero__title">Acerca de Nosotros</h1>
          </div>
        </section>

        <section className="about-section">
          <div className="page-container">
            <h2 className="about-section__title">Nuestra Misión</h2>
            <p className="about-section__text">
              En <strong>Solo Buenas Noticias</strong> creemos que el mundo también tiene historias que valen la pena. Nacimos con la convicción de que las noticias positivas, constructivas e inspiradoras merecen un espacio propio en el panorama mediático.
            </p>
            <p className="about-section__text">
              Nuestra misión es dar a conocer historias que construyen, inspiran y sanan. Buscamos reconciliarte con el mundo a través de contenido que demuestra que, a pesar de los desafíos, hay personas, comunidades e ideas trabajando para hacer de este un lugar mejor.
            </p>
            <p className="about-section__text">
              Desde México para el mundo, trabajamos cada día para ofrecerte una ventana a todo lo bueno que está sucediendo a nuestro alrededor.
            </p>
          </div>
        </section>

        <section className="about-values">
          <div className="page-container">
            <h2 className="about-section__title">Nuestros Valores</h2>
            <div className="about-values__grid">
              {values.map((v) => (
                <article className="about-card" key={v.titulo}>
                  <span className="about-card__icon">{v.icono}</span>
                  <h3 className="about-card__title">{v.titulo}</h3>
                  <p className="about-card__text">{v.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-team">
          <div className="page-container">
            <h2 className="about-section__title">Nuestro Equipo</h2>
            <div className="about-team__grid">
              {team.map((m) => (
                <article className="about-team__card" key={m.nombre}>
                  <img className="about-team__img" src={m.img} alt={m.nombre} loading="lazy" />
                  <h3 className="about-team__name">{m.nombre}</h3>
                  <p className="about-team__role">{m.rol}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
