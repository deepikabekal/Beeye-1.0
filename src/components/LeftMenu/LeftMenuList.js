import React from "react";
import menuData from "./LeftMenuData";

function LeftMenuList(props) {
  const clickedStyles =
    "menu-list-container div-border pad-left-15 click-styles";
  const notClickedStyles = "menu-list-container div-border pad-left-15 ";
  const clickedItem = props.clickedItem;
  console.log(props.clickedItem);
  return (
    <>
      {menuData.map((item, index) => (
        <li
          key={index}
          className={clickedItem === item ? clickedStyles : notClickedStyles}
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
