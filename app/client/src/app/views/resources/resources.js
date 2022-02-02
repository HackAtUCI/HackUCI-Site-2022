import React from "react";

import "./resources.scss";

import { Tooltip } from "app/components";
import { starterPackData } from "assets/data/starter-pack-info.js";

import ProjectIdeas from "./project-ideas/projectIdeas";

function Resources({ match }) {
  function getOptionalContent(optionalName) {
    for (let i = 0; i < starterPackData.length; i++) {
      for (let j = 0; j < starterPackData[i].packs.length; j++) {
        let items = starterPackData[i].packs[j].link.split("/");
        if (
          items.length > 0 &&
          items[items.length - 1].toLowerCase() === optionalName
        ) {
          return starterPackData[i].packs[j].content;
        }
      }
    }
    return null;
  }

  if (match.params.optionalDirections) {
    return (
      <div className="starter-packs">
        <div className="starter-packs-instructions">
          {getOptionalContent(match.params.optionalDirections)}
        </div>
      </div>
    );
  } else {
    return (
      <div className="starter-packs">
        <ProjectIdeas />
        <h2 style={{ marginBottom: "2rem" }}>Resources</h2>
        {starterPackData.map(function(starterPack) {
          return (
            <div className="starter-pack-card" key={starterPack.name}>
              <div className="starter-pack-card-information">
                <h3>{starterPack.name}</h3>
                <p>{starterPack.description}</p>
              </div>
              <div className="starter-pack-card-links">
                {starterPack.packs.map(function(pack) {
                  return (
                    <Tooltip content={pack.tooltip} key={pack.name}>
                      <a
                        className="starter-pack-card-link"
                        href={pack.link}
                        target={pack.link.startsWith("/") ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                      >
                        <div>
                          <h4>{pack.name}</h4>
                        </div>
                      </a>
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Resources;
