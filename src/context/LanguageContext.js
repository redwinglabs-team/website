import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const languageConfig = {
  IT: {
    languageKey: 'IT',
    // flag: <ItFlagIcon />,
    label: 'italian'
  },

  EN: {
    languageKey: 'EN',
    // flag: <EnFlagIcon />,
    label: 'english'
  }
};

export const LanguageContext = createContext();

const DEFAULT_LANGUAGE = languageConfig.IT.languageKey;

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('language', DEFAULT_LANGUAGE);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const LanguageConsumer = LanguageContext.Consumer;
