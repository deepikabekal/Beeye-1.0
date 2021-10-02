import React from "react";
import NomenclatureData from "./NomenclatureData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function JournauxTabSections() {
  return (
    <>
      {NomenclatureData.map((item) => (
        <div className="button-bar-section" key={item.id}>
          <FontAwesomeIcon icon={item.icon} />
          <span>{item.name}</span>
          <span>{item.displayValue}</span>
        </div>
      ))}
    </>
  );
}

export default JournauxTabSections;
