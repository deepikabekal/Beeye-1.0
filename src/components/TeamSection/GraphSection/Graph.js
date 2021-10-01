import React from "react";
import Column from "./Column";
import dates from "./Dates";

function Graph() {
  return (
    <div className="graph-div">
      {dates.map((item) => (
        <Column key={item.date} />
      ))}
    </div>
  );
}

export default Graph;
