import { React, useState } from "react";
import "./TaskStyles.css";
import TaskHeader from "./TaskHeader";
import TaskCard from "./TaskCard";

function Task() {
  let [count, setCount] = useState(0);
  let [isClicked, setClicked] = useState(false);

  function addCard() {
    setCount(count + 1);
  }

  return (
    <div className="task-container">
      <TaskHeader onClick={addCard} />
      <div className="select-all-container">
        <input id="select-all" type="checkbox" className="check-box" />
        <label htmlFor="select-all">Sélectionner tout</label>
      </div>
      {/*  */}
      {[...Array(count)].map((_, index) => (
        <TaskCard key={index} />
      ))}
    </div>
  );
}

export default Task;
