import Link from "next/link";
import { notFound } from "next/navigation";

const trainings = {
  "tarot-consciente": ["Tarot consciente", "Una formación para acercarte al lenguaje simbólico del tarot, desarrollar tu intuición y explorar nuevas perspectivas de autoconocimiento."],
  "meditacion-guiada": ["Meditación guiada", "Prácticas para cultivar la calma, entrenar la atención y crear momentos de conexión interior en tu vida cotidiana."],
  "sanacion-emocional": ["Sanación emocional", "Un recorrido de exploración personal para reconocer emociones, integrar experiencias y acompañar tus procesos con amabilidad."],
  "astrologia-consciente": ["Astrología consciente", "Una introducción a los símbolos y ciclos astrológicos como herramientas de reflexión y comprensión personal."],
  "escritura-terapeutica": ["Escritura terapéutica", "Propuestas de escritura para expresar lo que sentís, ordenar pensamientos y abrir nuevas preguntas."],
  "sonoterapia": ["Sonoterapia", "Una experiencia de escucha y relajación a través del sonido, la vibración y la atención plena."],
  "bienestar-holistico": ["Bienestar holístico", "Herramientas y hábitos para integrar el cuidado del cuerpo, la mente y el mundo emocional."],
  "gestion-emocional": ["Gestión emocional", "Recursos para reconocer tus emociones, comprender tus necesidades y responder con mayor equilibrio."],
  "proposito-de-vida": ["Propósito de vida", "Un espacio de reflexión para identificar valores, intereses y direcciones que den sentido a tus decisiones."],
  "oraculos-y-rituales": ["Oráculos y rituales", "Explorá prácticas simbólicas para conectar con tu intuición y dar intención a tus momentos cotidianos."],
  "abundancia-consciente": ["Abundancia consciente", "Una mirada integral sobre creencias, hábitos y decisiones para construir una relación más consciente con la abundancia."],
  "autocuidado-espiritual": ["Autocuidado espiritual", "Ideas y prácticas para crear una rutina personal de pausa, conexión y cuidado interior."],
  "mindfulness-cotidiano": ["Mindfulness cotidiano", "Aprendé a llevar la atención al presente con prácticas simples y posibles para todos los días."],
  "cristales-y-energia": ["Cristales y energía", "Conocé el uso tradicional y simbólico de los cristales como apoyo para tus rituales de intención y bienestar."],
  "limpieza-energetica": ["Limpieza energética", "Prácticas conscientes para renovar tus espacios y crear ambientes que acompañen tu bienestar."],
  "amor-propio": ["Amor propio", "Un recorrido para fortalecer la autoestima, reconocer tus necesidades y construir un vínculo más amable con vos."],
  "ciclos-lunares": ["Ciclos lunares", "Conectá con los ritmos de la luna a través de información, reflexión y propuestas de registro personal."],
  "habitos-conscientes": ["Hábitos conscientes", "Pequeños cambios sostenibles para acompañar tus objetivos y crear una vida más alineada con tus prioridades."],
  "registros-akashicos": ["Registros akáshicos", "Una aproximación introductoria y reflexiva a esta práctica espiritual desde el respeto por las distintas creencias."],
  "respiracion-consciente": ["Respiración consciente", "Ejercicios suaves de respiración y presencia para acompañar pausas, descanso y regulación cotidiana."],
  "rituales-de-bienestar": ["Rituales de bienestar", "Diseñá pequeños rituales personales que te ayuden a marcar intenciones y habitar tus días con más presencia."],
  "aromaterapia-holistica": ["Aromaterapia holística", "Conocé el universo de los aromas y su uso tradicional para acompañar experiencias de bienestar."],
  "vinculos-conscientes": ["Vínculos conscientes", "Herramientas de comunicación, escucha y reflexión para construir relaciones más cuidadas y auténticas."],
  "espiritualidad-practica": ["Espiritualidad práctica", "Ideas para integrar la búsqueda espiritual en decisiones, vínculos y hábitos de todos los días."]
} as const;

export function generateStaticParams() {
  return Object.keys(trainings).map((slug) => ({ locale: "es", slug }));
}

export default async function TrainingPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (locale !== "es" || !(slug in trainings)) notFound();
  const [title, description] = trainings[slug as keyof typeof trainings];

  return (
    <main className="training-detail-page">
      <div className="training-detail-glow" aria-hidden="true" />
      <Link className="training-detail-brand" href="/es/">LUMARA</Link>
      <section className="training-detail-content">
        <span className="section-kicker">APRENDIZAJE · LUMARA</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="training-detail-note">
          Estamos preparando esta experiencia para acompañarte en tu camino de crecimiento personal.
        </div>
        <Link className="training-detail-back" href="/es/#capacitaciones">Volver a las capacitaciones <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
