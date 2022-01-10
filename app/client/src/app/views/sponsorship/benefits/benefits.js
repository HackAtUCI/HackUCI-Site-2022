import React from "react";
import "./benefits.scss";
import recruiting from "assets/images/site-2022/users_icon.svg";
import relationships from "assets/images/site-2022/handshake_icon.svg";
import branding from "assets/images/site-2022/bullhorn_icon.svg";

const benefits = [
  {
    title: "Recruiting",
    desc:
      "Connect with the best student-developers in Southern California and the rest of the nation! Meet veteran hackers and beginners looking to expand their development skills and career at your company. Through HackUCI, attendees will showcase their diverse interests, from iOS development to UI/UX to hardware. With the numerous skill sets and projects, there will be one hacker that fits your needs.",
    imgsrc: recruiting
  },
  {
    title: "Form Relationships",
    desc:
      "Our hackathon is the perfect place for companies to make their first impression on our future generation. At the event, you will be able to meet hackers 1:1 through workshops, talks, and interviews. Many of these young programmers will grow up to be the face of technology and their inspiration would have come from you!",
    imgsrc: relationships
  },
  {
    title: "Branding",
    desc:
      "Each year since 2013, HackUCI has garnered tens of thousands of visits and impressions across all of our social media, site, and mailing lists. We can provide a variety of marketing opportunities like personalized posts, raffles, shoutouts, and spread your products’ awareness and company image as an employer",
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
