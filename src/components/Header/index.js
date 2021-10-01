import React from "react";
import Icons from "./Icons";
import Navigation from "./Navigation";
import Avatar from "../Avatar";
import employee from "../employee";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="inline-fx align-center">
        <img
          src="../../assets/images/logo.png"
          alt="logo"
          className="logo-img"
        />
        <Navigation id="navigation" />
      </div>
      <div className="inline-fx">
        <Icons className="icon-style" />
        <Avatar
          className="user-img"
          imageURL={employee[0].imageURL}
          altValue="Female Employee"
        />
      </div>
    </header>
  );
}

export default Header;
