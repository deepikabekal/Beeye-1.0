import { React, useState } from "react";
import TeamSection from "./TeamSection";
import LeftMenu from "./LeftMenu";
import Task from "./Task";
import TempPage from "./TempPage";

function Main() {
  const [elementId, setElementId] = useState("Tâches");

  function renderSection(event) {
    setElementId(event.target.id);
  }

  return (
    <div className="container">
      <LeftMenu onClick={renderSection} />
      {elementId === "Tâches" ? (
        <Task name={elementId} />
      ) : (
        <TempPage name={elementId} />
      )}
      <TeamSection />
    </div>
  );
}

export default Main;
