import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} />
      </div>
      <span onClick={() => props.handleClick(props.id, props.name)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;
