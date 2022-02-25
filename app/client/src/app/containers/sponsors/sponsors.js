import React from "react";
import "./sponsors.scss";

export default function Sponsors(props) {
  return (
    <div className="sponsors-container">
      <div className="sponsors-container__images">
        {props.figmaSponsor ? (
          <div className="sponsors-container__images-grid">
            <a
              key={props.figmaSponsor.name}
              href={props.figmaSponsor.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="sponsors-image"
                style={{ width: "45%" }}
                src={props.figmaSponsor.src}
                alt={props.figmaSponsor.name}
              />
            </a>
          </div>
        ) : null}
        <div className="sponsors-container__images-grid">
          {props.sponsors.map(sponsor => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="sponsors-image"
                src={sponsor.src}
                alt={sponsor.name}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
