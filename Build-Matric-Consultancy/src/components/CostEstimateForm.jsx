import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './CostEstimateForm.css';

export default function CostEstimateForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const PROJECT_TYPES = t('form.projectTypes');
  const PROJECT_STAGES = t('form.projectStages');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="estimate-success">
        <div className="estimate-success-icon">✓</div>
        <h3>{t('form.successTitle')}</h3>
        <p>{t('form.successText')}</p>
      </div>
    );
  }

  return (
    <form className="estimate-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">{t('form.fullName')}</label>
          <input id="name" type="text" required />
        </div>
        <div className="form-field">
          <label htmlFor="company">{t('form.company')}</label>
          <input id="company" type="text" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="email">{t('form.email')}</label>
          <input id="email" type="email" required />
        </div>
        <div className="form-field">
          <label htmlFor="phone">{t('form.phone')}</label>
          <input id="phone" type="tel" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="location">{t('form.projectLocation')}</label>
          <input id="location" type="text" placeholder={t('form.projectLocationPlaceholder')} />
        </div>
        <div className="form-field">
          <label htmlFor="type">{t('form.projectType')}</label>
          <select id="type" defaultValue="">
            <option value="" disabled>{t('form.selectProjectType')}</option>
            {PROJECT_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="area">{t('form.approxArea')}</label>
          <input id="area" type="text" placeholder={t('form.approxAreaPlaceholder')} />
        </div>
        <div className="form-field">
          <label htmlFor="floors">{t('form.numFloors')}</label>
          <input id="floors" type="text" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="stage">{t('form.currentStage')}</label>
          <select id="stage" defaultValue="">
            <option value="" disabled>{t('form.selectStage')}</option>
            {PROJECT_STAGES.map((stage) => <option key={stage} value={stage}>{stage}</option>)}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="start">{t('form.expectedStart')}</label>
          <input id="start" type="text" placeholder={t('form.expectedStartPlaceholder')} />
        </div>
      </div>

      <div className="form-field form-field-full">
        <label htmlFor="description">{t('form.projectDesc')}</label>
        <textarea id="description" rows="4"></textarea>
      </div>

      <div className="form-field form-field-full">
        <label htmlFor="docs">{t('form.uploadDocs')}</label>
        <input id="docs" type="file" multiple />
      </div>

      <div className="form-field form-field-full">
        <label htmlFor="notes">{t('form.additionalInfo')}</label>
        <textarea id="notes" rows="3"></textarea>
      </div>

      <button type="submit" className="btn-primary-dark">{t('form.submit')}</button>
    </form>
  );
}
