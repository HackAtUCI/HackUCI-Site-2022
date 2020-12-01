import React from "react";
import "./benefits.scss";
import laptop from "assets/images/site/laptop.png";
import cats from "assets/images/site/cats.png";
import sakura from "assets/images/site/sakura.png";

const benefits = [
  {
    title: "Recruiting",
    desc:
      "Partnering with a hackathon will not only give you a direct access to recruit innovative hackers in Southern California, but you will also be able to interview and contact attendees after the event.",
    imgsrc: laptop
  },
  {
    title: "Form Relationships",
    desc:
      "Partnering with a hackathon will not only give you a direct access to recruit innovative hackers in Southern California, but you will also be able to interview and contact attendees after the event.",
    imgsrc: cats
  },
  {
    title: "Branding",
    desc:
      "We partner with valued brands to help meet their needs in brand marketing and outreach. We'll work with you to appeal to our audience in an authentic and impactful way.",
    imgsrc: sakura
  }
];

function BenefitCard(props) {
  return (
    <div className="benefit-card">
      <img className="benefit-card__img" src={props.imgsrc} alt={props.title} />
      <h1 className="benefit-card__title"> {props.title} </h1>
      <span className="benefit-card__text">{props.desc} </span>
    </div>
  );
}

function Benefits() {
  return (
    <div className="benefits">
      <h2 className="mainpage__subtitle">Benefits</h2>
      <div className="benefits__grid">
        {benefits.map(benefit => (
          <BenefitCard
            title={benefit.title}
            desc={benefit.desc}
            imgsrc={benefit.imgsrc}
          />
        ))}
      </div>
      <span>
        Check out our{" "}
        <a
          href="https://s3-us-west-1.amazonaws.com/hackuci2019/Hack2019SponsorshipPackage.pdf"
          target="_blank"
        >
          sponsorship packet
        </a>{" "}
        for more info.
      </span>
    </div>
  );
}

export default Benefits;
