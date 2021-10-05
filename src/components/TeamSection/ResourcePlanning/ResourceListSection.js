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
        />
      ))}
    </div>
  );
}

export default ResourceListSection;
