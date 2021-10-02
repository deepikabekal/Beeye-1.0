import React from "react";
import Button from "./Button";
import BudgetInfo from "./BudgetInfo";
import ToggleBar from "./ToggleBar";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

function TimeSheet() {
  return (
    <div className="timesheet-section">
      <div className="timesheet-btn-div">
        <Button
          icon={faChevronLeft}
          btnClass="inc-dec-btn"
          iconClass="budget-btn-icon"
        />
        <span className="date-span">11/11/2020 - 11/11/2020</span>
        <Button
          icon={faChevronRight}
          btnClass="inc-dec-btn"
          iconClass="budget-btn-icon"
        />
      </div>
      <BudgetInfo />
      <ToggleBar />
    </div>
  );
}

export default TimeSheet;
