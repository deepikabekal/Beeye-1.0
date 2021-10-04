import React from "react";

function TempPage(props) {
  return (
    <div className="task-header-container" style={{ flexDirection: "column" }}>
      <h2 className="task-heading">{props.name}</h2>
      <div>
        <p>page under development </p>
      </div>
    </div>
  );
}

export default TempPage;
