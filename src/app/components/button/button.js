import React from "react";
import "./button.scss";

function Template({ children, className, style, onClick }) {
  return (
    <div
      className={`button ${className}`}
      style={style}
      onClick={() => onClick}
    >
      {children}
    </div>
  );
}

export default Template;
