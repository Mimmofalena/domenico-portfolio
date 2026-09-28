import React, { createContext, useState, useContext, useEffect } from "react";
import { translations } from "../translations";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const getInitialLanguage = () => {
    // Check if user has a saved preference
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      return savedLanguage;
    }

    // Detect browser language
    const browserLanguage = navigator.language || navigator.userLanguage;
    // If the browser language starts with 'it', set Italian, otherwise English
    return browserLanguage.toLowerCase().startsWith("it") ? "it" : "en";
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    // Save language preference
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "it" : "en"));
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
