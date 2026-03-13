import styles from './program.module.css';

export default function Program() {
  return (
    <section id="program" className={`section-padding ${styles.programSection}`}>
      <div className="container">
        <div className={styles.introBlock}>
          <h2 className={styles.heading}>Cos'è — In 30 Secondi</h2>
          <p className={styles.paragraph}>
            Non è un convegno. Non è una celebrazione.
          </p>
          <p className={styles.paragraph}>
            È un laboratorio operativo di tre giorni — <strong>20, 21 e 22 marzo 2026</strong> all'<strong>Altafiumara Resort & Spa</strong> — dove si producono documenti, proposte e collaborazioni reali per lo sviluppo economico, culturale e sociale della Calabria.
          </p>
          <p className={styles.paragraph}>
            Il venerdì e il sabato gli Ambasciatori lavorano a porte chiuse, divisi in tavoli tematici su tre aree strategiche: <strong>Narrazione e Comunicazione, Istruzione e Formazione, Advocacy e Politiche Pubbliche.</strong> Ogni tavolo deve produrre una proposta concreta con un primo step eseguibile entro 90 giorni.
          </p>
          <p className={styles.paragraph}>
            Il sabato si chiude con l'approvazione del <strong>Manifesto 2026.</strong>
          </p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.sundayBlock}>
          <h2 className={styles.heading}>Domenica 22 Marzo — Aperta a tutti</h2>
          <p className={styles.subheading}>
            La domenica è il giorno in cui tutto il lavoro fatto viene restituito al territorio. Ed è aperta al pubblico.
          </p>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timeLabel}>10:00 — 12:00</div>
              <div className={styles.eventContent}>
                <h3>Calabria Spring Break</h3>
                <p>Presentazione pubblica del Manifesto 2026: proposte operative, responsabili, scadenze e visione 2027. Con imprese, sindaci, istituzioni e media.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timeLabel}>12:30 — 15:30</div>
              <div className={styles.eventContent}>
                <h3>Buffet Calabrese Diffuso</h3>
                <p>Food experience con produttori e aziende calabresi. Networking tra partecipanti, imprese e Ambasciatori.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timeLabel}>15:30 — 18:30</div>
              <div className={styles.eventContent}>
                <h3>After Fire</h3>
                <p>DJ-set, musica e chiusura conviviale sullo Stretto di Messina.</p>
              </div>
            </div>
          </div>

          <div className={styles.ticketInfo}>
            <p>
              <strong>Il biglietto include</strong> l'accesso all'intera giornata e un cocktail o calice di vino di benvenuto. Food e beverage aggiuntivi disponibili con sistema a token presso gli stand dei produttori.
            </p>
          </div>
          
          <div className={styles.actionContainer}>
            <a href="https://www.eventbrite.it/e/1984610354996?aff=oddtdtcreator" target="_blank" rel="noreferrer" className="btn">
              Acquista il Biglietto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
