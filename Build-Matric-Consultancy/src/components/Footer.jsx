import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './Footer.css';

const SLUGS = [
  'quantity-surveying-cost-management',
  'commercial-contract-management',
  'claims-dispute-support',
  'project-management-pmc',
  'development-investment-advisory',
  'digital-project-commercial-management'
];

export default function Footer() {
  const { t } = useLanguage();
  const servicesItems = t('services.items');

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo">
              <span className="logo-icon">⬡</span>
              <span className="logo-text">Built<strong>Metric</strong></span>
            </Link>
            <p className="footer-address">
              {t('footer.address_line1')}<br />
              {t('footer.address_line2')}
            </p>
            <p className="footer-contact">
              📞 {t('footer.phone')}<br />
              ✉️ {t('footer.email')}
            </p>
          </div>

          <div className="footer-col">
            <h4>{t('footer.navigate')}</h4>
            <ul>
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/services">{t('nav.services')}</Link></li>
              <li><Link to="/projects">{t('nav.projects')}</Link></li>
              <li><Link to="/insights">{t('nav.insights')}</Link></li>
              <li><Link to="/about">{t('nav.about')}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.servicesTitle')}</h4>
            <ul>
              {servicesItems.map((s, idx) => (
                <li key={SLUGS[idx]}>
                  <Link to={`/services#${SLUGS[idx]}`}>{s.title.split(' & ')[0].split(' و ')[0]}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.followUs')}</h4>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="https://wa.me/971500000000" target="_blank" rel="noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
          <div className="footer-legal">
            <a href="#">{t('footer.privacy')}</a>
            <span>|</span>
            <a href="#">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
