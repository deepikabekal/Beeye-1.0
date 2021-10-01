import React from "react";
import employee from "./employee";

function EmployeeCard(props) {
  return (
    <>
      <img
        src={require(`../assets/images/${props.imgName}`)}
        alt="employee of the company"
      />
      <p>{props.employeeName}</p>
      <p>{props.designation}</p>
    </>
  );
}

export default EmployeeCard;
