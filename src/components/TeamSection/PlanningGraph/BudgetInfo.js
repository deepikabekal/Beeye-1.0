import React from "react";

function BudgetInfo() {
  const budgetData = [
    { name: "Budget restant", time: "20 h" },
    { name: "Disponibilité restante", time: "6 h" },
    { name: "Planifié sur d’autres tâches", time: "2 h" },
    { name: "Planifié sur cette tâche", time: "2 h" }
  ];
  return (
    <ul className="budget-div">
      {budgetData.map(function (item, index) {
        return (
          <li className="budget-list" key={index}>
            <div className="budget-item">
              <span>{item.name}</span>
              <span>{item.time}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default BudgetInfo;
