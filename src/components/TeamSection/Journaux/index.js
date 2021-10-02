import React from "react";
import Button from "../Button";
import JournauxTab from "./JournauxTabs";
import "./JournauxStyles.css";
import { faSync, faPen } from "@fortawesome/free-solid-svg-icons";
function Journaux() {
  return (
    <div>
      <div className="journaux-header div-border">
        <Button btnClass="icon-btn" icon={faSync} iconClass="sync-icon-style" />
        <h2 className="section-heading">Tenue des journaux</h2>
        <Button btnClass="icon-btn" icon={faPen} iconClass="pen-icon-style" />
      </div>
      <JournauxTab />
    </div>
  );
}

export default Journaux;
