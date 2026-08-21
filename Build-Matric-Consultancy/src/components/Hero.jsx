import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();
  const heroImg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img src={heroImg} alt="UAE city skyline" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <p className="hero-tagline">{t('hero.tagline')}</p>
        <h1 className="hero-title">
          {t('hero.title_line1')}<br />{t('hero.title_line2')}
        </h1>
        <p className="hero-subtitle">
          {t('hero.subtitle_1')}<strong>{t('hero.subtitle_qs')}</strong>{t('hero.subtitle_2')}<strong>{t('hero.subtitle_data')}</strong>{t('hero.subtitle_3')}
        </p>

        <div className="hero-btns">
          <Link to="/services" className="btn-primary">{t('hero.btnServices')}</Link>
          <Link to="/contact" className="btn-outline">{t('hero.btnEstimate')}</Link>
        </div>
      </div>

      <div className="hero-scroll">
        <span>{t('hero.scrollDown')}</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
