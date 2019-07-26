import React from "react";
import "./style.css"

function Jumbotron (props){
    return(
        <div className="jumbotron"
            style={{display: props.showGame ? "none" : "flex"}}>
            <div className="container">
            <h1>Click on all 12 fruits without clicking on any fruit more than once.</h1>
            <button className="btn btn-success"
                onClick={props.handleStart}
            >Start Game</button>
            </div>
        </div>
    )
}

export default Jumbotron;