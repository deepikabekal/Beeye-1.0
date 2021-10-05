import React from "react";
import "./EquipeStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Equipe() {
  const toggleBtn = [
    { id: 1, name: "Profil" },
    { id: 2, name: "Ressource" },
    { id: 3, name: "Champ" },
    { id: 4, name: "Référence" }
  ];
  return (
    <div className="equipe-div div-border">
      <div className="div-border">
        <div className="toggle-btn-bar">
          {toggleBtn.map((item) => (
            <button
              key={item.id}
              type="button"
              className="equipe-toggle-btn btn"
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="post-site-div">
          <span className="label-span">Poste</span>
          <span className="value-span">Assistant comptable</span>
        </div>
        <div className="post-site-div">
          <span className="label-span">Site </span>
          <span className="value-span">Paris</span>
        </div>
        <p className="equipe-plus">
          <FontAwesomeIcon icon={faPlus} className="equipe-plus-icon" /> Ajouter
          un filtre
        </p>
      </div>
      <div className="nom-div ">
        <p className="nom-p-tag">Nom</p>
      </div>
    </div>
  );
}

export default Equipe;
