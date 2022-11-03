import React, { useEffect } from "react";
import profile_picture from "../pictures/profile_picture02.JPG";
import Aos from "aos";
import "aos/dist/aos.css";


export default function About(props){

    // inititaliszinf animations on scroll
    useEffect(() => {
        Aos.init({duration: 750});
    }, [])

    const language = props.language;

    // Saving the different language options for each paragraph in variables to avoid exceedingly long ternary operators inside the JSX.
    const p1_en = "I'm a French web developer passionate about website and web application design and building.";
    const p1_fr = "Je suis un développeur web français passionné par la conception et la construction de sites et d'applications web.";
    const p1_jp = "私はフランスのウェブ開発者で、ウェブサイトと ウェブアプリケーションの設計と構築に情熱を注いでいます。";

    const p2_en = "I enjoy crafting fast, responsive, interactive and visually pleasant experiences for all users and devices.";
    const p2_fr = "J'aime créer des expériences rapides, réactives, interactives et visuellement agréables pour tout utilisateur et appareil.";
    const p2_jp = "すべてのユーザーとデバイスに対して、スピーディーに対応し、相互的かつ視覚的に快適なエクスペリエンスを作成することを楽しんでいます。";

    const p3_en = "In my free time you can find me learning stuff on youtube at home, working out, or having a drink at a bar with friends !";
    const p3_fr = "Pendant mon temps libre, vous pouvez me trouver en train d'apprendre des nouvelles choses sur youtube, de faire du sport, ou de prendre un verre dans un bar avec des amis !";
    const p3_jp = "自由な時間には、自宅で YouTube で何かを学んだり、ワークアウトしたり、友達とバーでドリンクを楽しんだりしています。";

    return (
        <section className="about" id="About">
            <div className="about--content">
                <div className="about--background" data-aos="fade-right" data-aos-delay="400">{language === "english" ? "About" : language === "french" ? "À propos" : "私について"}</div>
                <div className="about--text">
                    <h2 className="about--title" data-aos="fade-up" >{language === "english" ? "About me" : language === "french" ? "À propos de moi" : "私について"}</h2>
                    <div className="about--description" data-aos="fade-up" >
                        <p>{language === "english" ? p1_en : language === "french" ? p1_fr : p1_jp}</p>
                        <p>{language === "english" ? p2_en : language === "french" ? p2_fr : p2_jp}</p>
                        <p>{language === "english" ? p3_en : language === "french" ? p3_fr : p3_jp}</p>
                    </div>
                </div>
                <div className="about--picture" data-aos="flip-left" data-aos-delay="800">
                    <div className="my--pic" style={{backgroundImage: `url(${profile_picture})`}}></div>
                    <div className="pic--footer">
                        <p>{language === "english" ? "Just everyday me !" : language === "french" ? "Moi au quotidien !" : "ただ毎日の私"}</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}