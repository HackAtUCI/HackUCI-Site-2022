import React from "react";

import "./more-info.scss";

function MoreInfo() {
  return (
    <div id="info-container">
      <h2 className="title">What's in it for you?</h2>
      <div className="reason">
        <div className="reason-title">Recruiting</div>
        <div className="reason-text">
          Partnering with a hackathon will not only give you a direct access to
          recruit innovative hackers in Southern California, but you will also
          be able to interview and contact attendees after the event.
        </div>
      </div>
      <div className="reason">
        <div className="reason-title">Forming Relationships</div>
        <div className="reason-text">
          Assisting hackers with your APIs, products, and services fosters
          relationships with participants. Some of them might well be technology
          leaders of the future. Let them get to know you as the company that
          makes the best first impression.
        </div>
      </div>
      <div className="reason">
        <div className="reason-title">Branding</div>
        <div className="reason-text">
          We partner with valued brands to help meet their needs in brand
          marketing and outreach. We'll work with you to appeal to our audience
          in an authentic and impactful way.
        </div>
      </div>
      <div className="reason">
        <div className="reason-title">More Info?</div>
        <div className="reason-text">
          If you want more information, check out our{" "}
          <a
            id="sponsorship-packet"
            target="_blank"
            href="https://s3-us-west-1.amazonaws.com/hackuci2019/Hack2019SponsorshipPackage.pdf"
          >
            sponsorship packet
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
