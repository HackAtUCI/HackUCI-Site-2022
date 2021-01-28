import React from "react";
import "./sponsors.scss";

export default function Sponsors({ sponsors }) {
  return (
    <div className="sponsors-container">
      <div className="sponsors-container__images">
        <div className="sponsors-container__images-grid">
          {sponsors.map(sponsor => (
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
