import React from "react";
import "./hackLogo.scss";

import { motion } from "framer-motion";
import anteater from "./../../../assets/images/site/hackuci-anteater.png";
import gear from "./../../../assets/images/site/hackuci-gear.png";

function HackLogo({ style }) {
  return (
    <div className="hack-logo" style={style}>
      <img src={anteater} />
      <motion.img
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: "Infinity", duration: 5, ease: "linear" }}
        src={gear}
      />
    </div>
  );
}

export default HackLogo;
