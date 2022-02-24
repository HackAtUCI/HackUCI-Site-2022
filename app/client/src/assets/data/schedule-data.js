import React from "react";
import moment from "moment";

export const scheduleEvents = {
  friday: [
    {
      uid: 0,
      title: "Check In/Security (Team Formation)",
      time: {
        start: "2022-02-25 15:00:00-08",
        end: "2022-02-25 16:00:00-08"
      },
      category: "main",
      host: "",
      location: {
        name: "Bottom of DBH"
      },
      description: ""
    },
    {
      uid: 1,
      title: "In-Person Team Formation",
      time: {
        start: "2022-02-25 16:00:00-08",
        end: "2022-02-25 17:00:00-08"
      },
      category: "main",
      host: "",
      location: {
        name: "Aldrich Park"
      },
      description:
        "Get to know your fellow hackers and find potential teammates with an ice breaker event! Meet in front of DBH at 4pm and we’ll head over to Aldrich Park together!"
    },
    {
      uid: 3,
      title: "Dinner",
      time: {
        start: "2022-02-25 18:00:00-08",
        end: "2022-02-25 19:00:00-08"
      },
      category: "main",
      location: {
        name: "Java City"
      },
      description: ""
    },
    {
      uid: 4,
      title: "Hybrid Team Formation",
      time: {
        start: "2022-02-25 19:00:00-08",
        end: "2022-02-25 20:00:00-08"
      },
      category: "main",
      location: {
        name: "Zoom",
        url: "https://uci.zoom.us/j/96503392551"
      },
      description:
        "Haven’t found teammates yet? Meet your fellow hackers over Zoom in this speed networking event!"
    },
    {
      uid: 5,
      title: "Opening Ceremony",
      time: {
        start: "2022-02-25 20:00:00-08",
        end: "2022-02-25 20:30:00-08"
      },
      category: "main",
      host: "Hack at UCI",
      location: {
        name: "Live Stage",
        url: "/stage"
      },
      description:
        "Come to the opening ceremony for HackUCI 2022 to hear from our wonderful sponsors who make all of this possible and from us about how to navigate through the hackathon! "
    },
    {
      uid: 7,
      title: "Hacking Begins",
      time: {
        start: "2022-01-29 21:00:00-08"
      },
      category: "hacking"
    },
    {
      uid: 8,
      title: "Intro to MongoDB Workshop",
      time: {
        start: "2022-02-25 21:00:00-08",
        end: "2022-02-25 22:00:00-08"
      },
      category: "workshop",
      host: "Commit the Change",
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/95148394758"
      },
      description:
        "Come learn about MongoDB and the essentials of working with this database framework!"
    },
    {
      uid: 9,
      title: "Design at UCI: Design Basics Workshop",
      time: {
        start: "2022-02-25 22:00:00-08",
        end: "2022-02-25 23:00:00-08"
      },
      category: "workshop",
      host: "Design at UCI",
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/93152877322"
      },
      description:
        "Join Design at UCI to learn about design basics, including visual design principles, branding, and accessibility!"
    },
    {
      uid: 10,
      title: "PeterPortalAPI and GraphQL Workshop",
      time: {
        start: "2022-02-25 23:00:00-08",
        end: "2022-02-26 00:00:00-08"
      },
      category: "workshop",
      host: "ICS Student Council",
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/97381487095"
      },
      description:
        "Come learn about GraphQL and how you can use it to fetch data from the PeterPortal API! The PeterPortal API is free and provides data about UCI schedules, courses, grades, professors, and more."
    },
    {
      uid: 11
    },
    {
      uid: 12
    },
    {
      uid: 13
    },
    {
      uid: 14
    },
    {
      uid: 15
    }
  ],
  saturday: [
    {
      uid: 16,
      title: "Tetris",
      time: {
        start: "2022-02-26 00:00:00-08",
        end: "2022-02-26 00:30:00-08"
      },
      category: "social", // double check
      host: "",
      location: {
        name: "Zoom",
        url: "https://uci.zoom.us/j/92379110202"
      },
      description:
        "Think your Tetris skills stack up against everyone else? Come out to our Tetris social event where you can take a break from your hacking and try not to take some L(block)’s!"
    },

    {
      uid: 17,
      title: "Kahoot",
      time: {
        start: "2022-02-26 00:30:00-08",
        end: "2022-02-26 01:00:00-08"
      },
      category: "social", // double check
      host: "",
      location: {
        name: "ICS 428"
      },
      description:
        "Come out to our Kahoot social to test your trivia knowledge on weird food facts and our home state, California!"
    },
    {
      uid: 18
    },
    {
      uid: 19,
      title: "Hacking Time",
      time: {
        start: "2022-02-26 01:00:00-08",
        end: "2022-02-26 09:00:00-08"
      },
      category: "spacer"
    },
    {
      uid: 20,
      title: "Breakfast",
      time: {
        start: "2022-02-26 09:00:00-08",
        end: "2022-02-26 10:00:00-08"
      },
      location: {
        name: "Java City"
      },
      category: "main"
    },
    {
      uid: 21,
      title: "Lyrid Workshop",
      time: {
        start: "2022-02-26 10:00:00-08",
        end: "2022-02-26 11:00:00-08"
      },
      location: {
        name: "Zoom",
        url: "https://uci.zoom.us/j/97628977308"
      },
      category: "workshop",
      description:
        "Join Lyrid as we give a quick overview about what the platform can do and ask us anything!"
    },
    {
      uid: 22,
      title: "What they don't tell you about Tech Interviews",
      time: {
        start: "2022-02-26 11:15:00-08",
        end: "2022-02-26 12:00:00-08"
      },
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/97937721165"
      },
      category: "workshop",
      description:
        "Are you terrified of the tech interview process? Do you wish someone could just give you an end-to-end overview of what the whole process is like? Come out to “What They Don’t Tell You About Tech Interviews” to gain some insight into the interview process from a software engineer at Yelp!"
    },
    {
      uid: 23,
      title: "Lunch",
      time: {
        start: "2022-02-26 12:00:00-08",
        end: "2022-02-26 13:00:00-08"
      },
      location: {
        name: "Java City"
      },
      category: "main"
    },
    {
      uid: 24,
      title: "Capture the Flag",
      time: {
        start: "2022-02-26 13:00:00-08",
        end: "2022-02-26 14:00:00-08"
      },
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/94759138778"
      },
      host: "Cyber@UCI",
      category: "workshop",
      description:
        "Come test out your hacking skills in this beginner-friendly Cyber Challenge! Your mission is to find flags hidden within the various cybersecurity challenges. No prior experience necessary."
    },
    {
      uid: 25,
      title: "Mage.ai Workshop",
      time: {
        start: "2022-02-26 14:00:00-08",
        end: "2022-02-26 15:00:00-08"
      },
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/93282726581"
      },
      host: "Mage",
      category: "workshop",
      description:
        ""
    },
    {
      uid: 26,
      title: "Supervised Learning for Text Classification",
      time: {
        start: "2022-02-26 15:00:00-08",
        end: "2022-02-26 16:00:00-08"
      },
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/94525375022"
      },
      host: "AI at UCI",
      category: "workshop",
      description:
        "Our HackUCI workshop, Supervised Learning for Text Classification, will be presented by Randy and Rithwik, mentors from Artificial Intelligence at UCI. We will introduce the basics of machine learning by building language models from an example dataset of reviews from IMDB. We will also be discussing how to integrate the newly created model into your projects."
    },
    {
      uid: 27,
      title: "Binary Search Competition",
      time: {
        start: "2022-02-26 16:00:00-08",
        end: "2022-02-26 17:00:00-08"
      },
      location: {
        name: "Zoom",
        url: "https://uci.zoom.us/j/98600169417"
      },
      category: "social",
      description:
        "Tired of grinding on your project? Come out to our BinarySearch competition where you can test your LeetCode skills against other big brains! "
    },
    {
      uid: 28,
      title: "Build a ToDo List Android",
      time: {
        start: "2022-02-26 17:00:00-08",
        end: "2022-02-26 18:00:00-08"
      },
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/93929398367"
      },
      category: "workshop",
      host: "Codepath",
      description: "Learn more about mobile development with CodePath as they walk you through how to build a todo list app for Android!"
    },
    {
      uid: 29,
      title: "Dinner",
      time: {
        start: "2022-02-26 18:00:00-08",
        end: "2022-02-26 19:00:00-08"
      },
      location: {
        name: "Java City"
      },
      category: "main"
    },
    {
      uid: 30,
      title: "Intro to BlockChain and Cryptocurrencies",
      time: {
        start: "2022-02-26 19:00:00-08",
        end: "2022-02-26 20:00:00-08"
      },
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/93774175931"
      },
      category: "workshop",
      host: "BlockChain at UCI",
      description:
        "This workshop will include the teaching of basic blockchain and cryptocurrency knowledge to help individuals understand and get started within the industry. Blockchain similar to AI is a technology that allows you to build and solve a multitude of problems in industries such as finance, medical, real estate, and more. We will teach you how to initialize a wallet, the different types of blockchains, how to use them, various use cases, pros and cons and all the basics!"
    },
    {
      uid: 31,
      title: "Codenames",
      time: {
        start: "2022-02-26 20:00:00-08",
        end: "2022-02-26 20:30:00-08"
      },
      location: {
        name: "Zoom",
        url: "https://uci.zoom.us/j/96305543878"
      },
      category: "social",
      description:
        "You have about 12 more hours until submissions are due! OR you have 1 hour to spare for our CodeNames social event. Play the classic game CodeNames with other participants and meet new people!"
    },
    {
      uid: 32,
      title: "HackUCI Organizer Recruitment Info Session",
      time: {
        start: "2022-02-26 21:00:00-08",
        end: "2022-02-26 22:00:00-08"
      },
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/93504924348"
      },
      category: "workshop",
      host: "Hack at UCI",
      description:
        "Ever wonder what’s going on in the head of a hackathon organizer? Come out to our organizer info session to learn more about the work of Hack at UCI organizers and how you can apply to join the team!"
    },
    {
      uid: 33,
      title: "Wiki Race",
      time: {
        start: "2022-02-26 21:00:00-08",
        end: "2022-02-26 21:30:00-08"
      },
      location: {
        name: "ICS 428"
      },
      category: "social",
      description:
        "How are anteaters related to Python? Come to our WikiRace social event to find out!"
    },
    {
      uid: 34
    },
    {
      uid: 35,
      title: "Bob Ross Paint Social",
      time: {
        start: "2022-02-26 23:00:00-08",
        end: "2022-02-27 00:00:00-08"
      },
      location: {
        name: "ICS 428"
      },
      category: "social",
      description:
        "Need some relaxation after grinding out on your project submission? Come out to our Bob Ross Paintalong event and mellow out with Bob!"
    },
    {
      uid: 36
    },
    {
      uid: 37
    },
    {
      uid: 38
    },
    {
      uid: 39
    },
    {
      uid: 40
    }
  ],
  sunday: [
    {
      uid: 41,
      title: "Hacking Time",
      time: {
        start: "2022-02-26 00:00:00-08",
        end: "2022-02-26 07:00:00-08"
      },
      category: "spacer"
    },
    {
      uid: 43,
      title: "final stretch",
      time: {
        start: "2022-02-27 07:00:00-08",
        end: "2022-02-27 09:00:00-08"
      },
      category: "spacer"
    },
    {
      uid: 44,
      title: "Hacking Ends",
      time: {
        start: "2022-02-27 09:00:00-08"
      },
      category: "hacking"
    },
    {
      uid: 45,
      title: "Breakfast, Jam City Office Hours (9:30-11:30AM)",
      time: {
        start: "2022-02-27 09:00:00-08",
        end: "2022-02-27 10:00:00-08"
      },
      category: "main",
      host: "Hack at UCI",
      location: [{
        name: "Java City"
      },
    {
      name: "Zoom (Jam City)",
      url: "https://uci.zoom.us/j/94829696060"
    }]
    },
    {
      uid: 46,
      title: "Judging, Project Expo (10:30), Jam City office hours (9:30-11:30), Anduril office hours (12:00-2:00)",
      time: {
        start: "2022-02-27 10:00:00-08",
        end: "2022-02-27 13:00:00-08"
      },
      category: "main",
      host: "Hack at UCI",
      location: [{
        name: "Zoom (Jam City)",
        url: "https://uci.zoom.us/j/94829696060"
      },{
        name: "Zoom (Anduril)",
        url: "https://uci.zoom.us/j/92748572472"
      },{
        name: "DBH 6011 (Project Lounge)"
      }]
    },
    {
      uid: 47,
      title: "Closing Ceremony",
      time: {
        start: "2022-02-27 13:00:00-08",
        end: "2022-02-27 13:30:00-08"
      },
      category: "main",
      host: "Hack at UCI",
      location: [{
        name: "Zoom",
        url: "https://uci.zoom.us/j/96037500942"
      }, {
        name: "Youtube"
      }],
      description:
        "Thank you so much for attending HackUCI 2022! Come join us at the closing ceremony for the reveal of this year's winners, including hacker's choice and more!"
    },

  ]
};

export const openingCeremonyEnd = moment("2022-02-25 20:30:00-08");
export const hackingBegins = moment("2022-02-25 21:00:00-08");
export const hackingEnd = moment("2022-02-27 9:00:00-08");
export const devpostSubmission = "2022-02-27 11:00:00-08";
export const closingCeremonyEnd = moment("2022-02-27 13:30:00-08");
