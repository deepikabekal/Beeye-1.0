import React from "react";
import Button from "../Button";
import NomenclatureData from "./NomenclatureData";

function JournauxTabs() {
  return (
    <div className="nomenclature-bar div-border">
      {NomenclatureData.map((item) => (
        <Button
          key={item.id}
          btnClass="nomenclature-btn"
          icon={item.icon}
          iconClass="nomenclature-icon"
          name={item.name}
        />
      ))}
    </div>
  );
}

export default JournauxTabs;
