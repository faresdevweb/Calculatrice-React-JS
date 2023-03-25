import React from "react";
import './Screen.css'


function Screen(props){

    const { screenValue } = props;

    return (
        <div className="screen-container">
            <div className="screen">{screenValue}</div>
        </div>
    )
}


export default Screen;