import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        // Navbar
        Data_Map: "Data Map",
        About: "About",
        FAQ: "FAQ",
        Contact: "Contact",

        // Texts
        Heading: "An online platform collecting bike data, for and by cyclists",
        Introduction: "With this project we aim to create a open data platform, for and by cyclists, that collects data on where and when people actually cycle. The platform aims at aggregating data from cyclists , to make cyclists more visible and cities better adapted to the cycling community.",
        Label_total_km: "Total kilometers gathered by the cycling community",
        How_to_help: "How to help?",
        Ask_for_favor: "To make this work we need to ask you for a simple favor.",
        By_sharing_your: "By sharing your own cycling data to our platform, all the collected data gives us patterns that can be used to make cyclists more visible and their cities adapted to them.",
        Every_cyclist_can: "Every kind of cyclist has something to contribute to this project. Some people already track their activity for training purposes, but we also really want to take into account the short routes. Commuting to work or when you just take a quick ride to the grocery store.",
      }
    },
    fre: {
      translations: {
        Heading: "Un Platform en ligne",
      }
    },
    nl: {
      translations: {
        Heading: "Een online platform om fietsdata te verzamelen, voor en door fietsers.",
      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;