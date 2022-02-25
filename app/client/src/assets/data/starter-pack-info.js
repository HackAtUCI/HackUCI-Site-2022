import React from "react";

import Cogs from "../icons/cogs 1.png";
import Desktop from "../icons/desktop 1.png";
import Controller from "../icons/gamepad 1.png";
import Tools from "../icons/tools 1.png";

let starterPackData = [
  {
    name: "User Interface",
    icon: Desktop,
    description: "Build a frontend you can interact with!",
    packs: [
      {
        name: "React",
        link: "https://beta.reactjs.org/learn",
        tooltip:
          "Learn how to use React, a JavaScript library for building user interfaces"
      },
      {
        name: "ZotHacks React Frontend",
        link: "https://github.com/hackuci/zothacks-2020-frontend",
        tooltip:
          "Checkout the frontend project and video tutorial from ZotHacks 2020! A great first step to getting started with a React frontend."
      },
      {
        name: "Figma Giveaway",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfeaWeXJvj_ZbZZCCb54gh83RS4hmz30g4H_L0jPKqP7KwFHQ/viewform",
        tooltip: 
          "Figma is giving away $100 worth of Figma swag to anyone who verifies their education status over the weekend!"
      },
      {
        name: "iOS App Development Workshop",
        link: "https://www.youtube.com/watch?v=50Uxl6hz3Ug",
        tooltip:
          "CodePath at UCI walks you through the basics of Xcode and how to build a simple iOS app for displaying a list of items."
      },
      {
        name: "Android Zothacks Workshop",
        link: "https://www.youtube.com/watch?v=u0tNBjglS2M",
        tooltip:
          "CodePath at UCI teaches you how to build a simple To-Do app in Android Studio."
      }
    ]
  },
  {
    name: "Backend",
    icon: Cogs,
    description: "Build an API for data management and processing!",
    packs: [
      {
        name: "ZotHacks Flask Backend",
        link: "https://github.com/hackuci/zothacks-2020-backend",
        tooltip:
          "Checkout the backend project and video tutorial from ZotHacks 2020! A great first step to getting started with a Flask backend."
      },
      {
        name: "Free Public APIs",
        link: "https://github.com/public-apis/public-apis",
        tooltip:
          "A collective list of free APIs for use in software and web development."
      },
      {
        name: "PeterPortal - An Unofficial API for UCI",
        link: "https://api.peterportal.org/",
        tooltip:
          "PeterPortal API provides consolidated data about UCI professors, courses, and grades."
      },
      {
        name: "Lyrid",
        link: "/resources/lyrid",
        tooltip:
          "Lyrid is a multi-cloud solution which makes it easy to code, deploy, and manage your cloud-native web applications.",
        content: (
          <>
            <h2>Lyrid</h2>
            <p>
              Lyrid is a multi-cloud solution which makes cloud native developments automated and affordable.
              Code, Deploy, and Manage your cloud-native web applications without any platform dependency.
              Register for free {" "}
              <a href="https://app.lyrid.io/register/campaign?_key=HACKUCIQ12022">
                here
              </a>
              .
            </p>
            <h3>Using Lyrid for authentication</h3>
            <p>
              Check out this authentication guide: {" "}
              <a 
                href="https://www.canva.com/design/DAE5HIknNSY/h6CRKv8lrmlW6I-ibrOjkQ/view?utm_content=DAE5HIknNSY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
                target="_blank"
              >
               Lyrid's Sheliak Demo 
              </a>
              ! Sheliak is an open source addition to Lyrid's services which offers authentication services for all developers regardless of experience level.
            </p>
            <h3>Multi-Cloud Deployment Tutorial Video</h3>
            <p>Learn how to use Lyrid to easily deploy your infrastructure in seconds!</p>
            <iframe src="https://drive.google.com/file/d/1CRtSioBawbtjkEm4_GByne1GX2DlQCvl/preview" allow="autoplay"></iframe>
          </>
        )
      },
      {
        name: "Mage",
        link: "/resources/mage",
        tooltip:
          "Mage helps you harness the power of AI.",
        content: (
          <>
            <h2>Mage</h2>
            <p>
              Mage will help you become an AI expert through guided suggestions on what to do to your data and how to improve your model training.
              AI and its predictions are difficult to understand. Mage teaches you how your ranking model works, explaining each metric. Ultimately, helping you get insights from your data.
            </p>
            <p>
              Here are some guides from Mage:
              <ul>
                <li>
                  <a 
                    href="https://mageai.notion.site/How-Mage-works-806b232d478a456b9ae8bd40bb77f4b3" 
                    target="_blank"
                  >
                    How Mage Works
                  </a>
                </li>
                <li>
                  <a 
                    href="https://mageai.notion.site/Basic-quick-start-guide-6e26bc35b6fc41a29f3047cfdb109cb5" 
                    target="_blank"
                  >
                    User Guides
                  </a>
                </li>
                <li>
                  <a 
                    href="https://mageai.notion.site/Mage-AI-Use-Cases-a435770e1e6e4bbeb7294e6da6fa1bcf" 
                    target="_blank"
                  >
                    Customer Use Cases
                  </a>
                </li>
              </ul>
            </p>
          </>
        )
      }
    ]
  },
  {
    name: "Gaming",
    icon: Controller,
    description: "Build the next chart topping indie game!",
    packs: [
      {
        name: "Unity",
        link: "https://docs.unity3d.com/Manual/index.html",
        tooltip:
          "Official documentation for Unity, a cross-platform game engine"
      },
      {
        name: "Godot",
        link: "https://godotengine.org/",
        tooltip:
          "Godot provides a huge set of common tools for game development"
      },
      {
        name: "PyGame",
        link: "https://www.pygame.org/wiki/GettingStarted",
        tooltip:
          "Official documentation for PyGame, a cross-platform set of Python modules designed for writing video games"
      }
    ]
  },
  {
    name: "Tools",
    icon: Tools,
    description: "Gotta build your projects with something!",
    packs: [
      {
        name: "Git",
        link: "https://github.com/zpinto/learn-git-with-hack",
        tooltip:
          "A complete tutorial on how to get started with Git, a version-control system"
      },
      {
        name: "VS Code",
        link: "https://code.visualstudio.com/",
        tooltip: 
          "A streamlined code editor with support for development operations like debugging, task running, and version control."
      },
      {
        name: "Ngrok",
        link: "https://ngrok.io",
        tooltip:
          "Instantly create a public HTTPS url for a website running locally on your development machine using Ngrok"
      },
      {
        name: "Postman",
        link: "https://www.getpostman.com/",
        tooltip:
          "A great tool for testing RESTful APIs made by others or yourself"
      }
    ]
  }
];

export { starterPackData };
