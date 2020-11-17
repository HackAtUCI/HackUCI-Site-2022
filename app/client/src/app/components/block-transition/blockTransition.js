import React, { useEffect, useState } from "react";
import "./blockTransition.scss";

function BlockTransition() {
  const [blocks, setBlocks] = useState([]);

  // Component Did Mount equivalent
  useEffect(() => {
    renderBlocks(50);
  }, []);

  function renderBlocks(blockCount) {
    let newBlocks = [];
    for (let i = 0; i < blockCount; i++) {
      newBlocks.push(
        <div
          className="transition-block"
          style={{
            width: "2vw",
            height: getRandomHeight(70),
            backgroundColor: "#92dee2"
          }}
        />
      );
    }
    setBlocks(newBlocks);
  }

  function getRandomHeight(cap) {
    return Math.floor(Math.random() * cap + 30) + "px";
  }

  return <div className="transition-container">{blocks}</div>;
}

export default BlockTransition;
