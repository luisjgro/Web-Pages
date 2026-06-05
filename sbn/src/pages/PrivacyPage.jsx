import { Helmet } from 'react-helmet-async'
import './PrivacyPage.css'

export default function PrivacyPage() {
  const sections = [
    {
      titulo: '1. Información que recopilamos',
      contenido:
        'En Solo Buenas Noticias podemos recopilar los siguientes datos personales cuando interactúas con nuestro sitio: (a) datos que nos proporcionas voluntariamente a través de formularios de contacto, envío de historias o comentarios, incluyendo nombre, correo electrónico y contenido de la historia; (b) datos de navegación recopilados automáticamente a través de cookies y tecnologías similares, como dirección IP, ubicación geográfica aproximada, tipo de dispositivo, navegador y páginas visitadas; (c) datos recopilados por servicios de terceros como Google Analytics para análisis de tráfico y Google AdSense para publicidad personalizada.'
    },
    {
      titulo: '2. Uso de la información',
      contenido:
        'La información que recopilamos se utiliza para los siguientes fines: (a) contactarte en respuesta a tus consultas o solicitudes; (b) mejorar tu experiencia de navegación y personalizar el contenido que te mostramos; (c) generar estadísticas anónimas sobre el tráfico y uso del sitio; (d) mostrarte anuncios personalizados a través de Google AdSense basados en tus intereses y hábitos de navegación.'
    },
    {
      titulo: '3. Cookies',
      contenido:
        'Utilizamos cookies propias y de terceros (incluyendo Google) para almacenar información sobre tus preferencias, medir el tráfico del sitio y mostrarte anuncios relevantes. Puedes configurar tu navegador para rechazar todas las cookies o para indicar cuándo se envía una cookie. Sin embargo, algunas funciones del sitio podrían no funcionar correctamente si deshabilitas las cookies. Para más información sobre cómo Google utiliza las cookies en sitios asociados, visita: policies.google.com/technologies/partner-sites.'
    },
    {
      titulo: '4. Compartición con terceros',
      contenido:
        'No vendemos tu información personal a terceros. Compartimos datos únicamente con: (a) Google a través de Google Analytics y Google AdSense, conforme a sus políticas de privacidad; (b) autoridades competentes cuando la ley mexicana nos lo exija. No transferimos datos personales a países sin protección adecuada sin tu consentimiento.'
    },
    {
      titulo: '5. Seguridad de la información',
      contenido:
        'Implementamos medidas de seguridad técnicas y organizativas razonables para proteger tu información personal contra acceso no autorizado, pérdida, alteración o divulgación. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.'
    },
    {
      titulo: '6. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)',
      contenido:
        'De conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (México), tienes derecho a: (a) acceder a tus datos personales que poseemos; (b) rectificar tus datos si son inexactos o incompletos; (c) cancelar tus datos cuando consideres que no se requieren para las finalidades establecidas; (d) oponerte al tratamiento de tus datos para fines específicos. Para ejercer estos derechos, contáctanos en: solobuenasnoticias0@gmail.com.'
    },
    {
      titulo: '7. Cambios a este aviso',
      contenido:
        'Nos reservamos el derecho de modificar este aviso de privacidad en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en esta página. Te recomendamos revisar periódicamente esta sección para mantenerte informado sobre cómo protegemos tu información.'
    },
    {
      titulo: '8. Contacto',
      contenido:
        'Si tienes preguntas, comentarios o inquietudes sobre este aviso de privacidad o sobre el tratamiento de tus datos personales, puedes contactarnos a través del correo electrónico: solobuenasnoticias0@gmail.com. Estamos ubicados en Chihuahua, México.'
    },
  ]

  return (
    <>
      <Helmet>
        <title>Aviso de Privacidad — Solo Buenas Noticias</title>
        <meta name="description" content="Aviso de privacidad de Solo Buenas Noticias. Conoce cómo recopilamos, usamos y protegemos tu información personal." />
        <meta property="og:title" content="Aviso de Privacidad — Solo Buenas Noticias" />
        <meta property="og:description" content="Aviso de privacidad de Solo Buenas Noticias." />
        <meta property="og:image" content="/icono_favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main id="main-content">
        <section className="page-hero">
          <div className="container">
            <h1 className="page-hero__title">Aviso de Privacidad</h1>
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
