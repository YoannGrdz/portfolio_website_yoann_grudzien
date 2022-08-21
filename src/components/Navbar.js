import React from "react";
import uk from "../logos/uk.png";
import jp from "../logos/japan.png";
import fr from "../logos/france.png";

export default function Navbar(){

    return (
        <nav className="nav">
            <p className="nav--logo">Y</p>
            <ul className="nav--list">
                <li className="nav--button"><a href="#Welcome">Welcome</a></li>
                <li className="nav--button"><a href="#About">About</a></li>
                <li className="nav--button"><a href="#Tools">My tools</a></li>
                <li className="nav--button"><a href="#Projects">Projects</a></li>
                <li className="contact--button">Get in touch</li>
                <li className="language">
                    <div className="flag--container">
                        <img className="flag" src={uk} alt="english"></img>
                    </div>
                    <ul className="language--dropdown">
                        <li className="language--space"></li>
                        <li className="language--option">
                            <img className="flag" src={fr} alt="english"></img>
                        </li>
                        <li className="language--option">
                            <img className="flag" src={jp} alt="english"></img>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )

}