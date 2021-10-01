import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Button() {
  return (
    <div>
      <button type="button">
        <FontAwesomeIcon icon={faPlus} color="black" />
      </button>
      <button type="button">
        <FontAwesomeIcon icon={faMinus} color="black" />
      </button>
    </div>
  );
}

export default Button;
