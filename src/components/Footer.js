import React from "react";

export default function Footer(props){

    const language = props.language;

    const p2_en = "Handcrafted by me © 2022 - Yoann.dev - All rights reserved";
    const p2_fr = "Fabriqué à la main par mes soins © 2022 - Yoann.dev - Tous droits réservés";
    const p2_jp = "私が作成しました。 © 2022 - Yoann.dev - 無断複写・転載を禁じます。";

    
    return (
        <footer className="footer">
            <p>{language === "english" ? "See ya !" : language === "french" ? "À plus !" : "またね !"}</p>
            <p>{language === "english" ? p2_en : language === "french" ? p2_fr : p2_jp}</p>
            <div className="footer--links">
                <p>{language === "english" ? "Credits" : language === "french" ? "Crédits" : "クレジット"}</p>
                <p>{language === "english" ? "Legal mentions" : language === "french" ? "Mentions légales" : "法的言及"}</p>
            </div>
        </footer>
    )
}