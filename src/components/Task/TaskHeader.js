import React from "react";
import { faFileImport, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TaskHeader() {
  return (
    <div className="task-header-container">
      <h2 className="task-heading">Tâches</h2>
      <FontAwesomeIcon icon={faFileImport} className="task-header-icon" />
      <FontAwesomeIcon icon={faPlus} className="teak-header-icon" />
    </div>
  );
}

export default TaskHeader;
