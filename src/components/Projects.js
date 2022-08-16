import React from "react";
import gameOfLife02 from "../pictures/gameOfLife02.png";
import bookme01 from "../pictures/bookme01.png";
import finance01 from "../pictures/finance01.png";
import piano01 from "../pictures/piano.jpg";
import crudApp01 from "../pictures/crudApp01.jpg";
import portfolio01 from "../pictures/portfolio01.png";
import logosObject from "../logos/logos.js";

var github_svg = logosObject.github_svg;

export default function Projects(){


    return(
        <div className="projects" id="Projects">
            <h2 className="projects--header">My Projects</h2>
            <div className="projects--grid">
                <div className="project" id="project--div--game">
                    <div className="project--pic" style={{ backgroundImage: `url(${gameOfLife02})` }}></div>
                    <div className="project--info">
                        <h3>The React Game of Life</h3>
                        <p>Web application built with React. Users can play Conway's Game of Life on a grid and test different patterns.</p>
                    </div>
                    <div className="project--github">
                        {github_svg()}
                    </div>
                </div>
                <div className="project" id="project--div--bookme">
                    <div className="project--pic" style={{backgroundImage: `url(${bookme01})`}}></div>
                    <div className="project--info"> 
                        <h3>Bookme</h3>
                        <p>Web application built with Flask, users can manage their calendar and define their availability, as well as add other users and check their availability.</p>               
                    </div>
                    <div className="project--github">
                        {github_svg()}
                    </div>     
                </div>
                <div className="project" id="project--div--finance">
                    <div className="project--pic" style={{backgroundImage: `url(${finance01})`}}></div>
                    <div className="project--info">
                        <h3>Finance</h3>
                        <p>Web application built with Flask, users can manage a portfolio of stocks, check stock prices in real time thanks to an api, and simulate investing in the stock market.</p>
                    </div>
                    <div className="project--github">
                        {github_svg()}
                    </div>
                </div>
                <div className="project" id="project--div--portfolio">
                    <div className="project--pic" style={{backgroundImage: `url(${portfolio01})`}}></div>
                    <div className="project--info">
                        <h3>My Portfolio Website</h3>
                        <p>Website-ception ! This website you're on was built with React, it is a single-page web application which allows me to present myself and demonstrate some of my skills.</p>
                    </div>
                    <div className="project--github">
                        {github_svg()}
                    </div>
                </div>
                <div className="project" id="project--div--piano">
                    <div className="project--pic" style={{backgroundImage: `url(${piano01})`}}></div>
                    <div className="project--info">
                        <h3>React Keyboard Piano</h3>
                        <p>Coming soon ! A web application built with React where users can play the piano with their keyboard.</p>
                    </div>
                    <div className="project--github">
                        {github_svg()}
                    </div>
                </div>
                <div className="project" id="project--div--crud">
                    <div className="project--pic" style={{backgroundImage: `url(${crudApp01})`}}></div>
                    <div className="project--info">
                        <h3>React Crud App</h3>
                        <p>Coming soon ! A web application built with React where users can login and... do some stuff.</p>
                    </div>
                    <div className="project--github">
                        {github_svg()}
                    </div>
                </div>
            </div>
        </div>    

    )
}