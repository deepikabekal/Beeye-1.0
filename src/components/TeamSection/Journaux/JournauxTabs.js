import React from "react";
import Button from "../Button";
import NomenclatureData from "./NomenclatureData";

function JournauxTabs(props) {
  return (
    <div className="nomenclature-bar div-border">
      {NomenclatureData.map((item) => (
        <Button
          key={item.id}
          btnClass={
            props.tabName === item.name
              ? "nomenclature-btn btn click-tab-styles"
              : "nomenclature-btn btn"
          }
          icon={item.icon}
          iconClass="nomenclature-icon"
          name={item.name}
          id={item.name}
          onClick={props.onClick}
        />
      ))}
    </div>
  );
}

export default JournauxTabs;
