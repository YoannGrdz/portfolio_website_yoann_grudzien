import React from "react";
import logosObject from "../logos/logos";

export default function Tools(){
    return (

        <div className='tools' id="Tools">
            <h2 className="tools--title">The tools I use</h2>
            <p className="tools--text">I'm constantly updating my knowledge of the technologies I use, as well as learning new ones to complement my toolset. By doing so I am ensuring to stay informed and up to date with the industry's standards.</p>
            <div className='hex--container'>

                <div className="hex--row hex--row--1">
                    <div className="hex">
                        {logosObject.html_svg()}
                    </div>
                    <div className="hex">
                        {logosObject.css_svg()}
                    </div>
                    <div className="hex">
                        {logosObject.js_svg()}
                    </div>
                    <div className="hex">
                        {logosObject.react_svg()}
                    </div>
                    <div className="hex">
                        {logosObject.python_svg()}
                    </div>
                    <div className="hex">
                        {logosObject.flask_svg()}
                    </div>
                </div>

                <div className="hex--row hex--row--2">
                    <div className="hex">
                        {logosObject.git_svg()}
                    </div>
                    <div className="hex">
                        {logosObject.bootstrap_svg()}
                    </div>
                    <div className="hex">
                        {logosObject.vscode_svg()}
                    </div>
                    <div className="hex" id="codpen--div">
                        {logosObject.codepen_svg()}
                    </div>
                    <div className="hex">
                        {logosObject.sql_svg()}
                    </div>
                    <div className="hex">
                        {logosObject.github_svg()}
                    </div>
                </div>

            </div>
        </div>

    )
}