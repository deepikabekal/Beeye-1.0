import { React, useState } from "react";
import ResourcePlanning from "./ResourcePlanning";
import Equipe from "./Equipe";

function TeamSection() {
  const [clickedName, setClickedName] = useState("");

  function renderGraph(event) {
    setClickedName(event.target.id);
  }
  return (
    <>
      <Equipe />
      <ResourcePlanning onClick={renderGraph} clickedName={clickedName} />
    </>
  );
}

export default TeamSection;
