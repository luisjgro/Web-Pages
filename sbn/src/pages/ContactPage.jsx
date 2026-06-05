import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import './ContactPage.css'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ nombre: '', email: '', asunto: '', mensaje: '' })
  }

  return (
    <>
      <Helmet>
        <title>Contacto — Solo Buenas Noticias</title>
        <meta name="description" content="Ponte en contacto con Solo Buenas Noticias. Envíanos tus comentarios, sugerencias o historias." />
        <meta property="og:title" content="Contacto — Solo Buenas Noticias" />
        <meta property="og:description" content="Ponte en contacto con Solo Buenas Noticias." />
        <meta property="og:image" content="/icono_favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main id="main-content">
        <section className="page-hero">
          <div className="container">
            <h1 className="page-hero__title">Contacto</h1>
          </div>
        </section>

        <section className="contact-section">
          <div className="page-container">
            <div className="contact-grid">
              <div className="contact-form-wrap">
                {sent ? (
                  <div className="contact-success">
                    <span className="contact-success__icon">✅</span>
                    <p className="contact-success__text">¡Gracias! Te contactaremos pronto.</p>
                    <button className="contact-btn" onClick={() => setSent(false)}>Enviar otro mensaje</button>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-field">
                      <label className="contact-label" htmlFor="nombre">Nombre</label>
                      <input className="contact-input" id="nombre" name="nombre" type="text" value={form.nombre} onChange={handleChange} required />
                    </div>
                    <div className="contact-field">
                      <label className="contact-label" htmlFor="email">Correo electrónico</label>
                      <input className="contact-input" id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="contact-field">
                      <label className="contact-label" htmlFor="asunto">Asunto</label>
                      <input className="contact-input" id="asunto" name="asunto" type="text" value={form.asunto} onChange={handleChange} required />
                    </div>
                    <div className="contact-field">
                      <label className="contact-label" htmlFor="mensaje">Mensaje</label>
                      <textarea className="contact-textarea" id="mensaje" name="mensaje" rows="5" value={form.mensaje} onChange={handleChange} required />
                    </div>
                    <button className="contact-btn contact-btn--submit" type="submit">Enviar mensaje</button>
                  </form>
                )}
              </div>

              <aside className="contact-info">
                <h3 className="contact-info__title">Información de Contacto</h3>
                <div className="contact-info__item">
                  <span className="contact-info__icon">✉️</span>
                  <a href="mailto:olobuenasnoticias0@gmail.com" className="contact-info__link">solobuenasnoticias0@gmail.com</a>
                </div>
                <div className="contact-info__item">
                  <span className="contact-info__icon">📍</span>
                  <span className="contact-info__text">Chihuahua, México</span>
                </div>
                <h4 className="contact-info__subtitle">Síguenos en redes sociales</h4>
                <div className="contact-social">
                  <a href="https://www.instagram.com/solo_buenas_noticias/" target="_blank" rel="noopener noreferrer" className="contact-social__link" aria-label="Instagram">Instagram</a>
                  <a href="https://www.facebook.com/emma.delao/" target="_blank" rel="noopener noreferrer" className="contact-social__link" aria-label="Facebook">Facebook</a>
                  <a href="https://www.youtube.com/@SoloBuenasNoticiasSBN" target="_blank" rel="noopener noreferrer" className="contact-social__link" aria-label="YouTube">YouTube</a>
                  <a href="https://www.tiktok.com/@solo_buenas_noticias" target="_blank" rel="noopener noreferrer" className="contact-social__link" aria-label="TikTok">TikTok</a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
