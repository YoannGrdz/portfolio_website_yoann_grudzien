import React from "react";

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
            </ul>
        </nav>
    )

}