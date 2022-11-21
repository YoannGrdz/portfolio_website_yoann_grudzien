import React from "react";
import logosObject from "../logos/logos";

export default function Tools(props){

    // animations with intersection observer ---

    // for h2
    const h2Ref = React.useRef();
    const [h2Visible, setH2Visible] = React.useState();
    // for p
    const pRef = React.useRef();
    const [pVisible, setPVisible] = React.useState();
    // for hex section
    const hexRef = React.useRef();
    const [hexVisible, setHexVisible] = React.useState();

    React.useEffect(() => {

        // for h2
        const h2Observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setH2Visible(entry.isIntersecting);
        }, {
            threshold: 1
        })
        h2Observer.observe(h2Ref.current);

        // for p
        const pObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setPVisible(entry.isIntersecting);
        }, {
            threshold: 1
        })
        pObserver.observe(pRef.current);

        // for hex section
        const hexObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setHexVisible(entry.isIntersecting);
        }, {
            threshold: 0.4
        })
        hexObserver.observe(hexRef.current);

    },[])

    
    // ---

    const language = props.language;

    const paragraph_en = "I'm constantly updating my knowledge of the technologies I use, as well as learning new ones to complement my toolset. By doing so I am ensuring to stay informed and up to date with the industry's standards.";
    const paragraph_fr ="Je mets constamment à jour mes connaissances sur les technologies que j'utilise et j'en apprends de nouvelles pour compléter mon pannel d'outils. Ce faisant, je m'assure de rester informé et à jour avec les normes de l'industrie.";
    const paragraph_jp ="使用するテクノロジーに関する知識を常にアップデートし、ツールセットを補足する新しいテクノロジーを学んでいます。そうすることで、私は常に最新の情報を入手し、業界の基準を最新の状態に保つことができます。";

    return (

        <section className='tools' id="Tools">
            <h2 className={h2Visible ? "tools--title tools--title--visible" : "tools--title"} ref={h2Ref}>{language === "english" ? "The tools I use" : language === "french" ? "Mes outils" : "私のツール"}</h2>
            <p className={pVisible ? "tools--text tools--text--visible" : "tools--text"} ref={pRef}>{language === "english" ? paragraph_en : language === "french" ? paragraph_fr : paragraph_jp}</p>
            <div className={hexVisible ? "hex--container hex--container--visible" : "hex--container"} ref={hexRef}>

                <div className="hex--row hex--row--1">
                    <div className="hex--subrow sub--1">
                        <div className="hex">
                            <div className="hex--front">{logosObject.html_svg()}</div>
                            <div className="hex--back">html</div>
                        </div>
                        <div className="hex">
                            <div className="hex--front">{logosObject.css_svg()}</div>
                            <div className="hex--back">css</div>    
                        </div>
                        <div className="hex">
                            <div className="hex--front">{logosObject.js_svg()}</div>
                            <div className="hex--back">javascript</div>    
                        </div>
                    </div>
                    <div className="hex--subrow">
                        <div className="hex">
                            <div className="hex--front">{logosObject.react_svg()}</div>
                            <div className="hex--back">react</div>
                        </div>
                        <div className="hex">
                            <div className="hex--front">{logosObject.python_svg()}</div>
                            <div className="hex--back">python</div>
                        </div>
                        <div className="hex">
                            <div className="hex--front">{logosObject.flask_svg()}</div>
                            <div className="hex--back">flask</div>
                        </div>
                    </div>
                </div>
                <div className="hex--row hex--row--2">
                    <div className="hex--subrow">
                        <div className="hex">
                            <div className="hex--front">{logosObject.git_svg()}</div>
                            <div className="hex--back">git</div>
                        </div>
                        <div className="hex">
                            <div className="hex--front">{logosObject.bootstrap_svg()}</div>
                            <div className="hex--back">bootstrap</div>
                        </div>
                        <div className="hex">
                            <div className="hex--front">{logosObject.vscode_svg()}</div>
                            <div className="hex--back">v.s. code</div>
                        </div>
                    </div>
                    <div className="hex--subrow  sub--4">
                        <div className="hex" id="codpen--div">
                            <div className="hex--front">{logosObject.codepen_svg()}</div>
                            <div className="hex--back">codepen</div>  
                        </div>
                        <div className="hex">
                            <div className="hex--front">{logosObject.sql_svg()}</div>
                            <div className="hex--back">sql</div>
                        </div>
                        <div className="hex">
                            <div className="hex--front">{logosObject.github_svg()}</div>
                            <div className="hex--back">github</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
