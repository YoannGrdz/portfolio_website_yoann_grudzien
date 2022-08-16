import './App.css';
import "./components/Welcome.js";
import Welcome from './components/Welcome.js';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import About from './components/About';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Socials />
      <Welcome />
      <About />
      <Tools />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
