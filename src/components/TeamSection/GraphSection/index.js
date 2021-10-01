import React from "react";
import Graph from "./Graph";
import TimeSheet from "./TimeSheet";
import "./GraphStyles.css";

function GraphSection() {
  return (
    <div className="section-div">
      <Graph />
      <TimeSheet />
    </div>
  );
}

export default GraphSection;
