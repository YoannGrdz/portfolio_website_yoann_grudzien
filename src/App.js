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
import ContactForm from './components/ContactForm';

function App() {

  // state used to decide what language should be displayed.
  const [language, setLanguage] = React.useState("english");

  // state used to decide whether the contact form should be displayed.
  const [formDisplay, setFormDisplay] = React.useState(false);

  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} setFormDisplay={setFormDisplay} />
      <Socials />
      <ContactForm language={language} formDisplay={formDisplay} setFormDisplay={setFormDisplay} />
      <Welcome language={language}/>
      <About language={language} />
      <Tools language={language} />
      <Projects language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
