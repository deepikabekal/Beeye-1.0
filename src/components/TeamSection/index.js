import React from "react";
import PlanningGraph from "./PlanningGraph";
import ResourcePlanning from "./ResourcePlanning";
import Journaux from "./Journaux";

function TeamSection() {
  return (
    <>
      <Journaux />
      <PlanningGraph />
      <ResourcePlanning />
    </>
  );
}

export default TeamSection;
