import React from "react";

import { Link } from "react-router-dom";
import Modal from "react-modal";

function SponsorLoginModal({ isOpen, onRequestClose, attemptSponsorLogin }) {
  // Not a fan of how this modal library is implemented, it renders
  // the item outside of the root, so classes don't work. Styles should work
  // for now though!
  let styles = {
    content: {
      textAlign: "center",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      borderRadius: "1rem",
      border: "0",
      padding: "2rem",
      width: "700px",
      height: "250px",
      maxWidth: "80vw",
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
      flexDirection: "column",
      zIndex: "10"
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
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
          onClick={() => attemptSponsorLogin()}
        >
          Sponsor Login
        </button>
      </div>
    </Modal>
  );
}

export default SponsorLoginModal;
