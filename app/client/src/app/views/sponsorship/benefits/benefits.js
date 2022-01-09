import React from "react";
import "./benefits.scss";
import recruiting from "assets/images/site-2022/users_icon.svg";
import relationships from "assets/images/site-2022/handshake_icon.svg";
import branding from "assets/images/site-2022/bullhorn_icon.svg";

const benefits = [
  {
    title: "Recruiting",
    desc:
      "With a virtual environment, we no longer have the capacity limits of a room; this allows us to accept vastly more talented students for your company to recruit for internships and full-time jobs! Our attendees all possess diverse interests, from AI to graphic design to hardware, with many of them having internship experience.",
    imgsrc: recruiting
  },
  {
    title: "Form Relationships",
    desc:
      "Our hackathon will be the perfect place for companies to make their first impression on our future generation. At the event, you will be able to meet hackers 1:1 through workshops, talks, and interviews. Many of these young programmers will grow up to be the face of technology and their inspiration would have come from you!",
    imgsrc: relationships
  },
  {
    title: "Branding",
    desc:
      "Each year since 2013, HackUCI has garnered tens of thousands of visits and impressions across all of our social media, site, and mailing lists. We can provide a variety of marketing opportunities like personalized posts, raffles, shoutouts, and more to promote and increase your brand and company image.",
    imgsrc: branding
  }
];

function BenefitCard(props) {
  return (
    <div className="benefit-card">
      <img className="benefit-card__img" src={props.imgsrc} alt={props.title} />
      <h1 className="benefit-card__title"> {props.title} </h1>
      <div className="benefit-card__text">
        <span>{props.desc} </span>
      </div>
    </div>
  );
}

function Benefits() {
  return (
    <div className="benefits">
      <h2 className="mainpage__subtitle">Benefits</h2>
      <div className="mainpage__subtext-container">
        <span>
          Check out our{" "}
          <a
            className="mainpage__subtext--link"
            href="https://hack.ics.uci.edu/sponsorship-deck"
            target="_blank"
            rel="noopener noreferrer"
          >
            sponsorship packet
          </a>{" "}
          for more info.
        </span>
      </div>
      <div className="benefits__grid">
        {benefits.map(benefit => (
          <BenefitCard
            key={benefit.title}
            title={benefit.title}
            desc={benefit.desc}
            imgsrc={benefit.imgsrc}
          />
        ))}
      </div>
    </div>
  );
}

export default Benefits;
