import React from "react";

function ResourceCard(props) {
  return (
    <li
      className="resource-list-div div-border"
      onClick={props.onClick}
      id={props.id}
    >
      <div className={props.className}>
        <img src={props.imageURL} alt="employee of the company" />
      </div>
      <div className="resource-info-div">
        <p className="resource-name">{props.employeeName}</p>
        <p className="resource-desig">{props.designation}</p>
      </div>
    </li>
  );
}
//require(`../assets/images/${props.imgName}`
export default ResourceCard;
