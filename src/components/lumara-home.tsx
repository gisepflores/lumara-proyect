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
  return (
    <main id="inicio">
      <div className="announcement">
        <span>Un espacio para volver a vos</span>
        <span className="announcement-dot" aria-hidden="true">✦</span>
        <span>Espiritualidad consciente</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Lumara, inicio">
          <span className="brand-name">LUMARA</span>
          <span className="brand-caption">ESPIRITUALIDAD CONSCIENTE</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#universo">Universo</a>
          <a href="#experiencias">Experiencias</a>
          <a href="#aprender">Aprender</a>
          <a href="#biblioteca">Biblioteca</a>
        </nav>
        <a className="header-action" href="#mi-lumara">
          Mi Lumara <span aria-hidden="true">↗</span>
        </a>
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

      <section className="experiences-section section-wrap" id="experiencias">
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

      <footer className="site-footer">
        <a className="footer-brand" href="#inicio">
          <span className="brand-name">LUMARA</span>
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
