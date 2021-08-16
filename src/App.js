import './App.css';
import ContactForm from './components/ContactForm';
import TitleCard from './components/TitleCard'
import ProjectsCard from './components/ProjectsCard';
import AboutUs from './components/AboutUs'; 


function App() {
    
  return (
    <>
      <TitleCard/>
      <AboutUs/>
      <br />
      <br />
      <div id="projects">
        <ProjectsCard name="Nicole" swipeDirection="right" />
        <ProjectsCard name="Austin" swipeDirection="left" />
      </div>
      <br />
      <br />
      <ContactForm></ContactForm>
      <h6>Built by Austin and Nicole</h6>
    </>
  );
}

export default App;
