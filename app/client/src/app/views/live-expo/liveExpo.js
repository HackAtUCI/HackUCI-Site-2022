import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import { Link } from "react-router-dom";

import "./liveExpo.scss";

import Modal from "react-modal";
import useAuth from "../../../hooks/useAuth";
import { Fireflies } from "app/components/";

export default function LiveExpo(props) {
  const { isLoggedIn, resendVerificationEmail } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
    }
  }, []);

  function closeModal() {
    setIsModalOpen(false);
  }

  let styles = {
    content: {
      textAlign: "center",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      borderRadius: "1rem",
      border: "0",
      padding: "1rem",
      width: "600px",
      height: "200px",
      position: "absolute",
      marginLeft: "auto",
      marginRight: "auto",
      margin: "auto",
      left: "0",
      right: "0",
      color: "white",
      fontSize: "2rem",
      fontFamily: "Catamaran",
      display: "flex",
      flexDirection: "column"
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.4)"
    }
  };

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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={false}
        style={styles}
      >
        <p>
          Stage and Schedule views are only available if you are logged in or a
          sponsor!
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          className="modal-button-container"
        >
          <Link
            to="/login"
            style={{
              border: "3px solid #FED9A7",
              width: "165px",
              marginRight: "0.5rem",
              height: "50px",
              padding: "0.5rem",
              borderRadius: "1rem",
              borderCollapse: "separate",
              display: "inline-block",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              fontSize: "1rem",
              color: "#FED9A7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            Login
          </Link>
          <button
            style={{
              border: "3px solid #FED9A7",
              width: "165px",
              marginLeft: "0.5rem",
              height: "50px",
              padding: "0.5rem",
              borderRadius: "1rem",
              borderCollapse: "separate",
              display: "inline-block",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              fontSize: "1rem",
              color: "#FED9A7"
            }}
          >
            Sponsor Login
          </button>
        </div>
      </Modal>
    </div>
  );
}
