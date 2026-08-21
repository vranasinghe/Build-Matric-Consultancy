import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Stats.css';

export default function Stats() {
  const { t } = useLanguage();
  const [counts, setCounts] = useState({ stat1: 0, stat2: 0, stat3: 0, stat4: 0 });
  const sectionRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          
          const targets = { stat1: 150, stat2: 1200, stat3: 15, stat4: 6 };
          const duration = 2000;
          const steps = 60;
          const interval = duration / steps;

          let currentStep = 0;
          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounts({
              stat1: Math.floor(targets.stat1 * progress),
              stat2: Math.floor(targets.stat2 * progress),
              stat3: Math.floor(targets.stat3 * progress),
              stat4: Math.floor(targets.stat4 * progress),
            });

            if (currentStep >= steps) {
              setCounts(targets);
              clearInterval(timer);
            }
          }, interval);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">{counts.stat1}</span>
            <span className="stat-suffix">+</span>
            <p className="stat-label">{t('stats.projectsDelivered')}</p>
          </div>
          <div className="stat-divider"></div>

          <div className="stat-item">
            <span className="stat-number">{counts.stat2}</span>
            <span className="stat-suffix">+</span>
            <p className="stat-label">{t('stats.residentialUnits')}</p>
          </div>
          <div className="stat-divider"></div>

          <div className="stat-item">
            <span className="stat-number">{counts.stat3}</span>
            <span className="stat-suffix">+</span>
            <p className="stat-label">{t('stats.yearsExperience')}</p>
          </div>
          <div className="stat-divider"></div>

          <div className="stat-item">
            <span className="stat-number">{counts.stat4}</span>
            <span className="stat-suffix">+</span>
            <p className="stat-label">{t('stats.sectorsServed')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
