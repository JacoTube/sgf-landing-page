'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './header.module.css';
import mainLogo from '@/assets/main_logo.svg';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <a href="#" className={styles.logoLink} onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            <Image 
              src={mainLogo} 
              alt="Stati Generali del Fare Logo" 
              className={styles.logoImage}
              priority
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.navDesktop}>
          <a href="#about" className={styles.navLink}>Cos'è</a>
          <a href="#program" className={styles.navLink}>Programma</a>
          <a href="#ambassadors" className={styles.navLink}>Chi Siamo?</a>
          <a href="#partnership" className={styles.navLink}>Partnership</a>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className={styles.hamburger} onClick={toggleMobileMenu}>
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.activeBar1 : ''}`}></span>
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.activeBar2 : ''}`}></span>
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.activeBar3 : ''}`}></span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.navMobile}>
          <a href="#about" className={styles.navLinkMobile} onClick={closeMobileMenu}>Cos'è</a>
          <a href="#program" className={styles.navLinkMobile} onClick={closeMobileMenu}>Programma</a>
          <a href="#ambassadors" className={styles.navLinkMobile} onClick={closeMobileMenu}>Chi Siamo?</a>
          <a href="#partnership" className={styles.navLinkMobile} onClick={closeMobileMenu}>Partnership</a>
        </nav>
      </div>
    </header>
  );
}
