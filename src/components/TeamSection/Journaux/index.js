import { React, useState } from "react";
import Button from "../Button";
import JournauxTabs from "./JournauxTabs";
import JournauxTabSections from "./JournauxTabSections";
import "./JournauxStyles.css";
import { faSync, faPen } from "@fortawesome/free-solid-svg-icons";

function Journaux() {
  const [clickedBtn, setClickedBtn] = useState("Description");

  function renderPage(event) {
    setClickedBtn(event.target.id);
    console.log(event.target.id);
  }

  return (
    <div className="journaux-container">
      <div className="journaux-header div-border pad-left-15">
        <Button btnClass="icon-btn" icon={faSync} iconClass="sync-icon-style" />
        <h2 className="section-heading">Tenue des journaux</h2>
        <Button btnClass="icon-btn" icon={faPen} iconClass="pen-icon-style" />
      </div>
      <JournauxTabs onClick={renderPage} />
      <JournauxTabSections tabName={clickedBtn} />
    </div>
  );
}

export default Journaux;
