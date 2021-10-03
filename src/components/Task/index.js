import React from "react";
import "./TaskStyles.css";
import TaskHeader from "./TaskHeader";

function Task() {
  return (
    <div className="task-container">
      <TaskHeader />
      <div className="select-all-container">
        <input id="select-all" type="checkbox" className="check-box" />
        <label htmlFor="select-all">Sélectionner tout</label>
      </div>
    </div>
  );
}

export default Task;
