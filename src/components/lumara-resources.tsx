"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./lumara-resources.module.css";

const resources = [
  { title: "Mantras", subtitle: "Sonido, equilibrio y enfoque", detail: "Afirmaciones y prácticas sonoras para comenzar el día con intención, recuperar el foco y acompañar tus momentos de quietud.", icon: "✧", href: "/es/recursos/mantras/" },
  { title: "Agendas Holísticas", subtitle: "Organización con propósito", detail: "Planificá tus semanas integrando metas, hábitos, descanso, gratitud y espacios para escucharte.", icon: "▤", href: "/es/recursos/agendas-holisticas/" },
  { title: "Calendarios Lunares", subtitle: "Ciclos, energía y manifestación", detail: "Una guía para reconocer las fases lunares y acompañar cada ciclo con preguntas y propuestas de reflexión.", icon: "☾", href: "/es/recursos/calendarios-lunares/" },
  { title: "Wallpapers", subtitle: "Inspiración en tu espacio digital", detail: "Fondos para PC y celular con la paleta Lumara, frases y composiciones para renovar tus espacios digitales.", icon: "◇", href: "/es/recursos/wallpapers/" },
  { title: "Recursos de Audio", subtitle: "Spotify, YouTube y más", detail: "Meditaciones, visualizaciones y selecciones de audio para respirar, descansar y sumar momentos conscientes a tu rutina.", icon: "♫", href: "/es/recursos/audios/" }
];

export default function LumaraResources() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || !("IntersectionObserver" in window)) {
      setRevealed(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${revealed ? styles.revealed : ""}`}
      id="biblioteca"
      aria-labelledby="resources-title"
      onMouseEnter={() => setRevealed(true)}
      onFocusCapture={() => setRevealed(true)}
      onTouchStart={() => setRevealed(true)}
    >
      <header className={styles.heading}>
        <span className={styles.kicker}><i /> RECURSOS GRATUITOS <i /></span>
        <h2 id="resources-title">Recursos para tu bienestar y <em>vida consciente</em></h2>
        <p>Herramientas, prácticas y materiales de libre acceso para acompañarte en tu camino.</p>
      </header>

      <div className={styles.stage}>
        <div className={styles.orbit} aria-hidden="true"><span /><span /><span /></div>
        <div className={styles.lotus} aria-hidden="true">
          <div className={styles.lotusGlow} />
          <img src="/lumara-proyect/assets/img/logo/loto-recursos.png" alt="" />
          <span>UN MOMENTO PARA VOS</span>
        </div>
        <div className={styles.deck}>
          {resources.map((item, index) => (
            <article
              key={item.title}
              className={`${styles.card} ${activeCard === index ? styles.flipped : ""} ${index === 2 ? styles.featured : ""}`}
              style={{ "--index": index } as React.CSSProperties}
            >
              <button
                type="button"
                className={styles.cardButton}
                aria-label={activeCard === index ? `Volver a ${item.title}` : `Ver detalle de ${item.title}`}
                aria-pressed={activeCard === index}
                onClick={() => {
                  setRevealed(true);
                  setActiveCard((current) => current === index ? null : index);
                }}
              >
                <span className={styles.front}>
                  <span className={styles.cardIcon}>{item.icon}</span>
                  <span className={styles.cardEyebrow}>LUMARA · RECURSO GRATUITO</span>
                  <strong>{item.title}</strong>
                  <span className={styles.cardHint}>Descubrí este recurso <b>↗</b></span>
                </span>
                <span className={styles.back}>
                  <span className={styles.backIcon}>{item.icon}</span>
                  <strong>{item.title}</strong>
                  <span className={styles.subtitle}>{item.subtitle}</span>
                  <span className={styles.detail}>{item.detail}</span>
                  <span className={styles.backCta}>Conocer más <b>→</b></span>
                </span>
              </button>
              <a className={styles.access} href={item.href}>Acceder al recurso <span>→</span></a>
            </article>
          ))}
        </div>
        <p className={styles.hint}>{revealed ? "Elegí una carta para descubrir lo que preparamos para vos" : "Desplazate hasta aquí o acercá el cursor para revelar los recursos"}</p>
      </div>
    </section>
  );
}
