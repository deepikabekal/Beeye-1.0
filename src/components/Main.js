import { React, useState } from "react";
import "./Main.css";
import Journaux from "./Journaux";
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
      <Journaux />
    </div>
  );
}

export default Main;
