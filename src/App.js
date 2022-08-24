import './App.css';
import "./components/Welcome.js";
import Welcome from './components/Welcome.js';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import About from './components/About';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Footer from './components/Footer';
import React from 'react';

function App() {

  const [language, setLanguage] = React.useState("english");


  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} />
      <Socials />
      <Welcome language={language}/>
      <About language={language} />
      <Tools language={language} />
      <Projects language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
