import React from "react";
import gameOfLife02 from "../pictures/gameOfLife02.png";
import bookme01 from "../pictures/bookme01.png";
import finance01 from "../pictures/finance01.png";
import piano01 from "../pictures/piano.jpg";
import crudApp01 from "../pictures/crudApp01.jpg";
import portfolio01 from "../pictures/portfolio01.png";
import logosObject from "../logos/logos.js";

var github_svg = logosObject.github_svg;

export default function Projects(props){

    const language = props.language;

    // variables used to store the different language options for each project
    const description_game_of_life_en = "Web application built with React. Users can play Conway's Game of Life on a grid and test different patterns.";
    const description_game_of_life_fr = "Application Web construite avec React. Les utilisateurs peuvent jouer au jeu de la vie de Conway sur une grille et tester différentes configurations.";
    const description_game_of_life_jp = "React で構築された ウェブ アプリケーション。ユーザーはグリッド上でコンウェイのライフ ゲームをプレイし、さまざまなパターンをテストできます。";

    const description_bookme_en = "Web application built with Flask, users can manage their calendar and define their availability, as well as add other users and check their availability.";
    const description_bookme_fr = "Application Web construite avec Flask, les utilisateurs peuvent gérer leur calendrier et définir leur disponibilité, ainsi qu'ajouter d'autres utilisateurs et vérifier leur disponibilité.";
    const description_bookme_jp = "Flask で構築された ウェブ アプリケーションで、ユーザーは自分のカレンダーを管理して空き状況を定義できるだけでなく、他のユーザーを追加して空き状況を確認できます。";

    const description_finance_en = "Web application built with Flask, users can manage a portfolio of stocks, check stock prices in real time thanks to an API, and simulate investing in the stock market.";
    const description_finance_fr = "Application Web construite avec Flask, les utilisateurs peuvent gérer un portefeuille d'actions, vérifier les cours des actions en temps réel grâce à une API et simuler des investissements en bourse.";
    const description_finance_jp = "Flask で構築された ウェブ アプリケーションで、ユーザーは株式のポートフォリオを管理し、API のおかげでリアルタイムで株価を確認し、株式市場への投資をシミュレートできます。";

    const description_portfolio_en = "Website-ception ! This website you're on was built with React, it is a single-page web application which allows me to present myself and demonstrate some of my skills.";
    const description_portfolio_fr = "Site-ception ! Ce site web sur lequel vous vous trouvez a été construit avec React, c'est une application web d'une seule page qui me permet de me présenter et de démontrer certaines de mes compétences.";
    const description_portfolio_jp = "Website-ception ！あなたがアクセスしているこの ウェブ サイトは React で構築されています。これは単一ページの Web アプリケーションであり、自己紹介と私のスキルの一部を示すことができます。";

    const description_piano_en = "Coming soon ! A web application built with React where users can play the piano with their keyboard.";
    const description_piano_fr = "Bientôt disponible ! Une application Web construite avec React où les utilisateurs peuvent jouer du piano avec leur clavier.";
    const description_piano_jp = "近日公開 ! ユーザーがキーボードでピアノを弾くことができる、React で構築された ウェブ アプリケーション。";

    const description_crud_en = "Coming soon ! A web application built with React where users can login and... do some stuff.";
    const description_crud_fr = "Bientôt disponible ! Une application Web construite avec React où les utilisateurs peuvent se connecter et... faire des choses.";
    const description_crud_jp = "近日公開 ! React で構築された ウェブ アプリケーションで、ユーザーがログインして何かを行うことができます。";



    return(
        <div className="projects" id="Projects">
            <h2 className="projects--header">My Projects</h2>
            <div className="projects--grid">
                <div className="project" id="project--div--game">
                    <div className="project--pic" style={{ backgroundImage: `url(${gameOfLife02})` }}></div>
                    <div className="project--info">
                        <h3>The React Game of Life</h3>
                        <p>{language === "english" ? description_game_of_life_en : language === "french" ? description_game_of_life_fr : description_game_of_life_jp}</p>
                    </div>
                    <a className="project--github" href="https://github.com/YoannGrdz/react-game-of-life.git" target="_blank" rel="noopener noreferrer">
                        {github_svg()}
                    </a>
                </div>
                <div className="project" id="project--div--bookme">
                    <div className="project--pic" style={{backgroundImage: `url(${bookme01})`}}></div>
                    <div className="project--info"> 
                        <h3>Bookme</h3>
                        <p>{language === "english" ? description_bookme_en : language === "french" ? description_bookme_fr : description_bookme_jp}</p>               
                    </div>
                    <a className="project--github" href="https://github.com/YoannGrdz/Bookme.git" target="_blank" rel="noopener noreferrer">
                        {github_svg()}
                    </a>     
                </div>
                <div className="project" id="project--div--finance">
                    <div className="project--pic" style={{backgroundImage: `url(${finance01})`}}></div>
                    <div className="project--info">
                        <h3>Finance</h3>
                        <p>{language === "english" ? description_finance_en : language === "french" ? description_finance_fr : description_finance_jp}</p>
                    </div>
                    <a className="project--github" href="https://github.com/YoannGrdz/finance.git" target="_blank" rel="noopener noreferrer">
                        {github_svg()}
                    </a>
                </div>
                <div className="project" id="project--div--portfolio">
                    <div className="project--pic" style={{backgroundImage: `url(${portfolio01})`}}></div>
                    <div className="project--info">
                        <h3>My Portfolio Website</h3>
                        <p>{language === "english" ? description_portfolio_en : language === "french" ? description_portfolio_fr : description_portfolio_jp}</p>
                    </div>
                    <a className="project--github" href="https://github.com/YoannGrdz/portfolio_website_yoann_grudzien.git" target="_blank" rel="noopener noreferrer">
                        {github_svg()}
                    </a>
                </div>
                <div className="project" id="project--div--piano">
                    <div className="project--pic" style={{backgroundImage: `url(${piano01})`}}></div>
                    <div className="project--info">
                        <h3>React Keyboard Piano</h3>
                        <p>{language === "english" ? description_piano_en : language === "french" ? description_piano_fr : description_piano_jp}</p>
                    </div>
                    <div className="project--github">
                        {github_svg()}
                    </div>
                </div>
                <div className="project" id="project--div--crud">
                    <div className="project--pic" style={{backgroundImage: `url(${crudApp01})`}}></div>
                    <div className="project--info">
                        <h3>React Crud App</h3>
                        <p>{language === "english" ? description_crud_en : language === "french" ? description_crud_fr : description_crud_jp}</p>
                    </div>
                    <div className="project--github">
                        {github_svg()}
                    </div>
                </div>
            </div>
        </div>    

    )
}