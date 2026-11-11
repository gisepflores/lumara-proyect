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
    title: "Astrología",
    subtitle: "CICLOS · CARTA NATAL · PROPÓSITO",
    description: "Explorá tu carta natal, los tránsitos y los ciclos del universo para comprender tu energía, reconocer tus talentos y mirar los desafíos de tu camino desde nuevas perspectivas.",
    highlights: ["Carta natal", "Ciclos y tránsitos", "Autoconocimiento"],
    icon: "astrology",
    image: "/lumara-proyect/assets/img/lumara-cartas/astrologia.webp",
    alt: "Diagrama celestial violeta con esferas, constelaciones y símbolos astrológicos"
  },
  {
    title: "Tarot y oráculos",
    subtitle: "SÍMBOLOS · INTUICIÓN · DECISIONES",
    description: "Un espacio de exploración simbólica para abrir preguntas, reconocer posibilidades y encontrar nuevas perspectivas que acompañen tus decisiones de manera consciente.",
    highlights: ["Lecturas simbólicas", "Oráculos", "Claridad interior"],
    icon: "tarot",
    image: "/lumara-proyect/assets/img/lumara-cartas/tarot-oraculos.webp",
    alt: "Cartas de tarot y oráculo con cristales y velas sobre una mesa clara"
  },
  {
    title: "Registros akáshicos",
    subtitle: "MEMORIA DEL ALMA · CONCIENCIA · GUÍA",
    description: "Un espacio de introspección espiritual para explorar, desde una mirada simbólica y consciente, preguntas sobre tu recorrido, reconocer aprendizajes y abrir nuevas perspectivas para tu presente.",
    highlights: ["Lectura intuitiva", "Memoria del alma", "Nuevas perspectivas"],
    icon: "akashic",
    image: "/lumara-proyect/assets/img/lumara-cartas/registros-akashicos.webp",
    alt: "Portal celestial dorado en una atmósfera violeta y luminosa"
  },
  {
    title: "Escritura emocional",
    subtitle: "PALABRAS · EMOCIONES · AUTOCONOCIMIENTO",
    description: "A través de la escritura consciente, transformá pensamientos y emociones en palabras. Un recurso íntimo para escucharte, ordenar lo que sentís y dar lugar a nuevas comprensiones.",
    highlights: ["Diario emocional", "Escritura guiada", "Reflexión personal"],
    icon: "writing",
    image: "/lumara-proyect/assets/img/lumara-cartas/escritura-emocional.webp",
    alt: "Cuaderno abierto y escritura a mano"
  },
  {
    title: "Meditaciones",
    subtitle: "PRESENCIA · CALMA · CONEXIÓN",
    description: "Pausas guiadas para volver al cuerpo, aquietar el ruido y cultivar presencia. Prácticas para conectar con tu respiración y acompañar tu bienestar cotidiano.",
    highlights: ["Atención plena", "Visualizaciones", "Respiración consciente"],
    icon: "meditation",
    image: "/lumara-proyect/assets/img/lumara-cartas/meditaciones.webp",
    alt: "Mujer sentada de espaldas en un campo natural en actitud contemplativa"
  },
  {
    title: "Ikigai",
    subtitle: "SENTIDO · VOCACIÓN · PROPÓSITO",
    description: "Explorá aquello que te mueve, tus talentos y lo que deseás aportar. Una búsqueda personal para conectar lo que amás, lo que sabés hacer y aquello que da sentido a tu camino.",
    highlights: ["Propósito personal", "Talentos y motivaciones", "Dirección consciente"],
    icon: "ikigai",
    image: "/lumara-proyect/assets/img/lumara-cartas/ikigai.webp",
    alt: "Paisaje natural iluminado por el amanecer"
  },
  {
    title: "Desarrollo personal",
    subtitle: "EVOLUCIÓN · HÁBITOS · EXPANSIÓN",
    description: "Integrá nuevas herramientas, perspectivas y hábitos para construir una vida más alineada con tus valores. Un camino para crecer con conciencia, confianza y propósito.",
    highlights: ["Creencias y hábitos", "Fortalezas personales", "Acción consciente"],
    icon: "growth",
    image: "/lumara-proyect/assets/img/lumara-cartas/desarrollo-personal.webp",
    alt: "Mujer con los brazos abiertos al atardecer, símbolo de confianza y expansión"
  }
];

const ExperienceIcon = ({ name }: { name: string }) => {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.45, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...common}>
      {name === "astrology" && <><circle cx="12" cy="12" r="7.2" /><path d="M12 1.8v3M12 19.2v3M1.8 12h3M19.2 12h3M12 8.2l1.1 2.7 2.7 1.1-2.7 1.1-1.1 2.7-1.1-2.7-2.7-1.1 2.7-1.1z" /></>}
      {name === "tarot" && <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="m12 7 1.2 2.6 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4z" /></>}
      {name === "akashic" && <><path d="M4 6.5c3.1-1.5 5.8-1.2 8 1v12c-2.2-2.2-4.9-2.5-8-1zM20 6.5c-3.1-1.5-5.8-1.2-8 1v12c2.2-2.2 4.9-2.5 8-1z" /><path d="M12 7.5v12M7 10h2M15 10h2M7 13h2M15 13h2M18.5 2.5v2M17.5 3.5h2" /></>}
      {name === "writing" && <><path d="M4 20h4l11-11a2.1 2.1 0 0 0-4-4L4 16zM13.5 6.5l4 4M4 20l1-4" /><path d="M4 3h6" /></>}
      {name === "meditation" && <><circle cx="12" cy="5.2" r="2.2" /><path d="M8.5 20c.2-3.5 1.3-6.4 3.5-8.2 2.2 1.8 3.3 4.7 3.5 8.2M5 20h14M4 14c1.2-1.4 2.5-2.1 4-2.4M20 14c-1.2-1.4-2.5-2.1-4-2.4" /></>}
      {name === "ikigai" && <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.2" /><path d="M12 1v3M23 12h-3M12 23v-3M1 12h3" /></>}
      {name === "growth" && <><path d="M4 19c0-7.5 4.5-12 13-14-1 8.5-5.5 13-13 14Z" /><path d="M4 20c3-4 6.3-7.3 11-11M13 19h7M16.5 15.5v7" /></>}
    </svg>
  );
};

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
  const [experienceActiveIndex, setExperienceActiveIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [learningInteractionActive, setLearningInteractionActive] = useState(false);
  const visibleLearning = [-2, -1, 0, 1, 2].map((offset) => {
    const index = (learningActiveIndex + offset + learning.length) % learning.length;
    return { item: learning[index], offset, index };
  });

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
    if (learningInteractionActive) return;
    const interval = window.setInterval(() => {
      setLearningActiveIndex((current) => (current + 1) % learning.length);
    }, 4800);
    return () => window.clearInterval(interval);
  }, [learningInteractionActive]);

  useEffect(() => {
    const carousel = document.querySelector<HTMLElement>(".learning-carousel");
    if (!carousel) return;
    const handleOutsidePointer = (event: PointerEvent) => {
      if (!carousel.contains(event.target as Node)) setLearningInteractionActive(false);
    };
    const handleScroll = () => {
      if (!carousel.contains(document.activeElement)) setLearningInteractionActive(false);
    };
    document.addEventListener("pointerdown", handleOutsidePointer);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", handleOutsidePointer);
      window.removeEventListener("scroll", handleScroll);
    };
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

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".service-gateway-card"));
    const toggleCard = (card: HTMLElement) => {
      const nextState = !card.classList.contains("is-flipped");
      card.classList.toggle("is-flipped", nextState);
      card.setAttribute("aria-pressed", String(nextState));
    };
    const cleanups = cards.map((card) => {
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-pressed", "false");
      const onClick = () => toggleCard(card);
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleCard(card);
        }
      };
      card.addEventListener("click", onClick);
      card.addEventListener("keydown", onKeyDown);
      return () => {
        card.removeEventListener("click", onClick);
        card.removeEventListener("keydown", onKeyDown);
      };
    });
    return () => cleanups.forEach((cleanup) => cleanup());
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

      <section className="service-gateway section-wrap" id="servicios-iniciales" aria-labelledby="lumara-path-title" data-reveal>
        <div className="service-gateway-heading">
          <span className="section-kicker service-gateway-kicker">TU TRANSFORMACIÓN COMIENZA AQUÍ</span>
          <h2 id="lumara-path-title">El camino <em>Lumara</em></h2>
          <p>Una nueva visión del cambio y la transformación consciente. Un camino de evolución interior que te invita a reconocerte, comprender tus emociones, reconectar con tu esencia y construir una realidad alineada con tus verdaderos anhelos. Un proceso que se integra en tu vida cotidiana y te impulsa a evolucionar desde el amor, la conciencia y la plenitud.</p>
        </div>
        <div className="service-gateway-grid" aria-label="Los cinco pilares del recorrido Lumara">
          <article className="service-gateway-card" data-reveal><span className="service-gateway-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="15"/><circle cx="24" cy="24" r="5"/><path d="m24 9 3 12 12 3-12 3-3 12-3-12-12-3 12-3z"/></svg></span><h3>Autoconocimiento</h3><div className="service-gateway-card-copy"><p>Reconocé los patrones que construiste a lo largo de tu vida, observá cómo influyen en tus decisiones, en tus vínculos y en la forma en que habitás el presente. Comprendé qué aspectos te acercan a lo que anhelás y cuáles necesitan una nueva mirada para abrirte a otras posibilidades.</p><span className="service-gateway-prompt">Descubre</span></div></article>
          <article className="service-gateway-card" data-reveal><span className="service-gateway-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M24 39S8 29 8 18a9 9 0 0 1 16-5 9 9 0 0 1 16 5c0 11-16 21-16 21Z"/><path d="M12 24h7l3-6 5 13 3-7h6"/></svg></span><h3>Inteligencia emocional</h3><div className="service-gateway-card-copy"><p>Reconocé qué sentís, cómo se expresa en vos y qué hacés con aquello que te sucede. Explorá las emociones que atraviesan tu día a día, desarrollá recursos para gestionarlas con conciencia y aprendé a diferenciar lo que verdaderamente te pertenece de aquello que incorporaste de tu entorno.</p><span className="service-gateway-prompt">Comprende</span></div></article>
          <article className="service-gateway-card" data-reveal><span className="service-gateway-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M24 39S8 29 8 18a9 9 0 0 1 16-5 9 9 0 0 1 16 5c0 11-16 21-16 21Z"/><path d="M17 24c2 3 4 4 7 4s5-1 7-4"/></svg></span><h3>Amor propio</h3><div className="service-gateway-card-copy"><p>Conectá con tu esencia y reconocé la belleza de quien sos. Visualizá la vida que podés crear desde el amor, la aceptación y la amabilidad hacia vos misma. Hacé del perdón y la gratitud una forma de vincularte con tu historia y de impulsar tu evolución personal.</p><span className="service-gateway-prompt">Valórate</span></div></article>
          <article className="service-gateway-card" data-reveal><span className="service-gateway-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M8 35 20 23l7 7L40 15"/><path d="M29 15h11v11"/><path d="M9 12h9M9 18h5"/></svg></span><h3>Expansión y propósito</h3><div className="service-gateway-card-copy"><p>Imaginá y construí una realidad alineada con tus verdaderos anhelos, desde la abundancia, la prosperidad y la libertad emocional. Expandí tu desarrollo personal y espiritual, y conectá con la posibilidad de manifestar conscientemente una vida plena, en armonía, gratitud y paz interior.</p><span className="service-gateway-prompt">Evoluciona</span></div></article>
          <article className="service-gateway-card" data-reveal><span className="service-gateway-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M24 7v34M10 15h28M14 15 7 29h14L14 15Zm20 0-7 14h14L34 15Z"/><path d="M17 41h14"/></svg></span><h3>Equilibrio</h3><div className="service-gateway-card-copy"><p>Convertí lo aprendido en acciones concretas y sostenibles. Integrá nuevas perspectivas, hábitos y prácticas a tu día a día, creando una rutina consciente que acompañe tu bienestar y te permita vivir los principios Lumara como parte de un camino de evolución continua.</p><span className="service-gateway-prompt">Integra</span></div></article>
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
              Comienza tu evolución
            </a>
          </div>
        </div>
      </section>

      <section className="experiences-section lumara-experiences section-wrap" id="experiencias" data-reveal aria-labelledby="experiences-title">
        <span id="eventos" className="anchor-target" aria-hidden="true" />
        <div className="lumara-experiences-heading">
          <span className="section-kicker">LA COMUNIDAD LUMARA</span>
          <h2 id="experiences-title">Viví la experiencia <em>Lumara</em></h2>
          <p>Encuentros, terapias y herramientas que integran espiritualidad, bienestar y desarrollo personal para acompañarte en tu evolución.</p>
        </div>

        <div className="lumara-experience-showcase">
          <div className="lumara-experience-gallery" aria-label="Elegí una experiencia Lumara">
            <div className="lumara-gallery-orbit" aria-hidden="true" />
            <div className="lumara-gallery-cards">
              {experiences.map((item, index) => {
                const position = (index - experienceActiveIndex + experiences.length) % experiences.length;
                return (
                  <button
                    className={`lumara-gallery-card lumara-gallery-card-pos-${position} ${index === experienceActiveIndex ? "is-active" : ""}`}
                    key={item.title}
                    type="button"
                    onClick={() => setExperienceActiveIndex(index)}
                    aria-pressed={index === experienceActiveIndex}
                    aria-label={`Explorar ${item.title}`}
                    style={{ order: position }}
                  >
                    <span className="lumara-gallery-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(37,25,49,.02) 25%, rgba(37,25,49,.78) 100%), url("${item.image}")` }} role="img" aria-label={item.alt} />
                    <span className="lumara-gallery-card-shine" aria-hidden="true" />
                    <span className="lumara-gallery-card-label"><i><ExperienceIcon name={item.icon} /></i><b>{item.title}</b></span>
                  </button>
                );
              })}
            </div>
            <div className="lumara-gallery-controls">
              <div className="lumara-gallery-dots" aria-label="Seleccionar experiencia">
                {experiences.map((item, index) => (
                  <button key={item.title} type="button" aria-label={item.title} aria-current={index === experienceActiveIndex ? "true" : undefined} onClick={() => setExperienceActiveIndex(index)} />
                ))}
              </div>
            </div>
          </div>

          <article className="lumara-experience-detail" aria-live="polite" aria-atomic="true" key={experiences[experienceActiveIndex].title}>
            <div className="lumara-detail-art">
              <img src={experiences[experienceActiveIndex].image} alt={experiences[experienceActiveIndex].alt} />
              <span className="lumara-detail-art-icon"><ExperienceIcon name={experiences[experienceActiveIndex].icon} /></span>
            </div>
            <div className="lumara-detail-copy">
              <span className="lumara-detail-eyebrow">EXPLORÁ ESTA EXPERIENCIA</span>
              <h3>{experiences[experienceActiveIndex].title}</h3>
              <span className="lumara-detail-subtitle">{experiences[experienceActiveIndex].subtitle}</span>
              <p>{experiences[experienceActiveIndex].description}</p>
            </div>
            <div className="lumara-detail-highlights">
              {experiences[experienceActiveIndex].highlights.map((highlight) => (
                <span key={highlight}><i aria-hidden="true">✧</i>{highlight}</span>
              ))}
            </div>
            <a className="lumara-experience-cta" href="#aprender">Conocer más</a>
          </article>
        </div>
      </section>

      <TrainingGallery />

      <section className="learning-section learning-showcase" id="aprender" data-reveal aria-labelledby="learning-title">
        <div className="learning-showcase-heading">
          <span className="section-kicker">DESCUBRÍ TODO LO QUE VIVE EN LUMARA</span>
          <h2 id="learning-title">Aprender, practicar, acompañar y <em>transformar.</em></h2>
          <p>Elegí tu próximo paso para crecer, aprender y transformar tu camino.</p>
        </div>
        <div
          className={`learning-carousel ${learningInteractionActive ? "is-interacting" : "is-autoplay"}`}
          aria-roledescription="carrusel"
          aria-label="Propuestas de aprendizaje Lumara"
          onPointerEnter={() => setLearningInteractionActive(true)}
          onPointerLeave={() => setLearningInteractionActive(false)}
          onFocusCapture={() => setLearningInteractionActive(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setLearningInteractionActive(false);
            }
          }}
        >
          <button className="learning-carousel-arrow learning-carousel-prev" type="button" aria-label="Ver propuesta anterior" onClick={() => { setLearningInteractionActive(true); setLearningActiveIndex((current) => (current - 1 + learning.length) % learning.length); }}>‹</button>
          <div className="learning-carousel-stage" aria-live="polite">
            {visibleLearning.map(({ item, offset, index }) => (
              <article
                className={`learning-feature-card learning-carousel-card ${offset === 0 ? "is-center" : Math.abs(offset) === 1 ? "is-near" : "is-far"}`}
                key={item.title}
                onPointerEnter={() => { setLearningInteractionActive(true); setLearningActiveIndex(index); }}
                onPointerLeave={() => setLearningInteractionActive(false)}
                onClick={() => { setLearningInteractionActive(true); setLearningActiveIndex(index); }}
                aria-label={`Seleccionar ${item.title}`}
              >
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
          <button className="learning-carousel-arrow learning-carousel-next" type="button" aria-label="Ver propuesta siguiente" onClick={() => { setLearningInteractionActive(true); setLearningActiveIndex((current) => (current + 1) % learning.length); }}>›</button>
        </div>
        <div className="learning-carousel-pagination" aria-label={`Propuesta ${learningActiveIndex + 1} de ${learning.length}`}>
          {learning.map((item, index) => <button key={item.title} type="button" aria-label={`Mostrar ${item.title}`} aria-current={index === learningActiveIndex ? "true" : undefined} onClick={() => { setLearningInteractionActive(true); setLearningActiveIndex(index); }} />)}
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
