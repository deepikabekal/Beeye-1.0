import React from "react";
import TaskHeader from "./Task/TaskHeader";

function TempPage(props) {
  return (
    <div className="task-container">
      <TaskHeader name={props.name} />
      <p>page under development </p>
    </div>
  );
}

export default TempPage;
