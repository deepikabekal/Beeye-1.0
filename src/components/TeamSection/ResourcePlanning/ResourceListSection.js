import React from "react";
import ResourceCard from "./ResourceCard";
import employees from "../../employees";

function ResourceListSection() {
  return (
    <div>
      {employees.slice(1).map((item) => (
        <ResourceCard
          key={item.id}
          imageURL={item.imageURL}
          employeeName={item.employeeName}
          designation={item.designation}
        />
      ))}
    </div>
  );
}

export default ResourceListSection;
