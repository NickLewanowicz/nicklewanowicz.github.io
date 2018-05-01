import Route from '@ember/routing/route';

export default Route.extend({
    model () {
        return {
            "header": {
                "name": "Nicholas Lewanowicz",
                "position": "Software Developer"
            },
            "about": {
                "description": "Seasoned Software Engineer with over 2 years of professional work experience. Primarily focused on Web Development with Ember.js. Currently working as a full-stack developer with Ember and Go as well as contract-based mobile application development for Android and iOS using React Native. Currently completing a Bachelor of Computer Science with Honours, specializing in Software Engineering in 4th year."
            },
            "education": [
                {
                    "institution": "Carleton University",
                    "area": "Honors Computer Science: Specializing in Software Engineering",
                    "extras": ["Cooperative Education", " Minor in Psychology"],
                    "studyType": "B.C.S.",
                    "highlights": [
                        "Excelled in programs related to discrete mathematics, artificial intelligence, and statistics.",
                        "Awarded G. Robertson Scholarship for acedemic excellence.",
                        "4th year standing with estimated graduation Winter 2019"
                    ],
                    "startDate": "2013-09-01",
                    "endDate": "2019-04-30",
                    "cgpa": "9.15",
                    "mgpa": "11.00"
                }
            ],
            "experiences": [
                {
                    "company": "Accedian - Analytics Visualization",
                    "position": "Full Stack Software Developer",
                    "website": "https://accedian.com/",
                    "startDate": "2018-01-8",
                    "endDate": "Present",
                    "summary": "Worked within a brand new software division of Accedian breaking new ground in network data visualization both front and backend.",
                    "highlights": [
                        "Used Ember.js to rapidly create and prototype web apps.",
                        "Align new feature implementation with customer spec.",
                        "Design and implement efficient Artificial Intelligent algorithm to provide meaningful data analytics",
                        "Take ownership of Epics and Stories in an agile development environment.",
                        "Programming experience with GO in a micro service environment using docker."
                    ]
                },
                {
                    "company": "Ciena - Network Health Prediction",
                    "position": "Software Developer",
                    "website": "http://ciena.com",
                    "startDate": "2017-05-01",
                    "endDate": "2018-01-1",
                    "summary": "Worked with amazing data analytics and ML talent on the front and back end of a brand new network health prediction tool.",
                    "highlights": [
                        "Used Ember.js and D3 to implement visualizations of complex kernel density estimates and random forest models.",
                        "Leveraged data driven user interfaces to create flexible and powerful single page applications.",
                        "Built rigourous testing suites around new features to reduce regression.",
                        "Incharge of training new interns with the development environment and tools and ensuring timelely task completion."
                    ]
                },
                {
                    "company": "Versaterm",
                    "position": "Software Developer",
                    "website": "https://www.versaterm.com/",
                    "startDate": "2017-05-01",
                    "endDate": "2017-09-1",
                    "summary": "Worked on software used by tens of thousands of emergency service dispatchers across North America.",
                    "highlights": [
                        "Integrated new web frameworks into exsisting C# and .NET stack",
                        "Developed features for Web Applications using popular industry tools",
                        "Experience with popular build, automation, and development interfaces",
                        "Integration of new UI features with large long standing codebases",
                        "Interaction with several derivatives of SQL and similar database types"
                    ]
                },
                {
                    "company": "Ciena - Frost Core",
                    "position": "Full Stack Software Developer",
                    "website": "http://ciena.com",
                    "startDate": "2016-09-01",
                    "endDate": "2017-05-01",
                    "summary": "Worked with amazing talent on the front and back end of products BluePlanet, IceBreaker, and Frost UX style guide.",
                    "highlights": [
                        "Used Ember.js to rapidly create and prototype web apps.",
                        "Developed a full stack internal application to manage use of internal dependencies company wide.",
                        "Aid in the upgrading and implementation of new UI components and features."
                    ]
                },
                {
                    "company": "Warside",
                    "position": "Owner/Creator",
                    "website": "http://www.MCWarside.com/",
                    "startDate": "2013-8-01",
                    "endDate": "2015-11-01",
                    "summary": "Created and managed a successfull online business reaching tens of thousands of customers.",
                    "highlights": [
                        "Fostered a community for people all over the world to congregate and play.",
                        "Leveraged viral marketing and gorilla social media tactics to reach a wider audience.",
                        "Raised monthly revenue to over $30 000 by leveraging online influencers and partnerships."
                    ]
                }
            ],
            "recommendations": [
                {
                    "person": "Steven Glanzer",
                    "position": "UI Manager / Architect at Accedian",
                    "relationship": "Managed Nicholas Directly",
                    "letter": "Nick has, hands down, the craziest work ethic I've ever seen - this coming from someone that routinely pulls 60-70 hour weeks. During an 8 month co-op term Nick learned the nuances of a complex web framework (Ember), designed and developed a full stack application from basic requirements and became the main developer for another front end application for big data analytics. Nick was so impressive in this role that we trusted him to carry the next stage of the project forward rather than investing in much more expensive senior Ember contractors. Nick has crushed every challenge to date and I can't wait to see what he'll accomplish in the future, I have no doubt it will dwarf my already high expectations.",
                    "image": "/assets/steven_glanzer.jpeg",
                    "link": "https://www.linkedin.com/in/steven-glanzer-47a4a811/"
                },
                {
                    "person": "David Cote",
                    "position": "Senior Manager - Big Data & Machine Learning at Ciena",
                    "relationship": "Managed Nicholas Directly",
                    "letter": "Nick is smart, reliable and very hard-working. He has done an excellent job at programming Javascript user interfaces for customer-facing applications developed at Ciena, when we started the new Blue Planet Analytics product line. I am happy to recommend Nick!",
                    "image": "/assets/david_cote.jpeg",
                    "link": "https://www.linkedin.com/in/david-cote-798b8689/"
                }

            ],
            "skills": [
                {
                    "name": "Web Development",
                    "level": "advanced",
                    "keywords": [
                    "HTML5",
                    "CSS3",
                    "Javascript",
                    "Ember.js",
                    "React",
                    "Vue.js",
                    "Meteor",
                    "Aurelia"
                    ]
                },
                {
                    "name": "Software Design",
                    "level": "intermediate",
                    "keywords": [
                    "Java",
                    "C Language",
                    "C++",
                    "Python",
                    "Golang",
                    "Android",
                    "Node.js"
                    ]
                },
                {
                    "name": "Automation, Building, and Testing",
                    "level": "advanced",
                    "keywords": [
                    "Mocha",
                    "Chai",
                    "qUnit",
                    "EmberJs"
                    ]
                }
            ],
            "contact": {
                "email": "c2VlbmFyb3doYW5pOTVAZ21haWwuY29t"
            },
            "menu": {
                "sections": [
                    {
                        "href": "#about",
                        "title": "About"
                    },
                    {
                        "href": "#experience",
                        "title": "Experience"
                    },
                    {
                        "href": "#education",
                        "title": "Education"
                    },
                    {
                        "href": "#projects",
                        "title": "Projects"
                    },
                    {
                        "href": "#skills",
                        "title": "Skills"
                    },
                    {
                        "href": "#organizations",
                        "title": "Organizations"
                    },
                    {
                        "href": "#contact",
                        "title": "Contact Me"
                    }
                ]
            },
            "organizations": [
                {
                    "login": "Ciena-Blueplanet",
                    "id": 4604820,
                    "url": "https://github.com/ciena-blueplanet",
                    "avatar_url": "images/4604820.png",
                    "description": "A division of Ciena"
                },
                {
                    "login": "Ciena-Frost",
                    "id": 16601148,
                    "url": "https://github.com/ciena-frost",
                    "avatar_url": "images/16601148.png"
                },
                {
                    "login": "Accedian",
                    "id": 22104835,
                    "url": "https://github.com/Accedian",
                    "avatar_url": "images/22104835.png"
                },
                {
                    "login": "MyCryptoHQ",
                    "id": 22964937,
                    "url": "https://github.com/MyCryptoHQ",
                    "avatar_url": "images/22964937.png"
                }
            ],
            "projects": [
                {
                    "name": "Diabuddy Web/iOS App",
                    "url": "https://github.com/diabuddy",
                    "demo": "http://diabuddy.live",
                    "tldr": "Award Winning Hacking Health 2018 serverless health monitor for children",
                    "description": "Built using: Emberjs, firebase, and swift",
                    "icon": "/assets/diabuddy.png",
                    "row": 10,
                    "col": 8
                },
                {
                    "name": "Trendify Web App",
                    "url": "https://github.com/NickLewanowicz/trendify-web",
                    "tldr": "Award Winning CUHacking 2018 web socket based game",
                    "description": "Built using: express, socket.io, d3, Ember.js",
                    "icon": "/assets/Trendify.png",
                    "row": 10,
                    "col": 8
                },
                {
                    "name": "ParkSpace",
                    "url": "https://github.com/NickLewanowicz/ParkSpace",
                    "tldr": "Production ready iOS app to rent parking spaces",
                    "description": "Uses linux's proc virtual fs to persist information and metrics about the system, and uses urwid console interface to render it.",
                    "icon": "/assets/parkspace.png",
                    "row": 6,
                    "col": 6
                },
                {
                    "name": "Reinforced Learning Visualizer Ai",
                    "url": "https://github.com/NickLewanowicz/reinforced-learning-ai",
                    "demo": "https://nicklewanowicz.github.io/reinforced-learning-ai/",
                    "tldr": "Demonstration of Learning Automata in a sandbox",
                    "description": "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
                    "icon": "/assets/LAAi.svg",
                    "row": 4,
                    "col": 6
                },
                {
                    "name": "Network Diagnostic Ai",
                    "url": "https://github.com/NickLewanowicz/root-cause-ai",
                    "demo": "https://nicklewanowicz.github.io/root-cause-ai/",
                    "tldr": "Heuristic search on a graph to find deficiencies",
                    "description": "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
                    "icon": "/assets/PegAi.svg",
                    "row": 4,
                    "col": 5
                },
                {
                    "name": "Peg Solitaire Ai",
                    "url": "https://github.com/NickLewanowicz/peg-solitaire-ai",
                    "demo": "https://nicklewanowicz.github.io/peg-solitaire-ai/",
                    "tldr": "Ai to solve French Peg Solitaire",
                    "description": "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
                    "icon": "/assets/PegAi.svg",
                    "row": 4,
                    "col": 5
                },
                {
                    "name": "Overboard Ai",
                    "url": "https://github.com/NickLewanowicz/overboard-ai",
                    "demo": "https://nicklewanowicz.github.io/overboard-ai/",
                    "tldr": "MiniMax Ai to compete in Overboard game",
                    "description": "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
                    "icon": "/assets/OverboardAi.svg",
                    "row": 3,
                    "col": 6
                },
                {
                    "name": "Extended-LS",
                    "url": "https://github.com/NickLewanowicz/extended-ls",
                    "tldr": "Modification to Ubuntu's LS command",
                    "description": "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
                    "icon": "/assets/extendedLs.svg",
                    "row": 3,
                    "col": 4
                },
                {
                    "name": "BetterPassword Manager",
                    "url": "https://github.com/NickLewanowicz/BetterPassword-HCI",
                    "demo": "https://nicklewanowicz.github.io/BetterPassword-HCI/",
                    "tldr": "Phrase based password research system",
                    "description": "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
                    "icon": "/assets/better-password.svg",
                    "row": 3,
                    "col": 6
                },
                {
                    "name": "typ3",
                    "url": "https://github.com/MyCryptoHQ/typ3",
                    "tldr": "Ethereum focused development tool from EthWaterloo 2017",
                    "description": "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
                    "icon": "/assets/typ3.svg",
                    "row": 4,
                    "col": 6
                },
                {
                    "name": "Scholarchain",
                    "url": "https://github.com/NickLewanowicz/Scholarchain",
                    "tldr": "CUHacking 2017 first attempt at a decentralized application",
                    "description": "Uses linux's proc virtual fs to persist information and metrics about the system, and uses urwid console interface to render it.",
                    "icon": "/assets/Scholarchain.svg",
                    "row": 3,
                    "col": 6
                },
            ],
            "footer": {
                "social": {
                    "profiles": [
                        {
                            "network": "GitHub",
                            "username": "nicklewanowicz",
                            "url": "http://github.com/nicklewanowicz",
                            "icon": "fa-github"
                        },
                        {
                            "network": "LinkedIn",
                            "username": "Nicholas Lewanowicz",
                            "url": "www.linkedin.com/in/nicklewanowicz",
                            "icon": "fa-linkedin"
                        },
                        {
                            "network" : "Facebook",
                            "username": "nicholas.lewanowicz",
                            "url" : "https://www.facebook.com/nicholas.lewanowicz",
                            "icon": "fa-facebook"
                        }
                    ]
                }
            },
            "manifest": {
                "name": "Portfolio - Seena Rowhani",
                "short_name": "Portfolio",
                "description": "",
                "start_url": "/",
                "display": "standalone",
                "background_color": "#3498db",
                "theme_color": "#217dbb",
                "icons": [
                    {
                    "src": "favicon.ico",
                    "sizes": "192x192",
                    "type": "image/png"
                    }
                ],
                "apple": {
                    "statusBarStyle": "black-translucent"
                }
            }
        } 
    }
});
