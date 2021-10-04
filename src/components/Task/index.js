import { React, useState } from "react";
import "./TaskStyles.css";
import TaskHeader from "./TaskHeader";
import TaskCard from "./TaskCard";

function Task() {
  let [count, setCount] = useState(0); // for + click
  let [isChecked, setChecked] = useState(false); //for select all checkbox click

  // This function will be called when the + button is clicked
  // for every click count will be incremented by 1 and the state change will recorded
  // Later count value will be changed to Array.
  //And using map function on count TaskCard compnent will be render to the Task section
  function addCard() {
    setCount(count + 1);
  }

  function checkboxClick(event) {
    if (event.target.checked) {
      setChecked(true);
      selectAll();
    } else {
      setChecked(false);
      deSelectAll();
    }
  }

  // This function will be called when the select all checkbox is clicked
  function selectAll() {
    const box = document.getElementsByClassName("indiv-check-box");
    for (var i = 0; i < count; i++) {
      box[i].checked = true;
    }
  }

  function deSelectAll() {
    const box = document.getElementsByClassName("indiv-check-box");
    for (var i = 0; i < count; i++) {
      box[i].checked = true;
    }
  }

  return (
    <div className="task-container">
      <TaskHeader onClick={addCard} />
      <div className="select-all-container">
        <input
          id="select-all"
          type="checkbox"
          onChange={checkboxClick}
          className="check-box"
        />
        <label htmlFor="select-all">Sélectionner tout</label>
      </div>
      {[...Array(count)].map((_, index) => (
        <TaskCard key={index} />
      ))}
    </div>
  );
}

export default Task;
