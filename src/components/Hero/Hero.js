import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.subtitle}>Qualcosa di grosso sta per succedere in Calabria</h2>
          <h1 className={styles.title}>Stati Generali del Fare 2026</h1>
          <p className={styles.description}>
            20, 21 e 22 Marzo — Altafiumara Resort & Spa
          </p>
          <div className={styles.actions}>
            <a href="https://www.eventbrite.it/e/1984610354996?aff=oddtdtcreator" target="_blank" rel="noreferrer" className="btn">
              Acquista il Biglietto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}