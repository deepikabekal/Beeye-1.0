import React from "react";
import "./TempPageStyle.css";

function TempPage(props) {
  return (
    <>
      {props.calledFrom === "leftmenu" ? (
        <div>
          <div className="temp-page-header pad-left-15">
            <h2 className="temp-page-heading">{props.name}</h2>
          </div>
          <div>
            <p className="user-msg pad-left-15">Page under development </p>
          </div>
        </div>
      ) : (
        <div>
          <p className="user-msg pad-left-15">Page under development </p>
        </div>
      )}
    </>
  );
}

export default TempPage;
