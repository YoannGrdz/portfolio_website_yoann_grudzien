import React from "react";
import pic from "../pictures/profile-pic-01.JPG";

export default function About(props){

    const language = props.language;

    // Saving the different language options for each paragraph in variables to avoid exceedingly long ternary operators inside the JSX.
    const p1_en = "I'm a French web developer passionate about website and web application design and building.";
    const p1_fr = "Je suis un développeur web français passionné par la conception et la construction de sites et d'applications web.";
    const p1_jp = "私はフランスのウェブ開発者で、ウェブサイトと ウェブアプリケーションの設計と構築に情熱を注いでいます。";

    const p2_en = "I enjoy crafting fast, responsive, interactive and visually pleasant experiences for all users and devices.";
    const p2_fr = "J'aime créer des expériences rapides, réactives, interactives et visuellement agréables pour tout utilisateur et appareil.";
    const p2_jp = "すべてのユーザーとデバイスに対して、スピーディーに対応し、相互的かつ視覚的に快適なエクスペリエンスを作成することを楽しんでいます。";

    const p3_en = "In my free time you can find me video editing in my room, working out, or flying my paraglider !";
    const p3_fr = "Pendant mon temps libre, vous pouvez me trouver en train de faire du montage vidéo dans ma chambre, de faire du sport ou de piloter mon parapente !";
    const p3_jp = "自由な時間には、部屋でビデオ編集をしたり、ワークアウトしたり、パラグライダーを飛ばしたりしています。";

    return (
        <section className="about" id="About">
            <div className="about--content">
                <div className="about--background">{language === "english" ? "About" : language === "french" ? "À propos" : "私について"}</div>
                <div className="about--text">
                    <h2 className="about--title">{language === "english" ? "About me" : language === "french" ? "À propos de moi" : "私について"}</h2>
                    <div className="about--description">
                        <p>{language === "english" ? p1_en : language === "french" ? p1_fr : p1_jp}</p>
                        <p>{language === "english" ? p2_en : language === "french" ? p2_fr : p2_jp}</p>
                        <p>{language === "english" ? p3_en : language === "french" ? p3_fr : p3_jp}</p>
                    </div>
                </div>
                <div className="about--picture">
                    
                    <img className="my--pic" src={pic} alt="me"></img>
                    <div className="pic--footer">
                        <p>{language === "english" ? "Just everyday me !" : language === "french" ? "Moi au quotidien !" : "ただ毎日の私"}</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}