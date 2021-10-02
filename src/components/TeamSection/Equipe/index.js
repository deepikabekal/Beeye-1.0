import React from "react";
import "./EquipeStyles.css";

function Equipe() {
  const toggleBtn = [
    { id: 1, name: "Profil" },
    { id: 2, name: "Ressource" },
    { id: 3, name: "Champ" },
    { id: 4, name: "Référence" }
  ];
  return (
    <div className="equipe-div">
      <div className="toggle-btn-bar">
        {toggleBtn.map((item) => (
          <button key={item.id} type="button" className="equipe-toggle-btn">
            {item.name}
          </button>
        ))}
      </div>
      <div>
        <span>Poste</span>
        <span>Assistant comptable</span>
      </div>
      <div>
        <span>Site </span>
        <span>Paris</span>
      </div>
    </div>
  );
}

export default Equipe;
