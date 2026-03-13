import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.topInfo}>
          <h4>Gli Stati Generali del Fare 2026</h4>
          <p>Powered by Ambasciatori di Calabria</p>
          <p>20 — 22 Marzo | Altafiumara Resort & Spa Villa San Giovanni (RC)</p>
          <div className={styles.credits}>
            <p>Questa comunicazione è a cura di <strong>Dritara</strong> — Illuminiamo il futuro tech del Sud Italia.</p>
          </div>
        </div>

        <div className={styles.socials}>
          {/* Social icons can be added here replacing text */}
          <a href="#" className={styles.socialIcon}>FB</a>
          <a href="#" className={styles.socialIcon}>IG</a>
          <a href="#" className={styles.socialIcon}>LI</a>
          <a href="#" className={styles.socialIcon}>WEB</a>
        </div>

        <div className={styles.bottomInfo}>
          <p>&copy; Copyright 2026 Dritara. Tutti i diritti riservati.</p>
          <p>Sede Legale: San Basile (CS)</p>
          <p>P.IVA: 03979980780</p>
        </div>
      </div>
    </footer>
  );
}
