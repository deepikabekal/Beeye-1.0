import React from "react";

function ResourceCard(props) {
  return (
    <div className="resource-list-div div-border">
      <div className={props.className}>
        <img src={props.imageURL} alt="employee of the company" />
      </div>
      <div className="resource-info-div">
        <p className="resource-name">{props.employeeName}</p>
        <p className="resource-desig">{props.designation}</p>
      </div>
    </div>
  );
}
//require(`../assets/images/${props.imgName}`
export default ResourceCard;
