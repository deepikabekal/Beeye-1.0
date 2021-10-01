import React from "react";

function BudgetInfo() {
  const budgetData = [
    { name: "Budget restant", time: "20 h" },
    { name: "Disponibilité restante", time: "6 h" },
    { name: "Planifié sur d’autres tâches", time: "2 h" },
    { name: "Planifié sur cette tâche", time: "2 h" }
  ];
  return (
    <div>
      {budgetData.map((item, index) => (
        <div>
          <p>{item.name}</p>
          <p>{item.time}</p>
        </div>
      ))}
    </div>
  );
}

export default BudgetInfo;
