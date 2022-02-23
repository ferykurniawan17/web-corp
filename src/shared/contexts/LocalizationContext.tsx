import React, { useContext, createContext, useState, useEffect } from 'react';
import i18n from 'i18n-js';
import wording from '../core/wording/wording';

type LocalizationContextType = {
  Localize: {
    getText: (name: string, obj?: Record<string, string>) => string;
    setLocale: (locale: string) => void;
  },
};

export const LocatizeContext = createContext<LocalizationContextType>({
  Localize: {
    getText: (message, obj) => '',
    setLocale: (locale) => {},
  }
});

export const useLocalization = () => useContext(LocatizeContext);

const LocalizationContextProvider = ({ children }: any) => {

  const [activeLocale, setActiveLocale] = useState('id');

  useEffect(() => {
    i18n.locale = activeLocale;
  }, [activeLocale]);

  i18n.translations = wording;
  i18n.defaultLocale = 'id';
  i18n.locale = activeLocale;
  i18n.fallbacks = true;
  
  const getText = (name: string, obj?: Record<string, string>) => {
    if (!obj) return i18n.t(name, { defaultValue: '' });
    return i18n.t(name, {
      defaultValue: '',
      ...obj,
    });
  }
  
  const setLocale = (locale: string) => {
    setActiveLocale(locale);
    // TODO SAVE TO Storage 
  }

  const Localize = {
    getText,
    setLocale,
  }

  return (
    <LocatizeContext.Provider value={{ Localize }}>
      {children}
    </LocatizeContext.Provider>
  );
};

export default LocalizationContextProvider;
