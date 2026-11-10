"use client";

import { useEffect, useState } from "react";
import mantrasData from "../data/mantras.json";
import HeroCarousel from "./hero-carousel";
import TrainingGallery from "./training-gallery";
import LumaraResources from "./lumara-resources";

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
    subtitle: "Conocimiento a tu ritmo",
    description: "Programas online y grabados para aprender, profundizar y aplicar herramientas de bienestar y espiritualidad consciente.",
    icon: "book",
    image: "/lumara-proyect/assets/img/logo/chica2-relax.jpg",
    href: "/es/capacitaciones/cursos/"
  },
  {
    title: "Talleres",
    subtitle: "Experiencias prácticas",
    description: "Encuentros en vivo, dinámicos y vivenciales para conectar, explorar y llevar nuevas herramientas a tu vida diaria.",
    icon: "lotus",
    image: "/lumara-proyect/assets/img/lumara-lotus-hero.webp",
    href: "/es/capacitaciones/talleres/"
  },
  {
    title: "Formación de Coachs",
    subtitle: "Acompañá a otros en su camino",
    description: "Una formación integral para desarrollar habilidades, herramientas y una mirada consciente del acompañamiento.",
    icon: "infinity",
    image: "/lumara-proyect/assets/img/metodolumara/chica-lumara.png",
    href: "/es/capacitaciones/formacion-de-coachs/"
  },
  {
    title: "Mentorías",
    subtitle: "Acompañamiento personalizado",
    description: "Un espacio de guía y enfoque para profundizar tu proceso, superar bloqueos y expandir tu potencial.",
    icon: "mentoring",
    image: "/lumara-proyect/assets/img/metodolumara/chica2-relax.jpg",
    href: "/es/capacitaciones/mentorias/"
  },
  {
    title: "Eventos para Empresas",
    subtitle: "Bienestar en el entorno laboral",
    description: "Experiencias y programas de bienestar, mindfulness y desarrollo humano para equipos más conscientes, motivados y equilibrados.",
    icon: "people",
    image: "/lumara-proyect/assets/img/metodolumara/fondo-chica-lumara.png",
    href: "/es/capacitaciones/eventos-para-empresas/"
  }
];

export default function LumaraHome({ locale }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const [mantraIndex, setMantraIndex] = useState(0);
  const [learningActiveIndex, setLearningActiveIndex] = useState(2);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const visibleLearning = [-2, -1, 0, 1, 2].map((offset) => ({
    item: learning[(learningActiveIndex + offset + learning.length) % learning.length],
    offset
  }));

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMantraIndex((current) => (current + 1) % mantrasData.mantras.length);
    }, mantrasData.intervalMinutes * 60 * 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="inicio">
      <div className="announcement">
        <span>Un espacio para volver a vos</span>
        <span className="announcement-dot" aria-hidden="true">✦</span>
        <span>Espiritualidad consciente</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Lumara, inicio">
          <span className="brand-mark"><img className="brand-moon" src="/lumara-proyect/assets/img/logo/isotipo-luna.webp" alt="" /><span className="brand-lockup"><img className="brand-wordmark" src="/lumara-proyect/assets/img/logo/lumara-web.webp" alt="Lumara" onError={(event) => { event.currentTarget.style.display = "none"; const fallback = event.currentTarget.nextElementSibling as HTMLElement | null; if (fallback) fallback.style.display = "inline-block"; }} /><span className="brand-wordmark-fallback" aria-hidden="true">LUMARA</span></span></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#universo">Nosotros</a>
          <a href="#experiencias">Experiencias</a>
          <a href="#aprender">Aprendizaje</a>
          <a href="#eventos">Eventos</a>
          <a href="#comunidad">Comunidad</a>
          <a href="#biblioteca">Recursos</a>
          <a href="#contactos">Contactos</a>
        </nav>
        <div className="header-tools">
          <button className={`theme-toggle${darkMode ? " is-dark" : ""}`} type="button" onClick={() => setDarkMode((current) => !current)} aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"} aria-pressed={darkMode} title={darkMode ? "Modo oscuro activo" : "Modo claro activo"}>
            <span className="theme-toggle-icon theme-toggle-sun" aria-hidden="true">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
            </span>
            <span className="theme-toggle-icon theme-toggle-moon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M20.5 15.2A8.7 8.7 0 0 1 8.8 3.5 8.8 8.8 0 1 0 20.5 15.2Z" /></svg>
            </span>
            <span className="theme-toggle-thumb" aria-hidden="true" />
          </button>
          <span className="header-tools-divider" aria-hidden="true" />
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
          <a className="header-action" href="#mi-lumara">Mi Lumara</a>
        </div>
      </header>

      <div className={`mobile-menu-panel${mobileMenuOpen ? " is-open" : ""}`} id="mobile-navigation" aria-hidden={!mobileMenuOpen}>
        <nav aria-label="Navegación mobile">
          <a href="#universo" onClick={() => setMobileMenuOpen(false)}>Nosotros</a>
          <a href="#experiencias" onClick={() => setMobileMenuOpen(false)}>Experiencias</a>
          <a href="#aprender" onClick={() => setMobileMenuOpen(false)}>Aprendizaje</a>
          <a href="#eventos" onClick={() => setMobileMenuOpen(false)}>Eventos</a>
          <a href="#comunidad" onClick={() => setMobileMenuOpen(false)}>Comunidad</a>
          <a href="#biblioteca" onClick={() => setMobileMenuOpen(false)}>Recursos</a>
          <a href="#contactos" onClick={() => setMobileMenuOpen(false)}>Contactos</a>
        </nav>
      </div>
      <nav className="mobile-bottom-nav" aria-label="Accesos rápidos">
        <a className="mobile-bottom-link" href="#aprender" aria-label="Cursos">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 8.5 12 4l9.5 4.5L12 13 2.5 8.5Z"/><path d="M6 10.2v5.1c3.8 3 8.2 3 12 0v-5.1M21.5 8.5v6"/></svg>
          <span>Cursos</span>
        </a>
        <a className="mobile-bottom-link" href="#aprender" aria-label="Talleres">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20C7 17 4 13 4 9c3.5 0 6.3 2.2 8 6 1.7-3.8 4.5-6 8-6 0 4-3 8-8 11Z"/><path d="M12 15V5m0 0c-2-2-4-2.5-6-2 0 3 2 5 6 6m0-4c2-2 4-2.5 6-2 0 3-2 5-6 6"/></svg>
          <span>Talleres</span>
        </a>
        <a className="mobile-bottom-home" href="#mi-lumara" aria-label="Mi Lumara">
          <img src="/lumara-proyect/assets/img/logo/isotipo-luna.webp" alt="" />
        </a>
        <a className="mobile-bottom-link" href="#biblioteca" aria-label="Recursos">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z"/><path d="m3 12 9 4.5 9-4.5M3 16.5 12 21l9-4.5"/></svg>
          <span>Recursos</span>
        </a>
        <button className={`mobile-bottom-link mobile-menu-trigger${mobileMenuOpen ? " is-active" : ""}`} type="button" aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" onClick={() => setMobileMenuOpen((open) => !open)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d={mobileMenuOpen ? "m5 5 14 14M19 5 5 19" : "M3 6h18M3 12h18M3 18h18"}/></svg>
          <span>Menú</span>
        </button>
      </nav>

      <HeroCarousel />

      <section className="commitment-section" id="compromiso" aria-labelledby="commitment-title" data-reveal>
        <div className="commitment-inner">
          <span className="section-kicker commitment-kicker">ES HOY, AQUÍ Y AHORA</span>
          <h2 id="commitment-title">Haz un compromiso <em>contigo mismo</em></h2>
          <p className="commitment-mantra" key={mantrasData.mantras[mantraIndex].id} aria-live="polite" aria-atomic="true">
            <span className="mantra-quote" aria-hidden="true">“</span>
            {mantrasData.mantras[mantraIndex].text}
            <span className="mantra-quote" aria-hidden="true">”</span>
          </p>
          <div className="mantra-orbit" role="img" aria-label="Loto animado rodeado por la frase Mantra diario">
            <svg className="mantra-orbit-text" viewBox="0 0 300 300" aria-hidden="true">
              <defs>
                <path id="mantra-orbit-path" d="M 150,150 m -116,0 a 116,116 0 1,1 232,0 a 116,116 0 1,1 -232,0" />
              </defs>
              <text>
                <textPath href="#mantra-orbit-path" startOffset="0%" textLength="710" lengthAdjust="spacing">MANTRA DIARIO · AMOR PROPIO · ABUNDANCIA · CONFIANZA · CALMA · FLORECER ·</textPath>
              </text>
            </svg>
            <span className="mantra-orbit-glow" aria-hidden="true" />
            <img className="mantra-orbit-lotus" src="/lumara-proyect/assets/img/mantras/loto-mantra.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="service-gateway section-wrap" id="servicios-iniciales" aria-label="Explorá Lumara" data-reveal>
        <div className="service-gateway-heading">
          <span className="section-kicker service-gateway-kicker">TU CAMINO COMIENZA ACÁ</span>
          <h2>Un espacio para <em>florecer.</em></h2>
          <p>Elegí por dónde querés empezar. Cada experiencia es una invitación a conectar con vos.</p>
        </div>
        <div className="service-gateway-grid">
          <article className="service-gateway-card" data-reveal>
            <span className="service-gateway-icon" aria-hidden="true">✧</span>
            <h3>Método Lumara</h3>
            <p>Un recorrido de autoconocimiento para volver a tu esencia y construir cambios conscientes.</p>
            <a className="service-gateway-cta" href="#universo">Conocer el método <span aria-hidden="true">↗</span></a>
          </article>
          <article className="service-gateway-card">
            <span className="service-gateway-icon" aria-hidden="true">❋</span>
            <h3>Talleres</h3>
            <p>Experiencias vivenciales para explorar, compartir y llevar nuevas herramientas a tu vida.</p>
            <a className="service-gateway-cta" href="#eventos">Explorar talleres <span aria-hidden="true">↗</span></a>
          </article>
          <article className="service-gateway-card">
            <span className="service-gateway-icon" aria-hidden="true">☾</span>
            <h3>Astrología</h3>
            <p>Un lenguaje simbólico para descubrir ciclos, reconocer patrones y ampliar tu mirada.</p>
            <a className="service-gateway-cta" href="#experiencias">Descubrir astrología <span aria-hidden="true">↗</span></a>
          </article>
          <article className="service-gateway-card">
            <span className="service-gateway-icon" aria-hidden="true">⌘</span>
            <h3>Aprendizaje</h3>
            <p>Cursos y formaciones para aprender a tu ritmo y transformar el conocimiento en práctica.</p>
            <a className="service-gateway-cta" href="#aprender">Ir a aprendizaje <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section className="manifesto section-wrap" id="universo" data-reveal>
        <div className="manifesto-columns">
          <div className="manifesto-phrase">
            <p>
              No se trata de encontrar todas las respuestas. Se trata de
              <em> hacer espacio </em> para escucharte.
            </p>
          </div>
          <div className="manifesto-visual" aria-hidden="true" />
          <div className="manifesto-method">
            <span className="manifesto-eyebrow">UN CAMINO HACIA TU BIENESTAR</span>
            <h2 className="manifesto-title">Método <em>Lumara</em></h2>
            <h3 className="manifesto-subtitle">Conocé el verdadero proceso de sanación</h3>
            <p>
              El Método Lumara acompaña cada etapa de tu sanación, sin atajos ni
              procesos salteados. Integra distintos recursos en cada paso para
              abrir nuevos niveles emocionales y cultivar tu bienestar espiritual.
              Una transformación que se refleja en tu día a día, con más armonía,
              equilibrio y paz interior.
            </p>
            <a className="manifesto-cta" href="#experiencias">
              Comenzá tu sanación <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="experiences-section section-wrap" id="experiencias" data-reveal><span id="eventos" className="anchor-target" aria-hidden="true" />
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

      <TrainingGallery />

      <section className="learning-section learning-showcase" id="aprender" data-reveal aria-labelledby="learning-title">
        <div className="learning-showcase-heading">
          <span className="section-kicker">DESCUBRÍ TODO LO QUE VIVE EN LUMARA</span>
          <h2 id="learning-title">Aprender, practicar, acompañar y <em>transformar.</em></h2>
          <p>Elegí tu próximo paso para crecer, aprender y transformar tu camino.</p>
        </div>
        <div className="learning-carousel" aria-roledescription="carrusel" aria-label="Propuestas de aprendizaje Lumara">
          <button className="learning-carousel-arrow learning-carousel-prev" type="button" aria-label="Ver propuesta anterior" onClick={() => setLearningActiveIndex((current) => (current - 1 + learning.length) % learning.length)}>‹</button>
          <div className="learning-carousel-stage" aria-live="polite">
            {visibleLearning.map(({ item, offset }) => (
              <article className={`learning-feature-card learning-carousel-card ${offset === 0 ? "is-center" : Math.abs(offset) === 1 ? "is-near" : "is-far"}`} key={item.title}>
                <div className="learning-card-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(50,35,62,.02) 25%, rgba(50,35,62,.2) 100%), url("${item.image}")` }} role="img" aria-label={`Imagen representativa de ${item.title}`} />
                <div className="learning-card-icon" aria-hidden="true">
                  {item.icon === "book" ? "⌑" : item.icon === "lotus" ? "✧" : item.icon === "infinity" ? "∞" : item.icon === "mentoring" ? "♧" : "♙"}
                </div>
                <div className="learning-card-body">
                  <h3>{item.title}</h3>
                  <span className="learning-card-subtitle">{item.subtitle}</span>
                  <p>{item.description}</p>
                  <a className="learning-card-cta" href={item.href}>Saber más <span aria-hidden="true">→</span></a>
                </div>
              </article>
            ))}
          </div>
          <button className="learning-carousel-arrow learning-carousel-next" type="button" aria-label="Ver propuesta siguiente" onClick={() => setLearningActiveIndex((current) => (current + 1) % learning.length)}>›</button>
        </div>
        <div className="learning-carousel-pagination" aria-label={`Propuesta ${learningActiveIndex + 1} de ${learning.length}`}>
          {learning.map((item, index) => <button key={item.title} type="button" aria-label={`Mostrar ${item.title}`} aria-current={index === learningActiveIndex ? "true" : undefined} onClick={() => setLearningActiveIndex(index)} />)}
        </div>
      </section>

      <LumaraResources />

      <section className="closing-section" id="mi-lumara" data-reveal><span id="comunidad" className="anchor-target" aria-hidden="true" />
        <div className="closing-orb parallax-soft" aria-hidden="true" />
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
          <span className="brand-mark" aria-hidden="true"><img className="brand-moon" src="/lumara-proyect/assets/img/logo/isotipo-luna.webp" alt="" /><img className="brand-wordmark" src="/lumara-proyect/assets/img/logo/lumara-web.webp" alt="Lumara" onError={(event) => { event.currentTarget.style.display = "none"; const fallback = event.currentTarget.nextElementSibling as HTMLElement | null; if (fallback) fallback.style.display = "inline-block"; }} /><span className="brand-wordmark-fallback footer-wordmark-fallback" aria-hidden="true">LUMARA</span></span>
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
