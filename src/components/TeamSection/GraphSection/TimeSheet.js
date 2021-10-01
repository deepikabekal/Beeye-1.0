import React from "react";
import Button from "./Button";
import BudgetInfo from "./BudgetInfo";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

function TimeSheet() {
  return (
    <div className="timesheet-section">
      <div>
        <Button
          icon1={faChevronLeft}
          icon2={faChevronRight}
          divClass="chevron-btns"
        />
        <span className="date-span">11/11/2020 - 11/11/2020</span>
      </div>
      <BudgetInfo />
    </div>
  );
}

export default TimeSheet;
