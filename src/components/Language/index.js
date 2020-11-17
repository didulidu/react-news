import React from 'react';
import i18next from 'i18next';
import { LANGUAGES } from './languages';
import Select from '../shared/Select';

const LanguagePicker = () => {
  const handleChange = ({ target }) => {
    const newLanguage = LANGUAGES.find((lang) => lang.name === target.value);
    if (newLanguage) {
      i18next.changeLanguage(newLanguage.code);
    }
  };

  const getCurrentLanguageName = () =>
    LANGUAGES.find((lang) => lang.code === i18next.language)?.name;

  return (
    <div className="language">
      <Select
        onChange={handleChange}
        currentValue={getCurrentLanguageName()}
        list={LANGUAGES}
      />
    </div>
  );
};

export default LanguagePicker;
