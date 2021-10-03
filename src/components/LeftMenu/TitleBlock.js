import React from "react";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TitleBlock() {
  return (
    <div>
      <div>
        <div>
          <h2>Titre</h2>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <span>Client Name</span>
      </div>
      <div>
        <div>
          <span>début</span>
          <span>11 / 11 / 2020</span>
        </div>
        <FontAwesomeIcon icon={faArrowRight} />
        <div>
          <span>fin</span>
          <span>11 / 11 / 2020</span>
        </div>
      </div>
    </div>
  );
}

export default TitleBlock;
