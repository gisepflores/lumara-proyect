"use client";

import { useEffect, useState } from "react";
import HeroCarousel from "./hero-carousel";

type Props = {
  locale: "es";
};

const experiences = [
  {
    number: "01",
    title: "Tarot y lecturas",
    description:
      "Una mirada simbólica para explorar preguntas, reconocer posibilidades y darle perspectiva a tu presente.",
    tag: "Autoconocimiento"
  },
  {
    number: "02",
    title: "Sesiones individuales",
    description:
      "Un espacio de escucha y acompañamiento para profundizar en aquello que hoy necesita tu atención.",
    tag: "Acompañamiento"
  },
  {
    number: "03",
    title: "Meditaciones",
    description:
      "Pausas guiadas para volver al cuerpo, aquietar el ruido y cultivar momentos de presencia.",
    tag: "Bienestar"
  },
  {
    number: "04",
    title: "Encuentros",
    description:
      "Experiencias compartidas para aprender, conversar y descubrir nuevas formas de conectar.",
    tag: "Comunidad"
  }
];

const learning = [
  {
    title: "Cursos",
    description: "Recorridos para aprender a tu ritmo y desde donde estés.",
    label: "A tu tiempo"
  },
  {
    title: "Talleres",
    description: "Encuentros prácticos para explorar un tema en profundidad.",
    label: "Experiencias"
  },
  {
    title: "Formaciones",
    description: "Procesos de aprendizaje con estructura, guía y continuidad.",
    label: "Aprendizaje"
  }
];

export default function LumaraHome({ locale }: Props) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <main id="inicio">
      <div className="announcement">
        <span>Un espacio para volver a vos</span>
        <span className="announcement-dot" aria-hidden="true">✦</span>
        <span>Espiritualidad consciente</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Lumara, inicio">
          <span className="brand-mark"><img className="brand-moon" src="/lumara-proyect/isotipo-luna.webp" alt="" /><span className="brand-lockup"><img className="brand-wordmark" src="/lumara-proyect/isologotipo.webp" alt="Lumara" /><span className="brand-wordmark-fallback" aria-hidden="true">LUMARA</span></span></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#universo">Nosotros</a>
          <a href="#experiencias">Experiencias</a>
          <a href="#aprender">Aprendizaje</a>
          <a href="#eventos">Eventos</a>
          <a href="#biblioteca">Recursos</a>
          <a href="#contactos">Contactos</a>
        </nav>
        <div className="header-tools">
          <div className="social-links" aria-label="Redes sociales">
            <a href="https://www.instagram.com/espacio.lumara/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="social-dot" cx="17.6" cy="6.7" r="1" /></svg>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.5 1.6-1.5h1.7V3.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H8v3.2h2.8v8z" /></svg>
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok" title="TikTok">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v11.1a3.2 3.2 0 1 1-2.7-3.1V8.2a6.2 6.2 0 1 0 5.8 6.2V9.1c1.3 1 2.8 1.5 4.4 1.6V7.4c-3-.2-5.2-2-5.6-4.4z" /></svg>
            </a>
          </div>
          <button className="theme-toggle" type="button" onClick={() => setDarkMode((current) => !current)} aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"} title={darkMode ? "Modo claro" : "Modo oscuro"}>
            {darkMode ? (
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 15.4A8.7 8.7 0 0 1 8.6 3.2 8.8 8.8 0 1 0 20.8 15.4Z" /></svg>
            )}
          </button>
          <a className="header-action" href="#mi-lumara">Mi Lumara</a>
        </div>
      </header>

      <HeroCarousel />

      <section className="manifesto section-wrap" id="universo">
        <div className="section-kicker">01 — EL UNIVERSO LUMARA</div>
        <div className="manifesto-content">
          <p className="manifesto-lead">
            No se trata de encontrar todas las respuestas.
            Se trata de <em>hacer espacio</em> para escucharte.
          </p>
          <div className="manifesto-aside">
            <p>
              Creemos en una espiritualidad cercana, consciente y posible.
              Un camino que no exige certezas: invita a mirar hacia adentro,
              abrir preguntas y construir tu propio significado.
            </p>
            <a className="text-link" href="#experiencias">
              Descubrí nuestro universo <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="experiences-section section-wrap" id="experiencias"><span id="eventos" className="anchor-target" aria-hidden="true" />
        <div className="section-heading">
          <div>
            <div className="section-kicker">02 — EXPERIENCIAS</div>
            <h2>Pequeños espacios.<br /><em>Grandes descubrimientos.</em></h2>
          </div>
          <p className="section-description">
            Elegí la experiencia que resuene con tu momento. Cada recorrido
            comienza desde donde estás hoy.
          </p>
        </div>
        <div className="experience-grid">
          {experiences.map((item) => (
            <article className="experience-card" key={item.number}>
              <div className="card-topline">
                <span className="card-number">{item.number}</span>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </div>
              <div>
                <span className="card-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="learning-section section-wrap" id="aprender">
        <div className="learning-intro">
          <div className="section-kicker">03 — APRENDER</div>
          <h2>Aprender también<br />es <em>transformar.</em></h2>
          <p>
            Conocimientos y prácticas para acompañar tus búsquedas, ampliar
            tu mirada y descubrir herramientas que puedas llevar a tu vida.
          </p>
          <a className="button button-outline" href="#mi-lumara">
            Explorar el espacio de aprendizaje <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="learning-list">
          {learning.map((item, index) => (
            <article className="learning-row" key={item.title}>
              <span className="learning-index">0{index + 1}</span>
              <div className="learning-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span className="learning-label">{item.label}</span>
              <span className="learning-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="library-section section-wrap" id="biblioteca">
        <div className="library-heading">
          <div>
            <div className="section-kicker">04 — BIBLIOTECA</div>
            <h2>Ideas para mirar<br /><em>desde otro lugar.</em></h2>
          </div>
          <p className="section-description">
            Lecturas, reflexiones y recursos para acompañar tus preguntas
            cotidianas.
          </p>
        </div>
        <div className="library-feature">
          <div className="library-art">
            <div className="library-ring" />
            <span className="library-art-word">pausa</span>
            <span className="library-art-caption">UN MOMENTO PARA VOS</span>
          </div>
          <div className="library-feature-copy">
            <span className="card-tag">PRÓXIMAMENTE · EDITORIAL LUMARA</span>
            <h3>Un espacio para detenerte, leer y descubrir.</h3>
            <p>
              Estamos preparando una biblioteca de contenidos para inspirar
              nuevas preguntas y acercarte herramientas de autoconocimiento.
            </p>
            <a className="text-link" href="#mi-lumara">
              Conocer más <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="closing-section" id="mi-lumara">
        <div className="closing-orb" aria-hidden="true" />
        <div className="section-kicker">TU ESPACIO, TU RECORRIDO</div>
        <h2>Todo comienza<br />con un momento <em>para vos.</em></h2>
        <p>
          Lumara está tomando forma. Muy pronto vas a poder explorar
          experiencias, aprender y reunir tus recorridos en un mismo lugar.
        </p>
        <span className="closing-note">LUMARA · ESPIRITUALIDAD CONSCIENTE</span>
      </section>

      <footer className="site-footer" id="contactos">
        <a className="footer-brand" href="#inicio">
          <span className="brand-mark" aria-hidden="true"><img className="brand-moon" src="/lumara-proyect/isotipo-luna.webp" alt="" /><img className="brand-wordmark" src="/lumara-proyect/isologotipo.webp" alt="Lumara" /></span>
          <span className="brand-caption">ESPIRITUALIDAD CONSCIENTE</span>
        </a>
        <p>Un espacio para volver a vos.</p>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Lumara</span>
          <span>Hecho con intención.</span>
          <span>Versión de preview · {locale.toUpperCase()}</span>
        </div>
      </footer>
    </main>
  );
}
