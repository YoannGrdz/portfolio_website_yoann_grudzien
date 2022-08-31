import React from "react";

export default function ContactForm(props){

    const formDisplay = props.formDisplay;
    const setFormDisplay = props.setFormDisplay;
    const language = props.language;

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
                <h2 className="contact--form--title">{language === "english" ? "Contact me !" : language === "french" ? "Contactez moi !" : "私に連絡して !"}</h2>
                <input type="text" className="text--input contact--form--name--input" required placeholder={language === "english" ? "Enter your name": language === "french" ? "Votre nom" : "お名前"} />
                <input type="email" className="text--input contact--form--email--input" required placeholder={language === "english" ? "Enter your email" : language === "french" ? "Votre adresse email" : "メールアドレス"}/>
                <input type="text" className="text--input contact--form--text--input" required placeholder={language === "english" ? "Enter the subject" : language === "french" ? "Sujet du message" : "メッセージの件名"} />
                <textarea className="contact--form--message" required placeholder={language === "english" ? "Enter your message" : language === "french" ? "Votre message" : "メッセージ"} />
                <button className="contact--form--send--btn">Send</button>
            </div>
        </div>
    )
}