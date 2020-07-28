import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        // Navbar
        Data_Map: 'Data Map',
        About: 'About',
        FAQ: 'FAQ',
        Contact: 'Contact',

        // Header
        Heading: 'We’re collecting cycling data to make cities sustainable and bike-friendly ',
        Introduction:
          'With this project we aim to create a open data platform, for and by cyclists, that collects data on where and when people actually cycle. The platform aims at aggregating data from cyclists , to make cyclists more visible and cities better adapted to the cycling community.',
        Label_total_km: 'Total kilometers gathered by the cycling community',

        //Help
        Help_title: 'How to help?',
        Ask_for_favor:
          'To make this work we need to ask you for a simple favor.',
        By_sharing_your:
          'By sharing your own cycling data to our platform, all the collected data gives us patterns that can be used to make cyclists more visible and their cities adapted to them.',
        Every_cyclist_can:
          'Every kind of cyclist has something to contribute to this project. Some people already track their activity for training purposes, but we also really want to take into account the short routes. Commuting to work or when you just take a quick ride to the grocery store.',
        // Donate
        Donate_title: 'Donate your bike data',
        Several_ways_to_contribute:
          'There are a several ways you can contribute data to the project. If you already use one of the apps listed below you can easily connect them to The Bike Data Project. Once your app is connected you can just carry on as usual and your rides will automatically be uploaded to our service.',
        You_not_using:
          'You’re not using such an application yet? No worries! You can still be part of this project by also downloading and using our app.',
        Connect_existing_account: 'Connect your existing account',
        Download_our_app: 'Download our app',
        // Data
        Data_title: 'Collected data worldwide',
        Rides_collected: 'rides collected',
        Data_subtitle: 'Interested in the data by region?',
        Data_button: 'See full map',
        // Contribute
        Contribute_title: 'What will I contribute to?',
        People_who_work:
          'People who work in departments of transportation and city planners around the world need data like this to help them develop modern infrastructure and sustainable cities. The data can also be very useful for other bike related products and services.',
        Common_goal:
          'The common goal is to aggregate cycling data in an open data platform, by and for cyclists. The more open data we can provide, the greater impact it can have.',
        // Visible
        Visible_title: 'Let’s make cyclists more visible!',
        Community_more_visible:
          'There is lots of open data for cars and car routes, but what about cyclists? This project aims to make the cycling community more visible and to make the world a cycling place!',
        Globally_but_locally:
          'This projects thinks globally but acts locally, as it is applicable anywhere in the world.',
        // Partners
        Partners_title: 'Project Partners',

        // Footer
        Footer_intro:
          'Bike Data Project is a project organised by Open Knowledge Belgium',
        Footer_nav_title: 'Information',
        Footer_contact: 'Contact',
        Footer_street: 'Cantersteen 12',
        Footer_city: '1000 Brussels',
        // Subfooter
        Footer_copyright_one: 'Content on this site is licensed under a',
        Footer_copyright_two:
          'Creative Commons Attribution 4.0 International License',
        Terms_of_use: 'Terms of use',
        Privacy_policy: 'Privacy policy',
        Cookie_policy: 'Cookie policy',

        // Big words
        Help: 'Help',
        Donata: 'Donate',
        Data: 'Data',
        Contribute: 'Contribute',
        Visible: 'Visible',
        Partners: 'Partners',
        About_us: 'About',
        Faq: 'Faq',
        Contact_us: 'Contact',

        // DataMap Page
        Map_title: 'Data Map',
        Data_been_gathered: 'This data has been gathered during the past years, by different types of cyclists. Feel free to explore the map!',
        Below_access: 'Below, you can have full access to our open data as well.',
        Map_subtitle: 'Have a look at all our open data',

        // About Page
        About_title: 'About Project',
        Okb: 'Open Knowledge Belgium',
        Okb_is: 'Open Knowledge Belgium is the organisation behind the Bike Data Project.',
        Okb_umbrella: 'is an umbrella organisation (non-profit / vzw / asbl) for Open Knowledge initiatives.',
        There_are_numerous: 'There are numerous Open Knowledge initiatives in Belgium. In order to give these communities access to resources faster, an umbrella organisation was needed. That’s where Open Knowledge Belgium comes in. We make knowledge sharing possible and let different organisations and cultures cross-polinate. We want to open up knowledge in Belgium and see it used and useful. We endeavour to achieve this through both a bottom-up and community-driven way, as well as through working closely together with governments and organisations.',
        Bike_cars: 'Bike vs. Cars',
        Bike_data_project: 'The Bike Data Project already existed a while ago. The project was then set up by',
        Managed_by_frederik: ', managed by Frederik Gertten, the producer of the Bike vs Cars documentary.',
        Osoc: 'Open Summer of Code',
        This_project_osoc: 'This project was further elaborated during Open Summer of Code, an initiative of Open Knowledge Belgium. During July 2020, a group of 7 students and 3 coaches worked on developing this project.',
      
        // Faq Page
        Faq_title: 'Frequently Asked Questions',
        Question_one_title: 'Why should I participate in this project?',
        Question_one_answer: 'By sharing your cycling data, you can help make our cities better adapted to cyclists. Let’s not only have open data available for cars, but that the cycling community is equally visible as well!',
        Question_two_title: 'What is happening with my data?',
        Question_two_answer: 'We are aggregating cycling data of different cyclists, so that it can give us patterns about how and when people cycle. There will be no individual connections to each cyclist. This collected data can help in many different ways: conducting road works when needed, making minority cycling groups more visible, exploring new cycling routes, and so on. ',
        Question_three_title: 'Can I delete my data?',
        Question_three_answer: 'Yes! You as a cyclist have full control over your own data, so if you want to extract it from out platform that is certainly possible. ',
        Question_four_title: 'How do I share my data to this platform?',
        Question_four_answer: 'You can use a cycling application you already have and link this to the Bike Data Project platform. If you do not use such an application already but still want to contribute, you can use our own app. No need for making an account, you can simply share your data to the platform. ',
        Question_five_title: 'What data am I sharing from my other app?',
        Question_five_answer: 'We are retrieving the following data: cycling routes, gender, age and the purpose of the cycling route. (leisure, sports, commute...)',
        Question_six_title: 'How do I get access to the open data?',
        Question_six_answer: 'The Bike Data Project is an open-data project, which means that everyone can have access to the aggregated data. Every cyclist also has the opportunity to have control over their own data. Via our Github page, you can access all the open data.( https://github.com/orgs/bikedataproject/dashboard )',

        // Contact Page
        Contact_title: 'Contact',
        Further_questions: 'For any further questions or information, please contact us via:',
        Follow_socials: 'Follow our project via our social media channels:',
      
      },

    },
    fre: {
      translations: {
        // Navbar
        About: 'Projet',

        // Header
        Heading: 'We’re collecting cycling data to make cities sustainable and bike-friendly ',
        Introduction: 'With this project we aim to create a open data platform, for and by cyclists, that collects data on where and when people actually cycle. The platform aims at aggregating data from cyclists , to make cyclists more visible and cities better adapted to the cycling community.',
        Label_total_km: 'Total kilometers gathered by the cycling community',

        //Help
        Help_title: 'How to help?',
        Ask_for_favor: 'To make this work we need to ask you for a simple favor.',
        By_sharing_your: 'By sharing your own cycling data to our platform, all the collected data gives us patterns that can be used to make cyclists more visible and their cities adapted to them.',
        Every_cyclist_can: 'Every kind of cyclist has something to contribute to this project. Some people already track their activity for training purposes, but we also really want to take into account the short routes. Commuting to work or when you just take a quick ride to the grocery store.',
        // Donate
        Donate_title: 'Donate your bike data',
        Several_ways_to_contribute: 'There are a several ways you can contribute data to the project. If you already use one of the apps listed below you can easily connect them to The Bike Data Project. Once your app is connected you can just carry on as usual and your rides will automatically be uploaded to our service.',
        You_not_using: 'You’re not using such an application yet? No worries! You can still be part of this project by also downloading and using our app.',
        Connect_existing_account: 'Connect your existing account',
        Download_our_app: 'Download our app',
        // Data
        Data_title: 'Collected data worldwide',
        Rides_collected: 'rides collected',
        Data_subtitle: 'Interested in the data by region?',
        Data_button: 'See full map',

        // DataMap Page
        Data_been_gathered: 'Ces données ont été recueillies au cours des dernières années, par différents types de cyclistes de partout dans le monde. ',
        Below_access: 'Vous pouvez également avoir accès à nos données ouvertes ci-dessous.',
        Map_subtitle: 'Consultez toutes nos données ouvertes',

        // About Page
        About_title: 'About Project',
        Okb_is: "Open Knowledge Belgium est l'organisation à l'origine du Bike Data Project. ",
        Okb_umbrella: 'est une organisation faîtière (sans but lucratif / vzw / asbl) pour les initiatives Open Knowledge.',
        There_are_numerous: "Il existe de nombreuses initiatives Open Knowledge en Belgique. Afin de permettre à ces communautés d'accéder plus rapidement aux ressources, il était nécessaire de créer une organisation faîtière. C'est là qu'intervient Open Knowledge Belgium. Nous rendons possible le partage des connaissances et permettons aux différentes organisations et cultures de se croiser. Nous voulons ouvrir le savoir en Belgique et le voir utilisé et utile. Nous nous efforçons d'atteindre cet objectif par une approche ascendante et communautaire, ainsi que par une collaboration étroite avec les gouvernements et les organisations. ",
        Bike_data_project: 'Le projet Bike Data existait déjà il y a quelque temps. Le projet a ensuite été mis en place par ',
        Managed_by_frederik: 'dirigé par Frederik Gertten, le producteur du documentaire Bike vs Cars.',
        This_project_osoc: "Ce projet a été élaboré au cours de l'Open Summer of Code, une initiative d'Open Knowledge Belgium. En juillet 2020, un groupe de 7 étudiants et 3 coaches ont travaillé au développement de ce projet.",
      
        // Faq Page
        Faq_title: 'Questions fréquemment posées',
        Question_one_title: 'Pourquoi devrais-je participer à ce projet ?',
        Question_one_answer: "En partageant vos données sur le cyclisme, vous pouvez contribuer à rendre nos villes mieux adaptées aux cyclistes. Ne nous contentons pas d'avoir des données ouvertes pour les voitures, mais faisons en sorte que la communauté cycliste soit également visible !",
        Question_two_title: 'Que se passe-t-il avec mes données ?',
        Question_two_answer: "Nous rassemblons les données sur le vélo de différents cyclistes, afin qu'elles puissent nous fournir des modèles sur la façon dont les gens font du vélo et à quel moment. Il n'y aura aucun lien individuel avec chaque cycliste. Les données ainsi recueillies peuvent être utiles de différentes manières : en effectuant des travaux routiers lorsque cela est nécessaire, en rendant plus visibles les groupes de cyclistes minoritaires, en explorant de nouvelles pistes cyclables, etc. ",
        Question_three_title: 'Puis-je effacer les données ?',
        Question_three_answer: "Oui ! En tant que cycliste, vous avez le contrôle total de vos propres données, donc si vous voulez les extraire de notre plate-forme, c'est certainement possible.",
        Question_four_title: 'Comment puis-je partager mes données avec cette plate-forme ?',
        Question_four_answer: "Vous pouvez utiliser une application cycliste que vous possédez déjà et la relier à la plate-forme du Bike Data Project. Si vous n'utilisez pas encore une telle application mais que vous voulez quand même contribuer, vous pouvez utiliser notre propre application. Il n'est pas nécessaire de créer un compte, vous pouvez simplement partager vos données sur la plateforme.",
        Question_five_title: 'Quelles sont les données que je partage à partir de mon autre application ?',
        Question_five_answer: "Nous récupérons les données suivantes : itinéraires de cyclisme, sexe, âge et but de l'itinéraire de cyclisme. (loisirs, sports, trajet domicile-travail...)",
        Question_six_title: 'Comment puis-je avoir accès aux données ouvertes ?',
        Question_six_answer: 'Le Bike Data Project est un projet de données ouvertes, ce qui signifie que tout le monde peut avoir accès aux données agrégées. Chaque cycliste a également la possibilité de contrôler ses propres données. Via notre page Github, vous pouvez accéder à toutes les données ouvertes (https://github.com/orgs/bikedataproject/dashboard )',

        // Contact Page
        Further_questions: 'Pour toute question ou information complémentaire, veuillez nous contacter via : ',
        Follow_socials: 'Suivez notre projet via nos canaux de médias sociaux :',
      },
    },
    nl: {
      translations: {
        // Navbar
        About: 'Over',

        // Header
        Heading:
          'Een online platform om fietsdata te verzamelen, voor en door fietsers.',

        // DataMap Page
        Data_been_gathered: 'Deze gegevens zijn de afgelopen jaren verzameld door verschillende soorten fietsers van over de hele wereld.',
        Below_access: 'Hieronder kunt u ook volledig toegang krijgen tot onze open data.',
        Map_subtitle: 'Bekijk al onze open data',

        // About Page
        About_title: 'Over Project',
        Okb_is: 'Open Knowledge Belgium is de organisatie achter het Bike Data Project.',
        Okb_umbrella: 'is een overkoepelende organisatie (non-profit / vzw / asbl) voor Open Knowledge initiatieven.',
        There_are_numerous: 'Er zijn tal van Open Knowledge initiatieven in België. Om deze gemeenschappen sneller toegang te geven tot middelen was een koepelorganisatie nodig. Daar komt Open Knowledge Belgium in beeld. We maken het delen van kennis mogelijk en laten verschillende organisaties en culturen kruisbestuiving toepassen. We willen de kennis in België ontsluiten en zien dat ze gebruikt wordt en nuttig is. Dit proberen we te bereiken door zowel een bottom-up als een community driven manier, en door nauw samen te werken met overheden en organisaties.',
        Bike_data_project: 'Het Bike Data Project bestond al een tijdje geleden. Het project werd toen opgezet door ',
        Managed_by_frederik: ', beheerd door Frederik Gertten, de producent van de Bike vs Cars documentaire.',
        This_project_osoc: 'Dit project werd verder uitgewerkt tijdens de Open Summer of Code, een initiatief van Open Knowledge Belgium. In juli 2020 werkte een groep van 7 studenten en 3 coaches aan de ontwikkeling van dit project. ',
      
        // Faq Page
        Faq_title: 'Veel gestelde vragen',
        Question_one_title: 'Waarom zou ik deelnemen aan dit project?',
        Question_one_answer: 'Door uw fietsgegevens te delen, kunt u helpen om onze steden beter aan te passen aan de fietsers. Laten we niet alleen open data beschikbaar hebben voor autos, maar ook dat de fiets gemeenschap net zo zichtbaar is!',
        Question_two_title: 'Wat gebeurt er met mijn gegevens?',
        Question_two_answer: 'We verzamelen fietsgegevens van verschillende fietsers, zodat het ons patronen kan geven over hoe en wanneer er gefietst wordt. Er komen geen individuele connecties met elke fietser. Deze verzamelde gegevens kunnen op verschillende manieren helpen: het uitvoeren van wegwerkzaamheden wanneer dat nodig is, het zichtbaarder maken van minderheidsgroepen binnen de fiets gemeenschap, het verkennen van nieuwe fietsroutes, enzovoorts. ',
        Question_three_title: 'Kan ik mijn gegevens verwijderen?',
        Question_three_answer: 'Ja! Je hebt als fietser volledige controle over je eigen gegevens, dus als je ze uit het platform wilt halen is dat zeker mogelijk. ',
        Question_four_title: 'Hoe deel ik mijn gegevens aan dit platform?',
        Question_four_answer: "U kunt gebruik maken van een fiets applicatie die u al heeft en deze koppelen aan het Bike Data Project platform. Als je zo'n applicatie nog niet gebruikt maar toch wilt bijdragen, kun je gebruik maken van onze eigen app. Je hoeft geen account aan te maken, je kunt gewoon je gegevens delen met het platform.",
        Question_five_title: 'Welke gegevens deel ik van mijn andere app?',
        Question_five_answer: 'We halen de volgende gegevens op: fietsroutes, geslacht, leeftijd en het doel van de fietsroute. (vrije tijd, sport, woon-werkverkeer...)',
        Question_six_title: 'Hoe krijg ik toegang tot de open data?',
        Question_six_answer: 'Het Bike Data Project is een open-data project, wat betekent dat iedereen toegang kan krijgen tot de afgesproken data. Elke fietser heeft ook de mogelijkheid om controle te hebben over zijn eigen data. Via onze Github pagina heeft u toegang tot alle open data. (https://github.com/orgs/bikedataproject/dashboard)',

        // Contact Page
        Further_questions: 'Voor verdere vragen of informatie kunt u contact met ons opnemen via: ',
        Follow_socials: 'Volg ons project via onze social media kanalen:',
      },
    },
  },
  fallbackLng: 'en',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
});

export default i18n;