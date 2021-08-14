import './App.css';
import ContactForm from './components/ContactForm';
import TitleCard from './components/TitleCard'
import ProjectsCard from './components/ProjectsCard';


function App() {
  return (
    <>
      <TitleCard/>
      <div id="projects">
        <ProjectsCard name="Nicole" swipeDirection="right" />
        <ProjectsCard name="Austin" swipeDirection="left" />
      </div>
      <h6>Built by Austin and Nicole</h6>
    </>
  );
}

export default App;
