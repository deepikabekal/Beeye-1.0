import React from "react";
import menuData from "./LeftMenuData";

function LeftMenuList({ onClick }) {
  return (
    <>
      {menuData.map((item, index) => (
        <li
          key={index}
          className="menu-list-container div-border pad-left-15"
          onClick={onClick}
          id={item}
        >
          {item}
        </li>
      ))}
    </>
  );
}

export default LeftMenuList;
