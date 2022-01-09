import React, { useEffect } from "react";
import "./home.scss";

import Fade from "react-reveal/Fade";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

import { faqQuestions } from "assets/data/faq-questions";
import { FAQCollapse } from "app/containers";
import { Fireflies } from "app/components";
import { useWindowSize } from "app/hooks";
import CurrentSponsors from "./current-sponsors/currentSponsors";
import CurrentPartners from "./current-partners/currentPartners";
import selfie from "assets/images/site-2022/selfie.png";
import antMentor from "assets/images/site-2022/mentor.png";
import whiteCloudBorderTop from "assets/images/site-2022/white_cloud_border_top.svg";
import whiteCloudBorderBottom from "assets/images/site-2022/white_cloud_border_bottom.svg";
import antSponsor from "assets/images/site-2022/sponsor.png";
import topWave from "assets/images/site-2022/top white wave.png";

function Home() {
  const { scrollYProgress } = useViewportScroll();
  const { width } = useWindowSize();
  const opacity = useTransform(
    scrollYProgress,
    [0, width < 1250 ? 0.1 : 0.25],
    [1, 0]
  );

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <div className="home">
      <div className="home-image" />
      <section className="home-banner">
        <div className="banner-image" />
        <motion.div className="banner-info">
          <h1>
            <span className="hack">HackUCI</span>
          </h1>
          <h3>February 20-22, 2022</h3>
          <Link
            to="/apply"
            className="btn btn-hack fit-content"
            aria-label="Apply to HackUCI 2021"
          >
            Apply Now
          </Link>
        </motion.div>
      </section>
      <div className="remaining-gradient">
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
                HackUCI is the largest collegiate hackathon in Orange County and
                we continue expanding and improving our event every year. Our
                focus? – Enhance the community around us by giving students the
                platform to unleash their creativity in an environment of
                forward thinking individuals.
              </p>
              <p>
                For HackUCI 2021, we plan to unite an even more diverse and
                talented group of developers to build the technology of
                tomorrow!
              </p>
              <p>
                In light of current events, HackUCI 2021 has had to make many
                changes to accommodate every Hacker virtually. We are in the
                process of making many changes to ensure that all attendees can
                experience the excitement and joy of HackUCI from the comfort of
                your home!
              </p>
            </div>
          </div>
        </section>
        <section className="volunteer-block">
          <img src={whiteCloudBorderTop} />
          <div className="volunteer-item-wrapper">
            <div className="volunteer-mentor-item">
              <img
                src={antMentor}
                alt="antmentor cat robot, saying 'teach' and 'tech"
              />
              <p>
                Due to the virtual format of HackUCI 2021, mentorship this year
                will be more important than ever. We need <b>YOUR</b> help to
                make this event successful and enjoyable for our hackers. Apply
                to be a mentor today!
              </p>
              <a
                href="https://airtable.com/shrbPw3zLgnVZkMkA"
                className="btn btn-hack"
                aria-label="HackUCI 2022 Mentor Applications"
              >
                Mentor Application
              </a>
            </div>
            <div className="volunteer-mentor-item">
              <img
                src={antSponsor}
                alt="antsponsor cat robot, saying 'support us'"
              />
              <p>
                Interested in sponsoring HackUCI 2021? Check out our information
                below to learn more about our event and the outstanding
                achievements we have accomplished! For more information, email
                us at <a href="mailto:hack@uci.edu">hack@uci.edu</a>.
              </p>
              <Link
                to="/sponsors"
                className="btn btn-hack"
                aria-label="View Sponsors"
              >
                Sponsor Us
              </Link>
            </div>
          </div>
          <img src={whiteCloudBorderBottom} />
        </section>
        <section className="faq-block">
          <Fade duration={1000}>
            <h2>FAQ</h2>
            <div>
              {faqQuestions.map(function(item, index) {
                return (
                  <FAQCollapse
                    question={item.question}
                    answer={item.answer}
                    key={index}
                  />
                );
              })}
            </div>
          </Fade>
        </section>
        <img className="top-wave" src={topWave} />
        <section className="home-sponsors-and-partners">
          <Fade duration={1000}>
            <CurrentSponsors />
          </Fade>
          <Fade duration={1000}>
            <CurrentPartners />
          </Fade>
        </section>
      </div>
    </div>
  );
}

export default Home;
