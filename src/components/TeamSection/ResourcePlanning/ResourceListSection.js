import React from "react";
import ResourceCard from "./ResourceCard";
import employees from "../../employees";
import PlanningGraph from "../PlanningGraph";

function ResourceListSection(props) {
  return (
    <div>
      {employees.map((item) => (
        <div key={item.id}>
          <ResourceCard
            imageURL={item.imageURL}
            employeeName={item.employeeName}
            designation={item.designation}
            onClick={props.onClick}
            id={item.employeeName}
            className="resource-img-div margin-left-20"
          />
          {props.clickedName === item.employeeName && <PlanningGraph />}
        </div>
      ))}
    </div>
  );
}

export default ResourceListSection;
