
var colors = ["#F2DF07", "#9F031B", "#3023AE", "#C96DD8", "#5475D9", "#00DCB7", "#CCAF86", "#F15056", "#3BB3E4", "#41CDDB", "#F96F39", "#FEE000", "#3A69D1", "#232429", "#373E4D", "#2D467B", "#6D4890", "#26D36E", "#F25B45"]
//2017: 
//HackTech2017 (Cal Tech) (Mar 3 - 5 2017
//Tree Hacks - (Feb 17-19 2017) (Stanford University)  Winner of Best Use of Google App Engine & Most innovative Use of Neura 
//Feedback-Me (Feb 2017)
//DeveloperWeek Hackathon - (Feb 11-12 2017) winner 800+hackers Best Use of the Clarifai API Challenge
//Markov Model (Jan 2017)
//Swift 3. Article (Jan 2017)
//HackDavis (UC Davis) (Jan 21 - 22 2017) (// CODE FOR SOCIAL GOOD)
//Tweet Generator (Jan 2017)
//
//2016: 
//Joshua Guide (Dec 2016)

var data = [
    {
     id: 1,
     title: "Judge & Mentor at HackTech2017",
     featured: true,
     short_title: "HackTech",
     type: "hackathon",
     tagline: "Best iOS hack judge + mentor",
     date: "March 2017",
     description: "Taught intermediate iOS workshop, provided mentorship, and judged best iOS hack",
     detailed_description: "",
     websiteIsArticle: false,
     website_link: "http://www.hacktech.io",
     live_product_link: "",
     bg_color: colors[(1 -1) % colors.length] 
    },
    {
     id: 2,
     title: "Tree Hacks (Stanford) Winner",
     featured: true,
     short_title: "TreeHacks",
     type: "award",
     tagline: "Best Google App Engine Hack and",
     date: "Febuary 2017",
     description: "Won Best Use of Google App Engine & Most innovative Use of Neura",
     detailed_description: "Tree Hacks - (Feb 17-19 2017) (Stanford University)  Winner of Best Use of Google App Engine & Most innovative Use of Neura",
     websiteIsArticle: false,
     website_link: "",
     live_product_link: "https://devpost.com/software/assist-asd",
     bg_color: colors[(2 -1) % colors.length] 
    },
    {
     id: 3,
     title: "Feedback-Me",
     featured: true,
     short_title: "Feedback-Me",
     type: "web_app",
     tagline: "Get quality feedback at the click of a button",
     date: "Febuary 2017",
     description: "Web app + iOS app focused on giving and receiving quality feedback in the educational and professional settings",
     detailed_description: "Feedback-Me (Feb 2017)",
     websiteIsArticle: false,
     website_link: "",
     live_product_link: "http://www.feedbackme.space",
     bg_color: colors[(3 -1) % colors.length] 
    },
    {
     id: 4,
     title: "DeveloperWeek Hackathon Winner",
     featured: true,
     short_title: "DeveloperWeek Hackathon",
     type: "award",
     tagline: "Best use of the Clarifai API Challenge",
     date: "Febuary 2017",
     description: "At the nation's largest challenge driven hackathon we won best use of Clarifai for our iOS app, which helps the caretakers of individuals with Autism",
     detailed_description: "(Feb 11-12 2017) winner 800+hackers Best Use of the Clarifai API Challenge - Built samePage an iOS app to help get all points of contact to be in communication and assist each other - we used Clarifai for our AI ML library for emotion",
     websiteIsArticle: false,
     website_link: "http://www.developerweek.com/hackathon/",
     live_product_link: "",
     bg_color: colors[(4 -1) % colors.length] 
    },
     {
     id: 5,
     title: "Markov Model Article",
     featured: true,
     short_title: "Markov Model",
     type: "medium_article",
     tagline: "From \“What is a Markov Model\” to “Here is how Markov Models Work\”",
     date: "January 2017",
     description: "From “What is a Markov Model” to “Here is how Markov Models Work” is a comprehensive & viral article on Markov Models that has been read thousands of times and was described to be \"the most lucid explanation of Markov models\"",
     detailed_description: "",
     websiteIsArticle: true,
     website_link: "https://hackernoon.com/from-what-is-a-markov-model-to-here-is-how-markov-models-work-1ac5f4629b71#.lzx3odso2",
     live_product_link: "",
     bg_color: colors[(5 -1) % colors.length] 
    },
    {
     id: 6,
     title: "Swift 3.0 Article",
     featured: true,
     short_title: "Swfit 3",
     type: "medium_article",
     tagline: "Swift 3.0: Lazily Stored Properties, Variable Observers, KVO (💤 🔎 🔑)",
     date: "January 2017",
     description: "\"Swift 3.0: Lazily Stored Properties, Variable Observers, KVO (💤 🔎 🔑)\" is an article that dives deep into some useful, but often overlooked topics in Swift",
     detailed_description: "",
     websiteIsArticle: true,
     website_link: "https://medium.com/ios-seminar/swift-3-0-lazily-stored-properties-variable-observers-kvo-ba877fed063e#.b3uginbq1",
     live_product_link: "",
     bg_color: colors[(6 -1) % colors.length] 
    },
    {
     id: 7,
     title: "HackDavis Mentor",
     featured: true,
     short_title: "HackDavis",
     type: "hackathon",
     tagline: "HackDavis (UC Davis) // CODE FOR SOCIAL GOOD",
     date: "January 2017",
     description: "Mentored and taught iOS focused workshops at UC Davis's Hackathon, which had an emphasis on social good",
     detailed_description: "HackDavis (UC Davis) (Jan 21 - 22 2017) (// CODE FOR SOCIAL GOOD)",
     websiteIsArticle: false,
     website_link: "https://hackdavis.io/",
     live_product_link: "",
     bg_color: colors[(7 -1) % colors.length] 
    },
    {
     id: 8,
     title: "Silicon Valley Tweet Generator",
     featured: true,
     short_title: "Silicon Valley Tweet Gen",
     type: "web_app",
     tagline: "Markov Model Generated Tweets",
     date: "January 2017",
     description: "Markov model generated tweets inspired by the hit HBO show \'Silicon Valley\' - visit the site to tweet your own",
     detailed_description: "Tweet Generator (Jan 2017)",
     websiteIsArticle: false,
     website_link: "",
     live_product_link: "http://tweet-generator-alex.herokuapp.com/",
     bg_color: colors[(8 -1) % colors.length] 
    },
    {
     id: 9,
     title: "Joshua Guide",
     featured: true,
     short_title: "Joshua Guide",
     type: "web_app",
     tagline: "Guiding the homeless to relevant and important information",
     date: "December 2016",
     description: "Joshua Guide is a Facebook Messenger chatbot for the homeless and helps guide individuals to daily necessities and important information",
     detailed_description: "Tweet Generator (Jan 2017)",
     websiteIsArticle: false,
     website_link: "",
     live_product_link: "https://www.facebook.com/JoshuaGuideBot/",
     bg_color: colors[(9 -1) % colors.length] 
    },
    {
     id: 10,
     title: "How to Build a Great Product Series",
     featured: true,
     short_title: "Medium",
     type: "medium_article",
     tagline: "Product Development — The Tools To Build a Successful Product",
     date: "November 2016",
     description: "Product Development is an immense topic that spans the spectrum in both soft and hard skills - this article provides a 10,000 foot overview of how I approach product development",
     detailed_description: "This article provides a 10,000 foot overview of how I approach product development. For the details on how to effectively do certain aspects of product development check out some of my subsequent articles which go more in depth on specific topics. If you have any questions or suggestions please share ❤ Lets chat :)",
     website_link: "https://medium.com/@alexdejeu/cal-hacks-3-0-calling-all-hackers-dreamers-4-a-mers-c96c29b510e9#.qw4hvrkin",
     websiteIsArticle: true,
     live_product_link: "",
     bg_color: colors[(10 -1) % colors.length] 
    },
    {
     id: 11,
     title: "Cal Hacks 3.0",
     featured: false,
     short_title: "Medium",
     type: "medium_article",
     tagline: "We came, we desgined, we coded, we shipped, and we won",
     date: "November 2016",
     description: "\"We came, we designed, we coded, we shipped, and we won\" - Medium article outlining my experience at Cal Hacks 3.0, what our winning app was, and some general takeaways for future hackathons",
     detailed_description: "\"A hackathon is where your crazy ideas become reality. The possibilities are limitless. Break things. Do something you’ve never done before. Move quickly — you only have 36 hours!\" <br/><br/>Cal Hacks was dope. Absolutely spectacular, and I want to share what made it so special, what our winning project was, and some general hackathon takeaways.",
     website_link: "https://medium.com/@alexdejeu/product-development-the-tools-to-build-a-successful-product-e906ac362ca6#.rne622k3k",
     websiteIsArticle: true,
     live_product_link: "",
     bg_color: colors[(11 -1) % colors.length] 
    },
    {
     id: 12,
     title: "Best Mobile App",
     featured: false,
     short_title: "TravelChest",
     type: "award",
     tagline: "Travel Chest - best app at Cal Hacks 3.0",
     date: "November 2016",
     description: "Awarded best app at Cal Hacks 3.0 - the worlds largest collegiate hackathon for TravelChest - Travel Chest plans your whole trip based solely on your budget; just submit a budget, choose a package, book and enjoy",
     detailed_description: "Travel Chest plans your whole trip based solely on your budget. Submit a budget, choose a package, book and enjoy!<br/><br/>Through using the Amadeus API, which aggregates data from over 750 airlines to find you the cheapest flight to one of the top 15 travel destinations in the world. After you pick a location we show housing options, the top places to eat at near the housing option you pick, and then we show some cool things to do.",
     website_link: "",
     websiteIsArticle: false,
     live_product_link: "https://devpost.com/software/travel-chest-pdye6a",
     bg_color: colors[(12 -1) % colors.length] 
    }, 
    {
     id: 13,
     title: "IBM & HackingEDU",
     featured: false,
     short_title: "IBM & HackingEDU Fall Training Day",
     type: "hackathon",
     tagline: "Mentor at IBM & HackingEDU Fall Training Day `16",
     date: "October 2016",
     description: "Mentor at the world's largest education hackathon - helped participants in San Francisco",
     detailed_description: "",
     website_link: "http://hackingedu.co",
     websiteIsArticle: false,
     live_product_link: "",
     bg_color: colors[(13 -1) % colors.length] 
    }, 
    {
     id: 14,
     title: "Best Social/Civic Hacking Hack",
     featured: false,
     short_title: "Beacons",
     type: "award",
     tagline: "Beacons - promoting civic welfare through encouraging personal responsibility and communal empathy.",
     date: "September 2016",
     description: "Awarded by JP Morgan at University of Pennslavania's hackathon - PennApps - for \'Beacons\' an iOS/Android app promoting civic welfare through encouraging personal responsibility and communal empathy",
     detailed_description: "Provides connections to skilled individuals in the area for those who require the completion of a specific task. The functionality of the application is divided into the medical requests, the miscellaneous utility requests, and the social requests. The user places a Beacon for a specific problem they desire completed. All individuals with the application downloaded within a preset radius and fulfilling a basic skill requirement are notified of the Beacon.",
     website_link: "",
     websiteIsArticle: false,
     live_product_link: "https://devpost.com/software/beacons",
     bg_color: colors[(14 -1) % colors.length] 
    },
    {
     id: 15,
     title: "Professional LaVie",
     featured: false,
     short_title: "ProLaVie",
     type: "iOS_app",
     tagline: "Prepare for annual reviews with Professional LaVie",
     date: "July 2016",
     description: "Professional LaVie is an iOS app that keeps track of essential elements and streamlines the annual review process",
     detailed_description: "Professional LaVie allows employees to effectively record work related achievements. This is simple task of breaking the annual review down into small 3-5 minute chunks over the entire year will save you hours of email lookup and stress.<br /><br /> Download Pro LaVie and become more prepared for your next annual review.",
     website_link: "",
     websiteIsArticle: false,
     live_product_link: "https://itunes.apple.com/us/app/professional-lavie-organize/id1131868387?mt=8",
     bg_color: colors[(15 - 1) % colors.length] 
    },
    {id: 16,
     title: "My Visual Partner",
     featured: true,
     short_title: "MVP",
     type: "iOS_app",
     tagline: "Encourages independence through personalized visual aids",
     date: "April 2016",
     description: "iOS app that provides a system to encourage independence for individuals with learning differences",
     detailed_description: "MVP - My Visual Partner provides a system that encourages independence for getting ready for user defined events. <br /><br />MVP allows users to create and schedule events. Then the user specifies the items that are required for the event. Once the event is created the user will be promoted and have a visual checklist to insure they find all of his or her items at the events specified time.",
     website_link: "http://myvisualpartner.com",
     websiteIsArticle: false,
     live_product_link: "https://itunes.apple.com/us/app/mvp-my-visual-partner/id1052876510?mt=8",
     bg_color: colors[(16 - 1) % colors.length]
    }, 
    {
     id: 17,
     title: "Most Polished App",
     featured: false,
     short_title: "DoctorWatson",
     type: "award",
     tagline: "Doctor Watson - Receive professional medical feedback instantly",
     date: "April 2016",
     description: "Awarded at HackBCA III for DoctorWatson, an iOS app that utilizes AI to process the users naturally spoken medical complaint and then matches the user with a relevant and available doctor",
     detailed_description: "DoctorWatson utilizes the power of IMB's Watson AI to process the users naturally spoken medical complaint. Then through mapping the words and phrases through relevance we determined the best fit specialist type to assist the user. Next we parse through our database of Doctor users and find a doctor that is free and can best assist the user. We then show the best fit doctor to the user, if the user likes the doctor they can then chat and discuss the health issue.",
     website_link: "",
     websiteIsArticle: false,
     live_product_link: "https://devpost.com/software/doctorwatson-9rpvot",
        bg_color: colors[(17 - 1) % colors.length]
    }, 
    {
     id: 18,
     title: "High School LaVie",
     featured: false,
     short_title: "HSLaVie",
     type: "iOS_app",
     tagline: "Prepare for college apps with High School LaVie",
     date: "February 2016",
     description: "High School LaVie is an iOS app that keeps track of essential elements and streamlines the college application process",
     detailed_description: "High School LaVie allows students to effectively and elegantly record high school achievements. This is critically important for the college application process and prevents an \'Oh shoot\' moment when you are applying for college and you forget what spectacular things you were doing back in 9th grade. HS LaVie solves this problem :) Quickly, create, save, and view activities. Reminders, will encourage you to do little bits every so often in order to prevent forgetting or putting off recording your achievements",
     website_link: "http://mylavie.com",
     websiteIsArticle: false,
     live_product_link: "https://itunes.apple.com/us/app/high-school-lavie/id1086503521?mt=8",
     bg_color: colors[(18 - 1) % colors.length]
    },
    {
     id: 19,
     title: "ICE",
     featured: false,
     short_title: "ICE",
     type: "iOS_app",
     tagline: "An intelligent collaborative environment for the classroom",
     date: "August 2015",
     description: "ICE - Interactive Collaborative Environment provides a platform that delivers reminders, scheduling, an aggregated dashboard, and collaboration",
     detailed_description: "<b>Reminders</b> - For all assignments your groups put out.<br/><b>Schedule</b> - Drag and drop interface combined with syncing with your other calendars provides a one of a kind simplicity.<br/><b>Dashboard</b> - At a glance dashboard for weekly and daily views.<br/><b>Collaboration</b>- An environment to ask questions, support peers, and foster collaboration.",
     website_link: "http://dogoodtechnology.com",
     websiteIsArticle: false,
     live_product_link: "https://itunes.apple.com/sb/app/ice-interactive-collaborative/id1030680444?mt=8",
    bg_color: colors[(19 -1) % colors.length]
    }, 
    {
     id: 20,
     title: "Google Glass Glasswear",
     featured: true,
     short_title: "GoogleGlass",
     type: "award",
     tagline: "Novel way for text-to-audio translation using Google Glass",
     date: "May 2015",
     description: "Awarded 2nd place at MIT’s Massachusetts State Science & Engineering Fair for research and development with Google Glass - Developed an efficient method of text-to-speech generation that is not limited by dependencies of external systems",
     detailed_description: "Developed an efficient method of text-to-speech generation that is not limited by dependencies of external systems. Published research in the Scientia Review. Received the 2015 Harvard University Press Book Award. Implemented using the Glassware SDK, Tesseract OCR, Eclipse, and Java.",
     website_link: "http://www.scientiareview.org/pdfs/422.pdf",
     websiteIsArticle: false,
     live_product_link: "",
    bg_color: colors[(20 -1) % colors.length]
    }
];