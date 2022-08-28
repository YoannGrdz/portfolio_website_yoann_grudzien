import React from "react";
import logosObject from "../logos/logos";

export default function Tools(props){

    const language = props.language;

    const paragraph_en = "I'm constantly updating my knowledge of the technologies I use, as well as learning new ones to complement my toolset. By doing so I am ensuring to stay informed and up to date with the industry's standards.";
    const paragraph_fr ="Je mets constamment à jour mes connaissances sur les technologies que j'utilise et j'en apprends de nouvelles pour compléter mon pannel d'outils. Ce faisant, je m'assure de rester informé et à jour avec les normes de l'industrie.";
    const paragraph_jp ="使用するテクノロジに関する知識を常に更新し、ツールセットを補完する新しいテクノロジを学習しています。そうすることで、私は常に最新の情報を入手し、業界の基準を最新の状態に保つことができます。";

    return (

        <div className='tools' id="Tools">
            <h2 className="tools--title">{language === "english" ? "The tools I use" : language === "french" ? "Mes outils" : "私のツール"}</h2>
            <p className="tools--text">{language === "english" ? paragraph_en : language === "french" ? paragraph_fr : paragraph_jp}</p>
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