import React from "react";
import ResourceList from "./ResourceList";
import employee from "../employee";

function ResourceListSection() {
  return (
    <div>
      {employee.slice(1).map((item) => (
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
