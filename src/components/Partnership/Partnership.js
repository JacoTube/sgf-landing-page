import styles from './partnership.module.css';

export default function Partnership() {
  return (
    <section id="partnership" className={`section-padding ${styles.partnershipSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.contentBox}>
          <h2 className={styles.heading}>Vuoi supportare <br />il progetto?</h2>

          <div className={styles.textContent}>
            <p>
              Gli Stati Generali del Fare sono un progetto indipendente e autosostenibile. Per farlo crescere, abbiamo pensato a formule di partnership e sponsorship concrete: dalla presenza con desk e prodotti durante le giornate dell'evento, alla visibilità sui materiali e i canali della rete degli Ambasciatori.
            </p>
            <p>
              Non è un logo su un banner. È l'ingresso in un progetto che produce risultati misurabili, con accesso a un pubblico qualificato di imprenditori, professionisti e decisori.
            </p>
          </div>

          <div className={styles.actions}>
            <a href="https://mcusercontent.com/0621910828f6f3ad3934edaf3/files/b2bb3a27-6e09-4f4d-11ef-ab4a2c51a29f/SIAMO_RUMORE_Stati_Generali_del_Fare.pdf" target="_blank" rel="noreferrer" className="btn">
              Scopri le opportunità di Partnership
            </a>
            <span className={styles.orText}>oppure</span>
            <a href="mailto:[EMAIL_ADDRESS]?subject=Richiesta%20Info%20Stati%20Generali%20del%20Fare" className={styles.mailLink}>
              Vuoi saperne di più? Scrivi a [EMAIL_ADDRESS]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
