import React from "react";

function Equipe() {
  const toggleBtn = [
    { id: 1, name: "Profil" },
    { id: 2, name: "Ressource" },
    { id: 3, name: "Champ" },
    { id: 4, name: "Référence" }
  ];
  return (
    <div>
      <div>
        {toggleBtn.map((item) => (
          <>
            <button key={item.id} type="button">
              {item.name}
            </button>
          </>
        ))}
      </div>
    </div>
  );
}

export default Equipe;
