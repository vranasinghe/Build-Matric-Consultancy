import React from 'react';
import './PageHero.css';

export default function PageHero({ tag, title, subtitle, img }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg">
        <img src={img} alt={title} className="page-hero-img" />
        <div className="page-hero-overlay"></div>
      </div>
      <div className="container page-hero-content">
        {tag && <p className="page-hero-tag">{tag}</p>}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
