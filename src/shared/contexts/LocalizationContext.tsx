import React, { useContext, createContext, useState, useEffect } from 'react';
import i18n from 'i18n-js';
import wording from '../core/wording/wording';
import { useRouter } from "next/router";

import { id, enUS } from 'date-fns/locale';

type LocalizationContextType = {
  Localize: {
    getText: (name: string, obj?: Record<string, string>) => string;
    setLocale: (locale: string) => void;
    defaultLocale: string;
    locale: string;
    locales: Array<string>;
    localeDate: any;
  },
};

export const LocatizeContext = createContext<LocalizationContextType>({
  Localize: {
    getText: (message, obj) => '',
    setLocale: (locale) => {},
    defaultLocale: 'id',
    locale: 'id',
    locales: [],
    localeDate: id,
  }
});

export const useLocalization = () => useContext(LocatizeContext);

const LocalizationContextProvider = ({ children }: any) => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const [activeLocale, setActiveLocale] = useState(defaultLocale);

  i18n.locale = locale;
  i18n.translations = wording;
  i18n.defaultLocale = defaultLocale;
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

  const Localize: any = {
    getText,
    setLocale,
    defaultLocale,
    locale,
    locales,
    localeDate: locale === 'id' ? id : enUS,
  }

  return (
    <LocatizeContext.Provider value={{ Localize }}>
      {children}
    </LocatizeContext.Provider>
  );
};

export default LocalizationContextProvider;
