import React from "react";
import Button from "./Button";
import BudgetInfo from "./BudgetInfo";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

function TimeSheet() {
  return (
    <div>
      <div>
        <Button icon1={faChevronLeft} icon2={faChevronRight} />
        <span>11/11/2020 - 11/11/2020</span>
      </div>
      <BudgetInfo />
    </div>
  );
}

export default TimeSheet;
