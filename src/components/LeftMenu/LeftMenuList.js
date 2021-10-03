import React from "react";
import menuData from "./LeftMenuData";

function LeftMenuList() {
  return (
    <>
      {menuData.map((item, index) => (
        <div key={index}>
          <span>{item}</span>
        </div>
      ))}
    </>
  );
}

export default LeftMenuList;
