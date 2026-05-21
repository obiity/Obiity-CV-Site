import { createContext, useContext, useState } from 'react';
import type { Lang, Translations } from '../i18n/translations';
import { translations } from '../i18n/translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  setLang: () => {},
  t: translations.fr,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem('obiity-lang');
    return stored === 'en' ? 'en' : 'fr';
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('obiity-lang', l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
