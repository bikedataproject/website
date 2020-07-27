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

        // Header
        Heading: "We’re collecting cycling data to make cities sustainable and bike-friendly",
        Introduction: "With this project we aim to create a open data platform, for and by cyclists, that collects data on where and when people actually cycle. The platform aims at aggregating data from cyclists , to make cyclists more visible and cities better adapted to the cycling community.",
        Label_total_km: "Total kilometers gathered by the cycling community",
        //Help
        Help_title: "How to help?",
        Ask_for_favor: "To make this work we need to ask you for a simple favor.",
        By_sharing_your: "By sharing your own cycling data to our platform, all the collected data gives us patterns that can be used to make cyclists more visible and their cities adapted to them.",
        Every_cyclist_can: "Every kind of cyclist has something to contribute to this project. Some people already track their activity for training purposes, but we also really want to take into account the short routes. Commuting to work or when you just take a quick ride to the grocery store.",
        // Donate
        Donate_title: "Donate your bike data",
        Several_ways_to_contribute: "There are a several ways you can contribute data to the project. If you already use one of the apps listed below you can easily connect them to The Bike Data Project. Once your app is connected you can just carry on as usual and your rides will automatically be uploaded to our service.",
        You_not_using: "You’re not using such an application yet? No worries! You can still be part of this project by also downloading and using our app.",
        Connect_existing_account: "Connect your existing account",
        Download_our_app: "Download our app",
        // Data
        Data_title: "Collected data worldwide",
        Rides_collected: "rides collected",
        Data_subtitle: "Interested in the data by region?",
        Data_button: "See full map",
        // Contribute
        Contribute_title: "What will I contribute to?",
        People_who_work: "People who work in departments of transportation and city planners around the world need data like this to help them develop modern infrastructure and sustainable cities. The data can also be very useful for other bike related products and services.",
        Common_goal: "The common goal is to aggregate cycling data in an open data platform, by and for cyclists. The more open data we can provide, the greater impact it can have.",
        // Visible
        Visible_title: "Let’s make cyclists more visible!",
        Community_more_visible: "There is lots of open data for cars and car routes, but what about cyclists? This project aims to make the cycling community more visible and to make the world a cycling place!",
        Globally_but_locally: "This projects thinks globally but acts locally, as it is applicable anywhere in the world.",
        // Partners
        Partners_title: "Project Partners",
        

        // Footer
        Footer_intro: "Bike Data Project is a project organised by Open Knowledge Belgium",
        Footer_nav_title: "Information",
        Footer_contact: "Contact",
        Footer_street: "Cantersteen 12",
        Footer_city: "1000 Brussels",
        // Subfooter
        Footer_copyright_one: "Content on this site is licensed under a",
        Footer_copyright_two: "Creative Commons Attribution 4.0 International License",
        Terms_of_use: "Terms of use",
        Privacy_policy: "Privacy policy",
        Cookie_policy: "Cookie policy",

        // Big words
        Help: "Help",
        Donata: "Donate",
        Data: "Data",
        Contribute: "Contribute",
        Visible: "Visible",
        Partners: "Partners",

        // DataMap Page
        Map_title: "Data Map",

        // About Page
        About_title: "About",
        
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
        Label_total_km: "Totaal aantal kilometer verzamelt."
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