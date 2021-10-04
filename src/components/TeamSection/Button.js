import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faPlus, faMinus, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Button(props) {
  return (
    <button
      type="button"
      className={props.btnClass}
      onClick={props.onClick}
      id={props.id}
      style={{ cursor: "pointer" }}
    >
      <FontAwesomeIcon icon={props.icon} className={props.iconClass} />
      {props.name}
    </button>
  );
}

export default Button;
