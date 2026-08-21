import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import PageHero from '../components/PageHero';
import './AboutPage.css';

const aboutImg = "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=2070&auto=format&fit=crop";

export default function AboutPage() {
  const { t } = useLanguage();

  const EXPERIENCE = t('aboutPage.experienceItems');
  const APPROACH_STEPS = t('aboutPage.approachSteps');
  const STATS = t('aboutPage.stats');

  return (
    <>
      <PageHero
        tag={t('aboutPage.tag')}
        title={t('aboutPage.title')}
        subtitle={t('aboutPage.subtitle')}
        img={aboutImg}
      />

      <section className="about-page">
        <div className="container about-page-grid">
          <div className="about-page-block">
            <p className="about-page-tag">{t('aboutPage.experienceTag')}</p>
            <div className="experience-tags">
              {EXPERIENCE.map((tag) => (
                <span className="experience-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="about-page-block">
            <p className="about-page-tag">{t('aboutPage.approachTag')}</p>
            <div className="approach-flow">
              {APPROACH_STEPS.map((step, idx) => (
                <React.Fragment key={step}>
                  <span className="approach-step">{step}</span>
                  {idx < APPROACH_STEPS.length - 1 && <span className="approach-arrow">→</span>}
                </React.Fragment>
              ))}
            </div>
            <p className="about-page-text">
              {t('aboutPage.approachText')}
            </p>
          </div>
        </div>

        <div className="container">
          <div className="about-stats-grid">
            {STATS.map((s) => (
              <div className="about-stat-card" key={s.label}>
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
