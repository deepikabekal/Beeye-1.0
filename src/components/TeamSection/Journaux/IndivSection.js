import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TempPage from "../../TempPage";
import Equipe from "../Equipe";
function IndivSection({ item, tabName }) {
  // console.log(item);
  return (
    <div>
      <div className="button-bar-section pad-left-15 div-border">
        <FontAwesomeIcon icon={item.icon} className="tab-section-icon" />
        <span className="tab-section-name">{item.name}</span>
        <span className="tab-section-value">{item.displayValue}</span>
      </div>
      <div>
        {tabName === "Équipe" ? <Equipe /> : <TempPage calledFrom="journaux" />}
      </div>
    </div>
  );
}

export default IndivSection;
