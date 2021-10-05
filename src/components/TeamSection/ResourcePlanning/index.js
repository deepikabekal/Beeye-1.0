import React from "react";
import ResourceListSection from "./ResourceListSection";
import "./ResourceSection.css";

function ResourcePlanning(props) {
  return (
    <ResourceListSection
      onClick={props.onClick}
      clickedName={props.clickedName}
    />
  );
}

export default ResourcePlanning;
