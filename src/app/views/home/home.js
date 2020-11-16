import React, { useEffect } from "react";
import "./home.scss";

import Fade from "react-reveal/Fade";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { faqQuestions } from "assets/data/faq-questions";
import { FAQCollapse } from "app/containers";
import { Button, Fireflies } from "app/components";
import hackathon from "assets/images/site/hackathon.jpg";
import antMentor from "assets/images/site/ant_mentor_grey_blue.png";
import antSponsor from "assets/images/site/ant_sponsor_green.png";
import fireflyOne from "assets/images/site/fireflies_1.png";
import fireflyTwo from "assets/images/site/fireflies_2.png";
import workBanner from "assets/images/site/cozy_work_wider.jpg";

function Home() {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <div className="home">
      <Fireflies fireflyCount={15} />
      <section className="home-banner">
        <div className="banner-image"></div>
        <motion.div className="banner-info" style={{ opacity: opacity }}>
          <h1>
            <span className="hack">Hack</span>
            <span className="uci">UCI</span>
          </h1>
          <h3>February 20-22, 2021</h3>
          <h3>Online</h3>
          <h3>Apply by November 20, 2020</h3>
          <Button className="application-button">Apply Now</Button>
          <p>
            In light of the COVID-19 pandemic, HackUCI 2021 will be fully
            virtual and open to all! You can participate from the comfort of
            your home.
          </p>
        </motion.div>
      </section>
      <div className="remaining-gradient">
        <section className="description-block">
          <div className="description-tagline">
            <img className="firefly-image" src={fireflyOne} />
            <p>
              500 <span>hackers.</span> 36 <span>hours.</span> 10,000 in{" "}
              <span>prizes.</span>
            </p>
            <img className="firefly-image" src={fireflyTwo} />
          </div>
          <div className="description-tagline connect-inspire">
            <img className="firefly-image" src={fireflyOne} />
            Create <span>+</span> Connect <span>+</span> Inspire
            <img className="firefly-image" src={fireflyTwo} />
          </div>
          <div className="description-image-wrapper">
            <div className="description-image">
              <img src={hackathon} alt="picture of students at table" />
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
                Maybe insert some extra text regarding COVID-19 changes. So that
                peeps know that we’re trying to adjust?
              </p>
            </div>
          </div>
        </section>
        <section className="volunteer-block">
          <h2>Lend a Hand</h2>
          <div className="volunteer-item-wrapper">
            <div className="volunteer-mentor-item">
              <img src={antMentor} />
              <p>
                Due to the virtual format of Hack 2021, mentorship this year
                will be more important than ever. We need YOUR help to make this
                event successful and enjoyable for our hackers. Apply to be a
                mentor today!
              </p>
              <Button>Mentor</Button>
            </div>
            <div className="volunteer-mentor-item">
              <img src={antSponsor} />
              <p>
                Due to the virtual format of Hack 2021, mentorship this year
                will be more important than ever. We need YOUR help to make this
                event successful and enjoyable for our hackers. Apply to be a
                mentor today!
              </p>
              <Button>Sponsor</Button>
            </div>
          </div>
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
        <section className="sponsor-block">
          <Fade duration={1000}>
            <h2>Sponsors</h2>
            <div className="sponsor-card"></div>
          </Fade>
        </section>
      </div>
    </div>
  );
}

export default Home;
