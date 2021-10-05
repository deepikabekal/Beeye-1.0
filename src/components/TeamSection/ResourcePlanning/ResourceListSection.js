import React from "react";
import ResourceCard from "./ResourceCard";
import employees from "../../employees";

function ResourceListSection() {
  return (
    <div>
      {employees.map((item) => (
        <ResourceCard
          key={item.id}
          imageURL={item.imageURL}
          employeeName={item.employeeName}
          designation={item.designation}
          className="resource-img-div margin-left-20"
        />
      ))}
    </div>
  );
}

export default ResourceListSection;
