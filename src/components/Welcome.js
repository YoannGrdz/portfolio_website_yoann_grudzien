import React from "react";

export default function Welcome(props) {

    const language = props.language;

    return (
        <div className="welcome" id="Welcome">
            <p className='hi'>
                {language === "english" ? "Hi, my name is" : language === "french" ? "Bonjour, je m'appelle" : "こんにちは、私の名前は"}
            </p>

            <h1 className="name">Yoann Grudzien</h1>
            {language === "japanese" && <p className="hi2">です</p>}
            <p className="job-title">Front-end Developer</p>
        </div>
    )

}