import React from "react";
import logosObject from "../logos/logos";


export default function Socials(){

    return(

        <div className="socials">
            <div className="social">
                <a href="https://github.com/YoannGrdz" target="_blank" rel="noopener noreferrer">{logosObject.github_svg2()}</a>
            </div>
            <div className="social">
                <a href="https://www.linkedin.com/in/yoann-grudzien" target="_blank" rel="noopener noreferrer">{logosObject.linkedin_svg()}</a>
            </div>
            <div className="social">
                <a href="https://codepen.io/yoanngrdz" target="_blank" rel="noopener noreferrer">{logosObject.codepen_svg2()}</a>
            </div>
            <div className="socials--trail"></div>
        </div>

    )
}