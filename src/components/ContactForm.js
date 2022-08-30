import React from "react";

export default function ContactForm(props){

    const formDisplay = props.formDisplay;
    const setFormDisplay = props.setFormDisplay;

    function hideForm(){
        setFormDisplay(false);
    }

    // if form display is set to false, the style object given to the contact--form--container element mekes it hidden
    const visibility = formDisplay ? "" : "hidden";
    const style = {
        visibility: visibility
    }

    return(
        <div className="contact--form--container" style={style}>
            <div className="contact--form">
                <button className="contact--form--exit--btn" onClick={hideForm}></button>
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