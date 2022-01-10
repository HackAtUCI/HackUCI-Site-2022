import React from "react";

import selfie from "assets/images/site-2022/selfie.png";

import "./HomeDescription.scss";

function HomeDescription() {
  return (
    <section className="description-block">
      <div className="description-image-wrapper">
        <div className="description-image">
          <img
            src={selfie}
            alt="four students sitting at a table in HackUCI during a previous year"
          />
        </div>

        <div className="description-text">
          <p>
            HackUCI is the largest collegiate hackathon in Orange County and we
            continue expanding and improving our event every year. Our focus? –
            Enhance the community around us by giving students the platform to
            unleash their creativity in an environment of forward thinking
            individuals.
          </p>
          <p>
            For HackUCI 2021, we plan to unite an even more diverse and talented
            group of developers to build the technology of tomorrow!
          </p>
          <p>
            In light of current events, HackUCI 2021 has had to make many
            changes to accommodate every Hacker virtually. We are in the process
            of making many changes to ensure that all attendees can experience
            the excitement and joy of HackUCI from the comfort of your home!
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeDescription;
