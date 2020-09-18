import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        // Navbar
        Contribute: 'Contribute',
        The_data: 'The Data',
        About: 'About',
        FAQ: 'FAQ',
        Contact: 'Contact',

        // Header
        Heading: 'Cycling communities collecting data to make cities more bike-friendly.',
        Introduction:
          'Thanks to the data contributed by different kinds of cyclists, the Bike Data Project wants to show where and when people actually cycle. The collected cycling data create insights which local communities and decision-makers can use to cyclists more visible and cities more liveable.',
        Label_total_km: 'Total kilometers gathered by cycling communities all over the world',

        //Help
        Help_title: 'We need your help!',
        Ask_for_favor:
          'To make this work we want to ask you to contribute your cycling data.',
        By_sharing_your:
          'We need to know where you ride your bicycle. Your data contributions, combined with the data from many other cyclists, will make cities more adapted for cyclists.',
        Every_cyclist_can:
          'Every kind of cyclist has something to contribute to this project. Some people already track their activity for training purposes. That’s great, but we also really want to take into account the short routes: commuting to work, dropping the kids at school or for a quick ride to the grocery store.',
        // Donate
        Donate_title: 'Contribute your bike data',
        Several_ways_to_contribute:
          'There are a several ways you can contribute data to the project. If you already use one of the apps listed below you can easily connect them to The Bike Data Project. Once your app is connected you can just carry on as usual and your rides will be automatically uploaded to the Bike Data Project platform.',
        You_not_using:
          'You’re not using such an application yet? No worries! You can still be part of this project by also downloading and using the Bike Data Project app.',
        Connect_existing_account: 'Connect your existing account',
        Download_our_app: 'Download our app. (comming soon)',
        // Data
        Data_title: 'Collected data worldwide',
        Rides_collected: 'rides collected',
        Distance_collected: 'distance collected',
        Average_duration: 'average duration',
        Average_speed: 'average speed',
        Average_distance: 'average distance',
        co2_saved: 'CO2 saved',
        Data_subtitle: 'Interested in the data by region?',
        Data_button: 'Explore the data',
        // Contribute
        Contribute_title: "Who's the data for?",
        People_who_work:
          'People who work in departments of transportation and city planners around the world need data like this to help them develop modern infrastructure and sustainable cities. Some of them are aware and others we have to convince. And the more data we can provide, the greater impact we shall have.',
        Common_goal:
          'The data can also be very useful for other bike related products and services. The common goal is aggregate cycling data and make them available as open data in order to make cities better adapted for cyclists. For us and the people to come.',
        // Visible
        Visible_title: 'More cycling data means more power to and for cyclists',
        Community_more_visible:
          'The Bike Data Project provides the opportunity to collect all cycling data from different applications into one platform, which is - based on the principle of open source and open data - adaptable and accessible by everyone to ensure it benefits society.',
        Globally_but_locally:
          'Little is known about how cyclists move around in cities today. If there’s data available, it’s closed and restricted data sold by one single app provider or static data collected through manual counts. If we want to have more people cycling in cities and make the bicycle as easy and logical to opt for as the car, we also need to get the same data insights into cyclists’ behavior as we do have about car transport.',
        // Informed
        Informed_title: 'Stay informed',
        Email_label: 'Email',
        Informed_placeholder: 'Your email adress',
          // Partners
        Partners_title: 'Project Partners',

        // Footer
        Footer_intro:
          'Bike Data Project is a project managed by Open Knowledge Belgium',
        Footer_nav_title: 'Information',
        Footer_contact: 'Contact',
        Footer_street: 'Cantersteen 12',
        Footer_city: '1000 Brussels',
        // Subfooter
        Footer_copyright_one: 'Except where otherwise noted, content on this site is licensed under a',
        Footer_copyright_two:
          'Creative Commons Attribution 4.0 International License',
        Terms_of_use: 'Terms of use',
        Privacy_policy: 'Privacy policy',
        Cookie_policy: 'Cookie policy',

        // Big words
        Help: 'Help',
        Contribute: 'Contribute',
        Data: 'Data',
        Contribute: 'Contribute',
        Visible: 'Power',
        Partners: 'Partners',
        About_us: 'About',
        Faq: 'Faq',
        Contact_us: 'Contact',
        Cookies: 'Cookies',
        Privacy: 'Privacy',
        Terms: 'Terms',

        // Data Page
        Map_title: 'The Data',
        Data_content_one: 'Scroll down to explore the map with all cycling data collected so far.',
        Data_content_two: 'The data collected by this project consists of contributions made by all different kinds of cyclists. All individual cycling data are aggregated into collective data. The collective data gives us patterns we can use to demonstrate where and when cyclists ride their bicycles.',
        Data_content_three: 'The non-private aggregated cycling data will be opened up to the public as open data. The open data provided by the Bike Data Project platform can be freely used by different stakeholders and for different purposes. Here’s a non-exhaustive list of different use cases of the open data:',
        Data_content_listOne: 'Transportation experts, city planners, mobility planners and urban designers around the world need open data like this to help them develop modern infrastructure and sustainable cities.',
        Data_content_listTwo: 'Citizens can get a high-level overview of the number of cyclists and kilometers cycled in the city and check out a map with the number of cyclists per route.',
        Data_content_listThree: 'Civil society and journalists use the data to analyse the situation for cyclists in the city, such as the amount of time cyclists lose on average at traffic lights.',
        Data_content_listFour: 'Data and software companies can dive into the data to obtain smart cycling insights and build tools like advanced cycling route planners and recommendation engines to improve cycling infrastructure. The data can also be very useful for other bike related products and services.',
        Data_content_four: 'All aggregated cycling data will be available as open data by the end of October 2021. For now, you can contribute to the project by donating your cycling data.',
        Map_subtitle: 'Have a look at all our open data',

        // About Page
        About_title: 'About Project',
        About_intro: 'With the Bike Data Project, Open Knowledge Belgium – the umbrella organisation for open knowledge and open data initiatives in Belgium – wants to build a community-driven open bike data platform that collects data on where and when people actually cycle. The project aims at aggregating data from cyclists, coming from different mobile applications and sources, into one open bike data platform. The collective open data will empower local communities in making cycling more visible and decision-makers in making cities more liveable and bike-friendly.',
        
        About_titleOne: "Short history: who's behind the project",
        About_contentOne_oneBefore: 'The Bike Data Project was initially set up by',
        About_contentOne_oneAfter: 'and launched as part of the release of the Bikes vs Cars documentary, directed by Fredrik Gertten. As the documentary has been screened in over 50 countries, there has already been collected more than 275.000 bicycle rides collected.',
        About_contentOne_twoBefore: 'At the beginning of 2020, the project was moved under the umbrella of Open Knowledge Belgium. ',
        About_contentOne_twoAfter: '(non-profit/vzw/asbl), as local chapter of Open Knowledge International, is an umbrella organisation for various open knowledge and open data initiatives in Belgium. We strive for a world in which knowledge creates power for the many, not the few and proactively promote openness through projects and events, to the general public as well as to experts in the field. As grassroots organisation we consist of people, mainly volunteers, passionate about openness, using advocacy, research, technology and projects to unlock information, enabling people to use and share knowledge.',
        About_contentOne_three: 'Open Knowledge Belgium guarantees the openness of the project for all purposes and takes all required measures according to the GDPR regulations concerning data privacy and protection. With a transparent and clear terms of use for this project, Open Knowledge Belgium wants to set an example on how to deal with privacy-related issues and wants to take the opportunity to inform citizens about their digital rights.',
        
        About_titleTwo: "More cycling data means more power to and for cyclists",
        About_contentTwo_one: "Little is known about how cyclists move around in cities today. If there’s data available, it’s closed and restricted data sold by one single app provider or static data collected through manual counts. If we want to have more people cycling in cities and make the bicycle as easy and logical to opt for as the car, we also need to get the same data insights into cyclists’ behavior as we do have about car transport.",
        About_contentTwo_two: "Open Knowledge Belgium aims to create impact by showing where and when people actually cycle. The Bike Data Project provides the opportunity to collect all cycling data from different applications into one platform, which is - based on the principle of open source and open data - adaptable and accessible by everyone to ensure it benefits society.",
        
        About_titleThree: "Public digital infrastructure as common good",
        About_contentThree_one: "Similar to activities like OpenStreetMap Belgium and Open Planner Team by Open Knowledge Belgium, the Bike Data Project is set up as a collaborative project which is open to all and makes society benefit as a whole. Therefore, the digital infrastructure and aggregated data are - based on the principles of open source and open data - freely adaptable and accessible to anyone.",
        About_contentThree_two: "Furthermore, Open Knowledge Belgium strives to play with this Bike Data Project an important role in wider societal movements:",
        About_contentThree_listOneBold: "Citizens can take back control of their data",
        About_contentThree_listOne: "thanks to strong European GDPR regulations. In the case of the Bike Data Project, we want to encourage citizens to get their data out of third party apps (e.g. popular apps as Strava and even potentially Google Maps) and ask them to contribute them to a good cause.",
        About_contentThree_listTwoBold: "Promote skill sharing and encourage learning within the community",
        About_contentThree_listTwo: "throughout the whole process from project proposal to real-world platform. Strongly inspired by the work of the School of Data in Riga, we want to involve the cycling community in the local Bike Data Project campaigns as from the first day. Throughout a series of community events, Open Knowledge Belgium wants to improve data literacy.",
        About_contentThree_listThreeBold: "Think globally, act locally.",
        About_contentThree_listThree: "The Bike Data Project platform is global and open by default. Although it is possible for cycling communities all around the world to contribute to the project, Open Knowledge Belgium wants to support local communities with making them act on a local level.",
        
        About_titleFour: "Longer-term sustainability of the Bike Data Project",
        About_contentFour: "The launch of local crowdsourcing campaigns in different cities and the setup of the open data platform are part of a longer-term plan for the Bike Data Project. When a crowdsourcing campaign in a specific city or region comes to an end, the platform will stay online and will be maintained by the open source community of Open Knowledge Belgium. Cycling communities in other cities will be encouraged to launch a campaign in their cities and make use of the platform. Given the interest of different stakeholders in the Bike Data Platform, Open Knowledge Belgium has already received confirmation from different stakeholders that they want to contribute financially to the project so that the server costs can get covered. In that way, the project will be sustained over the longer term.",

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
        Question_one_answerOne: 'By contributing your cycling data, you can help make our cities better adapted to cyclists.',
        Question_one_answerTwo: 'More cycling data means more power to and for cyclists. Little is known about how cyclists move around in cities today. If there’s data available, it’s closed and restricted data sold by one single app provider or static data collected through manual counts. If we want to have more people cycling in cities and make the bicycle as easy and logical to opt for as the car, we also need to get the same data insights into cyclists’ behavior as we do have about car transport.',
        
        Question_two_title: 'How does this project work?',
        Question_two_answerOne: 'To make this work we want to ask you to contribute your cycling data. We need to know where you ride your bicycle. Your data contributions, combined with the data from many other cyclists, will make cities more adapted for cyclists.',
        Question_two_answerTwo: 'We ask different types of cyclists (e.g., daily commuters, delivery riders, sportsmen and tourists) to track their bicycle rides via their preferred mobile application and contribute their data to our community-driven bike data platform. Every kind of cyclist has something to contribute to this project. Some people already track their activity for training purposes. That’s great, but we also really want to take into account the short routes: commuting to work, dropping the kids at school or for a quick ride to the grocery store.',
        Question_two_answerThree: 'In return, the non-private aggregated cycling data will be opened up to the public and can be freely used by anyone. We aim to create impact by showing where and when people actually cycle. More data means more influence over those in power to make cities more sustainable and bike-friendly.',
        
        Question_three_title: 'How do I contribute my data to the platform?',
        Question_three_answer: "In this section on our website, you can simply connect your cycling app account to the Bike Data Project platform. If you do not use such an application already but still want to contribute, you can use our own app. With our own app there's no need to make an account, you can anonymously share your data to the platform.",
        
        Question_four_title: 'What is happening with my data?',
        Question_four_answerOne: 'The data collected by this project consists of contributions made by all different kinds of cyclists. All individual cycling data are aggregated into collective data. The collective data gives us patterns we can use to demonstrate where and when cyclists ride their bicycles.',
        Question_four_answerTwo: 'The non-private aggregated cycling data will be opened up to the public as open data. The open data provided by the Bike Data Project platform can be freely used by different stakeholders and for different purposes. Here’s a non-exhaustive list of different use cases of the open data:',
        Question_four_answerThree: 'Transportation experts, city planners, mobility planners and urban designers around the world need open data like this to help them develop modern infrastructure and sustainable cities.',
        Question_four_answerFour: 'Citizens can get a high-level overview of the number of cyclists and kilometers cycled in the city and check out a map with the number of cyclists per route.',
        Question_four_answerFive: 'Civil society and journalists use the data to analyse the situation for cyclists in the city, such as the amount of time cyclists lose on average at traffic lights.',
        Question_four_answerSix: 'Data and software companies can dive into the data to obtain smart cycling insights and build tools like advanced cycling route planners and recommendation engines to improve cycling infrastructure. The data can also be very useful for other bike related products and services.',
        Question_four_answerSeven: 'All aggregated cycling data will be available as open data by the end of October 2021. For now, you can contribute to the project by donating your cycling data.',
        
        Question_five_title: 'Is my privacy respected when I contribute my data?',
        Question_five_answerOne: 'Yes, Open Knowledge Belgium guarantees the openness of the project so that society benefits as a whole and takes all required measures according to the GDPR regulations concerning data privacy and protection.',
        Question_five_answerTwo: "We are collecting cycling data of many individual cyclists and aim to make the non-private aggregated data available to the public as open data. The aggregated data will be published in a way that it's not possible to retrieve any personal information of an individual cyclist.",
        Question_five_answerThree: "The data publishing will be done based on the principle of differential privacy, which is a system for publicly sharing information about a dataset by describing the patterns of groups within the dataset while withholding information about individuals in the dataset. This basically means that data will only be published if a particular individual's information cannot be retrieved.In case it's not possible the respect the disclosure of a particular individual's information, the data won't be published.",

        Question_six_title: 'Can I delete my data?',
        Question_six_answer: "Yes! Although you contribute your data in an anonymous way (we don't ask for your name or any other information that identifies you), you can ask us to extract your data from the Bike Data Project platform.If you'd like to do so, please send us an email to bikedataproject@openknowledge.be with the name of the app you've used to contribute your data and, if possible, also the ID number associated with your account in the app.",

        Question_seven_title: 'What data am I sharing from my app?',
        Question_seven_answer: "We mainly want to ask you to contribute the data regarding your cycling activities, more specifically where and when you cycle. Besides that, there's the possibility to share information on your gender, age, type of bicycles and the reason of your bicycle ride(leisure, sports, commute, ...).",

        Question_eight_title: 'How do I get access to the open data?',
        Question_eight_answerOne: 'The non-private aggregated cycling data will be opened up to the public as open data. The open data provided by the Bike Data Project platform can be freely used by different stakeholders and for different purposes.',
        Question_eight_answerTwo: 'All aggregated cycling data will be available as open data by the end of October 2021. For now, you can contribute to the project by donating your cycling data.',

        Question_nine_title: "I'd love to be more involved in this project - how can I help?",
        Question_nine_answer: "That's awesome! Feel free to join our Slack group(https://join.slack.com/t/bikedataproject/sharedinvite/zt-g60t5w5c-lT2ucV0HtLEVnE4wG9hTg) and introduce yourself there. We'd love to hear how you'd like to contribute to the project!",

        // Contact Page
        Contact_title: 'Contact',
        Further_questions: 'For any further questions or information, please contact us via:',
        Follow_socials: 'Follow our project via our social media channels:',

        // Cookies Page
        Cookies_title: 'Cookie Policy',
        What_are_cookies: '1. What are cookies',
        Cookies_section_one: 'Cookies are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored. However, this may downgrade or "break" certain elements of the site functionality. For more general information on cookies',
        Cookies_section_oneLink: 'see this Wikipedia article on HTTP Cookies.',
        How_we_use_cookies: '2. How we use cookies',
        Cookies_section_two: 'We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.',
        Disabling_cookies: '3. Disabling cookies',
        Cookies_section_three: "You can prevent cookies being downloaded by adjusting your browser settings (see the Help menu of your browser to find out how to do this). Please be aware that disabling cookies might affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in disabling certain functionality and features of this site as well. If you'd like to disable cookies, we recommend using",
        Cookies_section_threeLink: "on Firefox.",
        Cookies_we_set: '4. Cookies we set',
        Cookies_section_fourOne: 'Our website includes a newsletter subscription service and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.',
        Cookies_section_fourTwo: 'In order to provide you with a great experience on this site, we provide the functionality to set the language according to the language you use in your browser. In order to remember your preferences we need to set cookies, so that this information can be recalled whenever you interact with a page that is affected by your preferences.',
        Third_party_cookies: '5. Third party cookies',
        Cookies_section_five: 'Our site doesn’t make use of cookies provided by third parties.',
        More_information: '6. More Information',
        Cookies_section_six: "As previously mentioned, if there is anything that you aren't sure you need or not, it's usually safer to leave cookies enabled - just in case it does interact with one of the features you use on our site. If you are still looking for more information, you can contact us at ",

        // Privacy Page
        Privacy_title: 'Privacy Policy',
        Privacy_introOne: 'Responsible for the processing of the Data and Owner',
        Privacy_introTwo: 'Bike Data Project with Open Knowledge Belgium as legal entity, a not-for-profit organization, incorporated and existing under the laws of Belgium, with registered office at 12 Cantersteen 1000 Brussels, Belgium, with company number 0845.419.930.',
        Privacy_policy_section: '1. Privacy Policy',
        Privacy_section_one: 'This ‘Privacy Policy’ applies to the ‘Personal Data’ collected by Bike Data Project through this website.',
        What_does_personal: '2. What does personal data mean?',
        Privacy_section_two: 'In this Privacy Policy, Personal Data refers to information that makes it possible to identify you. An identifiable person is someone who can be identified, either directly or indirectly, in particular by referring to an identification number or to one or more factors that are linked to physical, physiological, mental, economic, cultural or social identity. A typical example of personal information is your name and email address.',
        What_personal_data: '3. What personal data do we collect?',
        Privacy_section_three: 'We might collect your Personal Data from the following sources:',
        Privacy_section_threeOne: '3.1 Personal Data that you provide during the data contribution process on the platform.',
        Privacy_section_threeOne_pointOne: 'Data about your public profile in your preferred cycling app (mandatory)',
        Privacy_section_threeOne_pointTwo: 'Data about your private cycling activitiesin your preferred cycling app (mandatory)',
        Privacy_section_threeOne_pointThree: 'Your consent to these terms',
        Privacy_section_threeTwo: '3.2 Personal Data that we collect when you visit our website.',
        Privacy_section_threeTwo_content: 'We use cookies to automatically collect personal data about you when you use this website. For more information, please consult our Cookie Policy.',
        Privacy_section_threeThree: '3.3. Personal Data that you provide when sharing your bike data',
        Privacy_section_threeThree_pointOne: 'Your cycling rides (mandatory)',
        Privacy_section_threeThree_pointTwo: 'Your age range (optional)',
        Privacy_section_threeThree_pointThree: 'Your gender (optional)',
        Privacy_section_threeThree_pointFour: 'Your cycling trip purpose (optional)',
        Privacy_section_threeThree_pointFive: 'Your type of bicycle (optional)',

        How_use_personal_data: '4. How do we use personal data?',
        Privacy_section_fourOne: "We are collecting cycling data of many individual cyclists and aim to make the non-private aggregated data available to the public as open data. The aggregated data will be published in a way that it's not possible to retrieve any personal information of an individual cyclist.",
        Privacy_section_fourTwo: "The data publishing will be done based on the principle of differential privacy, which is a system for publicly sharing information about a dataset by describing the patterns of groups within the dataset while withholding information about individuals in the dataset. This basically means that data will only be published if a particular individual's information cannot be retrieved.In case it's not possible the respect the disclosure of a particular individual's information, the data won't be published.",
        Privacy_section_fourThree: 'The personal data is only stored and processed for the period required for the purpose of the processing. After that, the data will be deleted or anonymized. Bike Data Project relies on DigitalOcean which is certified under major privacy and security standards. DigitalOcean services are GDPR compliant. All information related to DigitalOcean can be found here.',
        With_whom_do: '5. With whom do we share your personal data?',
        Privacy_section_five: 'Your personal data will not be shared with any third party. We will never sell or rent your personal data to other service providers, nor will we share your Personal Data with any service providers who are not compliant with the GDPR.',
        Where_do_we_transfer: '6. Where do we transfer your personal data to?',
        Privacy_section_six: 'We only transfer your Personal Data to service providers established outside the European Economic Area if they comply to art 44 GDPR. All US-based service providers comply with Privacy Shield.',
        Automated_decision: '7. Automated decision-making and profiling ',
        Privacy_section_seven: 'The processing of your personal data does not include profiling and will not  be subjected to automated decision-making for the Bike Data Project.',
        What_rights_do: '8. What rights do you have? ',
        Privacy_section_eight: 'You have the right to view your personal data at any time, as well as the right to be informed of the use that Bike Data Project makes of your personal data.',
        Privacy_section_eightOne: '1. Right to rectification, removal and restriction of processing',
        Privacy_section_eightOne_content: 'You are free to decide whether or not to provide your personal data to Bike Data Project. In addition, you always have the right to amend, supplement or remove your personal data at Bike Data Project. You acknowledge that a refusal to provide or a request for the removal of personal data means that certain services can no longer be delivered. You may also request the limitation of the processing of your personal data.',
        Privacy_section_eightTwo: '2. Right to object',
        Privacy_section_eightTwo_content: 'You have the right to object to the processing of your personal data, as long as this is for serious and legitimate reasons.',
        Privacy_section_eightThree: '3. Right to data portability',
        Privacy_section_eightThree_content: 'You have the right to obtain the personal data you have provided to Bike Data Project in a structured, typical and machine-readable form and/or transfer it to different controllers.',
        Privacy_section_eightFour: '4. Right to withdraw consent',
        Privacy_section_eightFour_content: 'Insofar as the processing is based on your prior consent, you have the right to withdraw this approval.',
        Privacy_section_eightFive: '5. Right to lodge a complaint',
        Privacy_section_eightFive_content: 'You have the right to lodge a complaint to the Belgian Privacy Commission:  Personal Privacy Protection Commission, Drukpersstraat 35, 1000 Brussels,  Belgium, Tel +32 (0)2 274 48 00, Fax +32 (0)2 274 48 35, email:  commission@privacycommission.be. This does not affect relief before a civil  court.',
        Exercising_your_rights: '9. Exercising your rights',
        Privacy_section_nine: 'You can exercise your rights by contacting Bike Data Project to this end by sending an email to support bikedataproject@openknowledge.be, provided you enclose a copy of your identity card',
        
        Additional_info: 'Additional information on data collection and processing',
        Legal_procedures: 'Legal procedures',
        Legal_procedures_contentOne: 'The Processor and the Controller for the processing of the Data might use the Personal Data of the User for legal purposes, for the court or legal proceedings in the event of unlawful use of this Application or the related services.',
        Legal_procedures_contentTwo: 'The User is aware that the Processor and the Data Controller might be obliged to disclose the personal data at the request of competent government institutions for the processing of the Data.',
        Security_measures: 'Security measures',
        Security_measures_contentOne: 'Bike Data Project has developed security measures which have been adjusted at the technological and organisational level to prevent the destruction, loss, falsification, changing, prohibited access or the erroneous disclosure to third parties of personal data as well as any other prohibited processing of this data.',
        Security_measures_contentTwo: 'Under no circumstances can Bike Data Project be held liable for any direct or indirect loss resulting from the incorrect or unlawful use of your personal data by a third party.',
        Security_measures_contentThree: 'You must at all times comply with the security instructions, which includes preventing all prohibited access to your login details including your password. You are solely responsible for the usage of the website on your computer, from your IP-address and with your identification details, as well as for keeping these confidential.',
        Definitions_legal_framework: 'Definitions and legal framework',
        Personal_data: 'Personal data (or Data)',
        Personal_data_content: 'All information regarding a natural person, a legal person, an institution or an association that has been or might be identified directly or indirectly by reference to other information.',
        Usage_data: 'Usage data',
        Usage_data_content: 'Information that is automatically collected from this Application (or external services used in this Application), including: the IP addresses or domain names of the computers used by the Users of this Application, the URI (Uniform Resource Identifier) ​​addresses, the time of the request, the method used to submit the request to the server, the size of the file received in response to it, the numerical code indicating the status of the server response (successful, error, etc.), the functions of the browser and the operating system of the User, the different time data per visit (such as the time spent on each page of the application) and the data collected while using the application (example : the order of pages visited or other parameters about the operating system of the device).',
        User: 'User',
        User_content: 'The person using this Application and who must agree with or be authorized by the Data Subject to whom the Personal Data refer.',
        Person_concerned: 'The person concerned',
        Person_concerned_content: 'The legal person or natural person to whom the Personal Data relate.',
        Data_processor: 'Data processor (or Data supervisor)',
        Data_processor_content: 'The natural person, legal entity, government administration or any other institution, association or organization that has been authorized by the Data Controller to process the Personal Data in accordance with this privacy policy.',
        Responsible_processing: 'Responsible for the processing of the data (or Owner)',
        Responsible_processing_content: 'The natural person, legal person, government administration or any other institution, association or organization with the right, also jointly with the Controller for the processing of the Data to make decisions regarding the purposes and methods of processing Personal Data and the means used, including security measures regarding the exploitation and use of this Application. The Controller for the processing of the Data is the Owner of this Application, unless otherwise indicated.',
        This_application: 'This application',
        This_application_content: 'The hardware or software tools through which the Personal Data of the User are collected.',
        Cookie: 'Cookie',
        Cookie_content: "Small chunk of data stored on the User's device. See our Cookie policy.",
        Legal_information: 'Legal information',
        Legal_information_content: 'Notice to European Users: this privacy statement has been drawn up with due observance of the obligations in art. 10 of the European Directive 95/46 / EC and the provisions of European Directive 2002/58 / EC, as well as the revision in Directive 2009/136 / EC regarding cookies.',
        Changes_privacy_policy: 'Changes to this privacy policy',
        Changes_privacy_policy_date: 'Last updated: 16 September 2020',
        Changes_privacy_policy_content: "The Controller for the processing of the Data reserves the right to change this privacy policy at any time by notifying Users on this page. We encourage you to check this page for possible changes. The date of the last change is indicated at the bottom of the page. If a User objects to any change in the policy, the User must not continue to use this Application. One might request the Controller for the processing of the Data to delete the Personal Data. Unless otherwise indicated, the valid Privacy Policy applicable at that time applies to all Personal Data that the Controller has stored for the processing of the Data about Users.",

        // Terms of Use Page
        Terms_title: 'Terms of Use',
        Terms_introOne: 'With the Bike Data Project, Open Knowledge Belgium – the umbrella organisation for open knowledge and open data initiatives in Belgium –  provides a community-driven open bike data platform that collects data on where and when people actually cycle. The platform aims at aggregating data from cyclists, coming from different mobile applications and sources, into one open bike data platform in order to empower local communities in making cycling more visible and decision-makers in making cities more liveable and bike-friendly.',
        Terms_introTwo: 'These Terms of Service ("Terms") apply to your use of the website and the open data (collectively, the “platform”) provided by Bike Data Project.',
        Terms_introThree: 'The use of this platform is subject to a number of rules . Below you can find the general conditions of our platform, as we are convinced that clear rules provide the best guarantee for a respectful community. By accessing the Platform, you agree to these Terms.',
        Terms_introFour: 'Because Bike Data Project appreciates the feedback of the users of its platform, we welcome any ideas to further improve the platform. You can email your suggestions to support',
        Who_can_contribute: 'Who can contribute to the Bike Data Project?',
        Who_can_contribute_contentOne: 'Any kind of cyclists who wants to share their cycling data for the greater good. You can link your own cycling apps to contribute your data, or use the Bike Data Project app directly.',
        Who_can_contribute_contentTwo: 'You don’t need to create an account to contribute to the Bike Data Project, and you personal data will not be linked to you personally.',
        Limitation_of_liability: 'Limitation of Liability',
        Limitation_of_liability_contentOne: 'The platform cannot be held responsible for any failure or delay in performing the terms. The platform cannot be held responsible for any liability in case of personal injury or death resulting from using it.',
        Limitation_of_liability_contentTwo: 'IN NO EVENT SHALL BIKE DATA PROJECT OR ITS FUNDERS AND VOLUNTEERS, INDIRECT OR CONSEQUENTIAL DAMAGES, OR ANY OTHER DAMAGES OF ANY KIND, INCLUDING, BUT NOT LIMITED TO LOSS OF USE, LOSS OF PROFITS OR LOSS OF DATA, WHETHER IN AN ACTION IN CONTRACT, TORT (INCLUDING BUT NOT LIMITED TO NEGLIGENCE) OR OTHERWISE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, ARISING FROM OR RELATING TO: (A) THE USE OR INABILITY TO USE OUR SERVICES; (B) THE COST OF REPLACEMENT OF ANY GOODS, SERVICES OR INFORMATION PURCHASED OR OBTAINED AS A RESULT OF ANY INFORMATION OBTAINED FROM OR TRANSACTIONS ENTERED INTO THROUGH OR FROM OUR SERVICES; (C) DISCLOSURE OF, UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR CONTENT; (D) DAMAGES FOR LOSS OR CORRUPTION OF DATA OR PROGRAMS, SERVICE INTERRUPTIONS OR PROCUREMENT OF SUBSTITUTE SERVICES, EVEN IF WE KNOW OR HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES; (E) STATEMENTS, CONDUCT OR OMISSIONS OF ANY SERVICE PROVIDERS OR OTHER THIRD PARTY ON OUR SERVICES; (F) YOUR OR ANYONE ELSE’S CONDUCT OR ACTS IN CONNECTION WITH THE USE OF THE SERVICES, INCLUDING WITHOUT LIMITATION, BODILY INJURY, EMOTIONAL DISTRESS, DEATH OR ANY OTHER DAMAGES RESULTING FROM COMMUNICATIONS OR MEETINGS WITH OTHER REGISTERED MEMBERS OF OUR SERVICES OR PERSONS INTRODUCED TO YOU BY OUR SERVICES, WHETHER ON-LINE OR OFF-LINE; OR (G) ANY OTHER MATTER ARISING FROM, RELATING TO OR CONNECTED WITH OUR SERVICES OR THESE TERMS.',
        Spam: 'Spam',
        Spam_contentOne: 'We strive at all times to protect the Bike Data Project platform user from technical abuse and spam. Accounts that are used to perform the actions listed below can be temporarily blocked or permanently deleted.',
        Spam_contentTwo: "Malware / phishing / viruses / worms / Trojans: You may not post malicious content or links to such content for the purpose of damaging or disrupting someone else's browsers or computers, or of violating someone's privacy. Spam: You are not allowed to use the Welcome To My Garden platform to spam people",
        Infringement: 'Infringement of applicable laws',
        Infringement_contentOne: 'The use of the account may not in any way infringe applicable laws. This includes infringements against privacy legislation, intellectual property rights, the criminal code, etc.',
        Infringement_contentTwo: 'The account may not be used to promote illegal activities in any way.',
        Breaches_aforementioned_rules: 'In case of breaches of the aforementioned rules',
        Breaches_aforementioned_rules_content: 'It may occur that harmful files can be downloaded via the platform, whether or not due to a user, or that users place harmful hyperlinks. Every download by a user or click on a hyperlink, placed by a user, is done at the user’s own risk. Any damage incurred is completely and solely the responsibility of this user.',
        Property_rights: 'Property rights Bike Data Project',
        Property_rights_content: 'The source code of Bike Data Project is open source. You agree to be bound by and comply with any license agreement that applies to this open source software. The visual identity, including the logo and colors, and the name cannot be used nor replicated for any of Bike Data Project.',
      },

    },
    fre: {
      translations: {
        // Navbar
        Contribute: 'Donner data',
        About: 'Projet',

        // Header
        Heading: 'Nous recueillons des données sur les vélos pour rendre les villes durables et respectueuses du vélo ',
        Introduction: 'Ce projet vise à créer une plateforme de données ouverte à tous, faite pour et par les cyclistes, recueillant des données sur les endroits et moments où les gens font réellement du vélo. La plate-forme vise à rassembler les données des cyclistes afin de les rendre plus accessibles et ainsi mieux adapter les villes à la communauté cycliste.',
        Label_total_km: 'Nombre total de kilomètres parcourus par la communauté cycliste',

        //Help
        Help_title: 'Comment aider?',
        Ask_for_favor: 'Pour que cela fonctionne, nous vous demandons une simple faveur. ',
        By_sharing_your: 'En partageant vos données avec notre plateforme, l’ensemble des données collectées nous donnent des modèles qui peuvent être utilisés afin de rendre les cyclistes plus visibles et ainsi mieux adapter les villes dans lesquelles ceux-ci circulent.',
        Every_cyclist_can: 'Chaque type de cycliste a quelque chose à apporter à ce projet. Certaines personnes suivent déjà leur activité pour leur entraînement personnel mais nous voulons aussi vraiment prendre en compte les trajets courts, afin de se rendre au travail ou alors pour se rendre dans une épicerie par exemple.',
        // Donate
        Donate_title: 'Faites don de vos données',
        Several_ways_to_contribute: "Vous pouvez contribuer au projet de plusieurs manières. Si vous utilisez déjà l'une des applications énumérées ci- dessous, vous pouvez facilement les connecter au projet Bike Data.Une fois que votre application est connectée, vous pouvez continuer à l’utiliser normalement et vos trajets seront automatiquement téléchargés vers notre service.",
        You_not_using: "Vous n'utilisez pas encore une telle application? Pas de soucis ! Vous pouvez toujours faire partie de ce projet en téléchargeant et en utilisant notre application.",
        Connect_existing_account: 'Connectez votre compte existant',
        Download_our_app: 'Téléchargez notre application. (Bientôt disponible)',
        // Data
        Data_title: 'Les données collectées dans le monde entier',
        Rides_collected: 'trajets collectés',
        Distance_collected: 'distance collectée',
        Average_duration: 'durée moyenne',
        Average_speed: 'vitesse moyenne',
        Average_distance: ' distance moyenne ',
        co2_saved: 'co2 économisé',
        Data_subtitle: 'Vous êtes intéressé par les données par région ?',
        Data_button: 'Voir la carte entière',
        // Contribute
        Contribute_title: 'À quoi vais-je contribuer ?',
        People_who_work: "Les personnes travaillant dans le milieu des transports ainsi que les urbanistes du monde entier ont besoin de données comme celles-ci afin d’aider au développement des infrastructures modernes et des villes de demain. Ces données peuvent également être très utiles pour d'autres produits et services liés au vélo.",
        Common_goal: "Notre objectif est d'agréger les données liés aux cyclistes sur une plate- forme de données ouverte, faite par et pour les cyclistes.Plus le nombre de données que nous pouvons fournir est important, plus celles- ci peuvent avoir un impact important sur notre futur.",
        // Visible
        Visible_title: 'Rendons les cyclistes plus visibles !',
        Community_more_visible: "Les voitures et itinéraires routiers profitent déjà d’une quantité considérable de données, mais qu'en est- il des cyclistes? Ce projet vise à rendre cette communauté plus visible et à faire du monde un lieu adapté pour les cyclistes !",
        Globally_but_locally: 'Ce projet pense globalement mais agit localement, applicable partout dans le monde c’est votre participation qui fera changer les choses.',
        // Informed
        Informed_title: 'Restez informé',
        Email_label: 'E-mail',
        Informed_placeholder: 'Votre adresse email',
        // Partners
        Partners_title: 'Partenaires du projet',

        // Footer
        Footer_intro: 'Bike Data Project est un projet organisé par Open Knowledge Belgium',
        Footer_city: '1000 Bruxelles',

        // DataMap Page
        Data_been_gathered: 'Ces données ont été recueillies au cours des dernières années, par différents types de cyclistes de partout dans le monde. ',
        Below_access: 'Vous pouvez également avoir accès à nos données ouvertes ci-dessous.',
        Map_subtitle: 'Consultez toutes nos données ouvertes',

        // About Page
        About_title: 'À propos du projet',
        Okb_is: "Open Knowledge Belgium est l'organisation à l'origine du Bike Data Project.",
        Okb_umbrella: 'est une organisation faîtière (sans but lucratif / vzw / asbl) pour les initiatives Open Knowledge.',
        There_are_numerous: "Il existe de nombreuses initiatives Open Knowledge en Belgique. Afin de permettre à ces communautés d'accéder plus rapidement aux ressources, il était nécessaire de créer une organisation faîtière. C'est là qu'intervient Open Knowledge Belgium. Nous rendons possible le partage des connaissances et permettons aux différentes organisations et cultures de se croiser. Nous voulons ouvrir le savoir en Belgique et le voir utilisé et utile. Nous nous efforçons d'atteindre cet objectif par une approche ascendante et communautaire, ainsi que par une collaboration étroite avec les gouvernements et les organisations. ",
        Bike_data_project: 'Le projet Bike Data existait déjà il y a quelque temps. Le projet a ensuite été mis en place par ',
        Managed_by_frederik: ' dirigé par Frederik Gertten, le producteur du documentaire Bike vs Cars.',
        This_project_osoc: "Ce projet a été élaboré au cours de l'Open Summer of Code, une initiative d'Open Knowledge Belgium. En juillet 2020, un groupe de 7 étudiants et 3 coaches ont travaillé au développement de ce projet.",
      
        // Faq Page
        Faq_title: 'Foire aux questions',
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
        Follow_socials: 'Suivez notre projet via nos réseaux sociaux :',
      },
    },
    nl: {
      translations: {
        // Navbar
        Contribute: 'Doneer data',
        About: 'Over',

        // Header
        Heading: 'Wij verzamelen fietsdata om steden duurzaam en fietsvriendelijk te maken',
        Introduction: 'Met dit project willen we een open data platform creëren, voor en door fietsers, dat gegevens verzamelt over waar en wanneer er gefietst wordt. Het doel van het platform is om gegevens van fietsers te aggregeren, om fietsers zichtbaarder te maken en steden beter af te stemmen op de fiets gemeenschap.',
        Label_total_km: 'Totaal aantal kilometers verzameld door de fiets community',

        //Help
        Help_title: 'Hoe kan je helpen?',
        Ask_for_favor: 'Om dit te doen werken moeten we u om een eenvoudige gunst vragen.',
        By_sharing_your: 'Door je eigen fietsgegevens te delen met ons platform, geven alle verzamelde gegevens ons patronen die gebruikt kunnen worden om fietsers zichtbaarder te maken en hun steden aan te passen.',
        Every_cyclist_can: 'Elke soort fietser heeft iets bij te dragen aan dit project. Sommige mensen volgen hun activiteit al voor trainingsdoeleinden, maar we willen ook echt rekening houden met de kortere routes. Pendelen naar het werk of wanneer je gewoon een snelle rit naar de supermarkt maakt.',
        // Donate
        Donate_title: 'Doneer je fietsgegevens',
        Several_ways_to_contribute: "Er zijn verschillende manieren waarop jouw gegevens kunnen bijdragen worden aan het project. Als je al gebruik maakt van een van de onderstaande apps kun je deze eenvoudig koppelen aan The Bike Data Project. Zodra de app aangesloten is, kunt u gewoon verder gaan met uw ritten en worden uw ritten automatisch geüpload naar onze service.",
        You_not_using: "Gebruik je zo'n app nog niet? Geen nood! Je kunt nog steeds deel uitmaken van dit project door ook onze app te downloaden en te gebruiken. ",
        Connect_existing_account: 'Verbind uw bestaande account',
        Download_our_app: 'Download onze app. (Verschijnt binnenkort)',
        // Data
        Data_title: 'Verzamelde data wereldwijd',
        Rides_collected: 'verzamelde ritten',
        Distance_collected: 'verzamelde afstand',
        Average_duration: 'gemiddelde duur',
        Average_speed: 'gemiddelde snelheid',
        Average_distance: 'gemiddelde afstand',
        co2_saved: 'co2 bespaard',
        Data_subtitle: 'Interesse in de gegevens per regio?',
        Data_button: 'Zie volledige kaart',
        // Contribute
        Contribute_title: 'Waaraan zal ik bijdragen?',
        People_who_work: "Mensen die werken op afdelingen van transport en stedenbouwkundigen over de hele wereld, hebben dit soort gegevens nodig om moderne infrastructuur en duurzame steden te kunnen ontwikkelen. De gegevens kunnen ook zeer nuttig zijn voor andere fietsgerelateerde producten en diensten.",
        Common_goal: "Het gemeenschappelijke doel is om fietsgegevens te aggregeren in een open dataplatform, door en voor fietsers. Hoe meer open data we kunnen leveren, hoe groter de impact kan zijn.",
        // Visible
        Visible_title: 'Laten we de fietsers zichtbaarder maken!',
        Community_more_visible: "Er zijn veel open data voor auto's en autoroutes, maar hoe zit het met fietsers? Dit project heeft als doel de fiets gemeenschap zichtbaarder te maken en de wereld een fietsplaats te maken!",
        Globally_but_locally: 'Dit project denkt globaal, maar handelt lokaal, zodat het overal ter wereld van toepassing kan zijn.',
        // Informed
        Informed_title: 'Blijf op de hoogte',
        Email_label: 'Email',
        Informed_placeholder: 'Jouw e-mailadres',
        // Partners
        Partners_title: 'Project Partners',

        // Footer
        Footer_intro: 'Bike Data Project is een project georganiseerd door Open Knowledge Belgium',
        Footer_city: '1000 Brussel',
        Footer_nav_title: 'Informatie',

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