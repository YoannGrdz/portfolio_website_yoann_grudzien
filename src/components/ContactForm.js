import React from "react";

export default function ContactForm(props){


    return(
        <div className="contact--form--container">
            <div className="contact--form">
                <button className="contact--form--exit--btn"></button>
                <h2 className="contact--form--title">Contact me !</h2>
                <input type="text" className="text--input contact--form--name--input" required placeholder="Enter your name" />
                <input type="email" className="text--input contact--form--email--input" required placeholder="Enter your email"/>
                <input type="text" className="text--input contact--form--text--input" required placeholder="Enter the subject"/>
                <textarea className="contact--form--message" required placeholder="Enter your message"/>
                <button className="contact--form--send--btn">Send</button>
            </div>
        </div>
    )
}