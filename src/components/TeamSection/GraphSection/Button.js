import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Button() {
  return (
    <div className="button-set">
      <button type="button" className="inc-dec-btn">
        <FontAwesomeIcon icon={faPlus} className="icon-color" />
      </button>
      <button type="button" className="inc-dec-btn">
        <FontAwesomeIcon icon={faMinus} className="icon-color" />
      </button>
    </div>
  );
}

export default Button;
