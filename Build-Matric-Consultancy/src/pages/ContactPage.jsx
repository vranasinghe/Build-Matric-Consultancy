import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import PageHero from '../components/PageHero';
import CostEstimateForm from '../components/CostEstimateForm';
import FAQ from '../components/FAQ';
import './ContactPage.css';

const img = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        tag={t('contact.pageTag')}
        title={t('contact.pageTitle')}
        subtitle={t('contact.pageSubtitle')}
        img={img}
      />

      <section className="contact-page">
        <div className="container contact-grid">
          <div className="contact-info">
            <p className="contact-info-tag">{t('contact.getInTouch')}</p>
            <h3>{t('contact.companyName')}</h3>
            <p className="contact-info-text">
              {t('contact.infoText')}
            </p>

            <div className="contact-info-item">
              <span>📍</span>
              <p>{t('contact.location')}</p>
            </div>
            <div className="contact-info-item">
              <span>✉️</span>
              <p>{t('footer.email')}</p>
            </div>
            <div className="contact-info-item">
              <span>📞</span>
              <p>{t('footer.phone')}</p>
            </div>
            <div className="contact-info-item">
              <span>💬</span>
              <a href="https://wa.me/971500000000" target="_blank" rel="noreferrer">{t('contact.whatsapp')}</a>
            </div>
          </div>

          <div className="contact-form-wrap">
            <CostEstimateForm />
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
