import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';





export default function ContactForm(props){

    // code used to connect the form to the emailjs sevice, see https://www.emailjs.com/ for info
    const form = useRef();
  
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_obdagma', 
            'template_i038dq8', 
            form.current, 
            'LVRygFkD1LjQSFD--'
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


    // props used to manage form visibility and language
    const formDisplay = props.formDisplay;
    const setFormDisplay = props.setFormDisplay;
    const language = props.language;

    // closes the form
    function hideForm(){
        setFormDisplay(false);
    }

    // if form display is set to false, the style object given to the contact--form--container element mekes it hidden
    const visibility = formDisplay ? "" : "hidden";
    const style = {
        visibility: visibility
    }

    // formd data state
    const [formData, setFormData] = React.useState(
        {
            username: "",
            userEmail: "",
            subject: "",
            message: ""
        }
    )

    function handleChange(event){

        const {name, value} = event.target;
        setFormData(
            previous => {
                return {
                    ...previous,
                    [name]: value
                }
            }
        )
    }




    return(
        <div className="contact--form--container" style={style} onSubmit={sendEmail}>
            <form className="contact--form" ref={form}>
                <button type="button" className="contact--form--exit--btn" onClick={hideForm}></button>
                <h2 className="contact--form--title">{language === "english" ? "Contact me !" : language === "french" ? "Contactez moi !" : "お問い合わせ !"}</h2>
                <input 
                    type="text" 
                    className="text--input contact--form--name--input" 
                    required 
                    placeholder={language === "english" ? "Enter your name": language === "french" ? "Votre nom" : "お名前"} 
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input 
                    type="email" 
                    className="text--input contact--form--email--input" 
                    required 
                    placeholder={language === "english" ? "Enter your email" : language === "french" ? "Votre adresse email" : "メールアドレス"}
                    name="userEmail"
                    value={formData.userEmail}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    className="text--input contact--form--text--input" 
                    required 
                    placeholder={language === "english" ? "Enter the subject" : language === "french" ? "Sujet du message" : "メッセージの件名"} 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
                <textarea 
                    className="contact--form--message" 
                    required 
                    placeholder={language === "english" ? "Enter your message" : language === "french" ? "Votre message" : "メッセージ"} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
                <button type="submit" className="contact--form--send--btn">{language === "english" ? "Send" : language === "french" ? "Envoyer" : "送信"}</button>
            </form>
        </div>
    )
}