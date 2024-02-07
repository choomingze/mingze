import logo from './logo.svg';
import './App.css';
import mingZeGraduate from "./assets/img/backgroundImg2.jpg";
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { Project } from './components/Project';
import { ContactMe } from './components/ContactMe';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App" style={{background: 'linear-gradient(to bottom, #e6e6e6, white)'}}>
      
      <NavBar/>
      <AboutMe/>
      <Skills/>
      <Experience/>
      <Project/>    
      <ContactMe/>  
      </div>
  );
}

export default App;
