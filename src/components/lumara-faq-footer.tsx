import styles from "./lumara-faq-footer.module.css";

const questions = [
  {
    question: "¿Qué es Lumara y qué voy a encontrar en este espacio?",
    answer: "Lumara es un espacio de espiritualidad consciente, bienestar y desarrollo personal. Encontrarás formaciones, talleres, prácticas, recursos y experiencias para acompañar tu propio camino de autoconocimiento."
  },
  {
    question: "¿Necesito tener experiencia previa para participar?",
    answer: "No necesariamente. Cada propuesta indica si está pensada para principiantes o si requiere conocimientos previos. Podés elegir la experiencia que mejor se adapte a tu momento."
  },
  {
    question: "¿Cuál es la diferencia entre cursos, talleres y mentorías?",
    answer: "Los cursos permiten aprender y profundizar a tu ritmo; los talleres proponen experiencias prácticas y participativas; y las mentorías ofrecen un espacio de acompañamiento más personalizado. En cada propuesta vas a encontrar su modalidad y alcance."
  },
  {
    question: "¿Cómo puedo inscribirme o reservar una experiencia?",
    answer: "Ingresá a la propuesta que te interese y seguí las indicaciones de inscripción. Si necesitás orientación antes de elegir, podés escribirnos por Instagram."
  },
  {
    question: "¿Las actividades son presenciales u online?",
    answer: "La modalidad depende de cada actividad. En la descripción de cada curso, taller o experiencia se informa si es online, presencial o si cuenta con otra modalidad."
  },
  {
    question: "¿Qué medios de pago y valores tienen las propuestas?",
    answer: "Los valores, medios de pago y condiciones se informan en la página de cada propuesta antes de realizar la inscripción."
  },
  {
    question: "¿Recibo certificado al finalizar una formación?",
    answer: "Cuando una formación incluye certificado, esa información se indica expresamente en su descripción, junto con las condiciones para obtenerlo."
  },
  {
    question: "¿Cómo puedo hacer una consulta o recibir ayuda?",
    answer: "Podés contactarnos a través de Instagram. Contanos qué necesitás y te orientaremos para encontrar la propuesta adecuada."
  }
];

export default function LumaraFaqFooter() {
  return (
    <>
      <section className={styles.faq} id="preguntas-frecuentes" aria-labelledby="faq-title">
        <div className={styles.faqInner}>
          <header className={styles.faqHeading}>
            <span className={styles.eyebrow}>ESTAMOS PARA ACOMPAÑARTE</span>
            <h2 id="faq-title">Todo lo que necesitás saber para comenzar</h2>
            <p>Encontrá respuestas a las preguntas más frecuentes y descubrí cómo empezar tu camino en Lumara.</p>
          </header>
          <div className={styles.questions}>
            {questions.map((item, index) => (
              <details className={styles.question} key={item.question}>
                <summary><span className={styles.questionNumber}>{String(index + 1).padStart(2, "0")}</span><span>{item.question}</span><i aria-hidden="true">+</i></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer} id="contactos">
        <div className={styles.footerMain}>
          <div className={styles.identity}>
            <a className={styles.logo} href="#inicio" aria-label="Lumara, volver al inicio">
              <img className={styles.moon} src="/lumara-proyect/assets/img/logo/isotipo-luna.webp" alt="" />
              <img className={styles.wordmark} src="/lumara-proyect/assets/img/logo/lumara-web.webp" alt="Lumara" onError={(event) => { event.currentTarget.style.display = "none"; const fallback = event.currentTarget.nextElementSibling as HTMLElement | null; if (fallback) fallback.style.display = "block"; }} />
              <span className={styles.wordmarkFallback} aria-hidden="true">LUMARA</span>
            </a>
            <span className={styles.tagline}>ESPIRITUALIDAD CONSCIENTE</span>
            <p>Un espacio para volver a vos, conectar con tu esencia y abrir nuevos caminos.</p>
          </div>

          <nav className={styles.footerColumn} aria-label="Navegación principal del pie de página">
            <h3>Navegación</h3>
            <a href="#universo">Nosotros</a>
            <a href="#experiencias">Experiencias</a>
            <a href="#aprender">Aprendizaje</a>
            <a href="#eventos">Eventos</a>
            <a href="#comunidad">Comunidad</a>
            <a href="#biblioteca">Recursos</a>
            <a href="#contactos">Contacto</a>
          </nav>

          <nav className={styles.footerColumn} aria-label="Espacios Lumara">
            <h3>Espacios Lumara</h3>
            <a href="#inicio">Lumara</a>
            <a href="/es/capacitaciones/cursos/">Cursos</a>
            <a href="/es/capacitaciones/talleres/">Talleres</a>
            <a href="/es/capacitaciones/formacion-de-coachs/">Formación de Coachs</a>
            <a href="/es/capacitaciones/mentorias/">Mentorías</a>
            <a href="/es/capacitaciones/eventos-para-empresas/">Eventos para Empresas</a>
          </nav>

          <div className={styles.footerColumn}>
            <h3>Contacto y comunidad</h3>
            <div className={styles.socialRow} aria-label="Redes sociales de Lumara">
              <a className={styles.socialIcon} href="https://www.instagram.com/espacio.lumara/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.6" cy="6.7" r="1"/></svg>
              </a>
              <a className={styles.socialIcon} href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.5 1.6-1.5h1.7V3.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H8v3.2h2.8v8z"/></svg>
              </a>
              <a className={styles.socialIcon} href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok" title="TikTok">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v11.1a3.2 3.2 0 1 1-2.7-3.1V8.2a6.2 6.2 0 1 0 5.8 6.2V9.1c1.3 1 2.8 1.5 4.4 1.6V7.4c-3-.2-5.2-2-5.6-4.4z"/></svg>
              </a>
              <a className={styles.socialIcon} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.7H2.4V21h2.8zM3.8 3a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM21.6 13.9c0-3.7-2-5.4-4.7-5.4a4.1 4.1 0 0 0-3.7 2v-1.7h-2.8V21h2.8v-6.1c0-1.6.3-3.2 2.3-3.2s2 1.9 2 3.3V21h2.8z"/></svg>
              </a>
            </div>
            <a className={styles.newsletterLink} href="#newsletter">Suscribite al newsletter <span aria-hidden="true">↗</span></a>
            <h4>Correo electrónico</h4>
            <a href="mailto:consultas@lumara.com">consultas@lumara.com</a>
          </div>
        </div>

        <div className={styles.legal}>
          <span>© 2026 Lumara® · Marca registrada. Todos los derechos reservados.</span>
          <span>Diseño y desarrollo web por <a href="https://www.instagram.com/gfdigitalstudio/" target="_blank" rel="noreferrer">GF Studio Digital ↗</a></span>
        </div>
      </footer>
    </>
  );
}
