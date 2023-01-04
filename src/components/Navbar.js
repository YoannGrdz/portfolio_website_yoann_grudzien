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

    // current will store the language that is currently selected in a list of length 1, while removing it from languageList
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

    // mobile navbar control ------------------------------------------------ //
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);


    function toggleMenu(){
        setMenuIsOpen(previous => !previous);
    }

    function closeMenu(){
        setMenuIsOpen(false);
    }


    return (
        <nav className="nav">
            <a href="#Welcome" className="nav--logo--container" onClick={closeMenu}><p className="nav--logo">Y</p></a>
            <ul className={menuIsOpen ? "nav--list" : "nav--list nav--list--hidden"}>
                <li className="nav--button">
                    <a href="#Welcome" onClick={closeMenu}>{language === "english" ? "Welcome" : language === "french" ? "Bienvenue" : "ようこそ"}</a>
                </li>
                <li className="nav--button">
                    <a href="#About" onClick={closeMenu}>{language === "english" ? "About" : language === "french" ? "À propos" : "私について"}</a>
                </li>
                <li className="nav--button">
                    <a href="#Tools" onClick={closeMenu}>{language === "english" ? "My tools" : language === "french" ? "Mes outils" : "ツール"}</a>
                </li>
                <li className="nav--button">
                    <a href="#Projects" onClick={closeMenu}>{language === "english" ? "Projects" : language === "french" ? "Projets" : "プロジェクト"}</a>
                </li>
                <li className="contact--button" onClick={showForm}>{language === "english" ? "Get in touch" : language === "french" ? "Me contacter" : "問い合わせ"}</li>

                <li className="language">
                    <div className="flag--container">
                        <img className="flag" src={current[0].flag} alt={current[0].lang}></img>
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
            <li className="menu--icon" onClick={toggleMenu}>
                <div className={menuIsOpen ? "menu--bar bar--1" : "menu--bar"}></div>
                <div className={menuIsOpen ? "menu--bar bar--2" : "menu--bar"}></div>
                <div className={menuIsOpen ? "menu--bar bar--3" : "menu--bar"}></div>
            </li>
        </nav>
    )

}