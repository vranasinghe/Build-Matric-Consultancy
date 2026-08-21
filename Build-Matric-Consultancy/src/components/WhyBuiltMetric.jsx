import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './WhyBuiltMetric.css';

const ICONS = ['📐', '📋', '🛡️', '💡'];

export default function WhyBuiltMetric() {
  const { t } = useLanguage();
  const pillars = t('whyBuiltMetric.pillars');

  return (
    <section className="why-builtmetric">
      <div className="container">
        <p className="why-tag">{t('whyBuiltMetric.tag')}</p>
        <h2 className="section-title">{t('whyBuiltMetric.title')}</h2>

        <div className="why-grid">
          {pillars.map((p, idx) => (
            <div className="why-card" key={idx}>
              <div className="why-icon">{ICONS[idx]}</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
