import React, { useEffect, useState } from 'react';
import './BlockTransition.scss';

function BlockTransition() {
  const [blocks, setBlocks] = useState([]);

  // Component Did Mount equivalent
  useEffect(() => {
    renderBlocks(100);
  });

  function renderBlocks(blockCount) {
    let newBlocks = [];
    for (let i = 0; i < blockCount; i++) {
      newBlocks.push(
        <div style={{width: '20px', height: getRandomHeight(100), backgroundColor: "black"}}/>
      )
    }
    setBlocks(newBlocks);
  }

  function getRandomHeight(cap) {
    return Math.floor(Math.random() * cap) + 'px';
  }

  return (
		<div className="transition-container">
      {blocks}
    </div>
  );
}

export default BlockTransition;
