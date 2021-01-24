import React, { useState, useEffect } from "react";

import "./liveExpo.scss";

import Youtube from "react-youtube";
import useAuth from "hooks/useAuth";
import { Fireflies, SponsorLoginModal } from "app/components";

export default function LiveExpo(props) {
  const { isLoggedIn } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
    }
  }, [isLoggedIn]);

  function closeModal() {
    setIsModalOpen(false);
  }

  function attemptSponsorLogin() {
    let answer = window.prompt("Please enter the sponsor password");

    if (answer === "thankyou!") {
      setIsModalOpen(false);
    }
  }

  return (
    <div className="live-expo">
      <Fireflies fireflyCount={30} />
      <h2>Live Expo Coming Soon!</h2>
      <SponsorLoginModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        attemptSponsorLogin={attemptSponsorLogin}
      />
    </div>
  );

  return (
    <div className="live-expo">
      <Fireflies fireflyCount={30} />
      <h2 className="live-expo-title">Live Expo</h2>
      <p className="live-expo-descrip">
        The Youtube stream on which the Opening Ceremony will be held.
      </p>
      <Youtube
        className="video-stream"
        videoId="UEncaPrcn_U"
        opts={{ playerVars: { autoplay: 1 } }}
      />
      <SponsorLoginModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        attemptSponsorLogin={attemptSponsorLogin}
      />
    </div>
  );
}
