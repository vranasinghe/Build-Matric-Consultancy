import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, language, toggleLanguage } = useLanguage();

  const NAV_ITEMS = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.services'), to: '/services' },
    { label: t('nav.projects'), to: '/projects' },
    { label: t('nav.insights'), to: '/insights' },
    { label: t('nav.about'), to: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className={`topbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="topbar-container">
          <div className="topbar-left">
            <button className="lang-toggle" onClick={toggleLanguage}>
              <span className={language === 'en' ? 'lang-active' : ''}>EN</span>
              &nbsp;/&nbsp;
              <span className={language === 'ar' ? 'lang-active' : ''}>AR</span>
            </button>
            <span className="topbar-divider">|</span>
            <span className="topbar-region">{t('nav.region')}</span>
          </div>
          <a href="https://wa.me/971500000000" target="_blank" rel="noreferrer" className="topbar-whatsapp">
            {t('nav.whatsapp')}
          </a>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <span className="logo-icon">⬡</span>
            <span className="logo-text">Built<strong>Metric</strong></span>
          </Link>

          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`nav-link ${location.pathname === item.to ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/contact" className="btn-contact">{t('nav.requestEstimate')}</Link>

          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </nav>
    </>
  );
}
