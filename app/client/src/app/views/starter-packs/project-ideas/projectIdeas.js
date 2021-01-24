import React, { useEffect, useState } from "react";

import apiLinks from "assets/data/api-links.json";
import { motion } from "framer-motion";

import "./projectIdeas.scss";

let appTypes = ["Mobile App", "Website", "IoT App", "Hardware Hack"];

function ProjectIdeas() {
  const [appType, setAppType] = useState(null);
  const [apiItem, setApiItem] = useState(null);

  useEffect(() => {
    getPublicApi();
  }, []);

  async function getPublicApi() {
    let randomType = appTypes[Math.floor(Math.random() * appTypes.length)];
    let randomItem = apiLinks[Math.floor(Math.random() * apiLinks.length)];
    setAppType(randomType);
    setApiItem(randomItem);
  }

  function renderSentence() {
    return (
      <p className="random-sentence">
        Build a{" "}
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{
            duration: 1.5
          }}
        >
          {appType}
        </motion.span>{" "}
        that uses/can{" "}
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{
            duration: 1.5
          }}
        >
          <a href={apiItem.link} target="_blank" rel="noopener noreferrer">
            {apiItem.description}
          </a>
        </motion.span>
      </p>
    );
  }

  return (
    <div className="project-ideas">
      <h2>Random Project Idea</h2>
      <div className="project-ideas-card">
        {appType && apiItem ? (
          renderSentence()
        ) : (
          <p>Roll a random project idea!</p>
        )}
      </div>
    </div>
  );
}

export default ProjectIdeas;
