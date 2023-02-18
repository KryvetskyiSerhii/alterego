import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import en from "service/i18/en.json";
import ua from "service/i18/ua.json";

export const resources = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
};

i18n.init({
  lng: "en",
  fallbackLng: "en",

  resources,
});

export default i18n;
