import React from "react";
import ResourceCard from "./ResourceCard";
import employees from "../../employees";
import PlanningGraph from "../PlanningGraph";

function ResourceListSection(props) {
  console.log(props.clickedName);
  return (
    <div className="resource-list-container">
      {employees.map((item) => (
        <div key={item.id}>
          <ResourceCard
            imageURL={item.imageURL}
            employeeName={item.employeeName}
            designation={item.designation}
            onClick={props.onClick}
            id={item.employeeName}
            className="resource-img-div margin-left-20"
            empClass="resource-name"
            desigClass="resource-desig"
          />

          {props.clickedName === item.employeeName && <PlanningGraph />}
        </div>
      ))}
    </div>
  );
}

export default ResourceListSection;
