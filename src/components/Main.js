import { React, useState } from "react";
import "./Main.css";
import TeamSection from "./TeamSection";
import LeftMenu from "./LeftMenu";
import Task from "./Task";
import TempPage from "./TempPage";

function Main() {
  const [elementId, setElementId] = useState("Tâches");
  // const [isClicked, setClicked] = useState(true);

  function renderSection(event) {
    setElementId(event.target.id);
  }

  return (
    <div className="container">
      <LeftMenu onClick={renderSection} clickedItem={elementId} />
      {elementId === "Tâches" ? (
        <Task name={elementId} />
      ) : (
        <TempPage name={elementId} calledFrom="leftmenu" />
      )}
      <TeamSection />
    </div>
  );
}

export default Main;
