import React from "react";
import Button from "./Button";

function Column(props) {
  return (
    <div className="col-bar">
      <div
        className="bar"
        style={{
          background: `linear-gradient(to top, ${props.barFillColor} 0, ${props.barFillColor} ${props.barFillPercent}%, #F1F0FA ${props.barFillPercent}%, #F1F0FA  100%)`
        }}
      ></div>
      <Button />
    </div>
  );
}

export default Column;
