import Image from 'next/image';
import styles from './header.module.css';
import mainLogo from '@/assets/main_logo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <Image 
            src={mainLogo} 
            alt="Stati Generali del Fare Logo" 
            className={styles.logoImage}
            priority
          />
        </div>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>Cos'è</a>
          <a href="#program" className={styles.navLink}>Programma</a>
          <a href="#ambassadors" className={styles.navLink}>Chi Siamo?</a>
          <a href="#partnership" className={styles.navLink}>Partnership</a>
          <a href="https://www.eventbrite.it/e/1984610354996?aff=oddtdtcreator" target="_blank" rel="noreferrer" className="btn">
            Acquista il Biglietto
          </a>
        </nav>
      </div>
    </header>
  );
}
