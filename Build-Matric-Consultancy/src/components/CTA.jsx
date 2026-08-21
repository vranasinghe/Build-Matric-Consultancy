import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './CTA.css';

export default function CTA() {
  const { t } = useLanguage();
  const bgImg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";

  return (
    <section className="cta">
      <div className="cta-bg">
        <img src={bgImg} alt="City skyline" />
        <div className="cta-overlay"></div>
      </div>

      <div className="container">
        <div className="cta-content">
          <h2>{t('cta.title')}</h2>
          <p>
            {t('cta.text')}
          </p>
          <Link to="/contact" className="btn-primary">{t('cta.btn')}</Link>
        </div>
      </div>
    </section>
  );
}
