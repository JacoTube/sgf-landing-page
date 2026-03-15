'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './sponsors.module.css';

export default function SponsorsSlider({ files }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current && trackRef.current) {
        const containerWidth = containerRef.current.clientWidth;

        const children = Array.from(trackRef.current.children);
        const originalChildrenList = children.slice(0, files.length);
        let totalWidth = 0;

        originalChildrenList.forEach(child => {
          totalWidth += child.offsetWidth;
        });

        const trackStyle = window.getComputedStyle(trackRef.current);
        const gap = parseFloat(trackStyle.gap) || 0;
        totalWidth += gap * (files.length - 1);

        setShouldAnimate(totalWidth > containerWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    const timer = setTimeout(checkOverflow, 1000);
    return () => {
      window.removeEventListener('resize', checkOverflow);
      clearTimeout(timer);
    };
  }, [files]);

  return (
    <section className={styles.sponsorsSection} ref={containerRef}>
      <h3 className={styles.title}>I Nostri Sponsor</h3>
      <div
        className={`${styles.sliderTrack} ${shouldAnimate ? styles.animate : ''}`}
        ref={trackRef}
      >
        {files.map((file, i) => {
          const imgObj = require(`@/assets/sponsors/${file}`);
          const src = imgObj.default || imgObj;
          return (
            <div key={i} className={styles.sponsorItem}>
              <Image
                src={src}
                alt={`Sponsor ${i}`}
                className={styles.sponsorImage}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            </div>
          );
        })}
        {shouldAnimate && files.map((file, i) => {
          const imgObj = require(`@/assets/sponsors/${file}`);
          const src = imgObj.default || imgObj;
          return (
            <div key={`dup-${i}`} className={styles.sponsorItem}>
              <Image
                src={src}
                alt={`Sponsor clone ${i}`}
                className={styles.sponsorImage}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
