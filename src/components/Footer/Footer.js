import Image from 'next/image';
import styles from './footer.module.css';
import igLogo from '../../assets/ig_logo.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.topInfo}>
          <h4>Gli Stati Generali del Fare 2026</h4>
          <p>21 — 22 Marzo | Altafiumara Resort & Spa Villa San Giovanni (RC)</p>
          <div className={styles.credits}>
            <p>Made with ❤️ by <strong>Dritara</strong> — Illuminiamo il futuro tech del Sud Italia.</p>
          </div>
        </div>

        <div className={styles.socials}>
          {/* Social icons can be added here replacing text */}
          <a href="ttps://www.instagram.com/statigeneralidelfare" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <Image src={igLogo} alt="Instagram" width={20} height={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
