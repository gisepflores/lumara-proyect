"use client";

const firstRail = [
  { slug: "tarot-consciente", title: "Tarot consciente", kicker: "INTUICIÓN · AUTOCONOCIMIENTO", image: "/lumara-proyect/assets/img/logo/chica2-relax.jpg", position: "58% 45%" },
  { slug: "meditacion-guiada", title: "Meditación guiada", kicker: "CALMA · PRESENCIA", image: "/lumara-proyect/assets/img/lumara-lotus-hero.webp", position: "50% 50%" },
  { slug: "sanacion-emocional", title: "Sanación emocional", kicker: "LIBERÁ · TRANSFORMÁ", image: "/lumara-proyect/assets/img/metodolumara/fondo-chica-lumara.png", position: "68% 42%" },
  { slug: "astrologia-consciente", title: "Astrología consciente", kicker: "CICLOS · PROPÓSITO", image: "/lumara-proyect/assets/img/metodolumara/chica2-relax.jpg", position: "35% 50%" },
  { slug: "escritura-terapeutica", title: "Escritura terapéutica", kicker: "EXPLORÁ · EXPRESÁ", image: "/lumara-proyect/assets/img/logo/chica-relax.png", position: "60% 45%" },
  { slug: "sonoterapia", title: "Sonoterapia", kicker: "SONIDO · ARMONÍA", image: "/lumara-proyect/assets/img/lumara-lotus-hero.webp", position: "20% 50%" },
  { slug: "bienestar-holistico", title: "Bienestar holístico", kicker: "CUERPO · MENTE · ALMA", image: "/lumara-proyect/assets/img/metodolumara/fondo-chica-lumara.png", position: "20% 50%" },
  { slug: "gestion-emocional", title: "Gestión emocional", kicker: "EQUILIBRIO · HERRAMIENTAS", image: "/lumara-proyect/assets/img/logo/chica2-relax.jpg", position: "78% 50%" },
  { slug: "proposito-de-vida", title: "Propósito de vida", kicker: "DIRECCIÓN · SENTIDO", image: "/lumara-proyect/assets/img/metodolumara/chica-lumara.png", position: "48% 35%" },
  { slug: "oraculos-y-rituales", title: "Oráculos y rituales", kicker: "SÍMBOLOS · INTENCIÓN", image: "/lumara-proyect/assets/img/lumara-lotus-hero.webp", position: "75% 45%" },
  { slug: "abundancia-consciente", title: "Abundancia consciente", kicker: "APERTURA · CONFIANZA", image: "/lumara-proyect/assets/img/metodolumara/chica2-relax.jpg", position: "75% 40%" },
  { slug: "autocuidado-espiritual", title: "Autocuidado espiritual", kicker: "PAUSA · CONEXIÓN", image: "/lumara-proyect/assets/img/logo/chica-relax.png", position: "35% 55%" }
];

const secondRail = [
  { slug: "mindfulness-cotidiano", title: "Mindfulness cotidiano", kicker: "ATENCIÓN · PRESENTE", image: "/lumara-proyect/assets/img/metodolumara/chica-lumara.png", position: "35% 45%" },
  { slug: "cristales-y-energia", title: "Cristales y energía", kicker: "CONEXIÓN · ARMONÍA", image: "/lumara-proyect/assets/img/lumara-lotus-hero.webp", position: "50% 50%" },
  { slug: "limpieza-energetica", title: "Limpieza energética", kicker: "RENOVACIÓN · CALMA", image: "/lumara-proyect/assets/img/metodolumara/fondo-chica-lumara.png", position: "80% 50%" },
  { slug: "amor-propio", title: "Amor propio", kicker: "AUTOESTIMA · CUIDADO", image: "/lumara-proyect/assets/img/logo/chica2-relax.jpg", position: "48% 50%" },
  { slug: "ciclos-lunares", title: "Ciclos lunares", kicker: "RITMO · INTUICIÓN", image: "/lumara-proyect/assets/img/lumara-lotus-hero.webp", position: "70% 40%" },
  { slug: "habitos-conscientes", title: "Hábitos conscientes", kicker: "PEQUEÑOS CAMBIOS · BIENESTAR", image: "/lumara-proyect/assets/img/logo/chica-relax.png", position: "65% 50%" },
  { slug: "registros-akashicos", title: "Registros akáshicos", kicker: "MEMORIA · EXPLORACIÓN", image: "/lumara-proyect/assets/img/metodolumara/chica2-relax.jpg", position: "55% 45%" },
  { slug: "respiracion-consciente", title: "Respiración consciente", kicker: "PAUSA · VITALIDAD", image: "/lumara-proyect/assets/img/metodolumara/chica-lumara.png", position: "65% 35%" },
  { slug: "rituales-de-bienestar", title: "Rituales de bienestar", kicker: "INTENCIÓN · PRESENCIA", image: "/lumara-proyect/assets/img/logo/lumara-web.webp", position: "50% 50%" },
  { slug: "aromaterapia-holistica", title: "Aromaterapia holística", kicker: "SENTIDOS · EQUILIBRIO", image: "/lumara-proyect/assets/img/logo/chica-relax.png", position: "20% 45%" },
  { slug: "vinculos-conscientes", title: "Vínculos conscientes", kicker: "ESCUCHA · EMPATÍA", image: "/lumara-proyect/assets/img/metodolumara/fondo-chica-lumara.png", position: "55% 50%" },
  { slug: "espiritualidad-practica", title: "Espiritualidad práctica", kicker: "INTEGRACIÓN · VIDA DIARIA", image: "/lumara-proyect/assets/img/logo/chica2-relax.jpg", position: "35% 55%" }
];

function Rail({ items, direction, label }: { items: typeof firstRail; direction: "left" | "right"; label: string }) {
  const repeated = [...items, ...items];
  return (
    <div className={`training-rail training-rail-${direction}`} aria-label={label}>
      <div className="training-track">
        {repeated.map((item, index) => (
          <a
            className="training-card"
            href={`/es/capacitaciones/${item.slug}/`}
            key={`${item.slug}-${index}`}
            style={{ backgroundImage: `linear-gradient(90deg, rgba(47,35,58,.84) 0%, rgba(70,49,83,.56) 48%, rgba(70,49,83,.06) 100%), url("${item.image}")`, backgroundPosition: `center, ${item.position}` }}
            aria-label={`Conocer capacitación: ${item.title}`}
          >
            <span className="training-card-kicker">{item.kicker}</span>
            <span className="training-card-title">{item.title}</span>
            <span className="training-card-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function TrainingGallery() {
  return (
    <section className="training-gallery" id="capacitaciones" aria-labelledby="training-gallery-title">
      <div className="training-gallery-heading">
        <span className="section-kicker">CAPACITACIONES LUMARA</span>
        <h2 id="training-gallery-title">Expandí tu camino de <em>bienestar.</em></h2>
        <p>Elegí la capacitación que más resuene con vos y acompañá tu crecimiento personal, espiritual y emocional.</p>
      </div>
      <div className="training-rails">
        <Rail items={firstRail} direction="left" label="Capacitaciones, primera galería" />
        <Rail items={secondRail} direction="right" label="Capacitaciones, segunda galería" />
      </div>
    </section>
  );
}
