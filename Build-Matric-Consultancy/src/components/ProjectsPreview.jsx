import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import Projects from './Projects';
import './ProjectsPreview.css';

export default function ProjectsPreview() {
  const { t } = useLanguage();

  return (
    <section className="projects-preview" id="projects">
      <div className="container">
        <div className="projects-preview-header">
          <div>
            <p className="projects-preview-tag">{t('projectsPreview.tag')}</p>
            <h2 className="section-title">{t('projectsPreview.title')}</h2>
          </div>
          <Link to="/projects" className="btn-dark-sm">{t('projectsPreview.viewAll')}</Link>
        </div>
        <Projects filter="featured" limit={4} />
      </div>
    </section>
  );
}
