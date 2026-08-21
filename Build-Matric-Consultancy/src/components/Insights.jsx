import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './Insights.css';

const IMAGES = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
];

export default function Insights({ limit = 3 }) {
  const { t } = useLanguage();
  const items = t('insights.items');
  const list = items.slice(0, limit).map((item, idx) => ({
    ...item,
    img: IMAGES[idx]
  }));

  return (
    <section className="insights" id="insights">
      <div className="container">
        <div className="insights-header">
          <div>
            <p className="insights-tag">{t('insights.tag')}</p>
            <h2 className="section-title">{t('insights.title')}</h2>
          </div>
          <div className="insights-right-text">
            <p>{t('insights.subtitle')}</p>
            <Link to="/insights" className="btn-dark-sm">{t('insights.viewAll')}</Link>
          </div>
        </div>

        <div className="insights-grid">
          {list.map((item, idx) => (
            <div className="insight-card" key={idx}>
              <div className="insight-img">
                <img src={item.img} alt={item.title} />
                <span className="insight-category">{item.cat}</span>
              </div>
              <div className="insight-body">
                <span className="insight-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
