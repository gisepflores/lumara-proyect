"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "UN VIAJE HACIA ADENTRO",
    title: <>Volvé a conectar<br />con tu <em>esencia.</em></>,
    body: "Un espacio para explorar, aprender y acompañar tu camino de autoconocimiento. A tu ritmo, desde tu propia búsqueda.",
    primary: "Explorar experiencias",
    primaryHref: "#experiencias",
    secondary: "Conocer Lumara",
    secondaryHref: "#universo",
    note: "Un lugar para descubrir nuevas perspectivas.",
    tone: "one"
  },
  {
    eyebrow: "EXPERIENCIAS PARA VOS",
    title: <>Un momento para<br /><em>volver a vos.</em></>,
    body: "Tarot, encuentros y espacios de acompañamiento para explorar lo que estás viviendo y abrir nuevas perspectivas.",
    primary: "Descubrir experiencias",
    primaryHref: "#experiencias",
    secondary: "Encontrar mi espacio",
    secondaryHref: "#experiencias",
    note: "Cada recorrido comienza desde donde estás hoy.",
    tone: "two"
  },
  {
    eyebrow: "TAROT CONSCIENTE",
    title: <>Escuchá lo que<br />tu interior quiere <em>mostrarte.</em></>,
    body: "Una herramienta simbólica de reflexión y autoconocimiento para mirar tus preguntas desde otro lugar.",
    primary: "Explorar tarot y lecturas",
    primaryHref: "#experiencias",
    secondary: "Conocer nuestra mirada",
    secondaryHref: "#universo",
    note: "Una invitación a preguntar, sentir y descubrir.",
    tone: "three"
  },
  {
    eyebrow: "APRENDER · EXPLORAR · TRANSFORMAR",
    title: <>Aprender también<br />puede <em>transformarte.</em></>,
    body: "Talleres, cursos y formaciones para descubrir herramientas, ampliar tu mirada y avanzar a tu propio ritmo.",
    primary: "Explorar talleres y cursos",
    primaryHref: "#aprender",
    secondary: "Ver el espacio de aprendizaje",
    secondaryHref: "#aprender",
    note: "Conocimiento para llevar a tu vida cotidiana.",
    tone: "four"
  },
  {
    eyebrow: "COMUNIDAD LUMARA",
    title: <>Un camino propio,<br />un espacio para <em>compartir.</em></>,
    body: "Un universo de experiencias, aprendizajes y encuentros para conectar con vos y con otras personas en búsqueda.",
    primary: "Conocer Lumara",
    primaryHref: "#universo",
    secondary: "Sumarme a la comunidad",
    secondaryHref: "#mi-lumara",
    note: "Tu espacio. Tu tiempo. Tu recorrido.",
    tone: "five"
  }
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const goTo = (index: number) => setActive((index + slides.length) % slides.length);
  const slide = slides[active];

  return (
    <section
      className="hero-carousel"
      aria-roledescription="carrusel"
      aria-label="Descubrí el universo Lumara"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div className="hero-carousel-track" aria-live="off">
        <div key={active} className={`hero-slide hero-slide--${slide.tone}`}>
          <div className="hero-slide-content">
            <p className="eyebrow"><span className="eyebrow-line" /> {slide.eyebrow}</p>
            <h1>{slide.title}</h1>
            <p className="hero-intro">{slide.body}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={slide.primaryHref}>
                {slide.primary} <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href={slide.secondaryHref}>
                {slide.secondary} <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="hero-footnote">
              <span className="tiny-star" aria-hidden="true">✳</span>
              <span>{slide.note}</span>
            </div>
          </div>
        </div>
      </div>

      <button className="hero-arrow hero-arrow--prev" type="button" aria-label="Diapositiva anterior" onClick={() => goTo(active - 1)}>‹</button>
      <button className="hero-arrow hero-arrow--next" type="button" aria-label="Diapositiva siguiente" onClick={() => goTo(active + 1)}>›</button>

      <div className="hero-indicators" role="group" aria-label="Elegir portada">
        {slides.map((item, index) => (
          <button
            key={item.tone}
            type="button"
            className={`hero-indicator${active === index ? " is-active" : ""}`}
            aria-label={`Mostrar portada ${index + 1} de ${slides.length}`}
            aria-current={active === index ? "true" : undefined}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
      <span className="hero-slide-count">{String(active + 1).padStart(2, "0")} / 05</span>
    </section>
  );
}
