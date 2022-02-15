import React from "react";
import moment from "moment";

export const scheduleEvents = {
  friday: [
    {
      uid: 0,
      title: "Opening Ceremony",
      time: { start: "2021-01-29 18:00:00-08", end: "2021-01-29 19:00:00-08" },
      category: "main",
      host: "Hack at UCI",
      location: { name: "Live Stage", url: "/stage" },
      description:
        "Come to the opening ceremony for HackUCI 2021 to hear from our wonderful sponsors who make all of this possible and from us about how to navigate through the hackathon! "
    },
    { uid: 1 },
    {
      uid: 2,
      title: "Hacking Begins",
      time: { start: "2021-01-29 19:00:00-08" },
      category: "hacking"
    },
    {
      uid: 3,
      title: "Team Formation",
      time: { start: "2021-01-29 19:00:00-08", end: "2021-01-29 20:00:00-08" },
      category: "main",
      host: "Hack at UCI",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/96532196044" },
      description:
        "Don't have a team? No worries! Find some cool hackers you can work with to create an awesome new project at HackUCI. Hosted on Zoom, this event will involve icebreakers in order to help you find your dream team!"
    },
    { uid: 4 },
    {
      uid: 5,
      title: "kickoff",
      time: { start: "2021-01-29 20:00:00-08", end: "2021-01-29 20:30:00-08" },
      category: "spacer"
    },
    {
      uid: 6,
      title: "Introduction to Wireframing",
      time: { start: "2021-01-29 20:30:00-08", end: "2021-01-29 21:00:00-08" },
      category: "workshop",
      host: "Design at UCI",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/92102277036" },
      description:
        "Wireframes are essential for laying out key features. Learn how to turn your sketches and ideas into digital low fidelity wireframes on Figma with Design at UCI!"
    },
    {
      uid: 7,
      title: "do you have a team?",
      time: { start: "2021-01-29 21:00:00-08", end: "2021-01-29 21:30:00-08" },
      category: "spacer"
    },
    {
      uid: 8,
      title: "Supervised Learning with Online Datasets",
      time: { start: "2021-01-29 21:30:00-08", end: "2021-01-29 22:30:00-08" },
      category: "workshop",
      host: "AI@UCI",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/92337528201" },
      description:
        "AI@UCI will go over dataset analysis to help you decide the problem space that you would like to explore for your project. They will also introduce fundamental ideas to keep in mind when putting together a model, such as data pre-processing and algorithm selection."
    },
    { uid: 9 },
    {
      uid: 10,
      title: "do you have an idea?",
      time: { start: "2021-01-29 22:30:00-08", end: "2021-01-29 23:00:00-08" },
      category: "spacer"
    },
    {
      uid: 11,
      title: "Intro to Web Dev",
      time: { start: "2021-01-29 23:00:00-08", end: "2021-01-30 00:00:00-08" },
      category: "workshop",
      host: "WICS",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/98180861681" },
      description: (
        <>
          Come build a Netflix tracker site with HTML, JavaScript, and
          Bootstrap, fully complete with a Flask and Mongo backend! You'll learn
          how to connect the frontend and backend parts of websites and build a
          full-stack app! The{" "}
          <a href="https://github.com/kaseychuang/hackuci2021-web-dev-workshop">
            web dev workshop starter code repository
          </a>{" "}
          has everything you need to get started.
        </>
      )
    },
    { uid: 12 }
  ],
  saturday: [
    {
      uid: 13,
      title: "Bob Ross Paint-along",
      time: { start: "2021-01-30 00:00:00-08", end: "2021-01-30 01:00:00-08" },
      category: "social",
      host: "Hack at UCI",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/99631594481" },
      description: (
        <>
          Take a break with us and vibe with Bob Ross! Using any medium of your
          choice, follow along and let's create a masterpiece of{" "}
          <em>beautiful scenery</em>.
        </>
      )
    },
    { uid: 14 },
    {
      uid: 15,
      title: "hacking time",
      time: { start: "2021-01-30 01:00:00-08", end: "2021-01-30 10:00:00-08" },
      category: "spacer"
    },
    { uid: 16 },
    { uid: 17 },
    { uid: 18 },
    { uid: 19 },
    { uid: 20 },
    { uid: 21 },
    { uid: 22 },
    { uid: 23 },
    { uid: 24 },
    { uid: 25 },
    { uid: 26 },
    { uid: 27 },
    { uid: 28 },
    { uid: 29 },
    { uid: 30 },
    { uid: 31 },
    { uid: 32 },
    {
      uid: 33,
      title: "Android Workshop",
      time: { start: "2021-01-30 10:00:00-08", end: "2021-01-30 11:00:00-08" },
      category: "workshop",
      host: "CodePath at UCI",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/93639867877" },
      description: (
        <>
          Learn the basics of Android Studio and Android Development while
          building a simple to-do app! Check out the{" "}
          <a href="https://github.com/powerserg23/SimpleTodo">
            SimpleTodo starter code repository
          </a>{" "}
          to get started.
        </>
      )
    },
    { uid: 34 },
    {
      uid: 35,
      title: "Add SMS and Phone Calls to your App with Twilio",
      time: { start: "2021-01-30 11:00:00-08", end: "2021-01-30 12:00:00-08" },
      category: "workshop",
      host: "Twilio",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/95513051338" },
      description:
        "Learn how to add communication capabilities like SMS, Voice, and more to your apps with Twilio in languages like JavaScript and Python!"
    },
    { uid: 36 },
    {
      uid: 37,
      title: "iOS Workshop",
      time: { start: "2021-01-30 12:00:00-08", end: "2021-01-30 13:00:00-08" },
      category: "workshop",
      host: "CodePath at UCI",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/92242497167" },
      description:
        "Learn the basics of Xcode and build a simple iOS app to learn about Swift and TableViews!"
    },
    { uid: 38 },
    {
      uid: 39,
      title: "APIs 101 Workshop",
      time: { start: "2021-01-30 13:00:00-08", end: "2021-01-30 14:00:00-08" },
      category: "workshop",
      host: "Postman",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/92667305530" },
      description:
        "Learn the basics of APIs while using the powerful industry-standard tool Postman!"
    },
    { uid: 40 },
    {
      uid: 41,
      title: "Flutter Workshop",
      time: { start: "2021-01-30 14:00:00-08", end: "2021-01-30 15:00:00-08" },
      category: "workshop",
      host: "ICS Student Council",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/95107919527" },
      description:
        "Learn the basics of Flutter, a mobile UI framework with ICSSC! Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase."
    },
    { uid: 42 },
    {
      uid: 43,
      title: "Valorant [Deathmatch]",
      time: { start: "2021-01-30 15:00:00-08", end: "2021-01-30 17:00:00-08" },
      category: "social",
      host: "TAG at UCI",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/95905422422" },
      description: (
        <>
          Need a break from hacking? Come compete against other hackers in mini
          Valorant Deathmatch hosted by The Association of Gamers at UCI!{" "}
          <strong>Top 3 will win a prize announced in the Zoom session!</strong>
        </>
      )
    },
    { uid: 44 },
    { uid: 45 },
    { uid: 46 },
    {
      uid: 47,
      title: "afternoon break",
      time: { start: "2021-01-30 17:00:00-08", end: "2021-01-30 17:30:00-08" },
      category: "spacer"
    },
    {
      uid: 48,
      title: "Game Development with Unity",
      time: { start: "2021-01-30 17:30:00-08", end: "2021-01-30 18:30:00-08" },
      category: "workshop",
      host: "VGDC at UCI",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/97374139351" },
      description: (
        <>
          Learn the foundations of game development and gain the tools and
          skills for using the Unity game engine. Have a look at the{" "}
          <a href="https://docs.google.com/presentation/d/1j4mWpNDLpyDPNJQeLIwZGaMbFlExqhc4KxHdZtT5uBQ/view">
            VGDC Workshop Slides
          </a>{" "}
          for more information.
        </>
      )
    },
    { uid: 49 },
    {
      uid: 50,
      title: "Tetris Party",
      time: { start: "2021-01-30 18:30:00-08", end: "2021-01-30 19:00:00-08" },
      category: "social",
      host: "Hack at UCI",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/99614462948" },
      description:
        "Who doesn't love a good game of Tetris? Play a few rounds for a quick break from coding!"
    },
    {
      uid: 51,
      title: "Cyber Challenge: Capture The Flag",
      time: { start: "2021-01-30 19:00:00-08", end: "2021-01-30 20:00:00-08" },
      category: "social",
      host: "Cyber @ UCI and CodePath at UCI",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/91717454007" },
      description: (
        <>
          Come test out your hacking skills in this <em>beginner-friendly</em>{" "}
          Cyber Challenge! Your mission is to find <i>flags</i> hidden within
          the various cybersecurity challenges.{" "}
          <strong>No prior experience necessary</strong>.
        </>
      )
    },
    { uid: 52 },
    {
      uid: 53,
      title: "Speed Social Networking",
      time: { start: "2021-01-30 20:00:00-08", end: "2021-01-30 21:00:00-08" },
      category: "social",
      host: "Hack at UCI",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/94965219479" },
      description:
        "Come join us for some Speed Social Networking and meet with your fellow hackers, mentors, and organizers in a one-on-one setting in this fun chat roulette!"
    },
    { uid: 54 },
    {
      uid: 55,
      title: "Binary Search",
      time: { start: "2021-01-30 21:00:00-08", end: "2021-01-30 22:00:00-08" },
      category: "social",
      host: "Hack at UCI",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/92199376959" },
      description: (
        <>
          Have you ever wanted to Leetcode and Chill with your homies? Come out
          for a round of binarysearch to solve a few problems! Make an account
          beforehand at <a href="https://binarysearch.com">binarysearch.com</a>.{" "}
          <strong>
            Note: Participants will be entered in a raffle for a chance to win a
            binarysearch T-shirt!
          </strong>
        </>
      )
    },
    { uid: 56 },
    {
      uid: 57,
      title: "evening break",
      time: { start: "2021-01-30 22:00:00-08", end: "2021-01-30 22:30:00-08" },
      category: "spacer"
    },
    {
      uid: 58,
      title: "Scattergories",
      time: { start: "2021-01-30 22:30:00-08", end: "2021-01-30 23:00:00-08" },
      category: "social",
      host: "Hack at UCI",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/91848021302" },
      description:
        "Test your ability to think fast and come up with witty words and phrases that fit into categories in a fun game of Scattergories."
    },
    {
      uid: 59,
      title: "How to Effectively Pitch Your Project",
      time: { start: "2021-01-30 23:00:00-08", end: "2021-01-30 23:30:00-08" },
      category: "workshop",
      host: "MAISS",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/92097042440" },
      description:
        "Do you want to blow away the judges with an amazing project pitch? Come learn how to effectively communicate your project’s technical and entrepreneurial strengths with MAISS at UCI!"
    },
    {
      uid: 60,
      title: "just chill",
      time: { start: "2021-01-30 23:30:00-08", end: "2021-01-31 00:00:00-08" },
      category: "spacer"
    }
  ],
  sunday: [
    {
      uid: 61,
      title: "Skribbl.io",
      time: { start: "2021-01-31 00:00:00-08", end: "2021-01-31 00:30:00-08" },
      category: "social",
      host: "Hack at UCI",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/94949421684" },
      description: (
        <>
          Need a break from the hacking? Show off your amazing art (or random
          guessing) skills with us at{" "}
          <a href="https://skribbl.io">skribbl.io</a>! Each player will take
          turns drawing a certain prompt and the rest of the players will
          attempt to decipher your <del>messy</del> beautiful piece of art!
        </>
      )
    },
    {
      uid: 62,
      title: "night rush",
      time: { start: "2021-01-31 00:30:00-08", end: "2021-01-31 07:00:00-08" },
      category: "spacer"
    },
    { uid: 63 },
    { uid: 64 },
    { uid: 65 },
    { uid: 66 },
    { uid: 67 },
    { uid: 68 },
    { uid: 69 },
    { uid: 70 },
    { uid: 71 },
    { uid: 72 },
    { uid: 73 },
    { uid: 74 },
    {
      uid: 75,
      title: "final stretch",
      time: { start: "2021-01-31 07:00:00-08", end: "2021-01-31 09:00:00-08" },
      category: "spacer"
    },
    { uid: 76 },
    { uid: 77 },
    { uid: 78 },
    {
      uid: 79,
      title: "Office Hours",
      time: { start: "2021-01-31 09:00:00-08", end: "2021-01-31 11:00:00-08" },
      category: "main",
      host: "Hack at UCI",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/97345536504" },
      description:
        "Need help submitting to Devpost? Got any logistical questions? Want to talk to HackUCI 2021 organizers? This is the place for you! Drop into this Zoom session and ask away."
    },
    { uid: 80 },
    { uid: 81 },
    { uid: 82 },
    {
      uid: 83,
      title: "Hacking Ends",
      time: { start: "2021-01-31 11:00:00-08" },
      category: "hacking"
    },
    { uid: 84 },
    { uid: 85 },
    { uid: 86 },
    {
      uid: 87,
      title: "Professional Development Workshop",
      time: { start: "2021-01-31 12:30:00-08", end: "2021-01-31 13:30:00-08" },
      category: "workshop",
      host: "Northrop Grumman",
      location: { name: "Zoom", url: "https://uci.zoom.us/j/91434821444" },
      description:
        "Interested in hearing from Northrop Grumman about professional development? Come listen to their university recruiting and relations team talk about tips on resume building, interviewing, and more!"
    },
    { uid: 88 },
    { uid: 89 },
    { uid: 90 },
    { uid: 91 },
    { uid: 92 },
    { uid: 93 },
    { uid: 94 },
    { uid: 95 },
    { uid: 96 },
    { uid: 97 },
    {
      uid: 98,
      title: "Closing Ceremony",
      time: { start: "2021-01-31 18:00:00-08", end: "2021-01-31 19:00:00-08" },
      category: "main",
      host: "Hack at UCI",
      location: { name: "Live Stage", url: "/stage" },
      description:
        "Thank you so much for attending HackUCI 2021! Come join us at the closing ceremony for the reveal of this year's winners, including hacker's choice and more!"
    },
    { uid: 99 }
  ]
};

export const hackingStart = moment("2022-02-29 18:00:00-08");
export const hackingEnd = moment("2022-02-31 11:00:00-08");
export const hackingBegins = "2022-02-25 11:00:00-08";
export const devpostSubmission = "2022-02-27 11:00:00-08";
