import React from "react";
import NomenclatureData from "./NomenclatureData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function JournauxTabSections() {
  return (
    <>
      {NomenclatureData.map((item) => (
        <div className="button-bar-section div-border" key={item.id}>
          <FontAwesomeIcon icon={item.icon} className="tab-section-icon" />
          <span className="tab-section-name">{item.name}</span>
          <span className="tab-section-value">{item.displayValue}</span>
        </div>
      ))}
    </>
  );
}

export default JournauxTabSections;
