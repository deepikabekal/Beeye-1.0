import React from "react";
import Button from "../Button";
import NomenclatureData from "./NomenclatureData";

function JournauxTabs({ onClick }) {
  return (
    <div className="nomenclature-bar div-border">
      {NomenclatureData.map((item) => (
        <Button
          key={item.id}
          btnClass="nomenclature-btn"
          icon={item.icon}
          iconClass="nomenclature-icon"
          name={item.name}
          id={item.name}
          onClick={onClick}
        />
      ))}
    </div>
  );
}

export default JournauxTabs;
