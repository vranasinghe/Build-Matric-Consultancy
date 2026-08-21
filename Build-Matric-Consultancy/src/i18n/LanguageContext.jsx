import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import en from './en.json';
import ar from './ar.json';

const translations = { en, ar };

const LanguageContext = createContext();

/**
 * Get a nested value from an object using a dotted key path.
 * Supports both string paths ("nav.home") and returns arrays/objects intact.
 */
function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return acc[key];
    }
    return undefined;
  }, obj);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('builtmetric-lang') || 'en';
    } catch {
      return 'en';
    }
  });

  const isRTL = language === 'ar';

  // Update <html> dir and lang attributes
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    html.setAttribute('lang', language);

    try {
      localStorage.setItem('builtmetric-lang', language);
    } catch {
      // localStorage unavailable
    }
  }, [language, isRTL]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  /**
   * Translation function.
   * t('nav.home')          → "Home" or "الرئيسية"
   * t('services.items')    → array of service objects
   * t('faq.items.0.q')     → first FAQ question string
   */
  const t = useCallback(
    (key) => {
      const value = getNestedValue(translations[language], key);
      if (value === undefined) {
        // Fallback to English
        const fallback = getNestedValue(translations.en, key);
        if (fallback === undefined) {
          console.warn(`[i18n] Missing translation key: "${key}"`);
          return key;
        }
        return fallback;
      }
      return value;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, isRTL, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
