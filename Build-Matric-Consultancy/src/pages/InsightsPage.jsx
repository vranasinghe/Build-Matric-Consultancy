import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import PageHero from '../components/PageHero';
import InsightsList from '../components/InsightsList';

const img = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop";

export default function InsightsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        tag={t('insightsPage.tag')}
        title={t('insightsPage.title')}
        subtitle={t('insightsPage.subtitle')}
        img={img}
      />
      <InsightsList />
    </>
  );
}
