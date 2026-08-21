import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './Services.css';

const ICONS = ['📊', '📑', '⚖️', '🏗️', '📈', '💻'];
const SLUGS = [
  'quantity-surveying-cost-management',
  'commercial-contract-management',
  'claims-dispute-support',
  'project-management-pmc',
  'development-investment-advisory',
  'digital-project-commercial-management'
];

export default function Services() {
  const { t } = useLanguage();
  const bgImg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";
  const items = t('services.items');

  return (
    <section className="services" id="services">
      <div className="services-bg">
        <img src={bgImg} alt="Construction banner" />
        <div className="services-bg-overlay"></div>
      </div>

      <div className="container">
        <div className="services-header">
          <p className="services-tag">{t('services.tag')}</p>
          <h2 className="section-title text-white">
            {t('services.title')}
          </h2>
        </div>

        <div className="services-grid">
          {items.map((item, idx) => (
            <div className="service-card" key={SLUGS[idx]}>
              <div className="service-icon">{ICONS[idx]}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link to={`/services#${SLUGS[idx]}`} className="service-link">{t('services.learnMore')}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
