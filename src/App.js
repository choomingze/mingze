import logo from './logo.svg';
import './App.css';
import mingZeGraduate from "./assets/img/backgroundImg2.jpg";
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { Project } from './components/Project';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App" style={{backgroundColor:'#e6e6e6'}}>
      <NavBar/>
      <AboutMe/>
      <Skills/>
      <Experience/>
      <Project/>    
      </div>
  );
}

export default App;
