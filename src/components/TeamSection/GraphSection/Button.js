import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faPlus, faMinus, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Button(props) {
  return (
    <div className={props.divClass}>
      <button type="button" className={props.btnClass}>
        <FontAwesomeIcon icon={props.icon1} className={props.iconClass} />
      </button>
      <button type="button" className={props.btnClass}>
        <FontAwesomeIcon icon={props.icon2} className={props.iconClass} />
      </button>
    </div>
  );
}

export default Button;
