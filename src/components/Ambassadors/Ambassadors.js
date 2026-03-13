import styles from './ambassadors.module.css';

export default function Ambassadors() {
  return (
    <section id="ambassadors" className={`section-padding ${styles.ambassadorsSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.heading}> <br />Chi siamo?</h2>

        <div className={styles.content}>
          <p className={styles.lead}>
            Una rete di persone che ogni giorno costruisce qualcosa di concreto per la Calabria — non da un palco, ma dal proprio lavoro.
          </p>

          <div className={styles.teamGrid}>

            {/* Core Team Block */}
            <div className={styles.teamGroup}>
              <h3 className={styles.groupTitle}>Direzione & Coordinamento</h3>
              <ul className={styles.teamList}>
                <li><strong>Roberto Tesoriere</strong> <span>Fondatore, Ambasciatori di Calabria</span></li>
                <li><strong>Sarah Procopio</strong> <span>Direzione Contenuti e Vision</span></li>
                <li><strong>Gaetano Moraca</strong> <span>Direzione Contenuti e Vision</span></li>
                <li><strong>Christian Zuin (Protur Media)</strong> <span>Organizzazione & Logistica</span></li>
                <li><strong>Alessandro Fedele</strong> <span>Organizzazione & Logistica</span></li>
                <li><strong>Chef Battaglia</strong> <span>Organizzazione & Logistica</span></li>
                <li><strong>Direzione di Altafiumara Resort & Spa</strong> <span>Organizzazione & Logistica</span></li>
              </ul>
            </div>

            {/* Comms Team Block */}
            <div className={styles.teamGroup}>
              <h3 className={styles.groupTitle}>Team Comunicazione</h3>
              <ul className={styles.teamList}>
                <li><strong>Giacomo Marinaro</strong> <span>(Gulìa Urbana)</span></li>
                <li><strong>Lidia Passarelli</strong></li>
                <li><strong>Giuseppe Talarico</strong></li>
                <li><strong>Salvatore Borzacchiello</strong></li>
                <li><strong>Alessandro Frontera</strong></li>
                <li><strong>Matteo Pugliese</strong></li>
              </ul>
            </div>

            {/* Ambassadors List */}
            <div className={`${styles.teamGroup} ${styles.fullWidth}`}>
              <h3 className={styles.groupTitle}>Tra gli Ambasciatori Figurano:</h3>
              <div className={styles.ambassadorsGrid}>
                <a href="https://mulinum.it/" target="_blank" rel="noreferrer" className={styles.ambassadorCard}>
                  <strong>Stefano Caccavari 🔗</strong>
                  <span>Fondatore di Mulinum e pioniere del recupero di borghi rurali</span>
                </a>
                <a href="https://www.kashmirmusic.it/artists/sarafine/" target="_blank" rel="noreferrer" className={styles.ambassadorCard}>
                  <strong>Sarafine 🔗</strong>
                  <span>Nel mondo della musica e della cultura</span>
                </a>
                <a href="https://it.wikipedia.org/wiki/Francesco_Laratta" target="_blank" rel="noreferrer" className={styles.ambassadorCard}>
                  <strong>Franco Laratta 🔗</strong>
                  <span>Giornalista e già parlamentare</span>
                </a>
                <a href="https://www.instagram.com/noemispinetti/" target="_blank" rel="noreferrer" className={styles.ambassadorCard}>
                  <strong>Noemi Spinetti 🔗</strong>
                </a>
                <a href="https://www.giacomotriglia.com/" target="_blank" rel="noreferrer" className={styles.ambassadorCard}>
                  <strong>Giacomo Triglia 🔗</strong>
                </a>
                <div className={styles.ambassadorCard}>
                  <strong>Francesco Cuteri</strong>
                </div>
                <div className={styles.ambassadorCard}>
                  <strong>Carmine Lupia</strong>
                </div>
                <div className={styles.ambassadorCard}>
                  <strong>Simona Lo Bianco</strong>
                </div>
                <a href="https://www.instagram.com/next_heaven/" target="_blank" rel="noreferrer" className={styles.ambassadorCard}>
                  <strong>Giuseppe Scuticchio 🔗</strong>
                </a>
                <div className={styles.ambassadorCard}>
                  <strong>Ettore Bonanno</strong>
                </div>
                <div className={styles.ambassadorCard}>
                  <strong>Fabio Spadafora</strong>
                </div>
                <div className={styles.ambassadorCard}>
                  <strong>Alfredo Moniaci</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
