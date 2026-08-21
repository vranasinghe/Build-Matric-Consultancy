import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import PageHero from '../components/PageHero';
import Projects from '../components/Projects';
import '../components/ProjectsPreview.css';

const img = "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=2070&auto=format&fit=crop";

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        tag={t('projectsPage.tag')}
        title={t('projectsPage.title')}
        subtitle={t('projectsPage.subtitle')}
        img={img}
      />
      <section className="projects-preview">
        <div className="container">
          <Projects filter="all" />
        </div>
      </section>
    </>
  );
}
