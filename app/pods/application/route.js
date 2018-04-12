import Route from '@ember/routing/route';

export default Route.extend({
    model () {
        return {
            "header": {
                "name": "Nicholas Lewanowicz",
                "position": "Software Developer"
            },
            "about": {
                "description": "Seasoned Software Engineer with strong professional experience in Web Development and Ember.js; avidly pursuing experience in full stack development. Completing an Honours in Computer Science with Specialization in Software Engineering."
            },
            "education": [
                {
                    "institution": "Carleton University",
                    "area": "Honours Computer Science: Specializing in Software Engineering",
                    "extras": ["Cooperative Education", " Minor in Psychology"],
                    "studyType": "B.A.",
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
                    "summary": "Worked within a brand new software division of Accedian breaking new ground in netowork data visualization both front and backend.",
                    "highlights": [
                        "Used Ember.js to rapidly create and prototype web apps.",
                        "Align new feature implementation with customer spec.",
                        "Design and implement efficient Artificial Intelligent algorithm to provide meaningful data analytics",
                        "Take ownership of Epics and Stories in an agile development environment.",
                        "Programming experience with GO in a micro service environment using docker."
                    ]
                },
                {
                    "company": "Ciena - Newtwork Health Prediction",
                    "position": "Software Developer",
                    "website": "http://ciena.com",
                    "startDate": "2017-05-01",
                    "endDate": "2018-01-1",
                    "summary": "Worked with amazing data analytics and ML talent on the front and back end of a brand new network health predition tool.",
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
                    "summary": "Developed along side of extremely talented designers and testers, refining and designing popular applications that would be used both internally and externally.",
                    "highlights": [
                        "Yeoman application scaffolding",
                        "Developed features for Web Applications using popular industry tools",
                        "Experience with popular build, automation, and development interfaces",
                        "Manipulation of both Javascript and Java code base, for front and back-end development",
                        "Created and maintained build tools used by other developers"
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
                        "Developed a full stack internal application to manage dozens of internal dependencies.",
                        "Aid in the upgrading and implementation of new UI components and features."
                    ]
                },
                {
                    "company": "MCWarside",
                    "position": "Owner/Creator",
                    "website": "http://www.MCWarside.com/",
                    "startDate": "2013-8-01",
                    "endDate": "2015-11-01",
                    "summary": "Created and managed a successfull online business reaching tens of thousands of customers.",
                    "highlights": [
                        "Fostered a community for people all over the world to congreagate and play.",
                        "Leveraged viral marketing and gorilla social media tactics to reach a wider audience.",
                        "Raised monthly revenue to over $30 000 by leveraging online influencers and partnerships."
                    ]
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
                    "name": "Trendify Web App",
                    "url": "https://github.com/NickLewanowicz/trendify-web",
                    "tldr": "Award Winning CUHacking 2018 web socket based game",
                    "description": "Built using: express, socket.io, d3, Ember.js",
                    "icon": "Trendify.png",
                    "row": 10,
                    "col": 8
                },
                {
                    "name": "ParkSpace",
                    "url": "https://github.com/NickLewanowicz/ParkSpace",
                    "tldr": "Production ready iOS app to rent parking spaces",
                    "description": "Uses linux's proc virtual fs to persist information and metrics about the system, and uses urwid console interface to render it.",
                    "icon": "parkspace.png",
                    "row": 6,
                    "col": 6
                },
                {
                    "name": "typ3",
                    "url": "https://github.com/MyCryptoHQ/typ3",
                    "tldr": "Ethereum focused development tool from EthWaterloo 2017",
                    "description": "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
                    "icon": "typ3.svg",
                    "row": 4,
                    "col": 6
                },
                {
                    "name": "Scholarchain",
                    "url": "https://github.com/NickLewanowicz/Scholarchain",
                    "tldr": "CUHacking 2017 first attempt at a decentralized application",
                    "description": "Uses linux's proc virtual fs to persist information and metrics about the system, and uses urwid console interface to render it.",
                    "icon": "Scholarchain.svg",
                    "row": 3,
                    "col": 4
                },
                {
                    "name": "Peg Solitaire Ai",
                    "url": "https://github.com/NickLewanowicz/peg-solitaire-ai",
                    "tldr": "Ai to solve French Peg Solitaire",
                    "description": "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
                    "icon": "PegAi.svg",
                    "row": 4,
                    "col": 4
                },
                {
                    "name": "Overboard Ai",
                    "url": "https://github.com/NickLewanowicz/overboard-ai",
                    "tldr": "MiniMax Ai to compete in Overboard",
                    "description": "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
                    "icon": "OverboardAi.svg",
                    "row": 3,
                    "col": 6
                },
                {
                    "name": "Reinforced Learning Visualizer Ai",
                    "url": "https://github.com/NickLewanowicz/reinforced-learning-ai",
                    "tldr": "Demonstration of Learning Automata in a sandbox",
                    "description": "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
                    "icon": "LAAi.svg",
                    "row": 4,
                    "col": 6
                },
                {
                    "name": "BetterPassword Manager",
                    "url": "https://github.com/NickLewanowicz/BetterPassword-HCI",
                    "tldr": "Phrase based password research system",
                    "description": "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
                    "icon": "better-password.svg",
                    "row": 3,
                    "col": 6
                },
                {
                    "name": "Extended-LS",
                    "url": "https://github.com/NickLewanowicz/extended-ls",
                    "tldr": "Modification to Ubuntu's LS command",
                    "description": "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
                    "icon": "extendedLs.svg",
                    "row": 3,
                    "col": 4
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
                            "username": "Seena Rowhani",
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
