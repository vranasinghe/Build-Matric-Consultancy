import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import PageHero from '../components/PageHero';
import ServicesList from '../components/ServicesList';

const img = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        tag={t('servicesPage.tag')}
        title={t('servicesPage.title')}
        subtitle={t('servicesPage.subtitle')}
        img={img}
      />
      <ServicesList />
    </>
  );
}
