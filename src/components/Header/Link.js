import React from "react";

function Link(props) {
  return <a href={props.pageLink}>{props.pageName}</a>;
}

export default Link;
