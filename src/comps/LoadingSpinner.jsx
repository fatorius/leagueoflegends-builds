import React from "react";

import './LoadingSpinner.css';

function LoadingSpinner(){
    return (
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default LoadingSpinner;