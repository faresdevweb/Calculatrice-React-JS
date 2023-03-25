import React from "react";
import "./Boutton.css";

function Boutton(props){
    const { value, handleClick,className } = props;

    return (
        <button 
            onClick={handleClick} 
            className={className}
            data-value={value}
        >{value}</button>
    )
}

export default Boutton;