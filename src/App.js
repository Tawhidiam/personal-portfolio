import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import ProjectCard from './components/ProjectCard.js';
import Contact from './components/Contact.js';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
