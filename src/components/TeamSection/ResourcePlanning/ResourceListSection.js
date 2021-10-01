import React from "react";
import ResourceList from "./ResourceList";
import employees from "../../employees";

function ResourceListSection() {
  return (
    <div>
      {employees.slice(1).map((item) => (
        <ResourceList
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
