import React from "react";
import PlanningGraph from "./PlanningGraph";
import ResourcePlanning from "./ResourcePlanning";
import Journaux from "./Journaux";
import Equipe from "./Equipe";

function TeamSection() {
  return (
    <>
      <Journaux />
      <Equipe />
      <PlanningGraph />
      <ResourcePlanning />
    </>
  );
}

export default TeamSection;
