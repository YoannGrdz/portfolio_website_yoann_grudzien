import React from "react";
import uk from "../logos/uk.png";
import jp from "../logos/japan.png";
import fr from "../logos/france.png";



export default function Navbar(props){

    const language = props.language;
    const setLanguage = props.setLanguage;

    // functions used to set the state of the website's language
    function setToEnglish(){
        setLanguage("english");
    }
    function setToJapanese(){
        setLanguage("japanese");
    }
    function setToFrench(){
        setLanguage("french");
    }

    // array storing each language's relevant data. Will be used to generate the language menu dynamically.
    const languagesList = [
        {
            lang: "english",
            flag: uk,
            setter: setToEnglish
        },
        {
            lang: "french",
            flag: fr,
            setter: setToFrench
        },
        {
            lang: "japanese",
            flag: jp,
            setter: setToJapanese
        }
    ];

    let current;

    for (let i = 0; i < languagesList.length; i++){
        if (languagesList[i].lang === language) {
            current = languagesList.splice(i, 1);
        }
    }


    // function used to activate the contact form's visibility
    const setFormDisplay = props.setFormDisplay;
    function showForm (){
        setFormDisplay(true);
    }

    return (
        <nav className="nav">
            <p className="nav--logo">Y</p>
            <ul className="nav--list">
                <li className="nav--button">
                    <a href="#Welcome">{language === "english" ? "Welcome" : language === "french" ? "Bienvenue" : "ようこそ"}</a>
                </li>
                <li className="nav--button">
                    <a href="#About">{language === "english" ? "About" : language === "french" ? "À propos" : "私について"}</a>
                </li>
                <li className="nav--button">
                    <a href="#Tools">{language === "english" ? "My tools" : language === "french" ? "Mes outils" : "ツール"}</a>
                </li>
                <li className="nav--button">
                    <a href="#Projects">{language === "english" ? "Projects" : language === "french" ? "Projets" : "プロジェクト"}</a>
                </li>
                <li className="contact--button" onClick={showForm}>{language === "english" ? "Get in touch" : language === "french" ? "Me contacter" : "問い合わせ"}</li>

                <li className="language">
                    <div className="flag--container">
                        <img className="flag" src={current[0].flag} alt={current.lang}></img>
                    </div>
                    <ul className="language--dropdown">
                        <li className="language--space"></li>
                        <li className="language--option" onClick={languagesList[0].setter}>
                            <img className="flag" src={languagesList[0].flag} alt={languagesList[0].lang}></img>
                        </li>
                        <li className="language--option" onClick={languagesList[1].setter}>
                            <img className="flag" src={languagesList[1].flag} alt={languagesList[1].lang}></img>
                        </li>
                    </ul>
                </li>
            </ul>
            <li className="menu--icon">
                <div className="menu--bar bar--1"></div>
                <div className="menu--bar bar--2"></div>
                <div className="menu--bar bar--3"></div>
            </li>
        </nav>
    )

}