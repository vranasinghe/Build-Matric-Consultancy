import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './About.css';

export default function About() {
  const { t } = useLanguage();
  const aboutBlueprint = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop";
  const glassSkyscraper = "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=2070&auto=format&fit=crop";
  const workersSite = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop";

  return (
    <section className="about">
      <div className="container">
        <div className="about-tag">{t('about.tag')}</div>
        
        <div className="about-grid">
          <div className="about-left">
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="about-text">{t('about.text')}</p>

            <Link to="/about" className="btn-dark">{t('about.learnMore')}</Link>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon">🧭</div>
                <div>
                  <h4>{t('about.experienceTitle')}</h4>
                  <p>{t('about.experienceDesc')}</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="feature-icon">🎯</div>
                <div>
                  <h4>{t('about.approachTitle')}</h4>
                  <p>{t('about.approachDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="about-img-grid">
              <div className="about-img-main">
                <img src={aboutBlueprint} alt="Building blueprint sketch" />
              </div>
              <div className="about-img-secondary">
                <img src={glassSkyscraper} alt="Glass building architecture" />
              </div>
            </div>
          </div>
        </div>

        <div className="about-bottom-row">
          <div className="about-bottom-img">
            <img src={workersSite} alt="Construction workers on site" />
          </div>
          <div className="about-bottom-img">
            <img src={glassSkyscraper} alt="Glass skyscraper looking up" />
          </div>
        </div>
      </div>
    </section>
  );
}
