import React from "react";
import Button from "./Button";

function Column(props) {
  return (
    <div className="col-bar">
      <div
        className="bar"
        style={{
          backgroundColor: `linear-gradient(${props.barFillPercent},${props.barFillColor}s)`
        }}
      ></div>
      <Button />
    </div>
  );
}

export default Column;
