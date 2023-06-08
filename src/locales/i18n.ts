import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en-us.json";
import pt from "./pt-br.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        ...en,
      },
      pt: {
        ...pt,
      },
    },
  });

export default i18n;
