import React from "react";
import './welcome.css';
import mainphoto from "./dahliaemptyface.png"

const Welcome = () => {
    return (
        <div>
            <p> Hello! I'm </p>
            <h1 className = "dname"> Dahlia L.  </h1>
            <h3> Current CS student at UF. Aspiring Software Engineer </h3>

            <img src={mainphoto} className="main-picture" alt="logo" />

         
        </div>
    );
};

export default Welcome;