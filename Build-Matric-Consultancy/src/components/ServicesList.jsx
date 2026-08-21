import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './ServicesList.css';

const ICONS = ['📊', '📑', '⚖️', '🏗️', '📈', '💻'];
const SLUGS = [
  'quantity-surveying-cost-management',
  'commercial-contract-management',
  'claims-dispute-support',
  'project-management-pmc',
  'development-investment-advisory',
  'digital-project-commercial-management'
];
const NUMS = ["01", "02", "03", "04", "05", "06"];

export default function ServicesList() {
  const { t } = useLanguage();
  const items = t('services.items');

  return (
    <section className="services-list">
      <div className="container">
        {items.map((item, idx) => (
          <div className="service-block" id={SLUGS[idx]} key={SLUGS[idx]}>
            <div className="service-block-num">{NUMS[idx]}</div>
            <div className="service-block-body">
              <div className="service-block-icon">{ICONS[idx]}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="service-block-tags">
                {item.tags.map((tag) => (
                  <span className="service-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
