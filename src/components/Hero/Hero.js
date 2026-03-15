import Image from 'next/image';
import styles from './hero.module.css';
import wallpaper from '@/assets/wallpaper.jpg';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgWrap}>
        <Image
          src={wallpaper}
          alt="Altafiumara Resort Background"
          fill
          priority
          className={styles.bgImage}
        />
      </div>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.subtitle}>Qualcosa di grosso sta per succedere in Calabria</h2>
          <h1 className={styles.title}>Stati Generali del Fare 2026</h1>
          <p className={styles.description}>
            21 e 22 Marzo — Altafiumara Resort & Spa
          </p>
        </div>
      </div>
    </section>
  );
}
