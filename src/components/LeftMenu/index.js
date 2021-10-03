import React from "react";
import TitleBlock from "./TitleBlock";
import "./LeftMenuStyles.css";
import ResourceCard from "../TeamSection/ResourcePlanning/ResourceCard";
import employees from "../employees";
const employee = employees[0];

function LeftMenu() {
  return (
    <div>
      <TitleBlock />

      {/* project button section */}
      <button className="project-btn open-btn" type="button">
        Ouvert
      </button>
      <button className="project-btn close-btn" type="button">
        Fermé
      </button>

      {/* Project owner section begins */}
      <ResourceCard
        imageURL={employee.imageURL}
        employeeName={employee.employeeName}
        designation={employee.designation}
      />
    </div>
  );
}

export default LeftMenu;
