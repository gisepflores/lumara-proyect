"use client";

import { useEffect, useRef, useState } from "react";
import HeroCarousel from "./hero-carousel";
import TrainingGallery from "./training-gallery";

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
  const [lotusFinished, setLotusFinished] = useState(false);
  const lotusFrameRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

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

      <section className="commitment-section" id="compromiso" aria-labelledby="commitment-title" data-reveal>
        <div className="commitment-inner">
          <span className="section-kicker commitment-kicker">UN MOMENTO PARA VOS</span>
          <h2 id="commitment-title">Comprométete <em>contigo mismo.</em></h2>
          <p className="commitment-mantra">
            <span className="mantra-quote" aria-hidden="true">“</span>
            Hoy me elijo, me transformo y florezco.<br className="desktop-break" />
            Mi cambio comienza aquí y ahora.<br className="desktop-break" />
            Desde mi esencia, creo una vida plena, guiada por el amor, la abundancia y la prosperidad.
            <span className="mantra-quote" aria-hidden="true">”</span>
          </p>
          <video
            className="commitment-lotus"
            autoPlay
            muted
            playsInline
            preload="auto"
            hidden={lotusFinished}
            onEnded={(event) => {
              const video = event.currentTarget;
              const canvas = lotusFrameRef.current;
              if (canvas && video.videoWidth > 0 && video.videoHeight > 0) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const context = canvas.getContext("2d");
                context?.drawImage(video, 0, 0, canvas.width, canvas.height);
                video.pause();
                setLotusFinished(true);
              } else {
                video.pause();
              }
            }}
            aria-label="Animación de una flor de loto que simboliza transformación y florecimiento"
          >
            <source src="/lumara-proyect/assets/img/logo/loto.mp4" type="video/mp4" />
          </video>
          <canvas
            ref={lotusFrameRef}
            className="commitment-lotus commitment-lotus-frame"
            hidden={!lotusFinished}
            aria-label="Flor de loto en su estado final"
          />
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
          <p>Explorá nuestras propuestas de formación, experiencias y bienestar, diseñadas para tu crecimiento personal, profesional y para llevar la conciencia a tu entorno.</p>
        </div>
        <div className="learning-card-grid">
          {learning.map((item, index) => (
            <article className="learning-feature-card" key={item.title} style={{ "--card-index": index } as React.CSSProperties}>
              <div className="learning-card-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(50,35,62,.02) 25%, rgba(50,35,62,.2) 100%), url("${item.image}")` }} role="img" aria-label={`Imagen representativa de ${item.title}`} />
              <div className="learning-card-icon" aria-hidden="true">
                {item.icon === "book" ? "⌑" : item.icon === "lotus" ? "✧" : item.icon === "infinity" ? "∞" : "♧"}
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
      </section>

      <section className="library-section section-wrap" id="biblioteca" data-reveal>
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
          <div className="library-art parallax-soft">
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
