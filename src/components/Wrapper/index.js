import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper" style={{display: !props.showGame ? "none" : "flex"}}>{props.children}</div>;
}

export default Wrapper;
