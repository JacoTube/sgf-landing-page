import styles from './about.module.css';

export default function About() {
  return (
    <section id="about" className={`section-padding ${styles.aboutSection}`}>
      <div className="container">
        <div className={styles.introBlock}>
          <h2 className={styles.heading}>Cos'è — In 30 Secondi</h2>
          <p className={styles.paragraph}>
            Non è un convegno. Non è una celebrazione.
          </p>
          <p className={styles.paragraph}>
            È un laboratorio operativo di due giorni — <strong>21 e 22 marzo 2026</strong> all'<strong>Altafiumara Resort & Spa</strong> — dove si producono documenti, proposte e collaborazioni reali per lo sviluppo economico, culturale e sociale della Calabria.
          </p>
          <p className={styles.paragraph}>
            Gli Ambasciatori lavorano a porte chiuse, divisi in tavoli tematici su tre aree strategiche: <strong>Narrazione e Comunicazione, Istruzione e Formazione, Advocacy e Politiche Pubbliche.</strong> Ogni tavolo deve produrre una proposta concreta con un primo step eseguibile entro 90 giorni.
          </p>
          <p className={styles.paragraph}>
            Il sabato si chiude con l'approvazione del <strong>Manifesto 2026.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
