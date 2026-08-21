import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './FAQ.css';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = t('faq.items');

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-left">
            <p className="faq-tag">{t('faq.tag')}</p>
            <h2 className="section-title">{t('faq.title')}</h2>
            <p className="faq-desc">
              {t('faq.desc')}
            </p>
          </div>

          <div className="faq-right">
            <div className="faq-list">
              {faqs.map((faq, idx) => (
                <div className={`faq-item ${openIndex === idx ? 'active' : ''}`} key={idx}>
                  <button className="faq-question" onClick={() => toggle(idx)}>
                    <span>{faq.q}</span>
                    <span className="faq-icon">{openIndex === idx ? '−' : '+'}</span>
                  </button>
                  {openIndex === idx && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
