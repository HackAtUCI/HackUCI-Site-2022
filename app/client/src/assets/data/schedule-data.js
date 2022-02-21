import React from "react";
import moment from "moment";

export const scheduleEvents = {
  friday: [
    {
      uid: 0,
      title: "Opening Ceremony",
      time: {
        start: "2022-02-25 18:00:00-08",
        end: "2022-02-25 19:00:00-08",
      },
      category: "main",
      host: "Hack at UCI",
      location: {
        name: "Live Stage",
        url: "/stage",
      },
      description:
        "Come to the opening ceremony for HackUCI 2022 to hear from our wonderful sponsors who make all of this possible and from us about how to navigate through the hackathon! ",
    },
    {
      uid: 1,
      title: "Check In/Security (Team Formation)",
      time: {
        start: "2022-02-25 15:00:00-08",
        end: "2022-02-25 16:00:00-08",
      },
      category: "main",
      host: "",
      location: {
        name: "Bottom of DBH",
      },
      description: "",
    },
    {
      uid: 2,
      title: "In-Person Team Formation",
      time: {
        start: "2022-02-25 16:00:00-08",
        end: "2022-02-25 17:00:00-08",
      },
      category: "main",
      host: "",
      location: {
        name: "Aldrich Park",
      },
      description: "",
    },
    {
      uid: 3,
      title: "Setup Rooms Check In/Security (All)",
      time: {
        start: "2022-02-25 17:00:00-08",
        end: "2022-02-25 18:00:00-08",
      },
      category: "main",
      host: "",
      location: {
        name: "DBH 6011, 4013, 3013, 3011, ICS 428, Bottom of DBH",
      },
      description: "",
    },
    {
      uid: 4,
      title: "Dinner",
      time: {
        start: "2022-02-25 18:00:00-08",
        end: "2022-02-25 19:00:00-08",
      },
      category: "main",
      location: {
        name: "Engineering Plaza",
      },
      description: "",
    },
    {
      uid: 5,
      title: "Setup",
      time: {
        start: "2022-02-25 20:30:00-08",
        end: "2022-02-25 21:00:00-08",
      },
      category: "main",
      host: "",
      location: {
        name: "DBH 4011",
      },
      description: "",
    },
    {
      uid: 6,
      title: "Hacking Begins",
      time: {
        start: "2022-01-29 21:00:00-08",
      },
      category: "hacking",
    },
    {
      uid: 7,
      title: "Design at UCI: Design Basics Workshop",
      time: {
        start: "2022-02-25 21:00:00-08",
        end: "2022-02-25 22:00:00-08",
      },
      category: "workshop",
      host: "Design at UCI",
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/93152877322",
      },
      description: "",
    },
    {
      uid: 8,
      title: "Setup",
      time: {
        start: "2022-02-25 22:00:00-08",
        end: "2022-02-25 23:00:00-08",
      },
      category: "workshop",
      host: "Commit the Change",
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/93152877322",
      },
      description: "",
    },
    {
      uid: 9,
      title: "PeterPortalAPI and GraphQL Workshop",
      time: {
        start: "2022-02-25 23:00:00-08",
        end: "2022-02-26 00:00:00-08",
      },
      category: "workshop",
      host: "ICS Student Council",
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/93152877322",
      },
      description: "",
    },
  ],
  saturday: [
    {
      uid: 10,
      title: "Tetris (Virtual)",
      time: {
        start: "2022-02-26 00:00:00-08",
        end: "2022-02-26 00:30:00-08",
      },
      category: "social", // double check
      host: "",
      location: {
        name: "Zoom",
        url: "https://uci.zoom.us/j/93152877322",
      },
      description: "",
    },

    {
      uid: 11,
      title: "Kahoot (IRL)",
      time: {
        start: "2022-02-26 00:30:00-08",
        end: "2022-02-26 01:00:00-08",
      },
      category: "social", // double check
      host: "",
      location: {
        name: "ICS 428",
      },
      description: "",
    },
    {
      uid: 14,
    },
    {
      uid: 15,
      title: "Hacking Time",
      time: {
        start: "2022-02-26 01:00:00-08",
        end: "2022-02-26 09:00:00-08",
      },
      category: "spacer",
    },
    {
      uid: 16,
      title: "Breakfast",
      time: {
        start: "2022-01-30 09:00:00-08",
        end: "2022-01-30 10:00:00-08",
      },
      location: {
        name: "Engineering Plaza",
      },
      category: "main",
    },
    {
      uid: 17,
      title: "What they don't tell you about Tech Interviews",
      time: {
        start: "2022-02-26 10:00:00-08",
        end: "2022-02-26 11:00:00-08",
      },
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/93152877322",
      },
      category: "workshop",
    },
    {
      uid: 18,
      title: "Hacking Time",
      time: {
        start: "2022-02-26 11:00:00-08",
        end: "2022-02-26 12:00:00-08",
      },
      category: "spacer",
    },
    {
      uid: 19,
      title: "Lunch",
      time: {
        start: "2022-01-30 09:00:00-08",
        end: "2022-01-30 10:00:00-08",
      },
      location: {
        name: "Engineering Plaza",
      },
      category: "main",
    },
    {
      uid: 20,
      title: "Capture the Flag",
      time: {
        start: "2022-02-26 13:00:00-08",
        end: "2022-02-26 14:00:00-08",
      },
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/93152877322",
      },
      host: "Cyber@UCI",
      category: "social",
    },
    {
      uid: 21,
      title: "HackUCI Organizer Recruitment Info Session",
      time: {
        start: "2022-02-26 14:00:00-08",
        end: "2022-02-26 15:00:00-08",
      },
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/93152877322",
      },
      host: "Hack at UCI",
      category: "workshop",
    },
    {
      uid: 22,
      title: "Supervised Learning for Text Classification",
      time: {
        start: "2022-02-26 15:00:00-08",
        end: "2022-02-26 16:00:00-08",
      },
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/94525375022",
      },
      host: "AI at UCI",
      category: "workshop",
    },
    {
      uid: 22,
      title: "Binary Search Competition",
      time: {
        start: "2022-02-26 16:00:00-08",
        end: "2022-02-26 17:00:00-08",
      },
      location: {
        name: "Zoom",
        url: "https://uci.zoom.us/j/98600169417",
      },
      category: "social",
    },
    {
      uid: 22,
      title: "Build a ToDo List Android",
      time: {
        start: "2022-02-26 17:00:00-08",
        end: "2022-02-26 18:00:00-08",
      },
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/93929398367",
      },
      category: "workshop",
      host: "Codepath"
    },
    {
      uid: 23,
      title: "Lunch",
      time: {
        start: "2022-01-30 18:00:00-08",
        end: "2022-01-30 19:00:00-08",
      },      location: {
        name: "Engineering Plaza",
      },
      category: "main",
    },
    {
      uid: 24,
      title: "Intro to BlockChain and Cryptocurrencies",
      time: {
        start: "2022-02-27 19:00:00-08",
        end: "2022-02-27 20:00:00-08",
      },
      location: {
        name: "ICS 428, Zoom",
        url: "https://uci.zoom.us/j/93774175931",
      },
      category: "workshop",
      host: "BlockChain at UCI"
    },
    {
      uid: 25,
      title: "Codenames (Virtual)",
      time: {
        start: "2022-02-26 20:00:00-08",
        end: "2022-02-26 21:00:00-08",
      },
      location: {
        name: "Zoom",
        url: "https://uci.zoom.us/j/96305543878",
      },
      category: "social",
    },
    {
      uid: 26,
      title: "Hacking Time",
      time: {
        start: "2022-02-26 20:30:00-08",
        end: "2022-02-26 21:00:00-08",
      },
      category: "spacer",
    },
    {
      uid: 27,
      title: "Wiki Race (IRL)",
      time: {
        start: "2022-02-26 21:00:00-08",
        end: "2022-02-26 22:00:00-08",
      },
      location: {
        name: "ICS 428",
      },
      category: "social"
    },
    {
      uid: 28,
      title: "Hacking Time",
      time: {
        start: "2022-02-26 21:30:00-08",
        end: "2022-02-26 23:00:00-08",
      },
      category: "spacer",
    },
    {
      uid: 29,
      title: "Bob Ross (IRL)",
      time: {
        start: "2022-02-26 23:00:00-08",
        end: "2022-02-27 00:00:00-08",
      },
      location: {
        name: "ICS 428",
      },
      category: "social"
    },
    {
      uid: 31,
    },
    {
      uid: 32,
    },
  ],
  sunday: [
    {
      uid: 33,
      title: "Hacking Time",
      time: {
        start: "2022-02-26 00:00:00-08",
        end: "2022-02-26 04:00:00-08",
      },
      category: "spacer",
    },
    {
      uid: 34,
      title: "Clean Up",
      time: {
        start: "2022-02-27 04:00:00-08",
        end: "2022-02-27 05:00:00-08",
      },
      category: "main",
      host: "Hack at UCI",
      location: {
        name: "Zoom",
        url: "https://uci.zoom.us/j/97345536504",
      }
    },
    {
      uid: 33,
      title: "final stretch",
      time: {
        start: "2022-01-31 05:00:00-08",
        end: "2022-01-31 09:00:00-08",
      },
      category: "spacer",
    },
      {
        uid: 34,
        title: "Hacking Ends",
        time: {
          start: "2022-02-27 09:00:00-08",
        },
        category: "hacking",
      },
      {
        uid: 35,
        title: "Breakfast, Jam City Office Hours",
        time: {
          start: "2022-02-27 09:00:00-08",
          end: "2022-02-27 10:00:00-08",
        },
        category: "main",
        host: "Hack at UCI",
        location: {
          name: "Engineering Plaza",
        },
      },
      {
        uid: 36,
        title: "Judging, Project Expo (10:30), Jam City office hours",
        time: {
          start: "2022-02-27 10:00:00-08",
          end: "2022-02-27 13:00:00-08",
        },
        category: "main",
        host: "Hack at UCI",
        location: {
          name: "Zoom (Jam City)",
          url: "https://uci.zoom.us/j/94829696060"
        },
      },
    {
      uid: 37,
      title: "Closing Ceremony",
      time: {
        start: "2022-02-27 13:00:00-08",
        end: "2022-02-27 13:30:00-08",
      },
      category: "main",
      host: "Hack at UCI",
      location: {
        name: "Zoom, Youtube",
        url: "https://uci.zoom.us/j/96037500942",
      },
      description:
        "Thank you so much for attending HackUCI 2022! Come join us at the closing ceremony for the reveal of this year's winners, including hacker's choice and more!",
    },
    {
      uid: 37,
      title: "Clean Up",
      time: {
        start: "2022-02-27 13:30:00-08",
        end: "2022-02-27 14:00:00-08",
      },
      category: "main",
      host: "Hack at UCI",
      location: {
        name: "6011, Kay Lab, 428",
      },
    },
  ],
};

export const openingCeremonyEnd = moment("2022-02-25 21:00:00-08");
export const hackingStart = moment("2022-02-25 21:00:00-08");
export const hackingEnd = moment("2022-02-27 9:00:00-08");
export const closingCeremonyEnd = moment("2022-02-27 14:00:00-08");
