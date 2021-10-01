import React from "react";

function ResourceList(props) {
  return (
    <div>
      <div>
        <img src={props.imageURL} alt="employee of the company" />
      </div>
      <div>
        <p>{props.employeeName}</p>
        <p>{props.designation}</p>
      </div>
    </div>
  );
}
//require(`../assets/images/${props.imgName}`
export default ResourceList;
