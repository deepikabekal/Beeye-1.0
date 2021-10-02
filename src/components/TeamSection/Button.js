import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faPlus, faMinus, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Button(props) {
  return (
    <button type="button" className={props.btnClass}>
      <FontAwesomeIcon icon={props.icon} className={props.iconClass} />
    </button>
  );
}

export default Button;
