import React from "react";
// Import to allow JSX tags

let faqQuestions = [
  {
    question: "What is a hackathon?",
    answer:
      "We at HackUCI like to believe that a hack-a-thon is very much like an invent-a-thon where like-minded individuals with various different backgrounds and skill sets come together for 36 hours to “invent” something from the ground up. The only thing limiting what you build is your own creativity — we’ll provide the rest."
  },
  {
    question: "Who can attend?",
    answer:
      "Any student over the age of 18 by February 25, 2022 with residence in the United States of America. To comply with COVID-19 guidelines, only a limited number of UCI students will be permitted to attend the hackathon in person. All other hackers will be accommodated for virtually. Teams consisting of in-person and virtual hackers will be permitted."
  },
  {
    question: "Is there a Code of Conduct?",
    answer: (
      <>
        Yep! We expect all of our hackers to abide by the rules set forth in our{" "}
        <u>
          <a href="https://docs.google.com/document/d/e/2PACX-1vTSYn2b66o9O1N8ybA8qctuZL6E53dxwVajGrZpG6A8aXhkYdr8OFDdKDCGkt4HhJ2wr-vY1fuyKA8U/pub">
            Code of Conduct
          </a>
        </u>
        .
      </>
    )
  },
  {
    question: "What should I create?",
    answer:
      "You can build whatever you can dream of, whether that be a website with an amazing feature, a phone app, or a rad piece of hardware! Our only rule is that all code must be written during the hackathon itself. Feel free to use open source libraries and APIs; companies attending may provide their own as well. Impress us!"
  },
  {
    question: "What should I bring?",
    answer:
      "For those attending in-person (UCI students only), we recommend bringing your device and needed charger, a clean face covering under UCI’s executive directive on face coverings, a refillable water bottle, earphones, any desired peripherals, and some scratch paper for whiteboarding ideas. IMPORTANT: If you are attending on campus, you must have a valid UCI Student ID and provide a negative COVID test taken within the last 72 hours. If you plan to stay overnight, don’t forget any personal hygiene items (there are no showers on site) and a comfy change of clothes if desired. Virtual hackers should have a stable internet connection to participate. For all attendees, you will need a positive attitude and a willingness to try new technologies!"
  },
  {
    question: "When do applications close?",
    answer:
      "Due to this year’s hybrid nature, we will be reviewing applications on a rolling basis until end of day, Friday, February 25th, 2022. But don’t wait! We will close out our slots for in-person once we reach our designated capacity."
  },
  {
    question: "When will application decisions be released?",
    answer:
      "HackUCI 2022 will have rolling admissions, starting February 16th. There will be at least 3 waves of acceptances leading up to the event."
  },
  {
    question: "Do I sign up as a team or individual?",
    answer:
      "You will apply as an individual. We will be personally reviewing each application and accepting on an individual basis."
  },
  {
    question: "How will team formations work for admitted students?",
    answer:
      "We will be helping with team formations prior to the event and creating a Slack channel for communicating. Teams will be up to 5 hackers; however, there will only be a max of 4 prizes awarded to each winning team. If this matters to you, we recommend having a team of 4 or less."
  },
  {
    question: "Are there sponsors and prizes?",
    answer: "Of course! Get hyped!"
  },
  {
    question:
      "What if I have no prior experience in programming, coding, or hackathons?",
    answer:
      "We don’t expect hackers to have any prior experience. We will be providing starter packs and workshops to help new hackers get started on projects and learn new technologies."
  },
  {
    question:
      "Am I allowed to come with a project pre-built or will I be building the project from scratch?",
    answer:
      "You will be building projects from scratch, although we will be offering starter packs to help you get started if you are a beginner hacker. You are encouraged to come with ideas of what you want to build."
  },
  {
    question: "What platform will you be using to host HackUCI?",
    answer:
      "We'll be using Slack to provide announcements and facilitate communication between mentors, hackers, and organizers. Workshops and ceremonies will be live-streamed on Zoom!"
  },
  {
    question:
      "How do you plan to keep the sense of community in an online event?",
    answer:
      "For both in-person and virtual attendees, we will leverage the platforms and technologies mentioned above to facilitate networking amongst hackers, mentors, and sponsors! Additionally, we will keep the spirit of the hackathon alive via numerous hybrid-friendly events including socials and workshops. We intend to provide a more balanced experience for both in-person and virtual participants."
  },
  {
    question: "I have another question!",
    answer: (
      <>
        Please email us at <a href="mailto:hack@uci.edu">hack@uci.edu</a> if you
        have any additional questions! We look forward to hearing from you.
      </>
    )
  }
];

export { faqQuestions };
