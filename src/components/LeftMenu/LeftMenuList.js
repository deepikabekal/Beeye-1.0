import React from "react";
import menuData from "./LeftMenuData";

function LeftMenuList() {
  return (
    <>
      {menuData.map((item, index) => (
        <div key={index} className="menu-list-container div-border">
          <span className="menu-list-content">{item}</span>
        </div>
      ))}
    </>
  );
}

export default LeftMenuList;
