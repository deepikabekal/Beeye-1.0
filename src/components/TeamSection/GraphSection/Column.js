import React from "react";
import Button from "./Button";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Column(props) {
  const fontColor = "#F27633";
  return (
    <div className="col-bar">
      <div
        className="bar"
        style={{
          background: `linear-gradient(to top, ${props.barFillColor} 0, ${props.barFillColor} ${props.barFillPercent}%, #F1F0FA ${props.barFillPercent}%, #F1F0FA  100%)`
        }}
      ></div>
      <Button
        divClass="graph-buttons"
        btnClass="inc-dec-btn"
        icon1={faPlus}
        icon2={faMinus}
        iconClass="icon-color"
      />
      <div
        className="date-div"
        style={{ color: props.date === 10 && fontColor }}
      >
        <span>{props.date}</span>
        <span>{props.month}</span>
      </div>
    </div>
  );
}

export default Column;
