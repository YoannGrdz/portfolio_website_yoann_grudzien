import React from "react";
import pic from "../pictures/profile-pic-01.JPG";

export default function About(){


    return (
        <section className="about" id="About">
            <div className="about--content">
                <div className="about--background">About</div>
                <div className="about--text">
                    <h2 className="about--title">About me</h2>
                    <div className="about--description">
                        <p>I'm a French web developer passionate about website and web application design and building.</p>
                        <p>I enjoy crafting fast, responsive, interactive and visually pleasant experiences for all users and devices.</p>
                        <p>In my free time you can find me video editing in my room, working out, or flying my paraglider !</p>
                    </div>
                </div>
                <div className="about--picture">
                    
                    <img className="my--pic" src={pic} alt="me"></img>
                    <div className="pic--footer">
                        <p>Just everyday me !</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}