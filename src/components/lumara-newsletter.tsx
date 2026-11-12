"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import styles from "./lumara-newsletter.module.css";

export default function LumaraNewsletter() {
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setNotice("Gracias por tu interés. Estamos preparando el espacio de suscripción; todavía no registramos tu correo.");
  }

  return (
    <section className={styles.section} aria-labelledby="newsletter-title" id="newsletter">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.kicker}>NOVEDADES Y EXPERIENCIAS LUMARA</span>
          <h2 id="newsletter-title">Suscribite y seguí inspirando tu camino consciente.</h2>
          <p className={styles.intro}>Suscribite y recibí información exclusiva para acompañar tu camino de bienestar, conciencia y transformación.</p>
          <ul className={styles.benefits}>
            <li><span aria-hidden="true">✧</span><span>Reflexiones y herramientas para tu bienestar emocional y espiritual.</span></li>
            <li><span aria-hidden="true">☾</span><span>Prácticas, meditaciones y rituales para conectar con tus ciclos.</span></li>
            <li><span aria-hidden="true">✦</span><span>Recursos y beneficios exclusivos para nuestra comunidad.</span></li>
            <li><span aria-hidden="true">✧</span><span>Capacitaciones y experiencias exclusivas de Lumara.</span></li>
          </ul>
        </div>

        <div className={styles.formPanel}>
          <span className={styles.formOrnament} aria-hidden="true">✧</span>
          <span className={styles.formKicker}>TU MOMENTO LUMARA</span>
          <h3>Sumate y creá un espacio para lo que te hace bien.</h3>
          <p>Dejanos tu correo y pronto vas a poder recibir nuestras novedades.</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="lumara-newsletter-email">Tu correo electrónico</label>
            <input
              id="lumara-newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="nombre@correo.com"
              value={email}
              onChange={(event) => { setEmail(event.target.value); setNotice(""); }}
              required
            />
            <button type="submit">Quiero recibir novedades</button>
            <small>Al suscribirte, aceptás recibir comunicaciones de Lumara. Podés darte de baja cuando quieras.</small>
            {notice && <p className={styles.notice} role="status">{notice}</p>}
          </form>
          <div className={styles.formFoot}><span /> LUMARA · ESPIRITUALIDAD CONSCIENTE <span /></div>
        </div>
      </div>
    </section>
  );
}
