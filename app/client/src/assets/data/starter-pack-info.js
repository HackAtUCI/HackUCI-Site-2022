import React from "react";

let starterPackData = [
  {
    name: "User Interface",
    description: "Build a frontend you can interact with!",
    packs: [
      {
        name: "ZotHacks React Frontend",
        link: "https://github.com/hackuci/zothacks-2020-frontend",
        tooltip:
          "Checkout the frontend project and video tutorial from ZotHacks 2020! A great first step to getting started with a React frontend."
      },
      {
        name: "iOS App Development Workshop",
        link:
          "https://drive.google.com/file/d/1ArpHjIG1f_5fogtNDPk56dt6QyDKf0re/view",
        tooltip:
          "CodePath at UCI walks you through the basics of Xcode and how to build a simple iOS app for displaying a list of items."
      },
      {
        name: "Android Zothacks Workshop",
        link:
          "https://drive.google.com/file/d/1IixnR7Lp__E-bocrmFbcdWm5q74zsKVI/view",
        tooltip:
          "CodePath at UCI teaches you how to build a simple To-Do app in Android Studio."
      },
      {
        name: "ReactJS",
        link: "https://reactjs.org/",
        tooltip:
          "Official documentation for ReactJS, a JavaScript library for building user interfaces"
      }
    ]
  },
  {
    name: "Backend",
    description: "Build an API for data management and processing!",
    packs: [
      {
        name: "ZotHacks Flask Backend",
        link: "https://github.com/hackuci/zothacks-2020-backend",
        tooltip:
          "Checkout the backend project and video tutorial from ZotHacks 2020! A great first step to getting started with a Flask backend."
      },
      {
        name: "FastAPI",
        link: "https://fastapi.tiangolo.com/",
        tooltip:
          "Official documentation for FastAPI, a modern, fast, web framework for building APIs with Python 3.6+"
      },
      {
        name: "Wolfram",
        link: "/starter-packs/wolfram",
        tooltip:
          "Wolfram Alpha's sponsored backend services. Requires a little bit of setup!",
        content: (
          <>
            <h2>Wolfram Alpha API</h2>
            <p>Here is where the instructions will sit</p>
          </>
        )
      }
    ]
  },
  {
    name: "Gaming",
    description: "Build the next chart topping indie game!",
    packs: [
      {
        name: "Unity",
        link: "https://docs.unity3d.com/Manual/index.html",
        tooltip:
          "Official documentation for Unity, a cross-platform game engine"
      },
      {
        name: "Gadot",
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
    description: "Gotta build your projects with something!",
    packs: [
      {
        name: "Git",
        link: "https://github.com/zpinto/learn-git-with-hack",
        tooltip:
          "A complete tutorial on how to get started with Git, a version-control system"
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
