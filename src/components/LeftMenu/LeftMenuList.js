import React from "react";
import menuData from "./LeftMenuData";

function LeftMenuList(props) {
  return (
    <>
      {menuData.map((item, index) => (
        <li
          key={index}
          className={`menu-list-container div-border pad-left-15 ${
            props.clickedItem === item ? "click-styles" : ""
          }`}
          onClick={props.onClick}
          id={item}
        >
          {item}
        </li>
      ))}
    </>
  );
}

export default LeftMenuList;
