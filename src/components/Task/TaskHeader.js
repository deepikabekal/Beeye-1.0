import React from "react";
import { faFileImport, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TaskHeader() {
  return (
    <div className="task-header-container">
      <h2 className="task-heading">Tâches</h2>
      <div className="task-header-icons">
        <FontAwesomeIcon icon={faFileImport} className="task-header-icon" />
        <FontAwesomeIcon icon={faPlus} className="task-header-icon" />
      </div>
    </div>
  );
}

export default TaskHeader;
