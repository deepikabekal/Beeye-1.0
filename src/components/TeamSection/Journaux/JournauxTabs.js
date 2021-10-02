import React from "react";
import Button from "../Button";
import NomenclatureData from "./NomenclatureData";

function JournauxTabs() {
  return (
    <div>
      {NomenclatureData.map((item) => (
        <Button
          key={item.id}
          btnClass=""
          icon={item.icon}
          iconClass=""
          name={item.name}
        />
      ))}
    </div>
  );
}

export default JournauxTabs;
