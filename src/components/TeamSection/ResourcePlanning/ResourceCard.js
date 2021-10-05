import React from "react";

function ResourceCard(props) {
  const empClass = props.empClass;
  const desigClass = props.desigClass;
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
        <p className={empClass}>{props.employeeName}</p>
        <p className={desigClass}>{props.designation}</p>
      </div>
    </li>
  );
}
//require(`../assets/images/${props.imgName}`
export default ResourceCard;
