import React from "react";
import NomenclatureData from "./NomenclatureData";
import IndivSection from "./IndivSection";

function JournauxTabSections(props) {
  return (
    <>
      {NomenclatureData.map((item) => (
        <div key={item.id}>
          {props.tabName === item.name && (
            <IndivSection tabName={props.tabName} item={item} />
          )}
        </div>
      ))}
    </>
  );
}

export default JournauxTabSections;
