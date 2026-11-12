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
            <h2 id="faq-title">Preguntas <em>frecuentes</em></h2>
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
            </div>
            <a className={styles.newsletterLink} href="#newsletter">Suscribite al newsletter <span aria-hidden="true">↗</span></a>
            <h4>Correo electrónico</h4>
            <p>Próximamente, nuestro canal directo de contacto.</p>
            <h4>Horarios de atención</h4>
            <p>Atención online. Consultas y coordinación de horarios a través de nuestros canales de contacto.</p>
            <h4>Asistente virtual Luna</h4>
            <p>Muy pronto vas a poder comunicarte con Luna por WhatsApp.</p>
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
