import React from "react";
import "./LeftMenuStyles.css";
import TitleBlock from "./TitleBlock";
import ResourceCard from "../TeamSection/ResourcePlanning/ResourceCard";
import LeftMenuList from "./LeftMenuList";
import employees from "../employees";
const employee = employees[0];

function LeftMenu(props) {
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
        classname="top-border"
      />
      <LeftMenuList
        onClick={props.onClick}
        // className={props.className}
        // isclicked={props.isClicked}
      />
    </div>
  );
}

export default LeftMenu;
