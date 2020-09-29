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
        Heading: 'Cyclists collecting data to make cities more bike-friendly.',
        Introduction:
          'Thanks to the data contributed by different kinds of cyclists, the Bike Data Project wants to show where and when people actually cycle. The collected cycling data create insights which local communities and decision-makers can use to cyclists more visible and cities more liveable.',
        Label_total_km: 'Total kilometers gathered by cyclists all over the world',

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
          'You’re not using such an application yet? No worries! You will be able to be part of this project by also downloading and using the Bike Data Project app soon.',
        Connect_existing_account: 'Connect your existing account',
        Download_our_app: 'Download our app. (coming soon)',
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
        Contribute_big: 'Contribute',
        Data: 'Data',
        // Contribute: 'Contribute',
        Power: 'Power',
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
        Data_content_three: 'The anonymous aggregated cycling data will be opened up to the public as open data. The open data provided by the Bike Data Project platform can be freely used by different stakeholders and for different purposes. Here’s a non-exhaustive list of different use cases of the open data:',
        Data_content_listOne: 'Transportation experts, city planners, mobility planners and urban designers around the world need open data like this to help them develop modern infrastructure and sustainable cities.',
        Data_content_listTwo: 'Citizens can get a high-level overview of the number of cyclists and kilometers cycled in the city and check out a map with the number of cyclists per route.',
        Data_content_listThree: 'Civil society and journalists use the data to analyse the situation for cyclists in the city, such as the amount of time cyclists lose on average at traffic lights.',
        Data_content_listFour: 'Data and software companies can dive into the data to obtain smart cycling insights and build tools like advanced cycling route planners and recommendation engines to improve cycling infrastructure. The data can also be very useful for other bike related products and services.',
        Data_content_four: 'All aggregated cycling data will be available as open data by the end of October 2020. For now, you can contribute to the project by donating your cycling data.',
        Map_subtitle: 'Have a look at all our open data',

        // About Page
        About_title: 'About the Bike Data Project',
        About_intro: 'With the Bike Data Project, Open Knowledge Belgium – the umbrella organisation for open knowledge and open data initiatives in Belgium – wants to build a community-driven open bike data platform that collects data on where and when people actually cycle. The project aims at aggregating data from cyclists, coming from different mobile applications and sources, into one open bike data platform. The collective open data will empower local communities in making cycling more visible and decision-makers in making cities more liveable and bike-friendly.',
        About_titleOne: "Short history: who's behind the project",
        About_contentOne_oneBefore: 'The Bike Data Project was initially set up by',
        About_contentOne_oneMiddle: 'and launched as part of the release of the ',
        About_contentOne_oneAfter: ', directed by Fredrik Gertten. As the documentary has been screened in over 50 countries, there has already been collected more than 275.000 bicycle rides collected.',
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
        About_contentThree_listTwo: "throughout the whole process from project launch to further development of the platform. Strongly inspired by the work of the School of Data in Riga, we want to involve the cycling community in the local Bike Data Project campaigns as from the first day. Throughout a series of community events, Open Knowledge Belgium wants to improve data literacy.",
        About_contentThree_listThreeBold: "Think globally, act locally.",
        About_contentThree_listThree: "The Bike Data Project platform is global and open by default. Although it is possible for cycling communities all around the world to contribute to the project, Open Knowledge Belgium wants to support local communities with making them act on a local level.",
        About_titleFour: "Longer-term sustainability of the Bike Data Project",
        About_contentFour: "Open Knowledge Belgium partners up with Brussels Mobility to launch, as part of its Bike for Brussels program, a first campaign in the Brussels-Capital Region. The launch of local crowdsourcing campaigns in different cities and the setup of the open data platform are part of a longer-term plan for the Bike Data Project. When a crowdsourcing campaign in a specific city or region comes to an end, the platform will stay online and will be maintained by the open source community of Open Knowledge Belgium. Cycling communities in other cities will be encouraged to launch a campaign in their cities and make use of the platform. Given the interest of different stakeholders in the Bike Data Platform, Open Knowledge Belgium has already received confirmation from different stakeholders that they want to contribute financially to the project so that the server costs can get covered. In that way, the project will be sustained over the longer term.",
      
        // Faq Page
        Faq_title: 'Frequently Asked Questions',
        Question_one_title: 'Why should I participate in this project?',
        Question_one_answerOne: 'By contributing your cycling data, you can help make our cities better adapted to cyclists.',
        Question_one_answerTwo: 'More cycling data means more power to and for cyclists. Little is known about how cyclists move around in cities today. If there’s data available, it’s closed and restricted data sold by one single app provider or static data collected through manual counts. If we want to have more people cycling in cities and make the bicycle as easy and logical to opt for as the car, we also need to get the same data insights into cyclists’ behavior as we do have about car transport.',
        
        Question_two_title: 'How does this project work?',
        Question_two_answerOne: 'To make this work we want to ask you to contribute your cycling data. We need to know where you ride your bicycle. Your data contributions, combined with the data from many other cyclists, will make cities more adapted for cyclists.',
        Question_two_answerTwo: 'We ask different types of cyclists (e.g., daily commuters, delivery riders, sportsmen and tourists) to track their bicycle rides via their preferred mobile application and contribute their data to our community-driven bike data platform. Every kind of cyclist has something to contribute to this project. Some people already track their activity for training purposes. That’s great, but we also really want to take into account the short routes: commuting to work, dropping the kids at school or for a quick ride to the grocery store.',
        Question_two_answerThree: 'In return, the anonymous aggregated cycling data will be opened up to the public and can be freely used by anyone. We aim to create impact by showing where and when people actually cycle. More data means more influence over those in power to make cities more sustainable and bike-friendly.',
        
        Question_three_title: 'How do I contribute my data to the platform?',
        Question_three_answer: "You can simply connect your existing cycling app account to the Bike Data Project platform. If you do not use such an application already but still want to contribute, you will be able to use our own app soon. With our own app there won't need to create an account, you will be able to anonymously share your data to the platform.",
        
        Question_four_title: 'What is happening with my data?',
        Question_four_answerOne: 'The data collected by this project consists of contributions made by all different kinds of cyclists. All individual cycling data are aggregated into collective data. The collective data gives us patterns we can use to demonstrate where and when cyclists ride their bicycles.',
        Question_four_answerTwo: 'The anonymous aggregated cycling data will be opened up to the public as open data. The open data provided by the Bike Data Project platform can be freely used by different stakeholders and for different purposes. Here’s a non-exhaustive list of different use cases of the open data:',
        Question_four_answerThree: 'Transportation experts, city planners, mobility planners and urban designers around the world need open data like this to help them develop modern infrastructure and sustainable cities.',
        Question_four_answerFour: 'Citizens can get a high-level overview of the number of cyclists and kilometers cycled in the city and check out a map with the number of cyclists per route.',
        Question_four_answerFive: 'Civil society and journalists use the data to analyse the situation for cyclists in the city, such as the amount of time cyclists lose on average at traffic lights.',
        Question_four_answerSix: 'Data and software companies can dive into the data to obtain smart cycling insights and build tools like advanced cycling route planners and recommendation engines to improve cycling infrastructure. The data can also be very useful for other bike related products and services.',
        Question_four_answerSeven: 'All aggregated cycling data will be available as open data by the end of October 2020. For now, you can contribute to the project by donating your cycling data.',
        
        Question_five_title: 'Is my privacy respected when I contribute my data?',
        Question_five_answerOne: 'Yes, Open Knowledge Belgium guarantees the openness of the project so that society benefits as a whole and takes all required measures according to the GDPR regulations concerning data privacy and protection.',
        Question_five_answerTwo: "We are collecting cycling data of many individual cyclists and aim to make the anonymous aggregated data available to the public as open data. The aggregated data will be published in a way that it's not possible to retrieve any personal information of an individual cyclist.",
        Question_five_answerThree: "The data publishing will be done based on the principle of differential privacy, which is a system for publicly sharing information about a dataset by describing the patterns of groups within the dataset while withholding information about individuals in the dataset. This basically means that data will only be published if a particular individual's information cannot be retrieved.",

        Question_six_title: 'Can I delete my data?',
        Question_six_answer: "Yes! Although you contribute your data in an anonymous way (we don't ask for your name or any other information that identifies you), you can ask us to extract your data from the Bike Data Project platform.If you'd like to do so, please send us an email to bikedataproject@openknowledge.be with the name of the app you've used to contribute your data and, if possible, also the ID number associated with your account in the app.",

        Question_seven_title: 'What data am I sharing from my app?',
        Question_seven_answer: "We mainly want to ask you to contribute the data regarding your cycling activities, more specifically where and when you cycle. Besides that, there's the possibility to share information on your gender, age, type of bicycles and the reason of your bicycle ride(leisure, sports, commute, ...).",

        Question_eight_title: 'How do I get access to the open data?',
        Question_eight_answerOne: 'The anonymous aggregated cycling data will be opened up to the public as open data. The open data provided by the Bike Data Project platform can be freely used by different stakeholders and for different purposes.',
        Question_eight_answerTwo: 'All aggregated cycling data will be available as open data by the end of October 2020. For now, you can contribute to the project by donating your cycling data.',

        Question_nine_title: "I'd love to be more involved in this project - how can I help?",
        Question_nine_answer: "That's awesome! Feel free to join our Slack group (https://join.slack.com/t/bikedataproject/shared_invite/zt-hr00amgw-elYn9WbdFHLta8qQKW_wvQ) and introduce yourself there. We'd love to hear how you'd like to contribute to the project!",

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
        Privacy_section_fourOne: "We are collecting cycling data of many individual cyclists and aim to make the anonymous aggregated data available to the public as open data. The aggregated data will be published in a way that it's not possible to retrieve any personal information of an individual cyclist.",
        Privacy_section_fourTwo: "The data publishing will be done based on the principle of differential privacy, which is a system for publicly sharing information about a dataset by describing the patterns of groups within the dataset while withholding information about individuals in the dataset. This basically means that data will only be published if a particular individual's information cannot be retrieved.In case it's not possible the respect the disclosure of a particular individual's information, the data won't be published.",
        Privacy_section_fourThree: 'The personal data is only stored and processed for the period required for the purpose of the processing. After that, the data will be deleted or anonymized. Bike Data Project relies on DigitalOcean which is certified under major privacy and security standards. DigitalOcean services are GDPR compliant.',
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
        Changes_privacy_policy_date: 'Last updated: 28 September 2020',
        Changes_privacy_policy_content: "The Controller for the processing of the Data reserves the right to change this privacy policy at any time by notifying Users on this page. We encourage you to check this page for possible changes. The date of the last change is indicated at the bottom of the page. If a User objects to any change in the policy, the User must not continue to use this Application. One might request the Controller for the processing of the Data to delete the Personal Data. Unless otherwise indicated, the valid Privacy Policy applicable at that time applies to all Personal Data that the Controller has stored for the processing of the Data about Users.",

        // Terms of Use Page
        Terms_title: 'Terms of Use',
        Terms_introOne: 'With the Bike Data Project, Open Knowledge Belgium – the umbrella organisation for open knowledge and open data initiatives in Belgium –  provides a community-driven open bike data platform that collects data on where and when people actually cycle.',
        Terms_introTwo: 'The platform aims at aggregating data from cyclists, coming from different mobile applications and sources, into one open bike data platform in order to empower local communities in making cycling more visible and decision-makers in making cities more liveable and bike-friendly.',
        Terms_introThree: 'The participation in this project and use of this platform is subject to a number of rules. Below you can find the general conditions of our project , as we are convinced that clear rules provide the best guarantee for a respectful community.',
        Terms_introFour: 'Because Open Knowledge Belgium appreciates the feedback of the Bike Data Project community, we welcome any ideas to further improve the platform. You can email your suggestions to support',
        Who_can_contribute: 'Who can contribute to the Bike Data Project and who can make use of the open data provided by the Bike Data Project?',
        Who_can_contribute_contentOne: 'Any kind of cyclist can contribute to the project by sharing cycling data. You can either link your preferred cycling app to share your data or use the Bike Data Project app in order to contribute to the Bike Data Project. For using the app of the Bike Data Project, you don’t need to create an account to use the app, so you and your collected cycling data will stay anonymous.',
        Who_can_contribute_contentTwo: 'The anonymous aggregated cycling data will be opened up to the public as open data. The open data provided by the Bike Data Project platform is published under a Creative Commons Attribution 4.0 International Licens, which imposes no restrictions on your use of the open data. You are only required to give appropriate credit to the Bike Data Project by providing the name of the project, copyright notice, license notice, disclaimer notice and a link to the platform.',
        Limitation_of_liability: 'Limitation of Liability',
        Limitation_of_liability_contentOne: 'The project cannot be held responsible for any failure or delay in performing the conditions . The platform cannot be held responsible for any liability in case of personal damage from using it. You shall defend, indemnify and hold harmless the Bike Data Project (and each of its partners and/or volunteers) from any claim, demand, action, damage, loss, cost or expense, including without limitation reasonable attorneys’ fees, arising out or relating to (a) your use of our project; (b) any member content or submissions you provide; (c) your violation of these terms; (d) your violation of any rights of another; or (e) your conduct in connection with the services. Further, if you are using the project on behalf of any entity, you represent and warrant that such entity agrees to indemnify you and the Bike Data Project for violations of these terms in accordance with this section. If you are obligated to indemnify us, we will have the right, in our sole and unfettered discretion, to control any action or proceeding and determine whether we wish to settle it, and if so, on what terms.',
        Limitation_of_liability_contentTwo: 'We firmly believe in freedom of speech. However, in order to ensure that the platform can be used in a constructive way by the users, with respect for different opinions and without people having to be afraid to participate in the project, we do not allow offensive behaviour that harasses, intimidates or uses fear to silence another user.',
        Spam: 'Spam',
        Spam_contentOne: 'We strive at all times to protect the Bike Data Project platform user from technical abuse and spam. Accounts that are used to perform the actions listed below can be temporarily blocked or permanently deleted.',
        Spam_contentTwo: "Malware / phishing / viruses / worms / Trojans: You may not post malicious content or links to such content for the purpose of damaging or disrupting someone else's browsers or computers, or of violating someone's privacy. Spam: You are not allowed to use the Bike Data Project platform to spam people.",
        Infringement: 'Infringement of applicable laws',
        Infringement_contentOne: 'The use of the account may not in any way infringe applicable laws. This includes infringements against privacy legislation, intellectual property rights, the criminal code, etc. The account may not be used to promote illegal activities in any way.',
        Infringement_contentTwo: 'The account may not be used to promote illegal activities in any way.',
        Breaches_aforementioned_rules: 'In case of breaches of the aforementioned rules',
        Breaches_aforementioned_rules_content: 'It may occur that harmful files can be downloaded via the platform, whether or not due to a user, or that users place harmful hyperlinks. Every download by a user or click on a hyperlink, placed by a user, is done at the user’s own risk. Any damage incurred is completely and solely the responsibility of this user.',
        Property_rights: 'Property rights Bike Data Project',
        Property_rights_content: 'The source code of Bike Data Project is published under an open source MIT license. You agree to be bound by and comply with any license agreement that applies to this open source software. The visual identity, including the logo and colors, is available under CC BY 4.0. The name of the Bike Data Project cannot be used nor replicated.',
      },

    },
    fre: {
      translations: {
        // Navbar
        Contribute: 'Contribuer',
        The_data: 'Les données',
        About: 'À propos',
        FAQ: 'FAQ',
        Contact: 'Contact',

        // Header
        Heading: 'Collecte de données par et pour les cyclistes.',
        Introduction:
          "Grâce aux données fournies par les différents utilisateurs et utilisatrices de vélo, le Bike Data Projet permet de mieux comprendre et visualiser les déplacements des cyclistes en ville. Toutes ces données de trajets regroupées, et donc anonymisées, permettent alors d'accompagner les acteurs locaux de la mobilité dans le but d’améliorer l'accès et la sécurité des cyclistes dans nos villes.",
        Label_total_km: 'Nombre de km collecté par des cyclistes dans le monde',

        //Help
        Help_title: 'Nous avons besoin de votre aide !',
        Ask_for_favor:
          'Pour que cela fonctionne, nous avons besoin de vos contributions de données cyclables.',
        By_sharing_your:
          'Nous voulons analyser où et quand vous roulez à vélo. Vos contributions de données, combinées avec celles d’autres cyclistes, aideront à créer des villes plus adaptées au vélo.',
        Every_cyclist_can:
          'Chaque type de cycliste a quelque chose à contribuer. Par exemple, certaines personnes enregistrent déjà leur entraînement mais ce n’est pas suffisant. Nous voulons prendre en considération les parcours plus courts : sur le chemin du travail, en allant déposer les enfants à l’école ou en allant faire vos courses. Tout fonctionne !',
        // Donate
        Donate_title: 'Contribuez vos données cyclables',
        Several_ways_to_contribute:
          'Il existe plusieurs manières de contribuer vos données. Si vous avez déjà une des applications listées ci-dessus, vous pouvez facilement la connecter avec le Bike Data Project. Quand votre application est connectée, continuez d’enregistrer vos déplacements comme d’habitude et ceux-ci seront automatiquement téléchargés sur la plateforme du Bike Data Project',
        You_not_using:
          'Vous n’utilisez pas encore d’application ? Aucun problème ! Vous pouvez contribuer vos données en téléchargeant directement notre application.',
        Connect_existing_account: 'Connectez votre compte',
        Download_our_app: 'Télécharger notre application (disponible prochainement)',
        // Data
        Data_title: 'Données collectées dans le monde',
        Rides_collected: 'Déplacements enregistrés',
        Distance_collected: 'Distance collectée',
        Average_duration: 'Durée moyenne',
        Average_speed: 'Vitesse moyenne',
        Average_distance: 'Distance moyenne',
        co2_saved: 'CO2 sauvé',
        Data_subtitle: 'Intéressé.e dans les données de votre région?',
        Data_button: 'Explorez les données',
        // Contribute
        Contribute_title: "A qui serviront ces données ?",
        People_who_work:
          'Les professionnel.le.s qui travaillent sur les questions de mobilité et de planification urbaine dans le monde ont besoin d’information, et donc de données, pour développer des infrastructures modernes et créer des villes durables. Certain.e.s sont déjà convaincu.e.s et d’autres restent encore à convaincre. Au plus nous aurons des données à leur fournir, au plus nous aurons un impact important.',
        Common_goal:
          "Ces données sont ouvertes et peuvent être utilisées pour d’autres produits ou services liés à la pratique du vélo. Le but est d'agréger les données cyclables - et donc de les anonymiser - pour les rendre disponibles en tant que données ouvertes et de faciliter la création de villes plus adaptées aux cyclistes. Pour nous et les générations à venir.",
        // Visible
        Visible_title: "Plus de données cyclables signifie plus de possibilités pour et par les cyclistes.",
        Community_more_visible:
          'Le Bike Data Project permet de rassembler des données cyclables issues de différentes applications dans une plateforme unique qui, basée sur les principes de données ouvertes et de logiciel ouvert, sont disponibles et utilisables à tou.te.s afin de s’assurer que la société entière en bénéficie.',
        Globally_but_locally:
          'On sait peu de chose sur la façon dont les cyclistes se déplacent dans les villes. Si des données sont disponibles, elles sont souvent fermées, restreintes et vendues par un fournisseur unique d’application mobile. Dans d’autres cas, ces données sont collectées manuellement et sont donc statiques. Si nous voulons faire en sorte que plus de personnes fassent du vélo en ville et rendre ce choix aussi logique et évident qu’a pu l’être la voiture dans le passé, nous devons récolter autant d’informations sur le comportement des cyclistes que de données actuellement collectées sur la circulation automobile.',
        // Informed
        Informed_title: 'Restez informé.e',
        Email_label: 'Email',
        Informed_placeholder: 'Votre adresse email',
          // Partners
        Partners_title: 'Partenaires du projet',

        // Footer
        Footer_intro:
          'Bike Data Project est un projet organisé par Open Knowledge Belgium',
        Footer_nav_title: 'Information',
        Footer_contact: 'Contact',
        Footer_street: 'Cantersteen 12',
        Footer_city: '1000 Bruxelles',
        // Subfooter
        Footer_copyright_one: 'Sauf indication contraire, le contenu de ce site est sous licence',
        Footer_copyright_two:
          'Creative Commons Attribution 4.0 International License',
        Terms_of_use: 'Conditions d’utilisation',
        Privacy_policy: 'Vie Privée',
        Cookie_policy: 'Cookies',

        // Big words
        Help: 'Aide',
        Contribute_big: 'Contribuez',
        Data: 'Data',
        // Contribute: 'Contribuez',
        Power: 'Power',
        Partners: 'Partenaires',
        About_us: 'À propos',
        Faq: 'Faq',
        Contact_us: 'Contact',
        Cookies: 'Cookies',
        Privacy: 'Vie Privée',
        Terms: 'Conditions',

        // Data Page
        Map_title: 'Les données',
        Data_content_one: 'Faites défiler la page vers le bas pour explorer la carte et voir toutes les données cyclables collectées jusqu’à présent.',
        Data_content_two: 'Les données collectées dans ce projet sont des contributions de différents types de cyclistes. Toutes les données individuelles sont agrégées en données collectives qui sont donc anonymisées. Ces données collectives visualisent des traits de comportements des utilisateurs et utilisatrices en montrant comment et où les cyclistes se déplacent à vélo.',
        Data_content_three: 'Les données agrégées et non-personnelles seront ouvertes au public sous forme de données ouvertes. Ces données ouvertes, diffusées via The Bike Data Project, peuvent être utilisées par différents acteurs et pour différentes raisons. Voici une liste non-exhaustive du type d’utilisations possible avec ces données : ',
        Data_content_listOne: 'Les expert.e.s de la mobilité, de la planification urbaine ou du design urbain ont besoin de données ouvertes pour développer des infrastructures modernes et, ainsi, créer des villes durables.',
        Data_content_listTwo: 'Les citoyen.ne.s peuvent visualiser le nombre de cyclistes et le nombre de kilomètres parcourus dans leur ville en regardant la carte.',
        Data_content_listThree: 'La société civile et les journalistes peuvent utiliser ces données pour analyser la situation des cyclistes dans une ville, comme par exemple le temps que les cyclistes attendent à un feu rouge.',
        Data_content_listFour: 'Les entreprises actives dans les données peuvent les utiliser pour développer des outils avancés de navigations et de recommandations d’amélioration de l’infrastructure cycliste. Les données peuvent être utile pour tout service ou produit lié à l’utilisation du vélo.',
        Data_content_four: 'Toutes les données agrégées et anonymisées seront publiées comme données ouvertes fin Octobre 2020. Contribuez déjà vos données cyclables au projet !',
        Map_subtitle: 'Voir toutes les données ouvertes',

        // About Page
        About_title: 'À propos du projet',
        About_intro: 'Avec le Bike Data Project, Open Knowledge Belgium - l’organisation parapluie pour la connaissance ouverte et les données ouvertes en Belgique - veut construire une plateforme de données ouvertes collectées par les cyclistes et bénéficiant aux cyclistes. Le but est d’observer quand et où les cyclistes se déplacent. Ces données sont importées grâces à des applications différentes qui sont connectées à la plateforme du Bike Data Project. Ces données ouvertes collectives permettront aux communautés locales de rendre le vélo plus visible et aux pouvoirs publics de créer des villes plus cyclables et vivables.',
        About_titleOne: "Qui est derrière ce projet ?",
        About_contentOne_oneBefore: 'Le Bike Data Project a initialement été initié par',
        About_contentOne_oneMiddle: 'et lancé dans le cadre de la sortie du',
        About_contentOne_oneAfter: ', réalisé par Fredrik Gertten. Etant donné que ce documentaire ai été projeté dans plus de 50 pays, déjà plus de 275.000 déplacements à vélo ont été collectés.',
        About_contentOne_twoBefore: 'Début 2020, le projet a été déplacé sous Open Knowledge Belgium.',
        About_contentOne_twoAfter: "(à but non lucratif / vzw / asbl), en tant que section locale d'Open Knowledge International, est une association parapluie pour diverses initiatives de connaissance ouverte et de données ouvertes en Belgique. Nous aspirons à un monde dans lequel la connaissance crée du pouvoir pour le plus grand nombre et non pour quelques personnes. Nous faison activement la promotion de l'ouverture à travers des projets et des événements, au grand public ainsi qu'aux expert.e.s du domaine. En tant qu'organisation parapluie, nous sommes constitués de personnes principalement des bénévoles et passionnées par l'ouverture, utilisant le plaidoyer, la recherche, la technologie et les projets pour débloquer des informations, permettant aux gens d'utiliser et de partager leurs connaissances.",

        About_contentOne_three: "Open Knowledge Belgium garantit l'ouverture du projet à toutes fins et prend toutes les mesures nécessaires conformément à la réglementation GDPR concernant la confidentialité et la protection des données. Avec des conditions d'utilisation transparentes et claires pour ce projet, Open Knowledge Belgium souhaite montrer l'exemple sur la manière de traiter les problèmes liés à la vie privée et souhaite profiter de l'occasion pour informer les citoyens sur leurs droits numériques.",
        About_titleTwo: "Plus de données sur le cyclisme signifie plus d’opportunités par et pour les cyclistes",
        About_contentTwo_one: "On sait peu de choses sur la façon dont les cyclistes se déplacent dans les villes aujourd'hui. S'il y a des données disponibles, il s'agit de données fermées et restreintes vendues par un seul fournisseur d'application ou de données statiques collectées via des comptages manuels. Si nous voulons avoir plus de gens à vélo dans les villes et rendre le vélo aussi simple et logique que la voiture, nous devons également obtenir les mêmes données sur le comportement des cyclistes que nous avons sur le transport en voiture.",
        About_contentTwo_two: "Open Knowledge Belgium vise à créer un impact en montrant où et quand les gens font du vélo. Le Bike Data Project offre la possibilité de collecter toutes les données cyclistes de différentes applications sur une seule plateforme, qui - basée sur le principe de l'open source et des données ouvertes - est adaptable et accessible par tous pour garantir qu’elle profite à la société dans son entièreté.",
        About_titleThree: "L'infrastructure numérique publique comme bien commun",
        About_contentThree_one: "Comme pour des activités comme OpenStreetMap Belgium et Open Planner Team d'Open Knowledge Belgium, le Bike Data Project est conçu comme un projet collaboratif ouvert à tou.t.es et qui fait bénéficier la société dans son ensemble. Par conséquent, l'infrastructure numérique et les données agrégées, étant basées sur les principes de l'open source et des données ouvertes - sont librement adaptables et accessibles à tou.t.es.",
        About_contentThree_two: "De plus, Open Knowledge Belgium souhaite jouer, avec le Bike Data Project, un rôle important dans des mouvements sociétaux plus larges :",
        About_contentThree_listOneBold: "Les citoyen.ne.s peuvent reprendre le contrôle de leurs données",
        About_contentThree_listOne: "grâce à la forte réglementation européenne GDPR. Dans le cas du Bike Data Project, nous voulons encourager les citoyen.ne.s à extraire leurs données d'applications tierces (par exemple des applications populaires comme Strava et même potentiellement Google Maps) et leur demander de les contribuer à une bonne cause.",
        About_contentThree_listTwoBold: "Promouvoir le partage des compétences et encourager l'apprentissage au sein de la communauté",
        About_contentThree_listTwo: "tout au long du processus, de la construction du projet au développement de la plateforme. Fortement inspirés par le travail de la School of Data de Riga, nous souhaitons impliquer la communauté cycliste dans les campagnes locales du Bike Data Project dès le premier jour. Tout au long d'une série d'événements, Open Knowledge Belgium souhaite améliorer la maîtrise des données.",
        About_contentThree_listThreeBold: "Penser globalement, agir localement.",
        About_contentThree_listThree: "La plateforme Bike Data Project est globale et ouverte par défaut. Bien qu'il soit possible pour les communautés cyclistes du monde entier de contribuer au projet, Open Knowledge Belgium souhaite soutenir les communautés locales en les faisant agir au niveau local.",
        About_titleFour: "Durabilité à long terme du Bike Data Project",
        About_contentFour: "Open Knowledge Belgium s'associe à Bruxelles Mobilité pour lancer, dans le cadre de son programme Bike for Brussels, une première campagne en Région de Bruxelles-Capitale. Le lancement de campagnes locales de crowdsourcing dans différentes villes et la mise en place de la plateforme de données ouvertes font partie d'un plan à plus long terme pour le Bike Data Project. Lorsqu'une campagne de crowdsourcing dans une ville ou une région spécifique prend fin, la plateforme restera en ligne et sera maintenue par la communauté open source d'Open Knowledge Belgium. Les communautés cyclistes d'autres villes seront encouragées à lancer une campagne dans leurs villes et à utiliser la plateforme. Compte tenu de l'intérêt des différentes parties prenantes pour la Bike Data Platform, Open Knowledge Belgium a déjà reçu la confirmation de différentes parties prenantes de leur souhait de contribuer financièrement au projet afin que les coûts du serveur puissent être couverts. De cette manière, le projet sera pérennisé sur le long terme.",
      
        // Faq Page
        Faq_title: 'Questions fréquemment posées',
        Question_one_title: 'Pourquoi devrais-je participer à ce projet ?',
        Question_one_answerOne: 'En contribuant vos données cyclistes, vous pouvez contribuer à rendre nos villes mieux adaptées aux cyclistes.',
        Question_one_answerTwo: "Plus de données sur le cyclisme signifie plus d’opportunités par et pour les cyclistes. On sait peu de choses sur la façon dont les cyclistes se déplacent dans les villes aujourd'hui. S'il y a des données disponibles, il s'agit de données fermées et restreintes vendues par un seul fournisseur d'application, ou de données statiques collectées via des comptages manuels. Si nous voulons avoir plus de gens à vélo dans les villes et rendre le vélo aussi simple et logique que la voiture, nous devons également obtenir les mêmes données sur le comportement des cyclistes que nous avons sur le transport en voiture.",
        
        Question_two_title: 'Comment fonctionne ce projet ?',
        Question_two_answerOne: 'Pour faire ce travail, nous avons besoin que vous fournissez vos données cyclistes. Nous avons besoin de savoir où vous faites du vélo. Vos contributions de données, combinées aux données de nombreux et nombreuses autres cyclistes, rendront les villes plus adaptées aux cyclistes.',
        Question_two_answerTwo: "Nous demandons à différents types de cyclistes (par exemple, les navetteurs/navetteuses quotidiens, les livreurs/livreuses, les sportifs/sportives et les touristes) d’enregistrer leurs déplacements à vélo via leur application mobile préférée et de fournir leurs données à la plateforme du Bike Data Project. Chaque type de cycliste a quelque chose à apporter à ce projet. Certaines personnes suivent déjà leurs activités sportives. C'est super, mais nous voulons aussi vraiment prendre en compte les trajets courts: se rendre au travail, déposer les enfants à l'école ou en allant à l'épicerie du coin.",
        Question_two_answerThree: "En retour, les données cyclistes agrégées et anonymisées seront ouvertes au public et pourront être librement utilisées par n'importe qui. Nous visons à créer un impact en montrant où et quand les gens font du vélo. Plus de données signifie plus d'influence sur les personnes au pouvoir pour rendre les villes plus durables et plus adaptées aux vélos.",
        
        Question_three_title: 'Comment puis-je contribuer mes données à la plateforme ?',
        Question_three_answer: "Dans cette section de notre site web, vous pouvez simplement connecter votre application de vélo préférée à la plateforme Bike Data Project. Si vous n'utilisez pas encore une telle application mais que vous souhaitez contribuer, vous pouvez utiliser notre propre application. Avec celle-ci, il n'est pas nécessaire de créer un compte, vous pouvez partager vos données de manière anonyme sur la plateforme.",
        
        Question_four_title: 'Que se passe-t-il avec mes données ?',
        Question_four_answerOne: 'Les données collectées dans le cadre de ce projet sont des contributions de tous types de cyclistes. Toutes les données individuelles sont agrégées en données collectives. Les données collectives nous donnent alors des modèles que nous pouvons utiliser pour montrer où et quand les cyclistes font du vélo.',
        Question_four_answerTwo: "Les données cyclistes agrégées non-privées seront ouvertes au public en tant que données ouvertes. Les données ouvertes fournies par la plateforme Bike Data Project peuvent être librement utilisées par différentes parties prenantes et à des fins différentes. Voici une liste non exhaustive des différents cas d'utilisation des données ouvertes :",
        Question_four_answerThree: 'Les expert.e.s en mobilité et les urbanistes du monde entier ont besoin de données ouvertes comme celles-ci pour les aider à développer des infrastructures modernes et des villes durables.',
        Question_four_answerFour: 'Les citoyen.ne.s peuvent avoir un aperçu du nombre de cyclistes, des kilomètres parcourus dans la ville et consulter une carte avec le nombre de cyclistes par itinéraire.',
        Question_four_answerFive: 'La société civile et les journalistes peuvent utiliser les données pour analyser la situation des cyclistes dans la ville, comme par exemple le temps que les cyclistes attendent en moyenne aux feux de signalisation.',
        Question_four_answerSix: "Les sociétés active dans la gestion de données et de logiciels peuvent obtenir des informations intelligentes sur le cyclisme et créer des outils tels que des planificateurs d'itinéraires cyclables avancés et des moteurs de recommandation pour améliorer l'infrastructure cyclable. Les données peuvent également être très utiles pour d'autres produits et services liés au vélo.",
        Question_four_answerSeven: "Toutes les données cyclables agrégées seront disponibles sous forme de données ouvertes d'ici la fin octobre 2020. Pour l'instant, vous pouvez contribuer au projet en faisant don de vos données cyclistes.",
        
        Question_five_title: 'Ma vie privée est-elle respectée lorsque je communique mes données ?',
        Question_five_answerOne: "Oui, Open Knowledge Belgium garantit l'ouverture du projet afin que la société en profite dans son ensemble et prend toutes les mesures nécessaires conformément à la réglementation GDPR concernant la confidentialité et la protection des données.",
        Question_five_answerTwo: "Nous collectons des données de nombreux cyclistes individuels et visons à rendre les données agrégées non privées disponibles au public sous forme de données ouvertes. Les données agrégées seront publiées de manière à ce qu'il ne soit pas possible de récupérer les informations personnelles d'une personne.",
        Question_five_answerThree: "La publication des données se fera sur la base du principe de confidentialité différentielle, qui est un système de partage public d'informations sur un ensemble de données en décrivant les modèles de groupes au sein de l'ensemble de données tout en retenant des informations sur les individus de l'ensemble de données. Cela signifie essentiellement que les données ne seront publiées que si les informations d'une personne particulière ne peuvent pas être récupérées.",

        Question_six_title: 'Puis-je supprimer mes données ?',
        Question_six_answer: "Oui ! Bien que vous fournissiez vos données de manière anonyme (nous ne vous demandons pas votre nom ou toute autre information qui vous identifie), vous pouvez nous demander d'extraire vos données de la plateforme Bike Data Project. Veuillez nous envoyer un e-mail à bikedataproject@openknowledge.be avec le nom de l'application que vous avez utilisée pour fournir vos données et, si possible, également le numéro d'identification associé à votre compte dans l'application.",

        Question_seven_title: 'Quelles données est-ce que je partage depuis mon application ?',
        Question_seven_answer: "Nous souhaitons principalement vous demander de fournir les données concernant vos activités cyclistes, plus précisément où et quand vous faites du vélo. En plus de cela, il est possible de partager des informations sur votre genre, votre âge, le type de vélo et la raison de votre déplacement (loisirs, sports, domicile-travail,...).",

        Question_eight_title: 'Comment accéder aux données ouvertes ?',
        Question_eight_answerOne: 'Les données cyclistes agrégées non privées seront ouvertes au public en tant que données ouvertes. Les données ouvertes fournies par la plateforme Bike Data Project peuvent être librement utilisées par différentes parties prenantes et à des fins différentes.',
        Question_eight_answerTwo: "Toutes les données cyclables agrégées seront disponibles sous forme de données ouvertes d'ici la fin octobre 2020. Pour l'instant, vous pouvez contribuer au projet en faisant don de vos données cyclistes.",

        Question_nine_title: "J'aimerais être plus impliqué.e dans ce projet - comment aider ?",
        Question_nine_answer: "C'est génial! N'hésitez pas à rejoindre notre groupe Slack (https://join.slack.com/t/bikedataproject/sharedinvite/zt-g60t5w5c-lT2ucV0HtLEVnE4wG9hTg) et à vous y introduire. Nous serons super heureux de savoir comment vous aimeriez contribuer au projet !",

        // Contact Page
        Contact_title: 'Contact',
        Further_questions: 'Pour toute question ou information complémentaire, veuillez nous contacter via :',
        Follow_socials: 'Pour toute question ou information complémentaire, veuillez nous contacter via :',

        // Cookies Page
        Cookies_title: 'Cookie Policy',
        What_are_cookies: '1. Que sont les cookies ?',
        Cookies_section_one: "Les cookies sont de petits fichiers téléchargés sur votre ordinateur pour améliorer votre expérience. Cette page décrit les informations qu'ils collectent, comment nous les utilisons et pourquoi nous avons parfois besoin de stocker ces cookies. Nous partagerons également comment vous pouvez empêcher le stockage de ces cookies. Cependant, cela peut rétrograder ou «casser» certains éléments de la fonctionnalité du site. Pour plus d'informations générales sur les cookies",
        Cookies_section_oneLink: 'voir cet article de Wikipedia sur les cookies HTTP.',
        How_we_use_cookies: '2. Comment nous utilisons les cookies',
        Cookies_section_two: "Nous utilisons des cookies pour diverses raisons détaillées ci-dessous. Malheureusement, dans la plupart des cas, il n'y a pas d'options standard pour désactiver les cookies sans désactiver complètement les fonctionnalités qu'ils ajoutent à ce site. Il est recommandé de laisser tous les cookies si vous n'êtes pas sûr d'en avoir besoin ou non au cas où ils seraient utilisés pour fournir un service que vous utilisez.",
        Disabling_cookies: '3. Désactiver les cookies',
        Cookies_section_three: "Vous pouvez empêcher le téléchargement de cookies en ajustant les paramètres de votre navigateur (voir le menu Aide de votre navigateur pour savoir comment procéder). Veuillez noter que la désactivation des cookies peut affecter la fonctionnalité de ce site Web et de nombreux autres sites Web que vous visitez. La désactivation des cookies entraînera généralement la désactivation de certaines fonctionnalités et fonctionnalités de ce site. Si vous souhaitez désactiver les cookies, nous vous recommandons d'utiliser",
        Cookies_section_threeLink: "Firefox.",
        Cookies_we_set: '4. Cookies que nous définissons',
        Cookies_section_fourOne: "Notre site web comprend un service d'abonnement à la newsletter et des cookies peuvent être utilisés pour vous rappeler si vous êtes déjà inscrit et si vous souhaitez afficher certaines notifications qui ne sont valables que pour les utilisateurs abonnés/désabonnés.",
        Cookies_section_fourTwo: 'Afin de vous offrir une excellente expérience sur ce site, nous fournissons la fonctionnalité permettant de définir la langue en fonction de la langue que vous utilisez dans votre navigateur. Afin de nous souvenir de vos préférences, nous devons définir des cookies, afin que ces informations puissent être rappelées chaque fois que vous interagissez avec une page qui est affectée par vos préférences.',
        Third_party_cookies: '5. Cookies tiers',
        Cookies_section_five: "Notre site n'utilise pas de cookies fournis par des tiers.",
        More_information: "6. Plus d'information",
        Cookies_section_six: "Comme mentionné précédemment, s'il y a quelque chose dont vous n'êtes pas sûr d'avoir besoin ou non, il est généralement plus sûr de laisser les cookies activés - juste au cas où ils interagissent avec l'une des fonctionnalités que vous utilisez sur notre site. Si vous cherchez toujours plus d'informations, vous pouvez nous contacter au ",

        // Privacy Page
        Privacy_title: 'Politique de confidentialité',
        Privacy_introOne: 'Responsable du traitement des données et propriétaire',
        Privacy_introTwo: "Bike Data Project est sous Open Knowledge Belgium en tant que personne morale, une organisation à but non lucratif, constituée et existant sous le droit belge, avec siège social au 12 Cantersteen 1000 Bruxelles, Belgique, sous le numéro d'entreprise 0845.419.930.",
        Privacy_policy_section: '1. Politique de la Vie Privée',
        Privacy_section_one: "Cette «Politique de confidentialité» s'applique aux «Données personnelles» collectées par Bike Data Project via ce site Web.",
        What_does_personal: '2. Que signifient les données personnelles ?',
        Privacy_section_two: "Dans cette politique de confidentialité, les données personnelles font référence aux informations qui permettent de vous identifier. Une personne identifiable est une personne qui peut être identifiée, directement ou indirectement, notamment par référence à un numéro d'identification ou à un ou plusieurs facteurs liés à l'identité physique, physiologique, mentale, économique, culturelle ou sociale. Un exemple typique d'informations personnelles est votre nom et votre adresse e-mail.",
        What_personal_data: '3. Quelles données personnelles collectons-nous ?',
        Privacy_section_three: 'Nous pouvons collecter vos données personnelles à partir des sources suivantes :',
        Privacy_section_threeOne: '3.1 Données personnelles que vous fournissez lors du processus de contribution des données sur la plateforme.',
        Privacy_section_threeOne_pointOne: "Données sur votre profil public dans votre application cycliste préférée (obligatoire)",
        Privacy_section_threeOne_pointTwo: 'Données sur vos activités cyclistes privées dans votre application cycliste préférée (obligatoire)',
        Privacy_section_threeOne_pointThree: 'Votre consentez à ces conditions',
        Privacy_section_threeTwo: '3.2 Données personnelles que nous collectons lorsque vous visitez notre site Web.',
        Privacy_section_threeTwo_content: "Nous utilisons des cookies pour collecter automatiquement des données personnelles vous concernant lorsque vous utilisez ce site Web. Pour plus d'informations, veuillez consulter notre politique en matière de cookies.",
        Privacy_section_threeThree: '3.3. Données personnelles que vous fournissez lors du partage des données cyclistes',
        Privacy_section_threeThree_pointOne: 'Vos déplacements à vélo (obligatoire)',
        Privacy_section_threeThree_pointTwo: "Votre tranche d'âge (facultatif)",
        Privacy_section_threeThree_pointThree: 'Votre genre (facultatif)',
        Privacy_section_threeThree_pointFour: 'La raison de votre déplacement à vélo (facultatif)',
        Privacy_section_threeThree_pointFive: 'Votre type de vélo (facultatif)',

        How_use_personal_data: '4. Comment utilisons-nous les données personnelles ?',
        Privacy_section_fourOne: "Nous collectons des données cyclistes de nombreux cyclistes individuels et visons à rendre les données agrégées non privées disponibles au public sous forme de données ouvertes. Les données agrégées seront publiées de manière à ce qu'il ne soit pas possible de récupérer les informations personnelles d'un cycliste individuel.",
        Privacy_section_fourTwo: "La publication des données se fera sur la base du principe de confidentialité différentielle, qui est un système de partage public d'informations sur un ensemble de données en décrivant les modèles de groupes au sein de l'ensemble de données tout en retenant des informations sur les individus de l'ensemble de données. Cela signifie essentiellement que les données ne seront publiées que si les informations d'une personne en particulier ne peuvent pas être récupérées.",
        Privacy_section_fourThree: "Les données personnelles ne sont stockées et traitées que pendant la durée requise aux fins du traitement. Après cela, les données seront supprimées ou rendues anonymes. Bike Data Project s'appuie sur DigitalOcean qui est certifié selon les principales normes de confidentialité et de sécurité. Les services DigitalOcean sont conformes au GDPR. Toutes les informations relatives à DigitalOcean peuvent être trouvées ici.",
        With_whom_do: '5. Avec qui partageons-nous vos données personnelles ?',
        Privacy_section_five: "Vos données personnelles ne seront partagées avec aucun tiers. Nous ne vendrons ni ne louerons jamais vos données personnelles à d'autres fournisseurs de services, ni ne partagerons vos données personnelles avec des fournisseurs de services qui ne sont pas conformes au RGPD.",
        Where_do_we_transfer: '6. Où transférons-nous vos données personnelles ?',
        Privacy_section_six: "Nous ne transférons vos données personnelles à des prestataires de services établis en dehors de l'Espace économique européen que s'ils se conforment à l'article 44 du RGPD. Tous les fournisseurs de services basés aux États-Unis se conforment au Privacy Shield.",
        Automated_decision: '7. Prise de décision et profilage automatisés.',
        Privacy_section_seven: "Le traitement de vos données personnelles n'inclut pas le profilage et ne sera pas soumis à une prise de décision automatisée pour le Bike Data Project.",
        What_rights_do: '8. Quels droits avez-vous ? ',
        Privacy_section_eight: "Vous avez le droit de consulter vos données personnelles à tout moment, ainsi que le droit d'être informé.e de l'utilisation que Bike Data Project fait de vos données personnelles.",
        Privacy_section_eightOne: "1. Droit de rectification, de suppression et de limitation du traitement",
        Privacy_section_eightOne_content: "Vous êtes libre de décider de fournir ou non vos données personnelles au Bike Data Project. De plus, vous avez toujours le droit de modifier, compléter ou supprimer vos données personnelles sur le Bike Data Project. Vous reconnaissez qu'un refus de fournir ou une demande de suppression de données personnelles signifie que certains services ne peuvent plus être fournis. Vous pouvez également demander la limitation du traitement de vos données personnelles.",
        Privacy_section_eightTwo: "2. Droit d'opposition",
        Privacy_section_eightTwo_content: 'Vous avez le droit de vous opposer au traitement de vos données personnelles, pour autant que cela soit pour des raisons sérieuses et légitimes.',
        Privacy_section_eightThree: '3. Droit à la portabilité des données',
        Privacy_section_eightThree_content: "Vous avez le droit d'obtenir les données personnelles que vous avez fournies au Bike Data Project sous une forme structurée, typique et lisible par machine et/ou de les transférer à différents contrôleurs.",
        Privacy_section_eightFour: '4. Droit de retirer son consentement',
        Privacy_section_eightFour_content: 'Dans la mesure où le traitement est basé sur votre consentement préalable, vous avez le droit de retirer cette approbation.',
        Privacy_section_eightFive: '5. Droit de déposer une plainte',
        Privacy_section_eightFive_content: "Vous avez le droit de déposer une plainte auprès de la Commission belge de la protection de la vie privée: Personal Privacy Protection Commission, Drukpersstraat 35, 1000 Bruxelles, Belgique, Tel +32 (0) 2274 48 00, Fax +32 (0) 2274 48 35, email : commission@privacycommission.be. Cela n'affecte pas la réparation devant un tribunal civil.",
        Exercising_your_rights: '9. Exercer vos droits',
        Privacy_section_nine: "Vous pouvez exercer vos droits en contactant Bike Data Project à cet effet en envoyant un email à support bikedataproject@openknowledge.be, à condition de joindre une copie de votre carte d'identité",
        
        Additional_info: 'Informations supplémentaires sur la collecte et le traitement des données',
        Legal_procedures: 'Procédures légales',
        Legal_procedures_contentOne: 'The Processor and the Controller for the processing of the Data might use the Personal Data of the User for legal purposes, for the court or legal proceedings in the event of unlawful use of this Application or the related services.',
        Legal_procedures_contentTwo: "Le sous-traitant et le responsable du traitement des données peuvent utiliser les données personnelles de l'utilisateur à des fins légales, pour le tribunal ou des procédures judiciaires en cas d'utilisation illégale de cette application ou des services associés.",
        Security_measures: 'Mesures de sécurité',
        Security_measures_contentOne: "Bike Data Project a développé des mesures de sécurité qui ont été ajustées au niveau technologique et organisationnel pour empêcher la destruction, la perte, la falsification, la modification, l'accès interdit ou la divulgation erronée à des tiers de données personnelles ainsi que tout autre traitement interdit de ces données.",
        Security_measures_contentTwo: "En aucun cas Bike Data Project ne pourra être tenu pour responsable de toute perte directe ou indirecte résultant d'une utilisation incorrecte ou illicite de vos données personnelles par un tiers.",
        Security_measures_contentThree: "Vous devez à tout moment vous conformer aux instructions de sécurité, qui incluent la prévention de tout accès interdit à vos informations de connexion, y compris votre mot de passe. Vous êtes seul responsable de l'utilisation du site Web sur votre ordinateur, de votre adresse IP et de vos informations d'identification, ainsi que de la confidentialité de celles-ci.",
        Definitions_legal_framework: 'Définitions et cadre juridique',
        Personal_data: 'Données personnelles (ou données)',
        Personal_data_content: "Toute information concernant une personne physique, une personne morale, une institution ou une association qui a été ou pourrait être identifiée directement ou indirectement par référence à d'autres informations.",
        Usage_data: "Des données d'utilisation",
        Usage_data_content: "Les informations qui sont automatiquement collectées à partir de cette Application (ou des services externes utilisés dans cette Application), y compris: les adresses IP ou les noms de domaine des ordinateurs utilisés par les Utilisateurs de cette Application, les adresses URI (Uniform Resource Identifier), l'heure de la requête, la méthode utilisée pour soumettre la requête au serveur, la taille du fichier reçu en réponse, le code numérique indiquant l'état de la réponse du serveur (succès, erreur, etc.), les fonctions du navigateur et le système d'exploitation de l'Utilisateur, les différentes données de temps par visite (comme le temps passé sur chaque page de l'application) et les données collectées lors de l'utilisation de l'application (exemple: l'ordre des pages visitées ou d'autres paramètres concernant le système d'exploitation de l'appareil).",
        User: 'Utilisateur',
        User_content: "La personne utilisant cette application et qui doit être d'accord avec ou être autorisée par la personne concernée à laquelle se réfèrent les données personnelles.",
        Person_concerned: 'La personne concernée',
        Person_concerned_content: 'La personne morale ou physique à laquelle se rapportent les données personnelles.',
        Data_processor: 'Processeur de données (ou superviseur de données)',
        Data_processor_content: "La personne physique, la personne morale, l'administration gouvernementale ou toute autre institution, association ou organisation qui a été autorisée par le contrôleur de données à traiter les données personnelles conformément à la présente politique de confidentialité.",
        Responsible_processing: 'Responsable du traitement des données (ou propriétaire)',
        Responsible_processing_content: "La personne physique, la personne morale, l'administration gouvernementale ou toute autre institution, association ou organisation ayant le droit, également conjointement avec le responsable du traitement des données, de prendre des décisions concernant les finalités et les méthodes de traitement des données personnelles et les moyens utilisés, y compris mesures de sécurité concernant l'exploitation et l'utilisation de cette application. Le responsable du traitement des données est le propriétaire de cette application, sauf indication contraire.",
        This_application: 'Cette application',
        This_application_content: "Les outils matériels ou logiciels par lesquels les données personnelles de l'utilisateur sont collectées.",
        Cookie: 'Cookie',
        Cookie_content: "Petit morceau de données stocké sur l'appareil de l'utilisateur. Consultez notre politique relative aux cookies.",
        Legal_information: 'Information légale',
        Legal_information_content: "Avis aux utilisateurs européens: cette déclaration de confidentialité a été rédigée dans le respect des obligations de l'art. 10 de la directive européenne 95/46 / CE et les dispositions de la directive européenne 2002/58 / CE, ainsi que la révision de la directive 2009/136 / CE concernant les cookies.",
        Changes_privacy_policy: 'Modifications de cette politique de confidentialité',
        Changes_privacy_policy_date: 'Dernière mise à jour: 16 septembre 2020',
        Changes_privacy_policy_content: "Le Responsable du traitement des Données se réserve le droit de modifier cette politique de confidentialité à tout moment en informant les Utilisateurs sur cette page. Nous vous encourageons à consulter cette page pour d'éventuels changements. La date du dernier changement est indiquée en bas de page. Si un utilisateur s'oppose à toute modification de la politique, l'utilisateur ne doit pas continuer à utiliser cette application. On peut demander au responsable du traitement des données de supprimer les données personnelles. Sauf indication contraire, la politique de confidentialité en vigueur à ce moment-là s'applique à toutes les données personnelles que le contrôleur a stockées pour le traitement des données sur les utilisateurs.",

        // Page des conditions d'utilisation
        Terms_title: "Conditions d'utilisation",
        Terms_introOne: "Avec le Bike Data Project, Open Knowledge Belgium - l'organisation parapluie des initiatives de connaissance ouverte et de données ouvertes en Belgique - fournit une plateforme de données cyclables collaborative qui collecte des données sur où et quand les cyclistes font du vélo.",
        Terms_introTwo: 'La plate-forme vise à regrouper les données des cyclistes, provenant de différentes applications et sources mobiles, en une seule plate-forme de données de vélo ouverte afin de permettre aux communautés locales de rendre le cyclisme plus visible et aux décideurs de rendre les villes plus vivables et plus conviviales pour les vélos.',
        Terms_introThree: "La participation à ce projet et l'utilisation de cette plateforme sont soumises à un certain nombre de règles. Vous trouverez ci-dessous les conditions générales de notre projet, car nous sommes convaincus que des règles claires offrent la meilleure garantie pour une communauté respectueuse.",
        Terms_introFour: "Parce qu'Open Knowledge Belgium apprécie les retours de la communauté Bike Data Project, nous accueillons toute idée pour améliorer encore la plateforme. Vous pouvez envoyer vos suggestions par e-mail.",
        Who_can_contribute: 'Qui peut contribuer au Bike Data Project et qui peut utiliser les données ouvertes fournies par le Bike Data Project ?',
        Who_can_contribute_contentOne: "Tout type de cycliste peut contribuer au projet en partageant des données cyclables. Vous pouvez soit lier votre application cycliste préférée pour partager vos données, soit utiliser l'application Bike Data Project afin de contribuer au Bike Data Project. Pour utiliser l'application du Bike Data Project, vous n'avez pas besoin de créer un compte pour utiliser l'application.Vous et vos données cyclistes collectées resteront donc anonymes.",
        Who_can_contribute_contentTwo: "Les données cyclistes agrégées non privées seront ouvertes au public en tant que données ouvertes. Les données ouvertes fournies par la plate-forme Bike Data Project sont publiées sous une licence internationale Creative Commons Attribution 4.0, qui n'impose aucune restriction sur votre utilisation des données ouvertes. Vous n'êtes tenu de donner un crédit approprié au projet de données de vélo qu'en fournissant le nom du projet, un avis de droit d'auteur, un avis de licence, un avis de non-responsabilité et un lien vers la plate-forme.",
        Limitation_of_liability: 'Limitation de responsabilité',
        Limitation_of_liability_contentOne: "Le projet ne peut être tenu responsable de tout échec ou retard dans l'exécution des conditions. La plateforme ne saurait être tenue pour responsable de toute responsabilité en cas de dommage personnel résultant de son utilisation. Vous devez défendre, indemniser et dégager de toute responsabilité le Bike Data Project (et chacun de ses partenaires et / ou bénévoles) contre toute réclamation, demande, action, dommage, perte, coût ou dépense, y compris, sans limitation, les honoraires d'avocat raisonnables, découlant ou concernant (a) votre utilisation de notre projet; (b) tout contenu de membre ou soumissions que vous fournissez; (c) votre violation de ces conditions; (d) votre violation des droits d'autrui; ou (e) votre conduite en relation avec les services. En outre, si vous utilisez le projet au nom d'une entité, vous déclarez et garantissez que cette entité accepte de vous indemniser, vous et le Bike Data Project, pour les violations de ces conditions conformément à la présente section. Si vous êtes obligé de nous indemniser, nous aurons le droit, à notre seule et entière discrétion, de contrôler toute action ou procédure et de déterminer si nous souhaitons la régler et, le cas échéant, à quelles conditions.",
        Limitation_of_liability_contentTwo: "Nous croyons fermement à la liberté d'expression. Cependant, afin de garantir que la plateforme puisse être utilisée de manière constructive par les utilisateurs, dans le respect des différentes opinions et sans que les gens aient à craindre de participer au projet, nous n'autorisons pas les comportements offensants qui harcèlent, intimident ou utilisent peur de faire taire un autre utilisateur.",
        Spam: 'Spam',
        Spam_contentOne: "Nous nous efforçons à tout moment de protéger l'utilisateur de la plateforme Bike Data Project contre les abus techniques et les spams. Les comptes utilisés pour effectuer les actions répertoriées ci-dessous peuvent être temporairement bloqués ou supprimés définitivement.",
        Spam_contentTwo: "Malware / phishing / viruses / worms / Trojans: Vous ne pouvez pas publier de contenu malveillant ou des liens vers un tel contenu dans le but d'endommager ou de perturber les navigateurs ou les ordinateurs de quelqu'un d'autre, ou de violer la vie privée de quelqu'un. Spam: vous n'êtes pas autorisé à utiliser la plateforme Bike Data Project pour spammer des personnes.",
        Infringement: 'Violation des lois applicables',
        Infringement_contentOne: "L'utilisation du compte ne doit en aucun cas enfreindre les lois applicables. Cela inclut les infractions à la législation sur la protection de la vie privée, aux droits de propriété intellectuelle, au code pénal, etc. Le compte ne peut en aucun cas être utilisé pour promouvoir des activités illégales.",
        Infringement_contentTwo: "Le compte ne peut en aucun cas être utilisé pour promouvoir des activités illégales.",
        Breaches_aforementioned_rules: 'En cas de non-respect des règles précitées',
        Breaches_aforementioned_rules_content: "Il peut arriver que des fichiers nuisibles puissent être téléchargés via la plateforme, que ce soit du fait ou non d'un utilisateur, ou que les utilisateurs placent des hyperliens nuisibles. Tout téléchargement par un utilisateur ou clic sur un lien hypertexte, placé par un utilisateur, se fait aux risques et périls de l'utilisateur. Tout dommage encouru est entièrement et uniquement de la responsabilité de cet utilisateur.",
        Property_rights: 'Droits de propriété Bike Data Project',
        Property_rights_content: "Le code source de Bike Data Project est publié sous une licence open source MIT. Vous acceptez d'être lié et de vous conformer à tout accord de licence qui s'applique à ce logiciel open source. L'identité visuelle, y compris le logo et les couleurs, est disponible sous CC BY 4.0. Le nom du Bike Data Project ne peut être ni utilisé ni répliqué.",
      },
    },
     nl: {
      translations: {
        // Navbar
        Contribute: 'Bijdragen',
        The_data: 'De Data',
        About: 'Over',
        FAQ: 'FAQ',
        Contact: 'Contact',

        // Header
        Heading: 'Fietsers verzamelen data om steden fietsvriendelijker te maken.',
        Introduction:
          'Dankzij de data van verschillende soorten fietsers wil het Bike Data Project laten zien waar en wanneer mensen fietsen. De verzamelde fietsgegevens creëren inzichten die lokale gemeenschappen en besluitvormers kunnen gebruiken om fietsers beter zichtbaar te maken en steden leefbaarder te maken.',
        Label_total_km: 'Totaal aantal kilometers verzameld door fietsers over de hele wereld',

        //Help
        Help_title: 'We hebben je hulp nodig!',
        Ask_for_favor:
          'Voor dit project willen we je vragen om je fietsgegevens bij te dragen.',
        By_sharing_your:
          'We moeten weten waar er wordt gefietst. Jouw gegevensbijdragen, gecombineerd met de gegevens van veel andere fietsers, zullen steden meer geschikt maken voor fietsers.',
        Every_cyclist_can:
          'Iedere soort fietser heeft iets bij te dragen aan dit project. Sommige mensen houden hun activiteit al bij voor trainingsdoeleinden. Dat is mooi, maar we willen ook echt rekening houden met de korte routes: pendelen naar het werk, de kinderen naar school brengen of voor een snelle rit naar de supermarkt.',
        // Donate
        Donate_title: 'Draag uw fietsgegevens bij',
        Several_ways_to_contribute:
          'Er zijn verschillende manieren waarop je je gegevens aan het project kunt bijdragen. Als je al een van de onderstaande apps gebruikt, kun je deze eenvoudig koppelen aan het Bike Data Project. Zodra je app is verbonden, kun je gewoon doorgaan zoals je gewend bent en worden je ritten automatisch geüpload naar het Bike Data Project platform.',
        You_not_using:
          'Gebruik je nog geen applicatie? Geen zorgen! U kunt nog steeds deelnemen aan dit project door ook de Bike Data Project-app te downloaden en te gebruiken.',
        Connect_existing_account: 'Koppel je bestaand account',
        Download_our_app: 'Download onze app. (komt binnenkort)',
        // Data
        Data_title: 'Verzamelde data wereldwijd',
        Rides_collected: 'ritten verzameld',
        Distance_collected: 'afstand verzameld',
        Average_duration: 'gemiddelde duur',
        Average_speed: 'gemiddelde snelheid',
        Average_distance: 'gemiddelde afstand',
        co2_saved: 'CO2 bespaard',
        Data_subtitle: 'Geïnteresseerd in de gegevens per regio?',
        Data_button: 'Verken de data',
        // Contribute
        Contribute_title: "Voor wie zijn de data nuttig?",
        People_who_work:
          'Mobiliteitsplanners en stadsplanners hebben dit soort data nodig om moderne infrastructuur en duurzame steden te ontwikkelen. Sommigen van hen zijn op de hoogte en anderen moeten we nog overtuigen. Hoe meer data we kunnen verstrekken, hoe groter de impact zal zijn.',
        Common_goal:
          'De data kunnen ook waardevol zijn voor andere fietsgerelateerde producten en diensten. Het gemeenschappelijke doel is om fietsdata te verzamelen en deze beschikbaar te stellen als open data zodat steden fietsvriendelijker worden gemaakt. Voor ons en de mensen die komen.',
        // Visible
        Visible_title: 'Meer fietsdata betekent meer slagkracht door en voor fietsers',
        Community_more_visible:
          'Het Bike Data Project biedt de mogelijkheid om fietsdata van verschillende applicaties te verzamelen in één platform, dat - gebaseerd op het principe van open source en open data - aanpasbaar en voor iedereen toegankelijk is om ervoor te zorgen dat het de samenleving ten goede komt.',
        Globally_but_locally:
          'Er is weinig bekend over hoe fietsers zich vandaag in steden verplaatsen. Als er gegevens beschikbaar zijn, gaat het om gesloten en beperkte gegevens die worden verkocht door één app-provider of statische gegevens verzameld via handmatige tellingen. Als we meer mensen op de fiets willen en en de keuze voor de fiets net zo makkelijk en logisch willen maken als de auto, hebben we evenveel informatie nodig over het gedrag van fietsers als over autoverkeer.',
        // Informed
        Informed_title: 'Blijf op de hoogte',
        Email_label: 'E-mail',
        Informed_placeholder: 'Jouw e-mailadres',
          // Partners
        Partners_title: 'Projectpartners',

        // Footer
        Footer_intro:
          'Bike Data Project is een project beheerd door Open Knowledge Belgium',
        Footer_nav_title: 'Informatie',
        Footer_contact: 'Contact',
        Footer_street: 'Cantersteen 12',
        Footer_city: '1000 Brussels',
        // Subfooter
        Footer_copyright_one: 'Tenzij anders vermeld, is de inhoud van deze site gelicentieerd onder een',
        Footer_copyright_two:
          'Creative Commons Attribution 4.0 International License',
        Terms_of_use: 'Gebruiksvoorwaarden',
        Privacy_policy: 'Privacybeleid',
        Cookie_policy: 'Cookiebeleid',

        // Big words
        Help: 'Help',
        Contribute_big: 'Bijdragen',
        Data: 'Data',
        // Contribute: 'Bijdragen',
        Power: 'Slagkracht',
        Partners: 'Partners',
        About_us: 'Over',
        Faq: 'Faq',
        Contact_us: 'Contact',
        Cookies: 'Cookies',
        Privacy: 'Privacy',
        Terms: 'Voorwaarden',

        // Data Page
        Map_title: 'De data',
        Data_content_one: 'Scroll naar beneden om de kaart te verkennen met alle fietsgegevens die tot nu toe zijn verzameld.',
        Data_content_two: 'De data van dit project is afkomstig van allerlei verschillende soorten fietsers. Alle individuele fietsgegevens worden samengevoegd tot collectieve gegevens. De collectieve gegevens geven ons patronen waarmee we kunnen laten zien waar en wanneer fietsers zich verplaatsen.',
        Data_content_three: 'De anonieme geaggregeerde fietsdata worden als open data voor het publiek opengesteld. De open data van het Bike Data Project platform kunnen vrij worden gebruikt door verschillende belanghebbenden en doeleinden. Hier is een niet-exhaustieve lijst van verschillende gebruikstoepassingen van de open data:',
        Data_content_listOne: 'Transportexperts, stadsplanners, mobiliteitsplanners en stedenbouwkundigen over de hele wereld hebben dergelijke open data nodig om hen te helpen bij het ontwikkelen van moderne infrastructuur en duurzame steden.',
        Data_content_listTwo: 'Burgers kunnen een overzicht krijgen van het aantal fietsers en gefietste kilometers in hun buurt en een kaart bekijken met het aantal fietsers per route.',
        Data_content_listThree: 'Het maatschappelijk middenveld en journalisten gebruiken de data om de situatie van fietsers te analyseren, zoals de tijd die fietsers gemiddeld verliezen bij verkeerslichten.',
        Data_content_listFour: 'Data- en softwarebedrijven kunnen in de data duiken om slimme fietsinzichten te verkrijgen en tools te bouwen zoals geavanceerde fietsrouteplanners en aanbevelingsmotoren om de fietsinfrastructuur te verbeteren. De gegevens kunnen ook nuttig zijn voor andere fietsgerelateerde producten en diensten.',
        Data_content_four: 'Alle geaggregeerde fietsgegevens zullen vanaf eind oktober 2020 beschikbaar zijn als open data. Voorlopig kun je bijdragen aan het project door je fietsgegevens te delen.',
        Map_subtitle: 'Bekijk alle open data',

        // About Page
        About_title: 'Over het Bike Data Project',
        About_intro: 'Met het Bike Data Project wil Open Knowledge Belgium - de koepelorganisatie voor open kennis en open data-initiatieven in België - een community-driven open fietsdataplatform aanbieden dat data verzamelt over waar en wanneer mensen fietsen. Het project heeft tot doel gegevens van fietsers, afkomstig van verschillende mobiele applicaties en bronnen, samen te voegen tot één open fietsdataplatform. De collectieve open data zullen lokale gemeenschappen in staat stellen om fietsen zichtbaarder te maken en besluitvormers de mogelijkheid bieden om steden leefbaarder en fietsvriendelijker te maken.',
        About_titleOne: "Korte geschiedenis: wie zit er achter het project",
        About_contentOne_oneBefore: 'Het Bike Data Project is in eerste instantie opgezet door',
        About_contentOne_oneMiddle: 'en gelanceerd als onderdeel van de release van de ',
        About_contentOne_oneAfter: ', geregisseerd door Fredrik Gertten. Doordat de documentaire in meer dan 50 landen is vertoond, zijn er al meer dan 275.000 verzamelde fietsritten verzameld.',
        About_contentOne_twoBefore: 'Begin 2020 werd het project ondergebracht bij Open Knowledge Belgium.',
        About_contentOne_twoAfter: 'is een non-profit organisatie en officiële afdeling van Open Knowledge International die aan de hand van activiteiten en projecten bijdraagt tot een wereld waar kennis kansen creëert voor velen, niet voor enkelen. De organisatie beschikt over een grote groep vrijwilligers die door middel van technologie, onderzoek, community-gedreven bijeenkomsten en projecten bijdragen tot het gebruik en delen van open kennis in België en daarbuiten.',
        About_contentOne_three: 'Open Knowledge Belgium staat in voor de openheid van het project voor alle doeleinden en neemt alle nodige maatregelen volgens de GDPR-regelgeving inzake gegevensprivacy en -bescherming. Met een transparante en duidelijke gebruiksvoorwaarden voor dit project wil Open Knowledge Belgium een ​​voorbeeld stellen in hoe om te gaan met privacygerelateerde kwesties en van de gelegenheid gebruik maken om burgers te informeren over hun digitale rechten.',
        About_titleTwo: "Meer fietsgegevens betekent meer slagkracht door en voor fietsers",
        About_contentTwo_one: "Er is weinig bekend over hoe fietsers zich vandaag in steden verplaatsen. Als er gegevens beschikbaar zijn, gaat het om gesloten en beperkte gegevens die worden verkocht door één app-provider of statische gegevens verzameld via handmatige tellingen. Als we meer mensen op de fiets willen en en de keuze voor de fiets net zo makkelijk en logisch willen maken als de auto, hebben we evenveel informatie nodig over het gedrag van fietsers als over autoverkeer.",
        About_contentTwo_two: "Open Knowledge Belgium wil impact creëren door te laten zien waar en wanneer mensen fietsen. Het Bike Data Project biedt de mogelijkheid om alle fietsdata van verschillende applicaties te verzamelen op één platform, dat - gebaseerd is op het principe van open source en open gegevens - aanpasbaar en toegankelijk voor iedereen om ervoor te zorgen dat ze de samenleving ten goede komen.",
        About_titleThree: "Openbare digitale infrastructuur als gemeengoed",
        About_contentThree_one: "Vergelijkbaar met activiteiten zoals OpenStreetMap Belgium en Open Planner Team door Open Knowledge Belgium, is het Bike Data Project opgezet als een collaboratief project dat openstaat voor iedereen en dat de samenleving als geheel ten goede komt. Vandaar zijn de digitale infrastructuur en geaggregeerde data - gebaseerd op de principes van open source en open data - vrij aanpasbaar en voor iedereen toegankelijk.",
        About_contentThree_two: "Bovendien streeft Open Knowledge Belgium ernaar om met dit Bike Data Project een belangrijke rol te spelen in bredere maatschappelijke bewegingen:",
        About_contentThree_listOneBold: "Burgers kunnen de controle over hun data terugnemen",
        About_contentThree_listOne: "dankzij de sterke Europese GDPR-wetgeving. In het geval van het Bike Data Project willen we burgers aanmoedigen om hun gegevens uit apps van derden te halen (bijv. Populaire apps zoals Strava en mogelijk zelfs Google Maps) en hen vragen om ze bij te dragen aan een goed doel.",
        About_contentThree_listTwoBold: "Bevorderen van het delen van expertise en leren binnen de community",
        About_contentThree_listTwo: "gedurende het hele proces van de datainzameling tot de verdere ontwikkeling van het platform. Sterk geïnspireerd door het werk van de School of Data in Riga, willen we de fietsgemeenschap vanaf de eerste dag betrekken bij de lokale Bike Data Project campagnes. Met een reeks community-gedreven evenementen wil Open Knowledge Belgium werk maken van meer datageletterdheid.",
        About_contentThree_listThreeBold: "Denk globaal, handel lokaal.",
        About_contentThree_listThree: "Het Bike Data Project platform is is van opzet globaal en open. Hoewel het voor fietsgemeenschappen over de hele wereld mogelijk is om bij te dragen aan het project, wil Open Knowledge Belgium de lokale gemeenschappen ondersteunen door hen op lokaal niveau te laten handelen.",
        About_titleFour: "Duurzaamheid van het Bike Data Project op langere termijn",
        About_contentFour: "Open Knowledge Belgium werkt samen met Brussel Mobiliteit om, als onderdeel van het Bike for Brussels-programma, een eerste campagne te lanceren in het Brussels Hoofdstedelijk Gewest. De lancering van lokale dataverzamelingsacties in verschillende steden en de opzet van het open dataplatform maken deel uit van een langeretermijnplan voor het Bike Data Project. Wanneer een dataverzamelingsactie in een specifieke stad of regio ten einde loopt, blijft het platform online en wordt het onderhouden door de open source community van Open Knowledge Belgium. Fietscommunities in andere steden zullen worden aangemoedigd om een ​​campagne te lanceren in hun steden en gebruik te maken van het platform. Gezien de interesse van verschillende stakeholders in het Bike Data Platform, heeft Open Knowledge Belgium al de bevestiging gekregen van verschillende stakeholders dat ze financieel willen bijdragen aan de project zodat de serverkosten kunnen worden gedekt. ​​Op die manier blijft het project op langere termijn in stand.",
      
        // Faq Page
        Faq_title: 'Veelgestelde vragen',
        Question_one_title: 'Waarom zou ik deelnemen aan dit project?',
        Question_one_answerOne: 'Door jouw fietsgegevens bij te dragen, kan je de ontwikkeling van meer fietsvriendelijke steden mogelijk maken.',
        Question_one_answerTwo: 'Meer fietsgegevens betekent meer slagkracht door en voor fietsers. Er is weinig bekend over hoe fietsers zich vandaag in steden verplaatsen. Als er gegevens beschikbaar zijn, gaat het om gesloten en beperkte gegevens die worden verkocht door één app-provider of statische gegevens verzameld via handmatige tellingen. Als we meer mensen op de fiets willen en en de keuze voor de fiets net zo makkelijk en logisch willen maken als de auto, hebben we evenveel informatie nodig over het gedrag van fietsers als over autoverkeer.',
        
        Question_two_title: 'Hoe werkt dit project?',
        Question_two_answerOne: 'Voor dit project willen we je vragen om je fietsgegevens bij te dragen. We moeten weten waar er wordt gefietst. Jouw gegevensbijdragen, gecombineerd met de gegevens van veel andere fietsers, zullen steden meer geschikt maken voor fietsers.',
        Question_two_answerTwo: 'We vragen verschillende soorten fietsers (bijv. pendelaars, bezorgers, sporters en toeristen) om hun fietsritten te registreren via hun favoriete mobiele applicatie en hun gegevens bij te dragen aan ons community-gedreven fietsdataplatform. Elke soort fietser heeft iets bij te dragen aan dit project. Sommige mensen houden hun activiteit al bij voor trainingsdoeleinden. Dat is mooi, maar we willen ook echt rekening houden met de korte routes: pendelen naar het werk, de kinderen naar school brengen of voor een snelle rit naar de supermarkt.',
        Question_two_answerThree: 'In ruil daarvoor worden de anonieme geaggregeerde fietsgegevens opengesteld voor het publiek en kunnen ze door iedereen vrij worden gebruikt. We willen impact creëren door te laten zien waar en wanneer mensen fietsen. Meer gegevens betekent meer invloed op beslissingsnemers om steden duurzamer en fietsvriendelijker te maken.',
        
        Question_three_title: 'Hoe draag ik mijn gegevens bij aan het platform?',
        Question_three_answer: "In dit gedeelte van onze website kun je eenvoudig het profiel van je fietsapp koppelen aan het Bike Data Project platform. Als je zo'n applicatie nog niet gebruikt maar toch wil bijdragen, kun je onze eigen app gebruiken. Met onze eigen app hoef je geen account aan te maken waardoor je je gegevens anoniem delen met het platform.",
        
        Question_four_title: 'Wat gebeurt er met mijn gegevens?',
        Question_four_answerOne: 'Alle individuele fietsgegevens worden samengevoegd tot anonieme collectieve gegevens. De collectieve gegevens geven ons patronen waarmee we kunnen laten zien waar en wanneer fietsers zich verplaatsen.',
        Question_four_answerTwo: 'De anonieme geaggregeerde fietsgegevens worden als open data voor het publiek toegankelijk gemaakt. De open data van het Bike Data Project platform kunnen vrij worden gebruikt door verschillende belanghebbenden en doeleinden. Hier is een niet-exhaustieve lijst van verschillende gebruikstoepassingen van de open data:',
        Question_four_answerThree: 'Vervoersdeskundigen, stadsplanners, mobiliteitsplanners en stedenbouwkundigen over de hele wereld hebben open data nodig om hen te helpen moderne infrastructuur en duurzame steden te ontwikkelen.',
        Question_four_answerFour: 'Burgers kunnen een overzicht krijgen van het aantal fietsers en gefietste kilometers, en een kaart bekijken met het aantal fietsers per route.',
        Question_four_answerFive: 'Het maatschappelijk middenveld en journalisten gebruiken de gegevens om de situatie van fietsers in de stad te analyseren, zoals de tijd die fietsers gemiddeld verliezen bij verkeerslichten.',
        Question_four_answerSix: 'Data- en softwarebedrijven kunnen in de data duiken om slimme fietsinzichten te verkrijgen en tools bouwen zoals geavanceerde fietsrouteplanners en aanbevelingsmotoren om de fietsinfrastructuur te verbeteren. De gegevens kunnen ook erg handig zijn voor andere fietsgerelateerde producten en diensten.',
        Question_four_answerSeven: 'Alle geaggregeerde fietsgegevens zullen eind oktober 2020 beschikbaar zijn als open data. Voorlopig kun je bijdragen aan het project door je fietsgegevens te delen.',
        
        Question_five_title: 'Wordt mijn privacy gerespecteerd wanneer ik mijn gegevens deel?',
        Question_five_answerOne: 'Ja, Open Knowledge Belgium garandeert de openheid van het project en neemt alle nodige maatregelen volgens de GDPR-regelgeving inzake gegevensbescherming.',
        Question_five_answerTwo: "We verzamelen fietsgegevens van veel individuele fietsers en streven ernaar om de anonieme verzamelde gegevens als open data beschikbaar te maken voor het publiek. De verzamelde gegevens worden gepubliceerd op een manier dat het niet mogelijk is om persoonlijke gegevens van een individuele fietser te achterhalen.",
        Question_five_answerThree: "Het publiceren van de gegevens zal gebeuren volgens het concept van differentiële privacy, een methode voor het openbaar delen van informatie over een dataset door de patronen van groepen binnen de dataset te beschrijven, terwijl informatie over individuen in de dataset achterblijft. Dit betekent in feite dat gegevens worden alleen gepubliceerd als de informatie van een bepaald individu niet kan worden achtergehaald.",

        Question_six_title: 'Kan ik mijn gegevens verwijderen?',
        Question_six_answer: "Ja! Hoewel u uw gegevens op een anonieme manier bijdraagt ​​(we vragen niet om uw naam of enige andere informatie die je identificeert), kan je ons vragen om je gegevens uit het Bike Data Project platform te halen. Wil je dit doen, stuur ons dan een e-mail naar bikedataproject@openknowledge.be met de naam van de app waarmee je je gegevens heeft verstrekt en, indien mogelijk, ook het ID-nummer dat aan je profiel in de app is gekoppeld.",

        Question_seven_title: 'Welke gegevens deel ik vanuit mijn app?',
        Question_seven_answer: "We willen je vooral vragen om de gegevens over uw fietsactiviteiten bij te dragen, meer specifiek waar en wanneer je fietst. Daarnaast is er de mogelijkheid om informatie te delen over uw geslacht, leeftijd, type fiets en de reden van uw fiets. rijden (vrije tijd, sport, woon-werkverkeer, ...).",

        Question_eight_title: 'Hoe krijg ik toegang tot de open data?',
        Question_eight_answerOne: 'De anonieme geaggregeerde fietsgegevens worden als open data voor het publiek toegankelijk gemaakt. De open data van het Bike Data Project platform kunnen vrij worden gebruikt door verschillende belanghebbenden en doeleinden.',
        Question_eight_answerTwo: 'Alle geaggregeerde fietsgegevens zijn eind oktober 2020 beschikbaar als open data. Voorlopig kun je bijdragen aan het project door je fietsgegevens te delen.',

        Question_nine_title: "Ik zou graag meer betrokken willen zijn bij dit project - hoe kan ik helpen?",
        Question_nine_answer: "Dat is geweldig! Voel je vrij om lid te worden van onze Slack groep (https://join.slack.com/t/bikedataproject/sharedinvite/zt-g60t5w5c-lT2ucV0HtLEVnE4wG9hTg) en stel jezelf daar voor. We horen graag hoe je wil graag bijdragen aan het project!",

        // Contact Page
        Contact_title: 'Contact',
        Further_questions: 'Voor verdere vragen of informatie kan je contact met ons opnemen via:',
        Follow_socials: 'Volg het Bike Data Project via onze social media kanalen:',

        // Cookies Page
        Cookies_title: 'Cookiebeleid',
        What_are_cookies: '1. Wat zijn cookies',
        Cookies_section_one: 'Cookies zijn kleine bestanden die naar uw computer worden gedownload om uw ervaring te verbeteren. Op deze pagina wordt beschreven welke informatie ze verzamelen, hoe we deze gebruiken en waarom we deze cookies soms moeten opslaan. We zullen ook delen hoe u kunt voorkomen dat deze cookies worden opgeslagen. Dit kan echter bepaalde elementen van de sitefunctionaliteit beperken of "breken". Voor meer algemene informatie over cookies',
        Cookies_section_oneLink: 'zie dit Wikipedia-artikel over HTTP-cookies.',
        How_we_use_cookies: '2. Hoe we cookies gebruiken',
        Cookies_section_two: 'We gebruiken cookies om verschillende redenen die hieronder worden beschreven. Helaas zijn er in de meeste gevallen geen standaardopties voor het uitschakelen van cookies zonder de functionaliteit en functies die ze aan deze site toevoegen volledig uit te schakelen. Het wordt aanbevolen dat u alle cookies laat staan ​​als u niet zeker weet of u ze nodig heeft of niet, voor het geval ze worden gebruikt om een ​​dienst te leveren die u gebruikt.',
        Disabling_cookies: '3. Cookies uitschakelen',
        Cookies_section_three: "U kunt voorkomen dat cookies worden gedownload door uw browserinstellingen aan te passen (zie het helpmenu van uw browser om te zien hoe u dit moet doen). Houd er rekening mee dat het uitschakelen van cookies de functionaliteit van deze en vele andere websites die u bezoekt, kan beïnvloeden. Het uitschakelen van cookies zal meestal resulteren in het uitschakelen van bepaalde functies en functies van deze site. Als u cookies wilt uitschakelen, raden we u aan om",
        Cookies_section_threeLink: "op Firefox.",
        Cookies_we_set: '4. Cookies die we plaatsen',
        Cookies_section_fourOne: 'Onze website bevat een inschrijvingsmodule voor de nieuwsbrief en cookies kunnen worden gebruikt om te onthouden of u al bent geregistreerd en of u bepaalde meldingen wilt weergeven die mogelijk alleen geldig zijn voor aangemelde / niet-geabonneerde gebruikers.',
        Cookies_section_fourTwo: 'Om u een geweldige ervaring op deze site te bieden, bieden we de functionaliteit om de taal in te stellen op basis van de taal die u in uw browser gebruikt. Om uw voorkeuren te onthouden, moeten we cookies instellen, zodat deze informatie kan worden opgeroepen wanneer u een pagina bezoekt die wordt beïnvloed door uw voorkeuren.',
        Third_party_cookies: '5. Cookies van derden',
        Cookies_section_five: 'Onze site maakt geen gebruik van cookies van derden.',
        More_information: '6. Meer informatie',
        Cookies_section_six: "Zoals eerder vermeld, is het, als er iets is waarvan je niet zeker weet of je het nodig hebt of niet, meestal veiliger om cookies ingeschakeld te laten - voor het geval dat het een interactie aangaat met een van de functies die je op onze site gebruikt. Als u op zoek bent naar meer informatie, kunt u contact met ons opnemen via ",

        // Privacy Page
        Privacy_title: 'Privacybeleid',
        Privacy_introOne: 'Verantwoordelijk voor de verwerking van de gegevens en eigenaar',
        Privacy_introTwo: 'Bike Data Project met Open Knowledge Belgium als juridische entiteit, een non-profitorganisatie, opgericht en bestaande naar Belgisch recht, met maatschappelijke zetel te 12 Cantersteen 1000 Brussel, België, met ondernemingsnummer 0845.419.930.',
        Privacy_policy_section: '1. Privacybeleid',
        Privacy_section_one: 'Dit ‘Privacybeleid’ is van toepassing op de ‘persoonlijke gegevens’ die door Bike Data Project via deze website worden verzameld.',
        What_does_personal: '2. Wat wordt bedoeld met persoonlijke gegevens?',
        Privacy_section_two: 'In dit privacybeleid verwijst persoonsgegevens naar informatie waarmee u geïdentificeerd kunt worden. Een identificeerbare persoon is iemand die direct of indirect kan worden geïdentificeerd, in het bijzonder door te verwijzen naar een identificatienummer of naar een of meer factoren die verband houden met fysieke, fysiologische, mentale, economische, culturele of sociale identiteit. Een typisch voorbeeld van persoonlijke informatie is uw naam en e-mailadres.',
        What_personal_data: '3. Welke persoonlijke gegevens verzamelen we?',
        Privacy_section_three: 'We kunnen uw persoonlijke gegevens verzamelen uit de volgende bronnen:',
        Privacy_section_threeOne: '3.1 Persoonsgegevens die u verstrekt tijdens het gegevensinbrengproces op het platform.',
        Privacy_section_threeOne_pointOne: 'Gegevens over je openbare profiel in je favoriete fietsapp (verplicht)',
        Privacy_section_threeOne_pointTwo: 'Gegevens over je privé fietsactiviteiten in je favoriete fietsapp (verplicht)',
        Privacy_section_threeOne_pointThree: 'Uw toestemming voor deze voorwaarden',
        Privacy_section_threeTwo: '3.2 Persoonsgegevens die we verzamelen wanneer u onze website bezoekt.',
        Privacy_section_threeTwo_content: 'We gebruiken cookies om automatisch persoonlijke gegevens over u te verzamelen wanneer u deze website gebruikt. Raadpleeg ons Cookiebeleid voor meer informatie.',
        Privacy_section_threeThree: '3.3. Persoonsgegevens die u verstrekt bij het delen van uw fietsgegevens',
        Privacy_section_threeThree_pointOne: 'Uw fietsritten (verplicht)',
        Privacy_section_threeThree_pointTwo: 'Uw leeftijdscategorie (optioneel)',
        Privacy_section_threeThree_pointThree: 'Uw geslacht (optioneel)',
        Privacy_section_threeThree_pointFour: 'Het doel van uw fietstocht (optioneel)',
        Privacy_section_threeThree_pointFive: 'Uw type fiets (optioneel)',

        How_use_personal_data: '4. Hoe gebruiken we persoonsgegevens?',
        Privacy_section_fourOne: "We verzamelen fietsgegevens van veel individuele fietsers en streven ernaar de anonieme geaggregeerde gegevens als open data beschikbaar te maken voor het publiek. De geaggregeerde gegevens worden zo gepubliceerd dat het niet mogelijk is om persoonlijke informatie van een individuele fietser te achterhalen.",
        Privacy_section_fourTwo: "Het publiceren van de gegevens zal gebeuren volgens het concept van differentiële privacy, een methode voor het openbaar delen van informatie over een dataset door de patronen van groepen binnen de dataset te beschrijven, terwijl informatie over individuen in de dataset achterblijft. Dit betekent in feite dat gegevens worden alleen gepubliceerd als de informatie van een bepaald individu niet kan worden achtergehaald.",
        Privacy_section_fourThree: 'De persoonsgegevens worden alleen opgeslagen en verwerkt gedurende de periode die nodig is voor het doel van de verwerking. Daarna worden de gegevens verwijderd of geanonimiseerd. Bike Data Project vertrouwt op DigitalOcean dat is gecertificeerd volgens de belangrijkste privacy- en beveiligingsnormen. DigitalOcean services voldoen aan de GDPR-wetgeving.',
        With_whom_do: '5. Met wie delen we uw persoonsgegevens?',
        Privacy_section_five: 'Uw persoonlijke gegevens worden niet gedeeld met derden. We zullen uw persoonlijke gegevens nooit verkopen of verhuren aan andere dienstverleners, noch zullen we uw persoonlijke gegevens delen met dienstverleners die niet voldoen aan de GDPR-wetgeving.',
        Where_do_we_transfer: '6. Waar transfereren we uw persoonsgegevens naartoe?',
        Privacy_section_six: 'We geven uw persoonsgegevens alleen door aan dienstverleners die buiten de Europese Economische Ruimte zijn gevestigd als ze voldoen aan art 44 GDPR.',
        Automated_decision: '7. Geautomatiseerde besluitvorming en profilering',
        Privacy_section_seven: 'De verwerking van uw persoonsgegevens omvat geen profilering en zal niet worden onderworpen aan geautomatiseerde besluitvorming voor het Bike Data Project.',
        What_rights_do: '8. Welke rechten heeft u?',
        Privacy_section_eight: 'U heeft te allen tijde het recht om uw persoonsgegevens in te zien, evenals het recht om geïnformeerd te worden over het gebruik dat Bike Data Project van uw persoonsgegevens maakt.',
        Privacy_section_eightOne: '1. Recht op rectificatie, verwijdering en beperking van de verwerking',
        Privacy_section_eightOne_content: 'Het staat u vrij om al dan niet uw persoonsgegevens aan Bike Data Project te verstrekken. Daarnaast heb je altijd het recht om jouw persoonsgegevens bij Bike Data Project te wijzigen, aan te vullen of te verwijderen. U erkent dat een weigering om persoonsgegevens te verstrekken of een verzoek tot verwijdering van persoonsgegevens betekent dat bepaalde diensten niet meer geleverd kunnen worden. U kunt ook verzoeken om beperking van de verwerking van uw persoonsgegevens.',
        Privacy_section_eightTwo: '2. Recht op bezwaar',
        Privacy_section_eightTwo_content: 'U heeft het recht om bezwaar te maken tegen de verwerking van uw persoonsgegevens, zolang dit om ernstige en legitieme redenen is.',
        Privacy_section_eightThree: '3. Recht op overdraagbaarheid van gegevens',
        Privacy_section_eightThree_content: 'Je hebt het recht om de persoonsgegevens die u aan het Bike Data Project hebt verstrekt in een gestructureerde, typische en machineleesbare vorm te verkrijgen en / of over te dragen aan verschillende verwerkingsverantwoordelijken.',
        Privacy_section_eightFour: '4. Recht om toestemming in te trekken',
        Privacy_section_eightFour_content: 'Voor zover de verwerking is gebaseerd op uw voorafgaande toestemming, heeft u het recht om deze toestemming in te trekken.',
        Privacy_section_eightFive: '5. Recht om een ​​klacht in te dienen',
        Privacy_section_eightFive_content: 'U hebt het recht om een ​​klacht in te dienen bij de Belgische Privacycommissie: Persoonlijke Privacycommissie, Drukpersstraat 35, 1000 Brussel, België, Tel. +32 (0) 2274 48 00, Fax +32 (0) 2274 48 35, e-mail: commission@privacycommission.be. Dit heeft geen invloed op de voorziening voor een burgerlijke rechtbank.',
        Exercising_your_rights: '9. Uitoefening van uw rechten',
        Privacy_section_nine: 'U kunt uw rechten uitoefenen door hiervoor contact op te nemen met het Bike Data Project door een e-mail te sturen naar bikedataproject@openknowledge.be, op voorwaarde dat u een kopie van uw identiteitskaart meestuurt.',
        
        Additional_info: 'Aanvullende informatie over het verzamelen en verwerken van gegevens',
        Legal_procedures: 'Juridische procedures',
        Legal_procedures_contentOne: 'De Verwerker en de Verantwoordelijke voor de verwerking van de Gegevens kunnen de Persoonsgegevens van de Gebruiker gebruiken voor juridische doeleinden, voor de rechtbank of gerechtelijke procedures in geval van onrechtmatig gebruik van deze Applicatie of de gerelateerde diensten.',
        Legal_procedures_contentTwo: 'De Gebruiker is zich ervan bewust dat de Verwerker en de Gegevensbeheerder mogelijk verplicht zijn om de persoonsgegevens vrij te geven op verzoek van bevoegde overheidsinstanties voor de verwerking van de Gegevens.',
        Security_measures: 'Beveiligingsmaatregelen',
        Security_measures_contentOne: 'Bike Data Project heeft beveiligingsmaatregelen ontwikkeld die op technologisch en organisatorisch niveau zijn aangepast om vernietiging, verlies, vervalsing, wijziging, verboden toegang of de foutieve bekendmaking aan derden van persoonsgegevens en elke andere verboden verwerking te voorkomen van deze gegevens.',
        Security_measures_contentTwo: 'Bike Data Project kan in geen geval aansprakelijk worden gesteld voor enige directe of indirecte schade die het gevolg is van het onjuist of onrechtmatig gebruik van uw persoonsgegevens door een derde partij.',
        Security_measures_contentThree: 'U dient zich te allen tijde te houden aan de veiligheidsinstructies, waaronder het voorkomen van alle verboden toegang tot uw inloggegevens inclusief uw wachtwoord. U bent als enige verantwoordelijk voor het gebruik van de website op uw computer, vanaf uw IP-adres en met uw identificatiegegevens, evenals voor het vertrouwelijk houden van deze.',
        Definitions_legal_framework: 'Definities en wettelijk kader',
        Personal_data: 'Persoonlijke gegevens (of gegevens)',
        Personal_data_content: 'Alle informatie betreffende een natuurlijke persoon, een rechtspersoon, een instelling of een vereniging die direct of indirect geïdentificeerd is of kan worden door middel van verwijzing naar andere informatie.',
        Usage_data: 'Gebruiksgegevens',
        Usage_data_content: 'Informatie die automatisch wordt verzameld via deze Applicatie (of externe services die in deze Applicatie worden gebruikt), inclusief: de IP-adressen of domeinnamen van de computers die worden gebruikt door de Gebruikers van deze Applicatie, de URI-adressen (Uniform Resource Identifier), het tijdstip van het verzoek, de methode die wordt gebruikt om het verzoek in te dienen bij de server, de grootte van het bestand dat erop wordt ontvangen, de numerieke code die de status van de serverreactie aangeeft (succesvol, fout, enz.), de functies van de browser en het besturingssysteem van de Gebruiker, de verschillende tijdgegevens per bezoek (zoals de tijd doorgebracht op elke pagina van de applicatie) en de gegevens die tijdens het gebruik van de applicatie worden verzameld (bijvoorbeeld: de volgorde van bezochte delen of andere parameters over het besturingssysteem van het apparaat).',
        User: 'Gebruiker',
        User_content: 'De persoon die deze Applicatie gebruikt en die akkoord moet gaan met of geautoriseerd moet zijn door de Betrokkene naar wie de Persoonsgegevens verwijzen.',
        Person_concerned: 'Betrokkene',
        Person_concerned_content: 'De rechtspersoon of natuurlijke persoon op wie de Persoonsgegevens betrekking hebben.',
        Data_processor: 'Gegevensverwerker (or Gegevenstoezichtshouder)',
        Data_processor_content: 'De natuurlijke persoon, rechtspersoon, overheidsadministratie of enige andere instelling, vereniging of organisatie die door de gegevensbeheerder is gemachtigd om de persoonsgegevens te verwerken in overeenstemming met dit privacybeleid.',
        Responsible_processing: 'Verantwoordelijk voor de verwerking van de gegevens (of eigenaar)',
        Responsible_processing_content: 'De natuurlijke persoon, rechtspersoon, overheidsadministratie of enige andere instelling, vereniging of organisatie die het recht heeft om, ook samen met de Verantwoordelijke voor de verwerking van de Gegevens, beslissingen te nemen over de doeleinden en methoden voor het verwerken van Persoonsgegevens en de middelen gebruikt, inclusief beveiligingsmaatregelen met betrekking tot de exploitatie en het gebruik van deze applicatie. De verantwoordelijke voor de verwerking van de gegevens is de eigenaar van deze applicatie, tenzij anders aangegeven.',
        This_application: 'Deze applicatie',
        This_application_content: 'De hardware of software tools waarmee de persoonlijke gegevens van de gebruiker worden verzameld.',
        Cookie: 'Cookie',
        Cookie_content: "Klein stukje gegevens opgeslagen op het apparaat van de Gebruiker. Zie ons Cookiebeleid.",
        Legal_information: 'Juridische informatie',
        Legal_information_content: 'Kennisgeving aan Europese gebruikers: deze privacyverklaring is opgesteld met inachtneming van de verplichtingen in art. 10 van de Europese richtlijn 95/46 / EG en de bepalingen van de Europese richtlijn 2002/58 / EG, evenals de herziening in richtlijn 2009/136 / EG met betrekking tot cookies.',
        Changes_privacy_policy: 'Wijzigingen in dit privacybeleid',
        Changes_privacy_policy_date: 'Laatst bijgewerkt: 28 september 2020',
        Changes_privacy_policy_content: "De verantwoordelijke voor de verwerking van de gegevens behoudt zich het recht voor om dit privacybeleid op elk moment te wijzigen door gebruikers op deze pagina op de hoogte te stellen. We raden u aan deze pagina te controleren op mogelijke wijzigingen. De datum van de laatste wijziging wordt aangegeven onderaan de pagina. Als een Gebruiker bezwaar maakt tegen enige wijziging in het beleid, mag de Gebruiker deze Applicatie niet blijven gebruiken. Men kan de Verwerkingsverantwoordelijke verzoeken om de Gegevens te verwerken om de Persoonsgegevens te verwijderen. Tenzij anders aangegeven, is het geldige privacybeleid dat op dat moment van toepassing is, van toepassing op alle persoonlijke gegevens die de verantwoordelijke heeft opgeslagen voor de verwerking van de gegevens over gebruikers.",

        // Terms of Use Page
        Terms_title: 'Gebruiksvoorwaarden',
        Terms_introOne: 'Met het Bike Data Project biedt Open Knowledge Belgium - de koepelorganisatie voor open kennis en open data-initiatieven in België - een community-driven open fietsdataplatform dat data verzamelt over waar en wanneer er wordt gefietst.',
        Terms_introTwo: 'Het project heeft tot doel gegevens van fietsers, afkomstig van verschillende mobiele applicaties en bronnen, samen te voegen tot één open fietsdataplatform. De collectieve open data zullen lokale gemeenschappen in staat stellen om fietsen zichtbaarder te maken en besluitvormers de mogelijkheid bieden om steden leefbaarder en fietsvriendelijker te maken.',
        Terms_introThree: 'De deelname aan dit project en het gebruik van dit platform is onderworpen aan een aantal regels. Hieronder vindt u de algemene voorwaarden van het project, aangezien we ervan overtuigd zijn dat duidelijke regels de beste garantie bieden voor een respectvolle community.',
        Terms_introFour: 'Omdat Open Knowledge Belgium de feedback van de Bike Data Project community waardeert, verwelkomen we alle ideeën om het platform verder te verbeteren. U kunt uw suggesties e-mailen om',
        Who_can_contribute: 'Wie kan bijdragen aan het Bike Data Project en wie kan gebruik maken van de open data van het Bike Data Project?',
        Who_can_contribute_contentOne: 'Elke soort fietser kan bijdragen aan het project door fietsgegevens te delen. U kunt uw favoriete fietsapp koppelen om uw gegevens te delen of de Bike Data Project-app gebruiken om bij te dragen aan het Bike Data Project. Voor het gebruik van de app van het Bike Data Project hoeft u geen account aan te maken om de app te gebruiken, dus u en uw gedeelde fietsgegevens blijven anoniem.',
        Who_can_contribute_contentTwo: 'De anonieme geaggregeerde fietsdata worden als open data voor het publiek opengesteld. De open data van het Bike Data Project platform wordt gepubliceerd onder een Creative Commons Attribution 4.0 International Licentie, die geen beperkingen oplegt aan uw gebruik van de open data. U hoeft het Bike Data Project alleen op de juiste manier te vermelden door de naam van het project, copyrightmelding, licentiemelding, disclaimer en een link naar het platform op te geven.',
        Limitation_of_liability: 'Beperking van aansprakelijkheid',
        Limitation_of_liability_contentOne: 'Het Bike Data Project kan niet verantwoordelijk worden gehouden voor mislukkingen of vertragingen bij het gebruik van het platform. Het platform kan niet verantwoordelijk worden gehouden voor enige aansprakelijkheid in geval van persoonlijke schade door het gebruik ervan. U dient het Bike Data Project (en elk van zijn partners en / of vrijwilligers) te verdedigen, schadeloos te stellen en te vrijwaren tegen elke claim, eis, actie, schade, verlies, kosten of uitgave, inclusief maar niet beperkt tot redelijke advocaatkosten, die voortvloeien uit of met betrekking tot (a) uw gebruik van ons project; (b) alle ledeninhoud of inzendingen die u verstrekt; (c) uw schending van deze voorwaarden; (d) uw schending van rechten van een ander; of (e) uw gedrag in verband met de diensten. Verder, als u het project namens een entiteit gebruikt, verklaart en garandeert u dat een dergelijke entiteit ermee instemt u en het Bike Data Project schadeloos te stellen voor schendingen van deze voorwaarden in overeenstemming met deze sectie. Als u verplicht bent om ons schadeloos te stellen, hebben we het recht om, naar eigen goeddunken en onbeperkt, elke actie of procedure te controleren en te bepalen of we deze willen schikken, en zo ja, onder welke voorwaarden.',
        Limitation_of_liability_contentTwo: 'Wij geloven sterk in vrijheid van meningsuiting. Om er echter voor te zorgen dat het platform op een constructieve manier gebruikt kan worden door de gebruikers, met respect voor verschillende meningen en zonder dat mensen bang hoeven te zijn om deel te nemen aan het project, staan ​​wij geen aanstootgevend gedrag toe dat intimideert, intimideert of gebruikt angst om een ​​andere gebruiker het zwijgen op te leggen.',
        Spam: 'Spam',
        Spam_contentOne: 'We streven er te allen tijde naar om de gebruiker van het Bike Data Project platform te beschermen tegen technisch misbruik en spam. Accounts die worden gebruikt om de onderstaande acties uit te voeren, kunnen tijdelijk worden geblokkeerd of permanent worden verwijderd.',
        Spam_contentTwo: "Malware / phishing / virussen / wormen / Trojaanse paarden: u mag geen schadelijke inhoud of links naar dergelijke inhoud plaatsen met als doel de browsers of computers van iemand anders te beschadigen of te verstoren, of om iemands privacy te schenden. Spam: het is niet toegestaan ​​om gebruik het Bike Data Project-platform om mensen te spammen.",
        Infringement: 'Inbreuk op toepasselijke wetgeving',
        Infringement_contentOne: 'Het gebruik van het account mag op geen enkele manier in strijd zijn met de toepasselijke wetgeving. Dit omvat inbreuken op de privacywetgeving, intellectuele eigendomsrechten, het wetboek van strafrecht, enz. Het account mag op geen enkele manier worden gebruikt om illegale activiteiten te promoten.',
        Infringement_contentTwo: 'Het account mag op geen enkele manier worden gebruikt om illegale activiteiten te promoten.',
        Breaches_aforementioned_rules: 'In geval van overtreding van de bovengenoemde regels',
        Breaches_aforementioned_rules_content: 'Het kan voorkomen dat via het platform schadelijke bestanden gedownload kunnen worden, al dan niet door een gebruiker, of dat gebruikers schadelijke hyperlinks plaatsen. Elke download door een gebruiker of het klikken op een hyperlink, geplaatst door een gebruiker, gebeurt op eigen risico van de gebruiker. Eventuele opgelopen schade is volledig en uitsluitend de verantwoordelijkheid van deze gebruiker.',
        Property_rights: 'Eigendomsrechten Bike Data Project',
        Property_rights_content: 'De broncode van het Bike Data Project is gepubliceerd onder een open source MIT-licentie. U gaat ermee akkoord gebonden te zijn aan en te voldoen aan alle licentieovereenkomsten die van toepassing zijn op deze open source software. De visuele identiteit, inclusief het logo en de kleuren, is beschikbaar onder CC BY 4.0. De naam van het Bike Data Project kan niet worden gebruikt of gerepliceerd.',
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
