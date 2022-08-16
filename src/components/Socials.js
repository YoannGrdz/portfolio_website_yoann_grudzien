import React from "react";
import logosObject from "../logos/logos";


export default function Socials(){

    return(

        <div className="socials">
            <div className="social">
                {logosObject.github_svg2()}
            </div>
            <div className="social">
                {logosObject.linkedin_svg()}
            </div>
            <div className="social">
                {logosObject.codepen_svg2()}
            </div>
            <div className="socials--trail"></div>
        </div>

    )
}