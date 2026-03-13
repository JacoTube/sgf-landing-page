import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          {/* Placeholder for Logo */}
          <div className={styles.logoPlaceholder}>logo</div>
        </div>
        <nav className={styles.nav}> {/* aggiungere logo ad inizio header ed aggiungere ancore */}
          <a href="#about" className={styles.navLink}>Cos'è</a>
          <a href="#program" className={styles.navLink}>Programma</a>
          <a href="#ambassadors" className={styles.navLink}>Ambasciatori</a>
          <a href="#partnership" className={styles.navLink}>Partnership</a>
          <a href="https://www.eventbrite.it/e/1984610354996?aff=oddtdtcreator" target="_blank" rel="noreferrer" className="btn">
            Acquista il Biglietto
          </a>
        </nav>
      </div>
    </header>
  );
}